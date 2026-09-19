package kr.co.tobetheone.ncmsw.notice.dto;

import java.time.LocalDateTime;
import kr.co.tobetheone.ncmsw.notice.entity.Notice;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class NoticeResponse {

    private final Long id;
    private final String title;
    private final String content;
    private final String category;
    private final Boolean isPinned;
    private final Integer viewCount;
    private final LocalDateTime createdAt;

    public static NoticeResponse from(Notice notice) {
        return NoticeResponse.builder()
                .id(notice.getId())
                .title(notice.getTitle())
                .content(notice.getContent())
                .category(notice.getCategory())
                .isPinned(notice.getIsPinned())
                .viewCount(notice.getViewCount())
                .createdAt(notice.getCreatedAt())
                .build();
    }
}
