---
id: US-KHNL-INLINE-01
type: story
status: draft
project: Lich_Viet
owner: "@product-team"
tags: [khao-sat, inline-survey, kich-hoat-nang-luong, free-user, pro-user]
linked-to: "[[SVP-KHNL-KichHoatNangLuong]]", "[[BPRD-002-KhaoSatInApp]]", "[[Stories-MOC]]"
created: 2026-10-01
---
# User Story: Khảo sát Inline tại màn Kết quả Kích Hoạt Năng Lượng

## US-KHNL-INLINE-01: Đánh giá & Khảo sát Inline tại màn Kết quả Kích Hoạt Năng Lượng

**As a** người dùng ứng dụng Lịch Việt (tập Free hoặc Pro) khi xem màn kết quả Kích Hoạt Năng Lượng Cá Nhân

**I want to** thực hiện đánh giá nhanh (Hữu ích / Chưa hữu ích) cố định ở cuối màn kết quả và làm khảo sát chi tiết qua Popup khi muốn chia sẻ thêm ý kiến

**So that** hệ thống ghi nhận chính xác phản hồi real-time về mức độ hài lòng và nội dung quan tâm, giúp đội ngũ Lịch Việt cải thiện trải nghiệm người dùng và tối ưu hóa sản phẩm

---

### Metadata

- **Epic/Feature**: [[SVP-KHNL-KichHoatNangLuong#5.A. Giai đoạn 1 — Khảo sát Inline cố định ở cuối màn kết quả (Triển khai trước)|Khảo sát In-App — Giai đoạn 1: Inline Survey]]
- **Priority**: Must Have (Ưu tiên 1)
- **Estimate**: 3 Story Points (Medium)
- **Dependencies**: [[BPRD-002-KhaoSatInApp]], [[BPRD-001-KichHoatNangLuong]], API ghi nhận khảo sát (Survey Service)
- **Assumptions**:
  - Người dùng đã vào được màn Kết quả Kích Hoạt Năng Lượng (thành công dựng màn).
  - **Định danh & Trạng thái tài khoản**:
    - Người dùng **đã đăng nhập**: Truyền `user_id`, trạng thái tài khoản là **Free** hoặc **Pro**.
    - Người dùng **chưa đăng nhập (Guest)**: Chỉ có `customer_id` (mã định danh thiết bị), hệ thống **mặc định coi người dùng chưa đăng nhập là Tập Free** (`user_type = free`).

---

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                                                                                                           |
| :-------------------- | :-----: | :--------------------------------------------------------------------------------------------------------------------------------- |
| **I**ndependent |   ✅   | Độc lập với luồng thanh toán IAP và các chiến dịch Teaser/Direct ở Giai đoạn 2.                                       |
| **N**egotiable  |   ✅   | Giao diện và vị trí khối Inline đã chuẩn hóa theo prototype; có thể điều chỉnh copy và thứ tự đáp án theo CMS. |
| **V**aluable    |   ✅   | Thu thập phản hồi real-time từ 100% người dùng xem kết quả mà không làm gián đoạn trải nghiệm chính.             |
| **E**stimable   |   ✅   | Đã có đặc tả chi tiết giao diện (Prototype HTML) và logic phân nhánh rõ ràng trong SVP-KHNL.                          |
| **S**mall       |   ✅   | Phạm vi chỉ bao gồm Khối Inline + Popup khảo sát 1–2 câu ở màn kết quả KHNL.                                           |
| **T**estable    |   ✅   | Đã có bộ AC kiểm thử đầy đủ cho cả Happy Path, Edge Case và Negative Path.                                             |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

#### AC1: Hiển thị Khung Khảo Sát Inline ở cuối màn kết quả (Happy Path - General UI)

- [ ] **Điều kiện**: Người dùng (Free hoặc Pro) mở màn kết quả Kích Hoạt Năng Lượng thành công.
- [ ] **Vị trí**: Khối khảo sát Inline hiển thị cố định ở cuối màn kết quả
- [ ] **Thành phần giao diện**:
  - Hình minh họa
  - Tiêu đề: `"Bạn thấy kết quả vừa xem thế nào?"`
  - 2 nút đánh giá nhanh: **"Hữu ích"** 👍 và **"Chưa hữu ích"** 👎
  - Dòng mô tả nhỏ phụ: `"Mỗi chia sẻ giúp Lịch Việt mang đến trải nghiệm tốt hơn."`
- [ ] **Tính liên tục**: Khối Inline **LUÔN LUÔN HIỂN THỊ** đối với mọi lượt truy cập vào màn kết quả, không bị ẩn kể cả khi người dùng đã làm khảo sát trước đó.

#### AC2: Đánh giá nhanh (Real-time Quick Feedback Interaction)

- [ ] **Hành động**: Người dùng nhấp vào nút **"Hữu ích"** hoặc **"Chưa hữu ích"**.
- [ ] **Phản hồi UI**: Nút được chọn sẽ kích hoạt trạng thái Highlight (đổi màu viền/nền tương tự prototype).
- [ ] **Ghi nhận dữ liệu**: Hệ thống tự động gửi sự kiện tracking đánh giá nhanh (`khnl_inline_rating_submitted` với thuộc tính `rating_type: useful | unfit`) lên máy chủ ngay lập tức, không chờ đóng popup.
- [ ] **Kích hoạt bước tiếp theo**:
  - **Trường hợp A (Chưa từng hoàn thành Popup khảo sát đó)**: Hệ thống tự động mở Popup khảo sát chi tiết tương ứng (xem AC3 và AC4).
  - **Trường hợp B (Đã từng hoàn thành Popup khảo sát đó trước đây)**: Hệ thống dừng lại ở việc highlight nút & ghi nhận đánh giá nhanh, **KHÔNG bung Popup khảo sát**.

#### AC3: Luồng Popup Khảo sát chi tiết cho Tập Free (Happy Path - Free User)

- [ ] **Trạng thái tài khoản**: Người dùng Free (chưa nâng cấp Premium).
- [ ] **Trường hợp bấm "Hữu ích"** → Bung Popup `step-useful`:
  - **Tiêu đề Popup**: `"Chia sẻ thêm ý kiến của bạn"`
  - **Câu hỏi**: `"Bạn quan tâm nhất đến nội dung nào?"` (Dạng chọn nhiều - Checkbox).
  - **Danh sách đáp án**:
    1. Điểm mạnh & điểm cần lưu ý
    2. Biểu đồ Ngũ hành & phân tích năng lực
    3. Dụng thần phù hợp
    4. Linh vật phù hợp
    5. Ngày giờ & cách kích hoạt
    6. Các cách cân bằng Ngũ hành khác *(Vòng tay, quả cầu, Tháp Văn Xương, màu sắc hỗ trợ...)*
  - **Hành động nút "Gửi phản hồi"**: Bấm → Gửi dữ liệu câu trả lời lên máy chủ → Chuyển sang màn Cảm ơn (`step-thankyou`) → Đóng popup sau 2 giây.
- [ ] **Trường hợp bấm "Chưa hữu ích"** → Bung Popup `step-unfit`:
  - **Tiêu đề Popup**: `"Chia sẻ thêm ý kiến của bạn"`
  - **Câu hỏi**: `"Điều gì khiến bạn thấy chưa hữu ích?"` (Dạng chọn nhiều - Checkbox).
  - **Danh sách đáp án**:
    1. Nội dung còn chung chung
    2. Có phần chưa đúng với tôi
    3. Có phần khó hiểu
    4. Chưa thấy đủ giá trị để xem phần chuyên sâu
  - **Ô nhập văn bản tự do** (Không bắt buộc): Placeholder: `"Ví dụ: phần nào chưa đúng, còn chung chung hoặc bạn muốn biết thêm điều gì..."`
  - **Hành động nút "Gửi phản hồi"**: Bấm → Gửi dữ liệu câu trả lời lên máy chủ → Chuyển sang màn Cảm ơn (`step-thankyou`).

#### AC4: Luồng Popup Khảo sát chi tiết cho Tập Pro & Gửi dữ liệu theo từng câu

- [ ] **Trạng thái tài khoản**: Người dùng Pro (đã nâng cấp Premium).
- [ ] **Trường hợp bấm "Hữu ích"**: Bung Popup 1 câu hỏi chọn nhiều các phần nội dung hữu ích trong bản Premium + Nút **"Gửi phản hồi"**.
- [ ] **Trường hợp bấm "Chưa hữu ích" (Khảo sát từ 2 câu trở lên / Multi-step)**:
  - **Bước 1 (Câu 1)**: Chọn các phần nội dung chưa hữu ích (Chọn nhiều) → Nút **"Tiếp tục"**.
  - **Bước 2 (Câu 2 & Ý kiến đóng góp)**: Chọn chi tiết nguyên nhân chưa hữu ích (Chọn nhiều) + Ô nhập ý kiến tự do → Nút **"Gửi phản hồi"**.
- [ ] **Quy tắc gửi dữ liệu real-time**: **Trả lời câu nào thì đẩy câu đó lên server luôn**.
  - Nhấn **"Tiếp tục"** ở Bước 1 ➔ Đẩy dữ liệu Câu 1 lên server luôn (dù có đóng popup ở Bước 2 thì Câu 1 vẫn được ghi nhận).
  - Nhấn **"Gửi phản hồi"** ở Bước 2 ➔ Đẩy dữ liệu Câu 2 lên server & hoàn tất khảo sát.

#### AC5: Quy tắc tương tác nút & Hiển thị thông báo lỗi (Validation & Button State)

- [ ] **Trạng thái nút hành động**: Các nút **"Tiếp tục"** và **"Gửi phản hồi"** **LUÔN LUÔN NHẤN ĐƯỢC** (không bị disable hay làm mờ).
- [ ] **Xử lý khi chưa chọn đáp án**: Nếu người dùng bấm nút **"Tiếp tục"** hoặc **"Gửi phản hồi"** mà **chưa chọn bất kỳ đáp án nào** cho câu hỏi bắt buộc:
  - Hệ thống **chặn không cho chuyển bước hoặc gửi dữ liệu**.
  - Hiển thị dòng text thông báo lỗi màu đỏ (ví dụ: `"Vui lòng chọn câu trả lời"`) nằm **ngay bên dưới câu hỏi**.
- [ ] **Tự động xóa thông báo lỗi**: Ngay khi người dùng tích chọn 1 đáp án bất kỳ, dòng text thông báo lỗi tự động ẩn đi.

#### AC6: Xử lý Đóng / Hủy Popup & Tái hiển thị (Edge Cases & Negative Path)

- [ ] **Hành động đóng**: Bấm nút **[X]** hoặc bấm ngoài lề popup ➔ Popup đóng ngay.
- [ ] **Bảo lưu dữ liệu đã gửi**: Các câu đã trả lời (đã bấm "Tiếp tục") trước khi đóng popup đều đã được đẩy lên server đầy đủ.
- [ ] **Quy tắc sau khi hoàn thành**: Sau khi hoàn thành khảo sát, ghi nhận trạng thái `completed`. Người dùng sẽ không gặp lại Popup khảo sát này nữa (nếu có khảo sát mới cho tập này thì vẫn hiển thị popup mới).

#### AC7: Xử lý khi mất kết nối mạng hoặc lỗi server (Negative Path - Offline Handling)

- [ ] **Khối Đánh giá nhanh Inline (Native UI)**:
  - Khi bấm nút **"Hữu ích"** hoặc **"Chưa hữu ích"** nhưng gặp sự cố mất mạng hoặc lỗi server ➔ Native App vẫn cập nhật UI highlight tương ứng và lưu tạm kết quả đánh giá vào bộ nhớ tạm (local storage).
  - **Thời điểm tự động đồng bộ**: **Chỉ tự động đẩy/đồng bộ dữ liệu này lên server KHI NGƯỜI DÙNG VÀO LẠI MÀN KẾT QUẢ NÀY**
- [ ] **Popup Khảo sát chi tiết (WebView)**:
  - Khi người dùng bấm **"Tiếp tục"** hoặc **"Gửi phản hồi"** trên WebView nhưng thiết bị mất mạng hoặc API server gặp lỗi:
    - WebView hiển thị thông báo Toast đơn giản ngay trong màn hình: `"Không có kết nối mạng. Vui lòng thử lại."`
    - Người dùng nhấn lại nút để thử gửi lại khi kết nối được khôi phục.
    - Không cần xử lý queue ngầm phức tạp trong WebView.

---

### Tracking Events & Analytics

| Tên sự kiện                   | Thời điểm kích hoạt                                 | Thuộc tính đính kèm                                                                      |
| :------------------------------- | :------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| `khnl_inline_survey_viewed`    | Khối Inline xuất hiện trên màn hình                | `user_id` / `customer_id`, `user_type` (free/pro), `chart_id`                         |
| `khnl_inline_rating_submitted` | Bấm nút "Hữu ích" hoặc "Chưa hữu ích"            | `user_id` / `customer_id`, `rating_type` (useful/unfit), `user_type`                  |
| `khnl_survey_popup_opened`     | Popup khảo sát chi tiết bung mở                      | `user_id` / `customer_id`, `user_type`, `survey_code`, `trigger_rating`             |
| `khnl_survey_step_submitted`   | Bấm nút "Tiếp tục" (Khảo sát từ 2 câu trở lên) | `user_id` / `customer_id`, `survey_code`, `step_index` (1), `selected_options`      |
| `khnl_survey_popup_closed`     | Đóng Popup mà chưa bấm Gửi hoàn tất              | `user_id` / `customer_id`, `survey_code`, `step_abandoned` (bỏ dở tại bước nào) |
| `khnl_survey_submitted`        | Bấm "Gửi phản hồi" thành công                      | `user_id` / `customer_id`, `survey_code`, `selected_options`, `has_free_text`       |

---

### Metrics & Key Performance Indicators (Chỉ số Thống kê & Báo cáo)

Dưới đây là hệ thống chỉ số thống kê bao gồm **Số liệu đếm tuyệt đối (Số lượt & Số người dùng - UU)** và **Các tỷ lệ phễu chuyển đổi (%)**:

| Nhóm chỉ số                                  | Tên chỉ số                                                    | Dạng đo lường             | Công thức / Quy cách tính                                                                                                                            | Ý nghĩa / Mục tiêu sản phẩm                                                     |
| :---------------------------------------------- | :--------------------------------------------------------------- | :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| **Số liệu Đếm Tuyệt đối (Volume)** | **Lượt xem khối Inline**                                | Số lượt & Số người (UU) | $\text{Count}(khnl\_inline\_survey\_viewed)$                                                                                                           | Tổng quy mô người dùng tiếp cận khối Inline cuối màn kết quả.             |
|                                                 | **Lượt đánh giá Hữu ích**                           | Số lượt & Số người (UU) | $\text{Count}(khnl\_inline\_rating\_submitted \text{ with useful})$                                                                                    | Số lượng người dùng đánh giá hài lòng với kết quả.                      |
|                                                 | **Lượt đánh giá Chưa hữu ích**                     | Số lượt & Số người (UU) | $\text{Count}(khnl\_inline\_rating\_submitted \text{ with unfit})$                                                                                     | Số lượng người dùng đánh giá chưa hài lòng với kết quả.                |
|                                                 | **Lượt bung Popup khảo sát**                           | Số lượt & Số người (UU) | $\text{Count}(khnl\_survey\_popup\_opened)$                                                                                                            | Số lượt mở giao diện khảo sát chi tiết.                                       |
|                                                 | **Lượt hoàn thành 1 phần (Tiếp tục)**               | Số lượt & Số người (UU) | $\text{Count}(khnl\_survey\_step\_submitted)$                                                                                                          | Số lượt người dùng đã gửi dữ liệu Câu 1 nhưng chưa bấm Gửi toàn bộ. |
|                                                 | **Lượt hoàn thành Popup (Gửi)**                       | Số lượt & Số người (UU) | $\text{Count}(khnl\_survey\_submitted)$                                                                                                                | Tổng số lượt người dùng gửi đầy đủ phản hồi khảo sát.                 |
|                                                 | **Số người dùng nâng cấp Premium**                   | Số người (UU)              | $\text{Count}(\text{Free User mua Premium trong 7 ngày})$                                                                                             | Số người dùng Free chuyển đổi nâng cấp Premium sau khi làm khảo sát.      |
| **Tỷ lệ Tương tác Inline**           | **Tỷ lệ Phản hồi Nhanh (Quick Rating CTR)**            | Tỷ lệ (%)                   | $\frac{\text{Tổng lượt bấm (Hữu ích + Chưa hữu ích)}}{\text{Tổng lượt xem khối Inline}} \times 100\%$                                     | Mức độ thu hút & sẵn sàng đánh giá tại khối Inline cuối màn kết quả.   |
|                                                 | **Tỷ lệ Hữu ích (Useful Ratio / CSAT)**                | Tỷ lệ (%)                   | $\frac{\text{Số lượt bấm Hữu ích}}{\text{Tổng lượt bấm (Hữu ích + Chưa hữu ích)}} \times 100\%$                                         | Chỉ số hài lòng cốt lõi của tính năng KHNL (chia theo Free/Pro).             |
|                                                 | **Tỷ lệ Chưa hữu ích (Unfit Ratio)**                  | Tỷ lệ (%)                   | $\frac{\text{Số lượt bấm Chưa hữu ích}}{\text{Tổng lượt bấm (Hữu ích + Chưa hữu ích)}} \times 100\%$                                   | Tỷ lệ người dùng chưa hài lòng với nội dung luận giải.                    |
| **Tỷ lệ Phễu Popup**                   | **Tỷ lệ Hoàn thành Popup (Completion Rate)**           | Tỷ lệ (%)                   | $\frac{\text{Số lượt bấm Gửi phản hồi}}{\text{Số lượt bung Popup khảo sát}} \times 100\%$                                                  | Tỷ lệ người dùng đi trọn vẹn Popup khảo sát chi tiết.                      |
|                                                 | **Tỷ lệ Hoàn thành 1 phần (Partial Rate)**            | Tỷ lệ (%)                   | $\frac{\text{Số lượt bấm Tiếp tục câu 1 nhưng đóng ở câu 2}}{\text{Số lượt bung Popup khảo sát (từ 2 câu trở lên)}} \times 100\%$ | Tỷ lệ người dùng đã gửi thành công câu 1 nhưng bỏ dở câu 2.            |
|                                                 | **Tỷ lệ Bỏ dở Popup (Abandonment Rate)**               | Tỷ lệ (%)                   | $\frac{\text{Số lượt đóng Popup mà chưa bấm Gửi}}{\text{Số lượt bung Popup khảo sát}} \times 100\%$                                      | Tỷ lệ thoát ngang Popup khảo sát chi tiết.                                      |
| **Tác động Kinh doanh**                | **Tỷ lệ Chuyển đổi nâng cấp (Post-Survey Upgrade)** | Tỷ lệ (%)                   | $\frac{\text{Số người dùng Free mở khóa Premium trong 7 ngày}}{\text{Tổng người dùng Free tham gia khảo sát KHNL}} \times 100\%$          | Hiệu quả chuyển đổi kinh doanh sau khi tham gia khảo sát.                      |

---

### Notes / Assumptions / Dependencies

- **Thiết kế giao diện**: Tuân thủ chính xác Prototype HTML `KichHoatNangLuong_Result_KhaoSat.html` và `KichHoatNangLuong_Result_Premium_KhaoSat.html`.
- **Ràng buộc UI**: Khối Inline không được đè lên hoặc che khuất thanh CTA ghim cố định ở đáy màn hình (`#cta-bar`).
- **Tài liệu liên quan**:
  - Tài liệu Kế hoạch Khảo sát: [[SVP-KHNL-KichHoatNangLuong]] (Mục 5.A)
  - Khung Khảo sát In-App dùng chung: [[BPRD-002-KhaoSatInApp]] (Mục 4.2.2 Luồng B)
  - MOC User Stories: [[Stories-MOC]]
