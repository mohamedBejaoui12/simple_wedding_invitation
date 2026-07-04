interface OrnamentProps {
  className?: string;
  size?: number;
}

/**
 * A single symmetrical arabesque motif: a central eight-point rosette
 * (mosque-window geometry) with two curling floral tendrils.
 * Reused, mirrored and rotated, across corners and dividers.
 */
export function Ornament({ className, size = 64 }: OrnamentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="0.9" opacity="0.55">
        <path d="M32 6 L37 20 L51 15 L41 26 L54 32 L41 38 L51 49 L37 44 L32 58 L27 44 L13 49 L23 38 L10 32 L23 26 L13 15 L27 20 Z" />
        <circle cx="32" cy="32" r="6.5" />
        <circle cx="32" cy="32" r="11.5" opacity="0.6" />
      </g>
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.4">
        <path d="M4 32 C 10 24, 10 16, 4 8" fill="none" />
        <path d="M4 8 C 8 10, 12 9, 13 5" fill="none" />
        <path d="M60 32 C 54 24, 54 16, 60 8" fill="none" />
        <path d="M60 8 C 56 10, 52 9, 51 5" fill="none" />
      </g>
    </svg>
  );
}
