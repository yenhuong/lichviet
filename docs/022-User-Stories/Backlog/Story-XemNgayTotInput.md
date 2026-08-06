# User Stories - Màn hình Nhập thông tin xem ngày tốt việc quan trọng

Tài liệu này định nghĩa các user story cho hệ thống màn hình **Nhập thông tin xem ngày tốt việc quan trọng** (bao gồm 8 việc quan trọng: Cưới hỏi, Mua xe, Mua nhà, Khai trương, Khởi công, Nhập trạch, Ký hợp đồng, Mua tài sản có giá trị)

---

## US-01: Nhập thông tin để xem ngày tốt việc quan trọng

**User Story**
**As a** người dùng Lịch Việt đang có kế hoạch thực hiện một trong 8 việc quan trọng (Cưới hỏi, Mua xe, Mua nhà, Khai trương, Khởi công, Nhập trạch, Ký hợp đồng, Mua tài sản có giá trị)
**I want to** chọn loại công việc, nhập thông tin cá nhân của người xem, chọn các thông số phụ theo đặc thù công việc và chọn khoảng thời gian dự kiến
**So that** hệ thống có đủ cơ sở để tính toán và gợi ý các ngày tốt cát tường hợp bản mệnh và điều kiện của tôi

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                                        |
| --------------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Hoạt động độc lập không phụ thuộc các phân hệ khác.                                |
| **N**egotiable  | ✅          | UI/UX của form và layout có thể tinh chỉnh theo thiết kế riêng biệt.                   |
| **V**aluable    | ✅          | Thông tin đầu vào quan trọng để tạo kết quả luận giải chính xác theo từng việc. |
| **E**stimable   | ✅          | Biểu mẫu nhập liệu có cấu trúc chung rõ ràng, dễ ước lượng.                       |
| **S**mall       | ✅          | Thực hiện nhanh trong vòng 1-2 sprint.                                                       |
| **T**estable    | ✅          | Có các kịch bản kiểm thử tương ứng cho từng loại công việc cụ thể.               |

### Tiêu chí nghiệm thu

**1. Cấu trúc giao diện chung và Cấu hình động từ CMS (Happy path)**

Tất cả 8 việc quan trọng đều sử dụng chung một cấu trúc màn hình nhập liệu thống nhất. Các thành phần giao diện động được cấu hình thông qua trường `metadata` của từng việc trên CMS theo các quy tắc sau:

- [ ] **Quy tắc hiển thị/ẩn dựa trên CMS Metadata**:
  - [ ] **Ảnh giới thiệu ở đầu trang**: Nếu có cấu hình ảnh trên CMS → hiển thị ảnh minh họa tương ứng; nếu không có → ẩn ảnh giới thiệu (vùng hiển thị tự động co gọn).
  - [ ] **Nội dung giới thiệu dưới nút CTA (Lợi ích)**: Nếu có danh sách lợi ích trên CMS → hiển thị khối gạch đầu dòng giới thiệu lợi ích kết quả; nếu không có → ẩn khối này.
  - [ ] **Xem thêm**: Nếu có các liên kết kiến thức phong thủy trên CMS → hiển thị danh sách link; nếu không có → ẩn mục Xem thêm.
  - [ ] **Video**: Nếu có link/file video hướng dẫn trên CMS → hiển thị trình phát video (thumbnail/card); nếu không có → ẩn trình phát video.
  - [ ] **Mục văn khấn**: Ẩn phần văn khấn trên màn hình nhập thông tin bằng cách cấu hình bỏ thông tin văn khấn của việc đó từ CMS.
  - [ ] **Nút bấm CTA Tìm ngày**:
    - [ ] Nếu có cấu hình văn bản nút trên CMS → hiển thị nút bấm với text đã cấu hình tương ứng theo từng việc.
    - [ ] Nếu không có cấu hình văn bản nút trên CMS → hiển thị nút bấm với văn bản mặc định là `"Xem kết quả"`.
- [ ] **Khối thông tin người xem**: Hiển thị Avatar, Tên, Ngày sinh, Tuổi âm lịch (ví dụ: `"Nhâm Thân"`) và Mệnh ngũ hành (ví dụ: `"Kiếm Phong Kim"`). Khối này là bắt buộc hiển thị trên mọi biểu mẫu.

**2. Bảng phân nhánh nội dung cho 8 việc quan trọng**

| Việc quan trọng                     | Ảnh đầu trang & Video                                          | Văn bản nút CTA                    | Nội dung giới thiệu dưới CTA (Lợi ích)                                                                                                                                        | Các trường nhập liệu trong Form                                                                                                                                                                                                                                                                                                                        |
| :------------------------------------ | :---------------------------------------------------------------- | :------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cưới hỏi**                 | Minh họa đám cưới, tráp ăn hỏi phong cách truyền thống | Tìm ngày cưới hỏi hợp tuổi     | - Ngày cưới hỏi cát tường tương hợp can chi cô dâu & chú rể `<br>`- Giờ đẹp đón dâu, ăn hỏi, làm lễ `<br>`- Luận giải chi tiết mức độ hợp khắc   | 1. Thông tin cô dâu `<br>`2. Thông tin chú rể (tùy chọn)`<br>`3. Việc cần xem (Lễ thành hôn, Lễ ăn hỏi, Dạm ngõ). Mặc định chọn lễ thành hôn `<br>`4. Khoảng thời gian xem                                                                                                                                                 |
| **Mua xe**                      | Minh họa xe hơi, lễ bàn giao xe hiện đại                   | Tìm ngày mua xe hợp tuổi          | - Ngày tốt nhất đại cát hợp tuổi bản mệnh `<br>`- Giờ tốt nhận xe, ký giấy, xuất hành về nhà `<br>`- Tư vấn màu xe tương sinh/tương hợp               | 1. Thông tin người xem (Chủ xe)`<br>`2. Màu xe (không bắt buộc)`<br>`3. Khoảng thời gian xem                                                                                                                                                                                                                                                  |
| **Mua nhà**                    | Minh họa nhà đất, căn hộ, tổ ấm gia đình ấm cúng      | Tìm ngày mua nhà hợp tuổi        | - Ngày đại cát mua nhà, ký hợp đồng đặt cọc `<br>`- Giờ cát tường ký hợp đồng, đặt cọc, công chứng `<br>`- Tránh giờ kỵ sát ảnh hưởng giao dịch | 1. Thông tin người xem (Chủ nhà)`<br>`2. Khoảng thời gian xem                                                                                                                                                                                                                                                                                      |
| **Khai trương**               | Minh họa hồng phát, cửa hàng đông khách nhộn nhịp       | Tìm ngày khai trương hợp tuổi   | - Ngày đẹp mở cửa hàng đón tài lộc `<br>`- Giờ tốt mở hàng lấy may, cúng khai trương `<br>`- Chọn hướng cửa hàng sinh tài khí                           | 1. Thông tin người xem (Chủ shop)`<br>`2. Hướng cửa hàng `<br>`3. Khoảng thời gian xem                                                                                                                                                                                                                                                        |
| **Khởi công**                 | Minh họa động thổ, công trình xây dựng khởi sắc         | Tìm ngày khởi công hợp tuổi     | - Ngày đẹp động thổ, khởi công xây dựng cát lợi `<br>`- Giờ cát tường khởi công, động thổ `<br>`- Tránh ngày đại kỵ sát chủ, tam nương             | 1. Thông tin người xem `<br>`2. Hướng nhà `<br>`3. Khoảng thời gian xem                                                                                                                                                                                                                                                                         |
| **Nhập trạch**                | Minh họa tân gia dọn nhà, bếp hồng ấm cúng                | Tìm ngày nhập trạch hợp tuổi    | - Ngày tốt tân gia dọn nhà, khai bếp cát tường `<br>`- Giờ tốt làm lễ cúng nhập trạch, dọn vào `<br>`- Tránh ngày xung khắc hướng nhà                    | 1. Thông tin người xem (Chủ nhà)`<br>`2. Hướng nhà `<br>`3. Việc cần xem (Nhập trạch nhà mặt đất (chính chủ), Nhập trạch nhà mặt đất (thuê), Nhập trạch nhà chung cư (chính chủ), Nhập trạch nhà chung cư (thuê)). Mặc định chọn nhập trạch nhà mặt đất (chính chủ)) `<br>`4. Khoảng thời gian xem |
| **Ký hợp đồng**             | Minh họa ký kết, đối tác bắt tay hợp tác thuận lợi     | Tìm ngày ký hợp đồng hợp tuổi | - Ngày đẹp ký kết giao dịch, mở rộng làm ăn `<br>`- Giờ hoàng đạo giao dịch tránh rủi ro, ký kết hanh thông `<br>`- Hướng ngồi giao dịch đón cát khí | 1. Thông tin người xem `<br>`2. Khoảng thời gian xem                                                                                                                                                                                                                                                                                                 |
| **Mua tài sản có giá trị** | Minh họa tài sản lớn, vàng bạc đá quý, cổ phiếu        | Tìm ngày mua tài sản hợp tuổi   | - Ngày tốt giao dịch tài sản lớn, tích lũy tài lộc `<br>`- Giờ hoàng đạo giao dịch tránh rủi ro, mua bán may mắn `<br>`- Tránh rủi ro hao tài tốn của    | 1. Thông tin người xem `<br>`2. Khoảng thời gian xem                                                                                                                                                                                                                                                                                                 |

**3. Tương tác và Xác thực dữ liệu (Interaction & Validation)**

- [ ] Bấm chọn các trường nhập liệu dạng Dropdown (Màu xe, Hướng nhà, Hướng cửa hàng, Việc cần xem, Khoảng thời gian xem) → hiển thị Bottom Sheet chứa danh sách lựa chọn tương ứng.
- [ ] Chọn một lựa chọn trên Bottom Sheet → cập nhật giá trị hiển thị trên giao diện chính in đậm nổi bật và tự động đóng Bottom Sheet.
- [ ] TH có cấu hình xem thêm giới thiệu, Bấm vào → hệ thống điều hướng mở deeplink tương ứng đã được cấu hình trên CMS.
- [ ] TH có khối video, Bấm vào khối **Video** → hệ thống hiển thị trình phát video toàn màn hình để xem video hướng dẫn trực quan.
- [ ] Bấm nút CTA tìm ngày → thực hiện kiểm tra điều kiện đầu vào và hiển thị cảnh báo dạng toast:
  - [ ] **Trường hợp thiếu thông tin người xem** → hiển thị thông báo toast: `"Vui lòng chọn thông tin người xem"`.
  - [ ] **Trường hợp chưa chọn hướng cửa hàng / hướng nhà** → hiển thị thông báo toast: `"Vui lòng chọn hướng"`.
  - [ ] **Trường hợp tất cả thông tin hợp lệ**:
    - [ ] Hệ thống tiến hành lưu thông tin của người xem hiện tại thành "hồ sơ người xem gần nhất" vào `LocalStorage`.
    - [ ] Hiển thị loader tính toán xoay tròn giả lập trong 1.5 giây và thực hiện chuyển hướng sang trang Kết quả.

---

## US-02: Đồng bộ thông tin cá nhân và Tự động điền dữ liệu (Autofill & Select Family Member)

**User Story**
**As a** người dùng Lịch Việt muốn xem ngày tốt cho bản thân hoặc người thân
**I want to** hệ thống tự động lưu lại thông tin người xem gần nhất mỗi khi tôi nhấn nút CTA tìm ngày, và tự động điền sẵn thông tin này khi tôi mở bất kỳ màn hình nhập xem ngày tốt nào; nếu chưa từng xem thì để trống
**So that** tôi có trải nghiệm liền mạch giữa các màn hình xem ngày tốt khác nhau mà không cần nhập đi nhập lại thông tin.

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                                            |
| --------------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Độc lập với luồng nhập dữ liệu màu xe và thời gian.                                      |
| **N**egotiable  | ✅          | Cách lưu trữ và sắp xếp mức độ ưu tiên của dữ liệu có thể điều chỉnh linh hoạt. |
| **V**aluable    | ✅          | Tối ưu hóa trải nghiệm người dùng, giảm thiểu tối đa ma sát nhập liệu.               |
| **E**stimable   | ✅          | Logic kiểm tra dữ liệu đơn giản khi load trang.                                               |
| **S**mall       | ✅          | Viết code Javascript xử lý sự kiện khi khởi tạo trang.                                       |
| **T**estable    | ✅          | Kiểm thử bằng cách lưu thông tin trước từ màn hình khác rồi vào trang.                |

### Tiêu chí nghiệm thu

**1. Tự động điền dữ liệu hồ sơ sinh gần nhất (Autofill & Synced State)**

- [ ] Khi khởi tạo trang, hệ thống kiểm tra thông tin hồ sơ người xem gần nhất đã được lưu trong `LocalStorage` (gồm Tên, Ngày sinh dương lịch).
  - [ ] Nếu đã có dữ liệu người xem gần nhất -> Tự động điền (Autofill) Tên, Ngày sinh dương lịch, đồng thời hiển thị Tuổi âm lịch (ví dụ: `"Nhâm Thân"`) và Mệnh ngũ hành (ví dụ: `"Kiếm Phong Kim"`) in đậm nổi bật.
  - [ ] Nếu chưa có dữ liệu xem gần nhất trong `LocalStorage` -> Ở khối thông tin người xem thì hiển thị dòng chữ `"Chọn thông tin người xem"` để người dùng chủ động click chọn.

**2. Chọn thành viên gia đình (Select Family Member)**

- [ ] Nhấn vào bất kỳ vị trí nào trên cả khối thông tin người xem (hoặc nhấp vào vùng text `"Chọn thông tin người xem"` nếu dữ liệu đang trống) → thực hiện chuyển hướng điều hướng (navigate) người dùng tới màn hình Chọn thành viên gia đình.
- [ ] Sau khi người dùng chọn thành công một thành viên từ màn hình chọn → hệ thống cập nhật hiển thị thông tin người xem mới (gồm Avatar, Tên, Ngày sinh, Tuổi âm lịch, Mệnh ngũ hành) ngay trên biểu mẫu nhập của màn hình hiện tại (chưa thực hiện lưu dữ liệu vào `LocalStorage` ở bước này).
