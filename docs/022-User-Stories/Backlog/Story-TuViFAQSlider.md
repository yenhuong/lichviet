---
id: Story-TuViFAQSlider
type: story
status: draft
project: Lich_Viet
created: 2026-06-29
linked-to: [[US-TrangChu-KhoiChinh]], [[Spec-TuViFaqSlider]]
---
# User Stories - Khối Câu Hỏi Tử Vi Thường Gặp (Trang chủ & Chi tiết)

Tài liệu này định nghĩa chi tiết User Story và Tiêu chí nghiệm thu (Acceptance Criteria) cho tính năng **Câu hỏi tử vi thường gặp** bao gồm khối hiển thị tĩnh ở Trang chủ và Màn hình chi tiết giải đáp

---

## US-08: Khối câu hỏi tử vi thường gặp hiển thị trên Trang chủ

### Câu chuyện người dùng

**As a** người dùng mở ứng dụng Lịch Việt xem Trang chủ
**I want to** thấy thẻ câu hỏi tử vi thường gặp hiển thị cố định ở vị trí dưới khối thông tin ngày hôm nay
**So that** tôi dễ dàng tiếp cận, kích thích tò mò và bấm vào tìm hiểu sâu hơn về vận mệnh/sự nghiệp của bản thân

---

### Metadata

- **Epic/Feature**: Khối Câu hỏi Tử vi Trang chủ
- **Priority**: Must (MoSCoW)
- **Estimate**: 1 Story Point (XS)
- **Dependencies**: API lấy câu hỏi tử vi thường gặp. Danh sách câu hỏi tử vi thường gặp: https://docs.google.com/spreadsheets/d/1i4CG4dT7EdNsHfQhO8JGOz67QLiyCeLONgyGdDec-HU/edit?usp=sharing

### INVEST Self-check

| Tiêu chí            | Đánh giá | Ghi chú                                                                                                     |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| **I**ndependent | ✅          | Độc lập về mặt UI và logic hiển thị, có thể phát triển riêng lẻ so với màn chi tiết.        |
| **N**egotiable  | ✅          | Nội dung chữ, màu sắc, cách phối màu gradient có thể thảo luận và cấu hình lại.               |
| **V**aluable    | ✅          | Giúp tăng tỷ lệ truy cập (Click-Through Rate) vào các tính năng tử vi chuyên sâu từ trang chủ. |
| **E**stimable   | ✅          | Giao diện tĩnh hiển thị dữ liệu trực tiếp, cực kỳ dễ ước lượng.                               |
| **S**mall       | ✅          | Phạm vi công việc tối giản, có thể hoàn thành và kiểm thử nhanh chóng trong 1 ngày làm việc. |
| **T**estable    | ✅          | Tiêu chí nghiệm thu tĩnh rõ ràng giúp QA dễ dàng xây dựng kịch bản kiểm thử nhanh.            |

---

### Tiêu chí nghiệm thu

**1. Hiển thị thông tin Thẻ Tử vi hợp lệ (Happy path)**

File dữ liệu câu hỏi tử vi thường gặp: https://docs.google.com/spreadsheets/d/1i4CG4dT7EdNsHfQhO8JGOz67QLiyCeLONgyGdDec-HU/edit?usp=sharing

- [ ] Khi người dùng truy cập Trang chủ → hệ thống hiển thị Khối Câu hỏi Tử vi thường gặp đầy đủ các thành phần giao diện:

  - [ ] icon chủ đề
  - [ ] tênchủ đề ví dụ `"Cơ hội tự lập"`
  - [ ] Tiêu đề câu hỏi ví dụ `"Lá số của bạn có thể khởi nghiệp hay không?"`

**2. Tương tác và điều hướng (Happy path)**

- [ ] Khi người dùng chạm vào bất kỳ vị trí nào trên Thẻ Tử vi → hệ thống thực hiện chuyển hướng mượt mà sang màn hình chi tiết Giải mã lá số

**3. Xử lý tiêu đề quá dài (Edge case)**

- [ ] Trong trường hợp tiêu đề câu hỏi cấu hình động từ CMS quá dài → hệ thống hiển thị tối đa 3 dòng và tự động cắt chữ bằng dấu `"..."` ở cuối để đảm bảo không làm vỡ bố cục chiều cao thẻ.

**4. Lỗi kết nối hoặc dữ liệu rỗng từ CMS (Negative path)**

- [ ] Khi hệ thống gọi API lấy thông tin câu hỏi tử vi từ CMS nhưng gặp lỗi kết nối mạng hoặc trả về dữ liệu rỗng → hệ thống ẩn hoàn toàn Khối câu hỏi tử vi thường gặp này khỏi giao diện Trang chủ.

**5. Điều kiện hiển thị hồ sơ cá nhân (Business Rules - Happy path)**

- [ ] Khối Câu hỏi tử vi luôn hiển thị trên Trang chủ bất kể tình trạng đầy đủ hay thiếu thông tin hồ sơ của người dùng (không phân biệt đã điền đủ ngày sinh, giờ sinh, giới tính hay chưa).
- [ ] Người dùng chưa điền đủ thông tin khi click vào thẻ vẫn điều hướng đến màn hình chi tiết giải đáp.

**6. Cơ chế xoay vòng và hiển thị câu hỏi (Business Rules - Happy path)**

- [ ] Khi đến thời điểm hiển thị câu hỏi mới → hệ thống chọn ngẫu nhiên 1 câu hỏi từ danh sách câu hỏi tử vi thường gặp để hiển thị. Các lần hiện câu hỏi tử vi không bị trùng nhau, nào hết câu hỏi thì mới hiện lại
- [ ] Một câu hỏi sau khi được chọn hiển thị sẽ xuất hiện liên tục trên Trang chủ trong vòng **Y ngày** (Y là số nguyên dương được cấu hình tại file `config`).
- [ ] Sau khi hiển thị đủ Y ngày, hệ thống sẽ ẩn khối câu hỏi tử vi này trên Trang chủ trong vòng **X ngày** tiếp theo (X là số nguyên dương được cấu hình tại file `config`) trước khi chọn ngẫu nhiên một câu hỏi khác để bắt đầu chu kỳ hiển thị mới.

---

## US-09: Xem nội dung giải đáp chi tiết câu hỏi tử vi

### Câu chuyện người dùng

**As a** người dùng muốn tìm hiểu chi tiết về một câu hỏi tử vi cụ thể
**I want to** xem nội dung câu hỏi, lời giải mã chi tiết, đánh giá hữu ích và các gợi ý tử vi chuyên sâu liên quan
**So that** tôi hiểu rõ vận mệnh của mình và có định hướng hành động phù hợp trong công việc/cuộc sống

---

### Metadata

- **Epic/Feature**: Màn hình Chi tiết Hỏi đáp Tử vi
- **Priority**: Must (MoSCoW)
- **Estimate**: 3 Story Points (S)
- **Dependencies**: API lấy chi tiết lời giải mã câu hỏi theo ID
- **Assumptions**:
  - Màn hình hiển thị nội dung động hoàn toàn dựa vào ID câu hỏi truyền sang từ Trang chủ.

---

### INVEST Self-check

| Tiêu chí            | Đánh giá | Ghi chú                                                                                                 |
| --------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Độc lập về mặt dữ liệu và UI, có thể load từ bất kỳ nguồn link/deeplink nào.              |
| **N**egotiable  | ✅          | Font chữ, bố cục khối khám phá và các hiệu ứng phản hồi có thể tùy biến theo thiết kế. |
| **V**aluable    | ✅          | Cung cấp lời giải mã chi tiết và giá trị cốt lõi của dịch vụ giải đáp lá số.           |
| **E**stimable   | ✅          | Các phần hiển thị văn bản tĩnh và card điều hướng rất rõ ràng, dễ ước lượng.         |
| **S**mall       | ✅          | Giao diện cuộn dọc đơn giản, có thể hoàn thành tốt trong sprint.                              |
| **T**estable    | ✅          | Đầy đủ kịch bản kiểm thử hiển thị, nút quay lại, đánh giá hữu ích và CTA.              |

---

### Tiêu chí nghiệm thu

**1. Hiển thị khối câu hỏi (Happy path)**

- [ ] Khi truy cập màn hình chi tiết → hệ thống hiển thị Khối Câu hỏi rộng tràn viền đầy đủ ở đầu trang
- [ ] Khối câu hỏi hiển thị hình nền nhẹ
- [ ] Tên chủ đề ví dụ  `"Cơ hội tự lập"` hiển thị kết hợp icon chủ đề
- [ ] Nội dung câu hỏi ví dụ `"Lá số của tôi có thể khởi nghiệp hay không??"` hiển thị chữ to đậm, rõ ràng

**2. Đọc nội dung lời giải mã (Happy path - Trạng thái đã đủ thông tin)**

- [ ] Khi hồ sơ người dùng đã được cập nhật **đầy đủ 3 thông tin** (Ngày sinh, Giờ sinh, Giới tính):
  - [ ] Hiển thị câu trả lời của câu hỏi tương ứng, hiển thị mạch lạc.

**3. Khối điều hướng tới tính năng tử vi (Explore More) (Happy path - Trạng thái đã đủ thông tin)**

- [ ] Khi hồ sơ người dùng đã được cập nhật **đầy đủ 3 thông tin** (Ngày sinh, Giờ sinh, Giới tính):
  - [ ] Hiển thị ảnh điều hướng ứng với tính năng tử vi tương ứng với câu hỏi đó.
  - [ ] Khi nhấn vào ảnh → hệ thống chuyển hướng sang tính năng tử vi tương ứng. Ví dụ câu hỏi "Lá số của tôi có thể khởi nghiệp hay không?", thì ứng với tính năng tử vi nghề nghiệp.

**4. Khối yêu cầu bổ sung thông tin hồ sơ (Happy path - Trạng thái chưa đủ thông tin)**

- [ ] Khi hồ sơ người dùng **chưa cập nhật đầy đủ thông tin** (thiếu ít nhất một trong ba thông tin: Ngày sinh, Giờ sinh, Giới tính) → hệ thống ẩn hoàn toàn nội dung câu trả lời (Mục 2) và Khối điều hướng tính năng tử vi (Mục 3).
- [ ] Giao diện màn hình chi tiết hiển thị khối thông tin yêu cầu nhập liệu như hình ảnh thiết kế:
  - [ ] Hiển thị hình ảnh minh hoạ ở chính giữa.
  - [ ] Hiển thị dòng chữ tiêu đề: `"Luận riêng theo lá số của bạn"` (in đậm, căn giữa).
  - [ ] Hiển thị dòng chữ phụ đề: `"Thêm ngày sinh, giờ sinh và giới tính để xem câu trả lời dành riêng cho bạn"` (chữ thường, màu xám, căn giữa).
  - [ ] Hiển thị nút bấm kén lớn màu xanh dương chứa dòng chữ màu trắng: `"NHẬP THÔNG TIN"`.
- [ ] Khi người dùng bấm nút `"NHẬP THÔNG TIN"` → hệ thống chuyển hướng người dùng đến màn hình nhập thông tin hồ sơ tử vi. Màn nhập bắt buộc có đủ thông tin ngày, giờ sinh, giới tính

**5. Thanh điều hướng AppBar và Nút Quay lại (Happy path)**

- [ ] AppBar hiển thị tiêu đề `"Giải đáp lá số"` căn giữa.
- [ ] Nút bên trái hiển thị icon back → bấm vào quay lại màn hình trước đó.
- [ ] Nút bên phải hiển thị biểu tượng Chia sẻ màu trắng. Nhấn vào thì sẽ chia sẻ ảnh kết quả màn này cho người khác.

**6. Đánh giá Hữu ích / Không hữu ích (Interaction)**

- [ ] Cuối trang hiển thị thanh phản hồi chia 2 cột: `"Hữu ích"` (icon like) và `"Không hữu ích"` (icon dislike) phân cách bởi vạch dọc.
- [ ] Khi chạm vào mỗi lựa chọn → hệ thống lưu lại để thống kê xem có bao nhiêu lượt click/người click vào từng câu hỏi.
- [ ] Câu hỏi nào người dùng đã đánh giá rồi thì khi vào lại câu hỏi đó, hiển thị đúng trạng thái người dùng đã đánh giá.

---

### Luồng thao tác

**TH1: Người dùng đã điền đủ thông tin hồ sơ**

1. Người dùng chạm vào câu hỏi tử vi từ Trang chủ hoặc nhấp vào deeplink chi tiết.
2. Hệ thống tải nội dung câu hỏi và lời giải mã tương ứng.
3. Giao diện hiển thị câu hỏi, câu trả lời và ảnh điều hướng tính năng tử vi.
4. Người dùng bấm vào ảnh ví dụ ảnh đó điều hướng tới tính năng tử vi nghề nghiệp.
5. Hệ thống chuyển tiếp người dùng sang màn tử vi nghề nghiệp.

**TH2: Người dùng chưa điền đủ thông tin hồ sơ**

1. Người dùng chạm vào câu hỏi tử vi từ Trang chủ hoặc nhấp vào deeplink chi tiết.
2. Hệ thống kiểm tra thấy thông tin hồ sơ chưa đầy đủ (ngày sinh, giờ sinh, giới tính).
3. Giao diện hiển thị câu hỏi ở đầu trang, ẩn câu trả lời, và hiển thị khối thông báo yêu cầu nhập thông tin kèm nút "NHẬP THÔNG TIN".
4. Người dùng bấm nút "NHẬP THÔNG TIN".
5. Hệ thống chuyển tiếp người dùng sang màn hình cập nhật thông tin hồ sơ.
