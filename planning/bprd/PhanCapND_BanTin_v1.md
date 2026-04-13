# BPRD: Tối ưu trải nghiệm phân cấp người dùng & Ra mắt Bản tin Lịch Việt

Tài liệu này tổng hợp yêu cầu kinh doanh và sản phẩm cho dự án cải tiến giao diện phân cấp và bổ sung tính năng Bản tin cho ứng dụng Lịch Việt.

## Thông tin tài liệu

| Trường | Nội dung |
| --- | --- |
| Tên dự án | Tối ưu trải nghiệm phân cấp người dùng & Ra mắt Bản tin Lịch Việt |
| Người phụ trách | Đỗ Thị Hường |
| Phiên bản | v1.0 |
| Trạng thái | Đang cập nhật |

---

## 1. Tổng quan dự án

**Vấn đề và cơ hội tiềm năng:**

- Người dùng đánh giá 1 sao và gỡ app do bị quảng cáo làm phiền.
- Giao diện cũ thiếu phân cấp rõ ràng nên người dùng không có động lực nâng cấp tài khoản.
- Doanh thu từ quảng cáo bấp bênh, thiếu ổn định do bị khóa tài khoản quảng cáo nhiều lần.
- Tính năng Xem ngày tốt đang chia thành nhiều gói lẻ, khiến người dùng khó mua, khó quản lý, làm giảm tỷ lệ thanh toán.

**Tầm nhìn / Mục tiêu:**

- **Chiến lược doanh thu bền vững:** Dù hiện tại có cả doanh thu từ Ads và IAP, nhưng mục tiêu dài hạn là đẩy mạnh doanh thu đến từ in-app (IAP) để tăng sự bền vững, giảm sự phụ thuộc rủi ro vào doanh thu quảng cáo.
- **Nâng tầm trải nghiệm:** Tăng cường cá nhân hóa và nhận diện người dùng.

---

## 2. Phân tích người dùng

Dự án chia người dùng thành 4 nhóm để phục vụ tối ưu nhất:

**Nhóm Miễn phí**

- **Hành vi:** Đa số chỉ xem lịch âm dương ở trang chủ, ít khám phá app.
- **Mong muốn:** Dùng app miễn phí, chấp nhận quảng cáo vừa phải.
- **Nỗi đau:** Ghét bị ép trả phí và ứng dụng hiển thị quảng cáo quá dày đặc.

**Nhóm Bạc**

- **Hành vi:** Mua gói Bạc để xóa quảng cáo, rất ít dùng tính năng sâu.
- **Mong muốn:** App sạch, tĩnh tại, thao tác nhanh nhẹn.
- **Nỗi đau:** Giao diện nhồi nhét nhiều tính năng (đối với họ là thừa thãi) gây rối mắt.

**Nhóm Vàng**

- **Hành vi:** Chủ động tìm kiếm xem ngày tốt cho các việc quan trọng.
- **Mong muốn:** Công cụ chọn ngày lành tháng tốt nhanh chóng, dễ dùng, đáng tin cậy cho các việc quan trọng thay vì đi xem thầy.
- **Nỗi đau:** Thông tin phong thủy trên mạng lộn xộn, thiếu một nguồn duy nhất và uy tín trên app.

**Nhóm Kim Cương**

- **Hành vi:** Quan tâm đặc biệt đến tử vi chuyên sâu.
- **Mong muốn:** Trải nghiệm đẳng cấp, riêng tư, luận giải chi tiết cho riêng cá nhân.
- **Nỗi đau:** Các app phổ thông thiết kế nhìn "bình dân", chưa xứng tầm.

---

## 3. Mục tiêu và KPI

**Mục tiêu kinh doanh:**

- Giữ chân người dùng, giảm tỷ lệ gỡ app vì quảng cáo.
- Tăng tương tác định kỳ mỗi ngày qua Bản tin.
- Tăng trưởng doanh thu in-app.

**KPIs cốt lõi:**

| Chỉ số | Định nghĩa | Gắn sự kiện đo lường (Tracking Events) | Mục tiêu | Thời hạn |
| --- | --- | --- | --- | --- |
| Tỷ lệ duy trì (Active Rate) | % người dùng mở lại app hàng ngày (DAU) | Số lượt mở app & Số lượt bắt đầu phiên | Tăng trưởng [X]% so với tháng trước | 2 tuần sau ra mắt |
| Thời lượng & Tương tác Trang chủ | Thời lượng dùng app và mức độ chú ý vào nhận diện hạng user | **Số lượt & Số người** click vùng Thông tin tài khoản/Phân cấp hạng ở trang chủ | Tăng trung bình [Y] phút/phiên | 2 tuần sau ra mắt |
| Chuyển đổi IAP | Tỷ lệ user nâng cấp gói thành công từ cả Tab Dịch vụ và Bản tin | **Nâng cấp từ Tab Dịch vụ:** Mở tab Dịch vụ ➔ Click nút nâng cấp.<br>**Nâng cấp từ Bản tin:** Click nội dung bị khoá/làm mờ ➔ Mở sang chi tiết tính năng đó ➔ Hiện popup gợi ý nâng cấp ➔ Click nâng cấp.<br>**Chốt phễu chung:** Nút chốt mua ➔ Thanh toán thành công | Đạt mức [Z]% chuyển đổi | 2 tháng sau ra mắt |
| Độ thu hút Bản tin | Đo lường số người và số lượt tương tác với toàn khối Bản tin và từng thẻ con | - **Số lượt & Số người** click mở xem tổng thể **mục Bản tin** ở Trang chủ.<br>- **Số lượt & Số người** click vào **từng thẻ Bản tin con** (VD: thẻ Ngày tốt, thẻ Vận hạn...).<br>- Lượt click nút Xem chi tiết. | Tỷ lệ click (CTR) chung đạt [W]%, mỗi loại thẻ có CTR tối thiểu [V]% | 1 tháng sau ra mắt |
| Đánh giá App Store | Điểm đánh giá trung bình và số lượng review thấp | Đọc qua review text/star rating | Giảm tối đa các đánh giá tiêu cực do quảng cáo/rối rắm | 1 tháng sau ra mắt |

---

## 4. Phạm vi sản phẩm

**Giai đoạn 1: Làm ngay**

- Gắn viền avatar phân cấp hạng người dùng.
- Chỉnh sửa lại Tab "Dịch vụ" liệt kê các tính năng theo gói.
- Tích hợp khối Bản tin cá nhân hoá ở Trang chủ.
- Gộp 8 gói xem ngày tốt hiện tại thành 1 gói duy nhất.
- List tính năng nổi bật trên trang chủ cho nhìn 1 phần trang 2 tính năng.

**Giai đoạn 2:**

- Cho phép cấu hình trang chủ, hình nền theo từng cấp độ.
- Thêm khối xem phong thuỷ ở trang chủ.
- Thêm so sánh các cấp độ dạng bảng.

---

## 5. Đặc tả tính năng cốt lõi

| Mã | Tính năng | Mô tả chi tiết | Trải nghiệm người dùng (User Story) |
| --- | --- | --- | --- |
| F01 | Thiết kế lại appbar vùng Thông tin cá nhân | Thiết kế lại vùng hiển thị thông tin tài khoản ở trang chủ.<br><br>Làm nổi bật, rõ ràng hệ thống phân cấp 4 hạng người dùng.<br><br>Nhấn vào cả mục này thì chuyển sang tab Dịch vụ | Là người dùng, khi mở trang chủ tôi thấy ngay mình đang ở hạng nào và cần làm gì để nhận đặc quyền tốt hơn. |
| F02 | Nâng cấp Tab "Dịch vụ" | - Chỉnh sửa lại Tab "Dịch vụ"<br><br>- Liệt kê minh bạch đặc quyền của 4 cấp độ.<br><br>- Có ghi chú rõ tính năng đang dùng và tính năng bị khóa.<br><br>- Dán sẵn nút "Nâng cấp" ngay cạnh để mua dễ dàng. | Là người dùng, tôi bấm vào Tab Dịch vụ là thấy rõ mình đang được dùng gói nào, gói trên có gì hay để tôi nâng cấp mua ngay tại chỗ. |
| F03 | Bản tin cá nhân hóa (Trang chủ) | - Thêm 1 khối (block) Bản tin tóm tắt trong ngày/ 7 ngày tới/ 30 ngày tới ở màn hình Trang chủ.<br><br>- Có cơ chế dùng thử (trial) nội dung cao cấp cho hạng thấp nhằm tăng chuyển đổi.<br><br>- Hạng cao xem full nội dung, hạng thấp bị làm mờ bí ẩn.<br><br>- Có nhắc nhở (Push) gọi người dùng vào lúc sáng sớm. | Mở app ra là tôi thấy ngay dự báo cơ bản. Tôi có thể được trải nghiệm dùng thử một vài nội dung luận giải chuyên sâu trước khi quyết định nâng cấp tài khoản để xem toàn bộ. |
| F04 | Gộp các gói lẻ xem ngày tốt thành 1 gói chung | Tạo 1 gói chung cho 8 gói lẻ xem ngày tốt cho thống nhất, dễ quản lý | Là người dùng, tôi muốn xem ngày lành tháng tốt cho đủ mọi việc trọng đại chỉ với một lần mua gói chung duy nhất, tiết kiệm thời gian, dễ rà soát. |
| F05 | List tính năng nổi bật | List tính năng nổi bật trên trang chủ cho nhìn 1 phần trang 2 tính năng | Là 1 người dùng, tôi muốn biết có thể kéo sang để xem các tính năng khác |

---

## 6. Quy tắc hiển thị Bản tin theo cấp độ

Bản tin là công cụ chủ lực để tăng thời gian ở lại app, tạo thói quen quay lại đều đặn và tạo động lực nâng cấp gói. Mỗi cấp độ người dùng nhận được nội dung phù hợp với mức độ chi tiết khác nhau.

### 6.1 Tiêu chí & Yêu cầu nội dung bản tin

**Về mục tiêu kinh doanh:**

- **Giữ chân người dùng:** Nội dung phải đủ hữu ích và khác biệt so với các nguồn thông tin thông thường để người dùng cảm thấy cần mở app thường xuyên.
- **Tạo thói quen:** Mỗi bản tin phải có 1 phần thông tin "thời hạn" (chỉ có giá trị trong tuần/tháng đó) để tạo cảm giác cấp bách khi đọc.
- **Kích thích nâng cấp:** Mỗi cấp độ thấp hơn luôn nhìn thấy phần nội dung bị ẩn/mờ của cấp cao hơn, kèm lời giải thích ngắn về giá trị đang bị bỏ lỡ.

**Về chất lượng nội dung:**

- **Chính xác và đáng tin cậy:** Thông tin ngày giờ âm lịch, tiết khí, ngày kiêng phải đảm bảo chuẩn xác.
- **Thực tế và ứng dụng được:** Ngoài thông tin, phải kèm theo lời khuyên cụ thể (nên làm gì, tránh làm gì, tốt cho lĩnh vực nào).
- **Cá nhân hóa theo cấp độ:** Nội dung phân tầng rõ ràng — càng trả phí cao, nội dung càng chi tiết và sát với từng cá nhân.

**Về hình thức trình bày:**

- **Hấp dẫn ngay tiêu đề:** Tiêu đề kích thích mở ngay. VD: "Tuần này có 1 ngày vàng để ký hợp đồng — bạn đã biết chưa?"
- **Định dạng dễ đọc nhanh:** Ưu tiên trình bày dạng thẻ (card), biểu tượng và màu sắc trực quan, hạn chế đoạn văn dài.
- **Gọi tên cá nhân:** Gọi tên người dùng hoặc con giáp trong Push Notification để tăng tỷ lệ mở.

### 6.2 Đề xuất phân bổ Bản tin Hàng tuần

| Nội dung | Miễn phí | Bạc | Vàng | Kim Cương | Độ ưu tiên |
| --- | --- | --- | --- | --- | --- |
| Ngày tốt nhất trong tuần, giờ tốt | ✅ Xem đầy đủ | ✅ Xem đầy đủ | ✅ Xem đầy đủ | ✅ Xem đầy đủ | 1 |
| Việc nên làm / không nên làm | ✅ Xem đầy đủ | ✅ Xem đầy đủ | ✅ Xem đầy đủ | ✅ Xem đầy đủ | 2 |
| Bài văn khấn (nếu tuần có mùng 1/rằm) | ✅ Xem đầy đủ | ✅ Xem đầy đủ | ✅ Xem đầy đủ | ✅ Xem đầy đủ | 3 |

### 6.3 Đề xuất phân bổ Bản tin Hàng tháng

| Nội dung | Miễn phí | Bạc | Vàng | Kim Cương | Độ ưu tiên |
| --- | --- | --- | --- | --- | --- |
| Vận hạn tháng | 🔒 Bị làm mờ | 🔒 Bị làm mờ | 🔒 Bị làm mờ | ✅ Xem đầy đủ | 1 |

---

## 7. Yêu cầu kỹ thuật (Phi chức năng)

- **Tracking & Analytics:** Client bắt buộc gắn mã theo dõi lên Firebase/Google Analytics/Hệ thống log Lịch Việt để ghi nhận dữ liệu người dùng ở các điểm chạm như: đóng/mở app, mở tab Dịch vụ, tiến trình mua hàng và click vào các khối Bản tin. (Tham chiếu danh sách sự kiện chi tiết tại Mục 3 - KPIs).
- **Hiệu năng:** Tốc độ hiện bản tin nhanh, thao tác vuốt và hiệu ứng mượt mà.
- **Sức chịu tải:** Server tạo trước nội dung Bản tin vào ban đêm, tải sẵn về máy người dùng để sáng 8:00 mở app không bị nghẽn mạng do đẩy Push hàng loạt.

---

## 8. Thiết kế UX/UI

- **Tính rõ ràng:** Tab Dịch vụ trình bày trực quan, nút thao tác lớn, không nhồi nhét.
- **Tính thẩm mỹ:** Các hạng cao cấp thiết kế nền tối, chữ vàng tạo sức nặng, sự khác biệt. Ảnh Bản tin nên mang phong vị phương Đông.
- *(Chi tiết tham khảo link tài nguyên Figma đính kèm của dự án)*
