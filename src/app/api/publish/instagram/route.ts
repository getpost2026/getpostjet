import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { content, imageUrl } = await req.json();
  try {
    // Step 1: Container క్రియేట్ చేయడం
    const containerUrl = `https://graph.facebook.com/v19.0/${process.env.INSTA_ID}/media?image_url=${imageUrl}&caption=${content}&access_token=${process.env.FB_ACCESS_TOKEN}`;
    const containerRes = await fetch(containerUrl, { method: 'POST' });
    const containerData = await containerRes.json();

    // Step 2: పబ్లిష్ చేయడం
    const publishUrl = `https://graph.facebook.com/v19.0/${process.env.INSTA_ID}/media_publish?creation_id=${containerData.id}&access_token=${process.env.FB_ACCESS_TOKEN}`;
    const res = await fetch(publishUrl, { method: 'POST' });
    
    return NextResponse.json(await res.json());
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}