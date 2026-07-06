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
 * Fast, simultaneous scale reveal to make it lighter.
 */
export function Reveal({
  children,
  duration = 0.6,
  scaleFrom = 0.96,
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay: 0, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
