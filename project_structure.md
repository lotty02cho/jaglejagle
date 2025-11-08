// 자글자글 모바일 웹앱 폴더 구조 및 주요 파일 리스트

src/
  app/
    page.tsx           // 메인페이지(앱소개)
    login/page.tsx     // 로그인(소셜로그인)
    write/page.tsx     // 자동 글쓰기(다단계 폼, 상태관리)
    posts/page.tsx     // 목록페이지
    posts/[id]/page.tsx // 글 상세/미리보기
  components/
    MainIntro.tsx      // 메인페이지 소개 컴포넌트
    SocialLogin.tsx    // 소셜로그인 버튼 컴포넌트
    WriteSteps/        // 자동 글쓰기 단계별 컴포넌트
      StepPurpose.tsx
      StepTemplate.tsx
      StepContent.tsx
      StepReview.tsx
      StepPreview.tsx
    PostCard.tsx       // 목록 카드 컴포넌트
    ClipboardButton.tsx // html 복사 버튼
  lib/
    supabaseClient.ts  // Supabase 연동
    sttApi.ts          // STT API 연동
    openaiApi.ts       // GPT API 연동
  types/
    post.ts            // 글/평가 타입 정의
  styles/
    globals.css        // Tailwind CSS
  tests/
    ...                // 주요 컴포넌트/페이지 테스트

.env.local            // 환경변수(Supabase, OpenAI 등)

README.md             // 프로젝트 설명

