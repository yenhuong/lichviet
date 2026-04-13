# Cấu trúc thư mục chuẩn cho Business Analyst (BA)

Dưới đây là thiết kế cấu trúc thư mục chuyên nghiệp dành cho BA, giúp bạn quản lý dự án từ lúc thu thập yêu cầu cho đến khi nghiệm thu sản phẩm.

## 1. `planning/` (Kế hoạch & Roadmap)
Chứa các tài liệu định hướng tổng thể, lộ trình phát triển và kế hoạch thực thi.
- **`bprd/`**: Business & Product Requirements Document (VD: `BPRD_LichViet_v1.0.md`). Lõi yêu cầu kinh doanh.
- **`roadmap/`**: Lộ trình phát hành (Release Plan).
- **`sprints/`**: Kế hoạch theo từng Sprint.

## 2. `docs/` (Tài liệu kỹ thuật & Đặc tả)
Tài liệu dùng để bàn giao cho đội ngũ Development (Dev) và Quality Assurance (QA).
- **`srs/`**: Software Requirements Specification. Đặc tả chi tiết từng luồng nghiệp vụ.
- **`api_contracts/`**: Tài liệu giao tiếp API (nếu BA kiêm phân tích hệ thống).
- **`architecture/`**: Sơ đồ kiến trúc, Flowchart, UML.
- **`user_manuals/`**: Hướng dẫn sử dụng người dùng.

## 3. `references/` (Tài liệu tham khảo)
Dữ liệu đầu vào phục vụ phân tích.
- **`competitor_analysis/`**: Phân tích đối thủ.
- **`customer_feedback/`**: Phản hồi người dùng, khảo sát.
- **`meeting_notes/`**: Biên bản họp (Meeting Minutes).

## 4. `design_assets/` (Thiết kế UI/UX)
Nơi lưu trữ giao diện để đối chiếu với SRS.
- **`wireframes/`**: Bản phác thảo luồng UX (Low-fidelity).
- **`mockups/`**: Thiết kế UI chi tiết (High-fidelity). Bạn có thể để file ảnh xuất ra từ Figma hoặc document chứa Link Figma.
- **`assets/`**: Icon, logo sử dụng trong giao diện.

## 5. `testing/` (Kiểm thử & Nghiệm thu)
- **`test_cases/`**: Kịch bản kiểm thử (UAT Test Cases).
- **`uat_reports/`**: Biên bản nghiệm thu (User Acceptance Testing).
