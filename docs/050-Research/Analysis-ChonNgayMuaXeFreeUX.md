---
id: RESEARCH-002
type: research
status: approved
project: Lich_Viet
owner: "@product"
tags: [ui-ux, free-tier, paywall, chon-ngay-mua-xe]
created: 2026-06-23
---

# Phân Tích UI/UX Cho Trải Nghiệm Người Dùng Miễn Phí (Free Tier) - Tính Năng Chọn Ngày Mua Xe

## 1. Bối Cảnh & Đánh Giá Hiện Trạng

Hiện tại, tính năng **Chọn Ngày Mua Xe** trên bản prototype đang áp dụng cơ chế khóa Premium (Paywall) như sau:
*   **Trang kết quả (Result):** Hiển thị danh sách ngày tốt nhưng tất cả các khung giờ tốt đều bị làm mờ (`.hour-blur`) và có biểu tượng khóa. Khi cuộn xuống danh sách ngày tham khảo, hệ thống tự động hiển thị popup nâng cấp dịch vụ (`#goldPopupModal`).
*   **Trang chi tiết (Detail):** Khi người dùng nhấp vào một ngày bất kỳ (dù đang bị khóa giờ ở trang kết quả), trang chi tiết vẫn hiển thị đầy đủ và chi tiết toàn bộ nội dung luận giải ("NHÂN" và "THIÊN") mà không hề có cơ chế khóa hay làm mờ nào.
*   **Trải nghiệm thanh toán:** Khi nhấn vào nút nâng cấp hoặc các vùng khóa, hệ thống hiển thị thông báo bằng hộp thoại `alert()` mặc định của trình duyệt, tạo cảm giác thiếu chuyên nghiệp.

### Các Điểm Hạn Chế Về UI/UX (Gaps):
1.  **Lộ lọt thông tin (Data Leak):** Khóa ở trang ngoài nhưng mở hoàn toàn ở trang trong khiến cơ chế premium bị vô hiệu hóa.
2.  **Thiếu giá trị trải nghiệm trước (No Free Value):** Việc khóa 100% kết quả giờ tốt khiến người dùng không có cơ hội kiểm chứng độ chính xác hay chất lượng luận giải của ứng dụng, dẫn đến tỷ lệ chuyển đổi mua hàng (conversion rate) thấp.
3.  **Gây ức chế cho người dùng (Intrusive Paywall):** Việc tự động bật popup nâng cấp khi cuộn trang và chặn tương tác bằng `alert()` gây gián đoạn trải nghiệm nghiêm trọng.

---

## 2. Xu Hướng UI/UX & Giải Pháp Freemium Cho Ứng Dụng Tâm Linh (Astrology/Feng Shui)

Dựa trên nghiên cứu các ứng dụng hàng đầu như *Nebula*, *Co-Star*, và *The Pattern*, các thực hành tốt nhất (Best Practices) bao gồm:
1.  **Cung cấp giá trị trước (Value-First/Freemium):** Mở khóa miễn phí một phần nhỏ dữ liệu chất lượng cao (ví dụ: mở khóa 1 ngày tốt nhất) để người dùng thấy được giá trị thực tế của tính năng.
2.  **Khơi gợi sự tò mò (Curiosity Gap):** Làm mờ thông tin chuyên sâu (như chi tiết can chi xung khắc, giờ hoàng đạo hợp tuổi) và hiển thị nút hành động hấp dẫn thay vì chặn hoàn toàn bằng màn hình cứng.
3.  **Paywall tích hợp ngữ cảnh (Contextual Paywall):** Paywall xuất hiện đúng lúc khi người dùng muốn "đi sâu hơn" (ví dụ: nhấp vào ngày bị khóa) với thiết kế cao cấp, rõ ràng về quyền lợi và dễ dàng tắt đi.

---

## 3. Đề Xuất Cải Tiến Cho Tính Năng Chọn Ngày Mua Xe (Free Tier UX)

### A. Quy tắc phân loại trải nghiệm người dùng
Hệ thống sẽ lưu trữ trạng thái người dùng (Free vs. Premium) trong `localStorage` (biến `is_premium_user`). Mặc định ban đầu sẽ là `false` (người dùng Free).

| Màn hình | Trải nghiệm Người dùng Free | Trải nghiệm Người dùng Premium |
| :--- | :--- | :--- |
| **1. Input** | Nhập thông tin bình thường (Họ tên, ngày sinh, màu xe, khoảng thời gian). | Nhập thông tin bình thường. |
| **2. Result** | *   **Ngày tốt thứ nhất:** Mở khóa hoàn toàn (Hiển thị rõ các giờ tốt, không mờ, không khóa).<br>*   **Ngày tốt thứ hai trở đi:** Khóa giờ tốt bằng hiệu ứng mờ nhẹ và icon khóa màu vàng gold.<br>*   **Ngày tham khảo ngoài khoảng:** Khóa toàn bộ thẻ ngày, hiển thị icon khóa lớn.<br>*   **Hành động:** Nhấp vào ngày đã mở khóa sẽ vào Detail xem bình thường. Nhấp vào ngày bị khóa hoặc nút mở khóa sẽ hiện Paywall Bottom Sheet được thiết kế cao cấp. | *   Mở khóa 100% tất cả các ngày tốt và giờ tốt.<br>*   Không hiển thị bất kỳ banner quảng cáo hay icon khóa nào. |
| **3. Detail** | *   **Với ngày được mở khóa:** Xem đầy đủ chi tiết luận giải "NHÂN" và "THIÊN".<br>*   **Với ngày bị khóa:** Hiển thị 30% nội dung (Phần giới thiệu chung). Các phần luận giải chi tiết bên dưới bị làm mờ (`.premium-blur`) và đè lên bởi một thẻ Paywall Overlay mờ kính (Glassmorphic Paywall Card) với nút CTA "Mở khóa Premium". | *   Xem đầy đủ chi tiết 100% nội dung của tất cả các ngày. |

### B. Thiết kế Paywall Screen & Trải Nghiệm Mượt Mà (Wow Factor)
1.  **Paywall Bottom Sheet thay thế cho `alert()`:** Thiết kế một Bottom Sheet hoặc Modal trượt lên mượt mà, sử dụng dải màu gradient sang trọng (Deep Blue `#005CAC` kết hợp Gold `#D4AF37`), hiển thị các quyền lợi đặc quyền của gói Premium:
    *   *Mở khóa toàn bộ hơn 30+ ngày tốt và hàng trăm giờ đại cát trong năm.*
    *   *Luận giải chi tiết tương hợp can chi ngũ hành cá nhân hóa.*
    *   *Nhận lời khuyên phong thủy độc quyền từ cố vấn Lịch Việt.*
2.  **Nút CTA Hành động cụ thể:** Thay vì "Nâng cấp", nút bấm sẽ hiển thị "Mở khóa trọn đời ngày cát tường" hoặc "Trải nghiệm Premium chỉ 99.000đ/tháng".
3.  **Nút đóng (Close Button) rõ ràng:** Đảm bảo người dùng có thể dễ dàng tắt Paywall để quay lại trải nghiệm cơ bản, giảm tỷ lệ thoát ứng dụng (churn rate).
4.  **Hộp thoại thanh toán giả lập chuyên nghiệp:** Khi nhấn "Nâng cấp" trên Paywall, hiển thị một loader xoay vòng âm dương đẹp mắt ("Đang kết nối cổng thanh toán App Store...") và sau đó chuyển trạng thái `is_premium_user` thành `true` để người dùng trải nghiệm ngay lập tức sự khác biệt.

---

## 4. Kế Hoạch Triển Khai Chi Tiết (HTML Prototypes)

1.  **Đồng bộ hóa Trạng thái:** Sử dụng `localStorage.getItem('is_premium_user')` để điều khiển giao diện trên cả 3 trang. Cung cấp một nút "Giả lập Premium" hoặc "Switch User Type" nhỏ ở góc trên để dễ dàng kiểm thử cả 2 luồng Free và Premium.
2.  **Chỉnh sửa `ChonNgayMuaXe_Input.html`:** Giữ nguyên luồng nhập liệu cá nhân hóa. Thêm thông tin giới thiệu gói cước ở chân trang để tạo nhận diện sớm.
3.  **Chỉnh sửa `ChonNgayMuaXe_Result.html`:**
    *   Cập nhật danh sách ngày tốt: Ngày 1 (Thứ Tư, 24/06) mở khóa giờ; Ngày 2 (Thứ Bảy, 27/06) khóa giờ.
    *   Thay đổi sự kiện click vào ngày bị khóa: thay vì chuyển trang sẽ mở Paywall Bottom Sheet (nếu là Free).
    *   Làm lại thiết kế `#goldPopupModal` thành dạng Paywall kéo lên thanh thoát, không tự động chặn màn hình khi cuộn trừ khi người dùng chạm vào vùng bị khóa.
4.  **Chỉnh sửa `ChonNgayMuaXe_Detail.html`:**
    *   Đọc tham số ngày đang xem. Nếu ngày đó bị khóa và user là Free -> áp dụng `.premium-blur` cho phần nội dung thẻ luận giải chi tiết và hiển thị thẻ Paywall đè lên.
    *   Tích hợp Paywall Bottom Sheet đồng bộ với trang Result.
