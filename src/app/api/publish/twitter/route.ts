import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { content } = await req.json();
  const res = await fetch("https://api.twitter.com/2/tweets", {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: content })
  });
  return NextResponse.json(await res.json());
}