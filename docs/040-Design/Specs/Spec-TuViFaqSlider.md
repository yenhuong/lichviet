---
id: Spec-TuViFaqSlider
type: spec
status: draft
project: Lich_Viet
created: 2026-06-24
linked-to: [[US-TrangChu-KhoiChinh]], [[BPRD-TrangChu_V2]]
---

# Đặc tả UX/UI: Slider Câu Hỏi Tử Vi Thường Gặp & Trang Chi Tiết

Tài liệu này đặc tả giao diện và trải nghiệm người dùng (UX/UI) cho tính năng Slider Câu hỏi tử vi thường gặp tại màn hình Trang chủ và màn hình Chi tiết Hỏi đáp Tử vi.

---

## 1. Kiến trúc Thông tin & Luồng Người dùng (User Flow)

Tính năng này kết nối trực tiếp từ màn hình Trang chủ tới màn hình chi tiết Hỏi đáp Tử vi và dẫn dắt người dùng thực hiện xem tử vi chuyên sâu:
1. **Trang chủ (`TrangChu_V2.html`)**: Vị trí banner đếm ngược sự kiện được cải tiến thành **Slider tự động chuyển thẻ**. Thẻ thứ 2 hiển thị câu hỏi tử vi hấp dẫn (VD: *"Lá số của tôi có thể khởi nghiệp hay không?"*).
2. **Nhấn vào thẻ**: Điều hướng sang **Màn hình Chi tiết Hỏi đáp (`tuvi_faq_detail.html`)**.
3. **Màn hình Chi tiết**: Hiển thị câu hỏi nổi bật, câu trả lời phân rã trực quan (Tổng quan, Thách thức, Cơ hội, Khuyên dùng) và nút CTA.
4. **Nhấn nút CTA**: Chuyển tiếp tới **Màn hình nhập thông tin tử vi nghề nghiệp (`tuvi_nghenghiep_input.html`)**.

---

## 2. Đặc tả Slider tại Trang chủ

### A. Giao diện & Bố cục (Layout)
- **Container**: Một khung bao Slider có `overflow-hidden` và bo góc `rounded-[16px]`.
- **Track trượt (Slide Track)**: Chứa 2 thẻ nằm ngang song song, chiều rộng dải trượt bằng 200% (`w-[200%]`), mỗi thẻ chiếm 50% chiều rộng dải trượt.
- **Thẻ 1 (Event Countdown)**: Thẻ đếm ngược sự kiện khẩn cấp hiện tại (không đổi kiểu dáng, chỉ thu nhỏ độ rộng để vừa khít slider).
- **Thẻ 2 (Horoscope FAQ)**: 
  - **Màu nền (Background)**: Gradient tím/vàng nhạt huyền bí `bg-gradient-to-br from-[#F5F3FF] to-[#FAF5FF]`, viền tím `#E9D5FF`.
  - **Biểu tượng (Icon)**: Quả cầu pha lê `🔮` hoặc biểu tượng âm dương `☯️` nổi bật góc trái.
  - **Nội dung chữ**: 
    - Nhãn phụ: "CÂU HỎI TỬ VI THƯỜNG GẶP" (màu tím đậm, chữ in hoa cỡ nhỏ, font-bold).
    - Câu hỏi chính: "Lá số của tôi có thể khởi nghiệp hay không?" (màu xám đậm, cỡ chữ 14px, dòng chữ hiển thị rõ ràng).
  - **Mũi tên điều hướng (Affordance)**: Icon mũi tên phải `svg` mờ, tự động sáng lên khi hover.

### B. Chuyển động & Tương tác (Interaction)
- **Tự động chuyển thẻ (Auto-play)**: Slider tự động trượt ngang qua lại sau mỗi **4 giây** bằng CSS transition mượt mà (`transition-transform duration-500 ease-out`).
- **Chỉ số trang (Dots Indicators)**:
  - Nằm ở giữa phía dưới của Slider.
  - Chấm của thẻ đang active sẽ có chiều rộng lớn hơn (`w-4` so với `w-1.5` của chấm inactive), được thiết kế bo tròn dạng kén (capsule).
  - Màu sắc của chấm active thay đổi tương ứng: màu đỏ `#C62828` cho Sự kiện, màu tím `#6B21A8` cho Tử vi.

---

## 3. Đặc tả Giao diện Màn hình Chi tiết Hỏi đáp (`tuvi_faq_detail.html`)

Màn hình chi tiết được bọc trong khung Mockup điện thoại tiêu chuẩn để đồng bộ thiết kế với các trang khác trong thư mục `prototype/`.

### A. Thành phần giao diện (UI Components)
1. **AppBar**:
   * Nút Back (`history.back()`) ở góc trái.
   * Tiêu đề màn hình: "Giải Mã Lá Số" đặt ở giữa.
2. **Khu vực Trang trí**:
   * Mascot tử vi sự nghiệp `mascot_nghenghiep.png` được thu nhỏ, căn giữa ở phần đầu trang tạo không khí học thuật cổ xưa và trực quan.
3. **Thẻ Câu hỏi (Question Box)**:
   * Hiển thị câu hỏi lớn dạng hộp nổi bật: **"Lá số của tôi có thể khởi nghiệp hay không?"** kết hợp biểu tượng `❓` hoặc `🔮` bên cạnh.
4. **Nội dung Giải mã (Answer Panels)**:
   * Tránh sử dụng các đoạn văn bản dài liền mạch gây mỏi mắt. Văn bản được chia làm 4 khối rõ ràng với nền màu HSL dịu mát:
     * **Tổng quan (Kết luận)**: Đặt trong hộp nền xanh lá nhạt `bg-[#E8F8F5]` viền `border-[#A3E4D7]`. Chữ hiển thị: *"Bạn có thể khởi nghiệp. Tuy nhiên, quá trình này sẽ gặp nhiều trở ngại và đòi hỏi sự kiên trì cao độ."*
     * **Thách thức (Yếu tố cản trở ⚠️)**: Hộp nền đỏ/cam nhạt `bg-[#FDEDEC]` viền `border-[#F9E79F]`. Chữ hiển thị: *"Sự xuất hiện của yếu tố gây cản trở cho thấy bạn sẽ đối mặt với những khó khăn bất ngờ, những tình huống phát sinh không lường trước được. Điều này đòi hỏi bạn phải có khả năng thích ứng nhanh, sẵn sàng thay đổi kế hoạch và tìm ra giải pháp cho từng vấn đề."*
     * **Cơ hội (Yếu tố hỗ trợ 🌟)**: Hộp nền xanh dương/vàng nhạt `bg-[#EBF5FB]` viền `border-[#AED6F1]`. Chữ hiển thị: *"Yếu tố hỗ trợ cho thấy bạn có khả năng nhận được sự giúp đỡ từ người khác, hoặc có những ý tưởng đột phá vào những thời điểm quan trọng."*
     * **Lời khuyên hành động**: Chữ nghiêng hiển thị rõ ràng bên dưới: *"Hãy chuẩn bị tinh thần cho một hành trình đầy thử thách nhưng cũng có thể mang lại thành quả nếu bạn đủ quyết tâm và linh hoạt."*
5. **Nút CTA lớn dưới cùng**:
   * Dạng nút bấm lớn bo tròn màu xanh lá chủ đạo `bg-[#00A86B]`, khi nhấn chuyển hướng người dùng tới màn hình nhập thông tin: `tuvi_nghenghiep_input.html`. Chữ hiển thị: **"GIẢI MÃ LÁ SỐ SỰ NGHIỆP NGAY"**.

---

## Related Documents
- [[US-TrangChu-KhoiChinh]]
- [[BPRD-TrangChu_V2]]
- [[Design-MOC]]
