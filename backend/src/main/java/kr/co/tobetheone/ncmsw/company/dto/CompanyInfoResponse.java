package kr.co.tobetheone.ncmsw.company.dto;

import java.util.List;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CompanyInfoResponse {

    private final String companyName;
    private final String brandName;
    private final String ceoName;
    private final String businessNumber;
    private final String address;
    private final String phone;
    private final String email;
    private final String operatingHours;
    private final List<HistoryItem> history;

    @Getter
    @Builder
    public static class HistoryItem {
        private final String year;
        private final String title;
        private final String description;
    }
}
