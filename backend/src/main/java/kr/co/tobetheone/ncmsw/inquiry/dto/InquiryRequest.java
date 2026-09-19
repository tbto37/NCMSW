package kr.co.tobetheone.ncmsw.inquiry.dto;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import kr.co.tobetheone.ncmsw.inquiry.entity.Inquiry;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class InquiryRequest {

    @NotBlank(message = "회사명을 입력해주세요.")
    private String companyName;

    @NotBlank(message = "담당자 성함을 입력해주세요.")
    private String contactPerson;

    private String contactPosition;

    @NotBlank(message = "연락처를 입력해주세요.")
    private String phone;

    @NotBlank(message = "이메일을 입력해주세요.")
    @Email(message = "올바른 이메일 형식이 아닙니다.")
    private String email;

    @NotNull(message = "문의 유형을 선택해주세요.")
    private Inquiry.InquiryType inquiryType;

    private String estimatedVolume;

    @NotBlank(message = "문의 내용을 입력해주세요.")
    private String content;

    @AssertTrue(message = "개인정보 수집 및 이용에 동의해야 합니다.")
    private Boolean agreePrivacy;

    public Inquiry toEntity() {
        return Inquiry.builder()
                .companyName(companyName)
                .contactPerson(contactPerson)
                .contactPosition(contactPosition)
                .phone(phone)
                .email(email)
                .inquiryType(inquiryType)
                .estimatedVolume(estimatedVolume)
                .content(content)
                .agreePrivacy(agreePrivacy)
                .build();
    }
}
