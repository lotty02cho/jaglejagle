'use client';
export default function CreativeLogo({ size = 64 }: { size?: number }) {
  const s = `${size}`;
  return (
    <svg width={s} height={s} viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="자글자글 로고">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
        </radialGradient>
        <linearGradient id="potBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="book" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="soup" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* glow background */}
      <circle cx="48" cy="48" r="44" fill="url(#bgGlow)" />

      {/* steam (자글자글 느낌: 물결/증기) */}
      <g fill="#93c5fd" opacity="0.8">
        <path d="M26 22 q6 -8 0 -16" stroke="#93c5fd" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M36 20 q6 -8 0 -16" stroke="#bfdbfe" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M60 22 q6 -8 0 -16" stroke="#93c5fd" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M70 20 q6 -8 0 -16" stroke="#bfdbfe" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* notebook pages partially dipped in broth */}
      <g transform="translate(18,18) rotate(-8 30 18)">
        <rect x="22" y="10" width="28" height="22" rx="3" fill="url(#book)" stroke="#cbd5e1" />
        <line x1="27" y1="16" x2="45" y2="16" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" />
        <line x1="27" y1="21" x2="43" y2="21" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" />
        <line x1="27" y1="26" x2="48" y2="26" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" />
        {/* bookmark */}
        <path d="M49 10 v10 l-4 -3 l-4 3 v-10" fill="#60a5fa" opacity="0.9" />
      </g>

      {/* pot */}
      {/* rim */}
      <ellipse cx="48" cy="46" rx="30" ry="8" fill="#1e3a8a" opacity="0.25" />
      <ellipse cx="48" cy="44" rx="30" ry="7" fill="#dbeafe" />
      {/* broth */}
      <ellipse cx="48" cy="46" rx="28" ry="6" fill="url(#soup)" />
      {/* body */}
      <rect x="18" y="46" width="60" height="20" rx="8" fill="url(#potBody)" />
      {/* handles */}
      <rect x="10" y="50" width="10" height="12" rx="6" fill="#1e40af" />
      <rect x="76" y="50" width="10" height="12" rx="6" fill="#1e40af" />

      {/* bubbles */}
      <g fill="#bfdbfe" opacity="0.9">
        <circle cx="38" cy="44" r="2" />
        <circle cx="45" cy="43" r="1.6" />
        <circle cx="53" cy="44" r="2.2" />
        <circle cx="50" cy="41" r="1.4" />
      </g>

      {/* heat shimmer at bottom (자글자글) */}
      <g opacity="0.9" fill="#60a5fa">
        <path d="M22 70 q4 3 8 0 t8 0 t8 0 t8 0 t8 0" opacity="0.5" />
      </g>
    </svg>
  );
}
