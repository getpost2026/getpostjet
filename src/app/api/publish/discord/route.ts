import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { content, imageUrl } = await req.json();
  const res = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: content,
      embeds: imageUrl ? [{ image: { url: imageUrl } }] : []
    })
  });
  return NextResponse.json({ success: res.ok });
}