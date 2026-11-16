---
id: US-GOPY-01
type: story
status: draft
project: Lich_Viet
owner: "@product-team"
tags: [gop-y, feedback, form, ho-tro-nguoi-dung]
linked-to: "[[Stories-MOC]]", "[[BPRD-002-KhaoSatInApp]]"
created: 2026-10-13
---
# User story cho màn Góp ý với Lịch Việt

Tài liệu này định nghĩa user story cho màn "Góp ý với Lịch Việt" dựa trên prototype `prototype/GopY.html`

## US-GOPY-01 - Gửi góp ý kèm hình ảnh cho Lịch Việt

**As a** người dùng ứng dụng Lịch Việt (đã đăng nhập hoặc khách) đang gặp vấn đề hoặc có mong muốn cải thiện một tính năng cụ thể

**I want to** chọn tính năng cần góp ý, viết nội dung chia sẻ và đính kèm tối đa 3 ảnh minh họa rồi gửi trực tiếp ngay trong ứng dụng

**So that** ý kiến của tôi đến đúng đội ngũ phụ trách tính năng đó mà tôi không phải tìm kênh liên hệ bên ngoài, còn Lịch Việt có nguồn phản hồi được phân loại sẵn theo tính năng để ưu tiên cải thiện sản phẩm

---

### Metadata

- **Epic/Feature**: Hỗ trợ người dùng - Kênh góp ý trong ứng dụng
- **Priority**: Should Have
- **Estimate**: 3 Story Points (Medium)
- **Dependencies**:

  - Hệ thống khảo sát (Survey Service) dùng chung với [[BPRD-002-KhaoSatInApp]] và [[Story-KhaoSatInline-KichHoatNangLuong]]. Dữ liệu góp ý (nội dung, tính năng, ảnh đính kèm) được lưu vào cùng hệ thống này.
  - Dịch vụ tải ảnh lên (upload) dùng chung của ứng dụng.
  - Quyền truy cập thư viện ảnh trên thiết bị (iOS/Android).
- **Assumptions**:

  - Người dùng chưa đăng nhập vẫn gửi được góp ý. Hệ thống định danh bằng `customer_id` (mã thiết bị). Người dùng đã đăng nhập gửi kèm `user_id`.
  - Danh sách tính năng trong popup do server trả về, thêm hoặc bớt tính năng không cần phát hành bản cập nhật ứng dụng.

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

#### AC1 - Hiển thị màn Góp ý (Happy path)

- [ ] Người dùng bấm mục "Góp ý" trên sidebar → mở màn Góp ý.
- [ ] Header gồm nút quay lại và tiêu đề "Góp ý với Lịch Việt". Bấm nút quay lại → đóng màn Góp ý, trở về màn trước đó.
- [ ] Dưới header là ảnh minh họa và dòng mô tả "Mỗi góp ý của bạn đều giúp Lịch Việt cải thiện và mang đến trải nghiệm tốt hơn.", tiếp theo là form gồm 3 trường theo thứ tự "Tính năng bạn muốn góp ý", "Bạn muốn chia sẻ điều gì?" và "Đính kèm hình ảnh (nếu có)".
- [ ] Nút "Gửi góp ý" cố định ở đáy màn hình, không cuộn theo nội dung.

#### AC2 - Chọn tính năng muốn góp ý

- [ ] Trường mặc định hiển thị placeholder "Chọn tính năng", không bắt buộc chọn. Bấm vào trường → mở popup chọn tính năng.
- [ ] Danh sách tính năng trong popup lấy từ server, sắp xếp các tính năng trả phí trước rồi đến tính năng miễn phí. Trong mỗi nhóm, tính năng xếp theo thứ tự ưu tiên server trả về. Danh sách dài thì cuộn được trong popup.
- [ ] Chỉ chọn được 1 tính năng. Bấm chọn → popup tự đóng, trường hiển thị tên tính năng đã chọn. Mở lại popup → tính năng đang chọn được đánh dấu ✓ và highlight. Bấm lại vào tính năng đang chọn → bỏ dấu ✓ và highlight, popup vẫn mở để người dùng chọn tính năng khác
- [ ] Popup có icon ✕ để đóng. Bấm icon ✕ hoặc bấm ra ngoài vùng popup → popup đóng, giữ nguyên lựa chọn hiện tại.

#### AC3 - Nhập nội dung góp ý

- [ ] Ô nhập hiển thị placeholder "Hãy chia sẻ điều bạn muốn Lịch Việt cải thiện, bổ sung hoặc làm tốt hơn...", cho phép nhập nội dung dài nhiều dòng và cuộn trong ô để xem lại.

#### AC4 - Đính kèm hình ảnh

- [ ] Trường không bắt buộc, mặc định hiển thị ô "+ Thêm ảnh". Bấm "+ Thêm ảnh" → mở thư viện ảnh của thiết bị để chọn ảnh (lần đầu ứng dụng xin quyền truy cập thư viện ảnh theo chuẩn của hệ điều hành).
- [ ] Chọn ảnh từ thư viện → ảnh hiển thị dạng thumbnail, mỗi thumbnail có nút ✕ ở góc trên bên phải. Bấm ✕ → xóa ảnh đó khỏi danh sách đính kèm.

#### AC5 - Giới hạn số ảnh đính kèm (Edge case)

- [ ] Mỗi góp ý đính kèm tối đa 3 ảnh. Đủ 3 ảnh → ẩn ô "+ Thêm ảnh". Xóa bớt ảnh → ô "+ Thêm ảnh" hiển thị trở lại.
- [ ] Chọn nhiều ảnh cùng lúc vượt số lượng còn trống → chỉ nhận đủ số ảnh còn trống và hiển thị thông báo "Bạn chỉ có thể đính kèm tối đa 3 ảnh."

#### AC6 - Kiểm tra dữ liệu khi gửi (Negative path)

- [ ] Ô nội dung trống hoặc chỉ chứa khoảng trắng → bấm "Gửi góp ý" thì góp ý không được gửi, hiển thị thông báo "Vui lòng nhập nội dung góp ý của bạn." và con trỏ tự focus vào ô nội dung.
- [ ] Mất kết nối mạng hoặc máy chủ trả lỗi → hiển thị thông báo "Gửi góp ý không thành công. Vui lòng thử lại.", nút "Gửi góp ý" trở lại trạng thái bấm được, giữ nguyên tính năng, nội dung và ảnh đã nhập để người dùng gửi lại.

#### AC7 - Gửi góp ý thành công (Happy path)

- [ ] Nội dung hợp lệ → bấm "Gửi góp ý" thì hệ thống ghi nhận góp ý gồm tính năng đã chọn (nếu có), nội dung, ảnh đính kèm (nếu có) và thông tin định danh người dùng. Trong lúc đang gửi, nút chuyển sang trạng thái đang xử lý và không nhận thêm lượt bấm để tránh tạo góp ý trùng.
- [ ] Gửi thành công → đóng màn Góp ý, quay về màn trước đó và hiển thị popup cảm ơn như bên khảo sát inline

---

### Luồng thao tác

1. Người dùng mở sidebar và bấm mục "Góp ý" để vào màn "Góp ý với Lịch Việt".
2. Người dùng chọn tính năng muốn góp ý trong popup (không bắt buộc).
3. Người dùng nhập nội dung góp ý (bắt buộc).
4. Người dùng thêm tối đa 3 ảnh minh họa (không bắt buộc).
5. Người dùng bấm "Gửi góp ý".
6. Hệ thống kiểm tra nội dung. Nếu không hợp lệ, hiển thị thông báo lỗi tương ứng.
7. Nếu hợp lệ, hệ thống gửi góp ý lên máy chủ. Gửi thành công thì đóng màn Góp ý, quay về màn trước đó và hiển thị popup cảm ơn.
