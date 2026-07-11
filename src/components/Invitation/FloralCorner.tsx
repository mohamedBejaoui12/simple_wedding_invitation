import type { CSSProperties } from "react";

/**
 * Watercolor-style ivory/cream floral corner illustration.
 * Place bottom-left or bottom-right, partially overlapping the border.
 */
interface FloralCornerProps {
  position: "bl" | "br" | "tl" | "tr";
}

export function FloralCorner({ position }: FloralCornerProps) {
  const isRight = position === "br" || position === "tr";
  const isBottom = position === "bl" || position === "br";

  const style: React.CSSProperties = {
    position: 'absolute',
    width: 'clamp(100px, 22vw, 160px)',
    height: 'clamp(100px, 22vw, 160px)',
    pointerEvents: 'none',
    zIndex: 5,
    ...(isBottom ? { bottom: '-20px' } : { top: '-20px' }),
    ...(isRight  ? { right:  '-18px' } : { left: '-18px' }),
    transform: `scaleX(${isRight ? -1 : 1}) scaleY(${isBottom ? 1 : -1})`,
    opacity: 0.88,
  };

  return (
    <div style={style} aria-hidden="true" className="float-gentle">
      <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id={`floral-${position}-petal`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FDFAF5" />
            <stop offset="60%"  stopColor="#F5EDE0" />
            <stop offset="100%" stopColor="#EDE0CE" stopOpacity="0.6" />
          </radialGradient>
          <radialGradient id={`floral-${position}-leaf`} cx="30%" cy="30%" r="70%">
            <stop offset="0%"   stopColor="#C8D5B0" />
            <stop offset="100%" stopColor="#A8B890" stopOpacity="0.7" />
          </radialGradient>
        </defs>

        {/* Large background flower */}
        {[0,45,90,135,180,225,270,315].map((angle, i) => (
          <ellipse key={i}
            cx={88 + Math.cos(angle*Math.PI/180)*22}
            cy={90 + Math.sin(angle*Math.PI/180)*22}
            rx="18" ry="11"
            fill={`url(#floral-${position}-petal)`}
            stroke="rgba(200,175,140,0.25)" strokeWidth="0.5"
            transform={`rotate(${angle}, ${88 + Math.cos(angle*Math.PI/180)*22}, ${90 + Math.sin(angle*Math.PI/180)*22})`}
            opacity="0.85"
          />
        ))}
        <circle cx="88" cy="90" r="12" fill="#F8F0E4" stroke="rgba(200,169,106,0.2)" strokeWidth="0.5" />
        <circle cx="88" cy="90" r="5" fill="#F2E6D2" opacity="0.9" />

        {/* Small flower top-right */}
        {[0,60,120,180,240,300].map((angle, i) => (
          <ellipse key={i}
            cx={135 + Math.cos(angle*Math.PI/180)*14}
            cy={50  + Math.sin(angle*Math.PI/180)*14}
            rx="12" ry="7"
            fill={`url(#floral-${position}-petal)`}
            stroke="rgba(200,175,140,0.2)" strokeWidth="0.4"
            transform={`rotate(${angle}, ${135 + Math.cos(angle*Math.PI/180)*14}, ${50 + Math.sin(angle*Math.PI/180)*14})`}
            opacity="0.7"
          />
        ))}
        <circle cx="135" cy="50" r="7" fill="#F5EDE0" />
        <circle cx="135" cy="50" r="3" fill="#F0E5D2" opacity="0.8" />

        {/* Tiny bud */}
        {[0,72,144,216,288].map((angle, i) => (
          <ellipse key={i}
            cx={55 + Math.cos(angle*Math.PI/180)*10}
            cy={145 + Math.sin(angle*Math.PI/180)*10}
            rx="8" ry="5"
            fill={`url(#floral-${position}-petal)`}
            transform={`rotate(${angle}, ${55 + Math.cos(angle*Math.PI/180)*10}, ${145 + Math.sin(angle*Math.PI/180)*10})`}
            opacity="0.65"
          />
        ))}
        <circle cx="55" cy="145" r="5" fill="#F5EDE0" opacity="0.8" />

        {/* Leaves */}
        <path d="M50 110 C 30 90, 20 65, 40 50" fill={`url(#floral-${position}-leaf)`} opacity="0.55" />
        <path d="M50 110 C 42 85, 46 62, 60 52" fill={`url(#floral-${position}-leaf)`} opacity="0.45" />
        <path d="M95 130 C 115 115, 140 115, 148 100" fill={`url(#floral-${position}-leaf)`} opacity="0.5" />
        <path d="M95 130 C 110 120, 130 125, 140 118" fill={`url(#floral-${position}-leaf)`} opacity="0.38" />
        <path d="M70 160 C 55 145, 30 145, 20 130" fill={`url(#floral-${position}-leaf)`} opacity="0.42" />

        {/* Stems */}
        <path d="M88 112 C 88 125, 80 138, 70 145" stroke="#B8C898" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M100 112 C 110 122, 128 128, 135 136" stroke="#B8C898" strokeWidth="1" fill="none" opacity="0.45" />
        <path d="M78 110 C 62 120, 50 130, 45 145" stroke="#B8C898" strokeWidth="1" fill="none" opacity="0.45" />

        {/* Berry dots */}
        <circle cx="155" cy="88"  r="3.5" fill="#EDE0CE" opacity="0.65" />
        <circle cx="162" cy="80"  r="2.5" fill="#EDE0CE" opacity="0.5" />
        <circle cx="158" cy="72"  r="2"   fill="#EDE0CE" opacity="0.4" />
      </svg>
    </div>
  );
}
