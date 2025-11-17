"use client";

import { useEffect, useState } from "react";
import styles from './recruitment.module.css';

type InstaImage = {
  id: string;
  thumbnail: string;
  full: string;
  caption?: string;
  link?: string;
};

export default function InstagramFeed({ handle, initialImages }: { handle?: string; initialImages?: InstaImage[] }) {
  const [images, setImages] = useState<InstaImage[]>(initialImages || []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch images from our local proxy API. The API currently returns placeholder
    // images. Replace the API implementation at /api/instagram to fetch real posts
    // from Instagram (Basic Display API or your server-side cache).
    const url = `/api/instagram${handle ? `?handle=${encodeURIComponent(handle)}` : ''}`;
    setLoading(true);
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load Instagram feed');
        return r.json();
      })
      .then((data: InstaImage[]) => {
        setImages(data);
        setError(null);
      })
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, [handle]);

  if (loading && images.length === 0) return <div className={styles.instaPlaceholder}>Loading feed…</div>;
  if (error) return <div className={styles.instaPlaceholder}>Unable to load Instagram feed</div>;

  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8 }}>
        {images.map((img) => (
          <div key={img.id} style={{ flex: '0 0 120px' }}>
            <img src={img.thumbnail} alt={img.caption ?? 'Instagram image'} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 10, display: 'block' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
