import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

/**
 * A single content block within the invitation (Basmala, verse, names...).
 * Uses <section> for semantic structure and consistent vertical rhythm.
 */
export function Section({ children, className = "", ariaLabel }: SectionProps) {
  return (
    <section
      aria-label={ariaLabel}
      className={`w-full flex flex-col items-center text-center py-6 sm:py-8 md:py-10 ${className}`}
    >
      {children}
    </section>
  );
}
