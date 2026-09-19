# NCMSW (LogCom Homepage)

**NCMSW**는 로그컴(LogCom)의 공식 기업 홈페이지 웹 애플리케이션 및 백엔드 서비스입니다.  
기업 및 고객에게 로그컴의 B2B 맞춤형 명함 솔루션, 템플릿 제작 시스템, 인쇄 및 가공 노하우를 소개하고 온라인 상담/견적 문의 및 공지사항을 제공합니다.  
기존 B2B 명함 관리 및 주문 어드민 시스템인 **NCMS**와 유기적으로 연계되어 동작합니다.

---

## 기술 스택 (Tech Stack)

| 영역 | 구성 | 배포 |
|---|---|---|
| **Frontend** | React 18 / TypeScript / Vite / Tailwind CSS v4 / React Router 7 | Vercel |
| **Backend** | Java 21 / Spring Boot 3.3.5 / Gradle / Spring Data JPA | Railway |
| **Database** | PostgreSQL | Railway PostgreSQL |

---

## 저장소 구조

```text
NCMSW/
├── backend/        # Spring Boot 3.3 REST API (상담문의, 공지사항, 회사소개 등)
├── frontend/       # 모던 반응형 React 브랜드 홈페이지
├── docs/           # 아키텍처, 기능 구조, API 명세 기준 문서
│   ├── architecture/
│   ├── requirements/
│   └── api/
└── .agents/        # AI 어시스턴트 및 작업 동기화 규칙 (Harness Engineering)
```

---

## 주요 기준 문서 (Documentation)

- [소스 아키텍처 정의서](docs/architecture/source-architecture.md)
- [홈페이지 정보 구조 및 기능 정의서](docs/requirements/homepage-structure.md)
- [백엔드 API 명세서](docs/api/homepage-api.md)

---

## 개발 및 실행 명령어 (Commands)

### Backend
```bash
cd backend
./gradlew bootRun       # 백엔드 서버 로컬 실행 (포트 8080)
./gradlew compileJava   # 컴파일 검증
./gradlew test          # 단위 및 통합 테스트
```

### Frontend
```bash
cd frontend
npm install             # 의존성 설치
npm run dev             # 프론트엔드 개발 서버 실행 (포트 5173)
npm run build           # 프로덕션 빌드
```

---

## 연계 시스템

- **NCMS (Admin & Order Portal)**: 기업 임직원/관리자용 명함 발주 및 어드민 시스템
