---
id: Spec-DestinyComponents
type: spec
status: draft
project: Lich_Viet
created: 2026-04-16
linked-to: [[Spec-DestinyUX]]
---

# Đặc tả Thành phần: Các yếu tố Dự đoán Vận hạn

## 1. RadialStatRing (Tổng quan Năm)
Thay thế biểu đồ cột cũ bằng một hệ thống hiển thị hiện đại, cao cấp hơn.
- **Trực quan**:
  - Điểm số trung tâm (Số lớn, ví dụ: "79").
  - Thanh tiến trình tròn với độ dày nét linh hoạt (nét chính 6px, nét nền 4px).
  - **Hiệu ứng Glow**: Đổ bóng ngoài (drop-shadow) khớp với màu của vòng tròn để tạo chiều sâu "Neon" hoặc "Huyền bí".
- **Bảng màu (Semantic)**:
  - `Tổng Quan`: Emerald Green (#10B981)
  - `Tài Vận`: Amber Gold (#F59E0B)
  - `Công Việc`: Sapphire Blue (#3B82F6)
  - `Tình Duyên`: Ruby Crimson (#EF4444)

## 2. BentoHighlightCard (Thông tin Tháng ưu tiên)
Sử dụng cho 3 tháng quan trọng nhất (Hiện tại, Tốt nhất, Xấu nhất).
- **Bố cục**: Thẻ rộng (2x1) hoặc thẻ vuông (1x1).
- **Phong cách**:
  - `Nền`: Glassmorphism (độ mờ: 10px, độ trong suốt: 0.1).
  - `Nhãn Tag`: Một nhãn hình viên thuốc nhỏ ở góc trên bên phải (ví dụ: "Tốt Nhất").
- **Nội dung**: 
  - Số tháng (Sử dụng font Serif nghiêng lớn hoặc Sans hiện đại).
  - Icon mũi tên tương tác "Xem chi tiết".

## 3. MonthGridPicker (Điều hướng)
Một thành phần điều hướng dày đặc để chuyển nhanh đến bất kỳ tháng nào trong số 12 tháng.
- **Bố cục**: 4 cột x 3 hàng.
- **Trực quan**:
  - Các nút hình vuông bo góc (Bán kính: 16px).
  - Trạng thái mặc định: Viền mờ, bán trong suốt.
  - Trạng thái Tháng hiện tại: Đổ màu đặc hoặc có viền phát sáng.
  - Tương tác: Hiệu ứng phóng to khi di chuột/chạm (1.05x).

## 4. CategoryDetailCard (Màn hình Chi tiết Tháng)
Giao diện chi tiết cho các khía cạnh cụ thể của một tháng.
- **Trực quan**:
  - Bố cục Icon bên trái.
  - Tiêu đề và Đánh giá sao (1-5 sao).
  - Văn bản phân tích đa dòng.
- **Hành động**: Có thể thu gọn nếu văn bản quá dài để duy trì tiêu chuẩn "Calm UI".

---
## Tài liệu liên quan
- [[Spec-DestinyUX]]
- [[Analysis-DestinyUI]]
