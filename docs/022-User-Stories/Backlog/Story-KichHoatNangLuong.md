---
id: Story-KichHoatNangLuong
type: story
status: draft
project: Lich_Viet
created: 2026-07-16
tags: [kich-hoat-nang-luong, ngu-hanh, input, intro]
linked-to: [[Story-TuViTaiChinhInput]]
---
# User Stories - Màn hình Kích hoạt năng lượng cá nhân

Tài liệu này định nghĩa các user story cho hai màn hình thuộc tính năng **Kích hoạt năng lượng cá nhân**, được viết theo chuẩn INVEST và định dạng Bullet Checklist (dựa trên workflow `gen-user-story`).

- Màn giới thiệu: `KichHoatNangLuong_Intro.html`
- Màn nhập thông tin: `KichHoatNangLuong_Input.html`

**Prototype tham chiếu**: [[KichHoatNangLuong_Intro.html]], [[KichHoatNangLuong_Input.html]]

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

- [ ] Màn hình hiển thị tiêu đề chính `"KÍCH HOẠT"` và `"NĂNG LƯỢNG CÁ NHÂN"`.
- [ ] Hiển thị hình ảnh sơ đồ ngũ hành minh họa.
- [ ] Hiển thị mô tả tính năng: "Hệ thống sẽ phân tích bản đồ ngũ hành dựa trên ngày giờ sinh để giúp bạn hiểu rõ điểm mạnh, điểm cần cân bằng và gợi ý phương pháp kích hoạt năng lượng phù hợp dành riêng cho bạn"
- [ ] Hiển thị khung `"KẾT QUẢ BẠN NHẬN ĐƯỢC"` gồm đúng 6 lợi ích kèm icon:

  - [ ] **Dụng thần**: `"Xác định năng lượng chủ đạo phù hợp với bản thân."`
  - [ ] **Màu sắc hỗ trợ**: `"Màu sắc giúp cân bằng năng lượng và thu hút vận may."`
  - [ ] **Linh vật phù hợp**: `"Linh vật phù hợp giúp kích hoạt năng lượng tích cực."`
  - [ ] **Phương thức kích hoạt**: `"Gợi ý phương pháp kích hoạt năng lượng hiệu quả cho bạn."`
  - [ ] **Quý nhân**: `"Xác định và thu hút những mối quan hệ hỗ trợ bạn."`
  - [ ] **Tài lộc**: `"Gợi ý cách thu hút tài lộc, cải thiện cuộc sống và sự nghiệp."`

**2. Hành vi cuộn và thanh tiêu đề (Interaction)**

- [ ] Khi mới vào màn hình, thanh tiêu đề trên cùng ẩn tiêu đề (trong suốt).
- [ ] Khi cuộn nội dung quá ngưỡng → thanh tiêu đề hiện nền và hiển thị tiêu đề `"Kích hoạt năng lượng cá nhân"`.
- [ ] Khi cuộn về đầu trang → thanh tiêu đề trở lại trạng thái trong suốt ban đầu.

**3. Điều hướng (Happy path & Edge case)**

- [ ] Nút CTA cố định ở đáy hiển thị nhãn `"Khám phá bản đồ ngũ hành của bạn"`.
- [ ] Bấm nút CTA → điều hướng sang màn hình nhập thông tin (`KichHoatNangLuong_Input.html`).
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

## US-05: Xem thông tin Linh vật hộ thân trên màn hình kết quả

**User Story**
**As a** người dùng xem kết quả luận giải Bát tự
**I want to** xem khối thông tin Linh vật hộ thân ngay dưới khối Dụng thần
**So that** tôi biết được linh vật may mắn của bản thân cùng ý nghĩa biểu tượng của nó

### Tiêu chí nghiệm thu

**1. Hiển thị khối Linh vật hộ thân (Happy path)**

- [ ] Khối Linh vật hộ thân hiển thị ngay bên dưới khối Dụng thần và đường phân cách section.
- [ ] Hiển thị tiêu đề lớn: `"Linh vật hộ thân của bạn"`.
- [ ] Bên trái hiển thị hình ảnh linh vật (`mascot_trau.png`).
- [ ] Bên phải hiển thị tên linh vật in hoa `"TRÂU"` kèm dòng chữ mô tả `"Biểu tượng của sức mạnh bền bỉ"`.

