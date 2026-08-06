---
id: Spec-SuKienChiTiet
type: spec
status: draft
project: Lich_Viet
created: 2026-07-10
linked-to: [[Design-MOC]]
---

# Đặc tả UX/UI: Thiết kế lại chi tiết sự kiện mùng 1 đầu tháng (Bản Theo Ảnh Giao Diện)

Tài liệu này mô tả chi tiết kiến trúc thông tin, bố cục phẳng tối giản và các hành vi tương tác cho màn hình **Chi tiết sự kiện mùng 1** với giao diện tràn viền (Immersive Header) dựa trên ảnh giao diện người dùng cung cấp.

## 1. Kiến trúc Thông tin & Phân cấp Giao diện
Giao diện sử dụng hình nền tranh thủy mặc và dải màu nền kem ấm `#FAF6EE` đồng bộ toàn trang để tạo cảm giác hài hòa, tươm tất:
1.  **Immersive Lotus Header (Đầu trang tràn viền hoa sen):** Nền hình ảnh hoa sen và tháp cổ với tông màu xanh ngọc (teal/mint) dưới ánh bình minh, các tiêu đề ngày tháng và nút quay lại được căn lề trái tinh tế.
    *   **Hiệu ứng vòng cung (Arc transition):** Khối nội dung cuộn bên dưới sử dụng góc bo tròn phía trên (`rounded-t-[24px]`) và đẩy nhẹ đè lên đáy ảnh nền (`mt-[-20px]`) để tạo vòng cung nhẹ hai bên, giúp kết nối tự nhiên và mượt mà giữa ảnh nền và phần thân trang.
2.  **Khối Tiện ích chính (Văn khấn mùng 1):** Làm điểm nhấn thị giác chính với nút bấm màu xanh ngọc (teal) đồng bộ để thu hút sự chú ý.
3.  **Khối Cá nhân hóa (Chi tiết ngày theo tuổi):** Thẻ phẳng, thông tin rút gọn, các nhãn việc khuyên làm dùng màu sắc trung tính nhẹ nhàng.
4.  **Khối Chuyển đổi (Luận giải Tử Vi):** Banner phẳng mỏng màu kem nhạt, nút viền mảnh lịch sự.
5.  **Khối Cài đặt nhắc nhở:** Dạng danh sách phẳng (Flat List) iOS-style với đường chia mảnh mượt mà.
6.  **Khối Tri thức (Tìm hiểu thêm):** Accordion mở rộng phẳng dưới đáy trang.

---

## 2. Chi tiết Thiết kế các Khối giao diện

### A. Immersive Lotus Header (Đầu trang tràn viền hoa sen)
*   **Trải nghiệm tràn viền & Chiều cao:** Ảnh nền hoa sen và tháp cổ kính (`mung_mot_bg.png`) được hiển thị với chiều cao tối ưu `200px` (chiếm khoảng 1/4 màn hình di động). Thiết lập kích thước `w-full h-full object-cover object-right-bottom` để toàn bộ bức tranh (sen, tháp cổ) hiển thị đầy đủ, sắc nét ở góc phải.
*   **Lớp phủ mờ (Overlay):** Loại bỏ lớp phủ tối mờ. Thêm một lớp gradient chuyển sắc từ dưới lên (`bg-gradient-to-t from-[#FAF6EE] to-transparent`, cao `h-16`, `z-[1]`) ở đáy Header để chân ảnh nền hòa nhập mượt mà vào màu nền kem ấm `#FAF6EE`.
*   **Khu vực Status Bar:** Hiển thị thời gian và các biểu tượng hệ thống bằng màu xám sẫm (Dark text) đè trực tiếp lên nền trời sáng.
*   **Thanh điều hướng nhanh:**
    *   Nút quay lại (Back): Một mũi tên màu xám sẫm đặt ở lề trái, nằm trong hộp vuông bo góc mềm (squircle) màu trắng có kích thước siêu nhỏ gọn (`w-7 h-7`, bo góc `rounded-md`) có bóng đổ nhẹ.
    *   Nút tùy chọn thêm (More): Loại bỏ để dọn dẹp thị giác.
*   **Các thành phần chữ đè trực tiếp lên ảnh:**
    *   **Tiêu đề chính:** *"Ngày Mùng Một"* sử dụng font chữ Serif sang trọng (`font-family: 'Lora', serif;`, cỡ chữ `21px`, `font-bold`) căn lề trái, màu xanh rừng sẫm (`#1b4332`).
    *   **Dòng ngày âm lịch:** *"Tháng 6 âm lịch"* màu xanh rừng sẫm (`#1b4332`, cỡ `17px`, font-bold).
    *   **Dòng ngày dương lịch:** *"Thứ Ba, 14/7/2026"* (không có ký hiệu DL hay khung viền) màu xanh rừng sẫm (`#1b4332/80`, cỡ `13.5px`, font-medium).

### B. Thông điệp đầu tháng (Quote)
*   **Thiết kế:** Được đặt ngay phía dưới khối Header (trên nền kem ấm `#FAF6EE`), nằm bên trong phần cuộn trang, trải phẳng liên tiếp không bo góc nhưng sử dụng lề âm nhẹ (`mt-[-20px]`) để kéo lên sát chân ảnh hơn.
*   **Chi tiết:** Dòng chữ thường (regular, không in nghiêng) màu xanh rừng sẫm `#1b4332`, cỡ `13.5px`, `font-semibold` căn giữa, ngắt dòng: *"Khởi đầu tháng mới an lành, \n giữ tâm sáng và đón những điều tốt đẹp."*. Có một dấu ngoặc kép mở `“` (`text-[32px]`, màu `#0f766e/20`) đặt sát lề trái của dòng chữ đầu tiên (`top-0.5`, `-left-3.5`) nhờ wrapper `inline-block` để tạo sự gọn gàng và không dùng ngoặc kép đóng.

### C. Nội dung dưới khối Header (Main Content Wrapper)
*   **Thiết kế:** Phông nền toàn bộ trang là màu kem ấm `#FAF6EE`, trải phẳng liên tục không bo tròn góc.

### C. Khối Văn khấn mùng 1 (ĐIỂM NHẤN CHÍNH)
*   **Tiêu đề nhóm:** **"Lễ cúng đầu tháng"** (`text-[14.5px]`, `font-extrabold`, màu xám sẫm `#1f2937`) đặt ở giữa câu truyền cảm hứng và card văn khấn, có lề trái 16px (`px-4`) để căn hàng chuẩn với card.
*   **Thiết kế Card:** Thẻ Card màu trắng (`bg-white`), bo góc tròn mềm mại (`rounded-2xl`), viền mảnh xám nhạt (`border-gray-100`) và bóng đổ nhẹ, đặt ngay dưới tiêu đề nhóm với khoảng cách nhỏ `10px` (`mt-2.5`). Margin ngang card là `16px` (`px-4`), padding trong card là `16px` (`p-4`).
*   **Chi tiết:**
    *   **Bên trái:** Hình ảnh icon chắp tay cầu nguyện gốc (`i_VanKhan Copy@3x.png`) hiển thị trực tiếp với kích thước `w-10 h-10` (40px) nhỏ gọn, không sử dụng vòng tròn nền hay khung viền bên ngoài để đảm bảo tính tối giản, thoáng đãng.
    *   **Bên phải (Nội dung chính):** Tiêu đề *"Văn khấn mùng 1"* (cỡ `15.5px`, `font-extrabold`, màu xanh rừng sẫm `#1b4332`) và dòng mô tả phụ: *"Bài khấn đầy đủ, kèm lễ vật gợi ý để chuẩn bị lễ cúng đầu tháng chu đáo hơn."* (màu xám `#6b7280`, cỡ `12px`).
    *   **Dưới cùng:** Nút hành động chính chiếm toàn bộ chiều rộng card có nhãn *"Xem văn khấn & lễ vật"* màu trắng trên nền xanh rừng đậm (`bg-[#224d36]` - hover `#1a3b29`), đi kèm icon cuốn sách `📖`, cỡ `13px`, `font-extrabold`, `py-3.5`, bo tròn góc `rounded-xl`.

### D. Chi tiết ngày theo tuổi (Cá nhân hóa)
*   **Thiết kế:** Loại bỏ hoàn toàn hộp bao quanh (borderless). Nội dung trải phẳng trên trang chính, ngăn cách bởi đường kẻ ngang mảnh xám nhạt (`border-b border-gray-100 pb-6`) dưới chân.
*   **Thông tin hiển thị:**
    *   Điểm số hợp tuổi: Dạng chữ nổi bật **75% · Khá tốt** (màu xanh ngọc chủ đạo).
    *   Việc hợp tuổi: Dạng các nhãn (badges) nền xám nhạt (`bg-gray-100`), chữ xám đen (`text-gray-700`), có icon đi kèm (🛍️ Mua sắm, ⛩️ Đi chùa, 👥 Gặp bạn bè).
*   **Hành động:** Nút bấm phẳng mỏng *"Xem chi tiết ngày tốt xấu"*.

### E. Quảng cáo Tử Vi (Upsell)
*   **Bố cục:** Banner phẳng mỏng màu kem nhạt rất nhẹ `#FFFDF9`.
*   **Hành động:** Nút bấm dạng viền mảnh (Outline button): **Xem lá số của tôi**.

### F. Cài đặt nhắc nhở (Flat List iOS-style)
*   **Bố cục:** Dạng danh sách phẳng trải dài ngăn cách bởi đường kẻ mảnh 1px màu xám sáng (`border-t border-gray-100`).
*   **Tương tác chỉnh sửa giờ:** Bấm vào giờ hoặc nút Bút chì để mở **Bottom Sheet chọn giờ** (mô phỏng bằng HTML/JS) từ dưới đáy lên.

### G. Góc tri thức (Tìm hiểu thêm)
*   **Thiết kế:** Accordion phẳng hoàn toàn ở dưới cùng. Bấm vào tiêu đề để mở rộng/thu gọn văn bản.

---
## Related Documents
- [[Design-MOC]]
