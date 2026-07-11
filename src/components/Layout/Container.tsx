import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen px-2 py-4 sm:py-6 md:py-8 flex justify-center">
      <div
        className="w-full flex flex-col justify-center"
        style={{
          maxWidth: '620px',
          perspective: '2000px',
        }}
      >
        {children}
      </div>
    </div>
  );
}
