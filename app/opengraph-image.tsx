import { ImageResponse } from 'next/server';

export const runtime = 'edge';
export const alt = 'The Rare Haus - Luxury Art Gallery & Design Studio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #18181B, #27272A)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            letterSpacing: -1,
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          The Rare Haus
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.8,
            textAlign: 'center',
          }}
        >
          Luxury Art Gallery & Design Studio
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}