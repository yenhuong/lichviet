---
id: Story-VanHan2026
type: story
status: draft
project: Lich_Viet
created: 2026-05-07
linked-to: []
---
# User stories cho màn tổng quát Vận hạn năm 2026

Tài liệu này định nghĩa các user story cho màn hình tổng quát Vận hạn năm 2026

## 1. Thông tin người dùng

### Câu chuyện người dùng

**Tiêu đề**: Khách hàng - Xem thông tin cá nhân và chuyển đổi hồ sơ

> **Với vai trò** khách hàng tra cứu vận hạn
> **Tôi muốn** kiểm tra thông tin cá nhân hiện tại hoặc chọn xem cho người thân
> **Để** tôi đảm bảo các chỉ số tử vi hiển thị chính xác cho đối tượng mục tiêu

### Tiêu chí nghiệm thu

- [ ] Hiển thị đầy đủ thông tin: Họ tên, Ngày tháng năm sinh (kèm giờ sinh), Giới tính người dùng
- [ ] Ảnh minh hoạ tuổi của người dùng
- [ ] Ưu tiên hiển thị thông tin của người xem tử vi gần nhất
- [ ] Hiển thị nút "Xem cho người thân".
- [ ] Khi bấm nút "Xem cho người thân", mở danh sách thành viên gia đình. Chọn 1 thành viên đủ hết thông tin (ngày sinh, giờ sinh, giới tính) thì quay lại màn này, cập nhật lại dữ liệu theo người được chọn

### Luồng thao tác

1. Người dùng mở màn hình Vận hạn năm 2026.
2. Hệ thống tải dữ liệu hồ sơ mặc định và hiển thị lên UI.
3. Người dùng bấm "Xem cho người thân".
4. Hệ thống mở danh sách hồ sơ để lựa chọn.
5. Sau khi chọn, hệ thống tải lại toàn bộ nội dung Vận hạn theo hồ sơ mới.

## 2. Chỉ số nổi bật năm 2026

### Câu chuyện người dùng

**Tiêu đề**: Khách hàng - Xem chỉ số tổng quan năm/tháng 2026

> **Với vai trò** người dùng muốn xem vận hạn năm
> **Tôi muốn** xem đánh giá tổng quan bằng biểu đồ trực quan và các tháng đáng chú ý
> **Để** tôi nhanh chóng nắm bắt bức tranh toàn cảnh về năm 2026 của mình

### Tiêu chí nghiệm thu

- [ ] Hiển thị 4 biểu đồ tròn chỉ số tổng quan năm gồm: Tổng quan, Tài lộc, Công việc, Tình duyên.
- [ ] Mỗi biểu đồ hiển thị phần trăm (%) và nhãn đánh giá tương ứng với 5 mức:
  - `> 85%`: **Rất tốt** (Màu Xanh lá đậm)
  - `65% - 84%`: **Tốt** (Màu Xanh dương)
  - `50% - 64%`: **Ổn định** (Màu Vàng)
  - `25% - 49%`: **Chưa thuận lợi** (Màu Cam)
  - `< 25%`: **Cần lưu ý** (Màu Đỏ)
- [ ] Hiển thị đầy đủ đoạn tóm tắt tổng quan năm. Không có thì ẩn đi
- [ ] Hiển thị danh sách tháng âm: Tháng tốt (màu xanh), Tháng cần lưu ý (màu cam).
- [ ] Hiển thị tháng âm lịch hiện tại: số sao + 3 mức đánh giá (Tốt, Ổn định, Cần chú ý).

### Luồng thao tác

1. Hệ thống nhận dữ liệu tử vi của người dùng từ API.
2. Hiển thị điểm số (%) lên các biểu đồ tròn.
3. Hiển thị text tóm tắt và danh sách các tháng tốt/xấu theo dữ liệu tính toán.

---

## 3. Tổng quan năm

### Câu chuyện người dùng

**Tiêu đề**: Khách hàng - Truy cập chi tiết các khía cạnh tổng quan năm

> **Với vai trò** người dùng tra cứu vận hạn
> **Tôi muốn** xem danh sách các khía cạnh tổng quan năm (Tài lộc, Công việc...)
> **Để** tôi có thể bấm vào xem bài phân tích chuyên sâu cho từng chủ đề

### Tiêu chí nghiệm thu

- [ ] Hiển thị danh sách các mục: Tổng quan vận khí, Tài lộc, Công việc, Tình duyên, Các vận hạn khác (Cung).
- [ ] Mỗi mục có icon, tiêu đề, mức đánh giá (VD: Khá • 65%) và đoạn tóm tắt ngắn (tối đa 2 dòng, dài quá thì hiện 3 chấm).
- [ ] Khi bấm vào mỗi mục -> chuyển tới màn chi tiết tổng quan năm và mở đúng tab tương ứng.

### Luồng thao tác

1. Người dùng cuộn xuống phần Tổng quan năm 2026.
2. Xem điểm số và tóm tắt ngắn của từng khía cạnh.
3. Người dùng bấm vào mục "Tài lộc".
4. Ứng dụng điều hướng sang màn hình Chi tiết tổng quan năm và tự động focus vào tab "Tài lộc".

---

## 4. Vận hạn 12 tháng âm lịch

### Câu chuyện người dùng

**Tiêu đề**: Khách hàng - Tương tác với danh sách 12 tháng âm lịch

> **Với vai trò** người dùng tra cứu vận hạn
> **Tôi muốn** chọn xem nhanh đánh giá của từng tháng âm lịch trong năm
> **Để** tôi biết nên cẩn thận hoặc tận dụng cơ hội vào tháng nào

### Tiêu chí nghiệm thu

- [ ] Hiển thị danh sách 12 tab tháng âm lịch. Mặc định tự động cuộn để tháng hiện tại (active) nằm ở giữa màn hình.
- [ ] Tháng được chọn hiển thị nổi bật (to hơn, nền xanh).
- [ ] Nhấn vào 1 tháng thì chuyển sang màn hình Chi tiết vận hạn tháng và chọn đúng tháng đó
- [ ] Hiển thị Card tóm tắt tháng hiện tại: Tên tháng âm, ngày dương lịch tương ứng, tóm tắt nội dung tháng, nhãn tháng tốt/tháng cần lưu ý nếu có.
- [ ] Card tóm tắt có nút "Xem chi tiết tháng này", icon >> làm hiệu ứng di chuyển sang trái phải. Khi bấm sẽ chuyển sang màn hình Chi tiết vận hạn tháng và chọn đúng tháng đó.

### Luồng thao tác

1. Người dùng cuộn đến phần Vận hạn 12 tháng.
2. Băng chuyền hiển thị tháng hiện tại (VD: Tháng 4) là active. Card tóm tắt bên dưới hiển thị thông tin tháng 4.
3. Người dùng bấm vào "Tháng 6" -> chuyển sang màn hình Chi tiết vận hạn tháng và chọn đúng tháng 6

---

## 5. Banner quảng cáo

### Câu chuyện người dùng

**Tiêu đề**: Khách hàng - Tương tác với banner nâng cấp

> **Với vai trò** người dùng ứng dụng
> **Tôi muốn** thấy các gói dịch vụ cao cấp
> **Để** tôi có thể mở rộng trải nghiệm và nhận nhiều quyền lợi hơn

### Tiêu chí nghiệm thu

- [ ] Hiển thị banner quảng cáo cấu hình trên ADS nâng cấp dịch vụ ở vị trí dưới mục vận hạn 12 tháng
- [ ] Khi bấm vào banner, điều hướng tới deeplink banner quảng cáo

### Luồng thao tác

1. Người dùng cuộn đến phần banner quảng cáo.
2. Người dùng bấm vào banner.
3. Hệ thống điều hướng người dùng tới deeplink banner quảng cáo.

---

## 6. Khám phá thêm

### Câu chuyện người dùng

**Tiêu đề**: Khách hàng - Khám phá các tính năng tử vi liên quan

> **Với vai trò** người dùng ứng dụng
> **Tôi muốn** thấy các đề xuất tính năng tử vi hữu ích khác
> **Để** tôi có thể dễ dàng truy cập và trải nghiệm các dịch vụ tử vi khác của Lịch Việt

### Tiêu chí nghiệm thu

- [ ] Hiển thị phần "Khám phá thêm" với layout dạng lưới (Grid) 3 cột.
- [ ] Các mục tử vi bao gồm: Vận hạn năm, Tử vi Tổng quan, Tài chính, Nghề nghiệp, Tình duyên, Lá số Tử vi -> cấu hình trên cms mục tiện ích. Đang ở mục nào thì ở dưới khối khám phá thêm không hiển thị nữa
- [ ] Mỗi mục hiển thị icon và tên tính năng bên dưới.
- [ ] Khi bấm vào một mục, hệ thống điều hướng tới màn hình tính năng tương ứng.

### Luồng thao tác

1. Người dùng cuộn xuống cuối màn hình.
2. Người dùng xem các gợi ý trong mục "Khám phá thêm".
3. Người dùng bấm vào một tính năng (VD: Lá số Tử vi).
4. Hệ thống mở màn hình tính năng tương ứng.
