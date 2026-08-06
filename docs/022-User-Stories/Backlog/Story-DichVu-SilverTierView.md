---
id: Story-DichVu-Screen
type: story
status: draft
project: Lich_Viet
owner: "@mobile-team"
tags: [dichvu, subscription, tier, service-screen]
linked-to: [[Stories-MOC]]
created: 2026-04-21
---
# Màn hình Dịch vụ Khách hàng

> **Prototype tham chiếu**: `prototype/Dichvu_V2.html`
> Mỗi khối dưới đây là một đơn vị Story độc lập, có thể assign riêng cho Dev.

---

## KHỐI 1: Thông tin cá nhân & Avatar

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Xem thông tin cá nhân trên màn hình dịch vụ

> **Với vai trò** người dùng ứng dụng Lịch Việt
> **Tôi muốn** xem được thông tin cá nhân và hạng hiện tại khi mở màn hình Dịch vụ
> **Để** tôi xác nhận đúng tài khoản và biết mình đang ở hạng nào

### Tiêu chí nghiệm thu

- [ ] Avatar: nếu có avatar riêng → hiển thị. Nếu không → hiển thị avatar con giáp theo tuổi (Tý, Sửu, Dần...)
- [ ] Avatar badge theo hạng: Cơ bản (không badge) / Bạc (sao bạc) / Vàng (sao vàng) / Kim Cương (💎)
- [ ] Tên, ngày sinh, giờ sinh, giới tính: trường nào có dữ liệu thì hiển thị, trường nào chưa có thì ẩn đi
- [ ] **Đã đăng nhập**: Bấm vào khối thông tin → chuyển đến màn "Cập nhật thông tin tài khoản"
- [ ] **Chưa đăng nhập**: Bấm vào khối thông tin → chuyển đến màn đăng nhập. Login thành công thì load lại dữ liệu màn này
- [ ] **Chưa đăng nhập**: Hiển thị thông tin local (nếu có) + nút "Đăng nhập"
- [ ] **Chưa có thông tin nào**: Hiển thị avatar mặc định + gợi ý nhập ngày sinh
- [ ] Dữ liệu ngày sinh, giờ sinh, giới tính lưu local

### Luồng thao tác

1. Người dùng mở tab "Dịch vụ"
2. Hệ thống kiểm tra dữ liệu local + trạng thái đăng nhập
3. Hiển thị thông tin người dùng tuơng ứng
4. Nếu chưa login → hiển thị thêm nút "Đăng nhập"
5. Nếu đã login → hiển thị thêm tên tài khoản + badge hạng
6. Người dùng bấm vào khối thông tin → chuyển đến màn "Cập nhật thông tin tài khoản"
7. Người dùng nhấn vào nút Đăng nhập -> chuyển tới màn login

---

## KHỐI 2: Thanh tiến trình hạng thành viên

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Xem vị trí hạng hiện tại trên thanh tiến trình

> **Với vai trò** người dùng ứng dụng Lịch Việt
> **Tôi muốn** nhìn thấy mình đang ở vị trí nào trên thang hạng và có thể xem đặc quyền từng hạng
> **Để** tôi biết mình đang ở đâu và có nên nâng cấp hay không

### Tiêu chí nghiệm thu

- [ ] Thanh tiến trình hiển thị 4 mốc cố định: Cơ bản (0%) → Bạc (30%) → Vàng (70%) → Kim Cương (100%)
- [ ] Tooltip chỉ đúng vị trí hạng hiện tại, hiển thị tên hạng viết hoa
- [ ] Phần thanh đã đạt được tô màu gradient, phần chưa đạt để xám
- [ ] Bấm vào mốc hạng hiện tại → không có hành động
- [ ] Bấm vào mốc hạng khác → mở bottom sheet đặc quyền hạng đó
- [ ] Thanh tiến trình chỉ dùng để hiển thị, KHÔNG phải thanh "tích điểm lên hạng"
- [ ] Vị trí các mốc cố định (0%, 30%, 70%, 100%), không tính theo điểm

**Popup đặc quyền (bottom sheet):**

- [ ] Tiêu đề hiển thị đúng tên hạng ("Đặc quyền Hạng Bạc / Vàng / Kim Cương")
- [ ] Hiển thị lưới tính năng thuộc hạng đó
- [ ] Nếu user đã sở hữu hạng đó hoặc cao hơn → hiện thông báo "🎉 Bạn đã sở hữu bộ đặc quyền này!"
- [ ] Nếu user chưa có hạng đó → hiện nút "Nâng cấp" kèm giá
- [ ] Có nút đóng (X) và kéo xuống để đóng
- [ ] Overlay nền tối, bấm vào overlay cũng đóng popup

### Bảng điều kiện theo hạng

| Điều kiện       | Cơ bản       | Bạc            | Vàng              | Kim Cương       |
| ------------------ | -------------- | --------------- | ------------------ | ----------------- |
| Tooltip hiển thị | HẠNG CƠ BẢN | HẠNG BẠC      | HẠNG VÀNG        | HẠNG KIM CƯƠNG |
| Thanh fill đến   | 0%             | 30%             | 70%                | 100%              |
| Màu tooltip       | Xám           | Bạc (gray-400) | Vàng (yellow-500) | Xanh nhạt        |

**Popup khi bấm mốc hạng khác:**

| User đang ở hạng | Bấm mốc Cơ bản         | Bấm mốc Bạc               | Bấm mốc Vàng               | Bấm mốc KC               |
| ------------------- | -------------------------- | ---------------------------- | ----------------------------- | -------------------------- |
| Cơ bản            | Không hành động        | Popup Bạc + nút Nâng cấp | Popup Vàng + nút Nâng cấp | Popup KC + nút Nâng cấp |
| Bạc                | Popup CB + "Đã sở hữu" | Không hành động          | Popup Vàng + nút Nâng cấp | Popup KC + nút Nâng cấp |
| Vàng               | Popup CB + "Đã sở hữu" | Popup Bạc + "Đã sở hữu" | Không hành động           | Popup KC + nút Nâng cấp |
| Kim Cương         | Popup CB + "Đã sở hữu" | Popup Bạc + "Đã sở hữu" | Popup Vàng + "Đã sở hữu" | Không hành động        |

#### 2.1 Popup Cơ bản

- [ ] Tiêu đề: "Tính năng Cơ bản"
- [ ] Thông báo "Đã sở hữu" (hiện cho tất cả user vì ai cũng có hạng Cơ bản)
- [ ] Danh sách tính năng miễn phí hay dùng: Lịch âm/dương, Xem giờ hoàng đạo, Ngày lễ/Sự kiện, ...
- [ ] Bấm vào tính năng → chuyển đến màn chi tiết tương ứng

#### 2.2 Popup Bạc

- [ ] Tiêu đề: "Đặc quyền Hạng Bạc"
- [ ] Lưới 6 tính năng: Bỏ Quảng Cáo, Xem Ngày Tốt (41 việc), Giải Mã Ngày Sinh, Thần Số Học, Mức Độ Hợp Nhau, Tổng Quan Vận Mệnh
- [ ] Nếu user chưa có hạng Bạc → hiện nút "Nâng cấp Hạng Bạc" kèm giá (1.300đ/ngày)
- [ ] Nếu user đã có Bạc trở lên → hiện "🎉 Bạn đã sở hữu bộ đặc quyền này!"
- [ ] Bấm vào tính năng trong popup → chuyển đến màn chi tiết

#### 2.3 Popup Vàng

- [ ] Tiêu đề: "Đặc quyền Hạng Vàng"
- [ ] Thông báo "Bao gồm toàn bộ đặc quyền Bạc" (kế thừa)
- [ ] Lưới 4 tính năng riêng Vàng: Xem Phong Thủy, Gieo Quẻ Lục Hào, Chọn Tên Hay, Xem Ngày Tốt (Trọn Bộ)
- [ ] Nếu user chưa có hạng Vàng → hiện nút "🔥 Nâng cấp Hạng Vàng ngay" kèm giá (99k/tháng)
- [ ] Nếu user đã có Vàng trở lên → hiện "🎉 Bạn đã sở hữu bộ đặc quyền này!"
- [ ] Bấm vào tính năng trong popup → chuyển đến màn chi tiết

#### 2.4 Popup Kim Cương

- [ ] Tiêu đề: "Đặc quyền Kim Cương"
- [ ] Thông báo "Bao gồm trọn bộ Đặc quyền Vàng, Bạc"
- [ ] Lưới tính năng riêng Kim Cương: Xem Tử Vi Trọn Bộ, Tử vi hôm nay, Tử vi Tổng quan, Vận hạn năm, Tài chính & Đầu tư, Nghề nghiệp, Tình duyên, Tư vấn AI cá nhân
- [ ] Nếu user chưa có KC → hiện nút "Nâng cấp Kim Cương ngay"

---

## KHỐI 3: Thông tin hết hạn & Cảnh báo

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Biết thời hạn còn lại và được cảnh báo khi sắp/đã hết hạn

> **Với vai trò** người dùng đang sử dụng gói trả phí
> **Tôi muốn** biết gói của mình còn bao lâu, và được nhắc khi sắp hoặc đã hết hạn
> **Để** tôi chủ động gia hạn hoặc nâng cấp, tránh bị mất đặc quyền đột ngột

### Tiêu chí nghiệm thu

- [ ] **TH0: Người dùng Free**: Hiển thị khối nâng cấp lên bạc trọn đời. Nhấn nút nâng cấp thì chuyển tới màn đăng kí dịch vụ gói bạc trọn đời
- [ ] **TH1: Đang có gói Subscription & vẫn bật Tự động gia hạn**:
  - [ ] Hiển thị Hạn dạng tĩnh "Hạn thành viên đến: DD/MM/YYYY".
  - [ ] Khối mời nâng cấp lên gói cao hơn
- [ ] **TH2: Đang có gói Subscription & đã tắt gia hạn - Mức 1 (Còn > 15 ngày)**:
  - [ ] Hiện tĩnh "Hạn thành viên đến: DD/MM/YYYY".
  - [ ] Khối mời nâng cấp lên gói cao hơn
- [ ] **TH2: Đang có gói Subscription & đã tắt gia hạn - Mức 2 (Còn < 15 ngày)**:
  - [ ] Cảnh báo nhẹ "Còn [X] ngày sử dụng hạng [Tên hạng]".
  - [ ] Khối mời nâng cấp lên gói cao hơn
- [ ] **TH2: Đang có gói Subscription & đã tắt gia hạn - Mức 3 (Còn < 7 ngày)**:
  - [ ] Cảnh báo Thời gian thực "Còn [X] ngày [hh:mm:ss] sử dụng hạng [Tên hạng]". Kèm CTA: [Bật gia hạn để duy trì đặc quyền].
  - [ ] Nhấn nút CTA thì chuyển tới màn setting của máy để bật gia hạn
- [ ] **TH2: Đang có gói Subscription & đã tắt gia hạn - Mức 4 (Còn < 3 ngày)**:
  - [ ] Báo động đỏ (2 dòng): Dòng một "⏳ Sắp hết hạn hạng [Tên hạng]". Dòng hai "Đếm ngược Còn [X] ngày [hh:mm:ss]". Kèm CTA gắt hơn: [Bật gia hạn để không bị gián đoạn].
  - [ ] Nhấn nút CTA thì chuyển tới màn setting của máy để bật gia hạn
- [ ] **TH3: Mua gói chuyển khoản/Bank HOẶC Cùng lúc có (Gói Subscription + Gói Bank)**:
  - [ ] Hệ thống nội bộ tự động cộng dồn/gối đầu hạn sử dụng. Hiển thị Hạn lấy ngày xa nhất làm chuẩn: "Hạn thành viên đến: DD/MM/YYYY".
  - [ ] Khối mời nâng cấp lên gói cao hơn
- [ ] **TH4: Mới hết hạn**
  - [ ] Hiển thị trạng thái "Đã hết hạn", hiển thị danh sách quyền lợi bị mất. Có nút hành động mua lại. Hệ thống tự động hạ về hạng Cơ bản nhưng giao diện vẫn để của hạng trước đó x ngày (cấu hình được)
  - [ ] Nhấn nút cta thì chuyển tới màn đăng ký dịch vụ chọn đúng dịch vụ trước đã đăng ký. TH có đăng ký nhiều dịch vụ thì ưu tiên điều hướng tới dịch vụ cao nhất, ưu tiên dịch vụ bạc/vàng/kc. Đối với các dịch vụ cũ (ko fai bạc/vàng/kim cương) thì mặc định vào màn đăng ký dịch vụ kim cương

**Quy tắc hiển thị "Khối mời nâng cấp" (Upsell Block):**

- [ ] **Đang ở Hạng Cơ bản**: Hiển thị mời nâng cấp lên **Bạc (trọn đời)**. Nhấn nút chuyển tới màn đăng ký gói Bạc.
- [ ] **Đang ở Hạng Bạc hoặc Vàng**: Hiển thị mời nâng cấp lên **Kim Cương**. Nhấn nút chuyển tới màn đăng ký gói Kim Cương.
- [ ] **Đang ở Hạng Kim Cương**: KHÔNG hiển thị khối mời nâng cấp (ẩn hoàn toàn).

---

## KHỐI 4: Danh sách thành viên gia đình

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Quản lý thành viên gia đình dùng chung gói

> **Với vai trò** chủ tài khoản đang sử dụng gói trả phí
> **Tôi muốn** xem danh sách thành viên gia đình đang dùng chung và thêm/bớt người
> **Để** gia đình tôi cùng được hưởng đặc quyền mà không cần mua gói riêng

### Tiêu chí nghiệm thu

- [ ] Hiển thị khối danh sách thành viên gia đình cho **TẤT CẢ** người dùng (không phân biệt hạng Cơ bản, Bạc, Vàng hay Kim Cương).
- [ ] Hiển thị danh sách thành viên dạng cuộn ngang (avatar + tên + quan hệ).
- [ ] Có nút "+" để thêm thành viên mới.
- [ ] **Hành vi bấm nút "+"**:
  - **Đã đăng nhập**: Mở luồng thêm thành viên gia đình bình thường.
  - **Chưa đăng nhập**: Chuyển hướng tới màn hình Đăng nhập. Sau khi login thành công mới cho phép thêm.
- [ ] Bấm vào thành viên → chuyển đến màn tổng quan vận mệnh của người đó.

---

## KHỐI 5: Đặc quyền hạng của bạn

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Sử dụng các tính năng đặc quyền theo hạng

> **Với vai trò** người dùng đang ở một hạng bất kỳ
> **Tôi muốn** xem và truy cập nhanh các tính năng mình đang được sử dụng
> **Để** tôi tận dụng tối đa giá trị của gói đã mua

### Tiêu chí nghiệm thu

- [ ] Hiển thị lưới tính năng đúng với hạng hiện tại + tính năng tử vi nếu đã mua. Trường hợp hạng kim cương thì chỉ hiện xem tử vi trọn bộ, ko cần hiện các tính năng lẻ tử vi đã mua nếu có
- [ ] Tính năng đang hoạt động: bấm vào → chuyển đến màn chi tiết tính năng đó (deeplink xem ở file: https://docs.google.com/spreadsheets/d/1Rj7vlAhIiSjU6Fx8hum3GzI8cxD6Mdw5sKeFgGqkxag/edit?usp=sharing)
- [ ] Tính năng "Không quảng cáo" hiển thị trạng thái kích hoạt (không click được)
- [ ] Đặc quyền kế thừa: Kim Cương = tất cả / Vàng = Bạc + Vàng / Bạc = chỉ Bạc

### Bảng điều kiện theo hạng

| Điều kiện              | Cơ bản | Bạc | Vàng | Kim Cương |
| ------------------------- | -------- | ---- | ----- | ----------- |
| Tắt Quảng cáo          | ❌       | ✅   | ✅    | ✅          |
| Xem Ngày Tốt (41 việc) | ❌       | ✅   | ✅    | ✅          |
| Giải Mã Ngày Sinh      | ❌       | ✅   | ✅    | ✅          |
| Thần Số Học            | ❌       | ✅   | ✅    | ✅          |
| Mức Độ Hợp Nhau       | ❌       | ✅   | ✅    | ✅          |
| Tổng Quan Vận Mệnh     | ❌       | ✅   | ✅    | ✅          |
| Xem Phong Thủy           | ❌       | ❌   | ✅    | ✅          |
| Gieo Quẻ Lục Hào       | ❌       | ❌   | ✅    | ✅          |
| Chọn Tên Hay            | ❌       | ❌   | ✅    | ✅          |
| Xem Ngày Tốt Trọn Bộ  | ❌       | ❌   | ✅    | ✅          |
| Xem Tử Vi Trọn Bộ      | ❌       | ❌   | ❌    | ✅          |

---

## KHỐI 6: Đặc quyền cao cấp cần nâng cấp

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Khám phá các tính năng cao cấp chưa được mở khóa

> **Với vai trò** người dùng ở hạng Cơ bản hoặc Bạc
> **Tôi muốn** xem được danh sách các tính năng trả phí ở hạng cao hơn mà tôi chưa có
> **Để** tôi hiểu giá trị của việc nâng cấp và quyết định có nâng cấp hay không

### Tiêu chí nghiệm thu

- [ ] Chỉ **hiển thị** cho người dùng ở hạng **Cơ bản** và **Bạc**. Hạng Vàng và Kim Cương → ẩn hoàn toàn khối này.
- [ ] Hiển thị lưới các tính năng trả phí thuộc hạng cao hơn mà user chưa được sử dụng, trừ tính năng xem tử vi sẽ để 1 khối riêng.
- [ ] Mỗi tính năng hiển thị: icon + tên
- [ ] **Hành vi khi nhấn vào tính năng**: Mở popup giới thiệu tính năng đó, bao gồm:
  - [ ] Tên tính năng + mô tả ngắn gọn về giá trị / lợi ích
  - [ ] Hình minh hoạ hoặc preview (nếu có)
  - [ ] Nút **"Nâng cấp ngay"** → chuyển đến luồng thanh toán gói tương ứng
  - [ ] Nút đóng (X) + kéo xuống để đóng + bấm overlay đóng
- [ ] Giá hiển thị trong popup phải lấy từ cấu hình server, không hardcode.

### Bảng điều kiện theo hạng

| Hạng hiện tại | Tính năng hiển thị trong khối                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| Cơ bản         | Tất cả tính năng Bạc + Vàng                                                                 |
| Bạc             | Tính năng Vàng                                                                                 |
| Vàng            | **Ẩn khối** (đã có hầu hết tính năng, upsell KC nằm ở khối 3 - mời nâng cấp) |
| Kim Cương      | **Ẩn khối**                                                                               |

### Luồng thao tác

1. Hệ thống xác định hạng hiện tại
2. Nếu hạng Cơ bản hoặc Bạc → hiển thị lưới tính năng cao cấp chưa mở khóa
3. Người dùng nhấn vào một tính năng bị khoá
4. Hệ thống mở popup giới thiệu tính năng + nút "Nâng cấp ngay"
5. Người dùng nhấn "Nâng cấp ngay" → chuyển đến luồng thanh toán
6. Nếu thanh toán thành công → cập nhật hạng + reload màn hình
7. Nếu đóng popup → quay lại màn Dịch vụ, không thay đổi gì

---

## KHỐI 7: Tử vi chuyên sâu

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Gợi ý mua các gói tử vi chuyên sâu chưa sở hữu

> **Với vai trò** người dùng chưa có hạng Kim Cương hoặc chưa mua Trọn Bộ Tử Vi
> **Tôi muốn** xem danh sách các gói tử vi chuyên sâu mà tôi chưa sở hữu
> **Để** tôi biết các tính năng đó và có thể mua lẻ hoặc nâng cấp lên Kim Cương.

### Tiêu chí nghiệm thu

- [ ] **Quy tắc hiển thị khối**: Khối này **chỉ hiển thị** nếu người dùng chưa sở hữu "Trọn Bộ Tử Vi"
- [ ] Hiển thị tiêu đề khối "Tử vi chuyên sâu" kèm icon khóa (🔒).
- [ ] Hiển thị dòng gợi ý: "Mở khóa đầy đủ với Kim Cương".
- [ ] **Danh sách tính năng**: Chỉ hiển thị các tính năng tử vi mà người dùng **chưa mua**. Nếu người dùng đã mua tính năng lẻ tử vi nào thì tính năng đó sẽ bị ẩn khỏi danh sách và hiển thị ở khối 5
- [ ] Danh sách đầy đủ ban đầu bao gồm:

  1. Trọn Bộ Tử Vi (Xem vận hạn & dự báo từng tháng)
  2. Vận Hạn Năm 2026 (Một bước xem trước tương lai)
  3. Tử Vi Tổng Quan (Chủ động quyết định – tránh rủi ro)
  4. Tư Vấn Nghề Nghiệp (Có cơ hội thăng tiến nếu kiên trì)
  5. Tư Vấn Tài Chính (Phù hợp phát triển dài hạn)
  6. Tư Vấn Tình Duyên (Có chuyển biến tích cực nửa cuối năm)
- [ ] Mỗi item hiển thị: Icon đồ hoạ + Tên tính năng (chữ đậm) + Mô tả ngắn (chữ nhạt) + Icon chevron-right (mũi tên sang phải) + icon hot nếu có cấu hình trên cms
- [ ] **Hành vi khi nhấn vào tính năng**:

  - [ ] TH nhấn vào trọn bộ tử vi thì hiển thị popup trọn bộ tử vi
  - [ ] TH nhấn vào từng tính năng tử vi lẻ thì chuyển tới màn chi tiết tính năng lẻ đó

### Bảng điều kiện theo hạng

| Hạng hiện tại | Hiển thị khối             | Nội dung hiển thị | Hành vi khi click tính năng           |
| ---------------- | ---------------------------- | -------------------- | ---------------------------------------- |
| Cơ bản         | ✅ Có (nếu chưa mua hết) | Các gói chưa mua  | Mở popup mua lẻ/nâng cấp Kim Cương |
| Bạc             | ✅ Có (nếu chưa mua hết) | Các gói chưa mua  | Mở popup mua lẻ/nâng cấp Kim Cương |
| Vàng            | ✅ Có (nếu chưa mua hết) | Các gói chưa mua  | Mở popup mua lẻ/nâng cấp Kim Cương |
| Kim Cương      | ❌ Ẩn                       | (Không hiển thị)  | (Không)                                 |

#### 7.1 Popup trọn bộ tử vi

- [ ] Tiêu đề: "Xem trọn bộ tử vi"
- [ ] Thông báo cần nâng cấp lên kim cương để sử dụng tính năng này
- [ ] Danh sách tính năng trọn bộ tử vi: tử vi hôm nay, tử vi tổng quan, vận hạn năm, tử vi nghề nghiệp, tử vi tài chính, tử vi tình duyên, mức độ hợp nhau, lá số tử vi
- [ ] Bấm vào tính năng → chuyển đến màn chi tiết tính năng đó
- [ ] Nhấn vào nút Nâng cấp kim cương ngay thì chuyển tới màn đăng ký dịch vụ mặc định mở tab kim cương

### Luồng thao tác

1. Hệ thống kiểm tra các gói tử vi người dùng đã sở hữu và hạng hiện tại.
2. Nếu người dùng đã sở hữu "Trọn Bộ Tử Vi" -> **Ẩn khối 7**.
3. Nếu không, hệ thống lọc ra các tính năng tử vi người dùng chưa mua và hiển thị thành danh sách trong khối "Tử vi chuyên sâu".
4. Người dùng nhấn vào một tính năng lẻ tử vi -> Hệ thống hiển thị màn chi tiết tính năng đó. Còn nếu nhấn vào trọn bộ tử vi thì hiển thị popup nâng cấp lên Kim Cương.

## KHỐI 8: Banner quảng cáo inline

### Câu chuyện người dùng

**Tiêu đề**: Hệ thống - Hiển thị quảng cáo inline trên màn hình dịch vụ

> **Với vai trò** hệ thống quảng cáo
> **Tôi muốn** hiển thị banner quảng cáo xen kẽ trong nội dung màn hình Dịch vụ
> **Để** tạo nguồn thu từ quảng cáo cho người dùng miễn phí

### Tiêu chí nghiệm thu

- [ ] Banner quảng cáo hiển thị dạng inline
- [ ] Vị trí đặt banner: sau khối Đặc quyền cao cấp (KHỐI 6) hoặc sau khối Lưới tính năng (KHỐI 5) nếu KHỐI 6 bị ẩn.
- [ ] Nếu không load được quảng cáo → ẩn khối, không hiển thị placeholder trống.
- [ ] Banner không được che khuất nội dung chính, phải có khoảng cách (padding/margin) rõ ràng với các khối lân cận.

### Luồng thao tác

1. Hệ thống kiểm tra người dùng có thoả mãn tập khách hàng hiện quảng cáo
2. Nếu load thành công → hiển thị banner inline
3. Nếu load thất bại → ẩn khối, không hiện gì
4. Người dùng nhấn vào banner -> chuyển tới deeplink tương ứng

---

## KHỐI 9: Tiện ích

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Khám phá các tiện ích mở rộng

> **Với vai trò** người dùng ứng dụng Lịch Việt
> **Tôi muốn** xem danh sách các tiện ích mở rộng được cấu hình
> **Để** tôi có thể truy cập nhanh vào các công cụ hữu ích.

### Tiêu chí nghiệm thu

- [ ] Hiển thị tiêu đề khối "Tiện ích".
- [ ] Danh sách các tiện ích được lấy động từ cấu hình CMS của hệ thống (API).
- [ ] Mỗi tiện ích hiển thị: Icon đồ hoạ + Tên tiện ích + Nhãn "HOT" (nếu có cấu hình cờ báo HOT trên CMS).
- [ ] **Hành vi khi nhấn vào tiện ích**: Chuyển hướng người dùng tới deeplink tương ứng cấu hình trên CMS.
- [ ] Khối này hiển thị cho **tất cả các hạng** người dùng (Cơ bản, Bạc, Vàng, Kim Cương).

### Luồng thao tác

1. Hệ thống gọi API lấy danh sách tiện ích từ CMS.
2. Render danh sách tiện ích kèm icon và nhãn HOT (nếu có).
3. Người dùng nhấn vào một tiện ích -> Hệ thống thực thi deeplink tương ứng.

---

## KHỐI 10: Thư viện nội dung

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Khám phá thư viện nội dung

> **Với vai trò** người dùng ứng dụng Lịch Việt
> **Tôi muốn** xem danh sách các chuyên mục thư viện nội dung được cấu hình
> **Để** tôi có thể đọc các bài viết, kiến thức, và nội dung giải trí.

### Tiêu chí nghiệm thu

- [ ] Hiển thị tiêu đề khối "Thư viện nội dung".
- [ ] Danh sách các chuyên mục nội dung được lấy động từ cấu hình CMS của hệ thống (API).
- [ ] Mỗi chuyên mục hiển thị: Icon đồ hoạ + Tên chuyên mục + Nhãn "HOT" (nếu có cấu hình cờ báo HOT trên CMS).
- [ ] **Hành vi khi nhấn vào chuyên mục**: Chuyển hướng người dùng tới deeplink tương ứng cấu hình trên CMS.
- [ ] Khối này hiển thị cho **tất cả các hạng** người dùng (Cơ bản, Bạc, Vàng, Kim Cương).

### Luồng thao tác

1. Hệ thống gọi API lấy danh sách thư viện nội dung từ CMS.
2. Render danh sách chuyên mục kèm icon và nhãn HOT (nếu có).
3. Người dùng nhấn vào một chuyên mục -> Hệ thống thực thi deeplink tương ứng.

---

## Ghi chú kỹ thuật (chung)

- **API liên quan**:
  - `GET /api/v1/user/profile` → thông tin cá nhân
  - `GET /api/v1/user/subscription` → hạng, ngày hết hạn, features[]
  - `GET /api/v1/user/family` → danh sách thành viên gia đình
  - `GET /api/v1/pricing` → bảng giá các gói
  - `GET /api/v1/features/{id}` → chi tiết tính năng (cho popup giới thiệu)
  - `GET /api/v1/cms/utilities` → danh sách tiện ích cấu hình (KHỐI 9)
  - `GET /api/v1/cms/content-library` → danh sách thư viện nội dung cấu hình (KHỐI 10)
- **Component UI**: `ServiceScreen` → `UserInfoHeader` + `TierProgressBar` + `ExpiryBanner` + `FamilyList` + `FeatureGrid` + `PremiumFeaturesGrid` + `InlineAdBanner` + `UtilitiesGrid` + `ContentLibraryGrid`
- **Ảnh hưởng State**: `SubscriptionState` (tier, daysRemaining, features, familyMembers), `CMSState` (utilities, contentLibrary)

## Điều kiện hoàn thành (DoD)

- [ ] Tất cả 10 khối hiển thị đúng logic cấu hình và hạng hiện tại
- [ ] Bảng điều kiện theo hạng được kiểm tra đủ 4 trường hợp (Cơ bản/Bạc/Vàng/KC)
- [ ] Trạng thái hết hạn hiển thị đúng (sắp hết / đã hết)
- [ ] Tính năng khoá/mở đúng theo hạng
- [ ] Popup giới thiệu tính năng hoạt động đúng (mở/đóng/nút nâng cấp)
- [ ] Banner quảng cáo chỉ hiện cho hạng Cơ bản, ẩn khi load lỗi
- [ ] Các tiện ích và thư viện nội dung render động chính xác từ CMS, gắn đúng deeplink và nhãn HOT
- [ ] Unit tests passed
- [ ] Kiểm tra hiển thị trên các kích thước màn hình (320px–428px)
