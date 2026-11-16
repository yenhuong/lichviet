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
- [ ] Hiển thị hình minh họa sơ đồ ngũ hành (Kim, Thủy, Mộc, Hỏa, Thổ) với nhân vật ở giữa.
- [ ] Hiển thị mô tả tính năng: `"Dựa trên ngày giờ sinh, Lịch Việt xác định Dụng Thần và yếu tố bạn cần bổ sung để cân bằng Ngũ Hành. Từ đó, gợi ý linh vật và cách kích hoạt năng lượng cá nhân dành riêng cho bạn"`, trong đó cụm `"dành riêng cho bạn"` in đậm màu đỏ.
- [ ] Hiển thị khung `"BẠN SẼ KHÁM PHÁ"` gồm 4 mục kèm icon:

  - [ ] **Xác Định Dụng Thần Của Bạn**: `"Để chọn đúng năng lượng cần bổ sung, giúp cân bằng Ngũ Hành, hỗ trợ công việc, tài lộc và các mối quan hệ."`
  - [ ] **Gợi Ý Linh Vật Phù Hợp**: `"Chọn đúng linh vật và vật phẩm theo Dụng Thần, giúp bổ sung năng lượng cần thiết, cân bằng Ngũ Hành và hỗ trợ vận trình hanh thông."`
  - [ ] **Màu Sắc Hỗ Trợ**: `"Chọn màu sắc theo Dụng Thần, giúp bổ sung năng lượng, cân bằng Ngũ Hành trong cuộc sống hằng ngày."`
  - [ ] **Biết Cách Kích Hoạt**: `"Xem ngày giờ và vị trí đặt Linh vật để kích hoạt Lộc – Mã – Quý Nhân, hỗ trợ tài lộc, mở ra cơ hội mới và gia tăng sự trợ giúp từ Quý Nhân."`
- [ ] Banner video `"TÍNH NĂNG MỚI – KÍCH HOẠT NĂNG LƯỢNG CÁ NHÂN"` kèm nút `"XEM VIDEO"` nằm dưới nút CTA, chỉ hiển thị khi video được cấu hình trong config.

**2. Hành vi cuộn và thanh tiêu đề (Interaction)**

- [ ] Khi mới vào màn hình, thanh tiêu đề trên cùng ẩn tiêu đề (trong suốt).
- [ ] Khi cuộn nội dung quá ngưỡng → thanh tiêu đề hiện nền và hiển thị tiêu đề `"Kích hoạt năng lượng cá nhân"`.
- [ ] Khi cuộn về đầu trang → thanh tiêu đề trở lại trạng thái trong suốt ban đầu.

**3. Điều hướng (Happy path & Edge case)**

- [ ] Nút CTA nằm dưới khung `"BẠN SẼ KHÁM PHÁ"`, hiển thị nhãn `"Kích hoạt năng lượng của bạn"`.
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

---

## US-06: Vào thẳng màn tổng quan khi đã từng xem kết quả

**User Story**
**As a** người dùng đã xem kết quả kích hoạt năng lượng ít nhất 1 lần
**I want to** vào tính năng là thấy ngay thông tin đã xem gần nhất và nút xem lại kết quả, không phải qua màn giới thiệu
**So that** tôi xem lại kết quả hoặc đổi thông tin nhanh hơn

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                              |
| --------------------- | ----------- | --------------------------------------------------------------------- |
| **I**ndependent | ✅          | Chỉ phụ thuộc cờ "đã xem kết quả" và thông tin xem gần nhất. |
| **N**egotiable  | ✅          | Bố cục khối thông tin, banner có thể tinh chỉnh.              |
| **V**aluable    | ✅          | Rút ngắn luồng cho người dùng quay lại, tăng tần suất sử dụng. |
| **E**stimable   | ✅          | Màn tĩnh + điều kiện điều hướng, dễ ước lượng.                 |
| **S**mall       | ✅          | Hoàn thành trong vài giờ làm việc.                               |
| **T**estable    | ✅          | Kiểm thử bằng tài khoản chưa xem / đã xem kết quả.             |

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

