import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Built In. Melbourne — High-End Architectural Builder, Bayside Melbourne';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#5f6544',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px 96px',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Top-left wordmark */}
        <div
          style={{
            position: 'absolute',
            top: '72px',
            left: '96px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '2px',
              backgroundColor: 'rgba(235, 228, 218, 0.5)',
              display: 'flex',
            }}
          />
          <span
            style={{
              color: 'rgba(235, 228, 218, 0.7)',
              fontSize: '13px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'Georgia, serif',
            }}
          >
            builtinmelbourne.com.au
          </span>
        </div>

        {/* Bottom content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
          <div
            style={{
              width: '48px',
              height: '2px',
              backgroundColor: 'rgba(235, 228, 218, 0.6)',
              marginBottom: '32px',
              display: 'flex',
            }}
          />
          <span
            style={{
              color: '#ebe4da',
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontFamily: 'Georgia, serif',
            }}
          >
            Built In.
          </span>
          <span
            style={{
              color: '#ebe4da',
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontFamily: 'Georgia, serif',
              marginBottom: '28px',
            }}
          >
            Melbourne.
          </span>
          <span
            style={{
              color: 'rgba(235, 228, 218, 0.72)',
              fontSize: '22px',
              letterSpacing: '0.04em',
              fontFamily: 'Georgia, serif',
            }}
          >
            High-End Architectural Builder &nbsp;·&nbsp; Bayside Melbourne
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
