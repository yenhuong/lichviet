---
id: Story-ChiTietVanHanThang
type: story
status: draft
project: Lich_Viet
created: 2026-05-11
linked-to: [[Story-VanHan2026]]
---
# User stories - Màn hình chi tiết vận hạn 12 tháng năm 2026

Tài liệu này định nghĩa các user story cho màn hình **Chi tiết vận hạn 12 tháng**. Màn hình cho phép người dùng xem luận giải chi tiết vận hạn cho từng tháng âm lịch trong năm.

**Prototype tham chiếu**: [[destiny_month_detail.html]]

---

## 1. App Bar và điều hướng

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Điều hướng quay lại từ chi tiết tháng

> **Với vai trò** người dùng đang xem vận hạn tháng
> **Tôi muốn** quay lại màn hình tổng quan vận hạn năm
> **Để** tiếp tục xem các thông tin tổng quát khác

### Tiêu chí nghiệm thu

- [ ] App Bar hiển thị cố định trên cùng
- [ ] Tiêu đề: "Vận hạn 12 tháng âm lịch {năm}" (VD: 2026).
- [ ] Nút Back-> Điều hướng về màn hình tổng quan vận hạn

### Luồng thao tác

1. Người dùng nhấn nút Back trên App Bar.
2. Hệ thống chuyển hướng về màn hình tổng quan vận hạn năm.

---

## 2. Thanh chọn tháng (Circular Month Tabs)

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Chọn tháng để xem vận hạn

> **Với vai trò** người dùng đang ở màn hình chi tiết 12 tháng
> **Tôi muốn** dễ dàng chọn và chuyển đổi giữa các tháng âm lịch
> **Để** xem luận giải cho tháng mà tôi quan tâm

### Tiêu chí nghiệm thu

- [ ] Hiển thị danh sách 12 tháng dạng thẻ, cuộn ngang (horizontal scroll)
- [ ] Mỗi thẻ tháng hiển thị: Nhãn "Tháng", Số tháng, Xếp hạng sao (VD: ★★★☆☆).
- [ ] **Trạng thái Active**: nền xanh.
- [ ] **Trạng thái Inactive**: nền trắng
- [ ] Khi nhấn vào thẻ tháng -> Chuyển sang tháng đó, cập nhật toàn bộ nội dung bên dưới.
- [ ] Tự động cuộn tháng đang chọn (Active) vào giữa màn hình khi khởi tạo hoặc khi chuyển đổi.

### Luồng thao tác

1. Người dùng cuộn ngang thanh chọn tháng.
2. Người dùng nhấn vào "Tháng 6".
3. Hệ thống cập nhật thẻ "Tháng 6" thành Active và cuộn nó vào tâm màn hình.
4. Hệ thống tải và hiển thị nội dung luận giải của Tháng 6.

---

## 3. Thẻ tóm tắt tháng (Hero Summary Card)

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Xem tóm tắt nhanh vận hạn tháng

> **Với vai trò** người dùng vừa chọn một tháng cụ thể
> **Tôi muốn** thấy ngay các chỉ số quan trọng và đánh giá tổng quát
> **Để** nắm bắt nhanh tình hình tháng đó mà không cần đọc hết nội dung dài

### Tiêu chí nghiệm thu

- [ ] Hiển thị thẻ tóm tắt với nền gradient xanh mờ.
- [ ] **Status Badge**: Hiển thị nhãn đặc biệt nếu có (VD: "Cần lưu ý", "Tháng hiện tại", "Tháng tốt").
- [ ] **Tiêu đề**: "Tháng {X} âm lịch".
- [ ] **Thời gian**: Hiển thị khoảng ngày Dương lịch tương ứng.
- [ ] **Câu tóm tắt**: Luận giải ngắn gọn cho tháng đó.
- [ ] **Rating Grid**: Lưới 2x2 hiển thị 4 phương diện:
  - Tài vận
  - Công việc
  - Tình duyên
  - Gia đạo
- [ ] Mỗi phương diện hiển thị nhãn và mức độ (VD: Tốt - xanh lá, Cần lưu ý - đỏ, ổn định - vàng).

---

## 4. Nội dung luận giải chi tiết (Content Sections)

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Đọc luận giải chi tiết theo phương diện

> **Với vai trò** người dùng muốn tìm hiểu sâu về vận hạn
> **Tôi muốn** đọc các phân tích chi tiết cho từng lĩnh vực trong tháng
> **Để** chuẩn bị tâm lý và có kế hoạch ứng phó phù hợp

### Tiêu chí nghiệm thu

- [ ] Hiển thị các khối nội dung (Section) phân tách rõ ràng theo cấu trúc dữ liệu server trả về.
- [ ] Nội dung phải căn chỉnh lề trái phảiGhi chú kỹ thuật.

---

## 5. Khám phá thêm

Khối khám phá thêm ở màn tổng quan vận hạn
