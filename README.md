# 바른몸체형관리센터 랜딩페이지

바른몸체형관리센터의 체형관리, 재활운동, 통증 관리 상담을 위한 Next.js 랜딩페이지입니다.

## 공유용 주소

다른 PC와 휴대폰에서는 아래 공개 주소를 사용합니다.

```txt
https://correctbody.vercel.app
https://correctbody.vercel.app/#contact
https://correctbody.vercel.app/contact
```

`http://127.0.0.1:3000` 또는 `http://localhost:3000` 주소는 현재 PC에서만 열리는 로컬 개발 주소이므로 외부 공유에 사용하지 않습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

로컬 확인용 주소:

```txt
http://localhost:3000
http://localhost:3000/contact
```

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

Vercel -> Project -> Settings -> Environment Variables

아래 환경변수를 등록합니다.

```env
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

`Production`, `Preview`, `Development`를 모두 체크한 뒤 Save 합니다. 환경변수를 새로 추가하거나 수정했다면 반드시 Redeploy 해야 합니다.

## Supabase 마이그레이션 적용

```bash
supabase login
supabase link --project-ref 본인_PROJECT_REF
supabase db push
```

또는 Supabase SQL Editor에서 `supabase/migrations/202606290001_create_contact_requests.sql` 내용을 실행합니다.

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

## GitHub 기반 Vercel 재배포

현재 PC에서 `vercel --prod`가 네트워크 업로드 오류를 낼 경우 CLI 배포를 반복하지 말고 GitHub main 브랜치 기반 Dashboard Redeploy를 사용합니다.

1. GitHub -> Settings -> Applications -> Installed GitHub Apps -> Vercel -> Configure
2. Repository access에서 `adjust5162-star/correctbody` 허용
3. Vercel -> correctbody Project -> Settings -> Git
4. Connected Git Repository가 `adjust5162-star/correctbody`인지 확인
5. Production Branch가 `main`인지 확인
6. Vercel -> correctbody Project -> Deployments
7. 최신 main 브랜치 배포 -> 점 3개 -> Redeploy
8. `Use existing Build Cache` 해제
9. Redeploy

## 배포 URL 확인

Vercel -> Project -> Deployments -> 가장 위 Production 배포 -> Visit

확인할 주소:

```txt
https://correctbody.vercel.app
https://correctbody.vercel.app/#contact
https://correctbody.vercel.app/contact
```

## 검증

```bash
npm run lint
npm run build
```

최종 확인 항목:

- TypeScript 오류 없음
- 다른 PC에서 `https://correctbody.vercel.app` 열림
- 상담 섹션은 `https://correctbody.vercel.app/#contact`로 열림
- 상담 문의 페이지는 `https://correctbody.vercel.app/contact`로 열림
- 전화 버튼은 `tel:+821020482052`로 연결
- 상담 폼 표시
- 네이버지도와 구글지도 버튼 작동
- Supabase 환경변수 등록 후 상담 폼 제출 시 `contact_requests` 테이블에 데이터 저장

## 의료 정보 안내

본 홈페이지의 운동 정보는 일반적인 건강 정보이며, 개인의 상태에 따라 적합하지 않을 수 있습니다. 통증이 심하거나 증상이 지속되는 경우 전문가 상담을 권장합니다.
