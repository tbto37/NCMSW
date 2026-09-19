# NCMSW 소스 아키텍처 정의서

| 항목 | 내용 |
|---|---|
| 시스템명 | NCMSW (LogCom Homepage / 로그컴 공식 웹사이트) |
| 저장소명 | `NCMSW` |
| 버전 | v0.1 (초기 구조 설정) |
| 작성일 | 2026-09-19 |
| 구성 | Spring Boot 3.3 + React 18 + PostgreSQL 모노레포 |

---

## 1. 저장소 및 프로젝트 구조

NCMSW는 하나의 저장소에서 프론트엔드와 백엔드를 독립적으로 빌드 및 배포할 수 있는 모노레포 구조를 따릅니다.

```text
NCMSW/
├── backend/        # Spring Boot 3.3 REST API (상담문의, 공지사항, 회사정보)
├── frontend/       # 모던 반응형 React 브랜드 홈페이지
├── docs/           # 아키텍처, 기능 구조, API 명세 기준 문서
│   ├── architecture/
│   ├── requirements/
│   └── api/
└── .agents/        # 작업 에이전트 룰 및 동기화 지침
```

---

## 2. Backend 패키지 아키텍처 (Spring Boot)

백엔드는 도메인 주도 다층 레이어 구조(Controller - Service - Repository - Entity/DTO)를 채택합니다.

```text
kr.co.tobetheone.ncmsw/
├── NcmswApplication.java   # Spring Boot 메인 애플리케이션 진입점
├── global/                 # 공통 모듈
│   ├── config/             # CORS, Security, WebMvc 설정
│   ├── exception/          # GlobalExceptionHandler, CustomException, ErrorCode
│   └── response/           # 공통 응답 규격 (ApiResponse<T>)
├── inquiry/                # 상담 및 견적 문의 도메인
│   ├── controller/         # InquiryController
│   ├── service/            # InquiryService
│   ├── repository/         # InquiryRepository
│   ├── entity/             # Inquiry (문의 엔티티)
│   └── dto/                # InquiryRequest, InquiryResponse
├── notice/                 # 공지사항 및 뉴스 도메인
│   ├── controller/         # NoticeController
│   ├── service/            # NoticeService
│   ├── repository/         # NoticeRepository
│   ├── entity/             # Notice
│   └── dto/                # NoticeResponse
├── company/                # 회사 메타 정보 (소개, 연혁 등)
│   ├── controller/         # CompanyInfoController
│   ├── service/            # CompanyInfoService
│   └── dto/                # CompanyInfoResponse
└── health/                 # 헬스 체크
    └── controller/         # HealthCheckController
```

### 2.1 주요 도메인 책임
- **`inquiry`**: 홈페이지 방문자의 도입 상담, 견적 문의, 샘플 요청 데이터 접수 및 관리자 알림 연동.
- **`notice`**: 로그컴의 공식 공지사항, 업데이트 소식, 보도자료 제공.
- **`company`**: 회사 기본 정보, CEO 인사말, 비전, 연혁, 오시는 길 등의 메타데이터 서빙.
- **`global`**: 표준화된 예외 처리, CORS 허용 정책, 공통 JSON 포맷 보장.

---

## 3. Frontend 패키지 아키텍처 (React + Vite + TypeScript)

방문자 경험(UX)과 브랜드 신뢰도를 극대화할 수 있도록 모듈화된 계층형 구조로 구성합니다.

```text
frontend/src/
├── app/                    # 앱 진입 및 라우팅 설정
│   └── App.tsx             # React Router 7 라우터 구성
├── components/             # 재사용 가능한 UI 컴포넌트
│   ├── layout/             # Header, Footer, PublicLayout, MobileNav
│   └── ui/                 # Button, Card, Input, Textarea, SectionHeader 등
├── pages/                  # 도메인/화면 단위 페이지
│   ├── home/               # 메인 랜딩 페이지 (Hero, Key Features, Partners, CTA)
│   ├── about/              # 회사 소개, 비전, 연혁, 오시는 길
│   ├── services/           # B2B 명함 솔루션, 템플릿 제작 시스템, 인쇄 프로세스
│   ├── portfolio/          # 납품 실적 및 템플릿 쇼케이스
│   ├── inquiry/            # 온라인 도입 상담 및 견적 신청 페이지
│   └── notice/             # 공지사항 목록 및 상세
├── shared/                 # 공통 모듈
│   ├── api/                # API 클라이언트 및 엔드포인트 함수
│   ├── constants/          # 네비게이션, 회사 기본 정보 상수
│   └── types/              # DTO 및 인터페이스 타입 정의
└── styles/                 # 테마 및 스타일
    ├── index.css           # 글로벌 CSS 및 폰트 임포트
    └── theme.css           # 브랜드 컬러 토큰 및 커스텀 스타일
```

### 3.1 주요 네비게이션 및 라우팅 설계
- `/` : 메인 랜딩 페이지
- `/about` : 회사 소개 (About Us)
- `/services` : 서비스 & 솔루션 안내 (Services)
- `/portfolio` : 포트폴리오 & 레퍼런스 (Portfolio)
- `/inquiry` : 상담 / 견적 문의 (Contact & Inquiry)
- `/notice` : 공지사항 및 소식 (Notice)
- `Header` 내 "NCMS 어드민 바로가기" 버튼을 통해 B2B 고객사 및 운영자 포털로 손쉽게 이동할 수 있도록 연계합니다.
