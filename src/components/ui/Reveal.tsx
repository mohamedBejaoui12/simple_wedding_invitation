import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  scaleFrom?: number;
  className?: string;
}

/**
 * Slow scale + opacity reveal, used for the border draw-in and ornament
 * bloom moments where a fade alone would feel too flat.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 1.8,
  scaleFrom = 0.94,
  className,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: scaleFrom }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
