package kr.co.tobetheone.ncmsw.notice.service;

import java.util.List;
import kr.co.tobetheone.ncmsw.global.exception.CustomException;
import kr.co.tobetheone.ncmsw.global.exception.ErrorCode;
import kr.co.tobetheone.ncmsw.notice.dto.NoticeResponse;
import kr.co.tobetheone.ncmsw.notice.entity.Notice;
import kr.co.tobetheone.ncmsw.notice.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class NoticeService {

    private final NoticeRepository noticeRepository;

    @Transactional(readOnly = true)
    public List<NoticeResponse> getNoticeList() {
        return noticeRepository.findAllByOrderByIsPinnedDescCreatedAtDesc().stream()
                .map(NoticeResponse::from)
                .toList();
    }

    @Transactional
    public NoticeResponse getNoticeDetail(Long id) {
        Notice notice = noticeRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.RESOURCE_NOT_FOUND, "공지사항을 찾을 수 없습니다. (ID: " + id + ")"));

        notice.incrementViewCount();
        return NoticeResponse.from(notice);
    }
}
