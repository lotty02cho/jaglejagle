'use client';
import { useEffect, useState } from 'react';
import { supabase, IS_DEMO_AUTH } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function SocialLogin() {
  const router = useRouter();
  const isConfigured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) && Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (provider: 'google' | 'kakao' | 'naver') => {
    if (!isConfigured && !IS_DEMO_AUTH) {
      alert('로그인 설정이 아직 완료되지 않았습니다. .env.local에 NEXT_PUBLIC_SUPABASE_URL 및 NEXT_PUBLIC_SUPABASE_ANON_KEY를 설정하거나, 데모 계정(admin/admin)을 사용하세요.');
      return;
    }
    setLoading(true);
    try {
      await supabase.auth.signInWithOAuth({ provider });
      postLoginRedirect();
    } finally {
      setLoading(false);
    }
  };

  const postLoginRedirect = () => {
    try {
      const postsRaw = typeof window !== 'undefined' ? localStorage.getItem('posts') : null;
      const hasPosts = postsRaw ? (JSON.parse(postsRaw)?.length > 0) : false;
      router.push(hasPosts ? '/posts' : '/write');
    } catch (e) {
      router.push('/write');
    }
  };

  const handleDemoLogin = async () => {
    const rawEmail = email ?? '';
    const rawPassword = password ?? '';
    const normalizedEmail = rawEmail.trim().toLowerCase();
    const normalizedPassword = rawPassword.trim();

    if (!normalizedEmail || !normalizedPassword) {
      alert('아이디와 비밀번호를 모두 입력하세요. (데모: admin / admin)');
      return;
    }

    setLoading(true);
    try {
      const res = await (supabase.auth as any).signInWithPassword({ email: normalizedEmail, password: normalizedPassword });
      if (res.error) {
        alert('데모 로그인 실패: ' + (res.error.message || 'Invalid demo credentials') + "\n입력값: '" + rawEmail + "' / '" + rawPassword + "'");
      } else {
        alert('데모 로그인 성공: ' + JSON.stringify(res.data.user));
        postLoginRedirect();
      }
    } catch (e) {
      alert('데모 로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 로그인 후 리다이렉트 처리 등 추가 가능
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {(!isConfigured || IS_DEMO_AUTH) && (
        <p className="text-sm text-orange-600">현재 데모 인증 모드입니다. admin / admin 으로 로그인할 수 있습니다.</p>
      )}

      <div className="flex flex-col gap-2">
        <button disabled={( !isConfigured && !IS_DEMO_AUTH) || loading} onClick={() => handleLogin('google')} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">Google로 로그인</button>
        <button disabled={( !isConfigured && !IS_DEMO_AUTH) || loading} onClick={() => handleLogin('kakao')} className="px-4 py-2 bg-yellow-400 text-black rounded disabled:opacity-50">Kakao로 로그인</button>
        <button disabled={( !isConfigured && !IS_DEMO_AUTH) || loading} onClick={() => handleLogin('naver')} className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50">Naver로 로그인</button>
      </div>

      {/* 데모 로그인 섹션 */}
      <div className="border rounded p-4 mt-2">
        <label className="text-sm">데모 아이디</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin" className="border px-2 py-1 rounded w-full mt-1" />
        <label className="text-sm mt-2">데모 비밀번호</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="admin" type="password" className="border px-2 py-1 rounded w-full mt-1" />
        <div className="flex gap-2 mt-3">
          <button onClick={handleDemoLogin} disabled={loading} className="px-4 py-2 bg-indigo-600 text-white rounded">데모 로그인</button>
        </div>
        <p className="text-xs text-gray-500 mt-2">주의: 정확히 "admin" (소문자) / 비밀번호 "admin" 입력</p>
      </div>
    </div>
  );
}
