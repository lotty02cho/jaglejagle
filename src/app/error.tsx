'use client';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Global error boundary:', error);
  }, [error]);
  return (
    <html>
      <body className="min-h-screen flex flex-col items-center justify-center p-8 bg-red-50 text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-700">문제가 발생했습니다</h1>
        <p className="mb-6 text-red-600">{error.message}</p>
        <div className="flex gap-4">
          <button onClick={() => reset()} className="px-4 py-2 rounded bg-red-600 text-white">다시 시도</button>
          <a href="/" className="px-4 py-2 rounded bg-gray-200">메인으로</a>
        </div>
      </body>
    </html>
  );
}

