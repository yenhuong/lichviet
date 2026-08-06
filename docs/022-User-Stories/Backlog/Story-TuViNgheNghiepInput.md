---
id: Story-TuViNgheNghiepInput
type: story
status: draft
project: Lich_Viet
created: 2026-05-27
linked-to: [[Story-TuViTongQuan]]
---
# User Stories - Màn hình Nhập thông tin tử vi nghề nghiệp

Tài liệu này định nghĩa các user story cho màn hình **Nhập thông tin tử vi nghề nghiệp** (`tuvi_nghenghiep_input.html`), được viết theo chuẩn INVEST và định dạng Bullet Checklist (dựa trên workflow `gen-user-story`)

---

## US-01: Nhập thông tin để xem lá số sự nghiệp

**User Story**
**As a** người dùng quan tâm đến định hướng sự nghiệp từ tử vi
**I want to** cung cấp các thông tin cá nhân cơ bản gồm Giới tính, Ngày sinh và Giờ sinh
**So that** hệ thống có đủ cơ sở dữ liệu để tính toán lá số và hiển thị luận giải sự nghiệp chính xác dành riêng cho tôi

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                       |
| --------------------- | ----------- | ------------------------------------------------------------------------------ |
| **I**ndependent | ✅          | Hoạt động độc lập không phụ thuộc các phân hệ khác.               |
| **N**egotiable  | ✅          | UI/UX của form và layout có thể tinh chỉnh theo thiết kế.               |
| **V**aluable    | ✅          | Thông tin đầu vào quan trọng để tạo kết quả luận giải chính xác. |
| **E**stimable   | ✅          | Phản hồi biểu mẫu nhập liệu cơ bản, dễ ước lượng.                 |
| **S**mall       | ✅          | Thực hiện nhanh trong vòng vài giờ làm việc.                            |
| **T**estable    | ✅          | Có các kịch bản kiểm thử hợp lệ và không hợp lệ rõ ràng.         |

### Tiêu chí nghiệm thu

**1. Giao diện biểu mẫu nhập liệu đầy đủ (Happy path)**

- [ ] Giao diện hiển thị tiêu đề chính `"ĐỊNH HƯỚNG SỰ NGHIỆP TỪ LÁ SỐ CỦA BẠN"`.
- [ ] Giao diện hiển thị phụ đề `"Giúp bạn hiểu bản thân và lựa chọn hướng đi sự nghiệp phù hợp hơn."`.
- [ ] Hiển thị ảnh minh hoạ
- [ ] Hiển thị biểu mẫu gồm 3 trường thông tin:
  - [ ] **Giới tính**: Hiển thị dưới dạng radio button hình tròn (Nữ/Nam), mặc định tích chọn "Nữ" nếu chưa có giới tính.
  - [ ] **Ngày sinh**: Trường chọn ngày sinh dương lịch, hiện hint `"Chọn ngày sinh"` nếu chưa có ngày sinh. Nhấn vào thì hiện popup nhập ngày sinh dương lịch (dd/mm/yyyy)
  - [ ] **Giờ sinh**: Trường chọn giờ sinh, hiện hint `"Chọn giờ sinh" `nếu chưa có giờ sinh. nhấn vào thì hiện popup chọn giờ sinh (hh:mm)

**2. Tương tác và Định dạng (Interaction)**

- [ ] Khi chọn ngày sinh ở popup nhập ngày sinh → hệ thống cập nhật hiển thị theo định dạng `DD/MM/YYYY` (ví dụ: `27/05/2026`) kèm trạng thái văn bản in đậm nổi bật.
- [ ] Khi chọn giờ sinh qua bộ chọn giờ của trình duyệt → hệ thống cập nhật hiển thị định dạng giờ `HH:MM` (ví dụ: `14:30`) kèm trạng thái văn bản in đậm nổi bật.

**3. Xác thực dữ liệu và Gửi biểu mẫu (Negative path & Edge case)**

- [ ] Khi bấm nút `"Xem gợi ý sự nghiệp"` nhưng chưa điền ngày sinh dương lịch → hệ thống chặn lại và hiển thị thông báo toast: `"Vui lòng nhập ngày sinh dương lịch"`.
- [ ] Khi bấm nút `"Xem gợi ý sự nghiệp"` đã điền ngày sinh dương lịch nhưng chưa điền giờ sinh → hệ thống chặn lại và hiển thị thông báo toast: `"Vui lòng nhập giờ sinh"`.
- [ ] Khi điền đầy đủ và hợp lệ tất cả các thông tin $\rightarrow$ hệ thống thực hiện lưu dữ liệu xem tử vi gần nhất vào LocalStorage (ngày sinh, giờ sinh, giới tính) và thực hiện chuyển hướng người dùng sang trang kết quả tử vi nghề nghiệp

---

## US-02: Chuyển hướng và Tự động điền dữ liệu theo trạng thái Hồ sơ sinh (Smart Redirection & Autofill)

**User Story**
**As a** người dùng truy cập tính năng tử vi nghề nghiệp
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

- [ ] Khi người dùng truy cập tính năng tử vi nghề nghiệp, hệ thống kiểm tra trong `LocalStorage` xem đã có đầy đủ 3 thông tin hồ sơ sinh xem tử vi (gồm Giới tính, Ngày sinh dương lịch, Giờ sinh) từ bất kỳ tiện ích tử vi nào trước đó (nghề nghiệp, tài chính, tình duyên, vận hạn, tử vi hàng ngày).
- [ ] Nếu đã có đầy đủ cả 3 thông tin hồ sơ sinh -> Chuyển hướng trực tiếp người dùng sang trang kết quả thay vì hiển thị màn hình nhập thông tin tử vi nghề nghiệp

**2. Hiển thị màn hình nhập liệu và tự động điền các thông tin đã có khi THIẾU hồ sơ sinh (Autofill)**

- [ ] Nếu thông tin hồ sơ sinh trong hệ thống chưa đầy đủ (ví dụ: mới chỉ có giới tính và ngày sinh, chưa có giờ sinh; hoặc chưa có thông tin nào):
  - [ ] Hiển thị màn hình nhập thông tin tử vi nghề nghiệp
  - [ ] Hệ thống tự động điền trước (Autofill) những thông tin đã tồn tại trong `LocalStorage` vào biểu mẫu
  - [ ] Các trường được tự động điền hiển thị đúng giá trị đã có dưới dạng trực quan nổi bật (ngày sinh hiển thị định dạng `DD/MM/YYYY` in đậm) để người dùng dễ nhận biết.

---

## US-03: Xem tóm tắt đặc quyền lợi ích lá số sự nghiệp

**User Story**
**As a** người dùng chuẩn bị điền thông tin sự nghiệp
**I want to** xem danh sách các lợi ích lớn mà tôi sẽ nhận được sau khi xem luận giải chi tiết
**So that** tôi có thêm động lực để cung cấp chính xác ngày giờ sinh của mình

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                             |
| --------------------- | ----------- | ------------------------------------------------------------------------------------ |
| **I**ndependent | ✅          | Khối nội dung tĩnh hiển thị dưới form nhập liệu.                            |
| **N**egotiable  | ✅          | Câu chữ, icon hoặc số lượng lợi ích có thể tinh chỉnh sau.                |
| **V**aluable    | ✅          | Tăng tỷ lệ hoàn thành điền form (Conversion Rate) bằng cách nêu giá trị. |
| **E**stimable   | ✅          | Render tĩnh hoàn toàn, cực kỳ dễ ước lượng.                                |
| **S**mall       | ✅          | Viết HTML/CSS tĩnh trong vài phút.                                               |
| **T**estable    | ✅          | Đảm bảo hiển thị đúng câu chữ và biểu tượng dấu tích xanh.            |

### Tiêu chí nghiệm thu

**1. Hiển thị danh sách lợi ích tĩnh (Happy path)**

- [ ] Ở chân trang, phía dưới nút gửi biểu mẫu → hiển thị khối `"Bạn sẽ nhận được gì?"` để tạo độ hấp dẫn cho dịch vụ.
- [ ] Danh sách hiển thị chính xác 3 lợi ích cốt lõi kèm icon dấu tích màu xanh lục bảo:
  - [ ] Lợi ích 1: `"Hiểu rõ điểm mạnh và điều cần cải thiện"`
  - [ ] Lợi ích 2: `"Gợi ý hướng phát triển và công việc phù hợp"`
  - [ ] Lợi ích 3: `"Tham khảo cơ hội và thách thức trong sự nghiệp"`

---

## US-04: Hiển thị luận giải phân tích tương ứng theo độ tuổi và Màn hình chi tiết

**User Story**
**As a** người dùng đã nhập hồ sơ sinh và xem kết quả tử vi nghề nghiệp
**I want to** hệ thống hiển thị các đề mục phân tích chính xác với giai đoạn tuổi của tôi trong năm 2026, đồng thời hỗ trợ xem chi tiết dưới dạng Màn hình chi tiết mới
**So that** tôi nhận được các thông tin luận giải thực tế và phù hợp nhất cho chặng đường học tập/sự nghiệp của mình.

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                             |
| --------------------- | ----------- | ------------------------------------------------------------------------------------ |
| **I**ndependent | ✅          | Độc lập, chạy trên trang kết quả tuvi_nghenghiep.html và tuvi_nghenghiep_detail.html. |
| **N**egotiable  | ✅          | Cách thiết kế giao diện Màn hình chi tiết và cách phân bổ các Tab có thể thay đổi.  |
| **V**aluable    | ✅          | Cung cấp nội dung luận giải đầy đủ, chi tiết và có tổ chức tốt theo Tab điều hướng.  |
| **E**stimable   | ✅          | Logic xử lý cuộn và Tab đơn giản bằng Javascript.                                    |
| **S**mall       | ✅          | Triển khai logic và nội dung trong vài giờ làm việc.                                |
| **T**estable    | ✅          | Kiểm thử bằng cách bấm vào các mục lớn trên trang kết quả và kiểm tra trượt cuộn.    |

### Tiêu chí nghiệm thu

**1. Tính toán nhóm tuổi và cập nhật thông tin tổng quát (Happy path)**
- [ ] Tính tuổi người dùng dựa trên công thức `2026 - năm sinh`.
- [ ] Dịch năm sinh dương lịch sang tuổi âm lịch truyền thống (ví dụ: sinh năm 1981 -> Tuổi Dậu) và hiển thị thông tin kèm hình ảnh phù hợp.
- [ ] Cập nhật chính xác ngày sinh định dạng `DD/MM/YYYY`, giờ sinh dịch sang giờ âm lịch truyền thống (ví dụ: `09:30` -> Giờ Tị (9h-11h)) kèm theo tuổi hiển thị trong ngoặc (ví dụ: `(45 tuổi)`).

**2. Bản đồ đề mục phân tích theo độ tuổi**
- [ ] **Nhóm tuổi 16-18**:
  - [ ] Mục II hiển thị tiêu đề: `"II. Định hình năng lực học tập"`.
  - [ ] Mục III hiển thị tiêu đề: `"III. Định hướng lĩnh vực ngành nghề phù hợp trong tương lai"`.
- [ ] **Nhóm tuổi 19-23**:
  - [ ] Mục II hiển thị tiêu đề: `"II. Định hướng sự nghiệp"`.
  - [ ] Mục III hiển thị tiêu đề: `"III. Định hướng kỹ năng - lĩnh vực - ngành nghề phù hợp"`.
- [ ] **Nhóm tuổi 24-30**:
  - [ ] Mục II hiển thị tiêu đề: `"II. Định hướng phát triển"`.
  - [ ] Mục III hiển thị tiêu đề: `"III. Định hướng kỹ năng - ngành nghề - lĩnh vực phù hợp"`.
- [ ] **Nhóm tuổi >= 31**:
  - [ ] Mục II hiển thị tiêu đề: `"II. Định hình vị thế bản thân và hướng phát triển sự nghiệp"`.
  - [ ] Mục III hiển thị tiêu đề: `"III. Các lĩnh vực - ngành nghề tạo ra sự bứt phá"`.

**3. Tương tác Màn hình chi tiết (Detail Screen)**
- [ ] Khi bấm vào bất kỳ mục lớn nào trên danh sách phân tích sự nghiệp -> hệ thống thực hiện chuyển hướng người dùng sang trang chi tiết `tuvi_nghenghiep_detail.html` kèm các tham số URL hiện tại và chỉ định mục tương ứng (`&section=0|1` hoặc `&section=0|1|2` tùy theo độ tuổi).
- [ ] Khi trang chi tiết tải xong, hệ thống tự động cuộn (scroll) mượt mà đến đúng mục luận giải tương ứng được bấm.
- [ ] Thanh Tab điều hướng đầu trang hiển thị đúng tiêu đề của các mục chính theo tuổi (2 tab cho nhóm 16-18, 3 tab cho các nhóm tuổi khác). Bấm vào tab nào sẽ tự động cuộn mượt mà đến phần luận giải tương ứng.
- [ ] Khi người dùng cuộn thủ công nội dung, thanh Tab điều hướng tự động chuyển đổi trạng thái hoạt động (Active) khớp với phần nội dung đang xem trên màn hình (Scrollspy).
- [ ] Các điểm mạnh/yếu, thuận lợi/khó khăn hoặc tích cực/tiêu cực được gắn nhãn badge nổi bật (xanh/đỏ) để tăng tính thẩm mỹ và dễ đọc.
- [ ] Bấm nút quay lại (Back) trên thanh App Bar ở trang chi tiết sẽ quay lại màn kết quả `tuvi_nghenghiep.html` và giữ nguyên các tham số URL ban đầu.


