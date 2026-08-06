---
id: Spec-DestinyUX
type: spec
status: draft
project: Lich_Viet
created: 2026-04-16
linked-to: [[Analysis-DestinyUI]]
---

# Đặc tả UX/UI: Thiết kế lại Dự đoán Vận hạn

## 1. Kiến trúc Thông tin (Phân cấp)
Để đảm bảo màn hình "dễ hiểu" và "rõ ràng", chúng tôi tuân theo tiêu chí tập trung từ trên xuống dưới:
1. **Hero (Dữ liệu Năm)**: Các điểm số trực quan cấp cao (Vòng tròn Radial).
2. **Lời dẫn (Tổng quan Năm)**: Các điểm nổi bật dễ đọc, gần gũi.
3. **Chi tiết (Phân tích theo Tháng)**: Phân rã dữ liệu theo thời gian.

## 2. Cấu trúc Bố cục: Bento Dashboard
Thay vì một danh sách dài văn bản, chúng tôi sử dụng **Bento Grid** để module hóa các thành phần:

### A. Phần Hero (Tổng quan Năm)
- **Thẻ Thống kê (2x2)**: 4 vòng tròn tiến trình Radial đại diện cho Tổng Quan, Tài Vận, Công Việc, Tình Duyên. Mỗi vòng tròn có một màu sắc "Mystic Glow" riêng biệt (Emerald, Amber, Sapphire, Ruby).
- **Thẻ Nội dung Năm (2x1 hoặc 2x2)**: Sử dụng kỹ thuật "Tiết lộ dần dần" (Progressive Disclosure). Hiển thị tóm tắt 3 dòng với nút "Xem Thêm" để mở rộng nội dung ngay tại chỗ.
- **Danh sách 12 cung (Tích hợp Progress Bar)**: Thay vì sử dụng một khối biểu đồ khổng lồ, điểm số của 12 cung được trực quan hóa bằng một thanh tiến trình nằm ngay dưới mô tả ngắn gọn của từng cung. Cách này giúp tiết kiệm diện tích màn hình, loại bỏ nhu cầu cuộn ngang, và cực kỳ dễ hiểu đối với tệp người dùng lớn tuổi.

### B. Phần Vận hạn Tháng (Ưu tiên Hiển thị)
Thay vì liệt kê toàn bộ 12 tháng, màn hình chính tập trung vào các thông tin quan trọng để tăng tính "tương tác" và "rõ ràng":
- **Lưới Thông tin Tháng (Bento)**:
  - **Thẻ: Tháng Hiện Tại (2x1)**: Hiển thị tháng âm lịch hiện tại, tóm tắt 2 dòng và nút "Chi Tiết" nổi bật.
  - **Thẻ: Tháng Tốt Nhất (1x1)**: Điểm nhấn thị giác (ví dụ: hiệu ứng Emerald/Gold). Hiển thị số tháng và biểu tượng "May mắn".
  - **Thẻ: Tháng Xấu Nhất (1x1)**: Phong cách cảnh báo nhẹ nhàng. Hiển thị số tháng và biểu tượng "Lưu ý".
- **Trình duyệt Tháng (Lưới tương tác)**:
  - Một lưới 4x3 gồm các nút số (1-12) đại diện cho tất cả các tháng âm lịch.
  - Chạm vào bất kỳ tháng nào (hoặc thẻ highlight) sẽ dẫn đến **Màn hình Chi tiết Tháng**.

## 3. Màn hình Chi tiết Tháng (Drill-down)
Để tránh gây rối mắt cho dashboard chính, nội dung chi tiết được chuyển sang một chế độ xem riêng:
- **Tiêu đề**: Tên tháng + điều hướng đến tháng Trước/Sau.
- **Nội dung**: 
  - **Danh mục (Bento)**: Tài Chính, Sức Khỏe, Tình Duyên, Công Việc. Mỗi danh mục có thẻ mở rộng riêng.
  - **Đánh giá**: Mỗi danh mục có đánh giá 5 sao hoặc điểm số để dễ dàng quét thông tin.
- **Hành động Quay lại**: Điều hướng dễ dàng trở lại chế độ xem Tổng quan Năm.

## 4. Mô hình Tương tác & Điều hướng
- **Gắn kết người dùng**: Bằng cách làm nổi bật các tháng "Tốt nhất" và "Xấu nhất", người dùng được thôi thúc về mặt cảm xúc để nhấn vào tìm hiểu, tăng tính "tương tác".
- **Dễ dàng quay lại**: "Trình duyệt Tháng" đóng vai trò là điểm xuất phát. Các chế độ xem chi tiết có nút "Quay lại" rõ ràng để trở về dashboard Năm.

## 5. Ngôn ngữ Thị giác
- **Chủ đề**: Chế độ tối cao cấp (Premium Dark mode) hoặc Kem nhẹ tối giản (Soft Cream Minimal) tùy thuộc vào cài đặt ứng dụng.
- **Chất liệu**: Các lớp "Kính" trong suốt (Glassmorphism) để tạo chiều sâu.
- **Typography**: Tiêu đề lớn, đậm cho tên các phần; font Sans-serif sạch sẽ cho nội dung văn bản.

---
## Related Documents
- [[Analysis-DestinyUI]]
- [[Design-MOC]]
