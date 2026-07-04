import type { ReactNode } from "react";

export function EmbossEffect({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`emboss-text ${className}`}>{children}</div>;
}
