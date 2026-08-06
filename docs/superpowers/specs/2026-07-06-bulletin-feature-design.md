# Thiết kế Tính năng Bản tin (Ngày/7 Ngày/30 Ngày)

## 1. Tổng quan
Tính năng Bản tin nhằm cung cấp thông tin tổng hợp nhanh (kết hợp cả thông tin chung của cộng đồng và thông tin cá nhân hóa theo tuổi, giờ sinh) ngay tại Trang chủ. Mục tiêu giúp tăng tương tác và giữ chân người dùng (retention) mở app mỗi ngày.

## 2. Vị trí & Cấu trúc Giao diện (UI)
## 2. Vị trí & Cấu trúc Giao diện (UI)
- **Vị trí:** Thay thế khối "Câu hỏi tử vi / FAQ Slider" hiện tại (nằm ngay dưới Hero Banner và trên Khối Dịch vụ nổi bật). Vị trí này đảm bảo hiển thị ngay màn hình đầu tiên (above the fold) mà không bị trùng lặp thông tin với lịch chung ở banner trên.
- **Cấu trúc UI:** 
  - Sử dụng giao diện Siêu gọn (Compact Version): Tiêu đề "BẢN TIN" và 3 tab (Hôm nay | 7 ngày tới | 30 ngày tới) được xếp chung trên cùng 1 hàng ngang để tiết kiệm tối đa diện tích.
  - Vùng nội dung bên dưới áp dụng kỹ thuật **Cuộn ngang thò mép (Horizontal Peek Carousel)** để chứa nhiều bản tin nối tiếp nhau mà vẫn giữ nguyên chiều cao khiêm tốn của khối.

## 3. Chi tiết Nội dung (Content)
Mỗi tab là sự kết hợp hài hòa giữa thông tin chung và cá nhân hóa:

### 3.1. Tab "Hôm nay"
Hiển thị dưới dạng Dải thẻ cuộn ngang (Horizontal Peek Carousel). Có 3 thẻ, mỗi thẻ chiếm 85% chiều rộng, thẻ tiếp theo thò mép ra 15% để gợi ý người dùng vuốt sang (swipe).
- **Thẻ 1 (Sự kiện / Tiết khí):**
  - Hiển thị thông tin chuyển tiết hoặc lễ hội (Ví dụ: `⛅ Sự kiện hôm nay: Chính thức bước vào Tiết Lập Thu`).
  - Thiết kế nổi bật với nền xanh nhạt hoặc màu sắc tương ứng với sự kiện.
- **Thẻ 2 (Tử vi & Số/Màu may mắn):**
  - *Chỉ số may mắn:* Màu sắc hợp mệnh (Ví dụ: Chấm màu Đỏ) và Con số may mắn (Ví dụ: 6, 9) nằm đối diện tiêu đề tuổi.
  - *Lời khuyên cá nhân hóa:* Dự báo ngắn gọn (Ví dụ: *"Tài lộc vượng, rất thích hợp triển khai dự án đang dang dở"*).
- **Thẻ 3 (Câu hỏi Tử vi):**
  - Thay thế cho FAQ Slider cũ, hiển thị các Câu hỏi tử vi thường gặp (Ví dụ: *"Lá số của bạn có thể khởi nghiệp hay không?"*).
  - Hành động (Action): Bấm vào thẻ này sẽ chuyển hướng sang màn hình chi tiết `tuvi_faq_detail.html`.

### 3.2. Tab "7 ngày tới"
- **Thông tin chung:** Sự kiện nổi bật nhất trong tuần (Ví dụ: *"Tuần này có Rằm tháng 7 (Lễ Vu Lan)"*).
- **Thông tin cá nhân hóa:**
  - Biểu đồ năng lượng tuần (Mini bar chart) cực kỳ đơn giản với 7 cột đại diện cho 7 ngày.
  - Highlight bật lên cột của ngày tốt nhất (Cát) và ngày xấu nhất (Hung) cho riêng người dùng.
- **Hành động:** Nút "Xem chi tiết lịch tuần".

### 3.3. Tab "30 ngày tới" (Tháng)
- **Thông tin chung:** Chủ đề/Điểm nhấn của tháng (Ví dụ: *"Tháng 7 Âm lịch - Tháng cô hồn"*).
- **Thông tin cá nhân hóa:**
  - 2 gạch đầu dòng ngắn về Cát tinh (Lĩnh vực thuận lợi: Vd Tình duyên) và Hung tinh (Lĩnh vực cần tránh: Vd Giao dịch lớn) của user trong tháng.
- **Hành động:** Nút "Xem tử vi tháng".

## 4. Trải nghiệm người dùng (UX)
- Nội dung các tab nên được tải sẵn (preload) khi mở app để đảm bảo thao tác chạm chuyển tab phản hồi tức thì (zero latency).
- Click vào phần nền của thẻ (ngoài các nút) cũng sẽ đóng vai trò như việc bấm nút Xem chi tiết.
