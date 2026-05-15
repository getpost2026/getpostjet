import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { content, imageUrl } = await req.json();
  // 1. Media Container
  const mediaRes = await fetch(`https://graph.threads.net/v1.0/${process.env.THREADS_USER_ID}/threads?media_type=IMAGE&image_url=${imageUrl}&text=${content}&access_token=${process.env.THREADS_TOKEN}`, { method: 'POST' });
  const mediaData = await mediaRes.json();
  // 2. Publish
  const res = await fetch(`https://graph.threads.net/v1.0/${process.env.THREADS_USER_ID}/threads_publish?creation_id=${mediaData.id}&access_token=${process.env.THREADS_TOKEN}`, { method: 'POST' });
  return NextResponse.json(await res.json());
}