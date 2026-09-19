package kr.co.tobetheone.ncmsw.notice.controller;

import java.util.List;
import kr.co.tobetheone.ncmsw.global.response.ApiResponse;
import kr.co.tobetheone.ncmsw.notice.dto.NoticeResponse;
import kr.co.tobetheone.ncmsw.notice.service.NoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/notices")
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<NoticeResponse>>> getNotices() {
        return ResponseEntity.ok(ApiResponse.ok(noticeService.getNoticeList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<NoticeResponse>> getNoticeDetail(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(noticeService.getNoticeDetail(id)));
    }
}
