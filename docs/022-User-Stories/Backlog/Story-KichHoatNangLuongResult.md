---
id: Story-KichHoatNangLuongResult
type: story
status: draft
project: Lich_Viet
created: 2026-07-23
tags: [kich-hoat-nang-luong, bat-tu, ngu-hanh, result, freemium, paywall]
linked-to: [[Story-KichHoatNangLuong]]
---
# User Stories - Màn hình Kết quả luận giải lá số Bát tự (người dùng Free)

Tài liệu này định nghĩa các user story cho màn hình **Kết quả luận giải lá số Bát tự** thuộc tính năng **Kích hoạt năng lượng cá nhân**, dành cho trường hợp người dùng tài khoản miễn phí (Free). Màn hình vận hành theo mô hình Freemium kết hợp Paywall nâng cấp lên gói Premium.

- Prototype giao diện (màn kết quả): `prototype/KichHoatNangLuong_Result.html`
- API kết quả kích hoạt năng lượng: `api/app/ca-nhan-hoa/kich-hoat-nang-luong-ca-nhan`
- File dữ liệu nội dung (Google Sheet — server đọc từ đây để trả về nội dung luận giải, cách cục, nhận định...): [docs.google.com/spreadsheets/d/1tvCu2DaZ5wHYoaaSAVcdgbJjkCVB1HMaeV8sEnqJmSw/edit?gid=1052269072#gid=1052269072](https://docs.google.com/spreadsheets/d/1tvCu2DaZ5wHYoaaSAVcdgbJjkCVB1HMaeV8sEnqJmSw/edit?gid=1052269072#gid=1052269072)

**Prototype tham chiếu**: [[KichHoatNangLuong_Result.html]] (`prototype/KichHoatNangLuong_Result.html`)

Người dùng Free được xem miễn phí toàn bộ lá số Bát tự (tứ trụ), cách cục và biểu đồ ngũ hành cùng phần nhận định cơ bản. Các nội dung luận giải chuyên sâu và giải pháp kích hoạt được hiển thị dưới dạng khối giới thiệu khoá lại, kèm nút mở khoá dẫn tới luồng nâng cấp gói.

> **Hai trường hợp dữ liệu đầu vào chỉ ảnh hưởng tới bảng lá số Tứ trụ:**
>
> - **TH1 - Đủ năm, tháng, ngày, giờ sinh**: bảng lá số lập đủ **4 trụ** (Năm, Tháng, Ngày, Giờ).
> - **TH2 - Thiếu giờ sinh**: bảng lá số chỉ lập **3 trụ** (Năm, Tháng, Ngày), ẩn cột trụ Giờ.
>
> Các khối còn lại (thông tin người xem, cách cục, biểu đồ ngũ hành, nhận định) hiển thị và tính toán **như nhau** ở cả hai trường hợp — điểm khác biệt duy nhất là cột trụ Giờ trong bảng lá số.

---

## US-01: Xem khối lá số Tứ trụ

**User Story**
**As a** người dùng Lịch Việt tài khoản miễn phí (Free) đã nhập thông tin ngày sinh (có thể có hoặc thiếu giờ sinh)
**I want to** xem khối lá số Tứ trụ được lập đúng theo dữ liệu tôi đã nhập
**So that** tôi nắm được cấu trúc bản mệnh của mình một cách chính xác với dữ liệu hiện có

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                           |
| --------------------- | ----------- | ---------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Khối lá số hiển thị độc lập, không phụ thuộc trạng thái thanh toán.  |
| **N**egotiable  | ✅          | Bố cục bảng và cách ẩn/hiện trụ Giờ có thể tinh chỉnh theo thiết kế. |
| **V**aluable    | ✅          | Cho người dùng Free thấy ngay lá số bản mệnh, giá trị cốt lõi.         |
| **E**stimable   | ✅          | Đã có prototype, logic ẩn/hiện trụ Giờ rõ ràng, dễ ước lượng.        |
| **S**mall       | ✅          | Chủ yếu hiển thị dữ liệu đã tính, thực hiện trong 1 ngày.              |
| **T**estable    | ✅          | Kiểm chứng được với dữ liệu đủ giờ và thiếu giờ.                     |

### Tiêu chí nghiệm thu

**1. Thanh tiêu đề và thông tin người xem (Happy path)**

- [ ] Thanh tiêu đề cố định hiển thị nhãn `"Kết quả luận giải"`.
- [ ] Hiển thị nút quay lại (mũi tên) ở góc trên bên trái; bấm vào → quay về màn nhập thông tin trước đó.
- [ ] Hiển thị tiêu đề `"Lá số Bát tự của bạn"` và Họ tên người xem (ví dụ `"Nguyễn Hiếu Minh"`).
- [ ] Hiển thị **Ngày sinh** dương lịch kèm ngày âm lịch tương ứng.
- [ ] **TH1 - Đủ giờ sinh**: hiển thị **Giờ sinh** kèm tên giờ Can Chi (ví dụ `05:30` · `Giờ Mão`).
- [ ] **TH2 - Thiếu giờ sinh**: không hiển thị giá trị giờ sinh (do người dùng chưa nhập).

**2. Nội dung bảng lá số (Happy path)**

- [ ] Mỗi trụ hiển thị đầy đủ các hàng: **Thiên can**, **Địa chi**, **Tàng can**, **Thập thần**, kèm nạp âm ở dòng đầu.
- [ ] Hàng Thiên can và Địa chi hiển thị âm dương ngũ hành tương ứng (ví dụ `MẬU - DƯƠNG THỔ`, `ĐINH - ÂM HỎA`).
- [ ] Trụ Ngày (Nhật chủ) được đánh dấu là `"Nhật chủ"` ở hàng Thập thần.
- [ ] Tàng can trong mỗi trụ được tô màu theo ngũ hành tương ứng (Mộc, Hỏa, Thổ, Kim, Thủy).

**3. Số trụ theo trường hợp giờ sinh (Happy path & Edge case)**

- [ ] **TH1 - Đủ giờ sinh**: bảng lá số hiển thị đủ **4 trụ** theo thứ tự `NĂM`, `THÁNG`, `NGÀY`, `GIỜ`.
- [ ] **TH2 - Thiếu giờ sinh**: bảng lá số chỉ hiển thị **3 trụ** `NĂM`, `THÁNG`, `NGÀY`; ẩn hoàn toàn cột trụ Giờ (không hiển thị cột trống hay giá trị rỗng).

**Bảng điều kiện hiển thị khối lá số theo giờ sinh**

| Nội dung                                              | TH1 - Đủ giờ sinh | TH2 - Thiếu giờ sinh |
| ------------------------------------------------------ | -------------------- | ---------------------- |
| Giá trị Giờ sinh + tên giờ Can Chi                | ✅                   | ❌                     |
| Số trụ trong bảng lá số                           | 4 trụ               | 3 trụ                 |
| Trụ Giờ (Thiên can/Địa chi/Tàng can/Thập thần) | ✅                   | ❌                     |

**4. Luận giải cách cục từ lá số (Happy path)**

- [ ] Ngay dưới bảng lá số, hiển thị khối cách cục nêu tên cách cục của lá số (ví dụ `"Kiến Lộc"`).
- [ ] Khối cách cục hiển thị mục `"Điểm mạnh nổi bật"` kèm nội dung mô tả.
- [ ] Khối cách cục hiển thị mục `"Điểm cần lưu ý"` kèm nội dung mô tả.
- [ ] Nội dung luận giải của cách cục lấy từ sheet `Cách cục (tl cho lá số bát tự)` trong file dữ liệu Google Sheet, theo đúng tên cách cục của lá số.
- [ ] Mục `"Điểm cần lưu ý"` lấy nội dung từ đoạn bắt đầu bằng `"Tuy nhiên"` trong phần luận giải cách cục tương ứng.
- [ ] Toàn bộ nội dung kết quả cho phép cuộn dọc mượt, không bị cắt cụt các khối.

---

## US-02: Xem khối biểu đồ ngũ hành

**User Story**
**As a** người dùng Lịch Việt tài khoản miễn phí (Free) đang xem kết quả lá số Bát tự
**I want to** xem biểu đồ ngũ hành cùng phần nhận định được tính đúng theo bản mệnh của tôi
**So that** tôi hiểu được điểm mạnh, điểm yếu trong cấu trúc ngũ hành và định hướng cân bằng bản mệnh

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                          |
| --------------------- | ----------- | --------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Khối biểu đồ chỉ lấy dữ liệu từ lá số, không phụ thuộc thanh toán. |
| **N**egotiable  | ✅          | Kiểu biểu đồ, màu sắc và bố cục bảng có thể tinh chỉnh.              |
| **V**aluable    | ✅          | Trực quan hoá cấu trúc ngũ hành, tăng sức thuyết phục.                  |
| **E**stimable   | ✅          | Logic tính tỷ lệ ngũ hành rõ ràng, dễ ước lượng.                      |
| **S**mall       | ✅          | Thực hiện trong 1 ngày làm việc.                                             |
| **T**estable    | ✅          | Đối chiếu được tổng tỷ lệ và giá trị từng can.                       |

### Tiêu chí nghiệm thu

**1. Hiển thị biểu đồ và bảng ngũ hành (Happy path)**

- [ ] Hiển thị tiêu đề `"Biểu đồ Ngũ hành"` kèm đoạn mô tả ý nghĩa.
- [ ] Hiển thị biểu đồ cột thể hiện tỷ lệ phần trăm của 10 Thiên can, cho phép cuộn ngang khi vượt bề rộng màn hình.
- [ ] Hiển thị bảng chi tiết ngũ hành gồm các hàng Thần, Can, Thiên can, Địa chi, Trạng thái, Trường sinh.

**2. Cách tính tỷ lệ ngũ hành (Happy path)**

- [ ] Tỷ lệ ngũ hành trong biểu đồ và bảng được tính nhất quán, **không thay đổi** theo việc có hay thiếu giờ sinh (biểu đồ ngũ hành hiển thị và tính giống nhau ở cả hai trường hợp).
- [ ] Tổng tỷ lệ các thành phần trong biểu đồ luôn hợp lệ (cộng lại đạt 100%).

**3. Khối nhận định từ ngũ hành (Happy path)**

- [ ] Hiển thị khối `"Nhận định từ ngũ hành"` nêu Nhật chủ và tháng sinh (ví dụ `"Nhật chủ Giáp · Sinh tháng Tý"`).
- [ ] Khối nhận định hiển thị mục `"Chân dung năng lực"` kèm nội dung mô tả.
- [ ] Khối nhận định hiển thị mục `"Điểm cần lưu ý"` kèm nội dung mô tả.

---

## US-03: Hiển thị khối mở khoá luận giải chuyên sâu (Paywall) cho người dùng Free

**User Story**
**As a** người dùng Lịch Việt tài khoản miễn phí (Free) đang xem kết quả lá số Bát tự
**I want to** thấy khối giới thiệu các nội dung luận giải chuyên sâu đang khoá cùng nút mở khoá nổi bật
**So that** tôi hiểu rõ những quyền lợi có được khi nâng cấp và dễ dàng chuyển sang luồng mua gói Premium

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                          |
| --------------------- | ----------- | --------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Khối mở khoá hiển thị độc lập, chỉ phụ thuộc hạng tài khoản Free.   |
| **N**egotiable  | ✅          | Danh sách quyền lợi và nội dung khối có thể thay đổi theo chiến dịch. |
| **V**aluable    | ✅          | Thúc đẩy chuyển đổi từ Free sang Premium, tăng doanh thu.                 |
| **E**stimable   | ✅          | Logic hiển thị khối và xử lý sự kiện bấm đơn giản, dễ ước lượng. |
| **S**mall       | ✅          | Thực hiện nhanh trong vòng vài giờ đến một ngày làm việc.              |
| **T**estable    | ✅          | Kiểm chứng được hiển thị khối, hành vi nút CTA và điều hướng.      |

### Tiêu chí nghiệm thu

**1. Hiển thị khối mở khoá (Happy path)**

- [ ] Sau phần nhận định miễn phí, hiển thị khối mở khoá có huy hiệu `"PREMIUM"`.
- [ ] Hiển thị tiêu đề `"Mở khoá luận giải chuyên sâu"` và mô tả `"Xem đầy đủ phân tích và gợi ý phù hợp theo lá số của bạn."`.
- [ ] Hiển thị nhóm `"Bản phân tích dành riêng cho bạn"` (kèm biểu tượng khoá) gồm 3 mục:
  - [ ] **Chân dung năng lượng của bạn**: mô tả điểm mạnh tự nhiên và điểm cần chú ý để phát triển cân bằng.
  - [ ] **Bản đồ ngũ hành cá nhân**: ngũ hành nào đang vượng, đang thiếu và tác động tới công việc, tài chính, sức khỏe, quan hệ.
  - [ ] **Hướng phát triển phù hợp**: gợi ý hướng đi, phát triển công việc và xây nền tảng tài chính ổn định.
- [ ] Hiển thị nhóm `"Giải pháp kích hoạt theo lá số"` (kèm biểu tượng khoá) gồm:
  - [ ] Bên phải nhóm hiển thị **ảnh minh hoạ con giáp** theo tuổi (con giáp cầm tinh) của người dùng, tương ứng địa chi năm sinh.
  - [ ] **Linh vật đặt** kèm 4 gợi ý: `LỘC`, `MÃ`, `ÂM QUÝ NHÂN`, `DƯƠNG QUÝ NHÂN`, mỗi gợi ý có mô tả ngắn.
  - [ ] **Linh vật hộ thân**: mô tả giúp cân bằng năng lượng, tăng an tâm và hỗ trợ hoá giải điều chưa thuận.

**2. Nút mở khoá cố định đáy màn (Interaction)**

- [ ] Nút CTA cố định đáy màn hiển thị nhãn `"Mở khoá luận giải chuyên sâu"`
- [ ] Khi cuộn tới vùng khối mở khoá → nút CTA đáy màn hiện lên (hiệu ứng trượt vào).
- [ ] Khi cuộn ra khỏi vùng khối mở khoá → nút CTA đáy màn ẩn đi.
- [ ] Bấm nút CTA → hiển thị popup mua gói lẻ kích hoạt năng lượng cá nhân inapp luôn của hệ thống.
- [ ] Mua gói lẻ Kích hoạt năng lượng cá nhân thành công → mở khoá đầy đủ tính năng Kích hoạt năng lượng cá nhân bản Premium trên màn kết quả, load lại trang kết quả

**3. Phân quyền theo hạng tài khoản (Edge case & Negative path)**

- [ ] **Trường hợp tài khoản Free**: toàn bộ nội dung trong khối mở khoá ở trạng thái khoá (không hiển thị nội dung chi tiết đã luận giải), chỉ hiển thị phần giới thiệu quyền lợi.
- [ ] **Trường hợp đã mua gói lẻ Kích hoạt năng lượng cá nhân**: được dùng đầy đủ tính năng Kích hoạt năng lượng cá nhân bản Premium; ẩn khối mở khoá và nút CTA, hiển thị đầy đủ nội dung luận giải chuyên sâu.
- [ ] **Trường hợp đã mua gói Kim cương**: mặc nhiên được dùng đầy đủ tính năng Kích hoạt năng lượng cá nhân bản Premium (không cần mua thêm gói lẻ); ẩn khối mở khoá và nút CTA, hiển thị đầy đủ nội dung luận giải chuyên sâu.
- [ ] Sau khi mua gói thành công (gói lẻ hoặc gói Kim cương) → tải lại màn kết quả và hiển thị nội dung theo quyền Premium.

**Bảng phân quyền tính năng Kích hoạt năng lượng cá nhân bản Premium theo gói**

| Hạng tài khoản / Gói                              | Được dùng Premium | Hiển thị khối mở khoá & nút CTA |
| ----------------------------------------------------- | --------------------- | ------------------------------------- |
| Tài khoản Free (chưa mua gói nào)                | ❌                    | ✅ (khối khoá + CTA)                |
| Đã mua gói lẻ Kích hoạt năng lượng cá nhân | ✅                    | ❌                                    |
| Đã mua gói Kim cương                             | ✅                    | ❌                                    |
