# 자글자글 데모

간단한 Next.js TypeScript 데모 프로젝트입니다. 로컬에서 실행하려면 Node.js(>=18)와 npm이 필요합니다.

## 빠른 시작 (Windows cmd.exe)
```cmd
cd /d C:\Users\Administrator\IdeaProjects\jaglejagle
npm install
npm start   :: 개발 서버(Next dev) on http://localhost:3000
```

브라우저: http://localhost:3000

## 문제 우회/해결 가이드

### 포트 충돌(EADDRINUSE)
```cmd
taskkill /IM node.exe /F
npm start
```
다른 포트로 실행:
```cmd
npx next dev -p 3001
```

### Next 캐시/파일 충돌 (.next 캐시 문제 포함)
```cmd
rmdir /s /q .next
npm start
```

### React Server Components 에러(useEffect 등)
- 원인: 브라우저 API/useEffect 사용 컴포넌트가 Server Component로 렌더링됨.
- 해결: 해당 파일 상단에 `use client`; 선언 추가.
  - 적용 파일: `src/components/SocialLogin.tsx`, `src/app/login/page.tsx`, `src/app/write/page.tsx`, `src/components/WriteSteps/*` 등.

### 환경변수(Supabase 등) 미설정 시 로그인 버튼 비활성화
- `.env.local` 생성 후 다음 키를 설정하세요.
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```
변경 후 서버를 재시작하십시오.

### 네트워크/포트 점검
```cmd
netstat -ano | findstr LISTENING | findstr :3000
```

### 전체 초기화 스크립트(권장)
```cmd
taskkill /IM node.exe /F 2>nul
rmdir /s /q .next 2>nul
npm install
npm start
```

## 에러 페이지
- 글로벌 에러 바운더리 `src/app/error.tsx` 추가됨. 예외 발생 시 친화적인 메시지와 재시도/메인 이동 버튼 제공.

## 스크립트
- `npm start`: 개발 서버(Next dev, 3000)
- `npm run dev:3001`: 개발 서버(3001)
- `npm run dev:3020`: 개발 서버(3020)
- `npm run build`: 프로덕션 빌드
- `npm run start:prod`: 프로덕션 서버(3000)

## Git / GitHub CLI 설치 확인 및 원격 저장소 연결 (Windows cmd.exe)
다음 명령으로 `git`과 `gh`(GitHub CLI)가 설치되어 있고 PATH에 등록되어 있는지 확인하세요. 설치 직후에는 새 cmd 창을 열어야 PATH가 갱신됩니다.

```cmd
where git || echo git-not-found
where gh || echo gh-not-found
git --version
gh --version
```

1) `git` 또는 `gh`가 "not-found"로 나오면
- Git 설치: https://git-scm.com/download/win (Git for Windows 설치 후 새 터미널 열기)
- GitHub CLI 설치: https://cli.github.com/ (MSI로 설치 후 새 터미널 열기)

2) 설치했는데도 `git`/`gh`가 인식되지 않으면(설치 경로가 PATH에 없음)
- 설치 경로(예: `C:\Users\<you>\AppData\Local\Programs\GitHub CLI\bin` 또는 `C:\Program Files\Git\cmd`)를 확인한 뒤, 다음처럼 사용자 PATH에 추가할 수 있습니다 (관리자 권한 불필요, 새 터미널에서 적용됨):

```cmd
setx PATH "%PATH%;C:\Path\To\Installed\Folder"
```

- GUI로 변경하려면: 제어판 또는 '환경 변수 편집'에서 사용자 변수 PATH에 설치 경로를 추가하고 새 cmd 창을 엽니다.

3) 로컬 저장소 초기화 및 첫 커밋 (설치/경로 문제 해결 후 실행)
```cmd
cd /d C:\Users\Administrator\IdeaProjects\jaglejagle
git init
git add .
git commit -m "chore: initial commit"
```

4) `gh`가 사용 가능한 경우 - 원격 리포지토리 자동 생성 및 푸시
```cmd
cd /d C:\Users\Administrator\IdeaProjects\jaglejagle
gh auth login      :: 처음 한 번만 실행 (브라우저 인증 권장)
gh repo create jaglejagle --public --source=. --remote=origin --push
```

5) `gh`가 없는 경우 - 수동으로 GitHub에서 리포지토리 생성 후 로컬에 연결
```cmd
cd /d C:\Users\Administrator\IdeaProjects\jaglejagle
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

참고:
- `setx`로 PATH를 수정한 뒤에는 반드시 새로운 cmd 창을 열어야 변경사항이 반영됩니다.
- GitHub에 2단계 인증이 켜져 있다면 HTTPS 푸시 시 PAT(Personal Access Token)이 필요합니다.
