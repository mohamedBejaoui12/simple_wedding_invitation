import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { FadeIn } from "../ui/FadeIn";

/**
 * Islamic mosque arch surrounding the Basmala — gold embossed SVG.
 */
export function Basmala() {
  const reduced = useReducedMotion();
  return (
    <FadeIn duration={0.8} y={12}>
      <div className="flex flex-col items-center" style={{ position: 'relative', paddingTop: '8px' }}>
        {/* Arch SVG */}
        <motion.svg
          viewBox="0 0 320 200"
          style={{ width: '100%', maxWidth: '340px', overflow: 'visible', marginBottom: '-12px' }}
          fill="none"
          initial={reduced ? undefined : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <defs>
            <linearGradient id="archGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#DFC28A" />
              <stop offset="40%" stopColor="#C8A96A" />
              <stop offset="100%" stopColor="#A8884A" />
            </linearGradient>
            <filter id="archGlow">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#C8A96A" floodOpacity="0.3" />
              <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodColor="#FFF9F0" floodOpacity="0.8" />
            </filter>
          </defs>
          {/* Main pointed arch */}
          <path
            d="M30 200 L30 110 C30 50, 80 10, 160 4 C240 10, 290 50, 290 110 L290 200"
            stroke="url(#archGold)" strokeWidth="2.2" filter="url(#archGlow)" opacity="0.9"
          />
          {/* Inner arch line */}
          <path
            d="M44 200 L44 114 C44 62, 90 26, 160 20 C230 26, 276 62, 276 114 L276 200"
            stroke="url(#archGold)" strokeWidth="0.9" opacity="0.5"
          />
          {/* Arch tip decoration */}
          <circle cx="160" cy="6" r="4" fill="#C8A96A" opacity="0.85" />
          <circle cx="160" cy="6" r="7" stroke="#C8A96A" strokeWidth="0.8" opacity="0.45" />
          {/* Left column capital */}
          <rect x="22" y="188" width="16" height="3" rx="1" fill="#C8A96A" opacity="0.75" />
          <rect x="24" y="182" width="12" height="6" rx="1" fill="#C8A96A" opacity="0.5" />
          {/* Right column capital */}
          <rect x="282" y="188" width="16" height="3" rx="1" fill="#C8A96A" opacity="0.75" />
          <rect x="284" y="182" width="12" height="6" rx="1" fill="#C8A96A" opacity="0.5" />
          {/* Tiny arch ornament nodes */}
          <circle cx="30"  cy="110" r="2.5" fill="#C8A96A" opacity="0.65" />
          <circle cx="290" cy="110" r="2.5" fill="#C8A96A" opacity="0.65" />
          {/* Side decorative diamonds */}
          <polygon points="8,130 13,124 18,130 13,136" fill="#C8A96A" opacity="0.50" />
          <polygon points="302,130 307,124 312,130 307,136" fill="#C8A96A" opacity="0.50" />
        </motion.svg>

        {/* Basmala text inside the arch */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 40px' }}>
          <p
            className="text-basmala emboss-text"
            lang="ar"
            dir="rtl"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
