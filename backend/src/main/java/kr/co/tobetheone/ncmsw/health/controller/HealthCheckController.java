package kr.co.tobetheone.ncmsw.health.controller;

import java.time.LocalDateTime;
import java.util.Map;
import kr.co.tobetheone.ncmsw.global.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/health")
public class HealthCheckController {

    @GetMapping
    public ResponseEntity<ApiResponse<Map<String, Object>>> healthCheck() {
        return ResponseEntity.ok(ApiResponse.ok("NCMSW API Server is running healthy.", Map.of(
                "status", "UP",
                "timestamp", LocalDateTime.now().toString(),
                "service", "ncmsw-backend"
        )));
    }
}
