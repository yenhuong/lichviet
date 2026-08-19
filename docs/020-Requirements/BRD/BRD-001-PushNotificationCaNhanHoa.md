---
id: BRD-001
type: brd
status: draft
project: Lich_Viet
owner: "@product_manager"
tags: [push-notification, personalization, fcm-topic, engagement]
created: 2026-06-18
updated: 2026-08-12
---
# BRD - HỆ THỐNG PUSH THÔNG BÁO CÁ NHÂN HÓA HÀNG NGÀY

Tài liệu yêu cầu nghiệp vụ (Business Requirement Document) mô tả tổng quan về chiến lược tăng trưởng thông qua hệ thống push thông báo cá nhân hóa hàng ngày cho người dùng ứng dụng Lịch Việt, đồng thời chi tiết hóa các kịch bản nội dung được phát triển qua từng giai đoạn.

---

## Lịch sử thay đổi

| Ngày      | Phiên bản | Nội dung thay đổi                                                                                                                                                                                                                                                                                                                                                                                                             |
| :--------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-08-10 | v2 (draft)  | Nâng cấp Nội dung 1 (Mùng 1/Rằm): bổ sung khung nội dung push v2 (mục 3.1.3); đích đến push Mùng 1 chuyển sang**Bản tin đầu tháng** theo mô hình "Bản tin theo dịp", tái sử dụng framework Bản tin (mục 3.1.4); cập nhật Click Action (mục 3.1.2).                                                                                                                                           |
| 2026-08-11 | v2 (draft)  | Bản tin đầu tháng - khối A: đổi "Đánh giá tổng thể tháng" thành "Vận trình tháng này" (nhãn Tốt / Ổn định / Cần lưu ý kèm nhận định ngắn). Nhãn chỉ hiển thị khi có đủ ngày sinh + giờ sinh (lấy từ vận hạn tháng); chỉ có ngày sinh → hiện ND khác (điểm tháng trung bình chỉ số ngày tốt); chưa có ngày sinh → hiện ND khác (khối khóa + CTA) (mục 3.1.4). |
| 2026-08-12 | v2 (draft)  | Bản tin đầu tháng - khối A: đổi "Thời điểm thuận lợi trong tháng" thành "Thời điểm đáng chú ý trong tháng"; bổ sung khối "Tử vi hôm nay"; chuyển vị trí khối "Gieo quẻ đầu tháng" xuống ngay dưới khối "Tử vi hôm nay" (mục 3.1.4).                                                                                                                                                     |

---

## 1. Thông tin chung

- **Tên dự án:** Hệ thống push thông báo cá nhân hóa hàng ngày (Daily Personalized Push Notification System).
- **Mục tiêu chiến lược:** Nâng cao tần suất tương tác, tỷ lệ người dùng hoạt động hàng ngày (DAU) và giữ chân người dùng (retention rate) bằng cách phân phối các nội dung thông báo được thiết kế riêng biệt cho từng cá nhân dựa trên các chỉ số tử vi, tuổi can chi và hành vi của họ.
- **Người chịu trách nhiệm (Owner):** Product Manager.
- **Nhóm tham gia (Stakeholders):** Backend Dev, Mobile Dev, QA/Tester.
- **Mức độ ưu tiên:** High.

---

## 2. Tổng quan nghiệp vụ

### 2.1. Bối cảnh và mục tiêu tăng trưởng

Hiện tại, ứng dụng Lịch Việt đã có 3 kịch bản gửi thông báo tự động dựa trên tuổi của người dùng. Tuy nhiên, tần suất nhận các thông báo này của người dùng vẫn còn rất thấp (ít xuất hiện), chưa tạo ra sự gắn kết thường xuyên. Do đó, dự án cần đẩy mạnh hệ thống push thông báo cá nhân hóa hàng ngày/hàng tuần/hàng tháng nhằm gia tăng tần suất xuất hiện, thúc đẩy người dùng tương tác sâu hơn và tạo điểm chạm liên tục.

Chiến lược cá nhân hóa push thông báo nhằm mục đích:

- Tận dụng tối đa dữ liệu cá nhân (ngày sinh, giới tính, tuổi can chi) để tính toán các thông tin tử vi, ngày tốt hữu ích
- Thiết lập cơ chế gửi tin thông minh, tránh spam và đảm bảo người dùng nhận được thông báo vào đúng thời điểm có giá trị nhất trong ngày/tuần/tháng.
- Duy trì sự hiện diện đều đặn trên màn hình thiết bị để người dùng nhận thấy ứng dụng vẫn đang hoạt động tích cực và liên tục cập nhật thông tin.

### 2.2. Chỉ số hiệu quả chính (KPIs)

- **Tỷ lệ nhấp (CTR):** Tăng tỷ lệ nhấp vào thông báo lên tối thiểu 18% đối với các tin nhắn cá nhân hóa.
- **Tỷ lệ giữ chân người dùng (Retention Rate):** Tăng tỷ lệ giữ chân người dùng ở ngày thứ 7 (D7 Retention) thêm 8% và tuần thứ 2 (W2 Retention) thêm 5%.
- **Lượt truy cập tự nhiên:** Tăng chỉ số DAU thông qua các điểm chạm nội dung hấp dẫn được cá nhân hóa sâu.

---

## 3. Danh sách các nội dung push thông báo

Bảng tổng hợp nhanh các nội dung push thông báo cá nhân hóa và trạng thái triển khai:

| ID                    | Nội dung push thông báo                                                    | Tần suất & Giờ gửi tin                                                                      | Trạng thái                                   |
| :-------------------- | :---------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- | :--------------------------------------------- |
| **Nội dung 1** | Thông báo ngày Mùng 1, ngày Rằm âm lịch và các ngày lễ hệ thống | 06:30 ngày hôm trước và 06:30 đúng ngày (Mùng 1, Rằm hoặc ngày lễ hệ thống)      | **Đã golive · Đang nâng cấp (v2)** |
| **Nội dung 2** | Ngày tốt nhất trong tuần và trong tháng theo tuổi                      | Thứ Hai hàng tuần, Mùng 1 âm lịch và các ngày cát lành (gửi lúc 08:00 hoặc 15:00) | **Đã golive**                          |
| **Nội dung 3** | Ngày tốt cắt tóc theo tuổi (60 hoa giáp)                                | 07:00 đúng ngày tốt cắt tóc trong tháng                                                  | **Đã golive**                          |
| **Nội dung 4** | Ngày không nên làm các việc đại sự                                   | 20:00 ngày hôm trước khi có ngày không nên làm gì                                     | **Đã golive**                          |
| **Nội dung 5** | Ngày chuyển tiết khí (24 tiết khí)                                      | 08:00 đúng ngày chuyển tiết khí                                                           | **Dự kiến**                            |
| **Nội dung 6** | Gợi ý việc thường nhật nên làm theo tuổi theo ngày                  | 20:30 tối ngày hôm trước                                                                   | **Dự kiến**                            |
| **Nội dung 7** | Vận hạn tháng âm lịch theo lá số tử vi cá nhân                      | 20:00 tối ngày Mùng 1 âm lịch                                                              | **Dự kiến**                            |
| **Nội dung 8** | Push thông báo vào ngày cách cục                                        | 08:00 đúng ngày cách cục                                                                   | **Dự kiến**                            |
| **Nội dung 9** | Push thông báo nội dung cuối tuần (Thứ Bảy & Chủ Nhật)               | 09:00 sáng Thứ Bảy và 20:00 tối Chủ Nhật hàng tuần                                     | **Dự kiến**                            |

---

### 3.1. Nội dung 1 - Thông báo ngày Mùng 1, ngày Rằm âm lịch và các ngày lễ hệ thống (Đã golive)

- **Mục đích:** Nhắc nhở người dùng ngày Mùng 1 âm lịch đầu tháng, ngày Rằm (15 âm lịch) và các ngày lễ tết quan trọng trong năm (Tết Nguyên Đán, Tết Dương Lịch, Tết Đoan Ngọ, Lễ Vu Lan, Giỗ tổ Hùng Vương, Tết Trung Thu...) để chủ động sắp xếp các công việc tâm linh truyền thống (dọn dẹp ban thờ, thắp hương, chuẩn bị đồ lễ) hoặc tận hưởng không khí nghỉ lễ và cầu bình an, gia đạo cát tường.
- **Đối tượng nhận tin:** Tất cả người dùng bật thông báo ứng dụng.

#### 3.1.1. Các kịch bản gửi push và nội dung hiển thị

| Đợt gửi                                | Điều kiện kích hoạt                                                                                                                                          | Thời gian gửi                                                                                       | Tiêu đề & Nội dung mẫu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :---------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Trước ngày Mùng 1**           | Trước 1 ngày so với ngày Mùng 1 âm lịch                                                                                                                   | 06:30 ngày hôm trước                                                                              | **1. Người dùng đã có ngày sinh:**`<br>`- **Tiêu đề:** 🌙 Mai là mùng 1 tháng [X] âm lịch `<br>`- **Nội dung:** Vận trình đầu tháng của bạn sẽ ra sao? Xem ngay chỉ số ngày tốt trong 7 ngày tới!`<br><br>`**2. Người dùng chưa có ngày sinh:**`<br>`- **Tiêu đề:** 🌙 Mai là mùng 1 tháng [X] âm lịch `<br>`- **Nội dung:** Vận trình đầu tháng của bạn sẽ ra sao? Thêm ngày sinh để xem chỉ số ngày tốt trong 7 ngày tới của riêng bạn!                              |
| **Đúng ngày Mùng 1**            | Đúng ngày Mùng 1 âm lịch hàng tháng                                                                                                                       | 06:30 đúng ngày                                                                                    | **1. Người dùng đã có ngày sinh:**`<br>`- **Tiêu đề:** ✨ Mùng 1 của bạn hôm nay!`<br>`- **Nội dung:** Chỉ số ngày tốt của bạn đạt [X]%. Xem giờ đẹp, việc nên làm và lưu ý quan trọng khi bước sang tháng mới.`<br><br>`**2. Người dùng chưa có ngày sinh:**`<br>`- **Tiêu đề:** ✨ Mùng 1 tháng mới đã đến!`<br>`- **Nội dung:** Hôm nay có phải ngày thuận lợi với bạn? Thêm ngày sinh để xem chỉ số ngày tốt, giờ đẹp và việc nên làm của riêng bạn! |
| **Trước ngày Rằm**              | Trước 1 ngày so với ngày Rằm (15 âm lịch)                                                                                                                 | 06:30 ngày hôm trước                                                                              | **1. Người dùng đã có ngày sinh:**`<br>`- **Tiêu đề:** 🌕 Mai là ngày Rằm tháng [X] âm lịch`<br>`- **Nội dung:** Nửa cuối tháng của bạn có thuận lợi? Xem ngay chỉ số ngày tốt 7 ngày tới và những việc nên làm!`<br><br>`**2. Người dùng chưa có ngày sinh:**`<br>`- **Tiêu đề:** 🌕 Mai là ngày Rằm tháng [X] âm lịch`<br>`- **Nội dung:** Nửa cuối tháng của bạn có thuận lợi? Thêm ngày sinh để xem chỉ số ngày tốt 7 ngày tới dành riêng cho bạn.          |
| **Đúng ngày Rằm**               | Đúng ngày Rằm (15 âm lịch) hàng tháng                                                                                                                     | 06:30 đúng ngày                                                                                    | **1. Người dùng đã có ngày sinh:**`<br>`- **Tiêu đề:** 🌕 Rằm tháng này của bạn`<br>`- **Nội dung:** Chỉ số ngày tốt của bạn đạt [X]%. Xem giờ đẹp, việc nên làm và gợi ý quan trọng để nửa cuối tháng thêm thuận lợi.`<br><br>`**2. Người dùng chưa có ngày sinh:**`<br>`- **Tiêu đề:** 🌕 Hôm nay là ngày Rằm tháng [X]`<br>`- **Nội dung:** Hôm nay nên làm gì, chọn giờ nào để mọi việc thuận hơn? Thêm ngày sinh để nhận gợi ý dành riêng cho bạn!  |
| **Sự kiện ngày lễ quan trọng** | Đến các ngày lễ tết quan trọng trong năm (Tết Nguyên Đán, Tết Dương Lịch, Giỗ tổ Hùng Vương, Tết Đoan Ngọ, Lễ Vu Lan, Tết Trung Thu...) | **06:30** đúng ngày<br />1 số sự kiện có thêm nhắc **06:30** ngày hôm trước | -**Tiêu đề:** Lịch Việt `<br>`- **Nội dung:** Hôm nay là [Tên Ngày Lễ]`<br>`- **Ví dụ:** Hôm nay là Lễ Đoan Ngọ                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### 3.1.2. Hành vi tương tác (Click Action)

Khi người dùng nhấn vào thông báo:

- Đối với push Mùng 1 (trước & đúng ngày): điều hướng tới **Bản tin đầu tháng** (mục 3.1.4) — bản tin theo dịp, tái sử dụng framework Bản tin có sẵn.
- Đối với push Rằm (trước & đúng ngày): điều hướng tới **Bản tin ngày Rằm** (theo cùng mô hình "Bản tin theo dịp"; nội dung sẽ đặc tả sau).
- Đối với push sự kiện ngày lễ hệ thống: Giữ nguyên điều hướng tới màn hình Chi tiết ngày như hiện tại.

> **Lưu ý (v2):** Từ bản nâng cấp, đích đến của push Mùng 1/Rằm được chuyển từ màn Chi tiết ngày (generic) sang **Bản tin theo dịp** (Bản tin đầu tháng / Bản tin ngày Rằm — mục 3.1.4). Tiện ích văn khấn & lễ vật được đặt thành một card trong bản tin, link sang màn Chi tiết sự kiện.

---

#### 3.1.3. Nâng cấp nội dung push (v2) — Khung nội dung

> **Trạng thái:** Đang thiết kế (draft). Mục 3.1.1 ở trên giữ vai trò **baseline v1 (đang chạy)**; mục này đặc tả **phiên bản v2** với nội dung hấp dẫn và cá nhân hóa hơn. Cột "Tiêu đề & Nội dung mẫu (v2)" sẽ được điền ở bước sau — hiện chỉ dựng khung.

- **Mục tiêu nâng cấp:** Tăng tính cá nhân hóa, làm nội dung hấp dẫn hơn, thay đổi tiêu đề/nội dung để tăng tỷ lệ click vào thông báo xem (gắn với KPI CTR ≥ 18% tại mục 2.2).
- **Dữ liệu cá nhân hóa sử dụng:** Con giáp/Can Chi, chỉ số ngày, việc hợp tuổi, tử vi (vận hạn tháng, tử vi hàng ngày...), tiết khí, con số may mắn...

| Đợt gửi                                | Điều kiện kích hoạt                          | Thời gian gửi          | Tiêu đề & Nội dung mẫu (v2) |
| :---------------------------------------- | :------------------------------------------------ | :----------------------- | :------------------------------- |
| **Trước ngày Mùng 1**           | Trước 1 ngày so với ngày Mùng 1 âm lịch   | 06:30 ngày hôm trước | _(chờ điền nội dung v2)_   |
| **Đúng ngày Mùng 1**            | Đúng ngày Mùng 1 âm lịch hàng tháng       | 06:30 đúng ngày       | _(chờ điền nội dung v2)_   |
| **Trước ngày Rằm**              | Trước 1 ngày so với ngày Rằm (15 âm lịch) | 06:30 ngày hôm trước | _(chờ điền nội dung v2)_   |
| **Đúng ngày Rằm**               | Đúng ngày Rằm (15 âm lịch) hàng tháng     | 06:30 đúng ngày       | _(chờ điền nội dung v2)_   |
| **Sự kiện ngày lễ quan trọng** | Đến các ngày lễ tết quan trọng trong năm  | 06:30 đúng ngày       | _(chờ điền nội dung v2)_   |

#### 3.1.4. Bản tin đầu tháng (đích đến của push Mùng 1)

- **Điểm vào (entry point):** (1) Từ push Mùng 1 (mục 3.1.2); (2) Từ khối Bản tin trong app
- **Bản tin đầu tháng** là *bản biên tập theo chủ đề tháng mới* (tổng quan tháng, tử vi vận hạn tháng, tâm linh Mùng 1...)
- **Nhánh chưa có ngày sinh:** Vẫn mở đúng Bản tin đầu tháng; các khối cá nhân hóa hiển thị dạng "khóa" kèm CTA "Thêm ngày sinh" để mở khóa.

**Mô hình "Bản tin theo dịp" (định hướng chung):** Bản tin đầu tháng là biến thể đầu tiên. Cùng framework + cùng catalog khối nội dung, mỗi dịp chọn/sắp xếp khối riêng — mở rộng sau này cho **Bản tin ngày Rằm, Bản tin cuối tuần, Bản tin đầu năm...** mà không phải xây màn mới.

Catalog khối nội dung cho **Bản tin đầu tháng** (thứ tự từ trên xuống):

| Khối                                                 | Thành phần nội dung                                                                                                                                                                                                                                                                                                                                            | Cá nhân hóa | Nguồn dữ liệu                  | Ghi chú                                                                                                                                                                             |
| :---------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- | :-------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **A. Tổng quan tháng mới**                   | - Tháng [X] âm lịch, Ngày bắt đầu – kết thúc tháng âm<br />- Can Chi tháng<br />- Khoảng thời gian dương lịch<br />- Tiết khí trong tháng                                                                                                                                                                                                    | Không         | core lịch                        |                                                                                                                                                                                      |
| **B. Vận trình tháng này**                  | - Đánh giá chung: Tốt / Ổn định / Cần lưu ý<br />- **1 đoạn nhận định ngắn:** điểm thuận lợi + lĩnh vực nên ưu tiên + điều cần cẩn trọng<br />- Các chỉ số đánh giá: Công việc, Tài chính, Tình cảm, Gia đạo<br />- Nút CTA [Xem chi tiết vận hạn tháng] thì chuyển sang màn chi tiết vận hạn tháng | Có            | Vận hạn tháng (lá số tử vi) | **- khi hồ sơ có đủ ngày sinh + giờ sinh** (lấy từ vận hạn tháng).<br />- TH thiếu giờ sinh hoặc không có ngày sinh: khoá + nút cta nhập thêm thông tin |
| **C. Tử vi hôm nay**                          | - Câu tóm tắt tử vi hôm nay<br />- Màu hợp tuổi<br />- Số may mắn                                                                                                                                                                                                                                                                                       | Có            | Tử vi ngày                      | Cần ngày sinh, giờ sinh                                                                                                                                                           |
| **D. Gieo quẻ đầu tháng**                   | Card / Banner Gieo quẻ đầu tháng<br />- Nút CTA [Gieo quẻ] để rút quẻ may mắn và nhận thông điệp/lời chúc đầu tháng                                                                                                                                                                                                                          | Không         | Gieo quẻ                         | Khuyến khích tương tác gieo quẻ lấy may đầu tháng mới                                                                                                                     |
| **E. Thời điểm đáng chú ý trong tháng** | - Các ngày tốt trong tháng<br />- Ngày tốt nhất trong tháng<br />- Ngày kiêng việc trọng đại<br />- Biểu đồ chỉ số ngày tốt trong tháng                                                                                                                                                                                                     | Có            | Ngày tốt                        | Tập trung: "Trong tháng này, khi nào tôi nên hành động".<br />Chỉ cần ngày sinh.                                                                                         |
| **F. Việc hợp tuổi sắp tới**               | - Liệt kê 3 ngày tính từ ngày hiện tại gần nhất mà có việc hợp tuổi<br />- Nút cta để xem thêm việc hợp tuổi trong tháng                                                                                                                                                                                                                   | Có            | Ngày tốt                        | Chỉ cần ngày sinh                                                                                                                                                                 |
| **G. Tâm linh Mùng 1**                        | - Card Văn khấn & lễ vật Mùng 1, nhấn sang màn chi tiết văn khấn đó                                                                                                                                                                                                                                                                                   | Không         | Văn khấn                        |                                                                                                                                                                                      |
| **G. Tâm linh Mùng 1**                        | - Giờ/thời điểm phù hợp để thắp hương                                                                                                                                                                                                                                                                                                                  | Có            | Ngày tốt                        | Chỉ cần ngày sinh                                                                                                                                                                 |
| **H. Câu kết**                                | Hiện câu word đầu tháng mới cho từng tháng âm                                                                                                                                                                                                                                                                                                            | Có            | CMS                               |                                                                                                                                                                                      |

---

### 3.2. Nội dung 2 - Ngày tốt nhất trong tuần và trong tháng theo tuổi (Đã golive)

- **Mục đích:** Giúp người dùng nắm bắt ngày tốt lành nhất trong tuần và trong tháng âm lịch của riêng mình để chủ động sắp xếp các công việc quan trọng.
- **Đối tượng nhận tin:** Người dùng có ngày sinh khác mặc định (15/05/1950 và 01/01/2000), có bật thông báo ứng dụng.

#### 3.2.1. Các kịch bản gửi push và nội dung hiển thị

##### **A. Push thông báo ngày tốt nhất trong tuần**

Giúp người dùng biết ngày cát lành nhất trong tuần.

| Đợt gửi                            | Điều kiện kích hoạt                                                               | Thời gian gửi                                       | Tiêu đề & Nội dung mẫu                                                                                                                                                                                                                                    |
| :------------------------------------ | :------------------------------------------------------------------------------------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Đợt 1 (Báo trước)**      | Gửi định kỳ đầu tuần (trừ khi Thứ Hai trùng Mùng 1 âm lịch - xem phần C) | **08:00 Thứ Hai** hàng tuần                  | -**Tiêu đề:** Ngày tốt nhất trong tuần `<br>`- **Nội dung:** [Ngày/Tháng] là ngày tốt nhất trong tuần của bạn với chỉ số [X%]`<br>`- **Ví dụ:** 10/11 là ngày tốt nhất trong tuần của bạn với chỉ số 56% |
| **Đợt 2 (Đúng ngày tốt)** | Gửi đúng ngày cát lành của tuần                                                | **08:00 ngày tốt nhất trong tuần**          | -**Tiêu đề:** Ngày tốt nhất trong tuần `<br>`- **Nội dung:** Hôm nay là ngày tốt nhất trong tuần của bạn với chỉ số [X%]`<br>`- **Ví dụ:** Hôm nay là ngày tốt nhất trong tuần của bạn với chỉ số 56%    |
| **Trường hợp đặc biệt**   | Ngày tốt nhất trong tuần chính là thứ Hai                                       | **08:00 Thứ Hai** (Chỉ gửi 1 lần duy nhất) | -**Tiêu đề:** Ngày tốt nhất trong tuần `<br>`- **Nội dung:** Hôm nay là ngày tốt nhất trong tuần của bạn với chỉ số [X%]`<br>`- **Ví dụ:** Hôm nay là ngày tốt nhất trong tuần của bạn với chỉ số 56%    |

---

##### **B. Push thông báo ngày tốt nhất trong tháng**

Giúp người dùng biết ngày cát lành nhất trong tháng âm lịch.

| Đợt gửi                            | Điều kiện kích hoạt                                                                             | Thời gian gửi                                      | Tiêu đề & Nội dung mẫu                                                                                                                                                                                                                                       |
| :------------------------------------ | :--------------------------------------------------------------------------------------------------- | :--------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Đợt 1 (Báo trước)**      | Gửi định kỳ đầu tháng (trừ khi mùng 1 trùng Thứ Hai hoặc ngày tốt tuần - xem phần C) | **08:00 ngày Mùng 1 âm lịch** hàng tháng | -**Tiêu đề:** Ngày tốt nhất trong tháng `<br>`- **Nội dung:** [Ngày/Tháng] là ngày tốt nhất trong tháng của bạn với chỉ số [Y%]`<br>`- **Ví dụ:** 22/11 là ngày tốt nhất trong tháng của bạn với chỉ số 92% |
| **Đợt 2 (Đúng ngày tốt)** | Gửi đúng ngày cát lành của tháng (nếu khác ngày tốt tuần)                               | **08:00 ngày tốt nhất trong tháng**        | -**Tiêu đề:** Ngày tốt nhất trong tháng `<br>`- **Nội dung:** Hôm nay là ngày tốt nhất trong tháng của bạn với chỉ số [Y%]`<br>`- **Ví dụ:** Hôm nay là ngày tốt nhất trong tháng của bạn với chỉ số 92%    |

---

##### **C. Các kịch bản gộp và giao thoa lịch gửi tin (Tránh spam thông báo)**

| Kịch bản                                                        | Điều kiện kích hoạt                                                    | Thời gian gửi                                                                                                              | Tiêu đề & Nội dung mẫu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :---------------------------------------------------------------- | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Kịch bản gộp** `<br>`(Tuần tốt trùng tháng tốt) | Ngày tốt nhất trong tuần trùng ngày tốt nhất trong tháng           | -**Báo trước:** 08:00 Thứ Hai `<br>`- **Đúng ngày:** 08:00 ngày tốt                                   | **- Báo trước:**`<br>`Tiêu đề: Ngày tốt nhất trong tuần, trong tháng `<br>`Nội dung: [Ngày/Tháng] là ngày tốt nhất trong tuần và trong tháng của bạn với chỉ số [X%]`<br>`Ví dụ: 15/12 là ngày tốt nhất trong tuần và trong tháng của bạn với chỉ số 88%`<br><br>`**- Đúng ngày:**`<br>`Tiêu đề: Ngày tốt nhất trong tuần, trong tháng `<br>`Nội dung: Hôm nay là ngày tốt nhất trong tuần và trong tháng của bạn với chỉ số [X%] *(Chỉ gửi 1 lần này nếu trùng đúng ngày Mùng 1)*`<br>`Ví dụ: Hôm nay là ngày tốt nhất trong tuần và trong tháng của bạn với chỉ số 88% |
| **Kịch bản giao thoa** `<br>`(Trùng ngày mùng 1)     | Ngày Thứ Hai hoặc ngày tốt tuần trùng đúng ngày Mùng 1 âm lịch | Tách làm 2 lần trong ngày:`<br>`- **08:00:** Gửi tin tuần tốt `<br>`- **15:00:** Gửi tin tháng tốt | **- Lần 1 (Tuần tốt - 08:00):**`<br>`Tiêu đề: Ngày tốt nhất trong tuần `<br>`Nội dung: [Ngày/Tháng] là ngày tốt nhất trong tuần của bạn với chỉ số [X%] *(hoặc Hôm nay)*`<br>`Ví dụ: 10/11 là ngày tốt nhất trong tuần của bạn với chỉ số 56%`<br><br>`**- Lần 2 (Tháng tốt - 15:00):**`<br>`Tiêu đề: Ngày tốt nhất trong tháng `<br>`Nội dung: [Ngày/Tháng] là ngày tốt nhất trong tháng của bạn với chỉ số [Y%]`<br>`Ví dụ: 22/11 là ngày tốt nhất trong tháng của bạn với chỉ số 92%                                                                                                    |

#### 3.2.2. Hành vi tương tác (Click Action)

Khi người dùng nhấn vào thông báo, ứng dụng sẽ tự động chuyển hướng người dùng tới màn hình chi tiết ngày của ngày tương ứng.

---

### 3.3. Nội dung 3 - Ngày tốt cắt tóc theo tuổi (60 hoa giáp) (Đã golive)

- **Mục đích:** Giúp người dùng biết ngày tốt thích hợp để cắt tóc theo tuổi của riêng mình nhằm đón nhận may mắn, tài lộc và bình an.
- **Đối tượng nhận tin:** Người dùng có ngày sinh khác mặc định (15/05/1950 và 01/01/2000), có bật thông báo.

#### 3.3.1. Các kịch bản gửi push và nội dung hiển thị

| Đợt gửi                  | Điều kiện kích hoạt                                                                               | Thời gian gửi                   | Tiêu đề & Nội dung mẫu                                                                                                                                                                                                                                                                                                                                                                          |
| :-------------------------- | :----------------------------------------------------------------------------------------------------- | :-------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Đúng ngày tốt** | Đến ngày đẹp cát lành thích hợp để cắt tóc theo can chi (60 hoa giáp) của người dùng | **07:00** đúng ngày tốt | -**Tiêu đề:** ✂️ Hôm nay là ngày đẹp để cắt tóc!`<br>`-**Nội dung:** [Ngày/Tháng] là ngày đẹp dành cho tuổi [Can Chi] để cắt tóc, làm mới diện mạo và đón những điều may mắn. Xem ngay!`<br>`-**Ví dụ:** 16/4 là ngày đẹp dành cho tuổi Ất Tỵ để cắt tóc, làm mới diện mạo và đón những điều may mắn. Xem ngay! |

#### 3.3.2. Hành vi tương tác (Click Action)

Khi người dùng nhấn vào thông báo, ứng dụng sẽ tự động chuyển hướng người dùng tới màn hình chi tiết ngày của ngày tốt cắt tóc tương ứng.

---

### 3.4. Nội dung 4 - Ngày không nên làm các việc đại sự (Đã golive)

- **Mục đích:** Giúp người dùng chủ động tránh thực hiện các công việc đại sự quan trọng vào những ngày không nên làm gì để hạn chế rủi ro, vận hạn.
- **Đối tượng nhận tin:** Người dùng bật thông báo ứng dụng.

#### 3.4.1. Các kịch bản gửi push và nội dung hiển thị

| Đợt gửi                     | Điều kiện kích hoạt                                                    | Thời gian gửi                    | Tiêu đề & Nội dung mẫu                                                                                                                                                                                                                                                                                                                                                           |
| :----------------------------- | :-------------------------------------------------------------------------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Báo trước 1 ngày** | Ngày tiếp theo là ngày không nên làm gì, có nhiều sao xấu chiếu | **19:30 ngày hôm trước** | -**Tiêu đề:** Ngày mai không nên làm các việc đại sự `<br>`- **Nội dung:** Có các sao xấu [Danh sách sao xấu]... Bạn không nên thực hiện các việc như: [Tên việc]...`<br>`- **Ví dụ:** Có các sao xấu Nguyệt kiến, Nguyệt hình... Bạn không nên thực hiện các việc như: cưới hỏi, xuất hành, khai trương... |

#### 3.4.2. Hành vi tương tác (Click Action)

Khi người dùng nhấn vào thông báo, ứng dụng sẽ tự động chuyển hướng người dùng tới màn hình chi tiết ngày của ngày được cảnh báo.

---

### 3.5. Nội dung 5 - Ngày chuyển tiết khí (24 tiết khí) (Dự kiến)

- **Mục đích:** Thông báo cho người dùng biết thời điểm chuyển sang tiết khí mới trong năm để kịp thời nắm bắt thông tin thời tiết khí hậu đặc trưng, lời khuyên bảo vệ sức khỏe và các việc cát lành nên làm.
- **Đối tượng nhận tin:** Người dùng bật thông báo ứng dụng.

#### 3.5.1. Các kịch bản gửi push và logic kích hoạt

| Đợt gửi                           | Điều kiện kích hoạt                            | Thời gian gửi                            | Hành vi chuyển hướng (Click Action)                        |
| :----------------------------------- | :-------------------------------------------------- | :----------------------------------------- | :------------------------------------------------------------- |
| **Đúng ngày chuyển tiết** | Đến ngày chuyển giao tiết khí mới trong năm | **08:00** đúng ngày chuyển tiết | Chuyển hướng tới màn hình chi tiết của tiết khí đó |

#### 3.5.2. Danh sách Tiêu đề & Nội dung push chi tiết cho 24 Tiết Khí

Dưới đây là đặc tả tiêu đề và nội dung push thông báo được thiết kế riêng biệt cho từng tiết khí trong năm nhằm tối ưu hóa giá trị thông tin và kích thích người dùng nhấp chọn:

| STT | Tiết khí               | Đặc trưng khí hậu                 | Tiêu đề Push                      | Nội dung Push                                                                                                      |
| --: | ------------------------ | -------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
|   1 | **Lập Xuân**     | Bắt đầu mùa xuân, ấm áp         | 🌸 Lập Xuân khai vận              | Mùa xuân bắt đầu, vạn vật sinh sôi. Mở lịch xem việc nên làm để đón may mắn đầu năm.           |
|   2 | **Vũ Thủy**      | Mưa xuân ẩm ướt                   | 🌧️ Vũ Thủy cần lưu ý gì?     | Trời ẩm hơn, dễ nồm và mệt mỏi. Xem cách giữ sức khỏe, sinh hoạt thuận mùa.                          |
|   3 | **Kinh Trập**     | Sấm xuân thức tỉnh vạn vật       | ⚡ Kinh Trập đánh thức sinh khí | Vạn vật bừng tỉnh sau mùa lạnh. Khám phá điều nên làm để khởi động vận khí mới.                 |
|   4 | **Xuân Phân**    | Ngày đêm cân bằng                 | ☯️ Xuân Phân giữ cân bằng     | Ngày đêm ngang bằng, tiết trời hài hòa. Xem gợi ý cân bằng sức khỏe, tinh thần và công việc.      |
|   5 | **Thanh Minh**     | Khí trời trong sáng                 | 🌿 Thanh Minh nhớ nguồn            | Tiết trời trong sáng, lòng người hướng về tổ tiên. Xem điều nên lưu ý để gia đạo bình an.      |
|   6 | **Cốc Vũ**       | Mưa rào nuôi mùa màng             | 🌾 Cốc Vũ đón mưa lành         | Mưa nhiều hơn, cây cối tốt tươi. Mở lịch xem cách chăm sức khỏe khi thời tiết giao mùa.            |
|   7 | **Lập Hạ**       | Bắt đầu mùa hè, oi bức           | ☀️ Lập Hạ vào hè               | Trời bắt đầu oi nóng, cơ thể dễ mất sức. Xem mẹo giải nhiệt và chọn việc phù hợp hôm nay.        |
|   8 | **Tiểu Mãn**     | Hạt lúa ngậm sữa, khí nóng tăng | 🌾 Tiểu Mãn: đầy mà chưa đủ  | Mọi thứ đang dần viên mãn nhưng chưa trọn vẹn. Xem việc nên làm để tích lũy thêm may mắn.        |
|   9 | **Mang Chủng**    | Thời điểm gieo cấy                 | 🌱 Mang Chủng gieo việc tốt       | Tiết khí của gieo trồng và hành động. Xem gợi ý để công việc nảy mầm thuận lợi.                   |
|  10 | **Hạ Chí**       | Nắng cực thịnh, ngày dài nhất    | ☀️ Hạ Chí ngày dài nhất năm  | Dương khí đạt đỉnh, nắng nóng dễ làm cơ thể mất cân bằng. Xem điều nên tránh hôm nay.          |
|  11 | **Tiểu Thử**     | Thời tiết bắt đầu nóng           | 🔥 Tiểu Thử báo mùa nóng        | Nắng nóng bắt đầu rõ rệt. Đừng bỏ qua cách hạ nhiệt và giữ năng lượng trong ngày.                |
|  12 | **Đại Thử**     | Thời tiết cực nóng                 | 🌡️ Đại Thử nắng đỉnh điểm  | Đây là thời điểm oi nóng mạnh trong năm. Xem cách phòng nóng, giữ sức và tránh hao năng lượng.   |
|  13 | **Lập Thu**       | Bắt đầu mùa thu, heo may           | 🍂 Lập Thu chuyển mùa             | Thu sang, thời tiết bắt đầu đổi nhịp. Mở lịch xem việc nên làm để đón mùa mới thuận lợi.       |
|  14 | **Xử Thử**       | Nắng giảm, trời dịu hơn           | 🌬️ Xử Thử dịu nắng             | Nắng nóng dần lui, trời dễ chịu hơn. Xem cách điều chỉnh sinh hoạt khi giao mùa.                       |
|  15 | **Bạch Lộ**      | Sương trắng, lạnh dần             | 💧 Bạch Lộ se lạnh về đêm      | Sáng sớm và ban đêm dễ lạnh hơn. Xem lưu ý giữ ấm, dưỡng thân khi thời tiết đổi mùa.            |
|  16 | **Thu Phân**      | Giữa mùa thu, ngày đêm cân bằng | ☯️ Thu Phân sắp lại nhịp sống | Ngày đêm cân bằng, khí thu rõ hơn. Xem gợi ý để tinh thần an ổn, công việc hanh thông.             |
|  17 | **Hàn Lộ**       | Sương lạnh, trời rét nhẹ         | 🍁 Hàn Lộ chớm lạnh              | Khí lạnh bắt đầu thấm rõ, cơ thể dễ nhạy cảm. Xem điều cần chú ý để giữ sức đầu mùa lạnh.  |
|  18 | **Sương Giáng** | Sương nhiều, trời lạnh rõ        | ❄️ Sương Giáng lạnh rõ hơn   | Sương lạnh xuất hiện nhiều, cuối thu chuyển mình. Xem cách chuẩn bị sức khỏe trước khi vào đông. |
|  19 | **Lập Đông**    | Bắt đầu mùa đông, lạnh hơn     | 🧣 Lập Đông dưỡng thân         | Mùa đông bắt đầu, cơ thể cần được giữ ấm hơn. Xem việc nên làm để dưỡng sức và an vận.     |
|  20 | **Tiểu Tuyết**   | Rét tăng, trời lạnh hơn           | 🌨️ Tiểu Tuyết rét về           | Khí lạnh tăng dần, ngày đông rõ nét hơn. Xem cách giữ ấm và sinh hoạt thuận mùa.                   |
|  21 | **Đại Tuyết**   | Trời rét sâu, lạnh tăng mạnh     | ❄️ Đại Tuyết giữ nhiệt        | Trời lạnh sâu hơn, cơ thể dễ hao năng lượng. Xem gợi ý giữ nhiệt, ăn uống và nghỉ ngơi hợp lý. |
|  22 | **Đông Chí**    | Lạnh giá, đêm dài nhất           | 🌙 Đông Chí chuyển vận          | Đêm dài nhất năm, âm cực dương sinh. Khám phá ý nghĩa đặc biệt và việc nên làm hôm nay.        |
|  23 | **Tiểu Hàn**     | Thời tiết rét đậm                 | 🥶 Tiểu Hàn tăng đề kháng      | Rét đậm rõ hơn, cần chú ý giữ sức. Xem cách ăn uống, vận động nhẹ để cơ thể khỏe hơn.        |
|  24 | **Đại Hàn**     | Cực lạnh, cuối chu kỳ tiết khí   | ❄️ Đại Hàn khép mùa lạnh     | Thời điểm lạnh sâu nhất năm, sắp bước sang chu kỳ mới. Xem cách dưỡng thân để đón xuân.        |

#### 3.5.3. Hành vi tương tác (Click Action)

Khi người dùng nhấn vào thông báo, ứng dụng sẽ tự động chuyển hướng người dùng tới màn hình chi tiết của tiết khí tương ứng (ví dụ: màn hình thông tin chi tiết về tiết khí Lập Xuân, Hạ Chí, v.v.).

---

### 3.6. Nội dung 6 - Gợi ý việc thường nhật nên làm theo tuổi theo ngày (Dự kiến)

- **Mục đích:** Gợi ý các công việc sinh hoạt và hoạt động thường nhật (dọn dẹp, mua sắm, khai trương, giao lưu, học tập...) phù hợp nhất với bản mệnh tuổi can chi của người dùng trong ngày cụ thể, khuyến khích người dùng hành động đón cát lành.
- **Đối tượng nhận tin:** Người dùng bật thông báo ứng dụng và có thiết lập ngày sinh/tuổi (khác ngày sinh mặc định).

#### 3.6.1. Các kịch bản gửi push và nội dung hiển thị

| Đợt gửi                     | Điều kiện kích hoạt                                                | Thời gian gửi                    | Tiêu đề & Nội dung mẫu                                                                                                                                                                                                                                                                                                                                                                                   |
| :----------------------------- | :---------------------------------------------------------------------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Báo trước 1 ngày** | Tối ngày hôm trước của ngày có các việc nên làm thích hợp | **20:30 ngày hôm trước** | -**Tiêu đề:** 📅 Việc nên làm ngày mai cho tuổi [Can Chi] `<br>`- **Nội dung:** Ngày mai [Ngày/Tháng], tuổi [Can Chi] nên thực hiện các việc: [Danh sách việc nên làm] để đón cát lành. Xem chi tiết! `<br>`- **Ví dụ:** Ngày mai 18/6, tuổi Ất Tỵ nên thực hiện các việc: dọn dẹp, mua sắm, giao lưu để đón cát lành. Xem chi tiết! |

#### 3.6.2. Hành vi tương tác (Click Action)

Khi người dùng nhấn vào thông báo, ứng dụng sẽ tự động chuyển hướng người dùng tới màn hình chi tiết ngày của ngày hôm sau.

---

### 3.7. Nội dung 7 - Vận hạn tháng âm lịch theo lá số tử vi cá nhân (Dự kiến)

- **Mục đích:** Dự báo và cập nhật tổng quan vận hạn tháng âm lịch mới (tài lộc, sự nghiệp, gia đạo, sức khỏe) được cá nhân hóa sâu theo lá số tử vi của từng người dùng, giúp chủ động nắm bắt cơ hội cát lành và phòng tránh vận hạn.
- **Đối tượng nhận tin:** Người dùng bật thông báo ứng dụng, đã cung cấp đầy đủ thông tin hồ sơ sinh (ngày sinh, giờ sinh, giới tính) để thiết lập lá số tử vi và có sử dụng/kích hoạt xem tử vi vận hạn tháng.

#### 3.7.1. Các kịch bản gửi push và nội dung hiển thị

| Đợt gửi                       | Điều kiện kích hoạt                                                                                                                                           | Thời gian gửi                              | Tiêu đề & Nội dung mẫu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tối Mùng 1 âm lịch** | Ngày Mùng 1 âm lịch, người dùng đã có đủ thông tin hồ sơ sinh, lá số tử vi cá nhân và có kích hoạt tính năng xem tử vi vận hạn tháng | **20:00** tối ngày Mùng 1 âm lịch | -**Tiêu đề:** 🔮 Dự báo vận hạn tháng [Tháng Âm Lịch] của tuổi [Can Chi]`<br>`- **Nội dung:** Lá số tử vi cho thấy tháng [Tháng Âm Lịch] này bạn có [Điểm nổi bật vận hạn]. Khám phá ngay chi tiết vận hạn tháng mới để đón cát lành!`<br>`- **Ví dụ:** 🔮 Dự báo vận hạn tháng Mười Một của tuổi Ất Tỵ: Lá số tử vi cho thấy tháng Mười Một này bạn có tài lộc khởi sắc, quý nhân phù trợ. Khám phá ngay chi tiết vận hạn tháng mới để đón cát lành! |

#### 3.7.2. Hành vi tương tác (Click Action)

Khi người dùng nhấn vào thông báo, ứng dụng sẽ tự động chuyển hướng người dùng tới màn hình **Chi tiết vận hạn tháng** tương ứng với tháng đó dựa trên hồ sơ lá số tử vi cá nhân của người dùng.

---

### 3.8. Nội dung 8 - Push thông báo vào ngày cách cục (Dự kiến)

- **Mục đích:** Thông báo và nhắc nhở người dùng vào những ngày xuất hiện các cách cục đặc biệt (cát cục tốt như Tam Hợp, Lục Hợp, Tuế Mã, Thiên Năng, Quyền Lộc... hoặc hung cục cần lưu ý) được tính toán theo tuổi can chi hoặc lá số cá nhân, giúp người dùng nắm bắt thời cơ thuận lợi để làm việc quan trọng hoặc chủ động phòng tránh rủi ro.
- **Đối tượng nhận tin:** Người dùng bật thông báo ứng dụng, đã cập nhật thông tin ngày sinh (tuổi can chi / lá số cá nhân).

#### 3.8.1. Các kịch bản gửi push và nội dung hiển thị

| Đợt gửi                        | Điều kiện kích hoạt                                                                                                      | Thời gian gửi              | Tiêu đề & Nội dung mẫu                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :-------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Đúng ngày cách cục** | Đến ngày có cách cục đặc biệt (cát cục tốt hoặc hung cục cần tránh) theo can chi / lá số của người dùng | **08:00** đúng ngày | -**Tiêu đề:** 🌟 Hôm nay là ngày [Tên cách cục] cho tuổi [Can Chi]`<br>`- **Nội dung:** Hôm nay ngày [Ngày/Tháng] có cách cục [Tên cách cục], rất hợp để [Danh sách việc hợp]. Khám phá ngay để đón may mắn!`<br>`- **Ví dụ:** Hôm nay ngày 25/8 có cách cục Tam Hợp Thái Sế, rất hợp để ký kết, giao thương, khai trương. Khám phá ngay để đón may mắn! |

#### 3.8.2. Hành vi tương tác (Click Action)

Khi người dùng nhấn vào thông báo, ứng dụng sẽ tự động chuyển hướng người dùng tới màn hình **Chi tiết ngày** tương ứng (hoặc màn hình giải nghĩa cách cục / tử vi ngày).

---

### 3.9. Nội dung 9 - Push thông báo nội dung cuối tuần (Dự kiến)

- **Mục đích:** Nhắc nhở, gửi lời chúc cuối tuần, gợi ý các hoạt động thư giãn, chăm sóc gia đình, tái tạo năng lượng (ngày Thứ Bảy) và tổng quan ngày tốt/vận hạn cho tuần mới (ngày Chủ Nhật), giúp duy trì điểm chạm liên tục và gia tăng tỷ lệ quay lại ứng dụng vào cuối tuần.
- **Đối tượng nhận tin:** Tất cả người dùng bật thông báo ứng dụng.

#### 3.9.1. Các kịch bản gửi push và nội dung hiển thị

| Đợt gửi                                                      | Điều kiện kích hoạt               | Thời gian gửi            | Tiêu đề & Nội dung mẫu                                                                                                                                                                                                                                                                                                                                                                                        |
| :-------------------------------------------------------------- | :------------------------------------- | :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sáng Thứ Bảy (Gợi ý thư giãn & cát lành)**     | Định kỳ sáng Thứ Bảy hàng tuần | **09:00** Thứ Bảy  | -**Tiêu đề:** ☕ Cuối tuần thong thả, nạp lại năng lượng!`<br>`- **Nội dung:** Chúc bạn ngày Thứ Bảy thư thái bên gia đình. Mở Lịch Việt xem gợi ý việc cát lành và giờ tốt hôm nay nhé!`<br>`- **Ví dụ:** Chúc bạn ngày Thứ Bảy thư thái bên gia đình. Mở Lịch Việt xem gợi ý việc cát lành và giờ tốt hôm nay nhé!             |
| **Tối Chủ Nhật (Đón tuần mới & Xem tử vi tuần)** | Định kỳ tối Chủ Nhật hàng tuần | **20:00** Chủ Nhật | -**Tiêu đề:** 🔮 Chuẩn bị đón tuần mới cát lành cho tuổi [Can Chi]`<br>`- **Nội dung:** Tối Chủ Nhật nhẹ nhàng. Xem ngay vận hạn và ngày đẹp nhất tuần tới cho tuổi [Can Chi] để chủ động công việc!`<br>`- **Ví dụ:** Tối Chủ Nhật nhẹ nhàng. Xem ngay vận hạn và ngày đẹp nhất tuần tới cho tuổi Ất Tỵ để chủ động công việc! |

#### 3.9.2. Hành vi tương tác (Click Action)

- Đối với push sáng Thứ Bảy: Hệ thống điều hướng người dùng tới màn hình **Chi tiết ngày Thứ Bảy**.
- Đối với push tối Chủ Nhật: Hệ thống điều hướng người dùng tới màn hình **Tử vi tuần** hoặc màn hình **Chi tiết ngày Thứ Hai** tuần tiếp theo.

---

## 4. Thống kê chỉ số thông báo (Analytics & Metrics)

Để đánh giá hiệu quả của hệ thống push thông báo cá nhân hóa và có dữ liệu tối ưu nội dung qua từng giai đoạn, hệ thống cần ghi nhận và đo lường các chỉ số sau:

### 4.1. Các chỉ số cần đo lường (Key Metrics)

1. **Số lượng gửi (Sent):** Tổng số thông báo hệ thống bắt đầu gửi đi.
2. **Số lượng nhận thành công (Delivered):** Số lượng thông báo thực tế đã được gửi đến thiết bị của người dùng thông qua Firebase (FCM).
3. **Số lượt mở (Opened / Clicked):** Số lượt người dùng nhấn vào thông báo để truy cập ứng dụng.
4. **Tỷ lệ mở (CTR - Click-Through Rate):** Được tính bằng (Số lượt mở / Số lượng nhận thành công) * 100%. Mục tiêu trung bình đạt **18%** đối với tin nhắn cá nhân hóa.
5. **Số lượt gạt bỏ (Dismissed):** Số lượng người dùng gạt bỏ thông báo mà không click.
6. **Tỷ lệ tắt thông báo (Opt-out Rate):** Tỷ lệ người dùng tắt quyền nhận thông báo sau khi nhận push.

### 4.2. Đặc tả dữ liệu tracking theo từng kịch bản (Tracking Events)

Khi phát triển, Client và Backend cần tích hợp mã tracking (ví dụ thông qua Firebase Analytics hoặc hệ thống nội bộ) kèm theo các tham số (parameters) để phân loại và đối chiếu hiệu quả:

* campaign_id: ID của đợt push (ví dụ: push_ca_nhan_hoa_noidung_1 đến push_ca_nhan_hoa_noidung_9).
* user_age_group: Nhóm tuổi của người dùng nhận tin (ví dụ: Ất Tỵ, Bính Ngọ...).
* platform: Hệ điều hành của thiết bị (Android / iOS).
* send_time: Khung giờ gửi tin thực tế.

### 4.3. Báo cáo đánh giá hiệu quả (Dashboard / Reports)

* **Báo cáo định kỳ:** Tổng hợp chỉ số CTR của từng loại nội dung (Nội dung 1 đến 9) theo tuần/tháng để theo dõi xu hướng tương tác.
* **A/B Testing:** Hỗ trợ đo lường hiệu quả giữa các tiêu đề/nội dung khác nhau để tìm ra mẫu thông báo có CTR tốt nhất.

---

## 5. Yêu cầu phi chức năng

- **Hiệu năng gửi tin:** Job gửi push phải đảm bảo hoàn tất phân phối đến hạ tầng Firebase trong vòng tối đa 15 phút kể từ thời điểm kích hoạt job (08:00 hoặc 15:00).
- **Độ chính xác múi giờ:** Việc xác định thời gian gửi push (8h và 15h) phải dựa trên múi giờ thực tế của thiết bị người dùng (mặc định là GMT+7 tại Việt Nam).
- **Tính khả dụng:** Xử lý tốt luồng nhận push và điều hướng khi ứng dụng đang ở cả 3 trạng thái: Đang mở (Foreground), Chạy ngầm (Background), hoặc Đã đóng hoàn toàn (Killed).

---

## 6. Trường hợp ngoại lệ (Edge Cases)

- **Người dùng thay đổi múi giờ thiết bị:** Client cần đồng bộ múi giờ với server khi mở app để tránh lệch giờ gửi push.
- **Nhiều ngày tốt nhất trùng chỉ số:** Nếu trong tuần có nhiều ngày có cùng chỉ số ngày tốt cao nhất, hệ thống mặc định chọn ngày đầu tiên trong tuần thỏa mãn điều kiện làm ngày tốt nhất.
- **Không kết nối mạng khi người dùng đổi ngày sinh:**
  - Ứng dụng client phải lưu trạng thái đăng ký topic chưa thành công vào bộ nhớ cục bộ (local storage).
  - Ngay khi thiết bị có kết nối mạng trở lại, ứng dụng client sẽ tự động đồng bộ gửi yêu cầu lên server.

---

## 7. Tiêu chuẩn nghiệm thu (Definition of Done)

- [X] Tài liệu BRD được duyệt bởi Product Manager và Tech Lead.
- [X] Các kịch bản của nội dung đã golive (Nội dung 1, Nội dung 2, Nội dung 3 và Nội dung 4) được QA thiết kế thành danh sách kiểm thử chi tiết.
- [X] Backend phát triển thành công logic phân loại ngày sinh, tính toán ngày tốt, ngày cắt tóc đẹp và lọc sao xấu ngày đại sự để gửi tin.
- [X] Client phát triển thành công tính năng đồng bộ thông tin và luồng điều hướng deep link đến màn hình Chi tiết ngày.
- [X] Đã kiểm thử thành công việc nhận push và điều hướng đúng trên cả hai hệ điều hành Android và iOS.
