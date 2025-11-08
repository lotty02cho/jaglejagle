import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const useDemoEnv = (process.env.NEXT_PUBLIC_USE_DEMO_AUTH || '').toLowerCase() === 'true';

let supabase: any;
export const IS_DEMO_AUTH = useDemoEnv || !(supabaseUrl && supabaseAnonKey);

if (!IS_DEMO_AUTH) {
  // 실제 Supabase 클라이언트
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // 데모용 mock 클라이언트: 개발/데모 환경에서만 사용하세요.
  console.warn('[supabaseClient] 데모 인증 모드 활성 — 실제 Supabase 대신 mock supabase 사용 중');

  const demoUser = { id: 'demo-admin', email: 'admin@demo.local', role: 'admin' };

  supabase = {
    auth: {
      // OAuth 로그인은 데모로 빠르게 성공 처리
      signInWithOAuth: async ({ provider }: { provider: string }) => {
        return {
          data: { user: { id: `demo-${provider}`, email: `${provider}@demo.local` } },
          error: null,
        };
      },
      // 이메일/비밀번호 로그인 (데모)
      signInWithPassword: async ({ email, password }: { email: string; password: string }) => {
        const rawEmail = (email || '').toString();
        const rawPassword = (password || '').toString();
        const normalizedEmail = rawEmail.trim().toLowerCase();
        const normalizedPassword = rawPassword.trim();

        // 관대한 매칭: 비밀번호가 정확히 'admin'이면 성공으로 간주
        const isPasswordOk = normalizedPassword === 'admin';
        const isEmailOk = normalizedEmail === 'admin' || normalizedEmail === 'admin@demo.local' || normalizedEmail.includes('admin') || normalizedEmail.endsWith('@demo.local');

        if (isPasswordOk && isEmailOk) {
          try {
            if (typeof window !== 'undefined') {
              localStorage.setItem('demo_session', JSON.stringify({ user: demoUser }));
            }
          } catch (e) {}
          return { data: { user: demoUser }, error: null };
        }

        return { data: null, error: { message: 'Invalid demo credentials' } };
      },
      signOut: async () => {
        try {
          if (typeof window !== 'undefined') localStorage.removeItem('demo_session');
        } catch (e) {}
        return { error: null };
      },
      // 세션 확인 유틸 (선택적)
      getSession: () => {
        try {
          if (typeof window !== 'undefined') {
            const s = localStorage.getItem('demo_session');
            return s ? JSON.parse(s) : null;
          }
        } catch (e) {}
        return null;
      },
    },
  };
}

export { supabase };
