# 민정미의 보험테라피 — minjungmi.kr

매주 한 통의 편지, 매달 한 권의 작은 잡지.
Astro로 빌드하고 Netlify에 배포하며, 콘텐츠 편집은 Decap CMS(`/admin/`)에서 합니다.

---

## 한 줄 요약

`로컬 폴더 → GitHub → Netlify 자동 배포 → minjungmi.kr`
콘텐츠 편집은 항상 `minjungmi.kr/admin/` 에서.

---

## 첫 셋업 (1회만 필요)

### 1. GitHub repo 만들기

```bash
# 이 폴더에서
git init
git add .
git commit -m "first commit — minjungmi.kr Astro setup"
git branch -M main

# GitHub에서 새 repo 생성 후 (예: minjungmi-kr) 아래 URL 복사
git remote add origin https://github.com/<your-username>/minjungmi-kr.git
git push -u origin main
```

### 2. Netlify에 연결

1. https://app.netlify.com → **Add new site → Import from Git → GitHub**
2. 방금 만든 `minjungmi-kr` repo 선택
3. 빌드 설정은 자동 감지됨 (`netlify.toml` 덕분)
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy site** 클릭 → 첫 빌드 2~3분 소요
5. `random-name-xxxx.netlify.app` 임시 URL 발급됨

### 3. 도메인 연결 (`minjungmi.kr`)

Netlify Site settings → **Domain management → Add custom domain → `minjungmi.kr`**

옵션 A — Netlify DNS 사용 (권장, 가장 쉬움)
- "Set up Netlify DNS" → 받은 네임서버 4개를 가비아 도메인 관리에 입력
- 30분~6시간 내 전파, SSL 자동 발급

옵션 B — 가비아 DNS 유지
- A 레코드: `@` → `75.2.60.5`
- CNAME: `www` → `<your-site>.netlify.app`

### 4. Decap CMS 인증 활성화

콘텐츠 편집 화면(`/admin/`)에 로그인하려면 Netlify Identity 무료 인증을 켜야 함.

1. Netlify Site → **Site configuration → Identity → Enable Identity**
2. Registration preferences → **Invite only** (다른 사람 가입 차단)
3. Identity → **Services → Git Gateway → Enable Git Gateway**
4. Identity 탭에서 **Invite users** → 민쌤 이메일 초대
5. 이메일에서 링크 클릭 → 비밀번호 설정 → 완료

이제 `minjungmi.kr/admin/` 들어가면 로그인 화면이 뜨고, 로그인하면 편집 화면이 보임.

---

## 콘텐츠 편집 (일상 운영)

### 위클리 레터 추가 (매주 금요일)

1. `minjungmi.kr/admin/` 접속 → 로그인
2. 좌측 **위클리 레터** → **+ 새 위클리 레터**
3. 제목·발행일·VOL 번호 입력, 본문 작성 (마크다운 위지윅)
4. 우측 상단 **PUBLISH → Publish now** 클릭
5. 약 2~3분 뒤 사이트에 자동 반영됨. 가장 최근 레터가 메인에 풀로 노출, 이전 레터들은 자동으로 아카이브 리스트로 내려감

### 월간호 발행 (매월 마지막 금요일)

1. 좌측 **월간호** → **+ 새 월간호**
2. 이슈 번호·발행월 입력
3. 4개 꼭지 채우기:
   - 이번 달의 편지 (책 인용 박스 포함, 800~1,200자)
   - 한 사람, 한 설계 (600~800자)
   - 이 달의 변화 (300자 + 민쌤 한 줄)
   - 테라피스트의 한 마디 (이번 호 주인공 멤버 선택 + 한 문장)
4. **PUBLISH**

### 테라피스트 정보 수정

좌측 **테라피스트** → 멤버 선택 → 사진/직책/캡션 수정 → PUBLISH

### 보도자료(PRESS) 추가

좌측 **PRESS** → **+ 새 PRESS 카드** → 매체명·날짜·제목·요약·URL 입력 → PUBLISH

---

## 로컬에서 미리보기 (선택)

개발자라면 로컬에서 변경사항을 미리 볼 수 있음:

```bash
npm install
npm run dev
# → http://localhost:4321
```

---

## 폴더 구조

```
astro-site/
├── package.json
├── astro.config.mjs
├── netlify.toml
├── public/
│   ├── admin/              # Decap CMS 어드민
│   │   ├── index.html
│   │   └── config.yml      # ← 편집 화면 구조 정의
│   └── images/             # 정적 이미지 (사진, 썸네일)
└── src/
    ├── content/            # 마크다운 콘텐츠 (CMS가 여기 씀)
    │   ├── config.ts       # 콘텐츠 스키마
    │   ├── weekly/         # 위클리 레터들
    │   ├── monthly/        # 월간호들
    │   ├── therapists/     # 8명 테라피스트 프로필
    │   └── press/          # 보도자료 카드들
    ├── layouts/
    │   └── Base.astro      # 페이지 공통 골격
    ├── components/         # 섹션 컴포넌트들
    ├── pages/
    │   └── index.astro     # 메인 페이지
    └── styles/
        └── global.css      # 사이트 전체 스타일
```

---

## 도움 필요할 때

- Astro 공식 문서: https://docs.astro.build
- Decap CMS 문서: https://decapcms.org/docs
- Netlify Identity 문서: https://docs.netlify.com/security/secure-access-to-sites/identity/
