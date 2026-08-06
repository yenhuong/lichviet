---
id: Design-System-Main
type: spec
status: draft
project: Lich_Viet
created: 2026-04-16
---

# Hệ thống Thiết kế: Nền tảng & Token

## 1. Typography (Phông chữ)
Chúng tôi sử dụng các họ phông chữ Sans-serif có độ đọc cao với các độ dày (weight) khác nhau để tạo phân cấp.
- **Phông chữ chính**: `Outfit` hoặc `Inter` (Sans Serif).
- **Nhấn mạnh (Tùy chọn)**: `Playfair Display` (Serif) cho số tháng trong các thẻ Highlight.

| Cấp độ | Kích thước | Độ dày | Khoảng cách | Mục đích |
| :--- | :--- | :--- | :--- | :--- |
| **Heading 1** | 32px | Bold (700) | -0.02em | Năm Hero, Tiêu đề chính |
| **Heading 2** | 24px | Semibold (600) | -0.01em | Tiêu đề phần, Số tháng |
| **Subheading** | 18px | Medium (500) | 0 | Danh mục phụ (Tài vận, v.v.) |
| **Body** | 16px | Regular (400) | 0 | Văn bản nội dung |
| **Caption** | 13px | Regular (400) | +0.01em | Các nhãn nhỏ, ngày tháng |

## 2. Bảng màu (Tối giản Cao cấp)
Chuyển từ màu phẳng sang bảng màu tập trung vào chiều sâu.

### A. Màu sắc Vận hạn (Hiệu ứng phát sáng)
| Tên | Mã Màu | Mục đích |
| :--- | :--- | :--- |
| **Emerald Insight** | #10B981 | Tổng quan, Nhãn may mắn |
| **Amber Fortune** | #F59E0B | Tài vận, Chỉ số tiền bạc |
| **Sapphire Vision** | #3B82F6 | Công việc, Chỉ số sự nghiệp |
| **Ruby Passion** | #EF4444 | Tình duyên, Quan hệ |

### B. Nền & Bề mặt
| Tên | Mã Màu / Alpha | Mục đích |
| :--- | :--- | :--- |
| **Glass Base** | rgba(255, 255, 255, 0.1) | Nền thẻ Bento |
| **Glass Border** | rgba(255, 255, 255, 0.2) | Đường viền tinh tế |
| **Deep Background** | #0F172A (Tối) | Khung ứng dụng (Chế độ tối) |
| **Soft Background** | #F8FAFC (Sáng) | Khung ứng dụng (Chế độ sáng) |

## 3. Chuyển động & Tương tác Vi mô
Chuyển động là chìa khóa để làm cho ứng dụng cảm thấy "Sống động" và "Cao cấp".
- **Làm mềm tương tác**: `Curves.easeInOutCubic` (Tiêu chuẩn Flutter cho cảm giác tự nhiên).
- **Các hiệu ứng chính**:
  - **Radial Entrance**: Vòng tròn chạy từ 0% đến giá trị hiện tại trong 800ms với độ nảy nhẹ.
  - **Month Transition**: Khi chuyển tháng, nội dung mờ dần (fade in) kết hợp trượt dọc 20px.
  - **Haptic Feedback**: Phản hồi rung nhẹ khi chạm vào các mục trong Lưới tháng.

---
## Tài liệu liên quan
- [[Spec-DestinyComponents]]
- [[Spec-DestinyUX]]
