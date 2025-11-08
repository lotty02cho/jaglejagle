'use client';
import { useState } from 'react';
import CreativeLogo from './CreativeLogo';

export default function WritingStepsGif() {
  const [broken, setBroken] = useState(false);
  return (
    <div className="relative w-full max-w-md aspect-square">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 shadow-lg" />
      <div className="absolute inset-4 rounded-2xl bg-white/80 backdrop-blur border border-blue-100 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
        {/* 배경의 희미한 냄비+노트 아이콘 */}
        <div className="absolute inset-6 opacity-15 pointer-events-none select-none hidden sm:block">
          <CreativeLogo size={300} />
        </div>
        {/* 실제 GIF */}
        {!broken ? (
          <img
            src="/steps-demo.gif"
            alt="글쓰기 4단계 데모 GIF"
            className="relative z-10 w-full h-full object-cover rounded-xl shadow"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="relative z-10 text-center text-sm text-gray-500 p-6">
            GIF를 public/steps-demo.gif로 추가하면 여기 표시됩니다.
            <div className="mt-2 text-[11px]">권장: 정사각형(예: 800x800), 반복(loop) 설정</div>
          </div>
        )}
      </div>
      {/* 장식 요소 */}
      <div className="absolute -bottom-3 left-10 w-32 h-32 rounded-full bg-blue-300/20 blur-2xl" />
      <div className="absolute top-6 -right-4 w-24 h-24 rounded-full bg-cyan-300/30 blur-xl" />
    </div>
  );
}

