/**
 * Luxury background — subtle Islamic arabesque watermark + radial warmth.
 */
export function BackgroundPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[4px]" aria-hidden="true">
      {/* Radial warmth center glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 42%, rgba(200,169,106,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Central medallion watermark */}
      <svg
        viewBox="0 0 400 500"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '85%',
          height: '85%',
          color: 'rgba(200, 169, 106, 0.09)',
          pointerEvents: 'none',
        }}
      >
        <defs>
          <pattern id="arabPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* Central 8-petal rosette */}
            <circle cx="40" cy="40" r="22" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
            <circle cx="40" cy="40" r="14" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.35" />
            <circle cx="40" cy="40" r="6"  fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
            {/* 8-point star */}
            <path d="M40 20 L43 33 L55 28 L46 38 L58 43 L45 44 L48 57 L40 48 L32 57 L35 44 L22 43 L34 38 L25 28 L37 33 Z"
              fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
            {/* Corner connections */}
            <path d="M40 18 C48 10, 72 10, 80 18" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
            <path d="M40 18 C32 10, 8 10, 0 18" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
            <path d="M40 62 C48 70, 72 70, 80 62" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
            <path d="M40 62 C32 70, 8 70, 0 62" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
          </pattern>
        </defs>
        {/* Pattern fill */}
        <rect x="0" y="0" width="400" height="500" fill="url(#arabPattern)" />
        {/* Large central medallion overlay */}
        <g transform="translate(200, 250)" fill="none" stroke="currentColor">
          <circle r="140" strokeWidth="0.8" opacity="0.4" />
          <circle r="115" strokeWidth="0.5" opacity="0.28" />
          <circle r="88"  strokeWidth="0.4" opacity="0.22" />
          <circle r="55"  strokeWidth="0.3" opacity="0.18" />
          {/* 12-point star */}
          <path
            d="M0,-110 L14,-48 L55,-88 L22,-32 L88,0 L22,32 L55,88 L14,48 L0,110 L-14,48 L-55,88 L-22,32 L-88,0 L-22,-32 L-55,-88 L-14,-48 Z"
            strokeWidth="0.5" opacity="0.22"
          />
        </g>
      </svg>

      {/* Soft top edge fade */}
      <div style={{
        position: 'absolute', inset: '18px 18px auto 18px', height: '40px',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)',
      }} />
    </div>
  );
}
