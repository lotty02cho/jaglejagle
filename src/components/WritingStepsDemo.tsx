'use client';
import { useEffect, useState } from 'react';

const stepLabels = [
  '목적 선택',
  '템플릿 입력',
  '콘텐츠 작성',
  '평가 & 미리보기',
];

export default function WritingStepsDemo() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % stepLabels.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-md aspect-square">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 shadow-lg" />
      <div className="absolute inset-4 rounded-2xl bg-white/80 backdrop-blur border border-blue-100 p-6 flex flex-col">
        <h3 className="text-sm font-bold text-blue-700 mb-4">자동 글쓰기 데모</h3>
        <div className="flex-1 flex flex-col justify-center items-center gap-6">
          {stepLabels.map((label, i) => {
            const active = i === index;
            return (
              <div
                key={label}
                className={`w-full flex items-center gap-3 transition-all duration-500 ${active ? 'opacity-100' : 'opacity-25'} ${active ? 'translate-x-0' : 'translate-x-2'}`}
              >
                <div className={`h-8 w-8 flex items-center justify-center rounded-full text-xs font-bold shadow ${active ? 'bg-blue-600 text-white scale-110' : 'bg-gray-200 text-gray-500'} transition-transform`}>{i + 1}</div>
                <span className={`text-sm font-medium ${active ? 'text-blue-700' : 'text-gray-500'}`}>{label}</span>
                {active && (
                  <div className="ml-auto h-2 w-20 rounded bg-blue-200 overflow-hidden">
                    <div className="h-full bg-blue-600 animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-4 text-[10px] text-gray-500 text-center">* 실제 GIF 자리 (향후 캡처로 교체 가능)</div>
      </div>
      <div className="absolute -bottom-3 left-10 w-32 h-32 rounded-full bg-blue-300/20 blur-2xl" />
      <div className="absolute top-6 -right-4 w-24 h-24 rounded-full bg-cyan-300/30 blur-xl" />
    </div>
  );
}

