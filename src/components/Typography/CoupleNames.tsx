import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { Reveal } from "../ui/Reveal";

/**
 * Couple names — the visual centerpiece, inside a faded Islamic mandala.
 */
export function CoupleNames() {
  const reduced = useReducedMotion();
  return (
    <div className="flex flex-col items-center" style={{ position: 'relative', paddingTop: '16px', paddingBottom: '16px' }}>
      {/* Faded mandala behind names */}
      <svg
        viewBox="0 0 320 320"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(340px, 90%)',
          height: 'min(340px, 90%)',
          color: 'rgba(200, 169, 106, 0.12)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <g transform="translate(160,160)" stroke="currentColor" fill="none">
          <circle r="148" strokeWidth="0.8" opacity="0.6" />
          <circle r="130" strokeWidth="0.5" opacity="0.45" />
          <circle r="108" strokeWidth="0.4" opacity="0.35" />
          <circle r="80"  strokeWidth="0.4" opacity="0.28" />
          <circle r="52"  strokeWidth="0.3" opacity="0.22" />
          {/* 16-point star */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * 148;
            const y = Math.sin(rad) * 148;
            return <line key={i} x1="0" y1="0" x2={x} y2={y} strokeWidth="0.3" opacity="0.18" />;
          })}
          {/* 8-point petals */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45) * Math.PI / 180;
            const cx = Math.cos(angle) * 100;
            const cy = Math.sin(angle) * 100;
            return <ellipse key={i} cx={cx} cy={cy} rx="22" ry="10" strokeWidth="0.5" opacity="0.3"
              transform={`rotate(${i * 45} ${cx} ${cy})`} />;
          })}
        </g>
      </svg>

      {/* Names */}
      <Reveal duration={0.7} scaleFrom={0.95}>
        <div className="flex flex-col items-center" style={{ position: 'relative', zIndex: 1, gap: '4px' }}>
          <h1 className="text-names emboss-text" lang="ar" dir="rtl">
            علي
          </h1>
          {/* Gold "and" separator */}
          <div className="flex items-center gap-4" style={{ margin: '4px 0' }}>
            <span style={{
              display: 'block', height: '1px', width: '48px',
              background: 'linear-gradient(to right, transparent, rgba(200,169,106,0.6))'
            }} />
            <span className="text-and">و</span>
            <span style={{
              display: 'block', height: '1px', width: '48px',
              background: 'linear-gradient(to left, transparent, rgba(200,169,106,0.6))'
            }} />
          </div>
          <h1 className="text-names emboss-text" lang="ar" dir="rtl">
            هبة
          </h1>
        </div>
      </Reveal>
    </div>
  );
}
