import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}

/**
 * Fast, simultaneous fade-in animation to make it lighter.
 */
export function FadeIn({
  children,
  duration = 0.6,
  y = 10,
  className,
  as = "div",
}: FadeInProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay: 0, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
