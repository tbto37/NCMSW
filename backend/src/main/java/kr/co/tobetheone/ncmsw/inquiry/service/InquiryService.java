package kr.co.tobetheone.ncmsw.inquiry.service;

import kr.co.tobetheone.ncmsw.inquiry.dto.InquiryRequest;
import kr.co.tobetheone.ncmsw.inquiry.dto.InquiryResponse;
import kr.co.tobetheone.ncmsw.inquiry.entity.Inquiry;
import kr.co.tobetheone.ncmsw.inquiry.repository.InquiryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class InquiryService {

    private final InquiryRepository inquiryRepository;

    @Transactional
    public InquiryResponse registerInquiry(InquiryRequest request) {
        log.info("새로운 홈페이지 문의 접수 - 회사: {}, 담당자: {}, 유형: {}",
                request.getCompanyName(), request.getContactPerson(), request.getInquiryType());

        Inquiry inquiry = inquiryRepository.save(request.toEntity());
        return InquiryResponse.from(inquiry);
    }
}
