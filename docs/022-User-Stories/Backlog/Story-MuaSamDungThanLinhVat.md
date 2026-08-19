---
id: Story-MuaSamDungThanLinhVat
type: story
status: draft
project: Lich_Viet
created: 2026-08-03
tags: [mua-sam, dung-than, linh-vat, bat-tu, ngu-hanh, phong-thuy, vat-pham-cua-toi]
linked-to: [[Story-KichHoatNangLuongResult]]
---
# User Stories - Khối Dụng thần & Linh vật (màn Mua sắm)

Tài liệu này định nghĩa các user story cho **khối Dụng thần & Linh vật** nằm trong màn hình **Mua sắm** và cho **màn hình "Vật phẩm của tôi"** của ứng dụng Lịch Việt. Phạm vi chỉ giới hạn trong khối Dụng thần & Linh vật cùng màn "Vật phẩm của tôi", không bao gồm các khối khác của màn Mua sắm (Hương sạch, Du lịch - Đi lại, banner Thiết kế phong thủy).

- Prototype khối Dụng thần & Linh vật: `prototype/MuaSam_V2.html`
- Prototype màn "Vật phẩm của tôi": `prototype/DonHangCuaToi.html`

**Prototype tham chiếu**: [[MuaSam_V2.html]] (`prototype/MuaSam_V2.html`), [[DonHangCuaToi.html]] (`prototype/DonHangCuaToi.html`)

Khối Dụng thần & Linh vật đóng vai trò điểm vào (entry point) giúp người dùng khám phá các linh vật phong thủy hợp với lá số Bát tự của mình. Khối gồm phần giới thiệu lợi ích, hai nhóm linh vật để khám phá (Linh vật hộ thân và Linh vật đặt), lối vào danh sách "Vật phẩm của tôi", và phần chi tiết giải mã Bát tự kèm hướng dẫn sử dụng cho từng linh vật đã sở hữu.

> **Phạm vi tài liệu gồm các thành phần chính:**
>
> - **Khối giới thiệu**: tiêu đề, khối "Lợi ích bạn nhận được" (4 lợi ích), 2 thẻ linh vật (Hộ thân / Đặt).
> - **Lối vào "Vật phẩm của tôi"**: nút hàng ngang mở danh sách linh vật người dùng đã sở hữu.
> - **Danh sách "Vật phẩm của tôi"**: overlay (MuaSam) hoặc màn hình độc lập (DonHangCuaToi) hiển thị các linh vật đã có.
> - **Chi tiết giải mã Bát tự & HDSD**: bottom sheet mở từ nút "Xem chi tiết" của mỗi linh vật.

---

## US-01: Xem khối giới thiệu Dụng thần & Linh vật

**User Story**
**As a** người dùng Lịch Việt đang ở màn hình Mua sắm
**I want to** xem khối giới thiệu Dụng thần & Linh vật với tiêu đề, các lợi ích và hai nhóm linh vật
**So that** tôi hiểu được giá trị của việc dùng linh vật hợp Bát tự và biết mình có thể khám phá thêm

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                                                       |
| --------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Khối giới thiệu hiển thị độc lập, không phụ thuộc trạng thái đăng nhập hay dữ liệu Bát tự. |
| **N**egotiable  | ✅          | Nội dung lợi ích, minh hoạ và bố cục có thể tinh chỉnh theo thiết kế.                              |
| **V**aluable    | ✅          | Giúp người dùng nắm giá trị linh vật phong thủy và dẫn vào luồng khám phá.                      |
| **E**stimable   | ✅          | Chủ yếu là hiển thị tĩnh, đã có prototype, dễ ước lượng.                                         |
| **S**mall       | ✅          | Thực hiện trong 1 ngày làm việc.                                                                          |
| **T**estable    | ✅          | Kiểm chứng được từng thành phần hiển thị và hành vi bấm nút.                                     |

### Tiêu chí nghiệm thu

**1. Phần tiêu đề và minh hoạ (Happy path)**

- [ ] Hiển thị tiêu đề khối `"Khám phá Dụng Thần & Linh Vật của riêng bạn"`, trong đó cụm `"Dụng Thần"` và `"& Linh Vật"` được làm nổi bật.
- [ ] Hiển thị hình minh hoạ ở góc phải tiêu đề.

**2. Khối "Lợi ích bạn nhận được" (Happy path)**

- [ ] Hiển thị tiêu đề `"Lợi ích bạn nhận được"`.
- [ ] Hiển thị đủ 4 lợi ích, mỗi lợi ích gồm biểu tượng, tiêu đề và mô tả ngắn:
  - [ ] **Xác định Dụng thần**: giúp cân bằng Ngũ hành trong Bát tự của bạn
  - [ ] **Kích hoạt tài lộc**: Giúp mở rộng nguồn thu tài chính
  - [ ] **Quý nhân hỗ trợ**: Giúp thu hút mối quan hệ hỗ trợ bạn
  - [ ] **Gợi ý linh vật phù hợp**: Giúp kích hoạt, thu hút may mắn

**3. Hai thẻ linh vật (Happy path & Interaction)**

- [ ] Hiển thị thẻ **Linh vật hộ thân** kèm ảnh, mô tả `"Mang theo bên mình để bảo vệ và cân bằng năng lượng."` và nút `"Khám phá"`.
- [ ] Hiển thị thẻ **Linh vật đặt** kèm ảnh, mô tả `"Đặt tại nơi làm việc, nhà ở để hỗ trợ tài lộc và vượng khí."` và nút `"Khám phá"`.
- [ ] Bấm nút `"Khám phá"` trên thẻ Linh vật hộ thân → điều hướng tới màn nhập thông tin của người dùng (để luận giải Bát tự và gợi ý linh vật phù hợp).
- [ ] Bấm nút `"Khám phá"` trên thẻ Linh vật đặt → điều hướng tới màn nhập thông tin của người dùng (để luận giải Bát tự và gợi ý linh vật phù hợp).

**4. Trạng thái hiển thị (Edge case)**

- [ ] Toàn bộ nội dung khối cho phép cuộn dọc trong màn Mua sắm, không bị cắt cụt.

---

## US-02: Xem danh sách "Vật phẩm của tôi"

**User Story**
**As a** người dùng Lịch Việt muốn quản lý các linh vật đã mua thành công
**I want to** mở danh sách "Vật phẩm của tôi", xem đầy đủ thông tin và chia sẻ / xem chi tiết từng linh vật đã mua thành công
**So that** tôi có thể xem lại, quản lý, chia sẻ hoặc tra cứu chi tiết những linh vật mình đã mua thành công bất cứ lúc nào

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                           |
| --------------------- | ----------- | ---------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Danh sách hiển thị độc lập, dùng chung cho cả overlay và màn độc lập. |
| **N**egotiable  | ✅          | Bố cục thẻ linh vật và thông tin hiển thị có thể tinh chỉnh.            |
| **V**aluable    | ✅          | Cho người dùng nơi tập trung để quản lý linh vật đã có.               |
| **E**stimable   | ✅          | Logic mở/đóng và render danh sách rõ ràng, dễ ước lượng.               |
| **S**mall       | ✅          | Thực hiện trong 1 ngày làm việc.                                              |
| **T**estable    | ✅          | Kiểm chứng được hành vi mở/đóng và nội dung từng thẻ linh vật.       |

### Tiêu chí nghiệm thu

**1. Lối vào từ khối Dụng thần & Linh vật — overlay (Happy path)**

- [ ] **Khi người dùng đã mua thành công ít nhất 1 linh vật**: ngay dưới hai thẻ linh vật, hiển thị nút hàng ngang có biểu tượng và nhãn `"Vật phẩm của tôi"` kèm mũi tên chỉ sang phải.
- [ ] **Khi người dùng chưa mua thành công linh vật nào**: ẩn hoàn toàn nút `"Vật phẩm của tôi"` (không hiển thị nút rỗng hay dẫn tới danh sách trống).
- [ ] Bấm vào nút → mở danh sách "Vật phẩm của tôi" dạng overlay toàn màn hình.

**2. Màn "Vật phẩm của tôi" độc lập (Happy path)**

- [ ] Hiển thị thanh tiêu đề `"Vật phẩm của tôi"` kèm nút quay lại ở góc trên bên trái.
- [ ] Danh sách chỉ hiển thị các linh vật người dùng **đã mua thành công** (đơn hàng đã thanh toán/hoàn tất); không hiển thị linh vật của đơn hàng chưa thanh toán, đang xử lý, thất bại hoặc đã hủy.
- [ ] Danh sách cho phép cuộn dọc khi số lượng linh vật vượt chiều cao màn hình.

**3. Nội dung mỗi thẻ linh vật (Happy path)**

- [ ] Mỗi linh vật (đã mua thành công) hiển thị: ảnh sản phẩm, nhãn loại, tên sản phẩm, dòng dụng thần phù hợp (ví dụ `"Phù hợp với Dụng thần Mộc"`), và 2 nút `"Chia sẻ"` / `"Xem chi tiết"`.
- [ ] Nhãn loại hiển thị đúng theo nhóm linh vật: `"Linh vật hộ thân"`, `"Linh vật đặt"` hoặc `"Vòng tay phong thủy"`.
- [ ] **TH1 - Linh vật gắn với người nhận (người mà người dùng nhập thông tin lá số)**: hiển thị dòng `"Dành cho"` kèm tên người dùng (ví dụ `"Dành cho: Minh Anh"`).
- [ ] **TH2 - Linh vật không gắn người nhận cụ thể**: ẩn dòng `"Dành cho"`, chỉ hiển thị dòng dụng thần phù hợp (không hiển thị nhãn rỗng).

**4. Nút "Chia sẻ" trên mỗi thẻ (Interaction)**

- [ ] **Khi linh vật đã có liên kết file PDF**: thẻ hiển thị nút `"Chia sẻ"`; bấm → hệ thống chia sẻ liên kết tới file PDF chứa thông tin của đúng linh vật đó (tên, loại, dụng thần phù hợp, giải mã Bát tự, hướng dẫn sử dụng).
- [ ] Liên kết PDF gắn đúng với linh vật của thẻ đang thao tác, không nhầm sang linh vật khác.
- [ ] Người nhận mở liên kết PDF xem được thông tin linh vật mà không cần đăng nhập / cài ứng dụng.
- [ ] **Khi linh vật chưa có liên kết file PDF**: ẩn hoàn toàn nút `"Chia sẻ"` trên thẻ đó (không hiển thị nút bị vô hiệu).

**5. Nút "Xem chi tiết" trên mỗi thẻ (Interaction)**

- [ ] Bấm nút `"Xem chi tiết"` trên một thẻ linh vật → mở ra màn tổng hợp nội dung vật phẩm

**6. Đóng / quay lại (Interaction)**

- [ ] Bấm nút quay lại trên thanh tiêu đề → đóng overlay và quay về màn Mua sắm.

---

## US-03: Xem chi tiết nội dung tổng hợp vật phẩm

**User Story**
**As a** người dùng Lịch Việt đang xem danh sách "Vật phẩm của tôi"
**I want to** mở màn nội dung tổng hợp của một linh vật đã mua thành công
**So that** tôi hiểu ý nghĩa, lý do hợp Bát tự và biết cách dùng linh vật đúng để phát huy hiệu quả

**INVEST Self-check**

| Tiêu chí            | Đánh giá | Ghi chú                                                                                       |
| --------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Nội dung màn tổng hợp gắn với từng linh vật, không phụ thuộc story khác.           |
| **N**egotiable  | ✅          | Bố cục và cách trình bày nội dung màn tổng hợp có thể tinh chỉnh theo thiết kế. |
| **V**aluable    | ✅          | Tăng niềm tin và trải nghiệm sử dụng linh vật của người dùng.                      |
| **E**stimable   | ✅          | Nội dung màn tổng hợp theo từng loại linh vật rõ ràng, dễ ước lượng.             |
| **S**mall       | ✅          | Thực hiện trong 1 ngày làm việc.                                                          |
| **T**estable    | ✅          | Kiểm chứng được nội dung màn tổng hợp đúng theo từng linh vật.                    |

### Tiêu chí nghiệm thu

**1. Nội dung màn tổng hợp vật phẩm (Happy path)**

- [ ] Màn tổng hợp hiển thị tên linh vật đang xem (ví dụ `"Mặt Dây Chuyền Ngọc Bích Hộ Thân"`).
- [ ] Màn tổng hợp có phần giải mã Bát tự - lý do linh vật hợp với Bát tự của người dùng.
- [ ] Màn tổng hợp có phần hướng dẫn khai quang & sử dụng gồm: giờ tốt đeo/đặt lần đầu, vị trí đeo hoặc bài trí, cách tẩy uế & nạp năng lượng định kỳ.

**2. Cá nhân hoá nội dung theo linh vật (Happy path & Edge case)**

- [ ] Nội dung trong màn tổng hợp thay đổi đúng theo linh vật được chọn, không hiển thị nhầm nội dung của linh vật khác.
- [ ] **TH1 - Linh vật hộ thân (ví dụ Ngọc Bích)**: nội dung đúng theo linh vật đeo/mang bên mình.
- [ ] **TH2 - Linh vật đặt (ví dụ Kim Long)**: nội dung đúng theo linh vật bài trí tại vị trí.
- [ ] **TH3 - Vòng tay phong thủy (ví dụ Vòng tay Trầm hương)**: nội dung đúng theo linh vật đeo tay (bao gồm hướng dẫn đeo tay trái/tay phải theo mục đích).

**3. Trường hợp lỗi (Negative path)**

- [ ] **Khi nội dung tổng hợp của linh vật thiếu/không đầy đủ**: hệ thống báo cho người dùng biết thay vì hiển thị màn trống hoặc nội dung sai.
