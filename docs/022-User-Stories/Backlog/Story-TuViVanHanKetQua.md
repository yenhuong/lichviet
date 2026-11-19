---
id: Story-TuViVanHanKetQua
type: story
status: draft
project: Lich_Viet
created: 2026-11-18
version: 4.0
tags: [tu-vi-van-han, ket-qua, bo-sung-thong-tin]
linked-to: [[Story-TuViVanHanChiTietNam]], [[Story-TuViVanHanThang]]
---
# User Stories - Màn Kết quả Tử vi vận hạn & Bổ sung thông tin

Tài liệu này định nghĩa các user story cho hai màn hình thuộc tính năng **Tử vi vận hạn**, được viết theo chuẩn INVEST và định dạng Bullet Checklist (dựa trên workflow `gen-user-story`).

- Màn kết quả: `tuvi_vanhan_ketqua.html`
- Màn bổ sung thông tin: `tuvi_vanhan_bosung.html`

**Prototype tham chiếu**: [[tuvi_vanhan_ketqua.html]], [[tuvi_vanhan_bosung.html]]

**Tài liệu liên quan**: [[Story-TuViVanHanChiTietNam]] (các màn chi tiết tổng quan năm), [[Story-TuViVanHanThang]] (màn vận hạn tháng).

> Nội dung mẫu trong AC (tên, năm 2027, số sao, câu luận giải) lấy theo dữ liệu mẫu của prototype. Khi triển khai, toàn bộ nội dung luận giải lấy từ kết quả tính lá số của người dùng.

---

## Lịch sử thay đổi (Changelog)

| Version | Ngày      | Nội dung thay đổi               |
| ------- | ---------- | ---------------------------------- |
| 4.0     | 2026-11-18 | Bản khởi tạo — US-01 → US-10. |

---

## US-01: Xem thông tin người được xem và chọn năm vận hạn

**User Story**
**As a** người dùng vừa nhập thông tin xem vận hạn
**I want to** thấy lại thông tin lá số đang xem và chuyển giữa các năm
**So that** tôi chắc chắn kết quả là của đúng người, đúng năm mình quan tâm

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                          |
| --------------------- | ----------- | ----------------------------------------------------------------- |
| **I**ndependent | ✅          | Khối đầu trang, chỉ cần thông tin người dùng đã nhập. |
| **N**egotiable  | ✅          | Cách hiển thị tuổi, số năm có thể điều chỉnh.          |
| **V**aluable    | ✅          | Xác nhận đúng đối tượng, mở lối xem cho người thân.  |
| **E**stimable   | ✅          | Khối hiển thị + tab, dễ ước lượng.                        |
| **S**mall       | ✅          | Hoàn thành trong 1 ngày làm việc.                            |
| **T**estable    | ✅          | Kiểm thử theo dữ liệu nhập và thao tác chọn tab.          |

### Tiêu chí nghiệm thu

**1. Thanh tiêu đề và thông tin người được xem (Happy path)**

- [ ] Thanh tiêu đề hiển thị `"Kết quả tử vi vận hạn"` và nút quay lại; bấm quay lại → về màn trước đó.
- [ ] Khối thông tin hiển thị Họ tên chỉ khi người được xem là thành viên gia đình đã chọn hoặc chủ tài khoản có tên; không có tên thì ẩn dòng này. Tiếp theo là dòng ngày sinh dương lịch `DD/MM/YYYY • Giờ [can chi] ([giờ bắt đầu]h - [giờ kết thúc]h)` (ví dụ `"20/05/1981 • Giờ Mão (5h - 7h)"`); dòng `[Giới tính] • Tuổi [can chi năm sinh] • [N] tuổi` (tuổi âm lịch, ví dụ `"Nữ • Tuổi Tân Dậu • 47 tuổi"`); hình con giáp theo năm sinh ở góc phải.
- [ ] Nút `"Xem cho người thân"` → mở màn chọn thành viên gia đình để chọn người cần xem vận hạn.

**2. Chọn năm (Interaction)**

- [ ] Dưới khối thông tin hiển thị các tab năm theo danh sách năm server trả về (hiện tại gồm năm 2026 và 2027), mỗi tab gồm `"Năm YYYY"` và tên can chi của năm (ví dụ `"Năm 2026 / Bính Ngọ"`, `"Năm 2027 / Đinh Mùi"`); tab đang chọn được làm nổi bật.
- [ ] Khi vào màn, tab năm được chọn sẵn theo cờ mặc định server trả về (hiện tại là năm 2027).
- [ ] Bấm tab năm → toàn bộ nội dung từ khối Tổng quan năm đến khối Vận hạn 12 tháng (US-02 → US-07) chuyển sang dữ liệu của năm được chọn; các nhãn có năm trong tiêu đề khối đổi theo.

---

## US-02: Xem tổng quan vận hạn của năm

**User Story**
**As a** người dùng muốn biết năm tới tốt hay xấu
**I want to** xem đánh giá chung của cả năm, so sánh với năm trước và các tháng đáng chú ý
**So that** tôi nắm nhanh bức tranh cả năm trước khi đọc chi tiết

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                    |
| --------------------- | ----------- | ----------------------------------------------------------- |
| **I**ndependent | ✅          | Khối riêng, dữ liệu từ kết quả luận giải năm.     |
| **N**egotiable  | ✅          | Câu chữ đánh giá, cách so sánh có thể tinh chỉnh. |
| **V**aluable    | ✅          | Trả lời ngay câu hỏi chính của người dùng.         |
| **E**stimable   | ✅          | Thẻ hiển thị + điều hướng, dễ ước lượng.        |
| **S**mall       | ✅          | Hoàn thành trong 1 ngày làm việc.                      |
| **T**estable    | ✅          | Kiểm thử nội dung và điều hướng tháng rõ ràng.   |

### Tiêu chí nghiệm thu

**1. Nội dung thẻ tổng quan (Happy path)**

- [ ] Phần đầu thẻ hiển thị nhãn `"Tổng quan năm YYYY của bạn"`, mức đánh giá năm (ví dụ `"Tương đối thuận lợi"`), thang 5 sao và một câu tóm tắt (ví dụ `"Nghiêng nhẹ về phía thuận, giữ nhịp đều là có thêm kết quả."`).
- [ ] Mức đánh giá năm gồm 10 mức theo điểm năm (1–10), hiển thị bằng chữ hiển thị tương ứng và thang 5 sao có nửa sao (số sao = điểm ÷ 2), theo bảng mức đánh giá năm bên dưới.
- [ ] Phần thân hiển thị dòng so sánh với năm trước: icon xu hướng và tiêu đề thay đổi theo chênh lệch điểm năm đang xem so với năm trước, theo bảng so sánh bên dưới (ví dụ `"Nhỉnh hơn năm 2026"`). Tiếp theo là đoạn luận giải tổng quan năm (tuổi âm lịch, đại vận đang đi qua, mức vận trình, điều nên tận dụng và cần để ý).

**2. Tháng âm lịch đáng chú ý (Happy path & Interaction)**

- [ ] Mục `"Tháng âm lịch đáng chú ý"` gồm 2 ô: `"Tháng tốt nhất"` (màu thuận lợi) và `"Tháng cần thận trọng"` (màu cảnh báo); mỗi ô liệt kê các tháng âm lịch tương ứng (ví dụ `"Tháng 3"`, `"Tháng 4, 5, 8, 12"`).
- [ ] Bấm một ô → mở màn Vận hạn tháng ([[Story-TuViVanHanThang]]). Ô có nhiều tháng thì mở tháng hiện tại hoặc tháng sắp tới gần nhất trong danh sách; nếu tất cả các tháng đã qua thì mở tháng gần nhất đã qua.

**Bảng mức đánh giá năm** (chỉ áp dụng cho thẻ Tổng quan năm; thang 5 mức ở US-03 dùng cho yếu tố, các mặt cuộc sống và tháng)

| Điểm | Tên gốc        | Chữ hiển thị           | Số sao |
| ------ | ---------------- | ------------------------- | ------- |
| 1      | Rất xấu        | Bất lợi                 | 0,5     |
| 2      | Xấu             | Kém thuận lợi          | 1       |
| 3      | Khá khó khăn  | Khá bất lợi            | 1,5     |
| 4      | Hơi khó khăn  | Chưa thuận lợi         | 2       |
| 5      | Trung bình      | Bình thường            | 2,5     |
| 6      | Trung bình khá | Tương đối thuận lợi | 3       |
| 7      | Khá tốt        | Khá thuận lợi          | 3,5     |
| 8      | Tốt             | Thuận lợi               | 4       |
| 9      | Rất tốt        | Rất thuận lợi          | 4,5     |
| 10     | —               | Đại cát                | 5       |

**Bảng so sánh với năm trước** (chênh lệch = điểm năm đang xem − điểm năm trước, theo thang 10 điểm)

| Chênh lệch        | Icon                               | Tiêu đề                                             |
| ------------------- | ---------------------------------- | ------------------------------------------------------ |
| Từ +2 trở lên    | Mũi tên lên (màu thuận lợi)  | `"Khởi sắc hơn năm [năm trước]"`              |
| +1                  | Mũi tên lên (màu thuận lợi)  | `"Nhỉnh hơn năm [năm trước]"`                  |
| 0                   | Mũi tên ngang (màu trung tính) | `"Tương đương năm [năm trước]"`             |
| −1                 | Mũi tên xuống (màu cảnh báo) | `"Kém hơn một chút so với năm [năm trước]"` |
| Từ −2 trở xuống | Mũi tên xuống (màu cảnh báo) | `"Kém hơn năm [năm trước]"`                    |

---

## US-03: Xem các yếu tố ảnh hưởng đến vận hạn

**User Story**
**As a** người dùng muốn hiểu vì sao năm nay tốt hay xấu
**I want to** xem các yếu tố tạo nên vận hạn của mình kèm mức đánh giá
**So that** tôi hiểu nguồn gốc của vận hạn thay vì chỉ thấy một kết luận

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                 |
| --------------------- | ----------- | -------------------------------------------------------- |
| **I**ndependent | ✅          | Khối riêng, mỗi ô dẫn sang một tab màn chi tiết. |
| **N**egotiable  | ✅          | Tên, mô tả các yếu tố có thể tinh chỉnh.        |
| **V**aluable    | ✅          | Tăng độ tin cậy của luận giải.                    |
| **E**stimable   | ✅          | 4 ô cố định, dễ ước lượng.                      |
| **S**mall       | ✅          | Hoàn thành trong vài giờ làm việc.                 |
| **T**estable    | ✅          | Kiểm thử hiển thị và điều hướng từng ô.       |

### Tiêu chí nghiệm thu

**1. Danh sách yếu tố (Happy path)**

- [ ] Tiêu đề khối `"Điều gì ảnh hưởng đến vận hạn của bạn?"`, bên dưới là lưới 4 ô; mỗi ô gồm tên, mô tả ngắn, thang 5 sao và nhãn mức đánh giá, kèm mũi tên điều hướng:
  - [ ] **Mệnh gốc của bạn**: `"Tính cách, điểm mạnh và những điều bạn cần lưu ý"`
  - [ ] **Đại vận [X–Y] tuổi** (theo đại vận đang đi qua, ví dụ `"Đại vận 43–52 tuổi"`): `"Ảnh hưởng của Đại vận đến năm YYYY"`
  - [ ] **Bạn trong năm YYYY**: `"Những thay đổi trong suy nghĩ và cách ứng xử của bạn"`
  - [ ] **Hoàn cảnh bên ngoài**: `"Những tác động từ bên ngoài đến bạn trong năm YYYY"`
- [ ] Nhãn mức đánh giá theo số sao, áp dụng chung cho toàn tính năng: 1 sao `"Cần thận trọng"` (đỏ đậm), 2 sao `"Chưa thuận lợi"` (đỏ nhạt), 3 sao `"Bình thường"` (vàng), 4 sao `"Thuận lợi"` (xanh nhạt), 5 sao `"Rất thuận lợi"` (xanh đậm).

**2. Điều hướng (Interaction)**

- [ ] Bấm một ô → mở màn Yếu tố ảnh hưởng vận hạn ([[Story-TuViVanHanChiTietNam]]) và chọn sẵn tab tương ứng: Mệnh gốc, Đại vận, Tiểu vận (Bạn trong năm), Lưu niên (Hoàn cảnh bên ngoài).

---

## US-04: Xem tóm tắt lời khuyên của năm

**User Story**
**As a** người dùng muốn biết nên làm gì trong năm
**I want to** đọc tóm tắt lời khuyên ngay trên màn kết quả
**So that** tôi có định hướng hành động và biết nơi xem lời khuyên đầy đủ

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                           |
| --------------------- | ----------- | -------------------------------------------------- |
| **I**ndependent | ✅          | Khối riêng, dẫn sang màn Lời khuyên.         |
| **N**egotiable  | ✅          | Độ dài đoạn tóm tắt có thể điều chỉnh. |
| **V**aluable    | ✅          | Biến luận giải thành hành động cụ thể.    |
| **E**stimable   | ✅          | Thẻ tĩnh + 1 nút, dễ ước lượng.            |
| **S**mall       | ✅          | Hoàn thành trong vài giờ làm việc.           |
| **T**estable    | ✅          | Kiểm thử nội dung và điều hướng rõ ràng. |

### Tiêu chí nghiệm thu

- [ ] Tiêu đề khối `"Bạn nên chủ động làm gì?"`, thẻ bên dưới hiển thị nội dung tóm tắt của phần `"Xu hướng chủ động"` ở màn Lời khuyên, tối đa 4 dòng; dài hơn thì cắt và hiển thị dấu `"..."` ở cuối.
- [ ] Nút `"Xem lời khuyên dành cho bạn"` → mở màn Lời khuyên vận hạn ([[Story-TuViVanHanChiTietNam]]).

---

## US-05: Xem và cập nhật thông tin hoàn cảnh trên màn kết quả

**User Story**
**As a** người dùng muốn luận giải sát với hoàn cảnh của mình
**I want to** được gợi ý bổ sung công việc, tình trạng hôn nhân, con cái và xem lại thông tin đã khai
**So that** các mặt cuộc sống và các tháng liên quan được luận giải đúng với hoàn cảnh thực tế của tôi

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                        |
| --------------------- | ----------- | --------------------------------------------------------------- |
| **I**ndependent | ✅          | Khối riêng, dữ liệu dùng chung với màn nhập thông tin. |
| **N**egotiable  | ✅          | Câu chữ gợi ý, vị trí khối có thể điều chỉnh.       |
| **V**aluable    | ✅          | Tăng độ cá nhân hóa của luận giải.                     |
| **E**stimable   | ✅          | 2 trạng thái hiển thị, dễ ước lượng.                   |
| **S**mall       | ✅          | Hoàn thành trong 1 ngày làm việc.                          |
| **T**estable    | ✅          | Kiểm thử bằng tài khoản chưa khai / đã khai thông tin. |

### Tiêu chí nghiệm thu

**1. Chưa có thông tin nào (Happy path)**

- [ ] Khi cả 3 thông tin Công việc, Tình trạng hôn nhân, Thông tin con cái đều chưa chọn → khối hiển thị tiêu đề `"Thêm thông tin, luận giải sát hơn"`, mô tả `"Chia sẻ công việc, tình trạng hôn nhân và con cái để luận giải các mặt cuộc sống và những tháng liên quan sát hơn với hoàn cảnh thực tế của bạn."` và nút `"Bổ sung thông tin"`.

**2. Đã có ít nhất 1 thông tin (Edge case)**

- [ ] Khối hiển thị tiêu đề `"Thông tin bổ sung của bạn"` và 3 dòng `"Công việc"`, `"Tình trạng hôn nhân"`, `"Thông tin con cái"`; mỗi dòng có tên thông tin bên trái, giá trị đã chọn bên phải; dòng chưa chọn hiển thị `"Chưa chọn"` (màu nhạt). Cuối khối là nút `"Cập nhật thông tin"`.

**3. Điều hướng (Interaction)**

- [ ] Bấm `"Bổ sung thông tin"` hoặc `"Cập nhật thông tin"` → mở màn Bổ sung thông tin (US-09). Khi quay lại màn kết quả, khối hiển thị đúng thông tin vừa lưu.
- [ ] Thông tin hoàn cảnh dùng chung với phần `"Hoàn cảnh hiện tại"` ở màn nhập thông tin: giá trị đã chọn ở màn nhập thông tin hiển thị sẵn tại đây và ngược lại.

**4. Lưu theo ngày sinh (Edge case)**

- [ ] Thông tin bổ sung được lưu trên máy (local) theo ngày sinh của người được xem. Xem vận hạn với ngày sinh khác: ngày sinh đó đã có dữ liệu lưu → hiển thị dữ liệu đã lưu; chưa có → làm mới, cả 3 thông tin về trạng thái chưa chọn (khối hiển thị như mục 1).

---

## US-06: Xem đánh giá từng mặt cuộc sống trong năm

**User Story**
**As a** người dùng quan tâm đến từng lĩnh vực cụ thể
**I want to** xem nhanh mức đánh giá của từng mặt cuộc sống trong năm
**So that** tôi biết mặt nào thuận lợi, mặt nào cần giữ gìn và chọn xem chi tiết

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                    |
| --------------------- | ----------- | ----------------------------------------------------------- |
| **I**ndependent | ✅          | Danh sách riêng, mỗi dòng dẫn sang một tab chi tiết. |
| **N**egotiable  | ✅          | Thứ tự, câu mô tả ngắn có thể tinh chỉnh.          |
| **V**aluable    | ✅          | Người dùng tìm ngay mặt mình quan tâm.               |
| **E**stimable   | ✅          | Danh sách cố định 9 dòng, dễ ước lượng.           |
| **S**mall       | ✅          | Hoàn thành trong 1 ngày làm việc.                      |
| **T**estable    | ✅          | Kiểm thử hiển thị và điều hướng từng dòng.       |

### Tiêu chí nghiệm thu

**1. Danh sách các mặt (Happy path)**

- [ ] Tiêu đề khối `"Năm YYYY, từng mặt cuộc sống của bạn ra sao?"`, bên dưới là danh sách theo thứ tự: Công việc, Tài chính, Tình cảm, Gia đạo, Sức khỏe, Quan hệ xã hội, Nhà cửa tài sản, Đi lại xuất hành. Mỗi dòng gồm icon, tên mặt, thang 5 sao kèm nhãn mức đánh giá (theo quy tắc ở US-03), câu mô tả ngắn (ví dụ `"Giữ nhịp, chờ thời cơ"`) và mũi tên điều hướng.
- [ ] Mặt được đánh giá cần giữ gìn trong năm hiển thị thêm tag `"CẦN GIỮ"` cạnh tên mặt.
- [ ] Dòng cuối `"Các vận hạn khác"` liệt kê tên cung động trong năm và các cung còn lại có sao lưu tác động (ví dụ `"Mệnh, Phụ Mẫu"`).

**2. Điều hướng (Interaction)**

- [ ] Bấm một dòng → mở màn Các mặt trong đời sống ([[Story-TuViVanHanChiTietNam]]) và chọn sẵn tab tương ứng.

---

## US-07: Xem nhịp vận hạn 12 tháng âm lịch

**User Story**
**As a** người dùng muốn lên kế hoạch theo từng tháng
**I want to** thấy nhịp thuận – nghịch của 12 tháng âm lịch và tóm tắt tháng hiện tại
**So that** tôi biết tháng nào nên nắm cơ hội, tháng nào cần cẩn trọng

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                  |
| --------------------- | ----------- | --------------------------------------------------------- |
| **I**ndependent | ✅          | Khối riêng, dẫn sang màn Vận hạn tháng.            |
| **N**egotiable  | ✅          | Kiểu biểu đồ, màu sắc có thể điều chỉnh.       |
| **V**aluable    | ✅          | Đáp ứng nhu cầu lập kế hoạch theo tháng.          |
| **E**stimable   | ✅          | Biểu đồ + dải tháng + thẻ, ước lượng được.   |
| **S**mall       | ✅          | Hoàn thành trong 1–2 ngày làm việc.                 |
| **T**estable    | ✅          | Kiểm thử theo dữ liệu 12 tháng và ngày hiện tại. |

### Tiêu chí nghiệm thu

**1. Biểu đồ và dải tháng (Happy path)**

- [ ] Tiêu đề khối `"Vận hạn 12 tháng âm lịch của bạn trong năm YYYY"`. Thẻ bên dưới có chú thích màu và biểu đồ cột 12 tháng: chiều cao cột theo điểm của tháng, màu cột theo số sao của tháng (5 màu theo thang ở US-03), số tháng hiển thị dưới mỗi cột. Chú thích chỉ hiển thị 3 mức màu: `"Thuận lợi"` (xanh), `"Bình thường"` (vàng), `"Cần thận trọng"` (đỏ).
- [ ] Dưới biểu đồ là dải 12 ô tháng cuộn ngang, mỗi ô gồm `"Tháng"`, số tháng và thang 5 sao. Dải tháng mặc định chọn tháng âm lịch hiện tại; năm đang xem không chứa tháng hiện tại thì chọn tháng giữa năm (tháng 6). Tháng được chọn được làm nổi bật trên cả biểu đồ và dải tháng, ô tháng nằm ở chính giữa dải.

**2. Thẻ tháng được chọn (Happy path)**

- [ ] Thẻ tóm tắt tháng được chọn gồm tên `"Tháng N âm lịch"`, nhãn trạng thái là tên mức đánh giá của tháng theo thang 5 sao ở US-03 (ví dụ `"Chưa thuận lợi"`, màu theo mức), khoảng ngày dương lịch tương ứng (ví dụ `"06/05 – 04/06/2027 dương lịch"`) và một câu tóm tắt tháng.

**3. Điều hướng (Interaction)**

- [ ] Bấm một cột biểu đồ hoặc một ô tháng → mở màn Vận hạn tháng ([[Story-TuViVanHanThang]]) của tháng đó.
- [ ] Bấm `"Xem vận hạn tháng này"` trên thẻ → mở màn Vận hạn tháng của tháng đang chọn.

---

## US-08: Mở khóa tử vi chuyên sâu và khám phá tính năng khác

**User Story**
**As a** người dùng đã xem xong vận hạn năm
**I want to** thấy lối vào gói tử vi chuyên sâu và các tính năng tử vi khác
**So that** tôi có thể tìm hiểu sâu hơn về bản thân

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                              |
| --------------------- | ----------- | ----------------------------------------------------- |
| **I**ndependent | ✅          | Khối cuối trang, không phụ thuộc dữ liệu năm. |
| **N**egotiable  | ✅          | Hình banner, danh sách tính năng có thể đổi.  |
| **V**aluable    | ✅          | Tăng chuyển đổi và giữ chân người dùng.     |
| **E**stimable   | ✅          | Banner + lưới tĩnh, dễ ước lượng.             |
| **S**mall       | ✅          | Hoàn thành trong vài giờ làm việc.              |
| **T**estable    | ✅          | Kiểm thử điều hướng từng mục.                 |

### Tiêu chí nghiệm thu

- [ ] Banner `"Mở khóa toàn bộ tử vi chuyên sâu"` chỉ hiển thị khi được cấu hình, nằm sau khối Vận hạn 12 tháng; bấm banner → chuyển sang deeplink
- [ ] Ngay trên khối `"Khám phá thêm"` là khối khảo sát inline `"Hữu ích"` / `"Chưa hữu ích"`, theo khung khảo sát inline dùng chung ([[Story-KhaoSatInline-KichHoatNangLuong]]).
- [ ] Cuối màn là khối `"Khám phá thêm"` gồm lưới các tính năng khác, không gồm tính năng đang xem (Tử vi vận hạn); mỗi mục có hình và tên, gồm 6 mục: Tử vi hôm nay, Tử vi tổng quan, Tài chính & Đầu tư, Nghề nghiệp & Sự nghiệp, Tư vấn tình duyên, Lá số tử vi. Bấm một mục → mở tính năng tương ứng.

---

## US-09: Bổ sung thông tin hoàn cảnh

**User Story**
**As a** người dùng muốn luận giải sát với hoàn cảnh của mình
**I want to** chọn công việc, tình trạng hôn nhân và con cái trên một màn riêng
**So that** các mặt cuộc sống và các tháng liên quan được luận giải theo hoàn cảnh thực tế của tôi

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                              |
| --------------------- | ----------- | ----------------------------------------------------- |
| **I**ndependent | ✅          | Màn riêng, mở từ khối thông tin ở US-05.       |
| **N**egotiable  | ✅          | Danh sách lựa chọn có thể bổ sung.              |
| **V**aluable    | ✅          | Dữ liệu đầu vào cho luận giải cá nhân hóa.  |
| **E**stimable   | ✅          | Biểu mẫu chọn, dễ ước lượng.                  |
| **S**mall       | ✅          | Hoàn thành trong 1 ngày làm việc.                |
| **T**estable    | ✅          | Kiểm thử chọn, bỏ chọn, lưu và huỷ rõ ràng. |

### Tiêu chí nghiệm thu

**1. Giao diện màn (Happy path)**

- [ ] Thanh tiêu đề `"Bổ sung thông tin"` và nút quay lại. Đầu màn là dòng mô tả `"Thêm thông tin để luận giải sát hơn với hoàn cảnh thực tế của bạn"`.
- [ ] Màn gồm 3 phần, mỗi phần có icon, câu hỏi và các dòng lựa chọn; giá trị đã lưu trước đó được chọn sẵn:
  - [ ] **`"Bạn đang làm công việc gì?"`**: `"Nhân viên"`, `"Kinh doanh, bán hàng (sales)"`, `"Lao động tự do"`, kèm nút `"Chọn công việc khác"` (US-10). Nếu công việc đang chọn không thuộc 3 lựa chọn này thì hiển thị thêm thành một dòng đang được chọn.
  - [ ] **`"Tình trạng hôn nhân của bạn?"`**: `"Độc thân"`, `"Đang hẹn hò"`, `"Đã kết hôn"`, `"Đã ly hôn"`.
  - [ ] **`"Bạn đã có con chưa?"`**: `"Chưa có con"`, `"Đã có con"`.
- [ ] Phần đã có giá trị lưu trước đó hiển thị thêm dòng `"Không chọn"` ở cuối để người dùng xoá thông tin đó.
- [ ] Nút `"Xác nhận"` pin cố định ở cuối màn.

**2. Chọn và lưu (Interaction)**

- [ ] Bấm một dòng → dòng đó được chọn (có dấu tích), bỏ chọn dòng khác trong cùng phần. Mỗi phần chỉ chọn 1 giá trị; được phép để trống.
- [ ] Bấm `"Chọn công việc khác"` → mở popup `"Chọn công việc"` (US-10).
- [ ] Bấm `"Xác nhận"` → lưu cả 3 thông tin theo ngày sinh của người đang xem (US-05, mục 4); phần chọn `"Không chọn"` hoặc để trống thì xoá giá trị đã lưu; sau đó quay về màn kết quả.
- [ ] Bấm nút quay lại → bỏ các thay đổi chưa xác nhận và quay về màn trước đó.

---

## US-10: Chọn công việc từ danh sách đầy đủ

**User Story**
**As a** người dùng có công việc không nằm trong các lựa chọn nhanh
**I want to** tìm và chọn đúng công việc của mình trong danh sách đầy đủ
**So that** phần luận giải công việc phù hợp với nghề nghiệp thực tế của tôi

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                              |
| --------------------- | ----------- | ----------------------------------------------------- |
| **I**ndependent | ✅          | Bottom sheet riêng, trả kết quả về US-09.        |
| **N**egotiable  | ✅          | Danh sách nghề, cách nhóm có thể điều chỉnh. |
| **V**aluable    | ✅          | Mở rộng độ phủ nghề nghiệp.                    |
| **E**stimable   | ✅          | Danh sách + tìm kiếm, ước lượng được.       |
| **S**mall       | ✅          | Hoàn thành trong 1 ngày làm việc.                |
| **T**estable    | ✅          | Kiểm thử tìm kiếm có / không có kết quả.     |

### Tiêu chí nghiệm thu

**1. Danh sách công việc (Happy path)**

- [ ] Bấm `"Chọn công việc khác"` → mở bottom sheet `"Chọn công việc"` có nút đóng, ô tìm kiếm `"Tìm kiếm công việc của bạn"` và danh sách công việc chia theo nhóm có tiêu đề: Lãnh đạo, điều hành; Quản lý; Nhân viên, chuyên viên; Tự do; Học sinh; Sinh viên; Nội trợ; Nghỉ hưu. Cuối danh sách là lựa chọn `"Khác"` không thuộc nhóm nào.
- [ ] Công việc đang chọn có dấu tích; khi mở sheet, danh sách tự cuộn đến công việc này.
- [ ] Bấm một công việc → đóng sheet, công việc đó được chọn ở phần Công việc (US-09). Bấm nút đóng hoặc vùng tối bên ngoài → đóng sheet, giữ nguyên lựa chọn cũ.

**2. Tìm kiếm (Happy path & Negative)**

- [ ] Nhập từ khoá → lọc ngay các công việc có tên hoặc tên nhóm chứa từ khoá, không phân biệt hoa thường và có dấu/không dấu (ví dụ `"ke toan"` tìm được `"Kế toán, kiểm toán"`); nhóm không còn kết quả thì ẩn.
- [ ] Không có kết quả → hiển thị `"Không tìm thấy công việc phù hợp. Bạn có thể chọn “Khác”."`.
- [ ] Mỗi lần mở lại sheet, ô tìm kiếm được xoá trắng và hiển thị đầy đủ danh sách.
