---
id: Story-ChiTietCung
type: story
status: draft
project: Lich_Viet
created: 2026-05-11
linked-to: [[Story-TuViTongQuan]]
---
# User Stories - Màn hình Chi tiết cung (Lá số tử vi)

Tài liệu này định nghĩa các user story cho màn hình **Chi tiết lá số** (`chitiet_cung.html`), được viết theo chuẩn INVEST và định dạng Bullet Checklist (dựa trên workflow `gen-user-story`).

**Prototype tham chiếu**: [[chitiet_cung.html]]

---

## US-01: Điều hướng và chuyển đổi chi tiết các cung

**User Story**
**As a** người dùng đang xem chi tiết lá số
**I want to** vuốt và chọn các cung khác nhau trên thanh điều hướng ngang (Tab Bar)
**So that** tôi có thể dễ dàng chuyển sang xem luận giải của các cung khác mà không cần quay lại màn hình tổng quan

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                          |
| --------------------- | ----------- | --------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Component Tab Bar có thể hoạt động và test độc lập với phần nội dung. |
| **N**egotiable  | ✅          | UX cuộn tự động có thể điều chỉnh theo feedback.                         |
| **V**aluable    | ✅          | Cải thiện luồng trải nghiệm, tiết kiệm số lần thao tác (clicks).        |
| **E**stimable   | ✅          | UI chuẩn của nền tảng, JS logic rõ ràng.                                    |
| **S**mall       | ✅          | Chỉ bao gồm UI của thanh Tab và event trigger.                                |
| **T**estable    | ✅          | Dễ dàng test các state: Active, Inactive, Scroll.                              |

### Tiêu chí nghiệm thu

**1. Hiển thị thanh Tab Bar 12 cung (Happy path)**

- [ ] Khi màn hình tải xong, hiển thị thanh Tab Bar nằm ngang chứa đầy đủ 12 cung.
- [ ] Tab Bar được ghim (sticky) sát dưới App Bar khi người dùng cuộn trang xuống.
- [ ] Mỗi Tab hiển thị: Icon emoji, Tên cung, Nhãn đánh giá (VD: Tốt, Cần chú ý...) và Điểm phần trăm.

**2. Trạng thái Active và Inactive của Tab (UI/Edge case)**

- [ ] Khi một Tab ở trạng thái được chọn (Active) → Tab đó có nền màu xanh.
- [ ] Các Tab còn lại (Inactive) → có nền trắng

**3. Tương tác chuyển đổi cung (Happy path)**

- [ ] Bấm vào Tab của một cung khác → cập nhật Tab mới thành trạng thái Active.
- [ ] Thanh Tab Bar tự động cuộn (smooth scroll) để đưa Tab vừa chọn vào vị trí giữa màn hình (center of view).
- [ ] Đồng thời kích hoạt sự kiện thay đổi nội dung luận giải bên dưới.

---

## US-02: Xem luận giải chi tiết của cung được chọn

**User Story**
**As a** người dùng đã chọn một cung cụ thể
**I want to** đọc bảng tổng kết ngắn và các khối luận giải phân tích chuyên sâu
**So that** tôi hiểu rõ các khía cạnh, điểm mạnh yếu và lời khuyên cho phương diện cuộc sống đó

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                      |
| --------------------- | ----------- | ----------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Data của từng cung là độc lập.                                          |
| **N**egotiable  | ✅          | Số lượng khối nội dung (blocks) có thể linh hoạt theo data thực tế. |
| **V**aluable    | ✅          | Cung cấp giá trị nội dung (content value) chính của tính năng.        |
| **E**stimable   | ✅          | Chỉ là hiển thị text, icon từ API.                                       |
| **S**mall       | ✅          | Focus hoàn toàn vào việc render text blocks.                              |
| **T**estable    | ✅          | Test với data dài/ngắn, test trường hợp cung bị thiếu data.           |

### Tiêu chí nghiệm thu

**1. Hiển thị khối Tổng kết chung (Happy path)**

- [ ] Khi chọn một Tab cung (VD: cung Mệnh) → hiển thị khối "Tổng kết cung [Tên cung]" ngay dưới thanh Tab Bar.
- [ ] Khối tổng kết có nền màu xanh mờ chứa 1-2 câu tóm tắt cốt lõi của cung đó.

**2. Hiển thị các khối nội dung chi tiết phân đoạn (Happy path)**

- [ ] Nếu dữ liệu của cung có nhiều khía cạnh phân tích → mỗi khía cạnh được hiển thị thành một khối (Content Block) riêng biệt.
- [ ] Mỗi khối có Tiêu đề kèm Icon tương ứng nếu có
- [ ] Nội dung luận giải bên trong được format dưới dạng danh sách gạch đầu dòng (bullet points) để dễ đọc.

**3. Cập nhật nội dung động khi chuyển Tab (Integration)**

- [ ] Bấm sang Tab cung B → ẩn ngay lập tức các Content Block của cung A.
- [ ] Hiển thị các Content Block của cung B cùng lúc với việc cập nhật khối Tổng kết chung.

**4. Xử lý khi cung chưa có dữ liệu luận giải chi tiết (Negative path)**

- [ ] Khi API trả về dữ liệu rỗng cho các khối phân tích chi tiết của một cung → vẫn hiển thị khối Tổng kết chung.

## US-03: Khám phá thêm

Khối khám phá thêm ở màn tử vi tổng quan
