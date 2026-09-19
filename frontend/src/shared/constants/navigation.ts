export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: '회사소개', href: '/about', description: '로그컴의 비전, 역사 및 핵심 가치' },
  { label: '서비스·솔루션', href: '/services', description: 'B2B 맞춤 명함 솔루션 & 인쇄 공정' },
  { label: '포트폴리오', href: '/portfolio', description: '고객사 납품 사례 및 템플릿 샘플' },
  { label: '도입·견적문의', href: '/inquiry', description: '신규 기업 도입 및 대량 발주 견적' },
  { label: '공지사항', href: '/notice', description: '로그컴의 최신 소식 및 공지' },
];

export const COMPANY_INFO = {
  name: '(주)투비더원',
  brand: '로그컴 (LOGCOM)',
  ceo: '조현우',
  businessNumber: '123-45-67890',
  address: '서울특별시 중구 을지로 123 로그컴빌딩 4층',
  phone: '02-1234-5678',
  email: 'logcom2@naver.com',
  operatingHours: '평일 09:00 ~ 18:00 (주말/공휴일 휴무)',
  adminUrl: 'https://ncms-omega.vercel.app', // 또는 로컬 http://localhost:5173
};
