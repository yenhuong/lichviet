---
id: SPEC-002
type: spec
status: approved
project: Lich_Viet
created: 2026-06-29
---

# Tài Liệu Thiết Kế UI/UX Cho Người Dùng Miễn Phí (Free Tier) - Xem Ngày Mua Xe

Tài liệu này đặc tả luồng trải nghiệm, giao diện (UI) và tương tác người dùng (UX) mới cho tính năng **Xem Ngày Mua Xe** của Lịch Việt, tập trung xử lý trường hợp người dùng miễn phí (Free Tier) theo mô hình Freemium kết hợp Paywall.

---

## 1. Mục Tiêu Thiết Kế
*   **Giá Trị Trước, Thu Phí Sau (Value-First):** Cho phép người dùng Free được xem đầy đủ kết quả của 1 ngày tốt đầu tiên (bao gồm cả giờ tốt ở màn hình Kết quả và toàn bộ luận giải chi tiết ở màn hình Chi tiết) để kiểm chứng giá trị của tính năng.
*   **Trải Nghiệm Trả Phí Cao Cấp (Premium Paywall):** Thay thế các thông báo `alert()` thô sơ bằng Paywall Bottom Sheet được thiết kế bắt mắt và chuyển động mượt mà.
*   **Bảo Mật Nội Dung Trả Phí:** Khóa và làm mờ (`.premium-blur`) nội dung chi tiết luận giải của các ngày bị khóa ở màn hình Chi tiết, ngăn chặn tình trạng rò rỉ dữ liệu.
*   **Đồng Bộ Trạng Thái Người Dùng:** Lưu trữ trạng thái sở hữu gói cước thông qua `localStorage` để kiểm soát giao diện trên cả 3 màn hình của tính năng.

---

## 2. Giao Diện & Tương Tác Chi Tiết

### Màn Hình Nhập Liệu (`ChonNgayMuaXe_Input.html`)
*   **Tiêu đề AppBar:** "Ngày Tốt Mua Xe" (không viết hoa tất cả).
*   **Banner giới thiệu:** Bổ sung thêm banner phong thủy cát tường nổi bật ở trên đầu khối nhập thông tin nhằm đánh trúng tâm lý cầu bình an và may mắn khi mua xe: *"Vạn dặm bình an, phúc lộc vẹn toàn. Chọn ngày đẹp để rước xe với tâm an lành, khởi đầu thuận lợi và hành trình bình an dài lâu."*
*   **Thông tin chủ xe:** Hiển thị thêm nhãn Tuổi âm lịch & Mệnh ngũ hành (cập nhật động) dưới ngày sinh (ví dụ: *"Tuổi Nhâm Thân - Mệnh Kiếm Phong Kim"*).
*   **Nhãn Màu xe:** Rút ngắn nhãn "Màu xe dự định mua" thành **"Màu xe"** giúp giao diện ngắn gọn, hiện đại hơn.
*   **Giá trị mặc định:** Khoảng thời gian xem mặc định là **"30 ngày tới"**.
*   **CTA Button:** Nút chuyển trang đổi thành **"Tìm ngày mua xe hợp tuổi"**.
*   **Bố cục:** Bỏ phần "Văn khấn cúng xe mới" để màn hình gọn gàng hơn.
*   **Kiểm thử:** Thêm nút chuyển đổi ẩn `[Free Mode / Premium Mode]` dưới cùng để hỗ trợ QC/Test.

### Màn Hình Kết Quả (`ChonNgayMuaXe_Result.html`)
*   **Header kết quả tinh giản (Mới):**
    *   Loại bỏ hoàn toàn hộp thông tin co giãn phức tạp (`#summaryCardContainer`) và nút *"Thay đổi"* làm chuyển trang.
    *   Hiển thị thông tin người xem (Họ tên, ngày sinh) và Màu xe ở dạng text read-only tĩnh (Metadata) ở góc trên.
    *   Bố trí một nút bấm thay đổi khoảng thời gian xem dạng Dropdown nổi bật ngay dưới dòng thông tin tĩnh: `[ 📅 {khoảng thời gian} ▾ ]`. Khi click vào nút này, hệ thống sẽ mở trực tiếp Bottom Sheet chọn khoảng thời gian (`#timeframeSheet`) giúp người dùng cập nhật nhanh chỉ trong 2 thao tác chạm.
    *   Để thay đổi các thông tin khác (thành viên, màu xe, hướng...), người dùng sẽ sử dụng nút **Back** (mũi tên quay lại ở góc trái AppBar) để quay lại màn nhập liệu ban đầu.
*   Hiển thị danh sách ngày tốt tìm thấy trong khoảng thời gian đã chọn (ví dụ: ngày 24/06 và ngày 27/06).
*   **Nếu `is_premium_user` là `true`:** Mở khóa 100% tất cả các ngày và giờ tốt. Không hiện icon khóa.
*   **Nếu `is_premium_user` là `false` (Free):**
    *   **Ngày thứ nhất (24/06):** Hiển thị rõ ràng các giờ tốt. Cho phép click để xem Chi tiết.
    *   **Ngày thứ hai (27/06) & Ngày tham khảo:** Làm mờ giờ tốt (`.hour-blur`) kèm icon khóa vàng. Nhấp vào sẽ mở **Paywall Bottom Sheet**.
    *   Không tự động mở popup nâng cấp khi cuộn trang để tránh gây phiền.
*   **Trường hợp chỉ tìm thấy duy nhất 1 ngày tốt (One Day Scenario):**
    *   **Nếu `is_premium_user` là `true`:** Hiển thị ngày tốt duy nhất đó kèm hộp giải thích lý do phong thủy chi tiết (`onlyOneDayNotice`) và nút CTA để người dùng chủ động mở rộng khoảng thời gian xem.
    *   **Nếu `is_premium_user` là `false` (Free):** Ẩn ngày tốt đó (không hiển thị ra ngoài). Cập nhật tiêu đề trạng thái kết quả (`resultStatusText`) thành: *"Tìm thấy 1 ngày tốt phù hợp trong khoảng bạn chọn"*. Ngay phía dưới tiêu đề hiển thị khối nâng cấp Gói Vàng chuẩn (`premiumPromoCard` màu xanh, đồng bộ cấu trúc với trường hợp nhiều ngày tốt) để người dùng mở khóa xem đầy đủ, đồng thời bổ sung thêm một liên kết phụ dạng text link căn giữa màu xanh dương `"Đổi thời gian để tìm thêm ngày ›"` (`#oneDaySecondaryCTA`) kèm icon mũi tên nhỏ phía dưới khối mở khóa nhằm đảm bảo không lấn át hành động chính.

### Màn Mẫu Paywall Bottom Sheet
*   Thiết kế dạng Bottom Sheet trượt lên từ đáy màn hình, sử dụng tông màu xanh hoàng gia và vàng gold.
*   **Quyền lợi Gói Vàng:**
    *   👑 Mở khóa toàn bộ 30+ ngày cát tường trong năm.
    *   ☀️ Xem chi tiết giờ đẹp hợp tuổi & tránh giờ sát.
    *   ⚖️ Luận giải tương hợp can chi ngũ hành cá nhân hóa.
*   **Nút CTA:** "Mở Khóa Ngay - Chỉ 99.000đ/tháng". Khi nhấp vào sẽ hiển thị loader âm dương quay vòng giả lập thanh toán trong 1.5 giây, sau đó lưu trạng thái `is_premium_user = true` và tải lại trang.

### Màn Hình Chi Tiết Luận Giải (`ChonNgayMuaXe_Detail.html`)
*   **Nếu xem Ngày thứ nhất (hoặc là Premium):** Hiển thị đầy đủ luận giải "NHÂN" và "THIÊN".
*   **Nếu xem Ngày bị khóa (Free):**
    *   Phần tiêu đề và thông tin chung vẫn hiển thị để tạo hứng thú.
    *   Phần nội dung chi tiết luận giải "NHÂN" và "THIÊN" bên dưới bị áp dụng class làm mờ `.premium-blur`.
    *   Hiển thị một thẻ **Paywall Overlay (Glassmorphism)** đè lên phần bị mờ với thông báo *"Mở khóa Gói Vàng để xem chi tiết luận giải cát hung hợp bản mệnh"* và nút CTA. Click vào nút này sẽ kích hoạt Paywall Bottom Sheet.

---

## 3. Cấu Trúc CSS & JS Dự Kiến

### CSS Paywall & Blur (Tailwind + Custom Styles)
```css
/* Làm mờ nội dung luận giải */
.premium-blur {
    filter: blur(5px);
    opacity: 0.35;
    pointer-events: none;
    user-select: none;
}

/* Thẻ đè kính mờ (Glassmorphism Paywall Card) */
.paywall-overlay {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(229, 231, 235, 0.5);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
```

### Quản Lý Trạng Thái JS
```javascript
// Kiểm tra trạng thái Premium
let isPremium = localStorage.getItem('is_premium_user') === 'true';

// Hàm giả lập thanh toán nâng cấp Premium
function simulatePayment() {
    showLoader("Đang kết nối cổng thanh toán App Store...", 1500, () => {
        localStorage.setItem('is_premium_user', 'true');
        location.reload(); // Làm mới trang để cập nhật giao diện
    });
}
```
