---
id: Story-KichHoatNangLuongResultPremium
type: story
status: draft
project: Lich_Viet
created: 2026-07-27
updated: 2026-08-28
version: 1.1
tags: [kich-hoat-nang-luong, bat-tu, ngu-hanh, dung-than, linh-vat, premium, result]
linked-to: [[Story-KichHoatNangLuongResult]]
---
# User Stories - Màn hình Kết quả luận giải lá số Bát tự (người dùng Premium)

Tài liệu này định nghĩa các user story cho màn hình **Kết quả luận giải lá số Bát tự** ở trạng thái đã mở khoá, dành cho người dùng tài khoản **Premium** thuộc tính năng **Kích hoạt năng lượng cá nhân**. Đây là phần luận giải chuyên sâu được nhắc tới trong [[Story-KichHoatNangLuongResult]] (US-03), khi người dùng Free nâng cấp gói thành công.

- Prototype giao diện: `prototype/KichHoatNangLuong_Result_Premium.html`
- API kết quả kích hoạt năng lượng: `api/app/ca-nhan-hoa/kich-hoat-nang-luong-ca-nhan`
- File dữ liệu nội dung (Google Sheet — server đọc từ đây để trả về nội dung luận giải, linh vật, màu sắc, hướng đặt...): [docs.google.com/spreadsheets/d/1tvCu2DaZ5wHYoaaSAVcdgbJjkCVB1HMaeV8sEnqJmSw/edit?gid=1052269072#gid=1052269072](https://docs.google.com/spreadsheets/d/1tvCu2DaZ5wHYoaaSAVcdgbJjkCVB1HMaeV8sEnqJmSw/edit?gid=1052269072#gid=1052269072)

**Prototype tham chiếu**:

- [[KichHoatNangLuong_Result_Premium.html]] (`prototype/KichHoatNangLuong_Result_Premium.html`) — trường hợp có linh vật phù hợp (các khối US-06, US-07).
- [[KichHoatNangLuong_Result_Premium_KhongLinhVat.html]] (`prototype/KichHoatNangLuong_Result_Premium_KhongLinhVat.html`) — trường hợp **không có linh vật phù hợp**, hiển thị khối thay thế `"Linh vật hỗ trợ bản mệnh"` (US-08).

Người dùng Premium xem đầy đủ nội dung, không còn khối mở khoá (paywall) hay nút CTA nâng cấp. Tài liệu này liệt kê **đầy đủ tất cả các khối** của màn Premium, gồm lá số Tứ trụ, biểu đồ ngũ hành (bao gồm kết quả phân tích mệnh cục nằm ngay trong khối này), Dụng thần, khối "Cách cân bằng Dụng thần" (điều hướng nhanh), linh vật hộ thân, linh vật và hướng đặt kích hoạt năng lượng, khối vòng tay theo Dụng thần, khối quả cầu theo Dụng thần, khối màu sắc theo Dụng thần, gợi ý chủ động cân bằng năng lượng và thông điệp kết luận.

---

## Lịch sử thay đổi (Changelog)

| Version | Ngày      | Nội dung thay đổi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0     | 2026-07-27 | Bản khởi tạo — định nghĩa đầy đủ US-01 → US-08 cho màn Premium.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1     | 2026-08-28 | **US-02**: (1) Thêm hiển thị **Giới tính** người dùng đã nhập trong khối thông tin người xem. (2) Sửa tiêu đề khối cách cục thành 2 dòng: dòng 1 `"Lá số Bát tự của bạn thuộc cách cục: [tên cách cục]"`, dòng 2 `"thể hiện những đặc điểm nổi bật sau"`.**US-03**: (1) Bỏ hàng **Thập thần** (`"Thần"`) khỏi bảng chi tiết ngũ hành; chuyển Thập thần lên hiển thị **ngay trên giá trị % của mỗi cột** trong biểu đồ. (2) Thêm hàng **% của 5 Ngũ hành** (Kim/Thủy/Mộc/Hỏa/Thổ) ngay dưới biểu đồ. (3) **Đổi tên** khối `"Phân tích chuyên sâu từ ngũ hành"` → `"KẾT QUẢ PHÂN TÍCH MỆNH CỤC"` và **bổ sung** ở đầu khối phần Can ngày + Trạng thái năng lượng + đoạn phân tích; giữ nguyên 3 mục (Năng lực nổi bật / Điều kiềm hãm / Nếu chưa cân bằng) và nguồn sheet `Nhật chủ 1`.**US-04**: (1) Đổi mô tả Dụng thần thành dạng động gắn với mệnh cục (`"Bổ sung yếu tố [Dụng thần]... khi [Can ngày] đang ở trạng thái [trạng thái]"`). (2) Thay 3 mục giá trị Dụng thần bằng nhóm `"KHI MỆNH CỤC ĐƯỢC CÂN BẰNG"` gồm 4 mục lợi ích (cảm xúc, công việc, phát triển bản thân, tài lộc), mỗi mục nhiều gạch đầu dòng — Mục 1 (cảm xúc) lấy từ sheet mới `KHI DỤNG THẦN ĐƯỢC CÂN BẰNG`, Mục 2/3/4 giữ sheet `Dụng thần`. (3) **Tách** phần Màu sắc hỗ trợ / Màu sắc tương khắc (và dòng gợi ý màu sắc) ra khỏi khối Dụng thần, chuyển thành **US-11 mới** (khối màu sắc riêng).**US-05 (mới)**: thêm khối `"Cách cân bằng Dụng thần"` ngay dưới khối Dụng thần — khối điều hướng nhanh, nhấn từng phương pháp để tự cuộn tới khối chi tiết tương ứng (Linh Vật Hộ Thân → US-06, Linh Vật Đặt → US-07, Vòng Tay Đá → US-09, Quả Cầu Ngũ Hành → US-10, Màu Sắc Tương Hợp → US-11; còn Hình Nền Điện Thoại: **khối đích cần bổ sung**).**US-09 (mới)**: thêm khối `"Vòng tay dành riêng cho bạn"` (khối đích của phương pháp Vòng Tay Đá ở US-05), đặt trên khối quả cầu — carousel sản phẩm vòng tay do server trả về, thẻ có nút `"Xem kết quả"` → màn nội dung tổng quát vật phẩm.**US-10 (mới)**: thêm khối `"Quả cầu dành riêng cho bạn"` (khối đích của phương pháp Quả Cầu Ngũ Hành ở US-05), đặt ngay dưới khối vòng tay — carousel sản phẩm quả cầu do server trả về, thẻ có nút `"Xem kết quả"` → màn nội dung tổng quát vật phẩm.**Đánh số lại US** (sau các lần chèn khối mới, thứ tự cuối cùng): US-05 = Cách cân bằng Dụng thần, US-06 = linh vật hộ thân, US-07 = linh vật & hướng đặt, US-08 = không có linh vật, US-09 = vòng tay, US-10 = quả cầu, US-11 = màu sắc, US-12 = chủ động cân bằng & kết luận. Thứ tự khối cập nhật ở intro và US-01.**US-06 (giao diện mới)**: đổi bố cục khối linh vật hộ thân — tiêu đề `"Linh vật hộ thân: [Tên]"` + dòng phụ `"Kích hoạt [vai trò] của bạn"`, thêm hình hero linh vật, đoạn mô tả tương hợp (gộp mục `"Vì sao phù hợp"` cũ), khối lợi ích dạng tick (tiêu đề đậm + mô tả), đổi tên mục sản phẩm → `"Linh Vật Đeo Dành Riêng Cho Bạn"` + dòng mô tả, nút `"Xem kết quả"`.**US-07 (giao diện mới)**: đổi tiêu đề khối → `"LINH VẬT ĐỂ BÀN & HƯỚNG ĐẶT KÍCH HOẠT NĂNG LƯỢNG"` + mô tả mới; mỗi mục tiêu thêm đoạn mô tả cơ sở chọn linh vật (Can tuổi + vị trí Quý Nhân/Lộc/Mã + Dụng thần), lợi ích dạng tick, tiêu đề phụ `"Linh vật kích hoạt [mục tiêu] dành cho bạn"`, danh sách linh vật dạng **thẻ dọc 1x1** (ảnh, tên • màu, hướng đặt, độ số), nút `"Xem kết quả"` luôn hiển thị — nhấn cả thẻ hoặc nút đều tới màn nội dung tổng quát vật phẩm.**US-08 (giao diện mới)**: đơn giản hoá khối "Linh vật hỗ trợ bản mệnh" — thêm tiêu đề khối + mô tả (Xung/Hình/Hại/Phá) + đoạn gợi ý thay thế ("bổ xung yếu tố [Mộc] qua vòng tay hoặc quả cầu..."), **bỏ** bảng "Chi tiết kết quả đối chiếu" và khối "Kết luận" riêng; danh sách sản phẩm thay thế dạng thẻ 1x1, nút `"Xem kết quả"`; ẩn thêm khối quả cầu (US-10) ở trạng thái này. |

> Ghi chú: Story là tài liệu "sống", update trực tiếp lên bản mới nhất. Bản 1.0 được git lưu lại đầy đủ, tra cứu qua `git log`/`git diff` khi cần.

**Quy ước nhãn thay đổi trên từng AC** (để đọc trong US biết được AC nào mới/sửa/bỏ so với bản trước):

- 🆕 **`[v1.1 – Mới]`** — AC được thêm mới ở version này.
- ✏️ **`[v1.1 – Sửa]`** — AC đã có từ trước, được chỉnh sửa nội dung ở version này.
- ❌ **`[v1.1 – Bỏ]`** — AC bị loại bỏ; giữ lại dòng và ~~gạch ngang~~ để truy vết, sẽ dọn ở version kế tiếp.

> Khi lên version mới (vd 1.2), các nhãn `v1.1` đã ổn định có thể gỡ bỏ để giữ tài liệu gọn; nhãn chỉ cần tồn tại trong 1 chu kỳ review.

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
- [ ] ✏️ **`[v1.1 – Sửa]`** Màn kết quả hiển thị theo thứ tự đầy đủ các khối: lá số Tứ trụ → biểu đồ ngũ hành & kết quả phân tích mệnh cục → Dụng thần → **khối "Cách cân bằng Dụng thần"** → **nhóm khối phương pháp cân bằng** (linh vật hộ thân, linh vật và hướng đặt, vòng tay, quả cầu, màu sắc, và các khối phương pháp khác) → chủ động cân bằng năng lượng → thông điệp kết luận. **Nhóm khối phương pháp cân bằng được sắp xếp theo đúng thứ tự danh sách phương pháp** ở khối "Cách cân bằng Dụng thần" (US-05, theo thứ tự server trả về).
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
- [ ] 🆕 **`[v1.1 – Mới]`** Hiển thị **Giới tính** người dùng đã nhập (ví dụ `"Nam"` / `"Nữ"`) trong khối thông tin người xem.
- [ ] **TH1 - Đủ giờ sinh**: hiển thị Giờ sinh kèm tên giờ Can Chi (ví dụ `05:30 · Giờ Mão`); bảng lá số lập đủ **4 trụ** `NĂM`, `THÁNG`, `NGÀY`, `GIỜ`.
- [ ] **TH2 - Thiếu giờ sinh**: không hiển thị giá trị giờ sinh; bảng lá số chỉ lập **3 trụ** `NĂM`, `THÁNG`, `NGÀY`, ẩn hoàn toàn cột trụ Giờ.
- [ ] Mỗi trụ hiển thị đầy đủ các hàng: nạp âm, **Thiên can**, **Địa chi**, **Tàng can**, **Thập thần**; hàng Thiên can/Địa chi kèm âm dương ngũ hành.
- [ ] Trụ Ngày được đánh dấu `"Nhật chủ"` ở hàng Thập thần; Tàng can được tô màu theo ngũ hành tương ứng.
- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị khối cách cục với tiêu đề gồm **2 dòng**: dòng 1 `"Lá số Bát tự của bạn thuộc cách cục: [tên cách cục]"` (ví dụ `"Lá số Bát tự của bạn thuộc cách cục: Kiến Lộc"`, phần `[tên cách cục]` là động theo lá số), dòng 2 `"thể hiện những đặc điểm nổi bật sau"`; kèm mục `"Điểm mạnh nổi bật"` và mục `"Điểm cần lưu ý"`.
- [ ] Nội dung luận giải của cách cục lấy từ sheet `Cách cục (tl cho lá số bát tự)` trong file dữ liệu Google Sheet, theo đúng tên cách cục của lá số.
- [ ] Mục `"Điểm cần lưu ý"` lấy nội dung từ đoạn bắt đầu bằng `"Tuy nhiên"` trong phần luận giải cách cục tương ứng.

> Logic tính toán và ẩn/hiện trụ Giờ giống bản Free, xem thêm [[Story-KichHoatNangLuongResult]] (US-01).

---

## US-03: Xem biểu đồ ngũ hành và kết quả phân tích mệnh cục

**User Story**
**As a** người dùng Premium đang xem kết quả lá số Bát tự
**I want to** xem biểu đồ ngũ hành, tỷ lệ % của 5 Ngũ hành và kết quả phân tích mệnh cục theo Can ngày cùng trạng thái năng lượng
**So that** tôi hiểu điểm Mạnh – Yếu của các Ngũ hành và trạng thái bản mệnh để biết cần cân bằng ở đâu

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

**1. Biểu đồ, bảng và tỷ lệ % ngũ hành (Happy path)**

- [ ] Hiển thị tiêu đề `"Biểu đồ Ngũ hành"` kèm đoạn mô tả ý nghĩa.
- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị biểu đồ cột thể hiện tỷ lệ phần trăm của 10 Thiên can, cho phép cuộn ngang khi vượt bề rộng màn hình. Mỗi cột hiển thị **Thập thần** tương ứng **ngay phía trên giá trị %** của cột đó.
- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị bảng chi tiết ngũ hành gồm các hàng Can, Thiên can, Địa chi, Trạng thái, Trường sinh. **Bỏ hàng Thập thần** (hàng `"Thần"`) khỏi bảng — nội dung Thập thần đã chuyển lên hiển thị trên biểu đồ cột.
- [ ] 🆕 **`[v1.1 – Mới]`** Ngay dưới biểu đồ ngũ hành, hiển thị hàng tổng hợp **% của 5 Ngũ hành** — Kim, Thủy, Mộc, Hỏa, Thổ — mỗi hành gồm icon, giá trị % và tên hành (ví dụ Kim 20%, Thủy 8%, Mộc 12%, Hỏa 20%, Thổ 18%); màu theo ngũ hành: Kim (xám), Thủy (xanh dương), Mộc (xanh lá), Hỏa (đỏ), Thổ (vàng/nâu).
- [ ] 🆕 **`[v1.1 – Mới]`** Dưới hàng %, hiển thị dòng mô tả cố định: `"Từ lá số Bát Tự của bạn, Lịch Việt phân tích điểm Mạnh – Yếu của 5 Ngũ hành để xác định trạng thái năng lượng trong mệnh cục."`
- [ ] Tỷ lệ ngũ hành được tính nhất quán, **không thay đổi** theo việc có hay thiếu giờ sinh; tổng tỷ lệ các thành phần đạt 100%.

**2. Kết quả phân tích mệnh cục (Happy path)**

- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị khối tiêu đề `"KẾT QUẢ PHÂN TÍCH MỆNH CỤC"`.
- [ ] 🆕 **`[v1.1 – Mới]`** Hiển thị đoạn mô tả Can ngày cố định: `"Can ngày là yếu tố đại diện cho bản mệnh trong lá số Bát Tự. Được xác định từ ngày sinh."`
- [ ] 🆕 **`[v1.1 – Mới]`** Hiển thị dòng `"Can ngày: [tên Can ngày]"` (ví dụ `"Tân Kim"`) và `"Trạng thái: [trạng thái năng lượng]"` (ví dụ `"Rất Yếu"`); phần Can ngày và Trạng thái là **động** theo lá số.
- [ ] 🆕 **`[v1.1 – Mới]`** Hiển thị đoạn phân tích theo Can ngày và trạng thái, ví dụ: `"Sau khi xét tháng sinh và sự tương tác giữa các Ngũ hành, Can ngày Tân Kim của bạn được xác định ở trạng thái Rất Yếu. Những xu hướng đáng chú ý trong lá số, từ thế mạnh sẵn có đến những điểm cần cân bằng để phát huy tốt hơn."`
- [ ] Hiển thị mục `"Năng lực nổi bật trong lá số của bạn"` kèm nội dung mô tả.
- [ ] Hiển thị mục `"Điều đang kiềm hãm tiềm năng của bạn"` kèm nội dung mô tả.
- [ ] Hiển thị mục `"Nếu năng lượng của bạn chưa được cân bằng"` kèm nội dung mô tả.
- [ ] Nội dung phân tích chuyên sâu từ ngũ hành lấy từ sheet `Nhật chủ 1` trong file dữ liệu Google Sheet.

**3. Mức độ chi tiết so với bản Free (Edge case)**

- [ ] Phần luận giải ngũ hành ở bản Premium chi tiết hơn bản Free: bản Free chỉ có nhận định cơ bản (2 mục), bản Premium hiển thị đủ 3 mục phân tích chuyên sâu nêu trên.

---

## US-04: Xem Dụng thần và lợi ích khi mệnh cục được cân bằng

**User Story**
**As a** người dùng Premium đang xem kết quả lá số Bát tự
**I want to** biết Dụng thần của mình và những lợi ích cụ thể theo từng nhóm (cảm xúc, công việc, phát triển bản thân, tài lộc) khi mệnh cục được cân bằng nhờ Dụng thần
**So that** tôi hiểu vì sao cần bổ sung Dụng thần và những chuyển biến tích cực có thể đạt được

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                          |
| --------------------- | ----------- | --------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Khối Dụng thần lấy dữ liệu từ lá số, hiển thị độc lập.              |
| **N**egotiable  | ✅          | Số nhóm lợi ích và cách trình bày gạch đầu dòng có thể tinh chỉnh. |
| **V**aluable    | ✅          | Nêu rõ lợi ích thực tế khi cân bằng mệnh cục, giá trị cao.            |
| **E**stimable   | ✅          | Nội dung lợi ích theo Dụng thần rõ ràng, dễ ước lượng.                |
| **S**mall       | ✅          | Một khối nội dung, gọn trong 1 sprint.                                        |
| **T**estable    | ✅          | Kiểm chứng được tên Dụng thần và 4 nhóm lợi ích.                      |

### Tiêu chí nghiệm thu

**1. Khối Dụng thần (Happy path)**

- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị tiêu đề `"Dụng thần của bạn"` kèm tên Dụng thần nổi bật (ví dụ `"Mộc"`) và đoạn mô tả **động**: `"Bổ sung yếu tố [Dụng thần] giúp điều hòa Ngũ Hành, hỗ trợ cân bằng mệnh cục khi [Can ngày] đang ở trạng thái [trạng thái]."` (ví dụ `"Bổ sung yếu tố Mộc giúp điều hòa Ngũ Hành, hỗ trợ cân bằng mệnh cục khi Tân Kim đang ở trạng thái rất yếu."`).

**2. Nhóm "Khi mệnh cục được cân bằng" — 4 nhóm lợi ích (thay cho 3 mục giá trị Dụng thần ở 1.0)**

- [ ] 🆕 **`[v1.1 – Mới]`** Hiển thị tiêu đề nhóm `"KHI MỆNH CỤC ĐƯỢC CÂN BẰNG"`.
- [ ] 🆕 **`[v1.1 – Mới]`** Nhóm gồm **4 mục lợi ích**, mỗi mục có icon, tiêu đề và danh sách gạch đầu dòng; mỗi gạch gồm **tiêu đề in đậm** + đoạn mô tả. Bốn mục (ví dụ theo Dụng thần Mộc):
  - [ ] Mục 1 `"Tự tin, linh hoạt & cảm xúc ổn định"`
  - [ ] Mục 2 `"Thúc đẩy công việc & sự nghiệp"`
  - [ ] Mục 3 `"Phát huy tiềm năng bản thân"`
  - [ ] Mục 4 `"Củng cố nền tảng tài lộc"`
- [ ] 🆕 **`[v1.1 – Mới]`** Tiêu đề 4 mục, các gạch đầu dòng và nội dung mô tả được sinh theo đúng Dụng thần của lá số hiện tại (ví dụ trên theo Dụng thần Mộc), không dùng nội dung mặc định cố định.
- [ ] 🆕 **`[v1.1 – Mới]`** Nội dung **Mục 1** (`"Tự tin, linh hoạt & cảm xúc ổn định"`) lấy từ sheet `KHI DỤNG THẦN ĐƯỢC CÂN BẰNG` trong file dữ liệu Google Sheet.
- [ ] Nội dung **Mục 2, Mục 3, Mục 4** (`"Thúc đẩy công việc & sự nghiệp"`, `"Phát huy tiềm năng bản thân"`, `"Củng cố nền tảng tài lộc"`) lấy từ sheet `Dụng thần` trong file dữ liệu Google Sheet, **chỉ lấy nội dung ở cột `Ưu điểm (Khi bổ sung)`**.

> Phần **màu sắc hỗ trợ / tương khắc** đã tách khỏi khối Dụng thần thành khối riêng — xem **US-11**.

---

## US-05: Xem khối "Cách cân bằng Dụng thần" (điều hướng nhanh)

> 🆕 **`[v1.1 – Mới]`** Khối mới ở v1.1, hiển thị **ngay dưới khối Dụng thần** (US-04). Là khối điều hướng nhanh: nhấn từng phương pháp sẽ tự cuộn tới khối chi tiết tương ứng bên dưới.

**User Story**
**As a** người dùng Premium đang xem kết quả lá số Bát tự
**I want to** thấy danh sách các cách cân bằng Dụng thần và nhấn vào từng cách để nhảy nhanh tới khối chi tiết tương ứng
**So that** tôi nắm nhanh các phương pháp cân bằng và tới thẳng phần mình quan tâm mà không phải cuộn thủ công

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                             |
| --------------------- | ----------- | ------------------------------------------------------------------------------------ |
| **I**ndependent | ✅          | Khối điều hướng dựa trên Dụng thần, hiển thị độc lập.                  |
| **N**egotiable  | ✅          | Số phương pháp, icon và văn bản mô tả có thể tinh chỉnh.                 |
| **V**aluable    | ✅          | Giúp nắm nhanh phương pháp và điều hướng thuận tiện tới khối cần xem. |
| **E**stimable   | ✅          | Danh sách theo Dụng thần + anchor cuộn, dễ ước lượng.                       |
| **S**mall       | ✅          | Một khối danh sách + hành vi cuộn, gọn trong 1 sprint.                         |
| **T**estable    | ✅          | Kiểm chứng được danh sách phương pháp và cuộn tới đúng khối.          |

### Tiêu chí nghiệm thu

**1. Hiển thị khối (Happy path)**

- [ ] 🆕 **`[v1.1 – Mới]`** Hiển thị khối ngay dưới khối Dụng thần (US-04), gồm tiêu đề `"Cách Cân Bằng Dụng Thần [Dụng thần]"` (ví dụ `"Cách Cân Bằng Dụng Thần Mộc"`) và dòng mô tả `"Bạn có thể cân bằng Dụng Thần [Dụng thần] qua những phương pháp sau:"`; phần `[Dụng thần]` động theo lá số.
- [ ] 🆕 **`[v1.1 – Mới]`** Danh sách các phương pháp **do server trả về**; hiển thị **theo đúng thứ tự server trả về** (số lượng phương pháp có thể thay đổi, không cố định 6).
- [ ] 🆕 **`[v1.1 – Mới]`** Mỗi phương pháp hiển thị một dòng gồm icon, tiêu đề, mô tả ngắn và mũi tên `>` bên phải. Ví dụ danh sách (theo Dụng thần Mộc):
  - [ ] `"Linh Vật Đặt"` — `"Đặt tại bàn làm việc hoặc trong nhà"`
  - [ ] `"Linh Vật Hộ Thân"` — `"Mang theo bên mình để cân bằng"`
  - [ ] `"Vòng Tay Đá"` — `"Mang theo bên mình để cân bằng"`
  - [ ] `"Màu Sắc Tương Hợp"` — `"Ưu tiên màu sắc hành [Dụng thần]"` (ví dụ `"Ưu tiên màu sắc hành Mộc"`)
  - [ ] `"Quả Cầu Ngũ Hành"` — `"Đặt tại bàn làm việc hoặc trong nhà"`
  - [ ] `"Hình Nền Điện Thoại"` — `"Dùng hình nền màu tương sinh"`

**2. Hành vi nhấn để cuộn (Interaction)**

- [ ] 🆕 **`[v1.1 – Mới]`** Nhấn vào từng phương pháp → màn **tự động cuộn** tới khối chi tiết tương ứng bên dưới.
- [ ] 🆕 **`[v1.1 – Mới]`** Các khối chi tiết bên dưới được **sắp xếp theo đúng thứ tự các phương pháp** trong danh sách (theo thứ tự server trả về) — thứ tự khối khớp với thứ tự danh sách điều hướng.
- [ ] 🆕 **`[v1.1 – Mới]`** Ánh xạ phương pháp → khối đích:
  - [ ] `"Linh Vật Hộ Thân"` → khối `"Linh vật hộ thân của bạn"` (US-06).
  - [ ] `"Linh Vật Đặt"` → khối `"Linh vật và hướng đặt để kích hoạt năng lượng"` (US-07).
  - [ ] `"Màu Sắc Tương Hợp"` → khối màu sắc (US-11).
  - [ ] `"Vòng Tay Đá"` → khối `"Vòng tay dành riêng cho bạn"` (US-09).
  - [ ] `"Quả Cầu Ngũ Hành"` → khối `"Quả cầu dành riêng cho bạn"` (US-10).
  - [ ] `"Hình Nền Điện Thoại"` → **khối đích cần bổ sung** (chưa định nghĩa).
- [ ] 🆕 **`[v1.1 – Mới]`** **Khi lá số không có linh vật phù hợp** (đang hiển thị khối `"Linh vật hỗ trợ bản mệnh"` — US-08): nhấn `"Linh Vật Đặt"` **hoặc** `"Linh Vật Hộ Thân"` đều cuộn tới khối `"Linh vật hỗ trợ bản mệnh"` (US-08).

---

## US-06: Xem linh vật hộ thân và gợi ý sản phẩm linh vật đeo

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

**1. Tiêu đề, hero & mô tả linh vật (Happy path — giao diện mới v1.1)**

- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị tiêu đề `"Linh vật hộ thân: [Tên linh vật]"` (căn giữa) và dòng phụ `"Kích hoạt [vai trò] của bạn"` (ví dụ `"Kích hoạt Thiên Lộc của bạn"`). **TH 2 linh vật**: phần `[Tên linh vật]` ở tiêu đề liệt kê các tên **ngăn cách bằng dấu phẩy** (ví dụ `"Linh vật hộ thân: Trâu, Mèo"`).
- [ ] 🆕 **`[v1.1 – Mới]`** Hiển thị **hình minh hoạ (hero) của linh vật** ngay dưới tiêu đề.
- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị đoạn mô tả lý do linh vật tương hợp, sinh theo lá số, ví dụ: `"Từ Dụng thần [Mộc] và Lộc – Mã – Quý Nhân trong lá số, [Tên linh vật] thuộc hành [Mộc] được xác định là linh vật tương hợp. Giúp cân bằng ngũ hành và kích hoạt [vai trò] dành cho bạn."` — các phần trong `[...]` động theo lá số. _(Đoạn này gộp/thay cho mục `"Vì sao linh vật này phù hợp?"` ở 1.0.)_

**2. Khối lợi ích (checklist)**

- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị khối lợi ích gồm các dòng có dấu tick, mỗi dòng **tiêu đề in đậm** + mô tả. Ví dụ (theo linh vật Trâu / vai trò Thiên Lộc):
  - [ ] `"Kích hoạt [vai trò]"` (ví dụ `"Kích hoạt Thiên Lộc"`): `"Mở rộng cơ hội tài chính và phát triển tài sản."`
  - [ ] `"Thúc đẩy sự nghiệp"`: `"Gia tăng cơ hội phát triển và thành quả trong công việc."`
  - [ ] `"Tăng cường bản mệnh"`: `"Tạo sự hài hòa và ổn định nguồn năng lượng cá nhân."`
- [ ] Nội dung lợi ích lấy từ sheet `Lợi ích nổi bật của LV hộ thân` trong file dữ liệu Google Sheet, sinh theo đúng linh vật/vai trò của lá số.

**3. Số lượng linh vật & edge cases**

- [ ] **TH1 - Đủ giờ sinh**: gợi ý tối đa **2 linh vật** hộ thân.
- [ ] **TH2 - Thiếu giờ sinh**: gợi ý tối đa **1 linh vật** hộ thân.
- [ ] ✏️ **`[v1.1 – Sửa]`** Khi có **2 linh vật** hộ thân: dưới tiêu đề chung hiển thị **đầy đủ ảnh minh hoạ linh vật. TH 2 linh vật thì **ngăn cách nhau bằng một đường kẻ thẳng**.

**4. Linh vật đeo dành riêng cho bạn (carousel)**

- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị mục `"Linh Vật Đeo Dành Riêng Cho Bạn"` kèm dòng mô tả: `"Linh vật đeo được lựa chọn theo Dụng thần [Mộc], với màu sắc và chất liệu phù hợp giúp cân bằng năng lượng."` (phần `[Mộc]` động theo Dụng thần).
- [ ] Danh sách sản phẩm dạng carousel cuộn ngang, **do server trả về**, gồm các sản phẩm phù hợp với linh vật hộ thân và Dụng thần của người dùng.
- [ ] **Negative path - server không trả về sản phẩm nào**: ẩn mục này (không hiển thị carousel rỗng).
- [ ] ✏️ **`[v1.1 – Sửa]`** Mỗi thẻ vật phẩm đều có nút `"Xem kết quả"`. Nội dung thẻ tùy theo có link sản phẩm hay không:
  - [ ] **TH có link sản phẩm**: thẻ hiển thị **thông tin sản phẩm đó** — ảnh sản phẩm, tên sản phẩm, **chất liệu** (ví dụ `"Thạch anh xanh"`, `"Obsidian Đen"`), mô tả ngắn.
  - [ ] **TH chưa có link sản phẩm**: thẻ chỉ hiển thị **ảnh minh hoạ linh vật** và **màu sắc** (không hiển thị tên/chất liệu/mô tả sản phẩm).
- [ ] Giới hạn số dòng hiển thị trên mỗi thẻ (áp dụng cho thẻ có link sản phẩm): tên sản phẩm tối đa **2 dòng**, chất liệu **1 dòng**, mô tả tối đa **2 dòng**; nội dung vượt giới hạn được cắt gọn kèm dấu `…`.
- [ ] Các thẻ sản phẩm có **kích thước bằng nhau** (cùng chiều rộng và chiều cao); nội dung dài/ngắn khác nhau không làm thay đổi kích thước thẻ.
- [ ] ✏️ **`[v1.1 – Sửa]`** Bấm vào **thẻ vật phẩm hoặc nút** đều chuyển tới **màn nội dung tổng quát của vật phẩm đó**, truyền định danh vật phẩm theo miniapp id = 20.
- [ ] Hiển thị chỉ báo chấm (dots) tương ứng số trang của carousel. Trường hợp có <= 2 card thì ẩn chấm báo đi

---

## US-07: Xem linh vật và hướng đặt để kích hoạt năng lượng theo 4 mục tiêu

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

**1. Tiêu đề & mô tả khối (giao diện mới v1.1)**

- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị tiêu đề khối `"LINH VẬT ĐỂ BÀN & HƯỚNG ĐẶT KÍCH HOẠT NĂNG LƯỢNG"` kèm đoạn mô tả cố định: `"Dựa trên Lộc – Mã – Quý Nhân trong lá số, linh vật được lựa chọn cùng phương vị và thời điểm phù hợp để đặt kích hoạt cát khí."`

**2. Các mục tiêu kích hoạt (Dương Quý Nhân / Âm Quý Nhân / Lộc / Mã)**

- [ ] Không phải lá số nào cũng có đủ 4 mục tiêu kích hoạt; chỉ hiển thị các mục tiêu mà lá số có.
- [ ] Các mục tiêu kích hoạt có trong lá số được sắp xếp theo đúng thứ tự cố định: `"Kích hoạt Dương Quý Nhân"` → `"Kích hoạt Âm Quý Nhân"` → `"Kích hoạt Lộc"` → `"Kích hoạt Mã"` (bỏ qua mục không có, không đổi thứ tự các mục còn lại).
- [ ] Mỗi mục hiển thị có biểu tượng, tiêu đề và dòng khẩu hiệu ngắn cố định (theo thiết kế) như sau:
  - [ ] `"Kích hoạt Dương Quý Nhân"` — khẩu hiệu: `"Thu hút người đồng hành – Vạn sự hanh thông"`
  - [ ] `"Kích hoạt Âm Quý Nhân"` — khẩu hiệu: `"Gia tăng bảo hộ – Hóa giải trở ngại"`
  - [ ] `"Kích hoạt Lộc"` — khẩu hiệu: `"Mở rộng tài lộc – Khởi thông cơ hội"`
  - [ ] `"Kích hoạt Mã"` — khẩu hiệu: `"Mở đường phát triển – Đón vận may – Bứt phá thành công"`
- [ ] ✏️ **`[v1.1 – Sửa]`** Mỗi mục hiển thị **đoạn mô tả cơ sở chọn linh vật** sinh theo lá số, ví dụ: `"Từ lá số Bát tự của bạn, Can tuổi [Giáp] có [Dương Quý Nhân] tại [Sửu]. Kết hợp với Dụng thần [Mộc]. Lịch Việt xác định các linh vật đặt phù hợp để hỗ trợ kích hoạt [Dương Quý Nhân]."` — các phần `[...]` động theo lá số; nội dung lấy từ **sheet phần Linh vật đặt** trong file dữ liệu Google Sheet.
- [ ] ✏️ **`[v1.1 – Sửa]`** Mỗi mục hiển thị **khối lợi ích dạng tick** (dấu ✓) gồm các dòng lợi ích tương ứng mục tiêu đó (ví dụ Dương Quý Nhân: `"Thu hút người đồng hành phù trợ, giúp công việc thuận lợi hơn."`, `"Tăng cường các mối quan hệ tốt đẹp, tạo thêm sự tin tưởng và gắn kết."`, `"Gia tăng cơ hội nhận được sự hỗ trợ đúng lúc trong công việc và cuộc sống."`); nội dung lợi ích cũng lấy từ **sheet phần Linh vật đặt** trong file dữ liệu Google Sheet.

**3. Danh sách linh vật đặt của từng mục (thẻ dọc 1x1)**

- [ ] 🆕 **`[v1.1 – Mới]`** Mỗi mục hiển thị tiêu đề phụ `"Linh vật kích hoạt [tên mục tiêu] dành cho bạn"` (ví dụ `"Linh vật kích hoạt Dương Quý Nhân dành cho bạn"`).
- [ ] ✏️ **`[v1.1 – Sửa]`** Danh sách linh vật dạng **thẻ dọc 1x1** (stack các card ngang); mỗi thẻ hiển thị: ảnh linh vật, tên linh vật • **Màu [màu]** (ví dụ `"Khỉ • Màu Vàng"`), dòng `"Hướng đặt: [hướng]"` (ví dụ `"Chính Đông"`) và độ số góc (ví dụ `"82,5°–97,5°"`), kèm nút `"Xem kết quả"`.
- [ ] ✏️ **`[v1.1 – Sửa]`** **Dù có hay không có link sản phẩm vật lý**, mỗi thẻ đều có nút `"Xem kết quả"`. Nhấn vào **cả thẻ hoặc nút** đều chuyển tới **màn nội dung tổng quát của vật phẩm đó** (truyền định danh vật phẩm theo miniapp id = 20).
- [ ] Linh vật, màu sắc, hướng đặt và độ số của tất cả các mục được sinh theo đúng lá số và Dụng thần hiện tại.

---

## US-08: Xử lý khi không có linh vật phù hợp với lá số (khối thay thế "Linh vật hỗ trợ bản mệnh")

> **Prototype tham chiếu**: [[KichHoatNangLuong_Result_Premium_KhongLinhVat.html]] (`prototype/KichHoatNangLuong_Result_Premium_KhongLinhVat.html`)

**User Story**
**As a** người dùng Premium có lá số không cho ra linh vật hộ thân/linh vật đặt phù hợp (tất cả linh vật đều xung, hình, hại hoặc phá với lá số)
**I want to** thay vì thấy khối trống, tôi thấy một khối `"Linh vật hỗ trợ bản mệnh"` giải thích rõ vì sao không có linh vật phù hợp và gợi ý vật phẩm thay thế theo Dụng thần
**So that** tôi hiểu được cơ sở kết luận của hệ thống và vẫn có hướng bổ sung năng lượng thay thế, không bị gián đoạn trải nghiệm

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                                                            |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Là nhánh trạng thái rỗng của các khối linh vật, xử lý độc lập.                                        |
| **N**egotiable  | ✅          | Nội dung giải thích và số sản phẩm gợi ý thay thế có thể tinh chỉnh.                                |
| **V**aluable    | ✅          | Biến trạng thái rỗng thành nội dung có giá trị: minh bạch cơ sở + gợi ý thay thế bán được hàng. |
| **E**stimable   | ✅          | Logic đối chiếu xung/hình/hại/phá và ánh xạ sản phẩm theo Dụng thần rõ ràng.                         |
| **S**mall       | ✅          | Một khối empty-state có cấu trúc cố định, gọn trong 1 sprint.                                              |
| **T**estable    | ✅          | Kiểm chứng được nội dung giải thích và danh sách sản phẩm thay thế dạng list 1x1.                   |

### Tiêu chí nghiệm thu

**1. Khối "Linh vật hỗ trợ bản mệnh" (giao diện mới v1.1)**

- [ ] Khi lá số **không có** linh vật hộ thân/linh vật đặt phù hợp: **thay** cả hai khối `"Linh vật hộ thân của bạn"` (US-06) và `"Linh vật và hướng đặt để kích hoạt năng lượng"` (US-07) bằng **một khối** `"Linh vật hỗ trợ bản mệnh"`.
- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị **tiêu đề khối** `"Linh vật hỗ trợ bản mệnh"` (ở đầu khối).
- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị đoạn mô tả: `"Sau khi phân tích lá số Bát tự của bạn, các linh vật đều tồn tại yếu tố Xung, Hình, Hại hoặc Phá. Nên Lịch Việt không đề xuất linh vật cho bạn ở thời điểm này."` — cụm `"Xung, Hình, Hại hoặc Phá"` được tô nhấn màu đỏ.
- [ ] Hiển thị **biểu tượng khiên bảo hộ** (căn giữa) và tiêu đề căn giữa `"Không có linh vật phù hợp với lá số của bạn"`.
- [ ] 🆕 **`[v1.1 – Mới]`** Hiển thị đoạn mô tả gợi ý thay thế: `"Thay vì linh vật, bạn có thể bổ xung yếu tố [Mộc] thông qua vòng tay hoặc quả cầu đá có màu sắc và chất liệu tương hợp. Giúp mệnh cục hướng đến trạng thái cân bằng hơn."` — phần `[Mộc]` động theo Dụng thần của lá số.

**2. Danh sách sản phẩm gợi ý thay thế (thẻ dọc 1x1)**

- [ ] ✏️ **`[v1.1 – Sửa]`** Hiển thị danh sách sản phẩm gợi ý thay thế dạng **thẻ dọc 1x1** (stack các card ngang); mỗi thẻ gồm: ảnh, tên sản phẩm (ví dụ `"Vòng tay Trầm Hương 108 hạt"`, `"Mặt dây chuyền Ngọc Bích"`, `"Quả cầu Đá Ngọc Bích an vị"`), **chất liệu** (ví dụ `"Trầm tự nhiên Mộc"`, `"Ngọc tự nhiên Mộc"`, `"Đá tự nhiên Mộc"`), mô tả ngắn, kèm nút `"Xem kết quả"`.
- [ ] Danh sách sản phẩm **do server trả về**, phù hợp với Dụng thần của người dùng.
- [ ] ✏️ **`[v1.1 – Sửa]`** Bấm vào **thẻ hoặc nút `"Xem kết quả"`** đều chuyển tới **màn nội dung tổng quát của vật phẩm đó** (truyền định danh vật phẩm theo miniapp id = 20).
- [ ] **Negative path - server không trả về sản phẩm thay thế nào**: ẩn phần danh sách sản phẩm (không hiển thị khối rỗng); phần giải thích + khiên bảo hộ vẫn hiển thị.

**3. Bỏ khỏi giao diện mới (v1.1 – Bỏ)**

- [ ] ❌ **`[v1.1 – Bỏ]`** ~~Bảng "Chi tiết kết quả đối chiếu" (2 cột, liệt kê linh vật ứng viên + lý do Xung/Hình/Hại/Phá theo từng mục tiêu)~~ — không còn ở giao diện mới.
- [ ] ❌ **`[v1.1 – Bỏ]`** ~~Khối "Kết luận" riêng ("Với tiêu chí chỉ đề xuất những lựa chọn tốt nhất...")~~ — không còn; ý "không đề xuất linh vật" đã gộp vào đoạn mô tả đầu khối.

**4. Tính liền mạch của màn**

- [ ] Khối `"Linh vật hỗ trợ bản mệnh"` nằm đúng vị trí hai khối linh vật bị thay thế; các khối phía trên (Dụng thần) và phía dưới (Chủ động cân bằng năng lượng) nối liền tự nhiên qua đường phân cách chuẩn.
- [ ] 🆕 **`[v1.1 – Mới]`** Ở trạng thái này, khối đã gợi ý vòng tay/quả cầu/vật phẩm thay thế → **ẩn khối `"Vòng tay dành riêng cho bạn"`** (US-09) và khối `"Quả cầu dành riêng cho bạn"` (US-10) để tránh trùng lặp.

---

## US-09: Xem khối "Vòng tay dành riêng cho bạn" (khối riêng)

> 🆕 **`[v1.1 – Mới]`** Khối mới ở v1.1 — là khối đích của phương pháp `"Vòng Tay Đá"` ở khối "Cách cân bằng Dụng thần" (US-05).

**User Story**
**As a** người dùng Premium đang xem kết quả lá số Bát tự
**I want to** xem các mẫu vòng tay đá phù hợp với Dụng thần của mình
**So that** tôi có thể chọn vòng tay đồng hành giúp cân bằng năng lượng

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                       |
| --------------------- | ----------- | ------------------------------------------------------------------------------ |
| **I**ndependent | ✅          | Khối vòng tay lấy sản phẩm theo Dụng thần, hiển thị độc lập.       |
| **N**egotiable  | ✅          | Số sản phẩm và bố cục carousel có thể tinh chỉnh.                     |
| **V**aluable    | ✅          | Kết nối luận giải với sản phẩm, tạo giá trị và cơ hội bán hàng. |
| **E**stimable   | ✅          | Danh sách sản phẩm do server trả về, dễ ước lượng.                   |
| **S**mall       | ✅          | Một khối carousel, gọn trong 1 ngày làm việc.                            |
| **T**estable    | ✅          | Kiểm chứng được danh sách vòng tay và thẻ sản phẩm.                 |

### Tiêu chí nghiệm thu

- [ ] 🆕 **`[v1.1 – Mới]`** Hiển thị mục `"Vòng Tay Dành Riêng Cho Bạn"` kèm dòng mô tả: `"Vòng tay được lựa chọn theo Dụng thần [Mộc], với màu sắc và chất liệu phù hợp giúp cân bằng năng lượng."` (phần `[Mộc]` động theo Dụng thần).
- [ ] 🆕 **`[v1.1 – Mới]`** **Khi lá số không có linh vật phù hợp** (đang hiển thị khối `"Linh vật hỗ trợ bản mệnh"` — US-08, đã có mục `"Gợi ý thay thế phù hợp"`): **ẩn khối `"Vòng tay dành riêng cho bạn"`** này để tránh trùng lặp gợi ý.
- [ ] Danh sách sản phẩm vòng tay dạng **carousel cuộn ngang**, **do server trả về**, phù hợp với Dụng thần của người dùng.
- [ ] **Negative path - server không trả về sản phẩm nào**: ẩn khối này (không hiển thị carousel rỗng).
- [ ] Mỗi thẻ đều có nút `"Xem kết quả"`. Thẻ hiển thị thông tin sản phẩm — ảnh, tên (ví dụ `"Vòng Tay Đá Thạch Anh Vàng Tự Nhiên"`), **chất liệu** (ví dụ `"Thạch anh Vàng"`, `"Obsidian Vàng"`), mô tả ngắn nếu có.
- [ ] Giới hạn số dòng trên mỗi thẻ (thẻ có link sản phẩm): tên tối đa **2 dòng**, chất liệu **1 dòng**, mô tả tối đa **2 dòng**; nội dung vượt giới hạn cắt gọn kèm dấu 3 chấm.
- [ ] Các thẻ có **kích thước bằng nhau** (cùng chiều rộng và chiều cao).
- [ ] Bấm vào **thẻ hoặc nút `"Xem kết quả"`** đều chuyển tới **màn nội dung tổng quát của vật phẩm đó** (truyền định danh vật phẩm theo miniapp id = 20).
- [ ] Hiển thị chỉ báo chấm (dots) tương ứng số trang của carousel; trường hợp có ≤ 2 card thì ẩn chấm báo.

---

## US-10: Xem khối "Quả cầu dành riêng cho bạn" (khối riêng)

> 🆕 **`[v1.1 – Mới]`** Khối mới ở v1.1 — là khối đích của phương pháp `"Quả Cầu Ngũ Hành"` ở khối "Cách cân bằng Dụng thần" (US-05).

**User Story**
**As a** người dùng Premium đang xem kết quả lá số Bát tự
**I want to** xem các mẫu quả cầu phong thủy phù hợp với Dụng thần của mình
**So that** tôi có thể chọn quả cầu để bàn giúp bổ trợ cân bằng cho mệnh cục

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                       |
| --------------------- | ----------- | ------------------------------------------------------------------------------ |
| **I**ndependent | ✅          | Khối quả cầu lấy sản phẩm theo Dụng thần, hiển thị độc lập.       |
| **N**egotiable  | ✅          | Số sản phẩm và bố cục carousel có thể tinh chỉnh.                     |
| **V**aluable    | ✅          | Kết nối luận giải với sản phẩm, tạo giá trị và cơ hội bán hàng. |
| **E**stimable   | ✅          | Danh sách sản phẩm do server trả về, dễ ước lượng.                   |
| **S**mall       | ✅          | Một khối carousel, gọn trong 1 ngày làm việc.                            |
| **T**estable    | ✅          | Kiểm chứng được danh sách quả cầu và thẻ sản phẩm.                 |

### Tiêu chí nghiệm thu

- [ ] 🆕 **`[v1.1 – Mới]`** Hiển thị mục `"Quả Cầu Dành Riêng Cho Bạn"` kèm dòng mô tả: `"Quả cầu được lựa chọn đặt theo Dụng thần [Mộc] giúp bổ trợ cân bằng cho mệnh cục."` (phần `[Mộc]` động theo Dụng thần).
- [ ] 🆕 **`[v1.1 – Mới]`** **Khi lá số không có linh vật phù hợp** (đang hiển thị khối `"Linh vật hỗ trợ bản mệnh"` — US-08, đã gợi ý vòng tay/quả cầu thay thế): **ẩn khối `"Quả cầu dành riêng cho bạn"`** này để tránh trùng lặp.
- [ ] Danh sách sản phẩm quả cầu dạng **carousel cuộn ngang**, **do server trả về**, phù hợp với Dụng thần của người dùng.
- [ ] **Negative path - server không trả về sản phẩm nào**: ẩn khối này (không hiển thị carousel rỗng).
- [ ] Mỗi thẻ đều có nút `"Xem kết quả"`. Thẻ hiển thị thông tin sản phẩm — ảnh, tên (ví dụ `"Quả Cầu Phong Thuỷ Đá Thạch Anh Vàng"`), **chất liệu** (ví dụ `"Thạch anh vàng"`, `"Obsidian Vàng"`), mô tả ngắn nếu có.
- [ ] Giới hạn số dòng trên mỗi thẻ: tên tối đa **2 dòng**, chất liệu **1 dòng**, mô tả tối đa **2 dòng**; nội dung vượt giới hạn cắt gọn kèm dấu 3 chấm.
- [ ] Các thẻ có **kích thước bằng nhau** (cùng chiều rộng và chiều cao).
- [ ] Bấm vào **thẻ hoặc nút `"Xem kết quả"`** đều chuyển tới **màn nội dung tổng quát của vật phẩm đó** (truyền định danh vật phẩm theo miniapp id = 20).
- [ ] Hiển thị chỉ báo chấm (dots) tương ứng số trang của carousel; trường hợp có ≤ 2 card thì ẩn chấm báo.

---

## US-11: Xem khối gợi ý màu sắc theo Dụng thần (khối riêng)

> 🆕 **`[v1.1 – Mới]`** US này tách ra từ phần màu sắc trước đây nằm trong khối Dụng thần (US-04). Nội dung màu sắc giữ nguyên như 1.0, chỉ đổi thành **khối hiển thị riêng**.

**User Story**
**As a** người dùng Premium đang xem kết quả lá số Bát tự
**I want to** xem gợi ý màu sắc hỗ trợ và màu sắc tương khắc theo Dụng thần của mình ở một khối riêng
**So that** tôi có thể chọn màu trang phục, xe cộ và không gian sống giúp nuôi dưỡng và cân bằng năng lượng bản mệnh

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                      |
| --------------------- | ----------- | ----------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Khối màu sắc lấy dữ liệu từ Dụng thần, hiển thị độc lập.        |
| **N**egotiable  | ✅          | Cách trình bày bảng màu và số lượng màu có thể tinh chỉnh.       |
| **V**aluable    | ✅          | Gợi ý ứng dụng ngay vào đời sống, giá trị thực tế cao.            |
| **E**stimable   | ✅          | Mapping Dụng thần → màu sắc rõ ràng, dễ ước lượng.                |
| **S**mall       | ✅          | Một khối nội dung, gọn trong 1 ngày làm việc.                          |
| **T**estable    | ✅          | Kiểm chứng được danh sách màu hỗ trợ/tương khắc theo Dụng thần. |

### Tiêu chí nghiệm thu

- [ ] 🆕 **`[v1.1 – Mới]`** Hiển thị phần màu sắc thành **một khối riêng**, tách khỏi khối Dụng thần (US-04); vị trí đặt trước khối `"Chủ động cân bằng năng lượng"` (US-12).
- [ ] ✏️ **`[v1.1 – Sửa]`** Khối màu sắc **hiển thị ở cả trường hợp đủ giờ sinh và thiếu giờ sinh** — không phụ thuộc vào việc có hay thiếu giờ sinh (trước đây TH đủ giờ sinh không hiển thị màu sắc; nay hiển thị ở cả hai).
- [ ] Hiển thị mục `"Màu sắc hỗ trợ"` kèm danh sách màu (ví dụ Đen, Xanh lam đậm, Xanh lục, Xanh phấn), mỗi màu có ô màu và tên.
- [ ] Hiển thị mục `"Màu sắc tương khắc"` kèm danh sách màu (ví dụ Trắng, Ghi xám), mỗi màu có ô màu và tên.
- [ ] Danh sách màu hỗ trợ và tương khắc được sinh theo đúng Dụng thần của lá số hiện tại.
- [ ] Hiển thị dòng gợi ý ứng dụng màu sắc `"Gợi ý màu sắc cho trang phục, xe cộ và không gian sống."` — nội dung cố định.
- [ ] Nội dung khối màu sắc (danh sách màu hỗ trợ/tương khắc) lấy từ sheet `Dụng thần` trong file dữ liệu Google Sheet.

---

## US-12: Xem gợi ý chủ động cân bằng năng lượng và thông điệp kết luận

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
- **Nguồn sản phẩm linh vật đeo** (carousel `"Mẫu linh vật đeo phù hợp"` ở US-06): server trả về danh sách sản phẩm phù hợp với linh vật hộ thân và Dụng thần của người dùng.
- **Nguồn sản phẩm ở 4 mục kích hoạt** (thẻ lựa chọn có nút `"Xem sản phẩm"` ở US-07): cần làm rõ cùng nguồn với carousel linh vật đeo hay lấy theo tiêu chí khác.
- **Khối "Cách cân bằng Dụng thần" (US-05)**: danh sách phương pháp **do server trả về** (kèm thứ tự). Cần bổ sung 3 khối đích còn thiếu cho `"Vòng Tay Đá"`, `"Hình Nền Điện Thoại"`, `"Quả Cầu Ngũ Hành"` để nhấn cuộn tới được.
- **Màn chi tiết sản phẩm** khi bấm `"Xem sản phẩm"` nằm trên web app, ngoài phạm vi màn kết quả. Điều hướng **mở trong app** (webview), truyền các định danh sản phẩm sang web app **theo đúng cách đang áp dụng ở phần Hương Cát Việt**.
