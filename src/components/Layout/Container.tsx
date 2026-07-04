import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen px-4 py-8 sm:py-12 md:py-16 flex justify-center">
      <div 
        className="w-full max-w-[520px] sm:max-w-[560px] md:max-w-[600px] lg:max-w-[640px] flex flex-col justify-center"
        style={{ perspective: '1200px' }}
      >
        {children}
      </div>
    </div>
  );
}
