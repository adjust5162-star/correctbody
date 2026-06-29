# 바른몸체형관리센터 랜딩페이지

재활운동, 통증 회복 운동, 수술 후 재활, 체형 교정, 시니어 운동을 소개하는 Next.js 랜딩페이지입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://127.0.0.1:3000`을 엽니다.

## 필수 환경변수

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

환경변수가 없으면 사이트는 죽지 않습니다. 대신 상담 폼 제출 시 아래 안내가 표시됩니다.

```txt
온라인 저장 설정이 완료되지 않았습니다. 빠른 상담은 010-2048-2052로 전화해 주세요.
```

`service_role key`는 브라우저 코드에 사용하지 않습니다.

## Vercel 환경변수 등록

Vercel → Project → Settings → Environment Variables

아래 환경변수를 등록합니다.

```env
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

`Production`, `Preview`, `Development`를 모두 체크한 뒤 Save 합니다. 환경변수 저장 후 반드시 Redeploy 해야 합니다.

## Supabase 마이그레이션 적용

```bash
supabase login
supabase link --project-ref 본인_PROJECT_REF
supabase db push
```

마이그레이션 파일:

```txt
supabase/migrations/202606290001_create_contact_requests.sql
```

생성되는 테이블:

```txt
public.contact_requests
```

상담 폼 저장 컬럼:

- `name`
- `phone`
- `pain_area`
- `message`
- `contact_type`
- `created_at`

## Vercel 프로덕션 배포

```bash
npm run build
vercel --prod
```

## 배포 URL 확인

Vercel → Project → Deployments → Production → Visit

또는 CLI 배포 완료 후 출력되는 Production URL을 엽니다.

## 검증

```bash
npm run lint
npm run build
```

최종 확인 항목:

- TypeScript 오류 없음
- 환경변수가 없어도 빌드 성공
- 환경변수가 없어도 흰 화면 없이 폼 안내 표시
- Vercel 환경변수 등록 후 상담 폼 제출 시 Supabase `contact_requests` 테이블에 데이터 저장
- 전화 버튼은 `tel:+821020482052`로 연결

## 의료 정보 안내

본 홈페이지의 운동 정보는 일반적인 건강 정보이며, 개인의 상태에 따라 적합하지 않을 수 있습니다. 통증이 심하거나 증상이 지속되는 경우 전문가 상담을 권장합니다.
