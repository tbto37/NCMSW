package kr.co.tobetheone.ncmsw.company.service;

import java.util.List;
import kr.co.tobetheone.ncmsw.company.dto.CompanyInfoResponse;
import org.springframework.stereotype.Service;

@Service
public class CompanyInfoService {

    public CompanyInfoResponse getCompanyInfo() {
        return CompanyInfoResponse.builder()
                .companyName("(주)투비더원")
                .brandName("로그컴 (LOGCOM)")
                .ceoName("조현우")
                .businessNumber("123-45-67890")
                .address("서울특별시 중구 을지로 123 로그컴빌딩 4층")
                .phone("02-1234-5678")
                .email("logcom2@naver.com")
                .operatingHours("평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00 / 주말 및 공휴일 휴무)")
                .history(List.of(
                        CompanyInfoResponse.HistoryItem.builder()
                                .year("2026")
                                .title("B2B 명함 자동화 솔루션 NCMS 전국망 확장")
                                .description("주요 엔터프라이즈 기업 전용 명함 제작/발주 시스템 공급 및 NCMSW 오픈")
                                .build(),
                        CompanyInfoResponse.HistoryItem.builder()
                                .year("2025")
                                .title("기업형 맞춤 명함 온라인 검수 시스템 특허 출원")
                                .description("실시간 SVG 렌더링 및 모바일 교정 승인 엔진 자체 개발")
                                .build(),
                        CompanyInfoResponse.HistoryItem.builder()
                                .year("2023")
                                .title("친환경 용지 및 프리미엄 후가공 라인업 증설")
                                .description("FSC 인증 친환경 용지 도입 및 정밀 박가공 설비 확충")
                                .build(),
                        CompanyInfoResponse.HistoryItem.builder()
                                .year("2020")
                                .title("로그컴 법인 설립")
                                .description("고품질 비즈니스 인쇄 및 기업 솔루션 서비스 개시")
                                .build()
                ))
                .build();
    }
}
