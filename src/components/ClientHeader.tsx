'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ClientHeader() {
  const [open, setOpen] = useState(false);
  const [authed, setAuthed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    try {
      const s = typeof window !== 'undefined' ? localStorage.getItem('demo_session') : null;
      setAuthed(Boolean(s));
    } catch (e) { setAuthed(false); }
  }, [pathname]);

  const goWrite = () => {
    if (!authed) {
      alert('로그인이 필요합니다.');
      router.push('/login');
    } else {
      router.push('/write');
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-14 flex items-center px-3 z-40 bg-white/70 backdrop-blur shadow-sm">
      <button aria-label="메뉴" onClick={() => setOpen(v => !v)} className="p-2 rounded hover:bg-blue-50 active:bg-blue-100">
        {/* 햄버거 아이콘 */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-blue-600">
          <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25c0-.414.336-.75.75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
        </svg>
      </button>

      <div className="flex-1 text-center select-none">
        <span className="inline-flex items-center gap-2 font-extrabold text-lg text-blue-700">
          {/* 연필 아이콘 */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M21.731 2.269a2.625 2.625 0 0 1 0 3.712l-1.5 1.5-3.712-3.712 1.5-1.5a2.625 2.625 0 0 1 3.712 0Z" />
            <path d="M2.25 15.75 14.18 3.82l3.712 3.712L5.962 19.462a4.5 4.5 0 0 1-1.897 1.125l-2.658.76a.75.75 0 0 1-.922-.922l.76-2.658a4.5 4.5 0 0 1 1.125-1.897Z" />
          </svg>
          내 세상을 자유롭게! 자글자글
        </span>
      </div>

      {/* 드롭다운 메뉴 */}
      {open && (
        <div className="absolute top-14 left-2 w-44 rounded-lg border bg-white shadow-lg p-2">
          <Link href="/" className="block px-3 py-2 rounded hover:bg-blue-50" onClick={() => setOpen(false)}>메인</Link>
          <Link href="/about" className="block px-3 py-2 rounded hover:bg-blue-50" onClick={() => setOpen(false)}>앱 소개</Link>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-blue-50" onClick={goWrite}>글 등록하기</button>
        </div>
      )}
    </header>
  );
}

