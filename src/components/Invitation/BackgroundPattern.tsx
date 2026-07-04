/**
 * A large embossed floral/arabesque medallion centered behind the card,
 * emulating the ornate raised pattern visible in the reference card.
 * Uses very subtle opacity to appear as a pressed/embossed paper texture.
 */
export function BackgroundPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Central large medallion */}
      <svg
        viewBox="0 0 600 800"
        className="absolute left-1/2 top-1/2 h-[100%] w-[90%] -translate-x-1/2 -translate-y-1/2"
        style={{
          color: 'rgba(200, 185, 155, 0.35)',
          filter: 'drop-shadow(0 1px 0 rgba(255,252,245,0.6)) drop-shadow(0 -0.5px 0.5px rgba(140,120,90,0.12))',
        }}
      >
        <defs>
          {/* Floral/scroll repeat motif */}
          <pattern id="floralPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Central rosette */}
            <circle cx="60" cy="60" r="28" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="60" cy="60" r="18" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
            <circle cx="60" cy="60" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
            
            {/* 8-point star inside rosette */}
            <polygon 
              points="60,35 65,50 80,50 68,59 73,75 60,65 47,75 52,59 40,50 55,50" 
              fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25"
            />
            
            {/* Curling vine elements */}
            <path d="M60 32 C 75 20, 95 25, 100 45" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
            <path d="M60 32 C 45 20, 25 25, 20 45" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
            <path d="M60 88 C 75 100, 95 95, 100 75" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
            <path d="M60 88 C 45 100, 25 95, 20 75" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
            
            {/* Small leaf accents */}
            <path d="M88 60 C 95 50, 105 55, 100 65" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
            <path d="M32 60 C 25 50, 15 55, 20 65" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
            
            {/* Corner dots */}
            <circle cx="0" cy="0" r="2" fill="currentColor" opacity="0.15" />
            <circle cx="120" cy="0" r="2" fill="currentColor" opacity="0.15" />
            <circle cx="0" cy="120" r="2" fill="currentColor" opacity="0.15" />
            <circle cx="120" cy="120" r="2" fill="currentColor" opacity="0.15" />
          </pattern>
        </defs>

        {/* Main embossed pattern field */}
        <rect x="40" y="60" width="520" height="680" rx="4" fill="url(#floralPattern)" />
        
        {/* Central large medallion overlay */}
        <g transform="translate(300, 420)" fill="none" stroke="currentColor">
          <circle r="160" strokeWidth="1" opacity="0.2" />
          <circle r="140" strokeWidth="0.8" opacity="0.15" />
          <circle r="120" strokeWidth="0.6" opacity="0.12" />
          <circle r="80" strokeWidth="0.5" opacity="0.1" />
          
          {/* 8-point star medallion */}
          <polygon 
            points="0,-130 35,-55 110,-75 60,-20 110,35 35,20 0,100 -35,20 -110,35 -60,-20 -110,-75 -35,-55" 
            strokeWidth="0.7" opacity="0.12"
          />
        </g>
      </svg>

      {/* Top floral border accent — denser near edges like the reference */}
      <svg
        viewBox="0 0 400 60"
        className="absolute top-6 left-1/2 -translate-x-1/2 w-[80%]"
        style={{ color: 'rgba(190, 175, 145, 0.3)' }}
        preserveAspectRatio="xMidYMid meet"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.7">
          <path d="M50 30 C 80 10, 120 10, 150 30 C 180 50, 220 50, 250 30 C 280 10, 320 10, 350 30" opacity="0.4" />
          <path d="M30 30 C 60 5, 100 5, 130 30 C 160 55, 200 55, 230 30 C 260 5, 300 5, 330 30 C 360 55, 380 40, 370 30" opacity="0.25" />
          {/* Small leaf clusters */}
          <path d="M100 20 C 105 10, 115 12, 112 22" opacity="0.3" />
          <path d="M200 40 C 205 48, 215 46, 210 38" opacity="0.3" />
          <path d="M300 20 C 295 10, 285 12, 288 22" opacity="0.3" />
        </g>
      </svg>

      {/* Bottom floral border accent */}
      <svg
        viewBox="0 0 400 60"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%]"
        style={{ color: 'rgba(190, 175, 145, 0.3)', transform: 'translateX(-50%) scaleY(-1)' }}
        preserveAspectRatio="xMidYMid meet"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.7">
          <path d="M50 30 C 80 10, 120 10, 150 30 C 180 50, 220 50, 250 30 C 280 10, 320 10, 350 30" opacity="0.4" />
          <path d="M30 30 C 60 5, 100 5, 130 30 C 160 55, 200 55, 230 30 C 260 5, 300 5, 330 30 C 360 55, 380 40, 370 30" opacity="0.25" />
          <path d="M100 20 C 105 10, 115 12, 112 22" opacity="0.3" />
          <path d="M200 40 C 205 48, 215 46, 210 38" opacity="0.3" />
          <path d="M300 20 C 295 10, 285 12, 288 22" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}
