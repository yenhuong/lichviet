Tài liệu này tổng hợp yêu cầu kinh doanh và sản phẩm cho dự án cải tiến giao diện phân cấp và bổ sung tính năng Bản tin cho ứng dụng Lịch Việt.

## 1. Thông tin tài liệu

| **Trường**  | **Nội dung**                                                 |
| ------------------- | ------------------------------------------------------------------- |
| Tên dự án        | Tối ưu trải nghiệm người dùng & Ra mắt Bản tin Lịch Việt |
| Người phụ trách | Đỗ Thị Hường                                                   |
| Phiên bản         | v1.0                                                                |
| Trạng thái        | Đang cập nhật                                                    |

## Nhật ký thay đổi

| Ngày cập nhật | Phiên bản | Người thực hiện | Nội dung thay đổi |
| ---------------- | ----------- | ------------------- | -------------------- |
|                  |             |                     |                      |

## 2. Tổng quan dự án

**Vấn đề và cơ hội tiềm năng:**

* Đánh giá 1 sao và gỡ app do bị quảng cáo làm phiền.
* Giao diện thiếu phân cấp rõ ràng, không tạo động lực nâng cấp tài khoản.
* Thiếu gợi ý điều hướng trên từng màn hình, khiến người dùng lười khám phá bỏ lỡ các tính năng giá trị khác.
* Doanh thu quảng cáo thiếu ổn định do cấu hình tài khoản hay bị khóa.
* Các gói Xem ngày tốt bị chia nhỏ lắt nhắt, làm phân tán dòng tiền thay vì tập trung bán gói Vàng.

**Tầm nhìn / Mục tiêu:**

* **Chiến lược doanh thu bền vững:** Dù hiện tại có cả doanh thu từ Ads và IAP, nhưng mục tiêu dài hạn là đẩy mạnh doanh thu đến từ in-app (IAP) để tăng sự bền vững, giảm sự phụ thuộc rủi ro vào doanh thu quảng cáo.
* **Nâng tầm trải nghiệm:** Tăng cường cá nhân hóa và nhận diện người dùng.

## 3. Phân tích người dùng

Dự án chia người dùng thành 4 nhóm để phục vụ tối ưu nhất. Dưới đây là bảng quy định phân hạng người dùng dựa trên lịch sử sở hữu gói dịch vụ:

Hạng cơ bản > Hạng Bạc > Hạng Vàng > Hạng Kim cương

| Hạng Người Dùng   | Điều kiện phân hạng (Dựa vào gói dịch vụ đã mua)                                                                                                                                                                                                                                                            | Quyền lợi cốt lõi tương ứng                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Cơ bản              | Không sở hữu gói dịch vụ trả phí nào (hoặc gói đã hết thời hạn).                                                                                                                                                                                                                                        | Trải nghiệm Lịch cơ bản, có quảng cáo.                                                                                            |
| **Bạc**``      | Người dùng đã mua một trong các gói sau:* Gói thuộc dịch vụ Bạc* Gói thuộc dịch vụ cơ bản* Gói lẻ Xem ngày tốt/Xem tử vi* Gói bỏ quảng cáo* Gói dịch vụ nâng cao* Các gói dịch vụ cũ: Xem ngày tốt, Xem phong thủy, Xem tử vi, Giải mã ngày sinh, Lục hào, Đặt tên hay | * Bỏ quảng cáo* Xem ngày tốt cho 41 việc cơ bản* Giải mã ngày sinh* Tổng quan vận mệnh* Thần số học* Mức độ hợp nhau |
| **Vàng**``     | Người dùng đã mua gói dịch vụ Vàng.``                                                                                                                                                                                                                                                                          | * Bao gồm Đặc quyền Bạc* Xem ngày tốt tất cả việc* Xem phong thuỷ* Gieo quẻ hỏi việc* Đặt tên con                        |
| **Kim Cương** | Người dùng đã mua một trong các gói:* Gói dịch vụ Kim Cương* Gói dịch vụ cao cấp                                                                                                                                                                                                                       | * Bao gồm Đặc quyền Vàng* Trọn bộ xem tử vi                                                                                       |

* **Nhóm Miễn phí**
  * **Hành vi:** Đa số chỉ xem lịch âm dương ở trang chủ, ít khám phá app.
  * **Mong muốn:** Dùng app miễn phí, chấp nhận quảng cáo vừa phải.
  * **Nỗi đau:** Ghét bị ép trả phí và ứng dụng hiển thị quảng cáo quá dày đặc.
* **Nhóm Bạc**
  * **Hành vi:** Mua gói Bạc để xóa quảng cáo, rất ít dùng tính năng sâu.
  * **Mong muốn:** App sạch, tĩnh tại, thao tác nhanh nhẹn.
  * **Nỗi đau:** Giao diện nhồi nhét nhiều tính năng (đối với họ là thừa thãi) gây rối mắt.
* **Nhóm Vàng**
  * **Hành vi:** Chủ động tìm kiếm xem ngày tốt cho các việc quan trọng
  * **Mong muốn:** Công cụ chọn ngày lành tháng tốt nhanh chóng, dễ dùng, đáng tin cậy cho các việc qaun trọng thay vì đi xem thầy.
  * **Nỗi đau:**
* **Nhóm Kim Cương**
  * **Hành vi:** Quan tâm đặc biệt đến tử vi chuyên sâu
  * **Mong muốn:** Trải nghiệm đẳng cấp, riêng tư, luận giải chi tiết cho riêng cá nhân.
  * **Nỗi đau:** Các app phổ thông thiết kế nhìn "bình dân", chưa xứng tầm.

## 4. Mục tiêu và KPI

**Mục tiêu kinh doanh:**

* Giữ chân người dùng, giảm tỷ lệ gỡ app vì quảng cáo.
* Tăng tương tác định kỳ mỗi ngày qua Bản tin.
* Tăng trưởng doanh thu inapp.

**KPIs cốt lõi:**

## 5. Phạm vi sản phẩm

**Giai đoạn 1: Làm ngay**

* Nâng cấp trang chủ: Sửa appbar, Khối thông tin lịch ngày, List tính năng nổi bật, khối giờ tốt, khối xem tử vi, khối xem ngày tốt.
* Nâng cấp Tab "Dịch vụ": Cập nhật giao diện quản lý gói và danh sách gia đình.
* Tối ưu lại cho tính năng xem tử vi
* Thêm tính năng lưu trữ Lịch sử mua gói.

Giai đoạn 2:

* Sửa xem ngày tốt cho các việc trọng đại và Gỡ bỏ 8 gói xem ngày tốt lẻ để điều hướng người dùng mua gói Vàng.

**Giai đoạn 3:**

* Tích hợp khối Bản tin cá nhân hoá ở Trang chủ, Chi tiết ngày, Lịch tháng, Tổng quan vận mệnh
* Cho phép người dùng pro cấu hình các khối ở trang chủ
* Nâng cấp trang Chi tiết ngày
* Nâng cấp trang Lịch tháng
* Thêm hệ thống chấm điểm người dùng.
* Thêm chỉ số thống kê gỡ app.
* Thêm khối xem phong thuỷ ở trang chủ

## 6. Đặc tả tính năng cốt lõi

| **Mã** | **Tính năng**                                                                                                                                                                  | **Mô tả chi tiết**                                                                                                                                                                                                                                                                                                                       | **User Story**                                                                                                                                                                                                             | Giai đoạn | Phiên bản | Trạng thái     |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- | ---------------- |
| F01           | Nâng cấp trang chủ[Chi tiết tại mục 9.1](https://lichviet.sg.larksuite.com/docx/T73TdmB3FoeH0Qxd1Qcl6bE2gZg#share-Zv8gdxxjZoIMfTx3xvjlp8jkgLb)                                      | * Appbar: Hiển thị rõ phân cấp hạng người dùng. Nhấn vào sẽ chuyển sang tab Dịch vụ.* Thông tin ngày: Lược bỏ icon, chỉ hiện sự kiện nổi bật kèm hiệu ứng thu hút click hàng ngày.* List tính năng nổi bật: Rút gọn còn 5 tính năng + nút "Xem thêm" để tránh rối mắt.                            | Là người dùng, tôi muốn xem nhanh hạng thẻ, nội dung lịch ngày hấp dẫn và các tính năng quan trọng nhất mà không bị ngợp thông tin.``                                                                    | GD1``       | v10.4       | Đã phát hành |
| F02           | Nâng cấp Tab "Dịch vụ"[Chi tiết tại mục 9.2](https://lichviet.sg.larksuite.com/docx/T73TdmB3FoeH0Qxd1Qcl6bE2gZg#share-OwwvdOADqo4L5NxKD9ylkfZngeS)``                               | Chỉnh sửa lại Tab "Dịch vụ"* Liệt kê minh bạch đặc quyền của 4 cấp độ.* Có ghi chú rõ tính năng đang dùng và tính năng bị khóa.* Dán sẵn nút "Nâng cấp" ngay cạnh để mua dễ dàng.* Bổ sung khối thành viên gia đình để thúc đẩy thêm thành viên                                                | Là người dùng, tôi bấm vào Tab Dịch vụ là thấy rõ mình đang được dùng gói nào, gói trên có gì hay để tôi nâng cấp mua ngay tại chỗ.``                                                             | GD1``       | v10.4       | Đã phát hành |
| F05``         | Chỉnh sửa xem tử vi vận hạn[Chi tiết tại mục 9.3](https://lichviet.sg.larksuite.com/docx/T73TdmB3FoeH0Qxd1Qcl6bE2gZg#share-QIaVdlWKeo2TaexQozblf8HIg2d)                           | * Chỉnh màn nhập thông tin tử vi vận hạn nó thoáng, rõ ràng hơn* Chỉnh sửa màn kết quả, phân làm 2 cấp: đưa ra các điểm nổi bật của các mục, chi tiết từng mục, tránh hiển thị dàn trải hết ra``                                                                                                           | ``                                                                                                                                                                                                                               | GD1         | v10.4       | Đã phát hành |
| F05``         | Chỉnh sửa xem tử vi tổng quan[Chi tiết tại mục 9.4](https://lichviet.sg.larksuite.com/docx/T73TdmB3FoeH0Qxd1Qcl6bE2gZg#share-XyTSdKRtDoYOBoxdPTxln9xVgoe)                          | * Chỉnh màn nhập thông tin tử vi tổng quan cho đồng bộ với tử vi vận hạn* Chỉnh sửa màn kết quả, phân làm 2 cấp: đưa ra các điểm nổi bật của các mục, chi tiết từng mục, tránh hiển thị dàn trải hết ra                                                                                                   | ``                                                                                                                                                                                                                               | GD1         | v10.4       | Đã phát hành |
| F11           | Chỉnh sửa các màn nhập thông tin tử vi khác                                                                                                                                    | * Chỉnh sửa giao diện xem tử vi nghề nghiệp, tài chính, tình duyên cho đồng bộ                                                                                                                                                                                                                                                       | ``                                                                                                                                                                                                                               | GD2         | v10.4.3     | Đã phát hành |
| F03           | Lịch sử mua gói[Chi tiết tại mục 9.2.2](https://lichviet.sg.larksuite.com/docx/T73TdmB3FoeH0Qxd1Qcl6bE2gZg#share-NrEhdB2qVoeZjjxMeqFlQAocgQh)                                       | * Thêm màn hình lịch sử mua gói để lưu lại thông tin các gói đã nâng cấp, thời hạn sử dụng và chi phí thanh toán.                                                                                                                                                                                                         | Là người dùng, tôi muốn xem lại danh sách các gói dịch vụ tôi đã mua để theo dõi tình hình sử dụng và thời hạn cần kiểm tra lại gói.                                                                | GD2         | v10.4.3     | Đã phát hành |
| ``            | ``                                                                                                                                                                                     | ``                                                                                                                                                                                                                                                                                                                                                | ``                                                                                                                                                                                                                               | ``          | ``          | ``               |
| F04``         | Bỏ gói lẻ xem ngày tốt, điều hướng mua gói Vàng[Chi tiết tại mục 9.5](https://lichviet.sg.larksuite.com/docx/T73TdmB3FoeH0Qxd1Qcl6bE2gZg#share-FSZGdZUnNosmjkxFNw1lR1ULgSd) | * Tiến hành gỡ bỏ/ẩn khỏi hệ thống 8 gói mua lẻ để xem ngày tốt cũ.* Các luồng nhấn vào xem ngày tốt cho việc quan trọng hiện tại sẽ được điều hướng sang màn hình xem cho việc đó và có nâng cấp trực tiếp lên gói Vàng.                                                                          | Là người dùng, khi tôi phát sinh nhu cầu xem ngày tốt, app sẽ tư vấn tôi mua gói Vàng để tận hưởng toàn bộ đặc quyền một cách hời nhất, thay vì mua lắt nhắt từng gói lẻ.                     | GD2``       | v10.4.4     | Đang làm       |
| ``            | ``                                                                                                                                                                                     | ``                                                                                                                                                                                                                                                                                                                                                | ``                                                                                                                                                                                                                               | ``          | ``          | ``               |
| F06``         | Bản tin cá nhân hóa (Trang chủ)``                                                                                                                                                 | * Thêm 1 khối (block) Bản tin tóm tắt  trong ngày/ 7 ngày tới/ 30 ngày tới ở màn hình Trang chủ.* Có cơ chế dùng thử (trial) nội dung cao cấp cho hạng thấp nhằm tăng chuyển đổi.* Hạng cao xem full nội dung, hạng thấp bị làm mờ/không có.* Có nhắc nhở (Push) gọi người dùng vào lúc sáng sớm. | Mở app ra là tôi thấy ngay dự báo cơ bản. Tôi có thể được trải nghiệm dùng thử một vài nội dung luân giải chuyên sâu trước khi quyết định móc hầu bao nâng cấp tài khoản để xem toàn bộ. | GD2         | ``          | ``               |
| F07           | Nâng cấp trang Chi tiết ngày``                                                                                                                                                     | Thêm các khối nội dung hữu ích hiển thị trực tiếp trong trang nhằm dẫn dắt/điều hướng người dùng tới các tính năng trả phí.                                                                                                                                                                                             | Là người dùng, khi xem chi tiết một ngày, tôi bị thu hút bởi các khối nội dung giá trị và muốn nâng cấp để tiếp tục đọc phân tích chuyên sâu.                                                      | GD3         | ``          | ``               |
| F08           | Nâng cấp trang Lịch tháng``                                                                                                                                                        | Bổ sung các thông tin hữu ích lồng ghép trong lịch tháng nhằm khéo léo điều hướng người dùng tới các tính năng trả phí.                                                                                                                                                                                                  | Là người dùng, các thông tin hữu ích trên lịch tháng khơi gợi sự tò mò, thúc đẩy tôi nhấn vào/nâng cấp để khám phá thêm nội dung hữu ích.                                                        | GD3         | ``          | ``               |
| F09           | Hệ thống chấm điểm người dùng                                                                                                                                                  | Chấm điểm tự động dựa trên mức độ tương tác, thời gian onsite và lịch sử giao dịch để phân loại tệp khách hàng.                                                                                                                                                                                                         | Là quản trị viên, tôi muốn hệ thống phân tách rõ các mức độ khách hàng trung thành/tiềm năng để dễ dàng cá nhân hóa chiến dịch upsell.                                                              | GD3         | ``          | ``               |
| F10           | Thống kê gỡ app``                                                                                                                                                                   | Tracking và trực quan hóa biểu đồ tỷ lệ gỡ app (Uninstall rate), phân lớp tệp người dùng rời bỏ ứng dụng.                                                                                                                                                                                                                      | Là quản trị viên, tôi muốn biết tỷ lệ và đối tượng gỡ app để đánh giá chất lượng trải nghiệm và có hướng cải tiến kịp thời.                                                                     | GD3         | ``          | ``               |
| ``            | ``                                                                                                                                                                                     | ``                                                                                                                                                                                                                                                                                                                                                | ``                                                                                                                                                                                                                               | ``          | ``          | ``               |

## 7. Luồng trải nghiệm người dùng (user flow)

## 8. Quy tắc hiển thị Bản tin theo cấp độ

Bản tin là công cụ chủ lực để tăng thời gian ở lại app, tạo thói quen quay lại đều đặn và tạo động lực nâng cấp gói. Mỗi cấp độ người dùng nhận được nội dung phù hợp với mức độ chi tiết khác nhau.

### 8.1. Tiêu chí & Yêu cầu nội dung bản tin

**Về mục tiêu kinh doanh:**

* **Giữ chân người dùng:** Nội dung phải đủ hữu ích và khác biệt so với các nguồn thông tin thông thường để người dùng cảm thấy cần mở app thường xuyên.
* **Tạo thói quen:** Mỗi bản tin phải có 1 phần thông tin "thời hạn" (chỉ có giá trị trong tuần/tháng đó) để tạo cảm giác cấp bách khi đọc.
* **Kích thích nâng cấp:** Mỗi cấp độ thấp hơn luôn nhìn thấy phần nội dung bị ẩn/mờ của cấp cao hơn, kèm lời giải thích ngắn về giá trị đang bị bỏ lỡ.

**Về chất lượng nội dung:**

* **Chính xác và đáng tin cậy:** Thông tin ngày giờ âm lịch, tiết khí, ngày kiêng phải đảm bảo chuẩn xác
* **Thực tế và ứng dụng được:** Ngoài thông tin, phải kèm theo lời khuyên cụ thể (nên làm gì, tránh làm gì, tốt cho lĩnh vực nào).
* **Cá nhân hóa theo cấp độ:** Nội dung phân tầng rõ ràng — càng trả phí cao, nội dung càng chi tiết và sát với từng cá nhân

**Về hình thức trình bày:**

* **Hấp dẫn ngay tiêu đề:** Tiêu đề kích thích mở ngay. VD: "Tuần này có 1 ngày vàng để ký hợp đồng — bạn đã biết chưa?"
* **Định dạng dễ đọc nhanh:** Ưu tiên trình bày dạng thẻ (card), biểu tượng và màu sắc trực quan, hạn chế đoạn văn dài.
* **Gọi tên cá nhân:** Gọi tên người dùng hoặc con giáp trong Push Notification để tăng tỷ lệ mở.

### 8.2. Đề xuất phân bổ Bản tin Hàng ngày

Khối bản tin hàng ngày ("Bản tin hôm nay") được thiết kế trên Trang chủ dưới dạng **Carousel (Vuốt ngang)**. Các thẻ tin được tối ưu không gian chiều cao (Compact padding) và áp dụng kỹ thuật Editorial Design để tăng độ hấp dẫn.

| **Nội dung**                                      | **Điều kiện hiển thị**                        | **Mô tả**                                                                                         |
| -------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Nội dung 1: Tiết khí**                        | ✅ Miễn phí, không cần nhập thông tin              | Thông tin tiết khí hiện tại hoặc sắp tới. Dữ liệu chung, ai mở app cũng thấy.                |
| **Nội dung 2: Tử vi hàng ngày cá nhân hóa** | ✅ Miễn phí, yêu cầu nhập đủ thông tin cá nhân | Tử vi theo tuổi/mệnh kèm số và màu may mắn. Nếu chưa nhập thông tin → hiện lời mời nhập. |
| **Nội dung 3: Hỏi đáp Tử vi**                 | ✅ Miễn phí, yêu cầu nhập đủ thông tin cá nhân | Câu hỏi và luận giải cá nhân hóa theo lá số người dùng.                                      |

#### Ví dụ nội dung

**Nội dung 1 — Tiết khí:**

| Thành phần           | Mô tả                                                                   | Ví dụ                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Tiêu đề             | Tên của tiết khí hiện hành                                          | Tiết Hạ Chí                                                                                                |
| Phụ đề              | Thời gian bắt đầu tiết khí                                          | Bắt đầu lúc 08:15 sáng nay                                                                               |
| Mô tả (line-clamp-2) | Luận giải ngắn về đặc trưng của tiết khí và lời khuyên ngắn | Ngày dài nhất năm, dương khí cực thịnh, rất phù hợp làm việc lớn nhưng cần tránh quá tải. |

**Nội dung 2 — Tử vi hàng ngày cá nhân hóa:**

| Thành phần           | Mô tả                                                       | Ví dụ                                                                            |
| ---------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Tiêu đề             | Con giáp và tuổi của người dùng được cá nhân hóa | Tử vi tuổi Đinh Mão                                                            |
| Phụ đề              | Thứ, ngày/tháng dương lịch hiện tại                   | Thứ Năm, 12/03 (DL)                                                              |
| Mô tả (line-clamp-1) | Vận trình tổng quan rất ngắn gọn trong ngày            | Hôm nay vận trình thuận lợi, tài lộc hanh thông, cẩn trọng khẩu thiệt. |
| Footer — Số may mắn | Danh sách các con số may mắn trong ngày của tuổi đó  | 3, 7, 9                                                                            |
| Footer — Màu hợp    | Màu hợp trong ngày của tuổi đó                         | Đỏ                                                                               |

**Nội dung 3 — Hỏi đáp Tử vi:**

| Thành phần          | Mô tả                                                                       | Ví dụ                                              |
| --------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------- |
| Tiêu đề            | Tên chuyên mục (Cố định)                                                | Hỏi đáp Tử vi                                    |
| Phụ đề (chủ đề) | Lĩnh vực chuyên môn luận giải (Sự nghiệp, Tình duyên, Tài lộc...) | Sự nghiệp                                          |
| Câu hỏi (Headline)  | Câu hỏi mồi gợi mở tò mò (đã loại bỏ text sau dấu ? nếu có)     | Lá số của bạn có thể khởi nghiệp hay không? |

### 8.3. Đề xuất phân bổ Bản tin Hàng tuần

| **Nội dung**                           | **Miễn phí** | **Bạc**    | **Vàng**   | **Kim Cương** | **Độ ưu tiên** |
| --------------------------------------------- | -------------------- | ----------------- | ----------------- | --------------------- | ------------------------ |
| Ngày tốt nhất trong tuần, giờ tốt       | ✅ Xem đầy đủ    | ✅ Xem đầy đủ | ✅ Xem đầy đủ | ✅ Xem đầy đủ     | 1                        |
| Việc nên làm / không nên làm            | ✅ Xem đầy đủ    | ✅ Xem đầy đủ | ✅ Xem đầy đủ | ✅ Xem đầy đủ     | 2                        |
| Bài văn khấn (nếu tuần có mùng 1/rằm) | ✅ Xem đầy đủ    | ✅ Xem đầy đủ | ✅ Xem đầy đủ | ✅ Xem đầy đủ     | 3                        |

### 8.4. Đề xuất phân bổ Bản tin Hàng tháng

| **Nội dung** | **Miễn phí** | **Bạc**  | **Vàng** | **Kim Cương** | **Độ ưu tiên** |
| ------------------- | -------------------- | --------------- | --------------- | --------------------- | ------------------------ |
| Vận hạn tháng    | 🔒 Bị làm mờ      | 🔒 Bị làm mờ | 🔒 Bị làm mờ | ✅ Xem đầy đủ     | 1                        |

## 9. Yêu cầu kỹ thuật (Phi chức năng)

* **Tracking & Analytics:** Client bắt buộc gắn mã theo dõi lên Firebase/Google Analytics/Hệ thống log Lịch Việt để ghi nhận dữ liệu người dùng ở các điểm chạm như: đóng/mở app, mở tab Dịch vụ, tiến trình mua hàng và click vào các khối Bản tin. (Tham chiếu danh sách sự kiện chi tiết tại Mục 3 - KPIs).
* **Hiệu năng:** Tốc độ hiện bản tin nhanh, thao tác vuốt và hiệu ứng mượt mà.
* **Sức chịu tải:** Server tạo trước nội dung Bản tin vào ban đêm, tải sẵn về máy người dùng để sáng 8:00 mở app không bị nghẽn mạng do đẩy Push hàng loạt.
