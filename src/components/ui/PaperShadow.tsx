import type { ReactNode } from "react";

interface PaperShadowProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps content in the shared "engraved panel" depth treatment:
 * a soft inner shadow that reads as a recessed, pressed-paper area.
 */
export function PaperShadow({ children, className = "" }: PaperShadowProps) {
  return <div className={`engraved-panel ${className}`}>{children}</div>;
}
