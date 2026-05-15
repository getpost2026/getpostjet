import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const { content } = await req.json();
  const res = await fetch(process.env.SLACK_WEBHOOK!, {
    method: 'POST',
    body: JSON.stringify({ text: content })
  });
  return NextResponse.json({ success: res.ok });
}