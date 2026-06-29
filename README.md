# RecoverFit Premium Rehab Landing Page

재활운동, 통증 회복 운동, 수술 후 재활, 체형 교정, 시니어 운동을 소개하는 프리미엄 랜딩페이지입니다. 넓은 여백, 큰 타이포그래피, 부드러운 그라데이션, 명확한 CTA 구조를 사용했습니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://127.0.0.1:3000`을 엽니다.

## 환경변수

Supabase에 상담 문의를 저장하려면 배포 환경에 아래 값을 설정합니다.

```bash
NEXT_PUBLIC_SUPABASE_URL="https://your-project-ref.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
```

로컬 개발에서는 환경변수가 없어도 폼 테스트가 가능하지만, 프로덕션에서는 Supabase 설정이 필요합니다.

## 검증

```bash
npm run lint
npm run build
```

## 주요 섹션

- Hero Section
- Pain Point Section
- Why Rehab Exercise Section
- Program Section
- Condition Section
- Expert Section
- Process Section
- Content Preview Section
- Trust Section
- FAQ Section
- Final CTA Section
- Footer

## 상담 폼

이름, 연락처, 통증 부위, 증상 설명, 희망 상담 방식, 개인정보 수집 동의를 입력받습니다. 클라이언트와 `/api/contact` 서버 라우트에서 필수값을 검증합니다.

## Supabase 설정

1. Supabase 프로젝트를 생성합니다.
2. SQL Editor 또는 Supabase CLI로 `supabase/migrations/202606290001_create_contact_requests.sql`을 적용합니다.
3. Project Settings에서 `Project URL`과 `service_role key`를 확인합니다.
4. 배포 플랫폼 환경변수에 `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`를 등록합니다.

## GitHub / 배포 / DNS 연결

1. GitHub에 새 저장소를 만듭니다.
2. 로컬에서 원격 저장소를 연결합니다.

```bash
git remote add origin https://github.com/YOUR_ACCOUNT/rehab-exercise-homepage.git
git push -u origin main
```

3. Vercel 또는 Netlify에서 GitHub 저장소를 Import 합니다.
4. 빌드 명령은 `npm run build`, 설치 명령은 `npm install`을 사용합니다.
5. 도메인 DNS에는 배포 플랫폼이 안내하는 `A`, `CNAME`, 또는 네임서버 값을 등록합니다.
6. DNS 전파 후 `https://your-domain.com`으로 접속을 확인합니다.

## 의료 정보 안내

본 홈페이지의 운동 정보는 일반적인 건강 정보이며, 개인의 상태에 따라 적합하지 않을 수 있습니다. 통증이 심하거나 증상이 지속되는 경우 전문가 상담을 권장합니다.
