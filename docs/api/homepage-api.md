# NCMSW 백엔드 REST API 명세서

| 항목 | 내용 |
|---|---|
| 시스템명 | NCMSW (LogCom Homepage Backend API) |
| 기본 URL | `/api/v1` |
| 공통 응답 포맷 | JSON (`ApiResponse<T>`) |
| 작성일 | 2026-09-19 |

---

## 1. 공통 응답 규격

모든 API 응답은 아래의 표준 JSON 구조를 따릅니다.

```json
{
  "success": true,
  "message": "요청이 성공적으로 처리되었습니다.",
  "data": { ... }
}
```

오류 발생 시:
```json
{
  "success": false,
  "message": "입력 데이터 검증에 실패했습니다.",
  "data": null,
  "error": {
    "code": "INVALID_INPUT",
    "details": [
      { "field": "email", "reason": "이메일 형식이 올바르지 않습니다." }
    ]
  }
}
```

---

## 2. API 엔드포인트 목록

### 2.1 헬스 체크
- **`GET /api/v1/health`**
  - 설명: 서버 상태 및 데이터베이스 연결 상태 확인
  - 인증: 불필요

### 2.2 상담 및 견적 문의 (Inquiry)
- **`POST /api/v1/inquiries`**
  - 설명: 홈페이지 방문자의 신규 도입 상담 / 견적 문의 접수
  - Request Body:
    ```json
    {
      "companyName": "(주)예시고객사",
      "contactPerson": "홍길동",
      "contactPosition": "총무팀 팀장",
      "phone": "010-1234-5678",
      "email": "contact@example.com",
      "inquiryType": "B2B_SOLUTION", // B2B_SOLUTION, BULK_QUOTE, SAMPLE_REQUEST, GENERAL
      "estimatedVolume": "월 100~300건",
      "content": "신규 B2B 명함 제작 솔루션 도입 견적 및 템플릿 제작 문의드립니다.",
      "agreePrivacy": true
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "문의가 성공적으로 접수되었습니다. 담당자가 빠른 시일 내 연락드리겠습니다.",
      "data": {
        "id": 1,
        "createdAt": "2026-09-19T20:50:00"
      }
    }
    ```

### 2.3 공지사항 (Notice)
- **`GET /api/v1/notices`**
  - 설명: 공지사항 및 소식 목록 조회 (페이징 지원)
  - Query Params: `page` (기본값: 0), `size` (기본값: 10)
- **`GET /api/v1/notices/{id}`**
  - 설명: 공지사항 단건 상세 조회

### 2.4 회사 정보 메타 (Company Info)
- **`GET /api/v1/company`**
  - 설명: 회사 소개 기본 메타데이터(연혁, 주소, 연락처, 대표자 등) 조회
