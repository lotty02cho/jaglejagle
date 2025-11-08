'use client';
export default function CreativeLogo({ size = 64 }: { size?: number }) {
  const s = `${size}`;
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="자글자글 로고">
      <defs>
        <radialGradient id="g1" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id="ink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* glow background */}
      <circle cx="32" cy="32" r="28" fill="url(#g1)" />
      {/* paper sheet */}
      <rect x="18" y="14" width="28" height="36" rx="4" fill="#fff" stroke="#93c5fd" strokeWidth="2" />
      <rect x="22" y="20" width="20" height="3" rx="1.5" fill="#bfdbfe" />
      <rect x="22" y="27" width="14" height="3" rx="1.5" fill="#bfdbfe" />
      <rect x="22" y="34" width="20" height="3" rx="1.5" fill="#bfdbfe" />
      {/* pen nib */}
      <path d="M44 44 L52 52 L48 56 L40 48 Z" fill="url(#ink)" opacity="0.85" />
      <circle cx="44" cy="44" r="2" fill="#fff" />
      {/* sparkles */}
      <path d="M14 18 l3 1 l-3 1 l-1 3 l-1 -3 l-3 -1 l3 -1 l1 -3 z" fill="#93c5fd" />
      <path d="M50 18 l2 0.8 l-2 0.8 l-0.8 2 l-0.8 -2 l-2 -0.8 l2 -0.8 l0.8 -2 z" fill="#60a5fa" />
    </svg>
  );
}

