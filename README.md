# PARK SANGYEON · Marketing Portfolio

광고를 집행하는 데서 끝나지 않고 데이터를 측정·분석·개선까지 연결하는 퍼포먼스 마케터의 포트폴리오입니다.

외부 라이브러리와 유료 서비스 없이 HTML/CSS/JavaScript로 구현했습니다. 콘텐츠 JSON과 공통 템플릿으로 7개 정적 HTML을 생성합니다. 본문과 탐색은 JavaScript를 꺼도 읽을 수 있습니다.

## 시작하기

Node.js 20 이상이 필요합니다. 이 README가 있는 `marketing-portfolio` 폴더에서 실행합니다. 설치할 패키지는 없습니다.

```sh
npm run build
npm run check
npm start
```

브라우저에서 http://127.0.0.1:4173 을 엽니다. 종료는 실행 터미널에서 Ctrl+C입니다. 다른 포트는 `PORT=4174 npm start`로 지정합니다.

`dist/index.html`을 직접 열어도 페이지를 읽을 수 있습니다. 콘텐츠를 수정했다면 `npm run build`를 다시 실행하고 브라우저를 새로고침하세요. `dist`는 생성 결과이므로 직접 수정하면 다음 빌드 때 사라집니다.

## 파일 구조

```text
marketing-portfolio/
├── content/
│   ├── profile.json          # 이름, 소개, 연락처, 경력, 익명화 설정
│   └── projects.json         # 3개 사례, 성과 수치, 근거·확인 범위
├── site/assets/
│   ├── style.css             # 반응형 디자인과 인쇄 스타일
│   ├── main.js               # 퍼널 선택과 이력서 인쇄
│   └── favicon.svg
├── scripts/
│   ├── build.mjs             # 공통 템플릿 → 정적 HTML 생성
│   ├── check.mjs             # 내부 링크·앵커·사례 항목 검증
│   └── serve.mjs             # 로컬 미리보기 서버
├── dist/                     # 실제 배포 파일
│   ├── index.html
│   ├── about.html
│   ├── projects.html
│   ├── resume.html
│   ├── projects/             # 3개 사례 상세 페이지
│   └── assets/
├── docs/                     # GitHub Pages 배포용 빌드 결과
├── deployment/pages.yml.example # Actions 전환 시 사용할 예시
├── package.json
└── README.md
```

## 페이지와 기능

- Home: 포지셔닝, 주요 사례, 단계 선택형 퍼널.
- About: 일하는 방식, Paid Media / Analytics / Measurement Review / Market Research 역량.
- Projects: 3개 사례와 상세 페이지. 모든 상세는 Overview, Problem, Goal, My Role, Analysis, Action, Result, Insight 구성.
- Resume: 경험 요약. `인쇄 / PDF 저장` 버튼으로 브라우저 인쇄 창을 열고 PDF로 저장할 수 있습니다. 미리 생성된 PDF 파일은 포함하지 않습니다.
- 반응형 화면, 키보드 포커스, 본문 건너뛰기, 동작 줄이기 설정, 외부 폰트·분석 추적 없는 구성.

## 수정할 곳

### 개인정보와 이력

`content/profile.json`의 이름·소개·skills를 수정합니다. `email`과 `github`에 값을 넣으면 Resume에 링크가 표시됩니다. GitHub 주소는 `https://github.com/...` 형태로 입력합니다. 마케팅 경력은 2026.07~2026.09로 사용자 확인을 반영했습니다. 이전 경력 기간도 사용자 확인으로 반영했습니다. 학력은 미기재입니다. `experience`는 `company`, `period`, `role`, `description` 객체 배열이며, `education`은 설명 문자열 배열입니다.

### 광고주명과 공개 범위

`anonymous: true`가 기본값이며 화면에는 프로젝트의 `alias`가 표시됩니다. 실명 공개가 가능하면 `false`로 바꿀 수 있습니다. **이 설정은 화면 표시만 바꿉니다.** 공개 GitHub 저장소에는 `content/projects.json`의 원래 `client` 값도 노출됩니다. 저장소 자체를 익명화하려면 원본 `client`, 본문, 첨부 파일과 커밋 기록까지 점검하세요. 이번 프로젝트에는 개인 리드·계정 ID·인증 정보가 포함돼 있지 않습니다.

### 사례와 증거 관리

대표 사례는 광고 운영·분석, AI를 활용한 GTM 전환 중복 차단 실행·검토, 의료시장·경쟁사 조사입니다. 스트리밍 플랫폼 팀 기획은 사용자 요청으로 보류하여 사이트와 배포 파일에서 제외했습니다. 본인 작업 여부가 불분명한 GA4 Excel 대시보드와 수신 증빙이 없는 Meta 연동은 공개 사례에서 제외했습니다.

사용자가 확인한 개인 담당 범위와 로컬 원본에서 대조한 수치를 구분했습니다. 광고 수치는 2026년 8월 키워드 행 집계이며 계정 전체 실적, 실제 상담·예약, 개인의 개선 성과가 아닙니다. 비용·CPA는 비용 처리 기준을 더 확인해야 해 제외했습니다. 기획의 매체 배분은 계획이며 실제 집행 성과가 아닙니다.

각 사례의 `scope`는 수행 범위, `decision`은 핵심 판단, `evidenceStatus`는 근거 상태입니다. `evidenceTable`은 원본에서 정리한 익명화 표이며 실제 화면 캡처가 아닙니다. `showReportedMetrics`는 과거 미대조 KPI 표시용 옵션이므로 비활성 상태를 유지합니다.

`artifacts` 배열에는 공개 가능한 증빙만 추가합니다. 이미지는 `site/assets/`에 저장하고 아래 형태로 연결합니다. 예시 파일은 자동 생성되지 않습니다.

```json
{"file":"evidence/approved-report.png","alt":"익명화한 매체별 비교표","caption":"실제 기간 · 분석 범위 · 본인 기여를 설명"}
```

개인 리드, 계정 ID, 인증 정보는 이미지에서 제거합니다. 설명용 도식은 실제 결과물로 표시하지 않습니다. 자료 요청 목록은 프로젝트 밖의 `포트폴리오_자료요청.md`에 별도로 제공합니다.

### 디자인

`site/assets/style.css` 맨 위의 색상 변수를 수정합니다. 글꼴은 운영체제의 기본 한글 글꼴을 사용합니다. 내용 구조와 HTML은 `scripts/build.mjs`에서 관리합니다.

## GitHub Pages 배포

저장소: https://github.com/anjsi1/marketing-portfolio

배포 주소: https://anjsi1.github.io/marketing-portfolio/

현재 배포 방식은 `main` 브랜치의 `/docs` 폴더입니다. 수정한 뒤 아래 순서로 갱신합니다.

```sh
npm run build
npm run check
npm run prepare:pages
git add .
git commit -m "Update portfolio"
git push
```

GitHub Settings → Pages에서 Source는 Deploy from a branch, Branch는 main /docs로 설정합니다. Pages의 배포가 끝나면 공개 주소에서 확인합니다. 로컬 서버는 `dist`를 사용합니다. `docs`는 배포용 복사본이므로 직접 수정하지 않습니다.

현재 인증의 권한 범위에 맞춰 별도의 워크플로 업로드 없이 배포합니다. Actions 방식으로 전환하려면 `deployment/pages.yml.example`을 `.github/workflows/pages.yml`로 옮기고, 워크플로 업로드가 가능한 인증을 사용한 뒤 Pages Source를 GitHub Actions로 변경합니다.

## 검증

`npm run check`는 7개 HTML의 내부 경로·앵커, 페이지별 h1, 3개 사례의 필수 항목을 검사합니다. 실제 공개 배포의 성공 여부는 GitHub Actions와 공개 URL에서 별도로 확인해야 합니다.
