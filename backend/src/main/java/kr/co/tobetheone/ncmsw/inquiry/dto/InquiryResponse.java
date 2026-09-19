package kr.co.tobetheone.ncmsw.inquiry.dto;

import java.time.LocalDateTime;
import kr.co.tobetheone.ncmsw.inquiry.entity.Inquiry;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class InquiryResponse {

    private final Long id;
    private final String companyName;
    private final String contactPerson;
    private final Inquiry.InquiryType inquiryType;
    private final LocalDateTime createdAt;

    public static InquiryResponse from(Inquiry inquiry) {
        return InquiryResponse.builder()
                .id(inquiry.getId())
                .companyName(inquiry.getCompanyName())
                .contactPerson(inquiry.getContactPerson())
                .inquiryType(inquiry.getInquiryType())
                .createdAt(inquiry.getCreatedAt())
                .build();
    }
}
