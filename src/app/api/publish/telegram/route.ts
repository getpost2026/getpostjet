import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const { content, imageUrl } = await req.json();
  const type = imageUrl ? 'sendPhoto' : 'sendMessage';
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/${type}`;
  const body = imageUrl ? { chat_id: process.env.TELEGRAM_CHAT_ID, photo: imageUrl, caption: content } 
                        : { chat_id: process.env.TELEGRAM_CHAT_ID, text: content };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return NextResponse.json(await res.json());
}