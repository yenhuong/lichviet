---
id: Story-TuViTaiChinhInput
type: story
status: draft
project: Lich_Viet
created: 2026-05-27
linked-to: [[Story-TuViTongQuan]]
---
# User Stories - Màn hình Nhập thông tin tử vi tài chính

Tài liệu này định nghĩa các user story cho màn hình **Nhập thông tin tử vi tài chính** (`tuvi_taichinh_input.html`), được viết theo chuẩn INVEST và định dạng Bullet Checklist (dựa trên workflow `gen-user-story`).

**Prototype tham chiếu**: [[tuvi_taichinh_input.html]]

---

## US-01: Nhập thông tin để xem lá số tài lộc

**User Story**
**As a** người dùng quan tâm đến quản lý tiền bạc và phát triển nguồn thu
**I want to** cung cấp các thông tin cá nhân gồm Giới tính, Ngày sinh và Giờ sinh
**So that** hệ thống có đủ cơ sở dữ liệu để tính toán lá số tài chính chính xác dành riêng cho tôi

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                       |
| --------------------- | ----------- | ------------------------------------------------------------------------------ |
| **I**ndependent | ✅          | Hoạt động độc lập không phụ thuộc các phân hệ khác.               |
| **N**egotiable  | ✅          | UI/UX của form và layout có thể tinh chỉnh theo thiết kế.               |
| **V**aluable    | ✅          | Thông tin đầu vào quan trọng để tạo kết quả luận giải chính xác. |
| **E**stimable   | ✅          | Phản mẫu nhập liệu cơ bản, dễ ước lượng.                            |
| **S**mall       | ✅          | Thực hiện nhanh trong vòng vài giờ làm việc.                            |
| **T**estable    | ✅          | Có các kịch bản kiểm thử hợp lệ và không hợp lệ rõ ràng.         |

### Tiêu chí nghiệm thu

**1. Giao diện biểu mẫu nhập liệu đầy đủ (Happy path)**

- [ ] Giao diện hiển thị tiêu đề chính `"ĐỊNH HƯỚNG TÀI CHÍNH TỪ LÁ SỐ CỦA BẠN"`.
- [ ] Giao diện hiển thị phụ đề `"Giúp bạn hiểu tư duy tiền bạc và hướng phát triển tài chính phù hợp hơn."`.
- [ ] Hiển thị hình ảnh minh họa tài chính
- [ ] Hiển thị biểu mẫu gồm 3 trường thông tin:
  - [ ] **Giới tính**: Hiển thị dưới dạng radio button hình tròn (Nữ/Nam), mặc định tích chọn "Nữ".
  - [ ] **Ngày sinh**: Trường chọn ngày sinh dương lịch, hiện hint `"Chọn ngày sinh"`. Nhấn vào thì hiện popup nhập ngày sinh dương lịch (dd/mm/yyyy)
  - [ ] **Giờ sinh**: Trường chọn giờ sinh, hiện hint `"Chọn giờ sinh"`. nhấn vào thì hiện popup chọn giờ sinh (hh:mm)

**2. Tương tác và Định dạng (Interaction)**

- [ ] Khi chọn ngày sinh ở popup nhập ngày sinh → hệ thống cập nhật hiển thị theo định dạng `DD/MM/YYYY` (ví dụ: `27/05/2026`) kèm trạng thái văn bản in đậm nổi bật.
- [ ] Khi chọn giờ sinh ở popup chọn giờ sinh → hệ thống cập nhật hiển thị định dạng giờ `HH:MM` (ví dụ: `14:30`) kèm trạng thái văn bản in đậm nổi bật.

**3. Xác thực dữ liệu và Gửi biểu mẫu (Negative path & Edge case)**

- [ ] Khi bấm nút `"XEM HƯỚNG TÀI CHÍNH CỦA BẠN"` nhưng chưa điền ngày sinh dương lịch → hệ thống chặn lại và hiển thị thông báo toast: `"Vui lòng nhập ngày sinh dương lịch"`.
- [ ] Khi bấm nút `"XEM HƯỚNG TÀI CHÍNH CỦA BẠN"` đã điền ngày sinh dương lịch nhưng chưa điền giờ sinh → hệ thống chặn lại và hiển thị thông báo toast: `"Vui lòng nhập giờ sinh"`.
- [ ] Khi điền đầy đủ và hợp lệ tất cả các thông tin $\rightarrow$ hệ thống thực hiện lưu dữ liệu vào LocalStorage và thực hiện chuyển hướng người dùng sang trang kết quả  tử vi tài chính

---

## US-02: Chuyển hướng và Tự động điền dữ liệu theo trạng thái Hồ sơ sinh (Smart Redirection & Autofill)

**User Story**
**As a** người dùng truy cập tính năng tử vi tài chính
**I want to** hệ thống tự động chuyển hướng thẳng đến màn hình kết quả nếu đã có đủ thông tin hồ sơ sinh, hoặc hiển thị biểu mẫu nhập liệu và điền sẵn các thông tin đã có nếu thông tin hồ sơ sinh còn thiếu
**So that** tôi có trải nghiệm liền mạch, không phải nhập lại thông tin cũ và dễ dàng bổ sung thông tin còn thiếu.

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                                            |
| --------------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Độc lập với luồng nhập dữ liệu thủ công.                                                  |
| **N**egotiable  | ✅          | Cách lưu trữ và sắp xếp mức độ ưu tiên của dữ liệu có thể điều chỉnh linh hoạt. |
| **V**aluable    | ✅          | Tối ưu hóa trải nghiệm người dùng, giảm thiểu tối đa ma sát nhập liệu.               |
| **E**stimable   | ✅          | Logic kiểm tra dữ liệu đơn giản khi load trang.                                               |
| **S**mall       | ✅          | Viết code Javascript xử lý sự kiện khi khởi tạo trang.                                       |
| **T**estable    | ✅          | Kiểm thử bằng cách lưu thông tin trước từ màn hình khác rồi vào trang.                |

### Tiêu chí nghiệm thu

**1. Tự động chuyển hướng thẳng đến trang kết quả khi ĐỦ hồ sơ sinh (Bypass)**

- [ ] Khi người dùng truy cập tính năng tử vi tài chính, hệ thống kiểm tra trong `LocalStorage` xem đã có đầy đủ 3 thông tin hồ sơ sinh (gồm Giới tính, Ngày sinh dương lịch, Giờ sinh) từ bất kỳ tiện ích tử vi nào trước đó (nghề nghiệp, tài chính, tình duyên, vận hạn, tử vi hàng ngày).
- [ ] Nếu đã có đầy đủ cả 3 thông tin hồ sơ sinh -> Chuyển hướng trực tiếp người dùng sang trang kết quả tử vi tài chính

**2. Hiển thị màn hình nhập liệu và tự động điền các thông tin đã có khi THIẾU hồ sơ sinh (Autofill)**

- [ ] Nếu thông tin hồ sơ sinh trong hệ thống chưa đầy đủ (ví dụ: mới chỉ có giới tính và ngày sinh, chưa có giờ sinh; hoặc chưa có thông tin nào):
  - [ ] Hệ thống cho phép hiển thị màn hình nhập thông tin tử vi tài chính.
  - [ ] Hệ thống tự động điền trước (Autofill) những thông tin đã tồn tại trong `LocalStorage` vào biểu mẫu (ví dụ: tự động tích chọn Giới tính và hiển thị Ngày sinh dương lịch đã lưu từ trước)
  - [ ] Các trường được tự động điền hiển thị đúng giá trị đã có dưới dạng trực quan nổi bật (ngày sinh hiển thị định dạng `DD/MM/YYYY` in đậm) để người dùng dễ nhận biết.

---

## US-03: Hiển thị lợi ích lá số cá nhân hóa theo nhóm tuổi

**User Story**
**As a** người dùng chuẩn bị điền thông tin sự nghiệp
**I want to** thấy các gạch đầu dòng lợi ích tự động thay đổi cá nhân hóa theo độ tuổi của tôi ngay khi tôi chọn Ngày sinh
**So that** tôi hiểu rõ các giá trị thực tế nhất mà lá số mang lại cho độ tuổi hiện tại của tôi (ví dụ: tuổi học sinh, tuổi lập nghiệp, hay tuổi trung niên ổn định)

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                                |
| --------------------- | ----------- | --------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Độc lập với các logic biểu mẫu khác, chỉ lắng nghe sự thay đổi ngày sinh. |
| **N**egotiable  | ✅          | Cách phân nhóm độ tuổi và các ngưỡng tuổi có thể điều chỉnh sau.        |
| **V**aluable    | ✅          | Cá nhân hóa nội dung giúp tăng tỷ lệ điền form (Conversion Rate) cao.         |
| **E**stimable   | ✅          | Logic xử lý chuỗi ở client-side khá dễ ước lượng.                             |
| **S**mall       | ✅          | Viết code JS lắng nghe sự kiện onChange và map mảng dữ liệu.                    |
| **T**estable    | ✅          | Kiểm thử bằng cách chọn các năm sinh khác nhau để đổi nhóm tuổi.          |

### Tiêu chí nghiệm thu

**1. Tiêu đề khối lợi ích (Happy path)**

- [ ] Tiêu đề hiển thị tĩnh ban đầu hoặc động là: `"Lá số tài chính của bạn hé lộ điều gì?"`.
- [ ] Danh sách hiển thị chính xác 3 lợi ích cốt lõi kèm icon dấu tích màu xanh lục bảo:
  - [ ] Lợi ích 1: `"Hiểu rõ cách bạn kiếm tiền, dùng tiền và giữ tiền"`
  - [ ] Lợi ích 2: `"Gợi ý quản lý tiền bạc và phát triển nguồn thu"`
  - [ ] Lợi ích 3: `"Tham khảo cơ hội, biến động và rủi ro tài chính"`
