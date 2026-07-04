interface OrnamentCornerProps {
  position: "tl" | "tr" | "bl" | "br";
}

const rotation: Record<OrnamentCornerProps["position"], string> = {
  tl: "rotate(0deg)",
  tr: "rotate(90deg)",
  br: "rotate(180deg)",
  bl: "rotate(-90deg)",
};

const placement: Record<OrnamentCornerProps["position"], React.CSSProperties> = {
  tl: { top: '8px', left: '8px' },
  tr: { top: '8px', right: '8px' },
  br: { bottom: '8px', right: '8px' },
  bl: { bottom: '8px', left: '8px' },
};

/**
 * Elaborate floral corner ornament matching the reference card's embossed
 * corner pieces — lush curling acanthus leaves and vines.
 */
export function OrnamentCorner({ position }: OrnamentCornerProps) {
  return (
    <svg
      viewBox="0 0 180 180"
      style={{
        position: 'absolute',
        ...placement[position],
        transform: rotation[position],
        width: '180px',
        height: '180px',
        color: 'rgba(165, 145, 110, 0.7)',
        filter: 'drop-shadow(0 2px 1px rgba(255,252,245,0.8)) drop-shadow(0 -1px 1px rgba(100,80,50,0.3))',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
      focusable="false"
    >
      {/* Main corner vine sweep */}
      <path
        d="M8 8 C 8 45, 8 80, 8 120"
        stroke="currentColor"
        strokeWidth="3.2"
        opacity="0.9"
        fill="none"
      />
      <path
        d="M8 8 C 45 8, 80 8, 120 8"
        stroke="currentColor"
        strokeWidth="3.2"
        opacity="0.9"
        fill="none"
      />

      {/* Acanthus leaf cluster — top left corner */}
      <path
        d="M10 10 C 35 10, 42 18, 42 30 C 42 44, 30 48, 22 44 C 14 40, 10 32, 10 22"
        stroke="currentColor"
        strokeWidth="2.4"
        opacity="0.8"
        fill="none"
      />
      <path
        d="M15 12 C 30 14, 35 22, 34 30 C 33 36, 26 38, 22 35"
        stroke="currentColor"
        strokeWidth="1.8"
        opacity="0.6"
        fill="none"
      />

      {/* Second leaf — curling down */}
      <path
        d="M22 44 C 30 55, 28 70, 18 75 C 10 78, 6 70, 8 60"
        stroke="currentColor"
        strokeWidth="2.0"
        opacity="0.75"
        fill="none"
      />
      
      {/* Leaf veins */}
      <path
        d="M18 48 C 22 56, 22 64, 16 68"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.5"
        fill="none"
      />

      {/* Third leaf — curling right */}
      <path
        d="M42 30 C 55 28, 68 35, 70 48 C 72 58, 64 62, 56 58"
        stroke="currentColor"
        strokeWidth="2.0"
        opacity="0.75"
        fill="none"
      />

      {/* Small bud elements */}
      <circle cx="10" cy="10" r="5" fill="currentColor" opacity="0.6" />
      <circle cx="30" cy="30" r="3.5" fill="currentColor" opacity="0.5" />
      <circle cx="50" cy="50" r="2.5" fill="currentColor" opacity="0.4" />
      
      {/* Delicate scroll along the top edge */}
      <path
        d="M55 10 C 62 18, 72 18, 78 12 C 84 6, 94 8, 98 16"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.6"
        fill="none"
      />
      <path
        d="M98 16 C 102 24, 112 22, 116 14"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.5"
        fill="none"
      />

      {/* Delicate scroll along the left edge */}
      <path
        d="M10 55 C 18 62, 18 72, 12 78 C 6 84, 8 94, 16 98"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.6"
        fill="none"
      />
      <path
        d="M16 98 C 24 102, 22 112, 14 116"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.5"
        fill="none"
      />

      {/* Tiny flower accents */}
      <circle cx="78" cy="12" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="12" cy="78" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
