---
id: Story-ChiTietVanHanNam
type: story
status: draft
project: Lich_Viet
created: 2026-05-08
updated: 2026-05-11
linked-to: [[Story-VanHan2026]]
---
# User stories - Màn hình tổng quan năm 2026

Tài liệu này định nghĩa các user story cho màn hình **tổng quan năm**. Màn hình phân tích chi tiết các mục tổng quan năm theo năm, bao gồm 5 tab: Tổng quan, Tài lộc, Công việc, Tình duyên, Các vận hạn khác.

**Prototype tham chiếu**: [[destiny_year_detail.html]]

---

## 1. App Bar và điều hướng quay lại

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Điều hướng quay lại từ tổng quan năm

> **Với vai trò** người dùng đang xem tổng quan năm
> **Tôi muốn** quay lại màn hình tổng quan vận hạn
> **Để** tiếp tục duyệt các thông tin khác

### Tiêu chí nghiệm thu

- [ ] App Bar hiển thị cố định trên cùng
- [ ] Tiêu đề App Bar hiển thị "Tổng quan năm {năm}" (VD: "Tổng quan năm 2026"), căn giữa.
- [ ] Nút Back nằm bên trái
- [ ] Nhấn nút Back → Navigate về màn hình tổng quan vận hạn

### Luồng thao tác

1. Người dùng đang xem tổng quan năm.
2. Nhấn nút Back trên App Bar.
3. Hệ thống Navigate về màn hình tổng quan vận hạn.

---

## 2. Tab Bar điều hướng các mục tổng quan năm

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Chuyển đổi giữa các mục tổng quan năm

> **Với vai trò** người dùng đang xem tổng quan năm
> **Tôi muốn** chọn các tab mục tổng quan khác nhau
> **Để** xem đánh giá chi tiết cho từng lĩnh vực cụ thể trong năm

### Tiêu chí nghiệm thu

- [ ] Ghim Tab Bar khi cuộn trang
- [ ] Tab Bar cuộn ngang (horizontal scroll)
- [ ] Hiển thị 5 Tab cố định theo thứ tự: Tổng quan, Tài lộc, Công việc, Tình duyên, Các vận hạn khác.
- [ ] Mỗi Tab hiển thị: Icon mục , Tên mục, Mức đánh giá + Phần trăm (VD: "Khá · 65%").
- [ ] Tab "Các vận hạn khác" ẩn dòng đánh giá phần trăm
- [ ] Trạng thái Active: nền màu xanh
- [ ] Trạng thái Inactive: Nền trắng
- [ ] Khi nhấn Tab → Chuyển Tab Active, ẩn content Tab cũ, hiển thị content Tab mới.

### Luồng thao tác

1. Người dùng nhấn vào 1 mục Tổng quan vận khí ở khối tổng quan năm ở màn tổng quan vận hạn → Tab "Tổng quan" Active.
2. Cuộn ngang Tab Bar để thấy các tab khác.
3. Nhấn chọn Tab "Tài lộc".
4. Hệ thống đổi Active state sang "Tài lộc", ẩn content "Tổng quan".
5. Hệ thống hiển thị content "Tài lộc" bên dưới.

---

## 3. Chi tiết từng tab

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Đọc chi tiết từng mục tổng quan năm

> **Với vai trò** người dùng đang xem 1 tab
> **Tôi muốn** đọc chi tiết nội dung của tab đó
> **Để** nắm được bức tranh chung về vận hạn trong năm

### Tiêu chí nghiệm thu

**Khối "Tổng kết nhanh":**

- [ ] Hiển thị đầu tiên trong tab, nền xanh nhạt
- [ ] Label "Tổng kết nhanh"
- [ ] Nội dung tóm tắt: hiển thị nội dung tóm tắt của từng mục
- [ ] Tab các vận khác thì không có khối này

**Khối "Nội dung chi tiết":**

- [ ] Hiển thị nội dung chi tiết theo cấu trúc server trả về

**Conditional rendering:**

- [ ] Nếu bất kỳ khối nào không có dữ liệu từ API → Ẩn khối đó, không hiển thị khối trống.

### Luồng thao tác

1. Người dùng chọn tab "Tổng quan".
2. Hệ thống render các khối thông tin trên
3. Nếu khối thiếu data → Bỏ qua, không render.

---

## 4. Khám phá thêm - Grid tiện ích liên quan

- Khối khám phá thêm ở màn tổng quan vận hạn
