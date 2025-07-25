# Synarou Static Website

Google 인증을 위한 Synarou 정적 웹사이트입니다.

## 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 배포

GitHub Pages에 자동 배포됩니다 (main 브랜치 push 시).

## 커스텀 도메인 설정

1. DNS 제공업체에서 다음 설정:
   - A 레코드: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME 레코드: www -> [username].github.io

2. GitHub 저장소 Settings > Pages에서 커스텀 도메인 설정

3. HTTPS 적용 대기 (최대 24시간)
