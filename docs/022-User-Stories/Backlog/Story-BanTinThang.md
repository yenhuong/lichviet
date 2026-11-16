---
id: Story-BanTinThang
type: story
status: draft
project: Lich_Viet
owner: "@product-team"
tags: [ban-tin, ban-tin-thang, van-trinh, kich-hoat-nang-luong, gieo-que, tiet-khi, mung-1]
linked-to: "[[Stories-MOC]]", "[[BPRD-003-BanTinTuanThang]]"
created: 2026-10-14
---
# User stories cho màn Bản tin đầu tháng

Tài liệu này định nghĩa các user story cho màn "Bản tin đầu tháng" (Phase 1 của [[BPRD-003-BanTinTuanThang]]), dựa trên prototype `prototype/BanTinDauThang.html`. Toàn bộ nội dung cá nhân hóa theo hồ sơ của người dùng.

- **Screen name**: `BanTinThang`
- **Deeplink**: `lichviet://?screen=bantin:bantinthang`

Thứ tự các khối trên màn hình từ trên xuống:

1. Thanh tiêu đề
2. Khối tổng quan tháng mới (hero)
3. Thanh thông tin hồ sơ
4. Khối thời điểm vàng trong tháng
5. Khối vận trình tháng của bạn
6. Khối tử vi hôm nay
7. Khối gieo quẻ đầu tháng
8. Khối thời điểm đáng chú ý trong tháng (ngày tốt nhất, ngày tốt, ngày kiêng, biểu đồ chỉ số ngày tốt)
9. Khối tiết khí trong tháng
10. Khối việc hợp tuổi sắp tới
11. Khối chuẩn bị cho ngày Mùng 1
12. Lời nhắn đầu tháng

---

## US-BTT-01: Xem tổng quan tháng mới và hồ sơ đang xem

**As a** người dùng Lịch Việt đã có hồ sơ ngày sinh, mở bản tin khi sang tháng mới Âm lịch

**I want to** thấy ngay thông tin tháng mới (tên tháng, khoảng ngày, số ngày, tiết khí đầu tháng) và thông tin ngày sinh bản tin đang dùng

**So that** tôi nắm nhanh bức tranh chung của tháng và chắc chắn nội dung bên dưới tính theo đúng thông tin của tôi

### Metadata

- **Epic/Feature**: Bản tin định kỳ - Bản tin tháng (Phase 1)
- **Priority**: Must Have
- **Estimate**: 3 Story Points
- **Dependencies**: API bản tin tháng theo hồ sơ. Màn cập nhật thông tin tài khoản và màn nhập ngày sinh (đã có sẵn).

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                                                |
| --------------------- | ------- | ----------------------------------------------------------------------- |
| **I**ndependent | ✅      | Là khung màn hình, các khối khác gắn vào sau.                   |
| **N**egotiable  | ✅      | Ảnh nền, thứ tự dòng thông tin có thể điều chỉnh.            |
| **V**aluable    | ✅      | Định hướng người đọc, cho phép sửa thông tin ngày sinh. |
| **E**stimable   | ✅      | Prototype rõ, dữ liệu đơn giản.                                   |
| **S**mall       | ✅      | Thanh tiêu đề, hero và thanh hồ sơ.                               |
| **T**estable    | ✅      | Kiểm chứng theo từng tháng Âm lịch và từng hồ sơ.             |

### Tiêu chí nghiệm thu

#### AC1 - Điều kiện hiển thị bản tin

- [ ] Bản tin hiển thị khi hồ sơ có ít nhất ngày sinh, không phân biệt người dùng đã đăng nhập hay chưa. Chưa có ngày sinh → không hiển thị bản tin.

#### AC2 - Thanh tiêu đề

- [ ] Thanh tiêu đề cố định gồm nút quay lại, tiêu đề "Bản tin đầu tháng" và nút chia sẻ. Bấm quay lại → trở về màn trước. Bấm chia sẻ → mở bảng chia sẻ của hệ điều hành, nội dung chia sẻ là ảnh chụp toàn bộ nội dung bản tin.

#### AC3 - Khối tổng quan tháng mới (Happy path)

- [ ] Khối hiển thị trên nền ảnh minh họa Mùng 1, gồm 4 dòng theo thứ tự: tên tháng Âm lịch (VD `"Tháng 7 âm lịch"`), khoảng ngày Dương lịch của tháng (VD `"13/08 - 10/09/2026 (DL)"`), can chi tháng kèm số ngày (VD `"Tháng Bính Thân có 29 ngày"`, tháng thiếu 29, tháng đủ 30) và tiết khí đầu tháng (VD `"Tiết khí đầu tháng: Lập Thu"`).
- [ ] **Tháng nhuận (Edge case)**: tên tháng kèm chữ "nhuận" (VD `"Tháng 4 nhuận âm lịch"`).

#### AC4 - Thanh thông tin hồ sơ

- [ ] Thanh hồ sơ gồm avatar, họ tên, nhãn can chi năm sinh (VD `"Nhâm Thân"`) và dòng ngày giờ sinh (VD `"15/08/1992 · 08:30 (Giờ Thìn)"`).
- [ ] **Hồ sơ thiếu giờ sinh**: dòng ngày sinh chỉ hiển thị ngày sinh, nội dung bản tin tính theo ngày, tháng, năm sinh (riêng khối vận trình tháng theo AC2 của US-BTT-03).
- [ ] **Hồ sơ không có họ tên**: vị trí họ tên hiển thị ngày sinh (VD `"15/08/1992"`), dòng bên dưới chỉ hiển thị giờ sinh (VD `"08:30 (Giờ Thìn)"`), thiếu cả giờ sinh thì ẩn dòng này.
- [ ] Bấm thanh hồ sơ:
  - Đã đăng nhập → mở màn cập nhật thông tin tài khoản.
  - Chưa đăng nhập → mở màn nhập ngày sinh, hiển thị sẵn thông tin hiện tại. Ngày sinh bắt buộc, giờ sinh không bắt buộc.
- [ ] Lưu thông tin xong → quay lại bản tin, toàn bộ nội dung tính lại theo thông tin mới.

#### AC5 - Tải dữ liệu bản tin (Negative path)

- [ ] Trong lúc tải dữ liệu → hiển thị biểu tượng loading.
- [ ] Mất mạng hoặc máy chủ lỗi khi chưa có bản tin đã lưu → hiển thị trạng thái lỗi kèm nút "Thử lại". Bấm "Thử lại" → tải lại bản tin.

---

## US-BTT-02: Xem thời điểm vàng kích hoạt năng lượng trong tháng

**As a** người dùng quan tâm phong thủy, đang đọc bản tin tháng của mình

**I want to** biết ngày nào trong tháng là thời điểm vàng để kích hoạt năng lượng và còn bao lâu đến ngày đó

**So that** tôi chuẩn bị và kích hoạt đúng thời điểm, còn Lịch Việt có điểm chạm định kỳ dẫn người dùng sang tính năng Kích hoạt năng lượng cá nhân

### Metadata

- **Epic/Feature**: Bản tin định kỳ - Bản tin tháng (Phase 1)
- **Priority**: Must Have
- **Estimate**: 3 Story Points
- **Dependencies**: API `tim-ngay-khnl`.

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                                               |
| --------------------- | ------- | ---------------------------------------------------------------------- |
| **I**ndependent | ✅      | Chỉ cần dữ liệu ngày kích hoạt.                                 |
| **N**egotiable  | ✅      | Câu chữ tiêu đề, mô tả và ảnh minh họa có thể tinh chỉnh. |
| **V**aluable    | ✅      | Khối chuyển đổi chính sang tính năng trả phí (KPI K04).       |
| **E**stimable   | ✅      | 3 trường hợp đã có thiết kế trên prototype.                   |
| **S**mall       | ✅      | 1 khối, 3 biến thể giao diện.                                      |
| **T**estable    | ✅      | Kiểm chứng theo bảng điều kiện.                                  |

### Tiêu chí nghiệm thu

#### AC1 - Bảng điều kiện hiển thị theo loại kích hoạt

Các loại kích hoạt chia thành 2 nhóm. **Nhóm 1** là các loại có đặt linh vật (VD Quý Nhân, Âm quý nhân, Tài Lộc, Thiên Mã). **Nhóm 2** là các loại không có linh vật (VD vòng tay/quả cầu/tháp văn xương). Có loại nhóm 1 → ưu tiên hiển thị nhóm 1.

| Thành phần            | TH1 - Chỉ có 1 loại kích hoạt nhóm 1                     | TH2 - Có nhiều loại kích hoạt nhóm 1                                                                          | TH3 - Chỉ có loại kích hoạt nhóm 2          |
| ----------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Tiêu đề              | Theo loại kích hoạt, VD "Đón sự hỗ trợ từ Quý Nhân" | "Tháng này có nhiều cơ hội dành cho bạn"                                                                    | "Thời điểm tốt để cân bằng năng lượng" |
| Thẻ loại kích hoạt  | ❌                                                             | ✅ các loại nhóm 1 có trong tháng<br />Dương quý nhân, âm quý nhân thì chỉ cần hiện mỗi Quý nhân | ❌                                                |
| Nhãn phía trên ngày | "Ngày kích hoạt gần nhất"                                 | "Ngày kích hoạt gần nhất"                                                                                      | "Ngày phù hợp gần nhất"                      |
| Ngày hiển thị        | Ngày gần nhất của loại đó                               | Ngày gần nhất trong các loại nhóm 1                                                                           | Ngày phù hợp gần nhất                        |
| Nút CTA                | "Xem cách kích hoạt"                                        | "Xem cách kích hoạt"                                                                                             | "Xem cách cân bằng"                            |
| Ảnh minh họa          | Theo loại kích hoạt, VD ảnh Quý Nhân                     | Ảnh nhiều cơ hội                                                                                                | Ảnh cân bằng                                   |

#### AC2 - Nội dung khối (Happy path)

- [ ] Dữ liệu lấy từ API `tim-ngay-khnl` theo hồ sơ đang xem, chỉ quét các ngày kích hoạt trong tháng Âm lịch hiện tại, từ hôm nay trở đi.
- [ ] Ngày hiển thị dạng `dd/mm/yyyy` (VD `"08/10/2026"`), bên dưới là 1 câu mô tả lợi ích do server trả về.
- [ ] Đếm ngược `"Còn X ngày"` chỉ hiển thị khi ngày xem cách ngày hiển thị từ 5 ngày trở xuống. Ngày hiển thị trùng hôm nay → không hiển thị đếm ngược, nhãn phía trên ngày đổi thành `"Hôm nay là ngày kích hoạt"`.

#### AC3 - Điều hướng

- [ ] Bấm vào khối (kể cả nút CTA) → mở màn kết quả KHNL của hồ sơ đang xem (`lichviet://?screen=kich_hoat_nang_luong_ket_qua`).

#### AC4 - Không có dữ liệu (Negative path)

- [ ] Tháng Âm lịch hiện tại không có ngày kích hoạt, các ngày kích hoạt đã qua hết, hoặc gọi API lỗi → ẩn khối.

---

## US-BTT-03: Xem vận trình tháng của bạn

**As a** người dùng Lịch Việt muốn lên kế hoạch cho tháng mới

**I want to** đọc nhận định tổng quan về tháng và đánh giá 4 phương diện Công việc, Tài chính, Tình cảm, Gia đạo

**So that** tôi biết mặt nào thuận lợi để đẩy mạnh, mặt nào cần lưu ý

### Metadata

- **Epic/Feature**: Bản tin định kỳ - Bản tin tháng (Phase 1)
- **Priority**: Must Have
- **Estimate**: 2 Story Points
- **Dependencies**: Dữ liệu vận hạn tháng theo hồ sơ. Màn [[Story-ChiTietVanHanThang]].

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                                        |
| --------------------- | ------- | --------------------------------------------------------------- |
| **I**ndependent | ✅      | Dùng lại dữ liệu vận hạn tháng sẵn có.                 |
| **N**egotiable  | ✅      | Bộ nhãn đánh giá và màu có thể thống nhất lại.      |
| **V**aluable    | ✅      | Nội dung cốt lõi, dẫn sang luận giải chi tiết (KPI K05). |
| **E**stimable   | ✅      | Bố cục đơn giản.                                           |
| **S**mall       | ✅      | 1 khối.                                                        |
| **T**estable    | ✅      | Kiểm chứng theo nhãn và màu từng chỉ số.                |

### Tiêu chí nghiệm thu

#### AC1 - Hồ sơ đủ ngày sinh và giờ sinh (Happy path)

- [ ] Dữ liệu lấy từ vận hạn tháng Âm lịch hiện tại của hồ sơ đang xem.
- [ ] Khối có tiêu đề "Vận trình tháng của bạn" kèm nhãn đánh giá tổng quan ("Tháng tốt", "Ổn định" hoặc "Cần lưu ý") và đoạn nhận định tóm tắt cả tháng.
- [ ] Lưới 2 x 2 hiển thị 4 phương diện theo thứ tự Công việc 💼, Tài chính 💰, Tình cảm 💖, Gia đạo 🏡. Mỗi ô gồm icon, tên phương diện và kết quả đánh giá ("Tốt", "Ổn định" màu xanh lá, "Cần lưu ý" màu đỏ).
- [ ] Bấm vào khối (kể cả liên kết "Xem luận giải vận hạn tháng") → mở màn chi tiết vận hạn tháng hiện tại của hồ sơ đang xem (`lichviet://?screen=tu_vi:vanhannam`).

#### AC2 - Hồ sơ không đủ ngày sinh và giờ sinh

- [ ] Ẩn khối đi.

---

## US-BTT-04: Xem nhanh tử vi hôm nay

**As a** người dùng Lịch Việt mở bản tin trong những ngày đầu tháng

**I want to** đọc ngay lời nhắn tử vi hôm nay kèm màu hợp và số may mắn

**So that** tôi có định hướng cho ngày hôm nay mà không phải chuyển màn

### Metadata

- **Epic/Feature**: Bản tin định kỳ - Bản tin tháng (Phase 1)
- **Priority**: Should Have
- **Estimate**: 1 Story Point
- **Dependencies**: Dữ liệu tử vi hôm nay theo hồ sơ. Màn tử vi hôm nay chi tiết.

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                                         |
| --------------------- | ------- | ---------------------------------------------------------------- |
| **I**ndependent | ✅      | Dùng lại dữ liệu tử vi ngày sẵn có.                      |
| **N**egotiable  | ✅      | Cách thể hiện màu hợp, số may mắn có thể điều chỉnh. |
| **V**aluable    | ✅      | Tạo lý do quay lại bản tin trong các ngày đầu tháng.    |
| **E**stimable   | ✅      | Bố cục đơn giản.                                            |
| **S**mall       | ✅      | 1 khối.                                                         |
| **T**estable    | ✅      | So khớp với màn tử vi hôm nay.                              |

### Tiêu chí nghiệm thu

#### AC1 - Hồ sơ đủ ngày sinh và giờ sinh (Happy path)

- [ ] Khối có tiêu đề "Tử vi hôm nay", dòng ngày Dương lịch và Âm lịch (VD `"Thứ Sáu, 14/08/2026 · Mùng 2 tháng 7 (ÂL)"`) và 1 câu lời nhắn trong ngày.
- [ ] Thẻ "Màu hợp" kèm chấm màu và thẻ "Số may mắn" kèm các số may mắn, trùng khớp với màn tử vi hôm nay của cùng hồ sơ.
- [ ] Bấm vào khối (kể cả liên kết "Xem chi tiết tử vi hôm nay") → mở màn tử vi hôm nay của hồ sơ đang xem (`lichviet://?screen=tuvihangngay`).

#### AC2 - Hồ sơ không đủ ngày sinh và giờ sinh

- [ ] Khối gồm icon, tiêu đề "Tử vi hôm nay", dòng ngày Dương lịch và Âm lịch, mô tả "Khám phá vận trình Công việc, Tài lộc, Gia đạo & Sức khoẻ của bạn" và nút "Xem chi tiết tử vi hôm nay". Không có lời nhắn trong ngày, thẻ "Màu hợp" và "Số may mắn".
- [ ] Bấm vào khối (kể cả nút) → mở màn tử vi hôm nay của hồ sơ đang xem (`lichviet://?screen=tuvihangngay`).

---

## US-BTT-05: Gieo quẻ nhận thông điệp tháng mới

**As a** người dùng yêu thích văn hóa tâm linh Á Đông

**I want to** gieo một quẻ đầu tháng để nhận lời nhắn dành riêng cho tôi

**So that** tôi có tâm thế tích cực khi bước vào tháng mới, còn Lịch Việt tăng tương tác với bản tin (KPI K06)

### Metadata

- **Epic/Feature**: Bản tin định kỳ - Bản tin tháng (Phase 1)
- **Priority**: Should Have
- **Estimate**: 1 Story Point
- **Dependencies**: Deeplink màn gieo quẻ hỏi việc.

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                            |
| --------------------- | ------- | --------------------------------------------------- |
| **I**ndependent | ✅      | Không phụ thuộc khối khác.                     |
| **N**egotiable  | ✅      | Câu chữ và hình minh họa có thể tinh chỉnh. |
| **V**aluable    | ✅      | Tạo trải nghiệm tương tác, tăng gắn kết.   |
| **E**stimable   | ✅      | Chỉ hiển thị và điều hướng.                 |
| **S**mall       | ✅      | 1 khối.                                            |
| **T**estable    | ✅      | Kiểm chứng nội dung khối và deeplink.          |

### Tiêu chí nghiệm thu

#### AC1 - Khối gieo quẻ (Happy path)

- [ ] Khối có tiêu đề "Thông điệp tháng mới đang chờ bạn", mô tả "Gieo quẻ để khám phá lời nhắn dành riêng cho bạn.", nút "Gieo quẻ ngay" có hiệu ứng tỏa sáng
- [ ] hình minh họa ống quẻ, đồng xu thì thêm hiệu ứng lắc ống.
- [ ] Bấm vào khối (kể cả nút "Gieo quẻ ngay") → mở màn gieo quẻ hỏi việc, chủ đề gieo quẻ đầu tháng, theo giới tính hồ sơ đang xem: nam `lichviet://?screen=luc_hao:nhap_thong_tin_xem&id_nam=93`, nữ `lichviet://?screen=luc_hao:nhap_thong_tin_xem&id_nu=92`.

---

## US-BTT-06: Xem các thời điểm đáng chú ý và chỉ số ngày tốt trong tháng

**As a** người dùng cần chọn ngày để khởi sự, ký kết, xuất hành hoặc làm việc trọng đại

**I want to** xem ngày tốt nhất tháng, các ngày tốt kèm chỉ số, các ngày kiêng và biểu đồ chỉ số ngày tốt cả tháng

**So that** tôi chọn được ngày phù hợp nhất và tránh ngày không thuận

### Metadata

- **Epic/Feature**: Bản tin định kỳ - Bản tin tháng (Phase 1)
- **Priority**: Must Have
- **Estimate**: 5 Story Points
- **Dependencies**: Dữ liệu chỉ số ngày tốt từng ngày trong tháng theo hồ sơ. Màn chi tiết ngày, màn danh sách ngày tốt, màn danh sách ngày kiêng, màn chỉ số ngày tốt cả tháng.

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                                                                   |
| --------------------- | ------- | ------------------------------------------------------------------------------------------ |
| **I**ndependent | ✅      | Chỉ cần dữ liệu chỉ số ngày của tháng.                                            |
| **N**egotiable  | ✅      | Số ngày trên 1 màn biểu đồ, màu sắc có thể điều chỉnh.                       |
| **V**aluable    | ✅      | Đáp ứng nhu cầu chọn ngày (JTBD 1).                                                  |
| **E**stimable   | ✅      | Biểu đồ đã có prototype chi tiết.                                                   |
| **S**mall       | ⚠️    | Khối lớn nhất màn. Có thể tách biểu đồ thành story riêng nếu vượt 1 sprint. |
| **T**estable    | ✅      | Kiểm chứng với tháng thiếu và tháng đủ.                                           |

### Tiêu chí nghiệm thu

#### AC1 - Ngày tốt nhất tháng (Happy path)

- [ ] Khối có tiêu đề "Thời điểm đáng chú ý trong tháng". Thẻ "Ngày tốt nhất tháng" gồm icon ⭐, ngày Âm lịch có chỉ số cao nhất (VD `"18/7 âm lịch"`) và chỉ số (VD `"92%"`). Bấm thẻ → mở màn chi tiết ngày đó (`lichviet://?screen=lich_ngay:chi_tiet_ngay&date=yyyy-mm-dd`, `date` là ngày Dương lịch của ngày được bấm, áp dụng cho mọi điều hướng sang chi tiết ngày trong khối này).

#### AC2 - Các ngày tốt trong tháng

- [ ] Nhóm "Các ngày tốt trong tháng" (icon 👍) hiển thị các thẻ ngày cuộn ngang theo thứ tự ngày, mỗi thẻ gồm ngày Âm lịch (VD `"05/7"`) và chỉ số (VD `"78%"`), thẻ ngày tốt nhất tháng có nền xanh lá. Ngày đã qua vẫn hiển thị. Bấm thẻ → mở màn chi tiết ngày đó.

#### AC3 - Ngày kiêng việc trọng đại

- [ ] Nhóm "Ngày kiêng việc trọng đại" hiển thị các ngày không nên làm việc quan trọng (VD `"09/7"`, `"21/7"`), ngày đã qua vẫn hiển thị. Bấm thẻ → mở màn chi tiết ngày đó.

#### AC4 - Biểu đồ chỉ số ngày tốt trong tháng

- [ ] Biểu đồ đường "Chỉ số ngày tốt trong tháng" vẽ chỉ số từng ngày trong tháng Âm lịch (29 điểm với tháng thiếu, 30 với tháng đủ). Trục tung cố định bên trái với các mốc 0, 50, 100. Trục hoành đánh số ngày Âm lịch, mỗi màn hiển thị 15 ngày, vuốt ngang để xem tiếp. Khi mở bản tin, biểu đồ tự cuộn tới ngày hôm nay.
- [ ] Điểm hôm nay vẽ lớn hơn, có bong bóng chỉ số (VD `"45%"`) và số ngày trên trục hoành có nền xanh lá. Số ngày tốt nhất tháng in đậm màu xanh.
- [ ] Bấm một điểm trên biểu đồ → mở màn chi tiết ngày của ngày đó.

---

## US-BTT-07: Theo dõi tiết khí trong tháng

**As a** người dùng chú trọng sinh hoạt thuận theo tự nhiên

**I want to** biết tiết khí sắp tới, còn bao nhiêu ngày, đặc điểm nổi bật và các mốc tiết khí trong tháng

**So that** tôi chủ động điều chỉnh sức khỏe, sinh hoạt và công việc theo thời tiết

### Metadata

- **Epic/Feature**: Bản tin định kỳ - Bản tin tháng (Phase 1)
- **Priority**: Should Have
- **Estimate**: 3 Story Points
- **Dependencies**: Dữ liệu 24 tiết khí và nội dung mô tả từng tiết khí.

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                                        |
| --------------------- | ------- | --------------------------------------------------------------- |
| **I**ndependent | ✅      | Không phụ thuộc hồ sơ, chỉ phụ thuộc thời gian.        |
| **N**egotiable  | ✅      | Nội dung đặc điểm, icon tiết khí có thể điều chỉnh. |
| **V**aluable    | ✅      | Bổ sung góc nhìn thiên nhiên cho bản tin.                 |
| **E**stimable   | ✅      | Prototype rõ.                                                  |
| **S**mall       | ✅      | 1 khối, 2 phần.                                               |
| **T**estable    | ✅      | Kiểm chứng theo lịch tiết khí.                             |

### Tiêu chí nghiệm thu

#### AC1 - Tiết khí hiển thị (Happy path)

Ngày bắt đầu tiết khí tính là ngày thứ 1.

- [ ] **TH1 - Tiết khí hiện tại đã diễn ra từ ngày thứ 11 trở đi**: hiển thị tiết khí tiếp theo, gồm "Sắp chuyển sang tiết khí [tên]" (VD `"Xử Thử"`) kèm icon, hộp đếm ngược "CÒN [X] NGÀY", dòng "Bắt đầu từ [dd/mm/yyyy]" và mục "Đặc điểm nổi bật" là mô tả ngắn về tiết khí đó.
- [ ] **TH2 - Tiết khí hiện tại mới diễn ra dưới 11 ngày**: hiển thị nhãn "Tiết khí hiện tại", tên tiết khí kèm icon (VD `"Lập Thu"`), dòng "Bắt đầu từ [dd/mm/yyyy]", dòng "Nay là ngày thứ [X] của tiết khí" thay cho hộp đếm ngược và mục "Đặc điểm nổi bật" là mô tả ngắn về tiết khí đó.
- [ ] Bấm "Xem có gì đáng chú ý" → mở màn chi tiết của tiết khí đang hiển thị (`lichviet://?screen=tiet_khi&date=yyyy-mm-dd`, `date` là ngày thứ 2 của tiết khí, áp dụng cho cả các mốc ở AC2).

#### AC2 - Nhịp tiết khí trong tháng

- [ ] Khung "Nhịp tiết khí trong tháng" chỉ hiển thị các tiết khí diễn ra trong tháng Âm lịch hiện tại, gồm cả tiết khí đã bắt đầu trước Mùng 1 và vẫn đang diễn ra vào ngày Mùng 1 (VD tháng 7 bắt đầu 13/08 thì vẫn hiển thị Lập Thu bắt đầu 07/08), sắp theo thứ tự thời gian trên đường thời gian ngang. Mỗi mốc gồm icon, tên, ngày bắt đầu và trạng thái. Đoạn nối từ mốc đang diễn ra đến mốc sắp tới là nét liền, tới mốc xa hơn là nét đứt.
- [ ] Mốc đang diễn ra màu xanh lá, ngày dạng "Bắt đầu dd/mm", trạng thái "Đang diễn ra". Mốc sắp tới màu cam, trạng thái "Còn X ngày". Mốc kế tiếp màu xám, trạng thái "Còn X ngày". Mốc đã qua màu xám, không hiển thị dòng trạng thái.
- [ ] Bấm một mốc → chuyển tới màn chi tiết của tiết khí đó.
- [ ] Cuối khung có gợi ý "Chạm từng mốc để xem chi tiết".

---

## US-BTT-08: Xem việc hợp tuổi sắp tới

**As a** người dùng cần sắp xếp các việc như cầu tài, gặp gỡ, ký kết, khai trương

**I want to** xem những ngày sắp tới hợp tuổi tôi và các việc nên làm trong từng ngày

**So that** tôi lên lịch đúng ngày hợp tuổi mà không phải tự tra cứu

### Metadata

- **Epic/Feature**: Bản tin định kỳ - Bản tin tháng (Phase 1)
- **Priority**: Should Have
- **Estimate**: 2 Story Points
- **Dependencies**: Dữ liệu việc hợp tuổi theo ngày và hồ sơ. Màn danh sách việc hợp tuổi cả tháng.

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                               |
| --------------------- | ------- | ------------------------------------------------------ |
| **I**ndependent | ✅      | Chỉ cần dữ liệu việc hợp tuổi.                  |
| **N**egotiable  | ✅      | Số ngày hiển thị có thể điều chỉnh.           |
| **V**aluable    | ✅      | Gợi ý hành động cụ thể theo ngày.              |
| **E**stimable   | ✅      | Bố cục đơn giản.                                  |
| **S**mall       | ✅      | 1 khối.                                               |
| **T**estable    | ✅      | Kiểm chứng theo ngày hiện tại và dữ liệu mẫu. |

### Tiêu chí nghiệm thu

- [ ] Khối tiêu đề "Việc hợp tuổi sắp tới" và đường thời gian dọc gồm tối đa 3 ngày hợp tuổi gần nhất tính từ hôm nay, ngày đã qua không hiển thị. Mỗi dòng gồm ngày Âm lịch (VD `"05/7 âm"`) và các việc nên làm (VD `"Cầu tài · Gặp gỡ · Xuất hành"`).
- [ ] Bấm "Xem việc hợp tuổi cả tháng" → mở màn danh sách việc hợp tuổi cả tháng của hồ sơ đang xem và mặc định chọn ngày hợp tuổi gần nhất (`lichviet://?screen=viec_hop_tuoi&date=yyyy-mm-dd`, `date` là ngày hợp tuổi gần nhất).
- [ ] TH trong tháng không có ngày nào hợp tuổi sắp tới thì ẩn cả khối đi

---

## US-BTT-09: Chuẩn bị cho ngày Mùng 1 và nhận lời nhắn đầu tháng

**As a** người phụ trách việc cúng lễ trong gia đình

**I want to** có sẵn lối vào văn khấn, lễ vật Mùng 1 và biết khung giờ phù hợp thắp hương

**So that** tôi chuẩn bị nghi lễ đầu tháng chu đáo, đúng giờ mà không phải tìm nhiều nơi

### Metadata

- **Epic/Feature**: Bản tin định kỳ - Bản tin tháng (Phase 1)
- **Priority**: Must Have
- **Estimate**: 2 Story Points
- **Dependencies**: Màn chi tiết sự kiện Mùng 1. Dữ liệu giờ hoàng đạo ngày Mùng 1.

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                                       |
| --------------------- | ------- | -------------------------------------------------------------- |
| **I**ndependent | ✅      | Dùng lại màn chi tiết sự kiện sẵn có.                  |
| **N**egotiable  | ✅      | Ảnh minh họa và lời nhắn có thể thay đổi theo tháng. |
| **V**aluable    | ✅      | Đáp ứng JTBD 3 - nghi lễ đầu tháng.                     |
| **E**stimable   | ✅      | Bố cục đơn giản.                                          |
| **S**mall       | ✅      | 1 khối và lời nhắn cuối trang.                            |
| **T**estable    | ✅      | Kiểm chứng theo giờ hoàng đạo ngày Mùng 1.             |

### Tiêu chí nghiệm thu

- [ ] Khối "Chuẩn bị cho ngày Mùng 1" gồm 2 phần. Phần trên có ảnh minh hoạ, tiêu đề "Văn khấn & lễ vật Mùng 1" và mô tả "Hướng dẫn chuẩn bị chu đáo cho ngày đầu tháng", bấm vào → mở màn chi tiết văn khấn mùng một (`lichviet://?screen=tu_vi:van_khan&cate_id=272&item_id=3612`).
- [ ] Phần dưới có icon, tiêu đề "Thời điểm phù hợp thắp hương" và hiển thị các khung giờ tốt trong ngày Mùng 1 (VD `"07:00 – 09:00 (Giờ Thìn)"`, `"11:00 – 13:00 (Giờ Ngọ)"`).
- [ ] Cuối bản tin hiển thị ảnh thông điệp và câu lời nhắn đầu tháng (VD `"Tháng mới mở ra những cơ hội mới. Chúc bạn luôn tâm an trí sáng, vạn sự hanh thông và chủ động đón nhận những điều tốt đẹp nhất."`).

---

## Yêu cầu thống kê

Áp dụng cho toàn màn Bản tin đầu tháng. Mọi sự kiện đều kèm `screen_name` = `BanTinThang`, deeplink vào bản tin tháng: `lichviet://?screen=bantin:bantinthang&thang=7 (7 là tháng âm, ko có tham số thang thì mặc định tháng âm hiện tại)`

### Chỉ số báo cáo

| Chỉ số                                    | Công thức                                                                                                                                                                                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Số lượt / số người mở bản tin (K01) | Tổng lượt mở màn bản tin / số người dùng (UU) mở màn bản tin                                                                                                                                                                   |
| Số lượt / số người nhấn chia sẻ     | Tổng lượt nhấn nút chia sẻ / số người dùng (UU) nhấn nút chia sẻ                                                                                                                                                               |
| Số lượt / số người nhấn từng khối  | Tổng lượt nhấn / số người dùng (UU) nhấn, tách theo từng khối: thanh hồ sơ, thời điểm vàng, vận trình tháng, tử vi hôm nay, gieo quẻ, thời điểm đáng chú ý, tiết khí, việc hợp tuổi, chuẩn bị Mùng 1 |
| CTR từng khối                             | Count(`btt_block_clicked`) / Count(`btt_block_viewed`) theo `block`. Khối thời điểm vàng (K04) tách thêm theo `khnl_case` và `khnl_type`, khối vận trình (K05), khối gieo quẻ (K06)                                  |
| Tỷ lệ chia sẻ (K08)                      | Count(`btt_shared`) / Count(`btt_opened`)                                                                                                                                                                                               |

---

## Luồng thao tác

1. Người dùng mở bản tin từ banner Trang chủ, thông báo đẩy hoặc mục lưu trữ bản tin, qua deeplink `lichviet://?screen=bantin:bantinthang`.
2. Hệ thống tải bản tin tháng Âm lịch hiện tại theo hồ sơ của người dùng.
3. Người dùng có thể bấm thanh hồ sơ để cập nhật ngày, giờ sinh.
4. Người dùng cuộn đọc từng khối, bấm CTA để xem chi tiết, gieo quẻ hoặc chia sẻ bản tin.
