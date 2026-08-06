---
id: Story-KichHoatNangLuongResultPremium
type: story
status: draft
project: Lich_Viet
created: 2026-07-27
tags: [kich-hoat-nang-luong, bat-tu, ngu-hanh, dung-than, linh-vat, premium, result]
linked-to: [[Story-KichHoatNangLuongResult]]
---
# User Stories - Màn hình Kết quả luận giải lá số Bát tự (người dùng Premium)

Tài liệu này định nghĩa các user story cho màn hình **Kết quả luận giải lá số Bát tự** ở trạng thái đã mở khoá, dành cho người dùng tài khoản **Premium** thuộc tính năng **Kích hoạt năng lượng cá nhân**. Đây là phần luận giải chuyên sâu được nhắc tới trong [[Story-KichHoatNangLuongResult]] (US-03), khi người dùng Free nâng cấp gói thành công.

- Prototype giao diện: `prototype/KichHoatNangLuong_Result_Premium.html`
- API kết quả kích hoạt năng lượng: `api/app/ca-nhan-hoa/kich-hoat-nang-luong-ca-nhan`
- File dữ liệu nội dung (Google Sheet — server đọc từ đây để trả về nội dung luận giải, linh vật, màu sắc, hướng đặt...): [docs.google.com/spreadsheets/d/1tvCu2DaZ5wHYoaaSAVcdgbJjkCVB1HMaeV8sEnqJmSw/edit?gid=1052269072#gid=1052269072](https://docs.google.com/spreadsheets/d/1tvCu2DaZ5wHYoaaSAVcdgbJjkCVB1HMaeV8sEnqJmSw/edit?gid=1052269072#gid=1052269072)

**Prototype tham chiếu**:

- [[KichHoatNangLuong_Result_Premium.html]] (`prototype/KichHoatNangLuong_Result_Premium.html`) — trường hợp có linh vật phù hợp (các khối US-05, US-06).
- [[KichHoatNangLuong_Result_Premium_KhongLinhVat.html]] (`prototype/KichHoatNangLuong_Result_Premium_KhongLinhVat.html`) — trường hợp **không có linh vật phù hợp**, hiển thị khối thay thế `"Linh vật hỗ trợ bản mệnh"` (US-07).

Người dùng Premium xem đầy đủ nội dung, không còn khối mở khoá (paywall) hay nút CTA nâng cấp. Tài liệu này liệt kê **đầy đủ tất cả các khối** của màn Premium, gồm lá số Tứ trụ, biểu đồ ngũ hành (bao gồm phần phân tích chuyên sâu từ ngũ hành nằm ngay trong khối này), Dụng thần, linh vật hộ thân, linh vật và hướng đặt kích hoạt năng lượng, gợi ý chủ động cân bằng năng lượng và thông điệp kết luận.

---

## US-01: Truy cập và xem đầy đủ kết quả luận giải Premium

**User Story**
**As a** người dùng Lịch Việt đã sở hữu gói Premium tính năng Kích hoạt năng lượng và đã nhập thông tin ngày giờ sinh
**I want to** xem toàn bộ kết quả luận giải lá số Bát tự ở trạng thái đã mở khoá, không còn khối giới thiệu khoá hay nút nâng cấp
**So that** tôi nhận đúng quyền lợi đã mua và tiếp cận liền mạch các nội dung chuyên sâu theo lá số của mình

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                            |
| --------------------- | ----------- | ----------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Điều kiện truy cập theo hạng Premium, tách khỏi các khối nội dung.        |
| **N**egotiable  | ✅          | Cách vào màn và thứ tự các khối có thể tinh chỉnh theo thiết kế.       |
| **V**aluable    | ✅          | Bảo đảm người dùng nhận đúng quyền lợi đã trả tiền.                  |
| **E**stimable   | ✅          | Đã có prototype, logic phân quyền rõ ràng, dễ ước lượng.                |
| **S**mall       | ✅          | Chủ yếu là kiểm soát truy cập và hiển thị đủ khối, gọn trong 1 sprint. |
| **T**estable    | ✅          | Kiểm chứng được theo hạng tài khoản và trạng thái hiển thị.            |

### Tiêu chí nghiệm thu

- [ ] Thanh tiêu đề cố định hiển thị nhãn `"Kết quả luận giải"` kèm nút quay lại ở góc trên bên trái.
- [ ] Bấm nút quay lại → quay về màn trước đó
- [ ] **Tài khoản Premium**: hiển thị đầy đủ các khối chuyên sâu, không hiển thị khối mở khoá (paywall) và không hiển thị nút CTA nâng cấp gói.
- [ ] Màn kết quả hiển thị theo thứ tự đầy đủ các khối: lá số Tứ trụ → biểu đồ ngũ hành (kèm phân tích chuyên sâu từ ngũ hành) → Dụng thần → linh vật hộ thân → linh vật và hướng đặt kích hoạt → chủ động cân bằng năng lượng → thông điệp kết luận.
- [ ] Màn kết quả cho phép cuộn dọc mượt qua tất cả các khối, không cắt cụt nội dung.
- [ ] **Edge case - thiếu giờ sinh**: bảng lá số chỉ lập 3 trụ (Năm, Tháng, Ngày); các khối chuyên sâu phía sau vẫn hiển thị đầy đủ theo Dụng thần đã tính.
- [ ] **Negative path - tài khoản Free/hết hạn Premium**: không được vào trạng thái mở khoá này; hệ thống hiển thị màn kết quả Free kèm khối mở khoá thay thế.

---

## US-02: Xem khối lá số Tứ trụ và thông tin người xem

**User Story**
**As a** người dùng Premium đã nhập thông tin ngày sinh (có thể có hoặc thiếu giờ sinh)
**I want to** xem khối lá số Tứ trụ và thông tin người xem được lập đúng theo dữ liệu tôi đã nhập
**So that** tôi nắm được cấu trúc bản mệnh chính xác trước khi đọc các phần luận giải chuyên sâu

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                        |
| --------------------- | ----------- | ------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Khối lá số hiển thị độc lập từ dữ liệu đã tính.                   |
| **N**egotiable  | ✅          | Bố cục bảng và cách ẩn/hiện trụ Giờ có thể tinh chỉnh.              |
| **V**aluable    | ✅          | Là nền tảng để người dùng đối chiếu toàn bộ luận giải phía sau. |
| **E**stimable   | ✅          | Logic hiển thị giống bản Free, đã có prototype, dễ ước lượng.       |
| **S**mall       | ✅          | Chủ yếu hiển thị dữ liệu đã tính, gọn trong 1 ngày làm việc.       |
| **T**estable    | ✅          | Kiểm chứng được với dữ liệu đủ giờ và thiếu giờ.                  |

### Tiêu chí nghiệm thu

- [ ] Hiển thị tiêu đề `"Lá số Bát tự của bạn"`, Họ tên người xem, Ngày sinh dương lịch kèm ngày âm lịch tương ứng.
- [ ] **TH1 - Đủ giờ sinh**: hiển thị Giờ sinh kèm tên giờ Can Chi (ví dụ `05:30 · Giờ Mão`); bảng lá số lập đủ **4 trụ** `NĂM`, `THÁNG`, `NGÀY`, `GIỜ`.
- [ ] **TH2 - Thiếu giờ sinh**: không hiển thị giá trị giờ sinh; bảng lá số chỉ lập **3 trụ** `NĂM`, `THÁNG`, `NGÀY`, ẩn hoàn toàn cột trụ Giờ.
- [ ] Mỗi trụ hiển thị đầy đủ các hàng: nạp âm, **Thiên can**, **Địa chi**, **Tàng can**, **Thập thần**; hàng Thiên can/Địa chi kèm âm dương ngũ hành.
- [ ] Trụ Ngày được đánh dấu `"Nhật chủ"` ở hàng Thập thần; Tàng can được tô màu theo ngũ hành tương ứng.
- [ ] Hiển thị khối cách cục nêu tên cách cục của lá số (ví dụ `"Kiến Lộc"`) kèm mục `"Điểm mạnh nổi bật"` và mục `"Điểm cần lưu ý"`.
- [ ] Nội dung luận giải của cách cục lấy từ sheet `Cách cục (tl cho lá số bát tự)` trong file dữ liệu Google Sheet, theo đúng tên cách cục của lá số.
- [ ] Mục `"Điểm cần lưu ý"` lấy nội dung từ đoạn bắt đầu bằng `"Tuy nhiên"` trong phần luận giải cách cục tương ứng.

> Logic tính toán và ẩn/hiện trụ Giờ giống bản Free, xem thêm [[Story-KichHoatNangLuongResult]] (US-01).

---

## US-03: Xem biểu đồ ngũ hành và phân tích chuyên sâu từ ngũ hành

**User Story**
**As a** người dùng Premium đang xem kết quả lá số Bát tự
**I want to** xem biểu đồ ngũ hành kèm phần phân tích chuyên sâu được suy ra từ Nhật chủ và tháng sinh
**So that** tôi hiểu sâu năng lực nổi bật, điều đang kiềm hãm và rủi ro khi năng lượng chưa cân bằng để điều chỉnh

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                           |
| --------------------- | ----------- | ---------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Khối lấy dữ liệu từ lá số, hiển thị độc lập.                           |
| **N**egotiable  | ✅          | Kiểu biểu đồ, số mục phân tích và cách trình bày có thể tinh chỉnh. |
| **V**aluable    | ✅          | Phần phân tích chuyên sâu là giá trị cốt lõi người dùng trả tiền.   |
| **E**stimable   | ✅          | Logic tính tỷ lệ và nội dung theo Nhật chủ rõ ràng, dễ ước lượng.    |
| **S**mall       | ✅          | Một khối gồm biểu đồ và nội dung, gọn trong 1 sprint.                     |
| **T**estable    | ✅          | Kiểm chứng được biểu đồ, bảng và các mục phân tích.                  |

### Tiêu chí nghiệm thu

**1. Biểu đồ và bảng ngũ hành (Happy path)**

- [ ] Hiển thị tiêu đề `"Biểu đồ Ngũ hành"` kèm đoạn mô tả ý nghĩa.
- [ ] Hiển thị biểu đồ cột thể hiện tỷ lệ phần trăm của 10 Thiên can, cho phép cuộn ngang khi vượt bề rộng màn hình.
- [ ] Hiển thị bảng chi tiết ngũ hành gồm các hàng Thần, Can, Thiên can, Địa chi, Trạng thái, Trường sinh.
- [ ] Tỷ lệ ngũ hành được tính nhất quán, **không thay đổi** theo việc có hay thiếu giờ sinh; tổng tỷ lệ các thành phần đạt 100%.

**2. Phân tích chuyên sâu từ ngũ hành (Happy path)**

- [ ] Ngay dưới biểu đồ, hiển thị khối `"Phân tích chuyên sâu từ ngũ hành"` kèm dòng nêu Nhật chủ và tháng sinh (ví dụ `"Nhật chủ Giáp · Sinh tháng Tý"`).
- [ ] Hiển thị mục `"Năng lực nổi bật trong lá số của bạn"` kèm nội dung mô tả.
- [ ] Hiển thị mục `"Điều đang kiềm hãm tiềm năng của bạn"` kèm nội dung mô tả.
- [ ] Hiển thị mục `"Nếu năng lượng của bạn chưa được cân bằng"` kèm nội dung mô tả.
- [ ] Nội dung phần phân tích được sinh theo đúng Nhật chủ và tháng sinh của lá số hiện tại, không dùng nội dung mặc định cố định.
- [ ] Nội dung phân tích chuyên sâu từ ngũ hành lấy từ sheet `Nhật chủ 1` trong file dữ liệu Google Sheet.

**3. Mức độ chi tiết so với bản Free (Edge case)**

- [ ] Phần luận giải ngũ hành ở bản Premium chi tiết hơn bản Free: bản Free chỉ có nhận định cơ bản (2 mục), bản Premium hiển thị đủ 3 mục phân tích chuyên sâu nêu trên.

---

## US-04: Xem Dụng thần và gợi ý màu sắc

**User Story**
**As a** người dùng Premium đang xem kết quả lá số Bát tự
**I want to** biết Dụng thần của mình cùng gợi ý màu sắc hỗ trợ và màu sắc tương khắc
**So that** tôi có thể chọn màu trang phục, xe cộ và không gian sống giúp nuôi dưỡng và cân bằng năng lượng bản mệnh

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                          |
| --------------------- | ----------- | --------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Khối Dụng thần lấy dữ liệu từ lá số, hiển thị độc lập.              |
| **N**egotiable  | ✅          | Số mục hỗ trợ và cách trình bày bảng màu có thể tinh chỉnh.          |
| **V**aluable    | ✅          | Gợi ý ứng dụng ngay vào đời sống, giá trị thực tế cao.                |
| **E**stimable   | ✅          | Mapping Dụng thần → màu sắc rõ ràng, dễ ước lượng.                    |
| **S**mall       | ✅          | Một khối nội dung, gọn trong 1 sprint.                                        |
| **T**estable    | ✅          | Kiểm chứng được tên Dụng thần và danh sách màu hỗ trợ/tương khắc. |

### Tiêu chí nghiệm thu

- [ ] Hiển thị tiêu đề `"Dụng thần của bạn"` kèm tên Dụng thần nổi bật (ví dụ `"Mộc"`) và đoạn mô tả ý nghĩa.
- [ ] Hiển thị các mục giá trị của Dụng thần: `"Hỗ trợ công việc & sự nghiệp"`, `"Kích hoạt phát triển bản thân"`, `"Kích hoạt tài lộc"`, mỗi mục kèm nội dung mô tả.
- [ ] Hiển thị mục `"Màu sắc hỗ trợ"` kèm danh sách màu (ví dụ Đen, Xanh lam đậm, Xanh lục, Xanh phấn), mỗi màu có ô màu và tên.
- [ ] Hiển thị mục `"Màu sắc tương khắc"` kèm danh sách màu (ví dụ Trắng, Ghi xám), mỗi màu có ô màu và tên.
- [ ] Danh sách màu hỗ trợ và tương khắc được sinh theo đúng Dụng thần của lá số hiện tại.
- [ ] Toàn bộ nội dung khối Dụng thần (mô tả Dụng thần, các mục hỗ trợ, danh sách màu hỗ trợ/tương khắc) lấy từ sheet `Dụng thần` trong file dữ liệu chiGoogle Sheet.
- [ ] Hiển thị dòng gợi ý ứng dụng màu sắc `"Gợi ý màu sắc cho trang phục, xe cộ và không gian sống."` — nội dung cố định cho mục màu sắc hỗ trợ

---

## US-05: Xem linh vật hộ thân và gợi ý sản phẩm linh vật đeo

**User Story**
**As a** người dùng Premium đang xem kết quả lá số Bát tự
**I want to** biết linh vật hộ thân phù hợp cùng lý do và các mẫu linh vật đeo được gợi ý
**So that** tôi hiểu vì sao chúng phù hợp với lá số của mình và có thể chọn vật phẩm đồng hành phù hợp

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                       |
| --------------------- | ----------- | ------------------------------------------------------------------------------ |
| **I**ndependent | ✅          | Khối linh vật hộ thân hiển thị độc lập, dữ liệu từ lá số.        |
| **N**egotiable  | ✅          | Số linh vật, số mẫu sản phẩm và bố cục carousel có thể tinh chỉnh. |
| **V**aluable    | ✅          | Kết nối luận giải với sản phẩm, tạo giá trị và cơ hội bán hàng. |
| **E**stimable   | ✅          | Logic chọn linh vật theo Quý Nhân rõ ràng, dễ ước lượng.            |
| **S**mall       | ✅          | Một khối nội dung kèm carousel, gọn trong 1 sprint.                       |
| **T**estable    | ✅          | Kiểm chứng được linh vật, giải thích Quý Nhân và thẻ sản phẩm.   |

### Tiêu chí nghiệm thu

- [ ] Hiển thị tiêu đề `"Linh vật hộ thân của bạn"` kèm các linh vật hộ thân (ví dụ Trâu, Mèo) có hình minh hoạ và tên.
- [ ] **TH1 - Đủ giờ sinh**: gợi ý tối đa **2 linh vật** hộ thân.
- [ ] **TH2 - Thiếu giờ sinh**: gợi ý tối đa **1 linh vật** hộ thân.
- [ ] **TH chỉ có 1 linh vật**: linh vật được căn giữa khối (không lệch trái/phải), ẩn đường phân cách dọc giữa hai linh vật.
- [ ] Hiển thị khối `"Lợi ích dành riêng cho bạn"` gồm các gạch đầu dòng lợi ích của linh vật hộ thân; nội dung lợi ích lấy từ sheet `Lợi ích nổi bật của LV hộ thân` trong file dữ liệu Google Sheet.
- [ ] Hiển thị mục `"Vì sao linh vật này phù hợp?"` kèm giải thích dựa trên Quý Nhân theo Can và Nhật chủ của lá số (ví dụ Can Giáp có Quý Nhân tại Sửu); nội dung giải thích cũng lấy từ sheet `Lợi ích nổi bật của LV hộ thân` trong file dữ liệu Google Sheet.
- [ ] Hiển thị mục `"Mẫu linh vật đeo phù hợp"` dạng carousel cuộn ngang gồm nhiều thẻ sản phẩm.
- [ ] Danh sách sản phẩm trong mục này do server trả về, gồm các sản phẩm phù hợp với linh vật hộ thân và Dụng thần của người dùng.
- [ ] **Negative path - server không trả về sản phẩm nào**: ẩn mục `"Mẫu linh vật đeo phù hợp"` (không hiển thị carousel rỗng).
- [ ] Mỗi thẻ sản phẩm hiển thị: ảnh, tên sản phẩm, chất liệu và mô tả ngắn, kèm nút `"Xem sản phẩm"`.
- [ ] Giới hạn số dòng hiển thị trên mỗi thẻ: tên sản phẩm tối đa **2 dòng**, chất liệu **1 dòng**, mô tả tối đa **2 dòng**; nội dung vượt giới hạn được cắt gọn kèm dấu `…`.
- [ ] Các thẻ sản phẩm có **kích thước bằng nhau** (cùng chiều rộng và chiều cao); nội dung dài/ngắn khác nhau không làm thay đổi kích thước thẻ.
- [ ] Bấm vào thẻ sản phẩm hoặc nút `"Xem sản phẩm"` → mở màn chi tiết sản phẩm web app **trong app** (webview), truyền định danh sản phẩm theo đúng cách đang áp dụng ở phần Hương Cát Việt (nằm ngoài phạm vi màn kết quả).
- [ ] Hiển thị chỉ báo chấm (dots) tương ứng số trang của carousel.

---

## US-06: Xem linh vật và hướng đặt để kích hoạt năng lượng theo 4 mục tiêu

**User Story**
**As a** người dùng Premium đang xem kết quả lá số Bát tự
**I want to** xem gợi ý linh vật, màu sắc và hướng đặt theo từng mục tiêu kích hoạt (Dương Quý Nhân, Âm Quý Nhân, Lộc, Mã)
**So that** tôi biết cách bài trí linh vật phù hợp với lá số để chủ động kích hoạt năng lượng theo mục tiêu mong muốn

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                                      |
| --------------------- | ----------- | --------------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Bốn mục dùng chung một cấu trúc, hiển thị độc lập theo Dụng thần.                |
| **N**egotiable  | ✅          | Số mục, số lựa chọn linh vật và cách hiển thị độ số có thể tinh chỉnh.        |
| **V**aluable    | ✅          | Hướng dẫn hành động cụ thể theo mục tiêu, giá trị cao.                            |
| **E**stimable   | ✅          | Bốn khối cùng khuôn mẫu, logic hướng/độ số rõ ràng, dễ ước lượng.            |
| **S**mall       | ⚠️        | Bốn mục tiêu × 3 lựa chọn có thể lớn; cân nhắc tách theo mục nếu vượt effort. |
| **T**estable    | ✅          | Kiểm chứng được từng mục, lợi ích, hướng đặt và độ số.                       |

### Tiêu chí nghiệm thu

- [ ] Hiển thị tiêu đề khối `"Linh vật và hướng đặt để kích hoạt năng lượng"` kèm đoạn mô tả cố định (theo thiết kế): `"Gợi ý linh vật, màu sắc và hướng đặt phù hợp với lá số của bạn theo từng mục tiêu kích hoạt."`
- [ ] Không phải lá số nào cũng có đủ 4 mục tiêu kích hoạt; chỉ hiển thị các mục tiêu mà lá số có.
- [ ] Các mục tiêu kích hoạt có trong lá số được sắp xếp theo đúng thứ tự cố định: `"Kích hoạt Dương Quý Nhân"` → `"Kích hoạt Âm Quý Nhân"` → `"Kích hoạt Lộc"` → `"Kích hoạt Mã"` (bỏ qua mục không có, không đổi thứ tự các mục còn lại).
- [ ] Mỗi mục hiển thị có biểu tượng, tiêu đề và dòng khẩu hiệu ngắn cố định (theo thiết kế) như sau:
  - [ ] `"Kích hoạt Dương Quý Nhân"` — khẩu hiệu: `"Thu hút người đồng hành – Vạn sự hanh thông"`
  - [ ] `"Kích hoạt Âm Quý Nhân"` — khẩu hiệu: `"Gia tăng bảo hộ – Hóa giải trở ngại"`
  - [ ] `"Kích hoạt Lộc"` — khẩu hiệu: `"Mở rộng tài lộc – Khởi thông cơ hội"`
  - [ ] `"Kích hoạt Mã"` — khẩu hiệu: `"Mở đường phát triển – Đón vận may – Bứt phá thành công"`
- [ ] Mỗi mục hiển thị khối `"Lợi ích dành riêng cho bạn"` gồm các gạch đầu dòng lợi ích tương ứng mục tiêu đó; nội dung lợi ích của từng loại kích hoạt là **nội dung cố định** (theo thiết kế), không sinh động theo lá số.
- [ ] Mỗi mục hiển thị dòng giải thích cơ sở chọn linh vật theo lá số (ví dụ Can Giáp có Quý Nhân tại Sửu, kết hợp Dụng thần Mộc); nội dung giải thích lấy theo đúng loại kích hoạt (Dương Quý Nhân / Âm Quý Nhân / Lộc / Mã) từ sheet `Ý nghĩa Lộc - Mã - Quý Nhân - Âm Quý Nhân` trong file dữ liệu Google Sheet.
- [ ] Mỗi mục hiển thị danh sách lựa chọn linh vật; mỗi lựa chọn nêu tên linh vật, màu sắc, `"Hướng đặt"` và độ số góc (ví dụ `"Chính Đông · 82,5°–97,5°"`).
- [ ] **TH1 - Lựa chọn có sản phẩm**: thẻ hiển thị nút `"Xem sản phẩm"`; bấm vào → mở màn chi tiết sản phẩm web app **trong app** (webview), truyền định danh sản phẩm theo đúng cách đang áp dụng ở phần Hương Cát Việt.
- [ ] **TH2 - Lựa chọn chỉ có thông tin**: thẻ hiển thị đủ tên, màu, hướng và độ số nhưng **không** có nút `"Xem sản phẩm"`.
- [ ] Linh vật, màu sắc, hướng đặt và độ số của cả 4 mục được sinh theo đúng lá số và Dụng thần hiện tại.

---

## US-07: Xử lý khi không có linh vật phù hợp với lá số (khối thay thế "Linh vật hỗ trợ bản mệnh")

> **Prototype tham chiếu**: [[KichHoatNangLuong_Result_Premium_KhongLinhVat.html]] (`prototype/KichHoatNangLuong_Result_Premium_KhongLinhVat.html`)

**User Story**
**As a** người dùng Premium có lá số không cho ra linh vật hộ thân/linh vật đặt phù hợp (tất cả linh vật đều xung, hình, hại hoặc phá với lá số)
**I want to** thay vì thấy khối trống, tôi thấy một khối `"Linh vật hỗ trợ bản mệnh"` giải thích rõ vì sao không có linh vật phù hợp và gợi ý vật phẩm thay thế theo Dụng thần
**So that** tôi hiểu được cơ sở kết luận của hệ thống và vẫn có hướng bổ sung năng lượng thay thế, không bị gián đoạn trải nghiệm

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                                                            |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Là nhánh trạng thái rỗng của các khối linh vật, xử lý độc lập.                                        |
| **N**egotiable  | ✅          | Số dòng đối chiếu, nội dung kết luận và số sản phẩm gợi ý có thể tinh chỉnh.                       |
| **V**aluable    | ✅          | Biến trạng thái rỗng thành nội dung có giá trị: minh bạch cơ sở + gợi ý thay thế bán được hàng. |
| **E**stimable   | ✅          | Logic đối chiếu xung/hình/hại/phá và ánh xạ sản phẩm theo Dụng thần rõ ràng.                         |
| **S**mall       | ✅          | Một khối empty-state có cấu trúc cố định, gọn trong 1 sprint.                                              |
| **T**estable    | ✅          | Kiểm chứng được bảng đối chiếu, kết luận và danh sách sản phẩm thay thế dạng list 1x1.             |

### Tiêu chí nghiệm thu

**1. Thay khối linh vật bằng khối "Linh vật hỗ trợ bản mệnh" (Happy path của trạng thái rỗng)**

- [ ] Khi lá số **không có** linh vật hộ thân/linh vật đặt phù hợp: **thay** cả hai khối `"Linh vật hộ thân của bạn"` (US-05) và `"Linh vật và hướng đặt để kích hoạt năng lượng"` (US-06) bằng **một khối** `"Linh vật hỗ trợ bản mệnh"`.
- [ ] Khối mở đầu bằng biểu tượng khiên bảo hộ (căn giữa trong vòng tròn be) và tiêu đề căn giữa `"Không có linh vật phù hợp với lá số của bạn"`.
- [ ] Hiển thị dòng giải thích căn giữa: `"Sau khi phân tích lá số Bát tự của bạn, các linh vật hiện có đều tồn tại yếu tố xung, hình, hại hoặc phá."` — cụm `"xung, hình, hại hoặc phá"` được tô nhấn màu đỏ.

**2. Bảng "Chi tiết kết quả đối chiếu"**

- [ ] Hiển thị tiêu đề mục `"Chi tiết kết quả đối chiếu"` kèm icon minh hoạ
- [ ] Bảng đối chiếu thiết kế dạng 2 cột trong khung viền bo góc, giữa 2 cột có đường phân cách dọc nét đứt cao ~70% chiều cao item (căn giữa dọc).
- [ ] Bảng đối chiếu hiển thị các mục tiêu kích hoạt mà lá số có, theo đúng thứ tự cố định: `"Kích hoạt Dương Quý Nhân"` → `"Kích hoạt Âm Quý Nhân"` → `"Kích hoạt Lộc"` → `"Kích hoạt Mã"`.
- [ ] Mỗi dòng gồm:
  - [ ] **Cột trái**: biểu tượng vai trò + tên vai trò kích hoạt (ví dụ `"Kích hoạt Dương Quý Nhân"`).
  - [ ] **Cột phải**: tên linh vật ứng viên được tiền tố thêm chữ `"Linh vật "` (ví dụ `"Linh vật Hổ"`, `"Linh vật Mèo"`, `"Linh vật Ngựa"`) + thẻ nhãn lý do xung khắc.
- [ ] Thẻ nhãn lý do xung khắc màu đỏ, gồm icon dấu X màu đỏ và câu giải thích chi tiết đầy đủ trụ sinh: `"[Xung/Hình/Hại/Phá] với chi [năm/tháng/ngày/giờ] sinh của bạn ([Tên Chi/Can])"` (ví dụ `"Hại với chi giờ sinh của bạn (Tý)"`, `"Phá với chi năm sinh của bạn (Giáp)"`, `"Xung với chi tháng sinh của bạn (Tị)"`, `"Hình với chi ngày sinh của bạn (Thìn)"`).

**3. Khối "Kết luận"**

- [ ] Nằm trực tiếp bên dưới bảng đối chiếu, hiển thị khung viền xanh lá rất nhạt
- [ ] Trình bày **căn trái**, gồm icon khiên bảo hộ căn hàng với tiêu đề `"KẾT LUẬN"`.
- [ ] Nội dung văn bản kết luận: `"Với tiêu chí chỉ đề xuất những lựa chọn tốt nhất, hệ thống không đưa ra đề xuất linh vật phong thủy phù hợp với lá số của bạn."`

**4. Khối "Gợi ý thay thế phù hợp"**

- [ ] Nằm bên dưới khối Kết luận, hiển thị tiêu đề `"Gợi ý thay thế phù hợp"` kèm icon túi mua sắm.
- [ ] Hiển thị dòng mô tả hướng dẫn: `"Bạn có thể bổ sung năng lượng Dụng thần [tên Dụng thần] thông qua các vật phẩm phong thủy như vòng tay, vòng cổ hoặc đá tự nhiên."` — trong đó `[tên Dụng thần]` là phần động theo Dụng thần của lá số (ví dụ `"Mộc"`).
- [ ] Hiển thị danh sách sản phẩm gợi ý thay thế dạng **dọc 1x1 (stack các card ngang)** chuẩn theo cấu trúc của khối *"Linh vật đặt"*:
  - [ ] Cột thông tin hiển thị: Tên sản phẩm, chất liệu, mô tả (ràng buộc tối đa 2 dòng), và nút `"Xem sản phẩm"`
- [ ] Bấm thẻ hoặc nút `"Xem sản phẩm"` → mở màn chi tiết sản phẩm web app **trong app** (webview), truyền định danh sản phẩm theo đúng cách đang áp dụng ở phần Hương Cát Việt.
- [ ] **Negative path - server không trả về sản phẩm thay thế nào**: ẩn **toàn bộ khối `"Gợi ý thay thế phù hợp"`** (cả tiêu đề, mô tả và danh sách), không hiển thị khối rỗng.

**5. Tính liền mạch của màn**

- [ ] Khối `"Linh vật hỗ trợ bản mệnh"` nằm đúng vị trí hai khối linh vật bị thay thế; các khối phía trên (Dụng thần) và phía dưới (Chủ động cân bằng năng lượng) nối liền tự nhiên qua đường phân cách chuẩn.

---

## US-08: Xem gợi ý chủ động cân bằng năng lượng và thông điệp kết luận

**User Story**
**As a** người dùng Premium đã xem xong phần luận giải và giải pháp linh vật
**I want to** đọc các gợi ý tự chủ động cân bằng năng lượng hằng ngày và thông điệp kết luận
**So that** tôi biết những thay đổi nhỏ có thể tự thực hành và kết thúc trải nghiệm với thông điệp tích cực

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                        |
| --------------------- | ----------- | ------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Khối gợi ý và thông điệp hiển thị độc lập ở cuối màn.            |
| **N**egotiable  | ✅          | Số thẻ gợi ý và nội dung thông điệp có thể tinh chỉnh.              |
| **V**aluable    | ✅          | Gợi ý miễn phí tự thực hành, tăng thiện cảm và giá trị cảm nhận. |
| **E**stimable   | ✅          | Nội dung tĩnh theo Dụng thần, dễ ước lượng.                            |
| **S**mall       | ✅          | Hai khối nội dung ở cuối màn, gọn trong 1 ngày làm việc.               |
| **T**estable    | ✅          | Kiểm chứng được số thẻ gợi ý và thông điệp kết luận.             |

### Tiêu chí nghiệm thu

- [ ] Hiển thị tiêu đề `"Chủ động cân bằng năng lượng"` kèm đoạn mô tả ngay dưới tiêu đề: `"Ngoài việc bổ sung Dụng thần [tên Dụng thần] và sử dụng linh vật phù hợp, bạn có thể chủ động cân bằng năng lượng bằng những thay đổi nhỏ mỗi ngày."` — trong đó `[tên Dụng thần]` là phần động theo Dụng thần của lá số (ví dụ `"Mộc"`), phần còn lại cố định theo thiết kế.
- [ ] Hiển thị danh sách thẻ gợi ý (ví dụ Tu dưỡng Đức Nhân, Nuôi dưỡng thói quen phù hợp, Điều chỉnh suy nghĩ và cảm xúc, Chủ động tạo cơ hội), mỗi thẻ có biểu tượng, tiêu đề và các gạch đầu dòng nội dung.
- [ ] Nội dung khối lấy từ sheet `Chìa khoá năng lượng cân bằng chính bạn` trong file dữ liệu Google Sheet.
- [ ] Ứng với mỗi Dụng thần, nội dung gợi ý cân bằng hiển thị **khác nhau** theo đúng Dụng thần của lá số hiện tại.
- [ ] Hiển thị khối thông điệp kết luận `"Hiểu mình để sống cân bằng hơn"` kèm hình minh hoạ ngũ hành và 3 đoạn nội dung cố định (fix cứng theo thiết kế) như sau:
  - [ ] Đoạn 1: `"Lá số Bát tự là bản đồ năng lượng được tạo nên từ năm, tháng, ngày và giờ sinh của bạn."`
  - [ ] Đoạn 2: `"Phản ánh cấu trúc bẩm sinh, sự vận hành của Ngũ hành và những điểm mạnh, điểm cần cân bằng trong cuộc sống."`
  - [ ] Đoạn 3: `"Hy vọng những phân tích này sẽ giúp bạn thấu hiểu bản thân sâu sắc hơn, nhận diện Dụng thần phù hợp để kích hoạt tiềm năng, cân bằng Ngũ hành và kiến tạo cuộc sống an yên, thuận lợi."`
- [ ] Đây là khối cuối cùng của màn; sau khối này không còn nội dung nào khác.

---

## Notes chung (Dependencies & Assumptions)

- **Phụ thuộc**: [[Story-KichHoatNangLuong]] (nhập thông tin) và [[Story-KichHoatNangLuongResult]] (màn Free + paywall dẫn tới nâng cấp).
- **Giả định**: người dùng đã mua gói Premium thành công trước khi vào trạng thái này; toàn bộ dữ liệu lá số, Dụng thần, linh vật và hướng đặt do hệ thống tính sẵn từ ngày giờ sinh.
- **Nguồn sản phẩm linh vật đeo** (carousel `"Mẫu linh vật đeo phù hợp"` ở US-05): server trả về danh sách sản phẩm phù hợp với linh vật hộ thân và Dụng thần của người dùng.
- **Nguồn sản phẩm ở 4 mục kích hoạt** (thẻ lựa chọn có nút `"Xem sản phẩm"` ở US-06): cần làm rõ cùng nguồn với carousel linh vật đeo hay lấy theo tiêu chí khác.
- **Màn chi tiết sản phẩm** khi bấm `"Xem sản phẩm"` nằm trên web app, ngoài phạm vi màn kết quả. Điều hướng **mở trong app** (webview), truyền các định danh sản phẩm sang web app **theo đúng cách đang áp dụng ở phần Hương Cát Việt**.
