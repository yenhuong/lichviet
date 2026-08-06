# Design System & Component Specs (Tu Vi Van Han)

## 1. Design Tokens (Hệ Thống Giá Trị Cốt Lõi)

### A. Màu Sắc (Colors)
Dựa trên phong cách Tactile Maximalism & Premium Minimalist:
- **Backgrounds:**
  - `bg-base`: `#F5F7F5` (Màu Porcelain nhạt, tạo cảm giác thanh sạch, cao cấp)
  - `bg-card`: `#FFFFFF` (Nền thẻ trắng tinh, dùng với shadow mờ để tách lớp)
- **Primary Brand:**
  - `brand-primary`: `#0D5A3F` (Xanh Lục Bảo đậm, kế thừa bản sắc Lịch Việt)
  - `brand-primary-light`: `#E6F2ED` (Xanh mờ dùng cho background nút bấm)
- **Data (Tứ Trụ Phong Thủy):**
  - Giữ lại 4 tông màu chính nhưng sắc độ dịu hơn, gradient nhẹ:
  - `data-general` (Tổng quan): Điểm nhấn Vàng Gold (`#D4AF37`) -> Thể hiện sự toàn vẹn.
  - `data-wealth` (Tài vận): Cam Đất (`#E07A5F`) -> Sự thịnh vượng.
  - `data-job` (Công việc): Xanh Biển Chìm (`#3D5A80`) -> Sự kiên định.
  - `data-love` (Tình duyên): Đỏ Hồng Nhung (`#9E2A2B`) -> Tâm cảm.

### B. Typography
- Tái sử dụng Font mặc định hiện đại: `Inter` hoặc `SF Pro Display`.
- **H1 (Year/Name):** Bold, 20px, Tracking -0.5px.
- **H2 (Card Title):** Semi-bold, 16px.
- **Body & Labels:** Medium, 14px, Color: `#4A5568` (Xám tro, dễ đọc).
- **Data Callout (%):** Bold, 24px, Tracking -1px (Tạo độ impact).

### C. Spacing & Radius
- **Lưới (Bento Space):** Khoảng cách (gap) giữa các thẻ mặc định là `12px` (tạo độ khít hiện đại).
- **Border Radius:** `16px` cho thẻ Bento lớn, `100px` cho thẻ Pill tròn.

## 2. Component Specifications (Đặc tả Thành phần)

### A. Tủ Thông Tin Sinh Tử (Hero ID Card)
- **Layout:** Bento box trên cùng. Phân 2 cột, 70% chữ (Trái), 30% ảnh (Phải).
- **Thành phần:** 
  - Tên (Uppercase, đậm).
  - List thông tin: Ngày sinh (Dương/Âm), Giờ sinh, Mệnh (Các dòng list này dùng icon cực mảnh, căn lề thẳng tắp).
  - Ảnh con Giáp: Tách nền trong suốt, đổ bóng soft-shadow xuống nền card tạo hiệu ứng 3D nhẹ (Tactile).
- **Nút:** `Xem thông tin người thân` thiết kế dạng ghost button (Text `brand-primary`, bg `brand-primary-light`), bo tròn pill, đặt gọn gàng đáy card.

### B. Navigation Pill List (Cuộn chọn Năm)
- Dạng scroll ngang mượt mà (Hide scrollbar).
- **Trạng thái Mặc định:** Nền xám nhạt (`#EDF2F7`), chữ xám.
- **Trạng thái Active:** Nền `brand-primary`, chữ trắng, hiệu ứng chuyển màu 200ms.

### C. Bento Cards (Điểm Vận Hạn)
Đây là thay thế cho Bar Chart cũ.
- Chia lưới: 2x2. Có 4 Bento cards nhỏ.
- Mỗi card sẽ hiển thị:
  - Top-left: Tiêu đề (Tài Vận, Công Việc...). Cùng icon nhỏ xíu thanh lịch.
  - Center: Gauge/Radial Ring (Vòng năng lượng). Vòng tròn khuyết 360 độ. Bên mép viền sẽ hiện gradient theo percent. Điểm % nằm đúng giữa tâm vòng.
  - Shadow: Bóng siêu nhòa (blur 24px) bên dưới giúp card có cảm giác "floating".

## 3. Scope & Prototypes
Scope bao gồm: Màn hình chính "Dự đoán vận hạn năm".
Chúng ta sẽ dựng 1 trang HTML/CSS/JS duy nhất với công nghệ Tailwind (via CDN) kết hợp CSS Variables và Chart.js (hoặc SVG custom code cho phần Gauge ring) để tái hiện giao thức Bento Grid này nhanh chóng và lộng lẫy nhất.
