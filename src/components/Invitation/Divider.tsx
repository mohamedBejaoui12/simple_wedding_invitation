/** Ornate gold decorative divider — ✦────❋────✦ style */
export function Divider({ slim = false }: { slim?: boolean }) {
  const gap = slim ? "my-4" : "my-6 sm:my-8";
  return (
    <div
      className={`flex items-center justify-center w-full ${gap}`}
      role="separator"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 20"
        style={{ width: '100%', maxWidth: slim ? '200px' : '280px', height: slim ? '12px' : '16px', overflow: 'visible' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left line */}
        <line x1="0" y1="10" x2="118" y2="10" stroke="url(#divGradL)" strokeWidth="0.8" />
        {/* Left diamond */}
        <polygon points="122,10 126,7 130,10 126,13" fill="#C8A96A" opacity="0.8" />
        {/* Center star */}
        <text x="160" y="14.5" textAnchor="middle" fontSize="11" fill="#C8A96A" opacity="0.9" fontFamily="serif">✦</text>
        {/* Right diamond */}
        <polygon points="190,10 194,7 198,10 194,13" fill="#C8A96A" opacity="0.8" />
        {/* Right line */}
        <line x1="202" y1="10" x2="320" y2="10" stroke="url(#divGradR)" strokeWidth="0.8" />
        <defs>
          <linearGradient id="divGradL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C8A96A" stopOpacity="0" />
            <stop offset="100%" stopColor="#C8A96A" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="divGradR" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C8A96A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C8A96A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
