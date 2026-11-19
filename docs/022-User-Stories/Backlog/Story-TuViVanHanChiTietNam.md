---
id: Story-TuViVanHanChiTietNam
type: story
status: draft
project: Lich_Viet
created: 2026-11-18
version: 4.0
tags: [tu-vi-van-han, chi-tiet-nam, yeu-to, mat-doi-song, loi-khuyen]
linked-to: [[Story-TuViVanHanKetQua]], [[Story-TuViVanHanThang]]
---
# User Stories - Chi tiết tổng quan năm Tử vi vận hạn

Tài liệu này định nghĩa các user story cho ba màn chi tiết tổng quan năm thuộc tính năng **Tử vi vận hạn**, được viết theo chuẩn INVEST và định dạng Bullet Checklist (dựa trên workflow `gen-user-story`). Cả ba màn đều mở từ màn Kết quả ([[Story-TuViVanHanKetQua]]).

- Màn yếu tố ảnh hưởng vận hạn: `tuvi_vanhan_yeuto.html`
- Màn các mặt trong đời sống: `tuvi_vanhan_matdoisong.html`
- Màn lời khuyên năm: `tuvi_vanhan_loikhuyen.html`

**Prototype tham chiếu**: [[tuvi_vanhan_yeuto.html]], [[tuvi_vanhan_matdoisong.html]], [[tuvi_vanhan_loikhuyen.html]]

> Nội dung mẫu trong AC (năm 2027, tên sao, câu luận giải) lấy theo dữ liệu mẫu của prototype. Khi triển khai, toàn bộ nội dung luận giải lấy từ kết quả tính lá số của người dùng, theo năm đang chọn ở màn Kết quả. Thang sao và nhãn mức đánh giá theo quy tắc chung ở [[Story-TuViVanHanKetQua]] (US-03).

**Thành phần dùng chung cho cả ba màn**

- Thanh tiêu đề có nút quay lại; bấm quay lại → về màn trước đó (mở trực tiếp không có màn trước → về màn Kết quả).
- Cuối màn có mục `"Khám phá thêm"` giống màn Kết quả (US-08).

---

## Lịch sử thay đổi (Changelog)

| Version | Ngày      | Nội dung thay đổi               |
| ------- | ---------- | ---------------------------------- |
| 4.0     | 2026-11-18 | Bản khởi tạo — US-01 → US-06. |

---

## US-01: Chuyển giữa các yếu tố ảnh hưởng vận hạn

**User Story**
**As a** người dùng muốn hiểu nguồn gốc vận hạn năm nay
**I want to** xem từng yếu tố (Mệnh gốc, Đại vận, Tiểu vận, Lưu niên) trên các tab của một màn
**So that** tôi đọc lần lượt các yếu tố mà không phải quay lại màn kết quả

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                       |
| --------------------- | ----------- | ---------------------------------------------- |
| **I**ndependent | ✅          | Khung tab độc lập với nội dung từng tab. |
| **N**egotiable  | ✅          | Tên tab, kiểu hero có thể tinh chỉnh.     |
| **V**aluable    | ✅          | Gom 4 yếu tố vào một nơi, dễ so sánh.   |
| **E**stimable   | ✅          | 4 tab cố định, dễ ước lượng.           |
| **S**mall       | ✅          | Hoàn thành trong 1 ngày làm việc.         |
| **T**estable    | ✅          | Kiểm thử mở đúng tab, chuyển tab.        |

### Tiêu chí nghiệm thu

**1. Thanh tab (Happy path & Interaction)**

- [ ] Thanh tiêu đề `"Yếu tố ảnh hưởng đến vận hạn"`. Bên dưới là thanh tab cuộn ngang: `"Mệnh gốc"`, `"Đại vận [X–Y] tuổi"`, `"Bạn trong năm YYYY"`, `"Hoàn cảnh bên ngoài"`.
- [ ] Vào màn từ một ô yếu tố ở màn Kết quả → mở sẵn tab tương ứng; không xác định được tab → mở tab `"Mệnh gốc"`.
- [ ] Bấm một tab → hiển thị nội dung tab đó, cuộn nội dung về đầu, thanh tab tự cuộn để tab đang chọn nằm giữa.

**2. Phần đầu mỗi tab (Happy path)**

- [ ] Mỗi tab mở đầu bằng thẻ gồm nhãn nhỏ, tiêu đề, câu hỏi gợi mở, thang 5 sao và nhãn mức đánh giá của yếu tố:| Tab        | Nhãn nhỏ                   | Tiêu đề                    | Câu hỏi                                                                                            |
  | ---------- | ---------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------- |
  | Mệnh gốc | `"Nền tảng con người"` | `"Mệnh gốc"`              | `"Bạn là người thế nào, mạnh ở đâu, cần để ý điều gì?"`                           |
  | Đại vận | `"Giai đoạn 10 năm"`    | `"Đại vận [X–Y] tuổi"` | `"Giai đoạn 10 năm bạn đang đi là thuận hay thử thách?"`                                 |
  | Tiểu vận | `"Tiểu vận"`             | `"Bạn trong năm YYYY"`    | `"Năm nay bạn thay đổi thế nào trong suy nghĩ và cách ứng xử?"`                         |
  | Lưu niên | `"Lưu niên"`             | `"Hoàn cảnh bên ngoài"` | `"Hoàn cảnh bên ngoài năm nay thuận lợi hay khó khăn, rộng hay hẹp hơn năm trước?"` |

---

## US-02: Đọc luận giải từng yếu tố ảnh hưởng

**User Story**
**As a** người dùng muốn hiểu vì sao năm nay tốt hay xấu
**I want to** đọc luận giải chi tiết của từng yếu tố kèm lời khuyên
**So that** tôi biết điểm mạnh, điểm cần để ý và nên làm gì

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                 |
| --------------------- | ----------- | -------------------------------------------------------- |
| **I**ndependent | ✅          | Nội dung từng tab, dữ liệu từ engine.               |
| **N**egotiable  | ✅          | Thứ tự khối, câu chữ có thể tinh chỉnh.          |
| **V**aluable    | ✅          | Giải thích nguồn gốc vận hạn, tăng độ tin cậy. |
| **E**stimable   | ✅          | Khối văn bản theo cấu trúc cố định.              |
| **S**mall       | ✅          | Hoàn thành trong 1–2 ngày làm việc.                |
| **T**estable    | ✅          | Kiểm thử đủ khối nội dung ở từng tab.            |

### Tiêu chí nghiệm thu

Mỗi khối có icon và tiêu đề; tên sao, cách cục trong đoạn văn được in đậm.

**1. Tab Mệnh gốc**

- [ ] Khối `"Mệnh cách của bạn"`: câu tóm tắt mệnh cách in đậm (ví dụ `"Thực tế, chính trực và quý nhân nâng đỡ"`), các đoạn luận giải mệnh cách và ô ghi chú `"Nhìn chung về bạn"` tổng kết tính cách.
- [ ] Khối `"Sức chống đỡ vận hạn của bạn"`: danh sách gạch đầu dòng về độ vững của mệnh trước biến động và mức hỗ trợ của đại vận hiện tại.

**2. Tab Đại vận**

- [ ] Khối `"Đại vận thế nào?"`: đoạn giới thiệu (tuổi âm lịch, năm thứ mấy của đại vận, mức đánh giá), dòng `"Sao chủ đạo"` và danh sách `"Các vấn đề trong đại vận"`.
- [ ] Khối `"Bạn nên làm gì?"`: danh sách lời khuyên cho giai đoạn đại vận.
- [ ] Khối `"Ảnh hưởng đến năm YYYY"`: đoạn nêu đại vận hỗ trợ hay cản trở năm đang xem.

**3. Tab Bạn trong năm (Tiểu vận)**

- [ ] Khối `"Bạn như thế nào?"`: các nhóm đoạn về tính cách gốc và thay đổi trong suy nghĩ, cách ứng xử năm nay; ô ghi chú kết luận mức tiểu vận và tác động của đại vận lên năm.
- [ ] Khối `"Bạn nên làm gì?"`: danh sách lời khuyên cho năm.

**4. Tab Hoàn cảnh bên ngoài (Lưu niên)**

- [ ] Khối `"Hoàn cảnh năm nay thế nào?"`: các nhóm đoạn về mức thuận lợi của môi trường, phạm vi hoạt động so với năm trước, các mặt chịu tác động, yếu tố nền tảng, điểm thuận lợi và trở ngại.

---

## US-03: Chuyển giữa các mặt cuộc sống

**User Story**
**As a** người dùng quan tâm đến nhiều lĩnh vực trong năm
**I want to** chuyển nhanh giữa các mặt cuộc sống trên cùng một màn và thấy mức đánh giá ngay trên tab
**So that** tôi đọc lần lượt từng mặt và biết mặt nào cần chú ý

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                        |
| --------------------- | ----------- | ----------------------------------------------- |
| **I**ndependent | ✅          | Khung tab độc lập với nội dung từng mặt. |
| **N**egotiable  | ✅          | Thứ tự tab có thể điều chỉnh.            |
| **V**aluable    | ✅          | Xem nhanh mức đánh giá mọi mặt.           |
| **E**stimable   | ✅          | 9 tab cố định, dễ ước lượng.            |
| **S**mall       | ✅          | Hoàn thành trong 1 ngày làm việc.          |
| **T**estable    | ✅          | Kiểm thử mở đúng tab, chuyển tab.         |

### Tiêu chí nghiệm thu

- [ ] Thanh tiêu đề `"Các mặt trong đời sống"`. Bên dưới là thanh tab cuộn ngang theo thứ tự: Công việc, Tài chính, Tình cảm, Gia đạo, Sức khỏe, Quan hệ xã hội, Nhà cửa tài sản, Đi lại xuất hành, Các vận hạn khác. Mỗi tab gồm icon, tên mặt và dòng phụ là nhãn mức đánh giá (màu theo mức); riêng tab `"Các vận hạn khác"` có dòng phụ `"Các cung còn lại"`.
- [ ] Vào màn từ một dòng ở màn Kết quả → mở sẵn tab tương ứng; không xác định được tab → mở tab `"Công việc"`.
- [ ] Bấm một tab → hiển thị nội dung tab đó, cuộn nội dung về đầu, thanh tab tự cuộn để tab đang chọn nằm giữa.

---

## US-04: Đọc luận giải chi tiết một mặt cuộc sống

**User Story**
**As a** người dùng quan tâm đến một lĩnh vực cụ thể (công việc, tài chính, tình cảm...)
**I want to** xem diễn biến qua các năm, luận giải năm nay, lời khuyên và các tháng đáng chú ý của mặt đó
**So that** tôi biết nên làm gì và khi nào cần chú ý

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                              |
| --------------------- | ----------- | ----------------------------------------------------- |
| **I**ndependent | ✅          | Cấu trúc chung cho 8 mặt, dữ liệu từ engine.    |
| **N**egotiable  | ✅          | Câu chữ kết luận xu hướng có thể tinh chỉnh. |
| **V**aluable    | ✅          | Nội dung trọng tâm của tính năng.               |
| **E**stimable   | ✅          | Cấu trúc cố định 4 khối.                        |
| **S**mall       | ✅          | Hoàn thành trong 2 ngày làm việc.                |
| **T**estable    | ✅          | Kiểm thử theo dữ liệu từng mặt.                 |

### Tiêu chí nghiệm thu

**1. Thẻ đầu trang (Happy path)**

- [ ] Thẻ đầu trang có hình minh hoạ, nhãn `"[Tên mặt] năm YYYY của bạn"`, câu tóm tắt (ví dụ `"Giữ nhịp, chờ thời cơ"`), thang 5 sao và nhãn mức đánh giá dạng pill.

**2. Diễn biến qua 3 năm (Happy path)**

- [ ] Khối `"Diễn biến [tên mặt] qua 3 năm"` gồm 3 ô `"Năm trước"`, `"Năm nay"` (làm nổi bật), `"Năm sau"`; mỗi ô có năm, thang sao và nhãn mức đánh giá.
- [ ] Dưới 3 ô là dòng kết luận xu hướng kèm mũi tên, tính theo chênh lệch số sao năm nay so với năm trước: tăng từ 2 sao trở lên `"Cải thiện rõ"`, tăng 1 sao `"Cải thiện"`, bằng nhau `"Giữ ổn định"`, giảm 1 sao `"Giảm nhẹ"`, giảm từ 2 sao trở lên `"Giảm rõ"`, kèm hậu tố `"so với năm [năm trước]"`.
- [ ] Tiếp theo là đoạn so sánh năm trước với năm nay và mục `"Nhìn sang năm [năm sau]"` kèm đoạn dự báo ngắn.

**3. Luận giải năm nay (Happy path)**

- [ ] Khối `"[Tên mặt] năm nay thế nào?"` hiển thị các nhóm đoạn luận giải: nhận định chung, điểm thuận lợi và trở ngại từ môi trường năm, luận giải theo cung liên quan, đoạn `"Nhìn chung"` kết luận. Tên sao in đậm.

**4. Lời khuyên và thời điểm (Happy path & Interaction)**

- [ ] Khối `"Bạn nên làm gì trong năm nay?"` gồm mục `"Lời khuyên dành cho bạn"` (thẻ có tiêu đề lời khuyên và mô tả) và mục `"Thời điểm đáng chú ý"`.
- [ ] Mỗi thời điểm là một thẻ gồm `"Tháng N âm lịch"`, pill nhãn tên mức đánh giá của tháng đó (tên mức và màu theo thang 5 sao, ví dụ `"Thuận lợi"`), khoảng ngày dương lịch, ghi chú và liên kết `"Xem vận hạn tháng N"`. Bấm thẻ → mở màn Vận hạn tháng ([[Story-TuViVanHanThang]]) của tháng đó.

**5. Góc nhìn mở rộng (Happy path & Interaction)**

- [ ] Mặt có nội dung góc nhìn mở rộng (tuỳ dữ liệu từng mặt) → hiển thị thêm một khối hỏi – đáp sau khối lời khuyên (mục 4), tiêu đề khối theo nội dung của mặt đó (ví dụ Tài chính `"Góc nhìn về đầu tư"`, Gia đạo `"Cha mẹ già"`); mặt không có nội dung thì không hiển thị khối này.
- [ ] Mỗi câu hỏi hiển thị dạng accordion; câu đầu tiên mở sẵn. Bấm vào câu hỏi → mở/thu gọn câu trả lời, các câu khác giữ nguyên trạng thái.

**6. Cá nhân hóa theo hoàn cảnh (Edge case)**

- [ ] Thông tin hoàn cảnh (khai ở màn Nhập thông tin hoặc màn Bổ sung thông tin) áp dụng cho 4 mặt: Công việc, Tài chính ← công việc, Tình cảm ← tình trạng hôn nhân, Gia đạo ← thông tin con cái.

---

## US-05: Xem các vận hạn khác trong năm

**User Story**
**As a** người dùng muốn biết thêm những cung khác có biến động
**I want to** xem cung động trong năm và các cung còn lại cần lưu ý
**So that** tôi không bỏ sót những vấn đề ngoài 8 mặt chính

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                               |
| --------------------- | ----------- | ------------------------------------------------------ |
| **I**ndependent | ✅          | Tab riêng, cấu trúc khác các mặt chính.         |
| **N**egotiable  | ✅          | Cách trình bày từng cung có thể điều chỉnh.   |
| **V**aluable    | ✅          | Bổ sung bức tranh đầy đủ của năm.              |
| **E**stimable   | ✅          | 2 kiểu khối cung, dễ ước lượng.                 |
| **S**mall       | ✅          | Hoàn thành trong 1 ngày làm việc.                 |
| **T**estable    | ✅          | Kiểm thử theo dữ liệu cung động / không động. |

### Tiêu chí nghiệm thu

- [ ] Tab `"Các vận hạn khác"` liệt kê cung động trong năm và các cung còn lại có sao lưu tác động (ngoài các cung đã luận ở 8 mặt), mỗi cung là một khối có icon cung và tên cung.
- [ ] Cung động trong năm (ví dụ `"Năm 2027 động cung Mệnh"`) hiển thị thang sao kèm nhãn mức đánh giá, dòng `"Mức biến động: [mức]"`, đoạn mô tả và danh sách `"Vấn đề trong năm"`.
- [ ] Cung còn lại có sao lưu tác động (ví dụ `"Cung Phụ Mẫu"`) hiển thị dòng phụ về phạm vi cung (ví dụ `"Cha mẹ, người lớn, cấp trên"`) và các nhóm đoạn luận giải.
- [ ] Cung có tháng đáng chú ý hiển thị thêm mục `"Thời điểm đáng chú ý"` với các thẻ tháng giống US-04; bấm thẻ → mở màn Vận hạn tháng của tháng đó.

---

## US-06: Xem lời khuyên chủ động trong năm

**User Story**
**As a** người dùng muốn biết nên làm gì trong năm
**I want to** đọc những việc nên chủ động làm và những việc cần chủ động phòng tránh
**So that** tôi có kế hoạch hành động cụ thể cho cả năm

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                   |
| --------------------- | ----------- | ---------------------------------------------------------- |
| **I**ndependent | ✅          | Màn riêng, mở từ khối lời khuyên ở màn Kết quả. |
| **N**egotiable  | ✅          | Thứ tự khối, câu chữ có thể tinh chỉnh.            |
| **V**aluable    | ✅          | Biến luận giải thành hành động.                     |
| **E**stimable   | ✅          | Màn văn bản 3 khối.                                    |
| **S**mall       | ✅          | Hoàn thành trong 1 ngày làm việc.                     |
| **T**estable    | ✅          | Kiểm thử đủ khối nội dung.                           |

### Tiêu chí nghiệm thu

- [ ] Thanh tiêu đề `"Lời khuyên năm YYYY cho bạn"`. Thẻ đầu trang gồm nhãn nhỏ `"Lưu Thái Tuế"`, tiêu đề `"Sự chủ động của bạn"` và câu hỏi `"Năm nay bạn nên chủ động làm gì, phòng tránh điều gì?"`.
- [ ] Khối `"Xu hướng chủ động"`: đoạn tổng hợp các nhóm sao và hướng chủ động tương ứng (học tập, mở rộng quan hệ, xử lý vướng mắc...).
- [ ] Khối `"Việc nên chủ động làm"`: danh sách, mỗi dòng gồm tên sao in đậm và việc nên làm (ví dụ `"Hóa Khoa: Đầu tư cho việc học, thi cử, hồ sơ và uy tín bản thân."`).
- [ ] Khối `"Việc cần chủ động xử lý, giữ an toàn"`: danh sách cùng định dạng, kèm ô cảnh báo `"Cần lưu ý khi có va chạm"` nêu các sao dễ gây va chạm và biểu hiện.
