이 프로젝트는 **Vite + TailwindCSS + Node + Express**를 연습하기 위한 풀스택 개발 실습 프로젝트로  
다음 레포지토리의 프로젝트 구조를 참고하였습니다.  
https://github.com/NO-ID-Studios/StarshipTS


---

## 📁 프로젝트 구조

```
PROJECT/
├── backend/                   # Express 서버
│   ├── node_modules/          # 백엔드 의존성
│   ├── src/                   # 백엔드 소스 코드
│   ├── .env                   # 환경변수 파일
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── frontend/                  # Vite + Tailwind 프론트엔드
│   ├── node_modules/          # 프론트엔드 의존성
│   ├── public/                # 정적 파일
│   ├── src/                   # 프론트엔드 소스 코드
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.cjs
│   └── tailwind.config.cjs
│
├── node_modules/              # 최상위 node_modules (concurrently 등)
├── .gitignore
├── package.json               # 최상위 package.json (동시 실행 스크립트)
├── package-lock.json
└── README.md
