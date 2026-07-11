import { useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { InvitationFront } from "./InvitationFront";
import { InvitationBack } from "./InvitationBack";

export function InvitationCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const reduced = useReducedMotion();

  const flipButton = (
    <button
      className="flip-button"
      onClick={(e) => {
        e.stopPropagation();
        setIsFlipped(f => !f);
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(80,55,30,0.18), 0 1px 2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(80,55,30,0.12), 0 1px 2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)';
      }}
      onPointerDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.96)';
      }}
      onPointerUp={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <span style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)', 
        transform: isFlipped ? 'rotate(-180deg)' : 'rotate(0deg)' 
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold, #c8a96a)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      </span>
      {isFlipped ? 'Back to Front' : 'View Details'}
    </button>
  );

  return (
    <>
      {/* Responsive styles for flip button + mobile Safari 3D fixes */}
      <style>{`
        /* ── Mobile Safari backface-visibility fix ── */
        .card-face {
          grid-area: 1 / 1;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform-style: flat;
          transform-style: flat;
          will-change: transform;
        }
        .card-face--front {
          transform: translateZ(1px);
          -webkit-transform: translateZ(1px);
          z-index: 2;
        }
        .card-face--back {
          transform: rotateY(180deg) translateZ(1px);
          -webkit-transform: rotateY(180deg) translateZ(1px);
          z-index: 1;
        }
        .card-flipper {
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
        }

        .flip-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 36px;
          border-radius: 40px;
          border: 1px solid rgba(200,169,106,0.3);
          background: rgba(255, 255, 255, 0.85);
          color: var(--color-brown-dark, #50371e);
          font-family: var(--font-english, sans-serif);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(80,55,30,0.12), 0 1px 2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
          -webkit-appearance: none;
          -webkit-tap-highlight-color: transparent;
          z-index: 9999;
          position: relative;
        }

        .flip-button:hover {
          transform: translateY(-3px);
        }

        .flip-button-flow {
          display: flex;
          justify-content: center;
          padding: 24px 0 16px;
        }
      `}</style>

      <div
        className="relative w-full"
        style={{ perspective: '2200px' }}
      >

        <motion.div
          className="card-flipper"
          style={{
            display: 'grid',
            transformOrigin: 'center center',
          }}
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{
            rotateY: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            opacity:  { duration: 0.8, ease: 'easeOut' },
            y:        { duration: 0.8, ease: 'easeOut' },
          }}
        >
          {/* Front */}
          <div 
            className="card-face card-face--front"
            style={{
              pointerEvents: isFlipped ? 'none' : 'auto',
              zIndex: isFlipped ? 1 : 2
            }}
          >
            <InvitationFront />
          </div>
          {/* Back */}
          <div 
            className="card-face card-face--back"
            style={{
              pointerEvents: isFlipped ? 'auto' : 'none',
              zIndex: isFlipped ? 2 : 1
            }}
          >
            <InvitationBack />
          </div>
        </motion.div>

        {/* Inline button below card for small screens */}
        <div className="flip-button-flow">
          {flipButton}
        </div>
      </div>
    </>
  );
}

