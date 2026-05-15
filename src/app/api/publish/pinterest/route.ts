import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { content, imageUrl } = await req.json();
  const res = await fetch("https://api.pinterest.com/v5/pins", {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.PINTEREST_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: "New SaaS Post",
      description: content,
      media_source: {
        source_type: "image_url",
        url: imageUrl
      },
      board_id: process.env.PINTEREST_BOARD_ID
    })
  });
  return NextResponse.json(await res.json());
}