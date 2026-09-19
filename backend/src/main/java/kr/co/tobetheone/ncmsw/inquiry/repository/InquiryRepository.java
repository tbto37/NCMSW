package kr.co.tobetheone.ncmsw.inquiry.repository;

import kr.co.tobetheone.ncmsw.inquiry.entity.Inquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InquiryRepository extends JpaRepository<Inquiry, Long> {
}
