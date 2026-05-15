import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. ఫ్రంటెండ్ నుండి వచ్చిన డేటా
    const body = await request.json();
    const { content, selectedPlatforms }: { content: string; selectedPlatforms: string[] } = body;

    if (!content || !selectedPlatforms || selectedPlatforms.length === 0) {
      return NextResponse.json({ error: "Content or Platforms missing" }, { status: 400 });
    }

    // 2. సుపాబేస్ కనెక్షన్
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const results = [];

    // 3. ప్రతి ప్లాట్‌ఫారమ్‌కి పోస్ట్ పంపడం
    for (const platform of selectedPlatforms) {
      // డేటాబేస్ నుండి టోకెన్ తెచ్చుకోవడం
      const { data: acc, error: dbError } = await supabase
        .from('accounts')
        .select('access_token')
        .eq('platform', platform)
        .single();

      if (dbError || !acc) {
        results.push({ platform, status: 'Failed', message: 'Account not connected in DB' });
        continue;
      }

      if (platform === 'facebook') {
        const fbRes = await fetch(`https://graph.facebook.com/v18.0/me/feed`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: content,
            access_token: acc.access_token,
          }),
        });
        
        const fbData = await fbRes.json();
        results.push({ platform, status: fbRes.ok ? 'Success' : 'Failed', data: fbData });
      }
      
      // ఇక్కడ మీరు వేరే ప్లాట్‌ఫారమ్స్ (LinkedIn, etc.) లాజిక్ కూడా యాడ్ చేయవచ్చు
    }

    return NextResponse.json({ results });

  } catch (error: any) {
    console.error("Publish API Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}