import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { content } = await req.json();
  const res = await fetch(`https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_ID}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: process.env.TEST_PHONE_NUMBER,
      type: "text",
      text: { body: content }
    })
  });
  return NextResponse.json(await res.json());
}