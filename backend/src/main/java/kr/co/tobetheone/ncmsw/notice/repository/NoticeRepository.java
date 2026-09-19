package kr.co.tobetheone.ncmsw.notice.repository;

import java.util.List;
import kr.co.tobetheone.ncmsw.notice.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long> {
    List<Notice> findAllByOrderByIsPinnedDescCreatedAtDesc();
}
