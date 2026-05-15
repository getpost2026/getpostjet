import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const { content, imageUrl } = await req.json();
  const url = `https://graph.facebook.com/${process.env.FB_PAGE_ID}/photos?url=${imageUrl}&caption=${content}&access_token=${process.env.FB_ACCESS_TOKEN}`;
  const res = await fetch(url, { method: 'POST' });
  return NextResponse.json(await res.json());
}