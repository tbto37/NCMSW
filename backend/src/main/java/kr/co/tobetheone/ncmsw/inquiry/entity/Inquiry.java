package kr.co.tobetheone.ncmsw.inquiry.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "inquiries")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Inquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String companyName;

    @Column(nullable = false, length = 50)
    private String contactPerson;

    @Column(length = 50)
    private String contactPosition;

    @Column(nullable = false, length = 30)
    private String phone;

    @Column(nullable = false, length = 100)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private InquiryType inquiryType;

    @Column(length = 100)
    private String estimatedVolume;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(nullable = false)
    private Boolean agreePrivacy;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    public enum InquiryType {
        B2B_SOLUTION,
        BULK_QUOTE,
        SAMPLE_REQUEST,
        GENERAL
    }

    @Builder
    public Inquiry(String companyName, String contactPerson, String contactPosition,
                   String phone, String email, InquiryType inquiryType,
                   String estimatedVolume, String content, Boolean agreePrivacy) {
        this.companyName = companyName;
        this.contactPerson = contactPerson;
        this.contactPosition = contactPosition;
        this.phone = phone;
        this.email = email;
        this.inquiryType = inquiryType != null ? inquiryType : InquiryType.GENERAL;
        this.estimatedVolume = estimatedVolume;
        this.content = content;
        this.agreePrivacy = agreePrivacy;
    }

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}
