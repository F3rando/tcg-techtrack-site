import { NextResponse } from 'next/server';

// Simple server route that returns a list of Instagram-like image objects.
// By default this returns placeholder images. Replace the implementation below
// with a server-side call to Instagram's Basic Display API (or a cached mirror)
// using server environment variables for tokens.

export async function GET(request: Request) {
  const url = new URL(request.url);
  const handle = url.searchParams.get('handle') || 'tcg-placeholder';

  // Placeholder images — you can replace these with real URLs fetched from Instagram.
  const profileUrl = `https://www.instagram.com/${encodeURIComponent(handle.replace(/^@/, ''))}/?hl=en`;
  const images = Array.from({ length: 8 }).map((_, i) => ({
    id: `${handle}-img-${i}`,
    thumbnail: `https://via.placeholder.com/300x300?text=${encodeURIComponent(handle)}+${i+1}`,
    full: `https://via.placeholder.com/1200x1200?text=${encodeURIComponent(handle)}+${i+1}`,
    caption: `${handle} example image ${i + 1}`,
    link: null,
  }));

  // Example: if you want to proxy a real Instagram request, do it here server-side.
  // DO NOT call Instagram APIs directly from client-side code — Instagram enforces CORS
  // and requires access tokens. Instead, store your access_token on the server and
  // fetch user media from the Basic Display API and return the small set of fields you need.

  return NextResponse.json(images);
}
