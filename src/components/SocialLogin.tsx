'use client';
import { useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function SocialLogin() {
  const isConfigured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) && Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const handleLogin = async (provider: 'google' | 'kakao' | 'naver') => {
    if (!isConfigured) {
      alert('로그인 설정이 아직 완료되지 않았습니다. .env.local에 NEXT_PUBLIC_SUPABASE_URL 및 NEXT_PUBLIC_SUPABASE_ANON_KEY를 설정하세요.');
      return;
    }
    await supabase.auth.signInWithOAuth({ provider });
  };

  useEffect(() => {
    // 로그인 후 리다이렉트 처리 등 추가 가능
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {!isConfigured && (
        <p className="text-sm text-red-600">환경변수가 설정되지 않아 로그인 버튼이 비활성화되었습니다.</p>
      )}
      <button disabled={!isConfigured} onClick={() => handleLogin('google')} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">Google로 로그인</button>
      <button disabled={!isConfigured} onClick={() => handleLogin('kakao')} className="px-4 py-2 bg-yellow-400 text-black rounded disabled:opacity-50">Kakao로 로그인</button>
      <button disabled={!isConfigured} onClick={() => handleLogin('naver')} className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50">Naver로 로그인</button>
    </div>
  );
}
