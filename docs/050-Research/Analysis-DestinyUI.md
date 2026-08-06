---
id: Analysis-DestinyUI
type: research
status: draft
project: Lich_Viet
created: 2026-04-16
---

# Phân tích: Thiết kế lại Giao diện Dự đoán Vận hạn

## 1. Nguyên tắc cốt lõi cho UI Mobile 2026
Dựa trên các xu hướng thiết kế hàng đầu:
- **Triết lý Calm UI**: Loại bỏ triệt để các yếu tố gây nhiễu thị giác. Tránh sử dụng quá nhiều màu sắc gây choáng ngợp, thay thế bằng hiệu ứng "Liquid Glass" và độ sâu tinh tế.
- **Kiến trúc Bento Grid**: Sử dụng bố cục thẻ module để hiển thị các thông tin liên quan (Ngày tháng, Thông tin người dùng, Dự báo vận hạn) một cách hiệu quả trên di động, giữ cho mọi thứ dễ hấp thụ trong các ô 1x1 hoặc 2x2 gọn gàng.

## 2. Thiết kế lại cách trình bày dữ liệu (Vấn đề của Biểu đồ Cột)
Giao diện hiện tại sử dụng biểu đồ cột dọc tiêu chuẩn để hiển thị 4 chỉ số: Tổng Quan (73%), Tài Vận (60%), Công Việc (79%), Tình Duyên (80%).
Biểu đồ cột mang lại cảm giác quá "công sở" và lỗi thời đối với một ứng dụng chiêm tinh cá nhân.

**Các giải pháp thay thế sáng tạo**:
- **Radial Progress Rings (Đề xuất)**: Phân bổ 4 vòng tiến trình tròn độc lập vào các thẻ Bento nhỏ. Cách này kế thừa khái niệm của biểu đồ cột nhưng chuyển sang dạng tròn, mang lại cảm giác huyền bí, tiết kiệm không gian và bắt mắt hơn.
- **Donut Chart**: Tốt cho việc hiển thị tỉ lệ phần trăm trên tổng thể, nhưng vì đây là các điểm số độc lập nên Radial Rings sẽ phù hợp hơn.
- **Radar (Spider) Chart**: Một lựa chọn mang tính chủ đề khác cho các chỉ số cá nhân, nhưng thường khó đọc trên màn hình di động nhỏ.

## 3. Định hướng Sáng tạo (Cảm xúc & Chủ đề)
- **Thẩm mỹ**: Tối giản cao cấp (Premium Minimalist) / "Liquid Glass".
- **Bảng màu**: Chuyển từ các màu phẳng, phổ thông sang bảng màu hài hòa, có chiều sâu (ví dụ: Emerald, Amber, Sapphire và Ruby với nền mờ trong suốt).
- **Typography & Nhấn mạnh**: Nhấn mạnh vào các con số ("Big Numbers") để làm điểm neo thị giác, sử dụng phông chữ Sans Serif hiện đại, dễ đọc, kết hợp với hệ thống icon chất lượng cao.

## 4. Bố cục Đề xuất
Chuyển đổi báo cáo tĩnh thành một dashboard hấp dẫn:
- **Thẻ Hero (2x2)**: Năm được chọn và hình minh họa rực rỡ, trang nhã (ví dụ: hình chú Gà/Dậu).
- **Ô thông tin (1x1)**: Các chỉ số nhanh như Ngày sinh, Cung hoàng đạo, Giới tính, hiển thị gọn gàng.
- **Thống kê Radial (1x1 cho mỗi loại)**: 4 thẻ, mỗi thẻ chứa một vòng tiến trình cho Tổng Quan, Tài Vận, Công Việc, Tình Duyên.

## 5. Các bước tiếp theo
Sau khi hướng sáng tạo này được phê duyệt, chúng tôi sẽ ánh xạ các yếu tố này vào bố cục Bento Grid cụ thể và định nghĩa Hệ thống Thiết kế (màu sắc, phông chữ, tương tác vi mô).
