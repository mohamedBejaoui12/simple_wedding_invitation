import type { CSSProperties } from "react";

/**
 * Ornate Islamic corner ornament — arabesque floral motif in champagne gold.
 */
interface OrnamentCornerProps {
  position: "tl" | "tr" | "bl" | "br";
  size?: number;
}

const rotation: Record<OrnamentCornerProps["position"], string> = {
  tl: "rotate(0deg)",
  tr: "rotate(90deg)",
  br: "rotate(180deg)",
  bl: "rotate(270deg)",
};

const placement: Record<OrnamentCornerProps["position"], CSSProperties> = {
  tl: { top: '6px', left: '6px' },
  tr: { top: '6px', right: '6px' },
  br: { bottom: '6px', right: '6px' },
  bl: { bottom: '6px', left: '6px' },
};

export function OrnamentCorner({ position, size = 160 }: OrnamentCornerProps) {
  return (
    <svg
      viewBox="0 0 160 160"
      style={{
        position: 'absolute',
        ...placement[position],
        transform: rotation[position],
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: 'none',
        overflow: 'visible',
        filter: 'drop-shadow(0 1px 0.5px rgba(255,249,240,0.8)) drop-shadow(0 -0.5px 0.5px rgba(107,76,42,0.2))',
      }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`cornerGold-${position}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DFC28A" />
          <stop offset="50%" stopColor="#C8A96A" />
          <stop offset="100%" stopColor="#A8884A" />
        </linearGradient>
      </defs>
      <g
        stroke={`url(#cornerGold-${position})`}
        fill="none"

        strokeLinecap="round"
      >
        {/* Main border lines */}
        <path d="M8 8 L8 110" strokeWidth="2.5" opacity="0.85" />
        <path d="M8 8 L110 8" strokeWidth="2.5" opacity="0.85" />

        {/* Inner border lines */}
        <path d="M16 16 L16 90" strokeWidth="1" opacity="0.5" />
        <path d="M16 16 L90 16" strokeWidth="1" opacity="0.5" />

        {/* Corner jewel */}
        <circle cx="8" cy="8" r="5.5" strokeWidth="1.5" fill={`url(#cornerGold-${position})`} opacity="0.9" />
        <circle cx="8" cy="8" r="2.5" fill="#FDF8F2" opacity="0.7" />

        {/* Arabesque corner flourish */}
        <path d="M22 8 C 30 8, 36 14, 36 22 C 36 30, 42 36, 50 34 C 42 46, 30 40, 22 32 C 14 24, 16 14, 22 8 Z"
          strokeWidth="1.2" opacity="0.75" fill={`url(#cornerGold-${position})`} fillOpacity="0.08" />

        {/* Curling vine along top */}
        <path d="M40 10 C 55 5, 70 5, 80 10 C 90 15, 100 12, 108 8"
          strokeWidth="1" opacity="0.55" />
        <path d="M60 9 C 65 3, 73 3, 75 8" strokeWidth="0.8" opacity="0.4" />

        {/* Curling vine along left */}
        <path d="M10 40 C 5 55, 5 70, 10 80 C 15 90, 12 100, 8 108"
          strokeWidth="1" opacity="0.55" />
        <path d="M9 60 C 3 65, 3 73, 8 75" strokeWidth="0.8" opacity="0.4" />

        {/* Small leaf buds top */}
        <ellipse cx="60" cy="7" rx="5" ry="3" strokeWidth="0.7" opacity="0.45" transform="rotate(20 60 7)" />
        <ellipse cx="80" cy="7" rx="4" ry="2.5" strokeWidth="0.7" opacity="0.35" transform="rotate(-15 80 7)" />

        {/* Small leaf buds left */}
        <ellipse cx="7" cy="60" rx="3" ry="5" strokeWidth="0.7" opacity="0.45" transform="rotate(20 7 60)" />
        <ellipse cx="7" cy="80" rx="2.5" ry="4" strokeWidth="0.7" opacity="0.35" transform="rotate(-15 7 80)" />

        {/* Geometric accent dots */}
        <circle cx="40" cy="8" r="1.8" fill={`url(#cornerGold-${position})`} strokeWidth="0" opacity="0.7" />
        <circle cx="8" cy="40" r="1.8" fill={`url(#cornerGold-${position})`} strokeWidth="0" opacity="0.7" />
        <circle cx="108" cy="8" r="1.5" fill={`url(#cornerGold-${position})`} strokeWidth="0" opacity="0.5" />
        <circle cx="8" cy="108" r="1.5" fill={`url(#cornerGold-${position})`} strokeWidth="0" opacity="0.5" />
      </g>
    </svg>
  );
}
