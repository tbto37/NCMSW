package kr.co.tobetheone.ncmsw.company.controller;

import kr.co.tobetheone.ncmsw.company.dto.CompanyInfoResponse;
import kr.co.tobetheone.ncmsw.company.service.CompanyInfoService;
import kr.co.tobetheone.ncmsw.global.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/company")
@RequiredArgsConstructor
public class CompanyInfoController {

    private final CompanyInfoService companyInfoService;

    @GetMapping
    public ResponseEntity<ApiResponse<CompanyInfoResponse>> getCompanyInfo() {
        return ResponseEntity.ok(ApiResponse.ok(companyInfoService.getCompanyInfo()));
    }
}
