import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { content, imageUrl } = await req.json();
  // YouTube API కి OAuth 2.0 అవసరం. ఇది వీడియో అప్‌లోడ్ కోసం:
  const res = await fetch("https://www.googleapis.com/upload/youtube/v3/videos?part=snippet,status", {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${process.env.YOUTUBE_ACCESS_TOKEN}` },
    body: JSON.stringify({
      snippet: { title: "New Video", description: content },
      status: { privacyStatus: "public" }
    })
  });
  return NextResponse.json(await res.json());
}