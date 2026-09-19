package kr.co.tobetheone.ncmsw.inquiry.controller;

import jakarta.validation.Valid;
import kr.co.tobetheone.ncmsw.global.response.ApiResponse;
import kr.co.tobetheone.ncmsw.inquiry.dto.InquiryRequest;
import kr.co.tobetheone.ncmsw.inquiry.dto.InquiryResponse;
import kr.co.tobetheone.ncmsw.inquiry.service.InquiryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/inquiries")
@RequiredArgsConstructor
public class InquiryController {

    private final InquiryService inquiryService;

    @PostMapping
    public ResponseEntity<ApiResponse<InquiryResponse>> submitInquiry(@Valid @RequestBody InquiryRequest request) {
        InquiryResponse response = inquiryService.registerInquiry(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("문의가 성공적으로 접수되었습니다. 담당자가 빠른 시일 내 연락드리겠습니다.", response));
    }
}
