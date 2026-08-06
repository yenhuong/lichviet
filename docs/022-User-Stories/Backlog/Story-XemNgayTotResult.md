---
id: Story-XemNgayTotResult
type: story
status: draft
project: Lich_Viet
created: 2026-06-25
linked-to: [[Story-XemNgayTotInput]]
---
# User Stories - Màn hình Kết quả gợi ý ngày tốt việc quan trọng

Tài liệu này định nghĩa các user story cho màn hình **Kết quả ngày tốt việc quan trọng** (bao gồm 8 việc quan trọng: Cưới hỏi, Mua xe, Mua nhà, Khai trương, Khởi công, Nhập trạch, Ký hợp đồng, Mua tài sản có giá trị) theo mô hình Freemium kết hợp Paywall nâng cấp tài khoản.

---

## US-01: Xem kết quả gợi ý ngày tốt việc quan trọng (Freemium & Premium Modes)

**User Story**
**As a** người dùng Lịch Việt đã nhập thông tin xem ngày tốt việc quan trọng
**I want to** xem kết quả gợi ý ngày tốt phù hợp theo từng hạng tài khoản (Free / Premium xem ngày tốt full)
**So that** tôi có thể biết được các ngày đẹp và chuẩn bị thực hiện công việc trọng đại một cách thuận lợi, an tâm nhất.

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                                             |
| --------------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Hoạt động độc lập không phụ thuộc các phân hệ khác.                                     |
| **N**egotiable  | ✅          | UI/UX của danh sách kết quả có thể tinh chỉnh theo thiết kế.                                |
| **V**aluable    | ✅          | Giá trị cốt lõi cung cấp nội dung xem ngày phong thủy cá nhân hóa.                        |
| **E**stimable   | ✅          | Đã có prototype cụ thể, dễ ước lượng độ phức tạp logic.                                |
| **S**mall       | ✅          | Thực hiện nhanh trong vòng 1-2 ngày làm việc.                                                  |
| **T**estable    | ✅          | Có các kịch bản kiểm thử cho cả tài khoản Free và tài khoản Premium xem ngày tốt full. |

### Tiêu chí nghiệm thu

**1. Khối thông tin xem (User Input Summary Block)**

- [ ] Hiển thị đầy đủ thông tin xem ngày tốt đã nhập từ màn hình trước đó, bao gồm:
  - [ ] Họ tên (nếu có).
  - [ ] Tuổi.
  - [ ] Màu xe (nếu có, hiển thị đối với việc Mua xe).
  - [ ] Việc cần xem (nếu có, hiển thị với việc cưới hỏi, nhập trạch).
  - [ ] Hướng cửa hàng/hướng nhà (nếu có, chỉ hiển thị đối với việc Khai trương, Nhập trạch, Khởi công).
  - [ ] Khoảng thời gian xem.
- [ ] **Thay đổi khoảng thời gian xem trực tiếp**:
  - [ ] Khoảng thời gian xem có tính năng cho phép chỉnh sửa/thay đổi trực tiếp ngay trên khối thông tin này.
  - [ ] Khi người dùng thay đổi xong khoảng thời gian, hệ thống tự động tải lại (reload) và cập nhật danh sách kết quả ngày tốt mới.

**2. Phân quyền hiển thị danh sách kết quả theo hạng tài khoản**

- [ ] **Trường hợp tài khoản Premium xem ngày tốt full**:
  - [ ] Hiển thị đầy đủ chi tiết tất cả các khối ngày tốt tìm thấy trong khoảng thời gian đã chọn hoặc khối gợi ý ngày tốt ngoài khoảng nếu có (giữ nguyên như trước, không thay đổi).
  - [ ] Không hiển thị bất kỳ biểu tượng khóa hay lớp làm mờ nào.
  - [ ] Nhấp vào mỗi thẻ ngày tốt → điều hướng sang màn hình Chi tiết ngày đó
- [ ] **Trường hợp tài khoản Free (Khi tìm thấy từ 2 ngày tốt trở lên trong khoảng đã chọn)**:
  - [ ] **Gợi ý miễn phí 1 ngày tốt**: Ngày tốt gần nhất mà không phải là ngày tốt nhất
  - [ ] **Khóa toàn bộ các ngày tốt còn lại**: Hiển thị khối mở khoá xem đầy đủ ngày tốt
  - [ ] **Tương tác**: Nhấp vào khối mở khoá → chuyển tới màn đăng ký dịch vụ chọn Gói Vàng (theo deeplink cấu hình)

**3. Xử lý kịch bản chỉ tìm thấy duy nhất 1 ngày tốt (One Day Scenario)**

- [ ] **Trường hợp tài khoản Premium xem ngày tốt full (Có duy nhất 1 ngày tốt)**:
  - [ ] Hiển thị thêm text link `"Đổi thời gian để xem thêm ngày"`. Nhấp vào → mở Bottom Sheet chọn khoảng thời gian. Sau khi chọn xong khoảng thời gian mới → hệ thống tự động tải lại (reload) trang kết quả.
- [ ] **Trường hợp tài khoản Free (Có duy nhất 1 ngày tốt)**:
  - [ ] Ẩn ngày tốt đó (không hiển thị ra ngoài giao diện danh sách).
  - [ ] Cập nhật tiêu đề trạng thái kết quả thành: `"Tìm thấy 1 ngày tốt trong khoảng thời gian bạn chọn"`.
  - [ ] Hiển thị khối mở khoá xem đầy đủ ngày tốt. Nhấp vào khối mở khoá → chuyển tới màn đăng ký dịch vụ chọn Gói Vàng (theo deeplink cấu hình).
  - [ ] Hiển thị text link màu `"Đổi thời gian để xem thêm ngày ›"` (#oneDaySecondaryCTA). Nhấp vào → mở Bottom Sheet chọn khoảng thời gian. Sau khi chọn xong khoảng thời gian mới → hệ thống tự động tải lại (reload) trang kết quả.

**4. Xử lý kịch bản không tìm thấy ngày tốt (No Good Days Found Scenario)**

- [ ] **Trường hợp tài khoản Premium xem ngày tốt full (Không tìm thấy ngày tốt)**:
  - [ ] Hiển thị nguyên nhân chi tiết dẫn đến việc không tìm thấy ngày tốt trong khoảng thời gian đã chọn.
  - [ ] Hiển thị thêm text link `"Đổi thời gian để xem thêm ngày"`. Nhấp vào → mở Bottom Sheet chọn khoảng thời gian. Sau khi chọn xong khoảng thời gian mới → hệ thống tự động tải lại (reload) trang kết quả.
  - [ ] Hiển thị danh sách gợi ý các ngày tốt nằm ngoài khoảng thời gian đã chọn (nếu tìm thấy).
  - [ ] Hiển thị gợi ý các tuổi phù hợp để tiến hành thủ tục mượn tuổi cho công việc.
- [ ] **Trường hợp tài khoản Free (Không tìm thấy ngày tốt)**:
  - [ ] Chỉ hiển thị nguyên nhân dẫn đến việc không tìm thấy ngày tốt.
  - [ ] Hiển thị thêm text link màu `"Đổi thời gian để xem thêm ngày ›"` (#noDaySecondaryCTA). Nhấp vào → mở Bottom Sheet chọn khoảng thời gian. Sau khi chọn xong khoảng thời gian mới → hệ thống tự động tải lại (reload) trang kết quả.
  - [ ] Ẩn toàn bộ phần gợi ý ngày tốt ngoài khoảng và tính năng mượn tuổi.
  - [ ] Hiển thị khối mở khóa xem đầy đủ ngày tốt nhằm khuyến khích người dùng nâng cấp lên Gói Vàng.

**5. Điều hướng quay lại (Back Navigation)**

- [ ] Khi người dùng nhấn nút quay lại (Back) trên thanh App Bar của màn hình Kết quả
  - [ ] Hệ thống thực hiện điều hướng quay lại trực tiếp màn hình nhập liệu trước đó.
  - [ ] **Không hiển thị popup đánh giá dịch vụ xem ngày tốt**

---

## US-02: Khối mở khoá xem đầy đủ ngày tốt

**User Story**
**As a** người dùng Lịch Việt sử dụng tài khoản miễn phí (Free Tier)
**I want to** thấy khối nâng cấp Gói Vàng nổi bật với các quyền lợi chi tiết cho từng việc
**So that** tôi hiểu rõ giá trị cao cấp của tài khoản Premium xem ngày tốt full và dễ dàng thực hiện thanh toán nâng cấp tài khoản.

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                                                           |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| **I**ndependent | ✅          | Độc lập với luồng hiển thị ngày tốt của tài khoản Premium xem ngày tốt full.                         |
| **N**egotiable  | ✅          | Nội dung quyền lợi và mức giá có thể thay đổi linh hoạt theo chiến dịch.                              |
| **V**aluable    | ✅          | Thúc đẩy người dùng nâng cấp gói Premium xem ngày tốt full (tăng doanh thu).                           |
| **E**stimable   | ✅          | Logic xử lý sự kiện click nút đơn giản.                                                                   |
| **S**mall       | ✅          | Thực hiện nhanh trong vòng vài giờ làm việc.                                                                |
| **T**estable    | ✅          | Kiểm thử bằng cách nhấn nút thanh toán và xác nhận tài khoản chuyển sang Premium xem ngày tốt full. |

### Tiêu chí nghiệm thu

- [ ] Khối mở khoá, cấu hình trên cms gồm ảnh + deeplink mua gói
- [ ] Nhấp vào bất kỳ vị trí nào trên khối → chuyển tới màn đăng ký dịch vụ chọn Gói Vàng (theo deeplink cấu hình)
- [ ] Sau khi mua thành công thì sẽ load lại màn kết quả
