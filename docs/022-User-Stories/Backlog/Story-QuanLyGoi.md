---
id: Story-QuanLyGoi
type: story
status: draft
project: Lich_Viet
created: 2026-05-05
linked-to: []
---
# User stories cho tính năng Quản lý gói

Tài liệu này định nghĩa các user story cho màn hình Quản lý gói (Lịch sử giao dịch) dựa trên thiết kế prototype `PurchaseHistory_Screen_Preview.html`.

## 1. Xem danh sách tổng hợp

### Câu chuyện người dùng

**Tiêu đề**: Khách hàng - Xem danh sách quản lý gói

> **Với vai trò** khách hàng đã mua các dịch vụ trên ứng dụng
> **Tôi muốn** xem toàn bộ lịch sử gói dịch vụ được chia thành nhóm Đang sử dụng và Đã hết hạn
> **Để** tôi có thể dễ dàng theo dõi quyền lợi hiện tại và lịch sử thanh toán của mình

### Tiêu chí nghiệm thu

- [ ] Hiển thị danh sách chia làm hai nhóm rõ ràng gồm "Gói đang dùng" và "Gói đã hết hạn".
- [ ] Quy tắc sắp xếp nhóm "Gói đang dùng": Sắp xếp các gói dịch vụ theo thứ tự ưu tiên: 1. Gói tự động gia hạn (sắp xếp theo ngày đến hạn tăng dần - ưu tiên gói sắp thu tiền. Nếu trùng, ưu tiên gói mua gần đây nhất). 2. Gói đã tắt gia hạn/chuyển khoản (sắp xếp theo ngày hết hạn tăng dần). 3. Gói mua một lần/trọn đời (xếp cuối).
- [ ] Quy tắc sắp xếp nhóm "Gói đã hết hạn": Sắp xếp theo ngày hết hạn giảm dần (gói mới hết hạn nằm trên cùng).
- [ ] Mỗi gói hiển thị đầy đủ thông tin gồm icon, tên gói và nhãn trạng thái.
- [ ] Các thông tin chi tiết của mỗi gói bao gồm Ngày mua, Đã thanh toán, Ngày gia hạn hoặc Hạn sử dụng.
- [ ] Nếu không có gói nào trong một nhóm, hiển thị trạng thái rỗng hoặc ẩn nhóm đó.
- [ ] Màn hình có nút quay lại để về màn hình trước đó.

### Luồng thao tác

1. Người dùng chọn mục "Quản lý gói" từ menu cá nhân.
2. Hệ thống gọi API lấy danh sách lịch sử gói dịch vụ.
3. Hệ thống phân loại các gói thành nhóm "Đang dùng" và "Đã hết hạn".
4. Nếu tải thành công, giao diện hiển thị danh sách chi tiết các gói.
5. Người dùng cuộn để xem tất cả gói.

## 2. Quản lý gói đăng ký định kỳ

### Câu chuyện người dùng

**Tiêu đề**: Khách hàng - Quản lý gói tự động gia hạn

> **Với vai trò** khách hàng đang sử dụng gói dịch vụ định kỳ
> **Tôi muốn** xem trạng thái gia hạn và có nút thao tác quản lý
> **Để** tôi có thể chủ động duy trì hoặc hủy việc tự động trừ tiền

### Tiêu chí nghiệm thu

- [ ] Đối với gói đang bật gia hạn tự động, hiển thị nhãn "GIA HẠN TỰ ĐỘNG" kèm ngày "Gia hạn tiếp theo".
- [ ] Thẻ gói đang bật gia hạn có nút "Quản lý gia hạn".
- [ ] Đối với gói đã tắt gia hạn tự động, hiển thị nhãn "ĐÃ TẮT GIA HẠN" kèm "Hạn sử dụng".
- [ ] Thẻ gói đã tắt gia hạn có nút "Bật gia hạn gói".
- [ ] Bấm vào các nút sẽ điều hướng đến phần cài đặt gói của hệ điều hành.

### Luồng thao tác

1. Người dùng cuộn đến gói đăng ký định kỳ đang sử dụng trong danh sách.
2. Xem các thông tin về ngày gia hạn hoặc hạn sử dụng tương ứng với trạng thái.
3. Người dùng bấm nút tương ứng với trạng thái hiện tại.
4. Hệ thống gọi deeplink chuyển hướng đến luồng xử lý gia hạn.

---

## 3. Liên hệ gia hạn với gói chuyển khoản trực tiếp

### Câu chuyện người dùng

**Tiêu đề**: Khách hàng - Yêu cầu hỗ trợ gia hạn qua số điện thoại

> **Với vai trò** khách hàng đã mua gói qua kênh chuyển khoản trực tiếp
> **Tôi muốn** yêu cầu nhân viên chăm sóc khách hàng liên hệ hỗ trợ gia hạn bằng cách cung cấp số điện thoại trực tiếp trên ứng dụng
> **Để** tôi có thể dễ dàng hoàn tất việc gia hạn mà không cần tự liên hệ qua các kênh khác

### Tiêu chí nghiệm thu

- [ ] Gói mua qua hình thức chuyển khoản hiển thị nhãn "CHUYỂN KHOẢN TRỰC TIẾP".
- [ ] Hiển thị đầy đủ thông tin gồm Ngày kích hoạt, Đã thanh toán và Hạn sử dụng.
- [ ] Hiển thị nút thao tác "Nhắn CSKH để gia hạn".
- [ ] Khi bấm nút, hiển thị popup yêu cầu nhập số điện thoại để nhân viên hỗ trợ gọi lại.
- [ ] Hộp thoại gồm ô nhập số điện thoại (chỉ nhận chữ số, kiểm tra độ dài và định dạng số điện thoại Việt Nam), nút hủy và nút gửi thông tin.
- [ ] Hiển thị thông báo gửi thành công và tự động đóng popup.

### Luồng thao tác

1. Người dùng cuộn đến gói chuyển khoản trực tiếp trong danh sách.
2. Người dùng xem thông tin hạn sử dụng và bấm nút "Nhắn CSKH để gia hạn".
3. Hệ thống hiển thị popup yêu cầu nhập số điện thoại liên hệ.
4. Người dùng nhập số điện thoại của mình và bấm gửi.
5. Hệ thống gửi yêu cầu hỗ trợ lên máy chủ, thông báo gửi thành công cho người dùng và tự động ẩn popup.

---

## 4. Xử lý các gói đã hết hạn

### Câu chuyện người dùng

**Tiêu đề**: Khách hàng - Tương tác với danh sách gói đã hết hạn

> **Với vai trò** khách hàng có gói dịch vụ đã qua sử dụng (đã tắt gia hạn, mua qua chuyển khoản...)
> **Tôi muốn** có tùy chọn đăng ký lại gói đó hoặc xem thông tin hoàn tiền
> **Để** tôi có thể nắm bắt lịch sử và dễ dàng tiếp tục sử dụng dịch vụ

### Tiêu chí nghiệm thu

- [ ] Danh sách này bao gồm tất cả các gói đã vượt quá hạn sử dụng
- [ ] Đối với các gói hết hạn thông thường (nêu trên), nếu gói này vẫn còn kinh doanh, hiển thị nút "Đăng ký lại". Khi bấm sẽ điều hướng đến màn hình đăng ký và chọn sẵn gói tương ứng.
- [ ] Nếu gói cũ đã ngừng kinh doanh, hiển thị nút "Đăng ký gói mới". Khi bấm sẽ điều hướng đến màn hình đăng ký dịch vụ mặc định chọn tab cùng dịch vụ với gói cũ nếu có, không thì sẽ mặc định chọn dịch vụ bạc.
- [ ] Nếu gói bị hoàn tiền, hiển thị nhãn "ĐÃ HOÀN TIỀN", số tiền thực thu là 0đ và trạng thái thu hồi.
- [ ] Gói bị hoàn tiền sẽ không có nút thao tác.

### Luồng thao tác

1. Người dùng xem danh sách gói đã hết hạn.
2. Nếu bấm "Đăng ký lại", người dùng được chuyển đến màn hình mua dịch vụ với gói đã chọn sẵn.
3. Nếu bấm "Đăng ký gói mới", người dùng được chuyển đến màn hình mua dịch vụ trống.
4. Đối với gói bị hoàn tiền, người dùng chỉ đọc thông tin hiển thị.

---

## 5. Xem thông tin gói mua một lần (trọn đời / theo sự kiện)

### Câu chuyện người dùng

**Tiêu đề**: Khách hàng - Xem thông tin gói mua một lần

> **Với vai trò** khách hàng đã mua gói dịch vụ một lần (như gói trọn đời hoặc nội dung theo sự kiện)
> **Tôi muốn** xem thông tin và thời hạn sử dụng rõ ràng mà không bị yêu cầu gia hạn
> **Để** tôi an tâm trải nghiệm dịch vụ trong suốt thời gian đã cam kết

### Tiêu chí nghiệm thu

- [ ] Các gói mua đứt hiển thị nhãn "MUA 1 LẦN".
- [ ] Đối với gói trọn đời, thông tin "Hạn sử dụng" hiển thị là "Trọn đời".
- [ ] Đối với gói theo sự kiện (ví dụ tử vi năm), thông tin "Hạn sử dụng" hiển thị giá trị kèm năm tương ứng (ví dụ: "Trọn đời (Năm 2026)").
- [ ] Thẻ gói loại này KHÔNG có nút thao tác (không có nút gia hạn hay hủy gói).

### Luồng thao tác

1. Người dùng cuộn đến gói mua một lần trong danh sách "Gói đang dùng".
2. Người dùng xem thông tin ngày mua, số tiền đã thanh toán và hạn sử dụng.
3. Không có nút CTA nào được hiển thị, người dùng tiếp tục cuộn để xem các thông tin khác.
