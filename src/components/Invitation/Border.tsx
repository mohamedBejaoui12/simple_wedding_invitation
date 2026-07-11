import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { OrnamentCorner } from "./OrnamentCorner";

/**
 * Ornate Islamic double-border frame with gold embossed effect.
 * Outer border + inner border + arabesque corners.
 */
export function Border() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 rounded-[4px]" aria-hidden="true">
      {/* Outer gold border */}
      <motion.div
        className="absolute rounded-[3px]"
        style={{
          inset: '10px',
          boxShadow: `
            inset 0 0 0 1px rgba(200, 169, 106, 0.70),
            inset 0 0 0 2px rgba(200, 169, 106, 0.15),
            0 1px 0 rgba(255, 252, 245, 0.90),
            0 -1px 0 rgba(140, 110, 70, 0.10)
          `,
          background: 'linear-gradient(to bottom right, rgba(200,169,106,0.05), transparent 50%, rgba(200,169,106,0.03))',
        }}
        initial={reduced ? undefined : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      />

      {/* Inner thin border */}
      <motion.div
        className="absolute rounded-[2px]"
        style={{
          inset: '18px',
          boxShadow: `
            inset 0 0 0 0.75px rgba(200, 169, 106, 0.45),
            0 1px 0 rgba(255, 253, 248, 0.70)
          `,
        }}
        initial={reduced ? undefined : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.15, ease: "easeOut" }}
      />

      {/* Corner ornaments */}
      <OrnamentCorner position="tl" size={140} />
      <OrnamentCorner position="tr" size={140} />
      <OrnamentCorner position="bl" size={140} />
      <OrnamentCorner position="br" size={140} />
    </div>
  );
}
