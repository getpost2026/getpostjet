import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { content } = await req.json();
  const res = await fetch("https://oauth.reddit.com/api/submit", {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.REDDIT_ACCESS_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      sr: 'test', // నీ సబ్‌రెడ్డిట్ పేరు
      kind: 'self',
      title: 'New SaaS Post',
      text: content
    })
  });
  return NextResponse.json(await res.json());
}