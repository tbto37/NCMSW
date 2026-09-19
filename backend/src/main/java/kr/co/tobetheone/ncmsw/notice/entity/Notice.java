package kr.co.tobetheone.ncmsw.notice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "notices")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Notice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(length = 50)
    private String category;

    @Column(nullable = false)
    private Boolean isPinned;

    @Column(nullable = false)
    private Integer viewCount;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Builder
    public Notice(String title, String content, String category, Boolean isPinned) {
        this.title = title;
        this.content = content;
        this.category = category != null ? category : "일반";
        this.isPinned = isPinned != null ? isPinned : false;
        this.viewCount = 0;
    }

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        if (this.viewCount == null) {
            this.viewCount = 0;
        }
        if (this.isPinned == null) {
            this.isPinned = false;
        }
    }

    public void incrementViewCount() {
        this.viewCount++;
    }
}
