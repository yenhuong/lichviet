---
id: Story-TuViVanHanThang
type: story
status: draft
project: Lich_Viet
created: 2026-11-18
version: 4.0
tags: [tu-vi-van-han, van-han-thang]
linked-to: [[Story-TuViVanHanKetQua]], [[Story-TuViVanHanChiTietNam]]
---
# User Stories - Màn Vận hạn tháng Tử vi vận hạn

Tài liệu này định nghĩa các user story cho màn **Vận hạn 12 tháng âm lịch** thuộc tính năng **Tử vi vận hạn**, được viết theo chuẩn INVEST và định dạng Bullet Checklist (dựa trên workflow `gen-user-story`).

- Màn vận hạn tháng: `tuvi_vanhan_thang.html`

**Prototype tham chiếu**: [[tuvi_vanhan_thang.html]]

**Điểm vào màn**: màn Kết quả ([[Story-TuViVanHanKetQua]]: ô tháng đáng chú ý, biểu đồ, dải tháng, thẻ tháng hiện tại) và các thẻ thời điểm ở màn Các mặt trong đời sống ([[Story-TuViVanHanChiTietNam]]).

> Nội dung mẫu trong AC (năm 2027, can chi, câu luận giải) lấy theo dữ liệu mẫu của prototype. Khi triển khai, nội dung lấy từ kết quả tính lá số của người dùng, theo năm đang chọn ở màn Kết quả. Thang sao và nhãn mức đánh giá theo quy tắc chung ở [[Story-TuViVanHanKetQua]] (US-03).

---

## Lịch sử thay đổi (Changelog)

| Version | Ngày       | Nội dung thay đổi            |
| ------- | ---------- | ---------------------------- |
| 4.0     | 2026-11-18 | Bản khởi tạo — US-01 → US-03. |

---

## US-01: Chọn tháng âm lịch cần xem

**User Story**
**As a** người dùng muốn lên kế hoạch theo tháng
**I want to** chuyển nhanh giữa 12 tháng âm lịch ngay trên màn vận hạn tháng
**So that** tôi xem lần lượt các tháng mà không phải quay lại màn kết quả

**INVEST Self-check**

| Tiêu chí              | Đánh giá | Ghi chú                                    |
| --------------------- | -------- | ------------------------------------------ |
| **I**ndependent | ✅       | Dải chọn tháng độc lập với nội dung tháng. |
| **N**egotiable  | ✅       | Kiểu ô tháng có thể điều chỉnh.            |
| **V**aluable    | ✅       | Xem liền mạch 12 tháng.                    |
| **E**stimable   | ✅       | Dải 12 ô cố định.                          |
| **S**mall       | ✅       | Hoàn thành trong vài giờ làm việc.         |
| **T**estable    | ✅       | Kiểm thử mở đúng tháng, chuyển tháng.      |

### Tiêu chí nghiệm thu

- [ ] Thanh tiêu đề `"Vận hạn 12 tháng âm lịch YYYY"` và nút quay lại; bấm quay lại → về màn trước đó.
- [ ] Đầu màn là dải 12 ô tháng cuộn ngang, mỗi ô gồm `"Tháng"`, số tháng và thang 5 sao của tháng. Ô tháng âm lịch hiện tại có nhãn `"Hiện tại"`; ô đang xem được làm nổi bật và hiển thị ở chính giữa dải tháng.
- [ ] Vào màn từ một điểm vào → mở sẵn tháng được chọn ở điểm vào đó; không xác định được tháng → mở tháng âm lịch hiện tại.
- [ ] Bấm một ô tháng → toàn bộ nội dung bên dưới (US-02, US-03) chuyển sang tháng đó và màn cuộn mượt về đầu.

---

## US-02: Xem thông tin tổng quan của tháng

**User Story**
**As a** người dùng đang xem một tháng cụ thể
**I want to** thấy ngay tháng đó tốt hay xấu, rơi vào khoảng ngày dương lịch nào và động cung gì
**So that** tôi nắm nhanh trọng tâm của tháng trước khi đọc chi tiết

**INVEST Self-check**

| Tiêu chí              | Đánh giá | Ghi chú                                   |
| --------------------- | -------- | ----------------------------------------- |
| **I**ndependent | ✅       | Thẻ đầu tháng, dữ liệu từ engine.         |
| **N**egotiable  | ✅       | Bố cục thẻ có thể tinh chỉnh.             |
| **V**aluable    | ✅       | Trả lời nhanh tháng này thế nào.          |
| **E**stimable   | ✅       | Thẻ hiển thị, dễ ước lượng.               |
| **S**mall       | ✅       | Hoàn thành trong vài giờ làm việc.        |
| **T**estable    | ✅       | Kiểm thử theo dữ liệu từng tháng.         |

### Tiêu chí nghiệm thu

- [ ] Phần đầu thẻ hiển thị tiêu đề `"Tháng N âm lịch"`, can chi của tháng (ví dụ `"Nhâm Dần"`), khoảng ngày dương lịch (ví dụ `"06/02 – 07/03/2027 dương lịch"`), thang 5 sao và nhãn mức đánh giá của tháng (tên mức và màu theo thang 5 sao). Tháng âm lịch hiện tại có thêm nhãn `"Tháng hiện tại"` phía trên tiêu đề.
- [ ] Phần thân thẻ hiển thị mục `"Tháng này động cung"` gồm icon cung, tên cung (ví dụ `"Tật Ách"`) và ý nghĩa ngắn của cung (ví dụ `"Chủ về sức khỏe, bệnh tật, tinh thần và việc chăm sóc sức khỏe."`).
- [ ] Tháng có lưu ý bổ sung → hiển thị ô ghi chú dưới mục động cung (ví dụ lưu ý tháng chỉ thuận tương đối so với cả năm, hoặc `"Trong tháng, mặt này khá yên, ít có việc mới phát sinh."`).

---

## US-03: Đọc luận giải và lời khuyên của tháng

**User Story**
**As a** người dùng đang lên kế hoạch cho tháng
**I want to** đọc điều cần chú ý, điểm thuận lợi, điều cần lưu ý và lời khuyên của tháng
**So that** tôi biết nên tận dụng gì và phòng tránh gì trong tháng

**INVEST Self-check**

| Tiêu chí              | Đánh giá | Ghi chú                                  |
| --------------------- | -------- | ---------------------------------------- |
| **I**ndependent | ✅       | Khối nội dung theo cấu trúc cố định.     |
| **N**egotiable  | ✅       | Thứ tự khối, câu chữ có thể tinh chỉnh.  |
| **V**aluable    | ✅       | Nội dung hành động cụ thể theo tháng.    |
| **E**stimable   | ✅       | 4 khối văn bản, dễ ước lượng.            |
| **S**mall       | ✅       | Hoàn thành trong 1 ngày làm việc.        |
| **T**estable    | ✅       | Kiểm thử đủ khối theo dữ liệu tháng.     |

### Tiêu chí nghiệm thu

- [ ] Khối `"Tháng này bạn cần chú ý điều gì?"`: đoạn nêu những việc nổi lên rõ nhất trong tháng theo cung động.
- [ ] Mục `"Điểm thuận lợi"` (icon thuận lợi) và mục `"Điều cần lưu ý"` (icon cảnh báo), mỗi mục là danh sách gạch đầu dòng.
- [ ] Khối `"Lời khuyên trong tháng"`: danh sách lời khuyên của tháng.
- [ ] Cuối màn có mục `"Khám phá thêm"` giống màn Kết quả (US-08).

---

## Ghi chú (Notes)

- **Phụ thuộc**: Nội dung 12 tháng lấy từ engine tính lá số theo năm đang chọn ở màn Kết quả; tháng âm lịch hiện tại tính theo ngày hiện tại.
- **Cần xác nhận**: Màn vận hạn tháng chưa cá nhân hóa theo thông tin hoàn cảnh, trong khi khối Bổ sung thông tin ở màn Kết quả ghi luận giải sát hơn cho cả "những tháng liên quan". Cần chốt có cá nhân hóa màn tháng hay sửa câu mô tả.
