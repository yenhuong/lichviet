# Design Research: Tử Vi Vận Hạn (Yearly Destiny Prediction)

## 1. Phân Tích Thực Trạng (Dựa trên UI hiện tại)
* **Điểm mạnh:** Cung cấp đầy đủ thông tin cơ bản (Tên, ngày sinh, giờ sinh, mệnh, biểu đồ phần trăm).
* **Vấn đề / Pain points:**
  - **Trải nghiệm thị giác:** Layout còn thô, khoảng trắng (whitespace) chưa được tối ưu khiến giao diện bí bách. Hình minh họa con giáp (gà) mang phong cách hội họa truyền thống nhưng cách đặt trên nền trắng làm nó bị tách rời khỏi tổng thể.
  - **Biểu đồ (Data Visualization):**  Bar chart (Biểu đồ cột) tuy rõ ràng nhưng mang tính chất "báo cáo tài chính/excel" nhiều hơn là một ứng dụng tâm linh, tử vi. Thiếu đi sự kết nối cảm xúc và yếu tố huyền bí. Màu sắc cột quá cơ bản (Green, Orange, Blue, Red ở sắc độ gắt) gây chói mắt và làm mất đi vẻ cao cấp.
  - **Cấu trúc thông tin (Hierarchy):** Tab chuyển năm dạng nút bấm dàn ngang tốn không gian. Nút "Xem thông tin người thân" nằm chèn ép với các nội dung khác.

## 2. Xu Hướng Trải Nghiệm (UX) & Giao Diện (UI) năm 2026 trong Mảng Tâm Linh / Tử Vi (Astrology & Wellness)
Qua phân tích sâu các xu hướng thiết kế năm 2026, có 3 yếu tố cốt lõi đang định hình lại ngành ứng dụng tử vi:

### A. Cấu Trúc Bento Grid Hiện Đại
* **Logical Partitioning:** Chia nhỏ luồng thông tin thành các khối "Bento" mượt mà (vd: 1 khối lớn cho điểm tổng quan trong năm, các khối phụ cho công việc, tình duyên). Giúp xử lý khối lượng dữ liệu lớn mà không gây quá tải nhận thức.
* **Asymmetrical Balance:** Không chia lưới đều đặn tẻ nhạt. Ưu tiên các thẻ (cards) kết hợp hình vuông/chữ nhật dài ngắn khác nhau tạo ra sự phân cấp thị giác (Visual Hierarchy) tự nhiên.

### B. Thẩm Mỹ "Tactile Maximalism" & "Premium Minimal"
* Xu hướng thoát khỏi flat-design an toàn và nhàm chán. Người dùng chuộng **"Digital Texture"**: Các nút/thẻ có độ bóng nhẹ (glassmorphism), bề mặt sần hoặc gradient tĩnh lặng để tạo cảm giác "chạm" được (tactile).
* Các ứng dụng tâm linh cao cấp sử dụng sắc độ trầm tĩnh, sang trọng (Deep Emerald, Navy trầm, Sapphire) làm nền, kết hợp yếu tố phát sáng nhẹ (Glow/Cyber Neon) ở thông số quan trọng để nhấn mạnh năng lượng của người xem thay vì dùng các khối màu đặc rực rỡ.

### C. Nâng Cấp Biểu Đồ Trực Quan (Data Visualization)
* Loại bỏ dạng biểu đồ cột truyền thống trong các tính năng thiên về con người và cảm xúc. Thay thế bằng **Radar Chart** (Biểu đồ mạng lưới tâm điểm) hoặc **Radial/Gauge Chart** (Biểu đồ vòng cung khép kín). Những hình thái bo tròn (circular form) luôn mang năng lượng của sự hòa hợp, phong thủy và vận mệnh ngũ hành hơn là đường nét gốc cạnh cắt xẻ.
* **High Data-Ink Ratio:** Tối giản hóa mảng đường lưới (grid lines/axis). Dùng màu Semantic có độ bão hòa thấp pastel hoặc gradient đồng điệu tông xuyệt tông với màu sắc phong thủy của năm/mệnh người xem trải qua.

## 3. Đề Xuất Định Hướng Sáng Tạo (Creative Direction) cho Lịch Việt
Để nâng cấp toàn diện tính thẩm mỹ và cảm giác WOW cho màn hình "Dự đoán vận hạn", tôi đưa ra định hướng sau để triển khai prototype:

1. **Giao Diện "Premium Bento Dashboard":**
   - Đóng gói toàn bộ thông tin cá nhân (Tên, Năm Sinh, Giờ, Mệnh, Ảnh Con Giáp) vào một "Mệnh Bảng" (Hero Card) ở trên cùng. Khu vực ảnh con giáp sẽ được xử lý cắt viền tinh tế, lồng ghép vào nền mây khối nổi/graphic sang trọng.
2. **Loại Bỏ Bar Chart thành Vòng Năng Lượng (Stats Ring/Gauge) hoặc Lưới Radar:**
   - Đưa dữ liệu Tổng Quan, Tài Vận, Công Việc, Tình Duyên thành dạng các "Vòng năng lượng" hình tròn khép kín đặt trong lưới Bento, đổ màu gradient sang trọng tương ứng với ngũ hành. (Khắc phục hoàn toàn cảm giác giống báo cáo thống kê).
3. **Cụm Chuyển Năm Sinh Tiện Lợi (Pill-shaped Infinite Scroll):**
   - Đổi 4 nút tab thành dạng một thanh trượt Pill-shape mượt mà dính sát, focus vào năm nay, làm nhẹ giao diện chữ Text hiển thị.
4. **Màu Sắc & Hình Khối:**
   - Tiếp tục bám sát màu Xanh Lục Bảo đặc trưng của Lịch Việt nhưng có chiều sâu hơn (deep gradient background hoặc glassmorphism). Font chữ sử dụng đậm/nhạt tương phản mạnh, hiện đại và clean. Các thông số phần trăm hiển thị với style số học to, rõ, ấn tượng.

Mục tiêu là biến kết quả dự đoán trở thành một thẻ Tarot digital: Cao cấp, Cá nhân hóa và Đáng chia sẻ (Sharable).
