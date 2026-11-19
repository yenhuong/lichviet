---
id: Story-KichHoatNangLuong
type: story
status: draft
project: Lich_Viet
created: 2026-07-16
updated: 2026-11-17
version: 2.0
tags: [kich-hoat-nang-luong, ngu-hanh, input, intro]
linked-to: [[Story-TuViTaiChinhInput]]
---
# User Stories - Màn hình Kích hoạt năng lượng cá nhân

Tài liệu này định nghĩa các user story cho hai màn hình thuộc tính năng **Kích hoạt năng lượng cá nhân**, được viết theo chuẩn INVEST và định dạng Bullet Checklist (dựa trên workflow `gen-user-story`).

- Màn giới thiệu: `KichHoatNangLuong_Intro.html`
- Màn nhập thông tin: `KichHoatNangLuong_Input.html`

**Prototype tham chiếu**: [[KichHoatNangLuong_Intro.html]], [[KichHoatNangLuong_Input.html]]

---

## Lịch sử thay đổi (Changelog)

| Version | Ngày      | Nội dung thay đổi                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0     | 2026-07-16 | Bản khởi tạo — US-01 → US-06.                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.0     | 2026-11-17 | Sửa US-01; xoá US-05 cũ (US-06 → US-05). |

> Version của file đi theo version tính năng Kích hoạt năng lượng. Bản cũ tra cứu qua `git log`/`git diff`.

**Quy ước nhãn thay đổi trên từng AC**: 🆕 **`[v2.0 – Mới]`** AC thêm mới · ✏️ **`[v2.0 – Sửa]`** AC sửa nội dung. AC bị bỏ được xoá khỏi story (bản cũ xem qua git).

---

## US-01: Xem giới thiệu và lợi ích của tính năng kích hoạt năng lượng

**User Story**
**As a** người dùng quan tâm đến phong thủy và cân bằng năng lượng bản thân
**I want to** xem phần giới thiệu về tính năng cùng danh sách kết quả sẽ nhận được trước khi nhập thông tin
**So that** tôi hiểu rõ giá trị của tính năng và có động lực tiếp tục cung cấp thông tin cá nhân

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                |
| --------------------- | ----------- | ----------------------------------------------------------------------- |
| **I**ndependent | ✅          | Màn giới thiệu tĩnh, không phụ thuộc dữ liệu người dùng.    |
| **N**egotiable  | ✅          | Bố cục, nội dung lợi ích và hình minh họa có thể tinh chỉnh. |
| **V**aluable    | ✅          | Truyền tải giá trị tính năng, tăng tỷ lệ chuyển đổi.        |
| **E**stimable   | ✅          | Màn hình tĩnh có scroll, dễ ước lượng.                         |
| **S**mall       | ✅          | Hoàn thành nhanh trong vài giờ làm việc.                          |
| **T**estable    | ✅          | Kiểm thử hiển thị nội dung và hành vi cuộn rõ ràng.           |

### Tiêu chí nghiệm thu

**1. Nội dung giới thiệu (Happy path)**

- [ ] ✏️ **`[v2.0 – Sửa]`** Header hiển thị tiêu đề `"KÍCH HOẠT"`, dòng phụ `"Năng lượng cá nhân"` có hoạ tiết trang trí hai bên, và 2 dòng tagline `"Khám phá Ngũ hành bản mệnh"` / `"Tìm phương pháp cân bằng phù hợp"`.
- [ ] Hiển thị hình minh họa sơ đồ ngũ hành (Kim, Thủy, Mộc, Hỏa, Thổ) với nhân vật ở giữa.
- [ ] ✏️ **`[v2.0 – Sửa]`** Dưới hình minh hoạ hiển thị câu hỏi (chữ đỏ, căn giữa) `"Bạn đã rất nỗ lực nhưng công việc, tài chính và cuộc sống vẫn chưa như mong đợi?"` và đoạn mô tả `"Theo Bát tự, sự cân bằng Ngũ hành có thể giúp lý giải những thăng trầm trong cuộc sống. Khám phá bản mệnh để tìm ra yếu tố cần bổ trợ và phương pháp cân bằng phù hợp."`.
- [ ] ✏️ **`[v2.0 – Sửa]`** Hiển thị khung danh sách 4 mục, mỗi mục gồm icon, tiêu đề và mô tả, phân cách bằng đường kẻ:

  - [ ] 🆕 **`[v2.0 – Mới]`** **Khám phá trạng thái Ngũ hành**: `"Kim-Mộc-Thuỷ-Hoả-Thổ trong bản mệnh của bạn đang tương tác như thế nào?"`
  - [ ] 🆕 **`[v2.0 – Mới]`** **Xác định Dụng Thần cần bổ trợ**: `"Ngũ hành nào cần được bổ sung để điều hoà năng lượng và hỗ trợ phát triển thuận lợi?"`
  - [ ] 🆕 **`[v2.0 – Mới]`** **Lựa chọn phương pháp cân bằng**: `"Khám phá các vật phẩm, vòng tay, tháp, quả cầu hợp với Dụng Thần để cân bằng Ngũ hành."`
  - [ ] 🆕 **`[v2.0 – Mới]`** **Bạn có thể kích hoạt Lộc – Mã – Quý Nhân?**: `"Sau khi cân bằng Ngũ hành, xem bạn có đủ điều kiện kích hoạt hay không. Cùng ngày giờ và hướng đặt phù hợp."`
- [ ] Banner video `"TÍNH NĂNG MỚI – KÍCH HOẠT NĂNG LƯỢNG CÁ NHÂN"`, chỉ hiển thị khi video được cấu hình trong config.

**2. Hành vi cuộn và thanh tiêu đề (Interaction)**

- [ ] Khi mới vào màn hình, thanh tiêu đề trên cùng ẩn tiêu đề (trong suốt).
- [ ] Khi cuộn nội dung quá ngưỡng → thanh tiêu đề hiện nền và hiển thị tiêu đề `"Kích hoạt năng lượng cá nhân"`.
- [ ] Khi cuộn về đầu trang → thanh tiêu đề trở lại trạng thái trong suốt ban đầu.

**3. Điều hướng (Happy path & Edge case)**

- [ ] Nút CTA `"Kích hoạt năng lượng của bạn"` pin cố định ở cuối màn
- [ ] Bấm nút CTA → điều hướng sang màn hình nhập thông tin (`KichHoatNangLuong_Input.html`).
- [ ] Bấm vào bất kỳ vị trí nào trên banner video → mở màn phát video toàn màn hình.
- [ ] Bấm nút quay lại (mũi tên) ở góc trên → quay về màn hình trước đó.

---

## US-02: Nhập thông tin để tạo bản đồ ngũ hành cá nhân

**User Story**
**As a** người dùng muốn nhận phân tích năng lượng cá nhân hóa
**I want to** nhập Họ tên, Ngày sinh dương lịch, Giờ sinh và Giới tính vào biểu mẫu
**So that** hệ thống có đủ dữ liệu để lập bản đồ ngũ hành chính xác dành riêng cho tôi

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                         |
| --------------------- | ----------- | ---------------------------------------------------------------- |
| **I**ndependent | ✅          | Biểu mẫu nhập liệu hoạt động độc lập.                  |
| **N**egotiable  | ✅          | Bố cục trường nhập và thông báo có thể điều chỉnh.  |
| **V**aluable    | ✅          | Dữ liệu đầu vào bắt buộc để tạo kết quả phân tích. |
| **E**stimable   | ✅          | Biểu mẫu nhập liệu cơ bản, dễ ước lượng.              |
| **S**mall       | ✅          | Thực hiện nhanh trong vài giờ làm việc.                    |
| **T**estable    | ✅          | Có kịch bản hợp lệ và không hợp lệ rõ ràng.           |

### Tiêu chí nghiệm thu

**1. Giao diện biểu mẫu đầy đủ (Happy path)**

- [ ] Thanh tiêu đề hiển thị `"Thông tin của bạn"`.
- [ ] Hiển thị đoạn mô tả `"Nhập thông tin để tạo bản đồ ngũ hành cá nhân hóa theo ngày sinh của bạn."`.
- [ ] Hiển thị biểu mẫu gồm 4 trường thông tin:
  - [ ] **Họ tên**: trường nhập văn bản, hiện gợi ý `"Nhập họ tên"`, kèm nút `"Chọn thành viên"` ở góc phải.
  - [ ] **Ngày sinh dương lịch**: trường chọn ngày, hiện gợi ý `"Chọn ngày sinh"`; nhấn vào mở popup chọn ngày sinh (dd/mm/yyyy).
  - [ ] **Giờ sinh**: trường chọn giờ có nhãn phụ `"(khuyến nghị)"` và dòng gợi ý `"Thêm giờ sinh để kết quả phân tích chi tiết, chính xác hơn."`; nhấn vào mở popup chọn giờ (hh:mm).
  - [ ] **Giới tính**: hiển thị dạng radio button hình tròn (Nam/Nữ), mặc định chọn "Nam".
- [ ] Hiển thị nút `"Xem kết quả phân tích"` kèm dòng ghi chú bảo mật `"🔒 Thông tin của bạn được bảo mật tuyệt đối"`.

**2. Tương tác và định dạng (Interaction)**

- [ ] Khi chọn ngày sinh ở popup → hiển thị theo định dạng `DD/MM/YYYY` (ví dụ `15/06/1995`) với văn bản in đậm nổi bật.
- [ ] Khi chọn giờ sinh ở popup → hiển thị theo định dạng `HH:MM` (ví dụ `08:30`) với văn bản in đậm nổi bật.
- [ ] Khi vào màn này, sẽ mặc định hiển thị thông tin của người dùng. Các lần vào sau sẽ hiện thông tin xem gần nhất
- [ ] Bấm nút quay lại (mũi tên) ở góc trên bên trái → quay về màn hình trước đó.

**3. Xác thực dữ liệu và gửi biểu mẫu (Negative path & Edge case)**

- [ ] Khi bấm `"Xem kết quả phân tích"` nhưng chưa chọn ngày sinh dương lịch → hệ thống chặn lại và hiển thị toast `"Vui lòng chọn ngày sinh dương lịch!"`.
- [ ] Khi điền hợp lệ → nhấn nút [Xem kết quả phân tích] -> chuyển sang màn hình kết quả luận giải

---

## US-03: Hiển thị Can Chi và Mệnh ngũ hành động theo ngày sinh

**User Story**
**As a** người dùng đang nhập ngày sinh
**I want to** thấy thông tin năm Can Chi và Mệnh ngũ hành hiện ra ngay khi chọn ngày sinh
**So that** tôi được xác nhận trực quan rằng hệ thống đã nhận đúng thông tin và thấy được kết quả sơ bộ tương ứng

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                        |
| --------------------- | ----------- | --------------------------------------------------------------- |
| **I**ndependent | ✅          | Chỉ lắng nghe sự thay đổi của trường ngày sinh.        |
| **N**egotiable  | ✅          | Cách hiển thị và cách tính Mệnh có thể điều chỉnh.  |
| **V**aluable    | ✅          | Tạo phản hồi tức thời, tăng niềm tin vào tính năng.   |
| **E**stimable   | ✅          | Logic tra cứu vòng 60 năm ở client-side, dễ ước lượng. |
| **S**mall       | ✅          | Viết mã lắng nghe sự kiện và tra bảng dữ liệu.         |
| **T**estable    | ✅          | Kiểm thử bằng cách chọn nhiều năm sinh khác nhau.       |

### Tiêu chí nghiệm thu

**1. Hiển thị thông tin động (Happy path)**

- [ ] Khi chọn ngày sinh hợp lệ → hiển thị khối thông tin phụ ngay dưới trường ngày sinh.
- [ ] Khối thông tin hiển thị tên năm Can Chi in đậm (ví dụ `Ất Hợi`) tương ứng năm sinh.
- [ ] Khối thông tin hiển thị Mệnh ngũ hành tương ứng (ví dụ `Mệnh Sơn Đầu Hỏa`).

**2. Trạng thái ẩn/hiện (Edge case & Negative path)**

- [ ] **Chưa chọn ngày sinh**: khối thông tin Can Chi và Mệnh không hiển thị.
- [ ] Khi xóa/hủy chọn ngày sinh đã chọn → khối thông tin ẩn đi và trường ngày trở lại gợi ý `"Chọn ngày sinh"`.
- [ ] Khi đổi sang ngày sinh khác → thông tin Can Chi và Mệnh cập nhật theo năm sinh mới.

---

## US-04: Chọn nhanh thành viên gia đình để tự động điền thông tin

**User Story**
**As a** người dùng muốn xem kết quả cho người thân trong gia đình
**I want to** chọn một thành viên có sẵn để hệ thống tự điền thông tin của họ vào biểu mẫu
**So that** tôi không phải nhập lại thủ công và có thể xem kết quả cho nhiều người nhanh chóng

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                           |
| --------------------- | ----------- | ------------------------------------------------------------------ |
| **I**ndependent | ✅          | Tính năng bổ trợ, không ảnh hưởng luồng nhập thủ công. |
| **N**egotiable  | ✅          | Danh sách thành viên và nguồn dữ liệu có thể thay đổi.  |
| **V**aluable    | ✅          | Giảm ma sát nhập liệu, hỗ trợ xem cho nhiều người.        |
| **E**stimable   | ✅          | Logic mở bottom sheet và điền dữ liệu, dễ ước lượng.    |
| **S**mall       | ✅          | Viết mã xử lý sự kiện chọn và điền biểu mẫu.           |
| **T**estable    | ✅          | Kiểm thử bằng cách chọn từng thành viên và đối chiếu.  |

### Tiêu chí nghiệm thu

**1. Mở và Tự động điền thông tin (Happy path)**

- [ ] Bấm nút `"Chọn thành viên"` ở trường Họ tên → chuyển sang màn chọn thành viên gia đình
- [ ] Chọn một thành viên → hệ thống quay lại màn nhập thông tin và tự điền Họ tên, Giới tính, Ngày sinh và Giờ sinh của thành viên đó vào biểu mẫu nếu có.
- [ ] Sau khi điền, trường Ngày sinh hiển thị định dạng `DD/MM/YYYY` in đậm và khối thông tin Can Chi/Mệnh cập nhật theo ngày sinh của thành viên.

**3. Chỉnh sửa sau khi điền (Edge case)**

- [ ] Sau khi tự động điền, người dùng vẫn có thể chỉnh sửa lại bất kỳ trường nào trước khi bấm xem kết quả, nhưng sẽ không cập nhật thông tin đó vào profile của người dùng đã chọn.

---

## US-05: Vào thẳng màn tổng quan khi đã từng xem kết quả

**User Story**
**As a** người dùng đã xem kết quả kích hoạt năng lượng ít nhất 1 lần
**I want to** vào tính năng là thấy ngay thông tin đã xem gần nhất và nút xem lại kết quả, không phải qua màn giới thiệu
**So that** tôi xem lại kết quả hoặc đổi thông tin nhanh hơn

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                   |
| --------------------- | ----------- | -------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Chỉ phụ thuộc cờ "đã xem kết quả" và thông tin xem gần nhất.   |
| **N**egotiable  | ✅          | Bố cục khối thông tin, banner có thể tinh chỉnh.                    |
| **V**aluable    | ✅          | Rút ngắn luồng cho người dùng quay lại, tăng tần suất sử dụng. |
| **E**stimable   | ✅          | Màn tĩnh + điều kiện điều hướng, dễ ước lượng.               |
| **S**mall       | ✅          | Hoàn thành trong vài giờ làm việc.                                   |
| **T**estable    | ✅          | Kiểm thử bằng tài khoản chưa xem / đã xem kết quả.               |

### Tiêu chí nghiệm thu

**1. Điều kiện hiển thị (Happy path & Edge case)**

- [ ] Người dùng chưa từng xem kết quả → vào tính năng hiển thị màn giới thiệu (US-01).
- [ ] Người dùng đã xem kết quả ít nhất 1 lần → vào tính năng hiển thị thẳng màn tổng quan, bỏ qua màn giới thiệu.

**2. Nội dung màn tổng quan (Happy path)**

- [ ] Phần đầu hiển thị tiêu đề `"KÍCH HOẠT"` / `"NĂNG LƯỢNG CÁ NHÂN"` và nút quay lại.
- [ ] Khung `"BẠN SẼ KHÁM PHÁ"` gồm 3 mục kèm icon:
  - [ ] **Dụng Thần**: `"Yếu tố cần bổ sung để cân bằng Ngũ hành"`
  - [ ] **Linh Vật Phù Hợp**: `"Gợi ý linh vật theo Dụng Thần"`
  - [ ] **Cách kích hoạt**: `"Hướng dẫn cách đặt/mang theo và sử dụng phù hợp"`
- [ ] Thẻ thông tin hiển thị thông tin xem gần nhất: Họ tên kèm icon chỉnh sửa; Ngày sinh dương lịch `DD/MM/YYYY` và ngày âm lịch tương ứng `"DD/MM/YYYY (Âm Lịch)"`; Giờ sinh `HH:MM` và tên giờ can chi (ví dụ `"Giờ Mão"`); Giới tính.
- [ ] Nút chính `"Xem kết quả của bạn"`.
- [ ] Nút phụ `"Vật phẩm của tôi"` chỉ hiển thị khi người dùng đã mua ít nhất 1 vật phẩm.
- [ ] Banner video `"TÍNH NĂNG MỚI – KÍCH HOẠT NĂNG LƯỢNG CÁ NHÂN"` kèm nút `"XEM VIDEO"`, chỉ hiển thị khi video được cấu hình trong config.

**3. Điều hướng (Interaction)**

- [ ] Bấm icon chỉnh sửa → mở màn nhập thông tin (US-02), các trường điền sẵn thông tin trên thẻ.
- [ ] Bấm `"Xem kết quả của bạn"` → mở màn kết quả luận giải theo thông tin trên thẻ.
- [ ] Bấm `"Vật phẩm của tôi"` → mở màn danh sách vật phẩm của người dùng.
- [ ] Bấm vào bất kỳ vị trí nào trên banner video → mở màn phát video toàn màn hình.
- [ ] Bấm nút quay lại → về màn hình trước đó.
