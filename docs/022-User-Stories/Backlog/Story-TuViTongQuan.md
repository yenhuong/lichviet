---
id: Story-TuViTongQuan
type: story
status: draft
project: Lich_Viet
created: 2026-05-11
linked-to: [[Story-VanHan2026]]
---
# User Stories - Màn hình Tử vi tổng quan

Tài liệu này định nghĩa các user story cho màn hình **Tử vi tổng quan** (`tuvi_tongquan.html`), được viết theo chuẩn INVEST và định dạng Bullet Checklist (dựa trên workflow `gen-user-story`).

**Prototype tham chiếu**: [[tuvi_tongquan.html]]

---

## US-01: Xem thông tin cá nhân trên lá số

**User Story**
**As a** người dùng ứng dụng Lịch Việt quan tâm đến tử vi
**I want to** xem thông tin cá nhân cơ bản (họ tên, ngày giờ sinh, giới tính, con giáp) ngay trên đầu trang lá số
**So that** tôi có thể xác nhận lá số đang xem chính xác là của mình hoặc người thân mà tôi đã chọn

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                          |
| --------------------- | ----------- | ----------------------------------------------------------------- |
| **I**ndependent | ✅          | Độc lập với các phần nội dung khác của màn hình.       |
| **N**egotiable  | ✅          | UI có thể thay đổi bố cục tùy theo feedback design.        |
| **V**aluable    | ✅          | Giúp user tránh nhầm lẫn khi xem lá số của nhiều người. |
| **E**stimable   | ✅          | Dễ ước lượng do chủ yếu là render data tĩnh.             |
| **S**mall       | ✅          | Phạm vi nhỏ, dễ triển khai trong vài giờ.                   |
| **T**estable    | ✅          | Có các trường hợp UI/Edge case cụ thể để test.           |

### Tiêu chí nghiệm thu

**1. Hiển thị đầy đủ thông tin cá nhân hợp lệ (Happy path)**

- [ ] Khi truy cập màn hình "Tử vi tổng quan" và người dùng có đủ thông tin hồ sơ → thẻ thông tin hiển thị chính xác Họ tên, Ngày tháng năm sinh (kèm giờ sinh), và Giới tính.
- [ ] Tại phần hình ảnh thẻ thông tin → hệ thống tự động map năm sinh để hiển thị avatar con giáp tương ứng (VD: Sinh năm 1993 Tuổi Dậu → hiển thị avatar hình gà).

**2. Xử lý hiển thị tên quá dài (Edge case)**

- [ ] Trong trường hợp độ dài họ tên của người dùng vượt quá chiều rộng không gian 1 dòng → hệ thống tự động truncate họ tên kèm dấu "..." ở cuối để đảm bảo không bị rớt dòng làm vỡ layout thẻ.

**3. Mở popup chọn người thân (Happy path)**

- [ ] Khi bấm vào nút "Xem cho người thân" → hệ thống mở danh sách người thân đã lưu (dưới dạng bottom sheet hoặc popup) để người dùng chọn xem và thay đổi ngữ cảnh lá số.

---

## US-02: Xem đánh giá tổng quan 12 cung chức năng

**User Story**
**As a** người dùng muốn tìm hiểu bức tranh toàn cảnh về vận mệnh
**I want to** xem danh sách đánh giá của 12 cung chức năng (Mệnh, Phụ Mẫu,...) kèm thanh trạng thái tốt/xấu
**So that** tôi nhanh chóng nắm bắt được những phương diện nào đang thuận lợi và phương diện nào cần lưu ý

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                             |
| --------------------- | ----------- | ------------------------------------------------------------------------------------ |
| **I**ndependent | ✅          | Hoạt động độc lập không phụ thuộc block khác.                              |
| **N**egotiable  | ✅          | Thuật toán tính phần trăm và threshold màu có thể chỉnh sửa.              |
| **V**aluable    | ✅          | Cung cấp cái nhìn toàn cảnh nhanh chóng, giá trị cốt lõi của tính năng. |
| **E**stimable   | ✅          | Đã rõ ràng về UI, phụ thuộc độ phức tạp API.                              |
| **S**mall       | ✅          | Chỉ bao gồm list view, phần detail được tách riêng.                          |
| **T**estable    | ✅          | Dễ dàng test các ngưỡng % và trạng thái màu sắc.                           |

### Tiêu chí nghiệm thu

**1. Hiển thị danh sách 12 cung mặc định (Happy path)**

- [ ] Khi người dùng cuộn đến phần "12 cung lá số của bạn" → hệ thống gọi API và render danh sách dọc gồm 12 thẻ cung theo đúng thứ tự chuẩn.
- [ ] Tại mỗi thẻ cung → hệ thống hiển thị đủ các trường: Icon, Tên cung, Mô tả tóm tắt (tự động truncate bằng dấu "..." nếu văn bản trả về dài quá 2 dòng) và Text Mức độ đánh giá.
- [ ] Text Mức độ đánh giá được map theo điểm số trả về (0-100%): ≥ 85% → "Rất tốt", 65%-84% → "Tốt", 50%-64% → "Ổn định", 25%-49% → "Chưa thuận lợi", < 25% → "Cần lưu ý".

**2. Điều hướng đến chi tiết cung (Interaction)**

- [ ] Khi người dùng thao tác bấm vào một thẻ cung bất kỳ trong danh sách → hệ thống điều hướng người dùng sang màn hình "Chi tiết cung" tương ứng

**3. Trạng thái loading (Edge case)**

- [ ] Khi màn hình mới khởi tạo và API fetch dữ liệu 12 cung đang pending → phần hiển thị danh sách 12 cung phải bật hiệu ứng skeleton loading (khung chớp tắt) thay vì hiển thị giao diện trắng/lỗi.

---

## US-03: Khám phá thêm tiện ích liên quan

**User Story**
**As a** người dùng đã xem xong tổng quan lá số
**I want to** thấy danh sách các tiện ích tử vi khác ở cuối trang
**So that** tôi có thể tiếp tục khám phá các dịch vụ khác mà không phải quay ra trang chủ

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                               |
| --------------------- | ----------- | ---------------------------------------------------------------------- |
| **I**ndependent | ✅          | UI độc lập ở cuối trang.                                          |
| **N**egotiable  | ✅          | Có thể tùy biến danh sách tiện ích hiển thị.                  |
| **V**aluable    | ✅          | Tăng tương tác chéo (cross-sell) giữa các tính năng.          |
| **E**stimable   | ✅          | UI Grid đơn giản, dễ estimate.                                     |
| **S**mall       | ✅          | Rất gọn, code nhanh.                                                 |
| **T**estable    | ✅          | Test hiển thị UI trên các kích thước màn hình và navigation. |

### Tiêu chí nghiệm thu

**1. Hiển thị Grid khám phá thêm (Happy path)**

- [ ] Khi người dùng cuộn đến khối "Khám phá thêm" ở cuối màn hình → hệ thống load cấu hình từ CMS mục Tiện ích và hiển thị lưới Grid 3 cột.
- [ ] Tại mỗi ô lưới → hiển thị icon (hình tròn nền gradient) và nhãn văn bản tên tính năng (truncate tối đa 2 dòng).
- [ ] Hệ thống phải tự động filter loại trừ: Tính năng nào user đang xem hiện tại (VD: Tử vi Tổng quan) thì sẽ KHÔNG được xuất hiện trong lưới gợi ý này nữa. Các mục tử vi bao gồm: Vận hạn năm, Tử vi Tổng quan, Tài chính, Nghề nghiệp, Tình duyên, Lá số Tử vi -> cấu hình trên cms mục tiện ích

**2. Tương tác điều hướng (Interaction)**

- [ ] Khi bấm vào một tính năng cụ thể trong lưới → hệ thống xử lý chuyển hướng người dùng sang màn hình deeplink của tính năng đó.
