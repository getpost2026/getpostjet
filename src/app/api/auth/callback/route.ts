import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  
  if (!code) return NextResponse.json({ error: "Code missing" });

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // 1. Facebook Token Fetch
    const tokenRes = await fetch(
      `https://graph.facebook.com/v18.0/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_FB_ID}&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_REDIRECT_URI!)}&client_secret=${process.env.FACEBOOK_CLIENT_SECRET}&code=${code}`
    );
    const tokenData = await tokenRes.json();

    if (tokenData.access_token) {
      // 2. Save to Supabase
      await supabase.from('accounts').upsert({
        platform: 'facebook',
        access_token: tokenData.access_token,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'platform' });

      // 3. Vercel లో ఇది మిమ్మల్ని పక్కాగా హోమ్ పేజీకి రీడైరెక్ట్ చేస్తుంది
      return NextResponse.redirect(`${origin}/`);
    }
    
    return NextResponse.json({ error: "Auth failed", details: tokenData });
  } catch (e: any) {
    return NextResponse.json({ error: e.message });
  }
}