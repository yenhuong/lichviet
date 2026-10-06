---
id: US-KHNL-ONBOARDING-01
type: story
status: draft
project: Lich_Viet
owner: "@product-team"
tags: [kich-hoat-nang-luong, onboarding, popup, free-user, appopen, cms]
linked-to: "[[SVP-KHNL-KichHoatNangLuong]]", "[[Stories-MOC]]"
created: 2026-10-02
---
# User Story: Popup Personalized Insight Onboarding Kích Hoạt Năng Lượng Cá Nhân

## US-KHNL-ONBOARDING-01: Hiển thị Popup Personalized Insight Onboarding Kích Hoạt Năng Lượng tại App Open

**As a** người dùng Free của ứng dụng Lịch Việt đã cập nhật thông tin ngày sinh
**I want to** nhận được Popup gợi ý thời điểm vàng hoặc nhắc nhở kích hoạt năng lượng cá nhân phù hợp ngay khi mở ứng dụng
**So that** tôi nhận biết được thời điểm chuyển giao năng lượng thuận lợi, nắm bắt cơ hội và dễ dàng chuyển tới màn kết quả luận giải chi tiết Kích Hoạt Năng Lượng của cá nhân

---

### Metadata

- **Epic/Feature**: [[SVP-KHNL-KichHoatNangLuong#Onboarding-AppOpen|Kích Hoạt Năng Lượng Cá Nhân - Personalized Insight Onboarding tại App Open]]
- **Priority**: Must Have (Ưu tiên 1)
- **Estimate**: 5 Story Points (Medium - Large)
- **Target User**: Người dùng Free đã bổ sung ngày sinh (Dương lịch hoặc Âm lịch)
- **Trigger Point**: Sự kiện mở ứng dụng (`appopen`)
- **Dependencies**:
  - Engine tính toán Bát tự & ngày kích hoạt năng lượng theo thông tin cá nhân
  - CMS Cấu hình Popup, tham số tần suất ($X$ ngày) & khoảng quét thời gian ($Y$ ngày)
  - Màn hình Kết quả Luận giải Kích Hoạt Năng Lượng (`KichHoatNangLuongResult`)
- **Assumptions**:
  - Người dùng đã hoàn tất nhập ngày sinh trong hồ sơ cá nhân hoặc qua luồng trải nghiệm trước đó.
  - Mỗi lần kích hoạt thuộc một loại nội dung được xác định rõ bởi khoảng ngày bắt đầu và kết thúc.

---

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                                                                                                     |
| :-------------------- | :-----: | :--------------------------------------------------------------------------------------------------------------------------- |
| **I**ndependent |   ✅   | Độc lập với luồng mua hàng IAP và khối khảo sát Inline ở màn kết quả.                                          |
| **N**egotiable  |   ✅   | Cấu hình tần suất$X$ ngày, khoảng quét $Y$ ngày và copy lời chúc/lợi ích chỉnh sửa linh hoạt từ CMS.    |
| **V**aluable    |   ✅   | Tăng tỷ lệ giữ chân (retention) và chuyển đổi người dùng Free sang xem chi tiết bản luận giải năng lượng. |
| **E**stimable   |   ✅   | Đã đặc tả chi tiết logic phân loại 2 nhóm, thứ tự ưu tiên và quy định giao diện.                            |
| **S**mall       |   ✅   | Phạm vi chỉ đóng gói trong luồng kiểm tra điều kiện & hiển thị Popup tại App Open.                              |
| **T**estable    |   ✅   | Đầy đủ kịch bản kiểm thử Happy Path, Edge Cases, Negative Path và tracking events.                                  |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

#### AC1: Kích hoạt Popup tại App Open & Quy trình gọi API + Cơ chế Cache (Happy Path)

- [ ] **Đối tượng áp dụng**: Người dùng tài khoản **Free** đã bổ sung dữ liệu ngày sinh hợp lệ.
- [ ] **Thời điểm kiểm tra**: Kích hoạt ngầm ngay khi sự kiện mở ứng dụng (`appopen`) diễn ra.
- [ ] **Luồng gọi API 2 bước**:
  1. **Bước 1 (Gọi API GET POPUP)**: App thực hiện gọi API `get-popup` để lấy danh sách popup cấu hình tại App Open.
  2. **Bước 2 (Gọi API lấy dữ liệu kích hoạt cá nhân)**: Nếu API `get-popup` trả về popup có loại nội dung `content_type = KHNLCN` ➔ App tiếp tục gọi API `tim-ngay-khnlcn` để lấy nội dung kích hoạt năng lượng cá nhân.
- [ ] **Cơ chế Cache dữ liệu API `tim-ngay-khnlcn`**:
  - Do API `tim-ngay-khnlcn` xử lý tính toán phức tạp trên server, App thực hiện **cache dữ liệu lâu nhất có thể** và lưu 1 bản duy nhất trên thiết bị (local storage).
  - **Phạm vi lấy dữ liệu**: Mỗi lần gọi API thành công, App sẽ xin dữ liệu cho **180 ngày** tính từ ngày hôm nay (từ $T_{hôm\_nay}$ đến $T_{hôm\_nay} + 180 \text{ ngày}$), mặc dù UI Popup chỉ cần quét hiển thị trong vòng **90 ngày**.
- [ ] **Bảng quy tắc gọi lại API `tim-ngay-khnlcn` (Cache Invalidation Rules)**:

| Kịch bản mở App / Trạng thái            | Tình trạng Cache / Điều kiện                                                                      | Gọi lại API`tim-ngay-khnlcn`? | Hành vi xử lý chi tiết của App                                                                                    |
| :------------------------------------------- | :----------------------------------------------------------------------------------------------------- | :-------------------------------: | :--------------------------------------------------------------------------------------------------------------------- |
| **1. Mở app bình thường**          | Phần dữ liệu cache còn lại$\ge 90$ ngày ($T_{to\_date} - T_{hôm\_nay} \ge 90\text{ ngày}$) |         **KHÔNG**         | Sử dụng trực tiếp dữ liệu từ Cache local.                                                                       |
| **2. Mở app bình thường**          | Phần dữ liệu cache còn lại$< 90$ ngày ($T_{to\_date} - T_{hôm\_nay} < 90\text{ ngày}$)     |           **CÓ**           | Gọi lại API`tim-ngay-khnlcn`, xin mới **180 ngày** tính từ hôm nay và cập nhật vào Cache local.     |
| **3. Thay đổi thông tin cá nhân** | Người dùng đổi Ngày sinh / Giờ sinh / Giới tính / Chuyển tài khoản                         |           **CÓ**           | Xóa cache cũ ngay lập tức và gọi lại API`tim-ngay-khnlcn` để lấy dữ liệu mới cho thông tin vừa đổi. |
| **4. Server nâng Version API**        | Server tăng version của path trong`get-version-api`                                                |  **CÓ (Mọi thiết bị)**  | Xóa cache cũ và gọi lại API`tim-ngay-khnlcn` để lấy dữ liệu chuẩn theo version mới.                      |
| **5. Lần gọi trước bị lỗi**      | Lần gọi API trước bị lỗi (Timeout / Mất mạng / Lỗi Server 5xx)                                |     **CÓ (Thử lại)**     | Thử gọi lại API sau**15 phút** hoặc ngay khi người dùng mở lại ứng dụng.                             |
| **6. Request đang chạy dở**         | Đang có một request`tim-ngay-khnlcn` chưa hoàn tất (In-flight request)                         |         **KHÔNG**         | Tái sử dụng request đang chạy dở (Request Deduplication), không tạo request trùng lặp.                       |

- [ ] **Kết quả hiển thị**: Khi lấy được dữ liệu thành công từ API `tim-ngay-khnlcn` (hoặc từ Cache thỏa mãn) ➔ App dựng giao diện và hiển thị Popup PIO Kích Hoạt Năng Lượng Cá Nhân lên màn hình cho người dùng với đúng loại nội dung (1 trong 7 loại) và dữ liệu chi tiết tương ứng.

#### AC2: Phân loại Popup & Logic hiển thị Tiêu đề / Ngày đếm ngược

- [ ] **Phân loại 2 nhóm Popup**:
  - **Nhóm 1 (Có linh vật đặt)**: Bao gồm 4 loại kích hoạt:
    1. Dương quý nhân
    2. Âm quý nhân
    3. Tài lộc (Thiên lộc)
    4. Thiên mã
  - **Nhóm 2 (Không có linh vật đặt / Gợi ý vật phẩm cân bằng)**: Bao gồm 3 loại:
    1. Vòng tay (theo Dụng thần)
    2. Quả cầu (theo Dụng thần)
    3. Tháp văn xương (theo Dụng thần)
- [ ] **Xử lý Tiêu đề & Nội dung đếm ngược theo thời điểm kích hoạt**:
  - **Trường hợp 1A (Ngày kích hoạt chính là hôm nay / $X = 0$ ngày tại thời điểm bung popup)**:
    - Tiêu đề phụ đầu khối: `"ĐỪNG BỎ LỠ"`
    - Thẻ thông tin thời gian nổi bật: Hiển thị dòng text `"HÔM NAY LÀ NGÀY KÍCH HOẠT CỦA BẠN" với TH có 1 ngày kích hoạt. Còn TH có nhiều ngày kích hoạt thì hiện Đã tới ngày kích hoạt của bạn`.
  - **Trường hợp 1B (Ngày kích hoạt còn từ 1 đến 5 ngày / $1 \le X \le 5$ ngày tại thời điểm bung popup)**:
    - Tiêu đề phụ đầu khối: `"ĐỪNG BỎ LỠ"`
    - Thẻ thông tin thời gian nổi bật: Hiển thị dòng text `"CHỈ CÒN X NGÀY NỮA ĐẾN NGÀY KÍCH HOẠT CỦA BẠN"` kèm ngày cụ thể `DD/MM/YYYY` (Ví dụ: `CHỈ CÒN 5 NGÀY NỮA ĐẾN NGÀY KÍCH HOẠT TÀI LỘC CỦA BẠN 10/10/2026`).
  - **Trường hợp 2 (Ngày kích hoạt còn $> 5$ ngày tại thời điểm bung popup)**:
    - Tiêu đề phụ đầu khối: `"THỜI ĐIỂM VÀNG"`
    - Thẻ thông tin thời gian: Hiển thị dòng text `"NGÀY KÍCH HOẠT CỦA BẠN SẮP TỚI"` kèm ngày/danh sách ngày cụ thể `DD/MM/YYYY` (Ví dụ: `NGÀY KÍCH HOẠT CỦA BẠN SẮP TỚI 10/10/2026`).

#### AC3: Logic ưu tiên hiển thị cho Nhóm 1

- [ ] **Ưu tiên cấp nhóm**: Hệ thống luôn ưu tiên xét hiển thị các sự kiện thuộc **Nhóm 1** trước. Chỉ khi không có sự kiện nào thuộc Nhóm 1 thỏa mãn mới chuyển sang xét Nhóm 2.
- [ ] **Ưu tiên thời gian gần nhất trong Nhóm 1**: Trong Nhóm 1, ưu tiên chọn sự kiện chưa hiển thị có ngày kích hoạt gần nhất với ngày gọi API (ngày hiện popup).
- [ ] **Ưu tiên theo thứ tự nội dung khi trùng ngày**: Nếu có nhiều sự kiện chưa hiển thị thuộc các loại khác nhau nhưng có cùng ngày kích hoạt gần nhất ➔ Xét theo thứ tự ưu tiên nội dung:
  $$
  \text{Dương quý nhân} > \text{Âm quý nhân} > \text{Tài lộc} > \text{Thiên mã}
  $$
- [ ] **Xử lý đợt kích hoạt mới**: Với cùng một loại kích hoạt (ví dụ: Tài lộc), nếu xuất hiện một đợt kích hoạt mới có khoảng ngày tách biệt với đợt đã hiển thị trước đó ➔ Đợt mới này được ghi nhận là một sự kiện mới và tiếp tục tham gia xét ưu tiên bình thường.

#### AC4: Logic xoay vòng Random & Reset cho Nhóm 2

- [ ] **Cơ chế hiển thị ngẫu nhiên**: Khi xét đến Nhóm 2, hệ thống chọn ngẫu nhiên (random) 1 trong 3 loại: Vòng tay / Quả cầu / Tháp văn xương.
- [ ] **Loại trừ loại đã hiện**: Loại nào đã hiển thị ở các lần bung Popup trước đó thì **lần sau không hiển thị lại**.
- [ ] **Tự động Reset chu kỳ**: Khi cả 3 loại thuộc Nhóm 2 đều đã hiển thị đủ 1 lần ➔ Hệ thống tự động reset lại trạng thái xem của Nhóm 2 để cho phép cả 3 loại tiếp tục tham gia xoay vòng ngẫu nhiên ở các đợt tiếp theo.
- [ ] **Xử lý đợt kích hoạt mới ở Nhóm 2**: Với cùng một loại (ví dụ: Vòng tay), nếu xuất hiện một đợt kích hoạt mới có khoảng ngày tách biệt với đợt đã hiển thị trước đó ➔ Được coi là sự kiện mới và tiếp tục tham gia xét ưu tiên hiển thị.

#### AC5: Giới hạn tối đa 5 ngày kích hoạt trên giao diện

- [ ] **Giới hạn số lượng ngày hiển thị**: Khi Popup cần hiển thị các ngày kích hoạt sắp tới (đặc biệt đối với giao diện Nhóm 2 có danh sách nhiều ngày), hệ thống chỉ lấy tối đa **5 ngày kích hoạt** sắp tới gần nhất để đưa lên giao diện.
- [ ] **Quy cách trình bày**: 5 ngày được sắp xếp thứ tự từ sớm nhất đến muộn nhất và hiển thị dạng thẻ/badge gọn gàng (Ví dụ: `08/10/2026`, `12/10/2026`, `17/10/2026`, `23/10/2026`, `28/10/2026`).

#### AC6: Thành phần giao diện & Tương tác chuyển hướng (CTA)

- [ ] **Thành phần giao diện Popup chuẩn**:
  - Nút quay lại/đóng hình tròn `[<]` ở góc trên bên trái.
  - Tiêu đề phụ (`THỜI ĐIỂM VÀNG` hoặc `ĐỪNG BỎ LỠ`).
  - Tiêu đề chính & Ảnh minh họa linh vật/vật phẩm năng lượng ở góc trên bên phải.
  - Đoạn văn mô tả ngắn về ý nghĩa thời điểm năng lượng.
  - Card thông tin người dùng: Tên hiển thị + Ngày sinh Dương lịch (`DD/MM/YYYY`).
  - Khối thời gian: Thẻ ngày đếm ngược hoặc danh sách tối đa 5 ngày kích hoạt.
  - Khối danh sách 3 - 4 lợi ích chi tiết kèm icon sinh động.
  - Nút bấm CTA màu đỏ nổi bật ở đáy Popup.
- [ ] **Tương tác nút CTA**:
  - Khi người dùng nhấp vào nút CTA (Ví dụ: `"Xem kết quả của bạn"` hoặc `"Xem ngày & cách mang vòng tay"`) ➔ Đóng Popup và chuyển hướng trực tiếp đến **Màn hình Kết quả Luận giải Kích Hoạt Năng Lượng** của chính người dùng đó.
- [ ] **Tương tác đóng Popup**:
  - Bấm nút `[<]` hoặc nút back cứng thiết bị ➔ Đóng Popup mượt mà, trả người dùng về màn hình Trang chủ ứng dụng.

#### AC7: Cấu hình CMS & Báo cáo Thống kê Từng Loại Popup Kích Hoạt (CMS & Analytics Breakdown)

- [ ] **Khởi tạo Campaign & Popup trên CMS**:
  - CMS hỗ trợ khởi tạo **1 Popup Tổng "Kích hoạt NL"** (để quản lý cấu hình khoảng cách tần suất $X$ ngày và khoảng quét $Y = 90$ ngày) và **7 Popup Con** tương ứng trực tiếp với 7 loại kích hoạt riêng biệt:
    1. Dương quý nhân (`duong_quy_nhan`)
    2. Âm quý nhân (`am_quy_nhan`)
    3. Tài lộc / Thiên lộc (`tai_loc`)
    4. Thiên mã (`thien_ma`)
    5. Vòng tay (`vong_tay`)
    6. Quả cầu (`qua_cau`)
    7. Tháp văn xương (`thap_van_xuong`)
- [ ] **Thống kê độc lập từng loại Popup trên CMS**:
  - Mọi chỉ số thống kê (Số lượt hiển thị Impression, Số lượt nhấp CTA Click, Tỷ lệ nhấp CTR, Tỷ lệ đóng Popup) **phải được ghi nhận và tách biệt rõ ràng cho từng loại Popup kích hoạt (7 loại con + 1 loại tổng)**.
  - Ban quản trị (Admin/PO) có thể lọc báo cáo thống kê trên CMS theo từng loại cụ thể hoặc xem bảng so sánh hiệu năng giữa 7 loại kích hoạt với nhau.

#### AC8: Xử lý trường hợp ngoại lệ & Điều kiện biên (Edge Cases & Negative Path)

- [ ] **Người dùng chưa cập nhật ngày sinh**: Hệ thống bỏ qua logic Popup Kích Hoạt Năng Lượng tại App Open, không hiển thị popup.
- [ ] **Người dùng Pro / Premium tính năng KHNLCN**: Không hiển thị Popup Personalized Insight Onboarding này tại App Open (tính năng tập trung trải nghiệm Onboarding cho tập Free).
- [ ] **Không có sự kiện kích hoạt nào trong vòng $Y$ ngày**: Không hiển thị popup.
- [ ] **Lỗi kết nối mạng hoặc timeout API tại App Open**: App chuyển tiếp thẳng vào Trang chủ bình thường, không treo ứng dụng, không hiển thị dialog lỗi gián đoạn người dùng.

---

### Tracking Events & Analytics (Ghi nhận sự kiện theo từng loại Popup)

| Tên sự kiện                    | Thời điểm kích hoạt                                 | Thuộc tính đính kèm (Phân loại chi tiết)                                                                                                                                                                                                                                                                                 |
| :-------------------------------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `khnl_onboarding_popup_viewed`  | Popup Onboarding hiển thị thành công tại App Open   | `user_id` / `customer_id`, `popup_id_cms`, `group_type` (nhom_1 / nhom_2), `event_type` (`duong_quy_nhan` \| `am_quy_nhan` \| `tai_loc` \| `thien_ma` \| `vong_tay` \| `qua_cau` \| `thap_van_xuong`), `header_type` (`thoi_diem_vang` \| `dung_bo_lo`), `days_left`, `activation_dates_count` |
| `khnl_onboarding_popup_clicked` | Người dùng bấm vào nút CTA chính trên Popup      | `user_id` / `customer_id`, `popup_id_cms`, `event_type` (1 trong 7 loại), `target_screen` (`KichHoatNangLuongResult`), `cta_text`                                                                                                                                                                                 |
| `khnl_onboarding_popup_closed`  | Người dùng bấm nút [<] hoặc back để đóng Popup | `user_id` / `customer_id`, `popup_id_cms`, `event_type` (1 trong 7 loại), `stay_duration_seconds`                                                                                                                                                                                                                     |

---

### Metrics & Key Performance Indicators (Chỉ số Thống kê & Báo cáo theo Từng Loại Popup)

| Nhóm chỉ số                                  | Tên chỉ số                                                       | Dạng đo lường             | Công thức / Quy cách tính chi tiết                                                                                                                        | Mục tiêu phân tích / Ý nghĩa                                                                       |
| :---------------------------------------------- | :------------------------------------------------------------------ | :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| **Số liệu Đếm Tuyệt đối (Volume)** | **Lượt hiển thị theo từng Loại Popup**                  | Số lượt & Số người (UU) | $\text{Count}(khnl\_onboarding\_popup\_viewed \text{ group by } event\_type)$                                                                                | Thống kê số lượt hiển thị thực tế riêng cho từng loại popup kích hoạt (7 loại).           |
|                                                 | **Lượt nhấp CTA theo từng Loại Popup**                   | Số lượt & Số người (UU) | $\text{Count}(khnl\_onboarding\_popup\_clicked \text{ group by } event\_type)$                                                                               | Thống kê số lượt người dùng nhấp CTA chuyển sang màn kết quả theo từng loại.              |
| **Tỷ lệ Phễu Chuyển đổi (%)**       | **Tỷ lệ Nhấp CTA theo từng Loại (CTR)**                  | Tỷ lệ (%)                   | $\frac{\text{Số lượt nhấp CTA của Loại } i}{\text{Số lượt hiển thị của Loại } i} \times 100\%$                                                  | Đo lường và so sánh tỷ lệ nhấp CTR trực tiếp giữa từng loại popup kích hoạt.              |
|                                                 | **Tỷ lệ Chuyển đổi Nâng cấp Premium theo từng Loại** | Tỷ lệ (%)                   | $\frac{\text{Số người dùng Free xem Popup Loại } i \text{ mua Premium trong 7 ngày}}{\text{Tổng người dùng Free xem Popup Loại } i} \times 100\%$ | Đánh giá tác động doanh thu chuyển đổi thực tế đóng góp từ từng loại popup kích hoạt. |

---

### Notes / Assumptions / Dependencies

- **Thiết kế giao diện**: Tuân thủ chính xác các layout thiết kế đính kèm (Ảnh 1: Thiên Mã - Thời điểm vàng; Ảnh 2: Thiên Lộc - Đừng bỏ lỡ; Ảnh 3: Vòng tay - Danh sách 5 ngày).
- **Ràng buộc hiệu năng**: Việc gọi API kiểm tra điều kiện tại `appopen` phải thực hiện async, không làm tăng thời gian khởi động (splash screen) của ứng dụng.
- **Tài liệu liên quan**:
  - Tài liệu Kế hoạch tổng thể: [[SVP-KHNL-KichHoatNangLuong]]
  - User Story Màn kết quả KHNL: [[Story-KichHoatNangLuongResult]]
  - Map of Content User Stories: [[Stories-MOC]]
