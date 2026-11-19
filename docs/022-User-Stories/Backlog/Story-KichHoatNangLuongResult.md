---
id: Story-KichHoatNangLuongResult
type: story
status: draft
project: Lich_Viet
created: 2026-07-23
updated: 2026-11-17
version: 2.0
tags: [kich-hoat-nang-luong, bat-tu, ngu-hanh, result, freemium, paywall]
linked-to: [[Story-KichHoatNangLuong]], [[Story-OnboardingKichHoatNangLuong]]
---
# User Stories - Màn hình Kết quả luận giải lá số Bát tự (người dùng Free)

Tài liệu này định nghĩa các user story cho màn hình **Kết quả luận giải lá số Bát tự** thuộc tính năng **Kích hoạt năng lượng cá nhân**, dành cho trường hợp người dùng tài khoản miễn phí (Free). Màn hình vận hành theo mô hình Freemium kết hợp Paywall nâng cấp lên gói Premium.

- Prototype giao diện (màn kết quả): `prototype/KichHoatNangLuong_Result.html`
- API kết quả kích hoạt năng lượng: `api/app/ca-nhan-hoa/kich-hoat-nang-luong-ca-nhan`
- File dữ liệu nội dung (Google Sheet — server đọc từ đây để trả về nội dung luận giải, cách cục, nhận định...): [docs.google.com/spreadsheets/d/1tvCu2DaZ5wHYoaaSAVcdgbJjkCVB1HMaeV8sEnqJmSw/edit?gid=1052269072#gid=1052269072](https://docs.google.com/spreadsheets/d/1tvCu2DaZ5wHYoaaSAVcdgbJjkCVB1HMaeV8sEnqJmSw/edit?gid=1052269072#gid=1052269072)

**Prototype tham chiếu**: [[KichHoatNangLuong_Result.html]] (`prototype/KichHoatNangLuong_Result.html`)

Người dùng Free được xem miễn phí toàn bộ lá số Bát tự (tứ trụ), cách cục, biểu đồ ngũ hành và kết luận về bản mệnh. Các nội dung luận giải chuyên sâu và giải pháp kích hoạt được hiển thị dưới dạng khối giới thiệu khoá lại, kèm nút mở khoá dẫn tới luồng nâng cấp gói.

> **Hai trường hợp dữ liệu đầu vào chỉ ảnh hưởng tới bảng lá số Tứ trụ:**
>
> - **TH1 - Đủ năm, tháng, ngày, giờ sinh**: bảng lá số lập đủ **4 trụ** (Năm, Tháng, Ngày, Giờ).
> - **TH2 - Thiếu giờ sinh**: bảng lá số chỉ lập **3 trụ** (Năm, Tháng, Ngày), ẩn cột trụ Giờ.
>
> Các khối còn lại (thông tin người xem, cách cục, biểu đồ ngũ hành, kết luận bản mệnh) hiển thị và tính toán **như nhau** ở cả hai trường hợp — điểm khác biệt duy nhất là cột trụ Giờ trong bảng lá số.

---

## Lịch sử thay đổi (Changelog)

| Version | Ngày      | Nội dung thay đổi               |
| ------- | ---------- | ---------------------------------- |
| 1.0     | 2026-07-23 | Bản khởi tạo — US-01 → US-03. |
| 2.0     | 2026-11-17 | Sửa US-02, US-03.                 |

> Version của file đi theo version tính năng Kích hoạt năng lượng. Bản cũ tra cứu qua `git log`/`git diff`.

**Quy ước nhãn thay đổi trên từng AC**: 🆕 **`[v2.0 – Mới]`** AC thêm mới · ✏️ **`[v2.0 – Sửa]`** AC sửa nội dung. AC bị bỏ được xoá khỏi story (bản cũ xem qua git).

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
**I want to** xem biểu đồ ngũ hành cùng kết luận về trạng thái bản mệnh được tính đúng theo lá số của tôi
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

- [ ] Hiển thị tiêu đề `"Biểu đồ Ngũ hành"`
- [ ] Hiển thị biểu đồ cột thể hiện tỷ lệ phần trăm của 10 Thiên can, cho phép cuộn ngang khi vượt bề rộng màn hình.
- [ ] Hiển thị bảng chi tiết ngũ hành gồm các hàng Thần, Can, Thiên can, Địa chi, Trạng thái, Trường sinh.
- [ ] Dưới bảng hiển thị hàng % của 5 Ngũ hành — Kim, Thủy, Mộc, Hỏa, Thổ — mỗi hành gồm icon, giá trị % và tên hành, màu theo hành: Kim (xám), Thủy (xanh dương), Mộc (xanh lá), Hỏa (đỏ), Thổ (vàng nâu); bên dưới là dòng mô tả cố định `"Từ lá số Bát Tự của bạn, Lịch Việt phân tích điểm Mạnh – Yếu của 5 Ngũ hành để xác định trạng thái năng lượng trong mệnh cục."`.

**2. Cách tính tỷ lệ ngũ hành (Happy path)**

- [ ] Tỷ lệ ngũ hành trong biểu đồ và bảng được tính nhất quán, **không thay đổi** theo việc có hay thiếu giờ sinh (biểu đồ ngũ hành hiển thị và tính giống nhau ở cả hai trường hợp).
- [ ] Tổng tỷ lệ các thành phần trong biểu đồ luôn hợp lệ (cộng lại đạt 100%).

**3. Kết luận về bản mệnh (Happy path)**

- [ ] ✏️ **`[v2.0 – Sửa]`** Hiển thị khối `"KẾT LUẬN VỀ BẢN MỆNH"` (đầu khối nền vàng nhạt, hoạ tiết mây hai góc) gồm dòng `"[Can ngày] - [Trạng thái]"` in hoa (ví dụ `"TÂN KIM - RẤT YẾU"`) và đoạn mô tả `"Can ngày của bạn là [Can ngày]. Qua phân tích sự tương quan giữa các Ngũ hành, bản mệnh được đánh giá ở trạng thái [Trạng thái] và cần xác định yếu tố bổ trợ phù hợp."`; Can ngày và Trạng thái động theo lá số.
- [ ] 🆕 **`[v2.0 – Mới]`** Ngay dưới hiển thị tiêu đề `"Trạng thái này có thể ảnh hưởng đến bạn như thế nào?"`, đoạn mô tả theo trạng thái (ví dụ `"Can chi ngày quá yếu, bản mệnh có thể thiếu sự nâng đỡ để phát huy những năng lực lợi thế sẵn có"`) và 3 mục có icon, phân cách bằng đường kẻ; mỗi mục gồm nhãn xanh lá đậm và nội dung theo trạng thái:
  - **Công việc** — ví dụ `"Chủ động, thẳng thắn và có định hướng rõ và có thể phát triển tốt khi có định hướng và nguồn lực phù hợp, nhưng đôi khi nóng lòng thúc đẩy tiến độ; dễ quá tải nếu tự gánh việc khó."`
  - **Nội lực** — ví dụ `"kiên trì theo mục tiêu và có khả năng tích lũy kinh nghiệm từng bước, nhưng đôi khi khó chấp nhận lối đi khác; cần tránh tự đánh giá thấp bản thân."`
  - **Các mối quan hệ** — ví dụ `"có trách nhiệm, sẵn lòng bảo vệ và biết lắng nghe và quý trọng sự đồng hành, nhưng đôi khi quá trực diện khi góp ý; cần chủ động bày tỏ nhu cầu hỗ trợ."`
- [ ] 🆕 **`[v2.0 – Mới]`** Đoạn mô tả và nội dung 3 mục (Công việc, Nội lực, Các mối quan hệ) do server trả về theo trạng thái bản mệnh, lấy từ sheet `Màn mở khoá` trong file dữ liệu Google Sheet.

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

**1. Khối dẫn vào phần mở khoá (Happy path)**

- [ ] 🆕 **`[v2.0 – Mới]`** Sau khối kết luận bản mệnh, hiển thị khối `"VÌ SAO CẦN XÁC ĐỊNH ĐÚNG DỤNG THẦN?"` (đầu khối nền vàng nhạt, hoạ tiết mây hai góc) với nội dung cố định 3 đoạn:
  - `"Trong Bát Tự, Dụng Thần được ví như “vị thuốc của bản mệnh”, là yếu tố Ngũ Hành then chốt được xác định thông qua phân tích năm, tháng, ngày và giờ sinh, nhằm tìm ra hướng điều hòa sự mất cân bằng trong lá số."`
  - `"Dụng Thần giúp xác định yếu tố Ngũ Hành cần bổ trợ dựa trên mối quan hệ sinh – khắc và trạng thái vượng – suy của các hành, từ đó định hướng phương pháp cân bằng phù hợp với bản mệnh."`
  - `"Tuy nhiên, không phải cứ thiếu hành nào là bổ sung hành đó. Điều quan trọng là xác định đúng Dụng Thần dựa trên cấu trúc tổng thể của lá số Bát Tự để hướng đến sự hài hòa và cân bằng Ngũ Hành."`
- [ ] 🆕 **`[v2.0 – Mới]`** Dưới khối trên hiển thị khung câu dẫn (chữ đỏ, viền vàng) `"Vậy với [Can ngày] - [Trạng thái], bạn cần bổ trợ Ngũ hành nào và bằng cách nào?"` (ví dụ `"Vậy với Tân Kim - Rất Yếu, …"`).

**2. Hiển thị khối mở khoá (Happy path)**

- [ ] ✏️ **`[v2.0 – Sửa]`** **Phần đầu**: tiêu đề `"Mở khóa"` kèm huy hiệu `"PREMIUM"`, dòng `"Kết quả đầy đủ"` và dòng phụ in hoa màu đỏ `"KHÁM PHÁ DỤNG THẦN & GIẢI PHÁP CÁ NHÂN HOÁ DÀNH CHO BẠN"`; bên phải là hình nhân vật cầm chìa khoá.
- [ ] 🆕 **`[v2.0 – Mới]`** Dưới phần đầu hiển thị khung danh sách 4 mục, phân cách bằng đường kẻ; mỗi mục gồm icon, tiêu đề (xanh lá), mô tả và icon khoá bên phải:
  - **Dụng thần của bạn là gì?**: `"Xác định Ngũ hành cần bổ trợ để cân bằng và nâng đỡ bản mệnh"`
  - **Lựa chọn vật phẩm phù hợp**: `"Gợi ý vật phẩm, vòng tay, tháp, quả cầu theo Dụng thần để hỗ trợ điều hoà Ngũ hành"`
  - **Thời điểm & phương vị phù hợp**: `"Xem ngày giờ, hướng và cách sử dụng để phát huy hiệu quả."`
  - **Bạn có đủ điều kiện Kích hoạt Lộc-Mã-Quý Nhân?**: `"Đánh giá điều kiện, thời điểm và phương pháp kích hoạt khi phù hợp với bản mệnh"`

**3. Nút mở khoá cố định đáy màn (Interaction)**

- [ ] ✏️ **`[v2.0 – Sửa]`** Nút CTA cố định đáy màn hiển thị nhãn `"Mở khóa Dụng thần & Giải pháp"`.
- [ ] Khi cuộn tới vùng khối mở khoá → nút CTA đáy màn hiện lên (hiệu ứng trượt vào).
- [ ] Khi cuộn ra khỏi vùng khối mở khoá → nút CTA đáy màn ẩn đi.
- [ ] ✏️ **`[v2.0 – Sửa]`** Bấm nút CTA → chuyển tới màn đăng ký dịch vụ chọn Gói Vàng (theo deeplink cấu hình).
- [ ] ✏️ **`[v2.0 – Sửa]`** Mua Gói Vàng thành công → quay lại màn kết quả, tải lại và hiển thị đầy đủ nội dung bản Premium.

**4. Phân quyền theo hạng tài khoản (Edge case & Negative path)**

- [ ] **Trường hợp tài khoản Free**: toàn bộ nội dung trong khối mở khoá ở trạng thái khoá (không hiển thị nội dung chi tiết đã luận giải), chỉ hiển thị phần giới thiệu quyền lợi.
- [ ] ✏️ **`[v2.0 – Sửa]`** **Trường hợp đã mua Gói Vàng, gói Kim cương, hoặc đã mua gói lẻ Kích hoạt năng lượng cá nhân trước đây** (app không còn bán gói lẻ cho khách mới): được dùng đầy đủ tính năng Kích hoạt năng lượng cá nhân bản Premium; ẩn khối mở khoá và nút CTA, hiển thị đầy đủ nội dung luận giải chuyên sâu.

**Bảng phân quyền tính năng Kích hoạt năng lượng cá nhân bản Premium theo gói**

| Hạng tài khoản / Gói                              | Được dùng Premium | Hiển thị khối mở khoá & nút CTA |
| ----------------------------------------------------- | --------------------- | ------------------------------------- |
| Tài khoản Free (chưa mua gói nào)                | ❌                    | ✅ (khối khoá + CTA)                |
| Đã mua Gói Vàng                                  | ✅                    | ❌                                    |
| Đã mua gói lẻ Kích hoạt năng lượng cá nhân (trước đây) | ✅              | ❌                                    |
| Đã mua gói Kim cương                             | ✅                    | ❌                                    |
