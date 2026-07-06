import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { OrnamentCorner } from "./OrnamentCorner";

/**
 * Embossed border frame matching the reference card — a subtle recessed
 * rectangular frame with ornate floral corner pieces.
 */
export function Border() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Outer embossed border line */}
      <motion.div
        className="absolute rounded-[2px]"
        style={{
          inset: '12px',
          boxShadow: `
            inset 0 0 0 3px rgba(165, 145, 110, 0.65),
            inset 0 2px 4px rgba(100, 80, 50, 0.3),
            0 2px 1px rgba(255, 252, 245, 0.8)
          `,
        }}
        initial={reduced ? undefined : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
      />
      
      {/* Inner embossed border line */}
      <motion.div
        className="absolute rounded-[1px]"
        style={{
          inset: '20px',
          boxShadow: `
            inset 0 0 0 1.5px rgba(165, 145, 110, 0.5),
            inset 0 1px 2px rgba(100, 80, 50, 0.2),
            0 1px 1px rgba(255, 252, 245, 0.7)
          `,
        }}
        initial={reduced ? undefined : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
      />

      <OrnamentCorner position="tl" />
      <OrnamentCorner position="tr" />
      <OrnamentCorner position="bl" />
      <OrnamentCorner position="br" />
    </div>
  );
}
