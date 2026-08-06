---
id: Story-TuViTinhDuyenInput
type: story
status: draft
project: Lich_Viet
created: 2026-05-27
linked-to: [[Story-TuViTongQuan]]
---
# User Stories - Màn hình Nhập thông tin tử vi tình duyên & hôn nhân

Tài liệu này định nghĩa các user story cho màn hình **Nhập thông tin tử vi tình duyên** (`tuvi_tinhduyen_input.html`), được viết theo chuẩn INVEST và định dạng Bullet Checklist (dựa trên workflow `gen-user-story`).

**Prototype tham chiếu**: [[tuvi_tinhduyen_input.html]]

---

## US-01: Nhập thông tin tình duyên và tình trạng hôn nhân

**User Story**
**As a** người dùng quan tâm đến tình duyên và đời sống gia đạo
**I want to** cung cấp các thông tin cá nhân gồm Ngày sinh, Giờ sinh, Giới tính và Tình trạng hôn nhân hiện tại
**So that** hệ thống tính toán lá số và trả về luận giải tình cảm cá nhân hóa chính xác nhất cho tôi

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                         |
| --------------------- | ----------- | -------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Hoạt động độc lập không phụ thuộc các phân hệ khác.                 |
| **N**egotiable  | ✅          | Cách bố trí các trường dọc/ngang có thể tùy chỉnh.                    |
| **V**aluable    | ✅          | Quan trọng để biết nên luận giải theo hướng độc thân hay hôn nhân. |
| **E**stimable   | ✅          | Cấu trúc form chuẩn, dễ ước lượng.                                       |
| **S**mall       | ✅          | Biểu mẫu 4 trường thông tin, có thể hoàn thành trong 1 ngày.           |
| **T**estable    | ✅          | Dễ dàng test các điều kiện lựa chọn và chuyển hướng.                 |

### Tiêu chí nghiệm thu

**1. Giao diện biểu mẫu nhập liệu (Happy path)**

- [ ] Giao diện hiển thị tiêu đề chính `"TÌNH DUYÊN & HÔN NHÂN TỪ LÁ SỐ CỦA BẠN"`.
- [ ] Giao diện hiển thị phụ đề `"Giúp bạn hiểu người phù hợp với mình và cách xây dựng tình cảm bền lâu"`.
- [ ] Hiển thị hình ảnh minh họa tình duyên.
- [ ] Hiển thị biểu mẫu gồm 4 trường thông tin:
  - [ ] **Giới tính**: Đặt ở hàng dọc, hiển thị dạng radio button hình tròn (Nữ/Nam), mặc định tích chọn "Nữ".
  - [ ] **Ngày sinh**: Trường chọn ngày sinh dương lịch, hiện hint `"Chọn ngày sinh"`. Nhấn vào thì hiện popup nhập ngày sinh dương lịch (dd/mm/yyyy)
  - [ ] **Giờ sinh**: Trường chọn giờ sinh, hiện hint `"Chọn giờ sinh"`. nhấn vào thì hiện popup chọn giờ sinh (hh:mm)
  - [ ] **Tình trạng hôn nhân**: Đặt ở hàng dọc dưới giới tính, hiển thị dạng radio button hình tròn (Chưa kết hôn/Đã kết hôn), mặc định tích chọn "Chưa kết hôn".

**2. Tương tác và Định dạng (Interaction)**

- [ ] Khi chọn ngày sinh ở popup nhập ngày sinh → hệ thống cập nhật hiển thị theo định dạng `DD/MM/YYYY` (ví dụ: `27/05/2026`) kèm trạng thái văn bản in đậm nổi bật.
- [ ] Khi chọn giờ sinh qua bộ chọn giờ của trình duyệt → hệ thống cập nhật hiển thị định dạng giờ `HH:MM` (ví dụ: `14:30`) kèm trạng thái văn bản in đậm nổi bật.

**3. Xác thực dữ liệu và Gửi biểu mẫu (Negative path & Edge case)**

- [ ] Khi bấm nút `"XEM TÌNH DUYÊN CỦA BẠN"` nhưng chưa điền ngày sinh dương lịch → hệ thống chặn lại và hiển thị thông báo toast: `"Vui lòng nhập ngày sinh dương lịch"`.
- [ ] Khi bấm nút `"XEM TÌNH DUYÊN CỦA BẠN"` đã điền ngày sinh dương lịch nhưng chưa điền giờ sinh → hệ thống chặn lại và hiển thị thông báo toast: `"Vui lòng nhập giờ sinh"`.
- [ ] Khi điền đầy đủ và hợp lệ tất cả các thông tin $\rightarrow$ hệ thống thực hiện lưu dữ liệu vào LocalStorage và chuyển hướng người dùng sang trang kết quả tử vi tình duyên

---

## US-02: Thay đổi lợi ích động theo trạng thái hôn nhân

**User Story**
**As a** người dùng chuẩn bị điền biểu mẫu tình duyên
**I want to** xem danh sách lợi ích thay đổi tương ứng khi tôi bấm chọn giữa "Chưa kết hôn" và "Đã kết hôn"
**So that** tôi thấy nội dung giá trị được cá nhân hóa sát sườn nhất với tình trạng thực tế của mình

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                     |
| --------------------- | ----------- | ---------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Độc lập với logic gửi biểu mẫu.                                       |
| **N**egotiable  | ✅          | Câu chữ mô tả có thể tối ưu hóa theo phản hồi người dùng.      |
| **V**aluable    | ✅          | Nâng cao tính cá nhân hóa (Personalization) ngay từ trang nhập liệu. |
| **E**stimable   | ✅          | Thay đổi chuỗi văn bản tĩnh qua Javascript khá đơn giản.           |
| **S**mall       | ✅          | Triển khai nhanh trong vài giờ.                                           |
| **T**estable    | ✅          | Click chọn 2 radio button để test tính thay đổi động của văn bản. |

### Tiêu chí nghiệm thu

**1. Thay đổi nội dung theo trạng thái (Happy path)**

- [ ] **TH1: Khi chọn "Chưa kết hôn" (Mặc định)**:
  - [ ] Tiêu đề khối lợi ích hiển thị: `"Tình duyên của bạn hé lộ điều gì?"`.
  - [ ] Danh sách hiển thị chính xác 3 lợi ích:
    1. `Hiểu rõ điểm mạnh và thử thách của bạn khi yêu`
    2. `Gợi ý hình mẫu phù hợp và người nên tránh`
    3. `Gợi ý cách xây dựng tình cảm bền lâu`
- [ ] **TH2: Khi chọn "Đã kết hôn"**:
  - [ ] Tiêu đề khối lợi ích tự động chuyển thành: `"Hôn nhân của bạn hé lộ điều gì?"`.
  - [ ] Danh sách tự động cập nhật chính xác thành 3 lợi ích mới:

    1. `Hiểu những điều cần chú ý trong mối quan hệ vợ chồng`
    2. `Xem người bạn đời tác động thế nào đến cuộc sống chung`
    3. `Gợi ý cách giữ gìn hôn nhân ổn định, bền lâu`

---

## US-03: Điền trước thông minh và Chuyển hướng bỏ qua biểu mẫu (Smart Autofill & Bypass)

**User Story**
**As a** người dùng cũ đã điền hồ sơ sinh hoặc đã hoàn thành xem tử vi tình duyên
**I want to** hệ thống tự động điền các thông tin đã biết và chỉ bắt điền thông tin thiếu, hoặc bỏ qua hoàn toàn màn hình nhập liệu này
**So that** tôi không phải điền lại những thông tin cũ và truy cập thẳng kết quả

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                                      |
| --------------------- | ----------- | --------------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Độc lập với biểu mẫu điền thủ công.                                                 |
| **N**egotiable  | ✅          | Cấp độ điền trước và điều hướng có thể điều chỉnh theo cấu hình lưu trữ. |
| **V**aluable    | ✅          | Loại bỏ ma sát nhập liệu, tối ưu hóa trải nghiệm người dùng cũ.                 |
| **E**stimable   | ✅          | Logic xử lý phân nhánh dữ liệu rõ ràng.                                               |
| **S**mall       | ✅          | Cần xử lý kịch bản dữ liệu hoàn chỉnh và thiếu.                                    |
| **T**estable    | ✅          | Kiểm thử qua các scenario có sẵn 3 thông tin và có sẵn 4 thông tin.                 |

### Tiêu chí nghiệm thu

**1. Luồng điền trước thông tin bán tự động (Autofill - 3/4 thông tin)**

- [ ] Khi người dùng truy cập trang, nếu hệ thống phát hiện đã có thông tin Ngày sinh, Giờ sinh, Giới tính (từ các màn hình khác như Nghề nghiệp, Tài chính) nhưng **chưa có** thông tin Tình trạng hôn nhân → hệ thống tự động điền sẵn các giá trị Ngày sinh, Giờ sinh, Giới tính vào form
- [ ] Sau khi người dùng tích chọn Tình trạng hôn nhân và bấm `"XEM TÌNH DUYÊN CỦA BẠN"` → lưu cả 4 thông tin này và chuyển hướng vào kết quả tử vi tình duyên.

**2. Luồng bỏ qua biểu mẫu hoàn toàn (Bypass - 4/4 thông tin)**

- [ ] Khi người dùng truy cập trang và hệ thống phát hiện đã có đầy đủ cả 4 thông tin (ngày sinh, Giờ sinh, Giới tính, tình trạng hôn nhân) → hệ thống tự động chuyển hướng thẳng người dùng đến màn kết quả tử vi tình duyên mà không hiển thị trang nhập liệu này.
