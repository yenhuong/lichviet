---
id: Story-TrangChuKhoiTieuDiem
type: story
status: draft
project: Lich_Viet
owner: "@product-team"
tags: [trang-chu, khoi-tieu-diem, ban-tin, ban-tin-thang, diem-nhan]
linked-to: "[[Stories-MOC]]", "[[BPRD-003-BanTinTuanThang]]", "[[Story-BanTinThang]]", "[[Story-TuViFAQSlider]]"
created: 2026-10-23
---
# User stories cho Khối Tiêu điểm trên Trang chủ

Tài liệu này định nghĩa các user story cho Khối Tiêu điểm trên Trang chủ, dựa trên prototype `prototype/TrangChu_V2.html`.

Khối Tiêu điểm nằm ngay dưới khu vực thông tin ngày, gồm các card cuộn ngang. Hiện có 2 card: card Bản tin tháng (bấm mở màn Bản tin đầu tháng, [[Story-BanTinThang]]) và card Hỏi đáp tử vi ([[Story-TuViFAQSlider]]).

---

## US-KTD-01: Xem card Bản tin tháng trên Trang chủ

**As a** người dùng Lịch Việt đã có ngày sinh, vào app thường xuyên

**I want to** thấy card Bản tin tháng ở vị trí dễ thấy, nhất là dịp đầu tháng và những ngày có sự kiện đặc biệt

**So that** tôi không bỏ lỡ bản tin tháng mới, còn Lịch Việt có điểm chạm định kỳ dẫn người dùng vào bản tin (KPI K01)

### Metadata

- **Epic/Feature**: Bản tin định kỳ - Bản tin tháng (Phase 1)
- **Priority**: Must Have
- **Estimate**: 2 Story Points
- **Dependencies**: [[Story-BanTinThang]], [[Story-TuViFAQSlider]], lịch phát hành bản tin theo BR-01 của [[BPRD-003-BanTinTuanThang]].

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                                               |
| --------------------- | ------- | ---------------------------------------------------------------------- |
| **I**ndependent | ✅      | Logic chọn điểm nhấn tách sang US-KTD-02.                         |
| **N**egotiable  | ✅      | Mốc ngày đổi vị trí và giao diện card có thể điều chỉnh.  |
| **V**aluable    | ✅      | Lối vào chính của bản tin tháng từ Trang chủ.                  |
| **E**stimable   | ✅      | Prototype rõ, quy tắc vị trí đơn giản.                          |
| **S**mall       | ✅      | 1 card và quy tắc sắp xếp 2 card.                                  |
| **T**estable    | ✅      | Kiểm chứng theo ngày Âm lịch và ngày có sự kiện đặc biệt. |

### Tiêu chí nghiệm thu

#### AC1 - Điều kiện hiển thị

- [ ] Card hiển thị khi hồ sơ có ít nhất ngày sinh, không phân biệt người dùng đã đăng nhập hay chưa. Chưa có ngày sinh → ẩn card.
- [ ] Từ 00:00 ngày cuối cùng của tháng cũ Âm lịch (trước Mùng 1 một ngày), card chuyển sang bản tin của tháng mới.

#### AC2 - Nội dung card (Happy path)

- [ ] Card nền vàng kem gồm hàng tiêu đề (icon, tiêu đề "Bản tin tháng [n] âm lịch", VD `"Bản tin tháng 9 âm lịch"`, tháng nhuận thêm chữ "nhuận"), nhãn "Mới" ở góc phải, câu mô tả và nút "Xem có gì đặc biệt" ở góc dưới phải. Câu mô tả lấy theo điểm nhấn trong ngày (US-KTD-02).
- [ ] Nhãn "Mới" hiển thị khi người dùng chưa nhấn vào card Bản tin tháng của tháng đó.
- [ ] Câu mô tả hiển thị tối đa 2 dòng, dài hơn thì cắt bằng dấu "...".

#### AC3 - Thứ tự card trong Khối Tiêu điểm

| Thời gian (Âm lịch)                      | Vị trí 1        | Vị trí 2        |
| ------------------------------------------- | ----------------- | ----------------- |
| Ngày cuối tháng cũ - hết ngày 15      | Bản tin tháng   | Hỏi đáp tử vi |
| Ngày 16 - hết ngày áp chót của tháng | Hỏi đáp tử vi | Bản tin tháng   |

- [ ] Thứ tự 2 card theo bảng trên. Hôm nay có sự kiện đặc biệt (ĐB1 - ĐB3 ở US-KTD-02) → card Bản tin tháng ở vị trí 1.

#### AC4 - Điều hướng

- [ ] Bấm vào card (kể cả nút CTA) → mở màn Bản tin tháng (`lichviet://?screen=bantin:bantinthang`).

---

## US-KTD-02: Nhận điểm nhấn bản tin tháng phù hợp mỗi ngày

**As a** người dùng mở Trang chủ nhiều lần trong tháng

**I want to** mỗi ngày thấy một điểm nhấn khác nhau, đúng với điều đang diễn ra hôm nay hoặc sắp tới với tôi

**So that** tôi có lý do mở bản tin nhiều lần trong tháng thay vì chỉ một lần đầu tháng

### Metadata

- **Epic/Feature**: Bản tin định kỳ - Bản tin tháng (Phase 1)
- **Priority**: Must Have
- **Estimate**: 5 Story Points
- **Dependencies**: Dữ liệu các khối của bản tin tháng ([[Story-BanTinThang]]): ngày kích hoạt, vận trình tháng, ngày tốt, tiết khí, việc hợp tuổi.

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                                                               |
| --------------------- | ------- | -------------------------------------------------------------------------------------- |
| **I**ndependent | ✅      | Dùng lại dữ liệu sẵn có của bản tin tháng.                                    |
| **N**egotiable  | ✅      | Danh sách điểm nhấn, thứ tự ưu tiên và câu chữ có thể điều chỉnh.      |
| **V**aluable    | ✅      | Tăng lượt mở bản tin và dẫn tới Kích hoạt năng lượng (KPI K04).           |
| **E**stimable   | ✅      | Quy tắc chọn rõ, danh sách điểm nhấn cố định.                                |
| **S**mall       | ⚠️    | 11 điểm nhấn. Có thể làm trước nhóm ĐB và mục 1 - 3, 8 nếu vượt sprint. |
| **T**estable    | ✅      | Kiểm chứng theo ngày Âm lịch, dữ liệu hồ sơ và lịch sử hiển thị.         |

### Tiêu chí nghiệm thu

#### AC1 - Quy tắc chọn điểm nhấn trong ngày

- [ ] Mỗi ngày card hiển thị 1 điểm nhấn, giữ nguyên khi người dùng quay lại Trang chủ trong cùng ngày. Sang ngày mới (00:00 theo giờ thiết bị) → chọn lại.
- [ ] Thứ tự chọn: (1) sự kiện đặc biệt diễn ra đúng hôm nay theo thứ tự ĐB1 → ĐB3, kể cả khi đã hiển thị trước đó; (2) điểm nhấn đủ điều kiện chưa từng hiển thị trong tháng, theo thứ tự ưu tiên; (3) tất cả điểm nhấn đủ điều kiện đều đã hiển thị → chọn điểm nhấn lâu chưa hiển thị nhất, bằng nhau thì theo thứ tự ưu tiên.
- [ ] Điểm nhấn có khối tương ứng trong bản tin bị ẩn theo hồ sơ (VD hồ sơ thiếu giờ sinh thì ẩn khối vận trình tháng) → không tham gia xét.
- [ ] Lịch sử hiển thị lưu trên thiết bị, làm mới khi card chuyển sang bản tin tháng mới.

#### AC2 - Ghi nhận điểm nhấn đã hiển thị

- [ ] Điểm nhấn được ghi nhận đã hiển thị khi card hiển thị 100% trong vùng nhìn thấy của màn hình, hoặc khi người dùng bấm vào card (kể cả khi card chỉ hiển thị một phần).

#### AC3 - Danh sách điểm nhấn, điều kiện và nội dung

Phần in đậm trong câu mô tả là giá trị thay đổi theo dữ liệu, hiển thị màu cam đất.

| Ưu tiên | Điểm nhấn                    | Điều kiện tham gia xét                             | Câu mô tả                                                                                                                                                       |
| --------- | ------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ĐB1      | Ngày chuyển tiết khí        | Hôm nay là ngày bắt đầu tiết khí               | Vào lúc [hh:mm] hôm nay, chuyển sang tiết khí mới **[Tiết khí]**! (VD `"Vào lúc 16:38 hôm nay, chuyển sang tiết khí mới Sương Giáng!"`) |
| ĐB2      | Ngày kích hoạt năng lượng | Hôm nay là ngày kích hoạt                         | Hôm nay là ngày đẹp kích hoạt **[Loại kích hoạt]** của bạn!                                                                                      |
| ĐB3      | Ngày tốt nhất tháng         | Hôm nay là ngày tốt nhất tháng                   | Hôm nay là **ngày tốt nhất tháng**! Khám phá những điều nổi bật trong tháng.                                                                   |
| 1         | Ngày kích hoạt sắp tới     | Còn 1 - 7 ngày đến ngày kích hoạt               | Đừng bỏ lỡ ngày đẹp kích hoạt **[Loại kích hoạt]** của bạn!                                                                                    |
| 2         | Vận hạn tháng                | Mọi ngày                                             | Vận hạn tháng này của bạn thuận lợi hay cần lưu ý?                                                                                                      |
| 3         | Gieo quẻ đầu tháng          | Mùng 1 - 3 Âm lịch                                  | Tháng mới, gieo quẻ cầu may, mong cả tháng thuận lợi!                                                                                                      |
| 4         | Tháng có nhiều ngày tốt    | Tổng ≥ 10 ngày tốt, còn ≥ 3 ngày tốt chưa qua | Tháng này có tới **[x] ngày tốt**! Chọn ngày phù hợp cho kế hoạch của bạn!                                                                    |
| 5         | Việc hợp tuổi                | Có ngày hợp tuổi trong 0 - 7 ngày tới            | **[Hôm nay / Thứ X, dd/mm]** hợp để **[việc]** với tuổi của bạn.                                                                             |
| 6         | Tiết khí sắp tới            | Còn 1 - 7 ngày đến ngày bắt đầu tiết khí     | Còn **[n] ngày** nữa chuyển sang tiết khí **[Tiết khí]!**                                                                                     |
| 7         | Gieo quẻ hằng ngày           | Từ Mùng 4 đến hết tháng                          | Tài lộc, công việc, tình duyên của bạn thế nào? Gieo quẻ ngay!                                                                                         |
| 8         | Tổng quan tháng               | Mọi ngày                                             | Tháng này có gì nổi bật đang chờ bạn khám phá?                                                                                                          |

- [ ] **Loại kích hoạt** (ĐB2, mục 1) là loại kích hoạt của ngày đang hiển thị ở khối thời điểm vàng trong bản tin tháng (US-BTT-02), VD bản tin hiển thị ngày kích hoạt Quý Nhân thì Trang chủ hiển thị "Quý Nhân". Khối thời điểm vàng chỉ có loại kích hoạt nhóm 2 (TH3) → câu mô tả ĐB2 là "Hôm nay là ngày phù hợp để **cân bằng năng lượng** cho bạn!", mục 1 là "Đừng bỏ lỡ ngày phù hợp để **cân bằng năng lượng** cho bạn!".
- [ ] **Việc hợp tuổi** lấy theo ngày hợp tuổi gần nhất, ngày đó là hôm nay thì hiển thị "Hôm nay".

#### AC4 - Lỗi hoặc không có dữ liệu (Negative path)

- [ ] Gọi dữ liệu bản tin tháng lỗi hoặc không có điểm nhấn nào đủ điều kiện → ẩn card Bản tin tháng.

---

## Yêu cầu thống kê

Mọi sự kiện kèm `screen_name` = `TrangChu`, `block` = `home_spotlight`, `card` = `ban_tin_thang` và `highlight_id` là mã điểm nhấn đang hiển thị (VD `DB2`, `1`, `12`).

| Chỉ số                           | Công thức                                                                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Số lượt / số người xem card  | Tổng lượt card được ghi nhận hiển thị / số người dùng (UU) xem card                                              |
| Số lượt / số người bấm card | Tổng lượt bấm card / số người dùng (UU) bấm card                                                                     |
| CTR card                           | Count(`home_btt_card_clicked`) / Count(`home_btt_card_viewed`), tách theo `highlight_id` và vị trí card (1 hoặc 2) |

---

## Luồng thao tác

1. Người dùng mở Trang chủ. Hệ thống xác định thứ tự các card trong Khối Tiêu điểm theo ngày Âm lịch và sự kiện đặc biệt hôm nay.
2. Hệ thống chọn điểm nhấn trong ngày theo lịch sử hiển thị trên thiết bị và hiển thị lên card Bản tin tháng.
3. Người dùng bấm card → mở màn Bản tin tháng.
