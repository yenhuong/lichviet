# CHI TIẾT USER STORY: CÁC KHỐI CHÍNH TRÊN TRANG CHỦ

Tài liệu này định nghĩa chi tiết các User Story cho ba khối chức năng trọng tâm trên màn hình Trang chủ, tuân thủ chặt chẽ theo biểu mẫu Agile/Scrum.

---

## 1. Khối thông tin ngày (Khu vực hero)

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Xem nhanh thông tin tổng quan của ngày

> **Với vai trò** người dùng mở ứng dụng hàng ngày
> **Tôi muốn** xem ngay thông tin ngày tháng, chỉ số ngày tốt và lời khuyên ngắn gọn
> **Để** tôi có cái nhìn tổng quan về mức độ thuận lợi của ngày hôm nay và lên kế hoạch phù hợp

### Tiêu chí nghiệm thu

- [ ] Khi xem khu vực trên cùng, hiển thị rõ ràng thứ, ngày tháng dương lịch (VD: Thứ Sáu 28, Tháng 10, 2026) và âm lịch tương ứng (VD: 13 Tháng 9, Bính Ngọ).
- [ ] Khi ngày hiện tại trùng với ngày lễ/sự kiện đặc biệt, thì hiển thị tên ngày lễ bằng chữ màu vàng (VD: Lễ Vu Lan Báo Hiếu).
- [ ] Khi màn hình được tải xong, thì chỉ số ngày tốt chạy hiệu ứng chuyển động số (từ 0% đến mức thực tế) trong vòng 1 giây.
- [ ] Khi quan sát thẻ chỉ số, thì phần lời khuyên hiển thị danh sách các việc "Nên làm" (VD: mua sắm, cầu an) nếu có. việc nên làm là các việc thường nhật hợp với tuổi của họ trong ngày
- [ ] TH vào ngày không nên làm gì thì hiện icon + text "Kiêng việc trọng đại" như cũ
- [ ] TH là ngày tốt nhất trong tuần/tháng hoặc ngày tốt để cắt tóc thì icon + text như cũ
- [ ] Thứ tự hiển thị: chỉ số > ngày tốt nhất trong tuần/tháng (nếu có)> ngày tốt để cắt tóc (nếu có) > ngày không nên làm gì (nếu có) > nên làm (nếu có)
- [ ] Khi nội dung lời khuyên quá dài, thì hệ thống tự động cắt chữ (hiển thị dấu "...") trên một dòng để không làm vỡ giao diện.
- [ ] Nhấn cả vào khối thông tin ngày thì chuyển tới màn chi tiết ngày của ngày đó
- [ ] Nút xem thêm làm hiệu ứng vệt sáng lướt qua như cũ
- [ ] Ảnh nền sẽ tự co giãn theo nội dung trên khối

### Luồng thao tác

1. Người dùng mở ứng dụng và truy cập vào màn hình Trang chủ.
2. Hệ thống tải thông tin ngày hiện tại (dương lịch, âm lịch, ngày lễ).
3. Người dùng nhấn vào khối thông tin ngày -> chuyển tới màn chi tiết ngày

## 2. Khối list tính năng nổi bật

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Truy cập nhanh các tiện ích cốt lõi

> **Với vai trò** người dùng ứng dụng
> **Tôi muốn** có một danh sách các tính năng nổi bật ngay phía dưới thông tin ngày
> **Để** tôi có thể truy cập nhanh vào các tiện ích thường dùng nhất mà không phải tìm kiếm sâu

### Tiêu chí nghiệm thu

- [ ] Khi xem khu vực ngay dưới khối thông tin ngày, hiển thị một lưới gồm 6 tính năng nổi bật.
- [ ] Các tính năng mặc định bao gồm: Lịch tháng, Chọn ngày tốt, Hiểu vận mệnh, Tiền bạc & đầu tư, Xem tình duyên, Xem tất cả -> cấu hình ở config
- [ ] Mỗi tính năng có một icon minh họa đặc trưng nằm trong vòng tròn màu nhạt và tiêu đề ngắn gọn bên dưới.
- [ ] Khi tính năng có đánh dấu nổi bật (VD: Chọn ngày tốt), thì hiển thị nhãn "HOT" màu đỏ ở góc trên bên phải của tính năng đó.
- [ ] Khi bấm vào nút "Xem tất cả" hoặc bất kỳ tính năng nào, hệ thống chuyển hướng sang màn hình tương ứng theo deeplink config. Cụ thể.
  - [ ] Nhấn lịch tháng -> chuyển tới màn lịch tháng
  - [ ] Nhấn chọn ngày tốt -> chuyển tới màn trang chính xem ngày tốt
  - [ ] Nhấn Hiểu vận mệnh -> chuyển tới màn xem tử vi tổng quan
  - [ ] Nhấn Tiền bạc & đầu tư -> chuyển tới màn xem tử vi tài chính, đầu tư
  - [ ] Nhấn Xem tình duyên -> chuyển tới màn xem tử vi tình duyên
  - [ ] Nhấn xem tất cả -> chuyển tới tab dịch vụ

### Luồng thao tác

1. Người dùng mở ứng dụng và xem màn hình Trang chủ.
2. Ngay dưới khối thông tin ngày, người dùng nhìn thấy lưới các tính năng nổi bật.
3. Người dùng chạm vào một tính năng cụ thể (VD: "Chọn ngày tốt").
4. Hệ thống ghi nhận thao tác, điều hướng sang tính năng tương ứng.

## 3. Khối giờ tốt hôm nay (Thẻ đếm ngược)

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Theo dõi và chọn giờ tốt trong ngày

> **Với vai trò** người dùng có dự định thực hiện công việc trong ngày
> **Tôi muốn** biết chính xác khi nào đến giờ tốt tiếp theo và giờ đó hợp để làm việc gì
> **Để** tôi sắp xếp thời gian tiến hành công việc nhằm đạt kết quả thuận lợi nhất

### Tiêu chí nghiệm thu

- [ ] Khi thời gian hiện tại chưa đến giờ tốt tiếp theo, thì hiển thị dòng chữ đếm ngược thời gian thực (VD: Còn 45 phút tới Giờ Tốt của bạn). Còn thời gian hiện tại đang trong giờ tốt đó thì hiển thị text "Đang trong Giờ Tốt của bạn"
- [ ] Khi hiển thị thông tin giờ tốt theo tuổi của người dùng trong ngày hiện tại, bao gồm tên can chi (VD: Giáp Ngọ), khung giờ dương lịch (VD: 11h-13h) và sao đánh giá mức độ tốt
- [ ] Hiển thị danh sách các công việc hợp nhất trong giờ đó theo tuổi người dùng (VD: Hợp bàn: Giao dịch, Xuất hành: Hướng Nam).
- [ ] Khi bấm vào nút "Xem đầy đủ giờ tốt" hoặc cả khối giờ tốt, thì hệ thống chuyển hướng sang màn hình chi tiết ngày của ngày đó

### Luồng thao tác

1. Người dùng cuộn màn hình đến khối "Giờ tốt của bạn".
2. Hệ thống kiểm tra thời gian hiện tại và so sánh với danh sách giờ tốt trong ngày.
3. Nếu chưa đến giờ tốt, tính toán thời gian chênh lệch và bắt đầu chạy đếm ngược (countdown).
4. Giao diện cập nhật số phút/giờ còn lại theo thời gian thực (mỗi phút).
5. Người dùng xem thông tin giờ tốt (tên giờ, sao đánh giá, việc nên làm).
6. Người dùng bấm "Xem đầy đủ giờ tốt" và được chuyển sang màn hình chi tiết ngày đó

## 4. Khối xem ngày tốt

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Truy cập nhanh dịch vụ chọn ngày trọng đại

> **Với vai trò** người dùng chuẩn bị có kế hoạch lớn (mua nhà, cưới hỏi, khai trương)
> **Tôi muốn** có một danh mục riêng hiển thị rõ ràng các loại công việc trọng đại
> **Để** tôi nhanh chóng chọn được dịch vụ xem ngày phù hợp với nhu cầu của mình

### Tiêu chí nghiệm thu

- [ ] Khi cuộn đến khối này, hiển thị khối dịch vụ xem ngày tốt cấu hình trên cms:
  - [ ] Tiêu đề là ảnh minh hoạ.
  - [ ] Hiển thị lưới gồm 8 việc: Cưới hỏi, Mua xe, Mua nhà, Khai trương, Khởi công, Nhập trạch, Ký hợp đồng, Mua tài sản.
- [ ] Mỗi việc gồm có icon + tên việc, không hiện hsd
- [ ] Nhấn vào 1 việc thì chuyển tới deeplink vào màn chi tiết của việc đó (theo cấu hình)

### Luồng thao tác

1. Người dùng cuộn xuống phần dưới của màn hình Trang chủ.
2. Hệ thống hiển thị khối xem ngày tốt
3. Người dùng lướt qua các lựa chọn và quyết định bấm vào "Cưới hỏi".
4. Hệ thống điều hướng người dùng sang luồng tính năng "Chọn ngày cưới hỏi".

## 5. Khối xem tử vi (Tử vi chuyên sâu)

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Xem tổng quan tử vi cá nhân và truy cập dịch vụ tử vi chuyên sâu

> **Với vai trò** người dùng quan tâm đến tử vi và vận mệnh
> **Tôi muốn** xem nhanh thông điệp tử vi trong ngày và danh sách các dịch vụ tử vi chuyên sâu (tổng quan, sự nghiệp, tài chính, tình duyên)
> **Để** tôi có được những lời khuyên hữu ích hàng ngày và dễ dàng truy cập tính năng xem tử vi

### Tiêu chí nghiệm thu

- [ ] Hiển thị khối tử vi hôm nay như cũ. Nhấn vào cả khối thì chuyển tới màn tử vi hôm nay
- [ ] Hiển thị danh sách "Tử vi chuyên sâu 2026 của bạn" với các mục: Trọn Bộ Tử Vi, Tử Vi Tổng Quan, Tư Vấn Nghề Nghiệp, Tư Vấn Tài Chính, Tư Vấn Tình Duyên, được cấu hình ở khối dịch vụ xem tử vi.
- [ ] Khi xem mỗi mục trong danh sách, thì phải thấy đầy đủ biểu tượng minh họa, tiêu đề chính, phụ đề mô tả lợi ích (VD: "Có cơ hội thăng tiến nếu kiên trì") và biểu tượng mũi tên điều hướng ở góc phải.
- [ ] Khi dịch vụ được gán nổi bật (như Tử Vi Tổng Quan) cấu hình trên cms khối dịch vụ, thì hiển thị nhãn "HOT" màu đỏ bên cạnh.
- [ ] Khi bấm vào từng item thì chuyển tới màn hình chi tiết dịch vụ tương ứng (theo deeplink cấu hình)

### Luồng thao tác

1. Người dùng cuộn màn hình đến phần "Tử vi chuyên sâu 2026 của bạn".
2. Hệ thống tải thông tin tử vi ngày hiện tại dựa trên tuổi (con giáp) của người dùng.
3. Giao diện hiển thị thẻ thông điệp tử vi ngày (icon con giáp, lời khuyên, màu hợp, số may mắn).
4. Hệ thống tải danh sách các gói dịch vụ tử vi chuyên sâu bên dưới thẻ thông điệp.
5. Người dùng chọn bấm vào một dịch vụ tử vi cụ thể (VD: "Tư Vấn Tình Duyên").
6. Hệ thống ghi nhận thao tác và chuyển tới màn hình chi tiết dịch vụ tương ứng

## 6. Khối Câu hỏi tử vi thường gặp (Slider Trang chủ & Màn chi tiết)

### Câu chuyện người dùng

**Tiêu đề**: Người dùng - Xem câu hỏi tử vi thường gặp và câu trả lời chi tiết

> **Với vai trò** người dùng mở ứng dụng xem trang chủ
> **Tôi muốn** thấy câu hỏi tử vi thường gặp chạy trượt luân phiên ở vị trí đếm ngược sự kiện
> **Tôi muốn** khi bấm vào sẽ ra màn hình chi tiết có câu hỏi, câu trả lời đầy đủ và liên kết đến tử vi sự nghiệp
> **Để** tôi dễ dàng tiếp cận và tìm hiểu sâu hơn về vận mệnh và công việc của mình

### Tiêu chí nghiệm thu

- [ ] **[Trang chủ]** Khối đếm ngược sự kiện (`urgentEventBanner`) được nâng cấp thành **Slider trượt ngang tự động** chứa 2 thẻ: thẻ đếm ngược sự kiện và thẻ câu hỏi tử vi thường gặp.
- [ ] **[Slider]** Tự động trượt chuyển đổi giữa 2 thẻ sau mỗi **4 giây** bằng hiệu ứng chuyển cảnh mượt mà.
- [ ] **[Chấm chỉ báo]** Hiển thị 2 dấu chấm chỉ báo (Dots indicators) ở đáy Slider. Chấm của thẻ đang active sẽ có chiều rộng lớn hơn dạng kén (`w-4`), đổi màu tương ứng với thẻ (đỏ cho sự kiện, tím cho tử vi).
- [ ] **[Thẻ Tử Vi mới]** Thẻ câu hỏi tử vi thường gặp hiển thị: icon quả cầu pha lê `🔮`, nhãn phụ "CÂU HỎI TỬ VI THƯỜNG GẶP" và nội dung câu hỏi "Lá số của tôi có thể khởi nghiệp hay không?".
- [ ] **[Hiển thị]** Khối Bản tin Tử Vi & Lịch (thay thế khối Slider cũ) có dạng Thẻ (Tabbed Card) hiển thị ngay dưới Hero Banner.
- [ ] **[Tương tác]** Thẻ có 3 tab: "Hôm nay", "7 Ngày", "Tháng 10". Chạm vào từng tab sẽ hiển thị nội dung tương ứng gồm thông tin chung (Tiết khí/Sự kiện) và thông tin cá nhân hóa (Lời khuyên theo tuổi).
- [ ] **[Điều hướng]** Cuối Carousel Bản tin hiển thị thẻ phụ "Xem tất cả" (compact layout). Khi nhấn vào, hệ thống chuyển hướng sang màn hình Bản tin chi tiết.
- [ ] **[CTA Link]** Cuối màn hình chi tiết hiển thị nút bấm CTA lớn **"GIẢI MÃ LÁ SỐ SỰ NGHIỆP NGAY"** dẫn người dùng trực tiếp đến màn hình nhập thông tin tử vi nghề nghiệp (`tuvi_nghenghiep_input.html`).

### Luồng thao tác

1. Người dùng mở trang chủ Lịch Việt, quan sát khu vực Slider dưới phần Hero.
2. Slider tự động trượt chuyển qua lại giữa thẻ sự kiện và thẻ tử vi sau mỗi 4 giây.
3. Người dùng chạm vào thẻ tử vi "Lá số của tôi có thể khởi nghiệp hay không?".
4. Hệ thống chuyển sang màn hình chi tiết `tuvi_faq_detail.html`.
5. Người dùng xem câu trả lời được trình bày đẹp mắt và nhấn nút "GIẢI MÃ LÁ SỐ SỰ NGHIỆP NGAY".
6. Hệ thống chuyển hướng người dùng đến màn hình nhập thông tin tử vi sự nghiệp `tuvi_nghenghiep_input.html`.
