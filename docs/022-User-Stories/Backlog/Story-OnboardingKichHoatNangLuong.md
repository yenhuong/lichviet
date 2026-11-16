---
id: US-KHNL-ONBOARDING
type: story
status: draft
project: Lich_Viet
owner: "@product-team"
tags: [kich-hoat-nang-luong, onboarding, popup, free-user, appopen, result-free, cms]
linked-to: "[[SVP-KHNL-KichHoatNangLuong]]", "[[Story-KichHoatNangLuongResult]]", "[[Stories-MOC]]"
created: 2026-10-02
updated: 2026-10-07
---
# User Story: Onboarding & Khối Kích Hoạt Năng Lượng Cá Nhân (App Open & Màn Kết Quả Free)

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
  - Khối danh sách 3 - 4 lợi ích chi tiết kèm icon sinh động: dữ liệu cá nhân hoá theo can ngày với trạng thái can ngày
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

## US-KHNL-ONBOARDING-02: Hiển thị Khối Kích Hoạt Năng Lượng Cá Nhân tại Màn hình Kết quả Free

**As a** người dùng Free của ứng dụng Lịch Việt đang xem Màn hình Kết quả Luận giải Kích Hoạt Năng Lượng
**I want to** thấy khối thông tin thời điểm/ngày kích hoạt năng lượng cá nhân phù hợp cùng khối mở khóa và thẻ ổ khóa thông tin chuyên sâu
**So that** tôi nhanh chóng nắm bắt ngày tốt kích hoạt năng lượng cá nhân và có động lực mở khóa xem chi tiết giờ phù hợp & hướng dẫn kích hoạt riêng theo lá số của mình.

---

### Metadata

- **Epic/Feature**: [[SVP-KHNL-KichHoatNangLuong#Result-Free|Kích Hoạt Năng Lượng Cá Nhân - Khối Kích Hoạt tại Màn Kết quả Free]]
- **Priority**: Must Have (Ưu tiên 1)
- **Estimate**: 3 Story Points (Small - Medium)
- **Target User**: Người dùng Free đã bổ sung ngày sinh
- **Trigger Point**:
  - Nhấp nút CTA từ Popup PIO Onboarding chuyển tới Màn kết quả.
  - Truy cập trực tiếp Màn hình Kết quả Luận giải Kích Hoạt Năng Lượng (`KichHoatNangLuongResult`) từ Trang chủ, Menu hoặc màn Lá số Bát tự (dù Popup PIO có xuất hiện hay không).
- **Dependencies**:
  - Logic Popup PIO tại App Open (`US-KHNL-ONBOARDING-01`)
  - Màn hình Kết quả Luận giải Kích Hoạt Năng Lượng Free (`Story-KichHoatNangLuongResult`)
- **Assumptions**:
  - Khối kích hoạt năng lượng chỉ hiển thị trên màn kết quả của người dùng **tài khoản Free** (chưa mua gói lẻ KHNL hoặc gói Kim cương).
  - Nếu chuyển từ Popup PIO ➔ Khối kích hoạt hiển thị đúng loại kích hoạt của Popup đó.
  - Nếu KHÔNG qua Popup PIO (Popup không hiện do tần suất, hoặc vào thẳng màn kết quả) ➔ Khối kích hoạt vẫn hiển thị nếu thông tin cá nhân có sự kiện kích hoạt còn hiệu lực, loại kích hoạt lấy theo quy tắc ưu tiên hệ thống.

---

### INVEST Self-check

| Tiêu chí            | ✅/⚠️ | Ghi chú                                                                                                                                            |
| :-------------------- | :-----: | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| **I**ndependent |   ✅   | Hiển thị độc lập trên màn kết quả Free, không làm gián đoạn phần hiển thị lá số Tứ trụ và biểu đồ ngũ hành.              |
| **N**egotiable  |   ✅   | Định dạng tiêu đề, danh sách ngày và hình ảnh minh họa tinh chỉnh phù hợp theo từng loại kích hoạt.                              |
| **V**aluable    |   ✅   | Tăng tính liền mạch từ Popup sang Màn kết quả, thúc đẩy hành vi mở khóa Premium của người dùng Free ngay cả khi chưa xem Popup. |
| **E**stimable   |   ✅   | Đã làm rõ quy tắc hiển thị, các kịch bản reset/xóa khối cũ và cấu trúc các thành phần UI.                                        |
| **S**mall       |   ✅   | Gói gọn trong khối Banner Kích hoạt & Khối Mở khóa/Thẻ khóa tại màn Kết quả Free.                                                     |
| **T**estable    |   ✅   | Có đầy đủ kịch bản test: nhấp CTA popup, vào thẳng màn kết quả khi không có popup, đổi thông tin hồ sơ và nhận popup mới.    |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

#### AC1: Logic hiển thị & Reset Khối Kích Hoạt ở Màn hình Kết quả Free

- [ ] **Đối tượng áp dụng**: Chỉ hiển thị cho **trường hợp Màn hình Kết quả Free** (người dùng chưa nâng cấp gói Premium KHNLCN hoặc gói Kim cương). Người dùng đã có quyền Premium sẽ không hiển thị khối kích hoạt Onboarding này (hiển thị giao diện luận giải chi tiết Premium).
- [ ] **Kịch bản 1 (Chuyển từ Popup PIO)**: Người dùng nhận Popup PIO Kích hoạt tại App Open ➔ Nhấn nút CTA trên Popup để sang Màn hình Kết quả: Hiển thị khối kích hoạt tương ứng với loại kích hoạt vừa hiện ở Popup PIO.
- [ ] **Kịch bản 2 (Vào Màn kết quả thông thường khi KHÔNG hiển thị Popup)**: Trường hợp Popup PIO **không hiển thị** (do chưa mở app đúng thời điểm, bị giới hạn tần suất $X$ ngày, hoặc người dùng chủ động vào màn kết quả từ Trang chủ / Menu / Tử vi...):
  - Màn hình Kết quả Free **vẫn tiếp tục hiển thị Khối Kích Hoạt Năng Lượng**, nếu hệ thống tính toán xác định người dùng có sự kiện kích hoạt năng lượng phù hợp và còn hiệu lực.
  - Loại kích hoạt hiển thị được xác định tự động theo đúng quy tắc ưu tiên hệ thống (ưu tiên Nhóm 1 gần nhất theo thứ tự `Dương quý nhân` > `Âm quý nhân` > `Tài lộc` > `Thiên mã`; nếu không có Nhóm 1 mới xét xoay vòng Nhóm 2).
- [ ] **Kịch bản 3 (Vào lại Màn kết quả thông thường sau khi đã xem)**: Sau khi đã xem màn kết quả, nếu người dùng thoát ra rồi truy cập lại Màn hình Kết quả thông thường: Màn hình **vẫn tiếp tục hiển thị khối kích hoạt đó**, nếu thỏa mãn đồng thời 2 điều kiện:
  1. Thông tin đầu vào người xem (Họ tên, Ngày sinh, Giờ sinh, Giới tính) chưa thay đổi.
  2. Sự kiện kích hoạt đó vẫn còn hiệu lực (chưa qua ngày kết thúc đợt kích hoạt).
- [ ] **Kịch bản 4 (Thay đổi thông tin người xem / profile)**: Nếu người dùng đổi sang xem lá số của người khác HOẶC thay đổi bất kỳ thông tin nào ảnh hưởng đến kết quả luận giải (như ngày sinh, giờ sinh, giới tính...):
  - **Hệ thống KHÔNG hiển thị khối kích hoạt cũ**.
  - Nếu thông tin mới có sự kiện kích hoạt phù hợp còn hiệu lực ➔ Hệ thống tính toán và hiển thị **khối kích hoạt mới tương ứng** với thông tin vừa đổi.
- [ ] **Kịch bản 5 (Nhận Popup Kích hoạt mới)**: Khi người dùng nhận được Popup kích hoạt mới phù hợp với thông tin cá nhân hiện tại ➔ Màn hình Kết quả hiển thị **khối kích hoạt mới tương ứng** với Popup mới đó.

#### AC2: Quy định Tiêu đề, Ảnh minh họa & Ngày kích hoạt theo Nhóm

- [ ] **Khối kích hoạt hiển thị theo loại kích hoạt phù hợp**:
  - Khi chuyển từ Popup PIO ➔ Đồng bộ chính xác theo loại kích hoạt từ Popup PIO.
  - Khi không qua Popup PIO ➔ Lấy theo loại kích hoạt ưu tiên nhất còn hiệu lực tính toán từ engine Bát tự.
- [ ] **Quy cách Tiêu đề chính theo Nhóm kích hoạt**:
  - **Nhóm 1 (Có linh vật đặt: Tài lộc / Thiên lộc, Dương quý nhân, Âm quý nhân, Thiên mã)**:
    - Format tiêu đề: `THỜI ĐIỂM VÀNG KÍCH HOẠT {TÊN_LOẠI}` (In hoa, chữ đỏ/cam nổi bật).
    - Ví dụ: `THỜI ĐIỂM VÀNG KÍCH HOẠT TÀI LỘC`, `THỜI ĐIỂM VÀNG KÍCH HOẠT DƯƠNG QUÝ NHÂN`...
  - **Nhóm 2 (Không có linh vật đặt / Gợi ý vật phẩm cân bằng: Vòng tay, Quả cầu, Tháp văn xương)**:
    - Format tiêu đề: `NGÀY KÍCH HOẠT {TÊN_LOẠI} CỦA BẠN` (In hoa, chữ đỏ/cam nổi bật).
    - Ví dụ: `NGÀY KÍCH HOẠT VÒNG TAY CỦA BẠN`, `NGÀY KÍCH HOẠT QUẢ CẦU CỦA BẠN`...
- [ ] **Ảnh minh họa khối Kích hoạt**:
  - Hiển thị hình ảnh minh họa vật phẩm/linh vật tương ứng với loại kích hoạt ở góc trên bên phải (Ví dụ: Hũ tiền vàng phong thủy cho Tài lộc, Vòng tay phong thủy cho Vòng tay, Quả cầu phong thủy cho Quả cầu, Tháp văn xương cho Tháp văn xương...).
- [ ] **Hiển thị Ngày kích hoạt (Không đếm ngược số ngày)**:
  - KHÔNG hiển thị đếm ngược số ngày (như `"Chỉ còn X ngày"`) như ở Popup PIO.
  - **Trường hợp có 1 ngày kích hoạt**:
    - Tiêu đề phụ: `NGÀY KÍCH HOẠT CỦA BẠN SẮP ĐẾN` (hoặc `NGÀY KÍCH HOẠT CỦA BẠN`).
    - Ngày kích hoạt: Hiển thị 1 ngày duy nhất dạng `DD/MM/YYYY` (Ví dụ: `10/10/2026`).
  - **Trường hợp có nhiều ngày kích hoạt**:
    - Hiển thị danh sách các thẻ ngày kích hoạt (dạng badge/button bo góc, tối đa **5 ngày** kích hoạt sắp tới gần nhất).
    - Ví dụ: Thẻ `08/10/2026` (nổi bật/highlight), `12/10/2026`, `17/10/2026`, `23/10/2026`, `28/10/2026`.

#### AC3: Quy định Khối Mở khóa Premium & Thẻ Ổ khóa Chuyên sâu

- [ ] **Cấu trúc Khối Mở khóa (Unlock Block)**:
  - Đặt ngay bên dưới Khối Ngày Kích hoạt.
  - Tiêu đề khối: `Mở khóa` kèm huy hiệu `[PREMIUM]` màu vàng.
  - Hiển thị 3 ý quyền lợi kèm dấu tích vàng `✔` và chữ màu đỏ/nâu nổi bật:
    1. `Phân tích Lá số, xác định Ngũ hành cần bổ sung`
    2. `Chọn sản phẩm kích hoạt năng lượng cá nhân`
    3. **`Xem giờ và hướng dẫn cách kích hoạt chi tiết`** *(Dòng mới được bổ sung ngay bên dưới ý thứ 2)*.
  - Bên phải khối hiển thị hình ảnh nhân vật vui vẻ cầm chìa khóa vàng mở khóa.
- [ ] **Cấu trúc Thẻ Ổ khóa Kết quả dành riêng (Locked Result Card)**:
  - Nằm ngay dưới khối Mở khóa Premium.
  - Giao diện dạng thẻ nền vàng nhạt, viền xanh/vàng tinh tế.
  - Vị trí bên trái: Icon **Ổ khóa vàng** nằm trong hình vuông nổi bật.
  - Dòng 1 (Tiêu đề): `KẾT QUẢ DÀNH RIÊNG CHO BẠN` (In hoa, màu nâu/đỏ đậm).
  - Dòng 2 (Nội dung khoá): `Giờ phù hợp và cách kích hoạt riêng theo lá số của bạn`.

---

### Tracking Events & Analytics (Ghi nhận sự kiện cho Khối Kích Hoạt Màn Kết Quả Free)

| Tên sự kiện                          | Thời điểm kích hoạt                                                         | Thuộc tính đính kèm (Phân loại chi tiết)                                                                                                                                                                                                                                       |
| :-------------------------------------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `khnl_result_activation_block_viewed` | Khối kích hoạt hiển thị thành công tại Màn kết quả Free               | `user_id`, `group_type` (`nhom_1` \| `nhom_2`), `event_type` (`duong_quy_nhan` \| `am_quy_nhan` \| `tai_loc` \| `thien_ma` \| `vong_tay` \| `qua_cau` \| `thap_van_xuong`), `activation_dates_count`, `entry_source` (`popup_pio` \| `direct_reentry`) |
| `khnl_result_unlock_block_clicked`    | Người dùng nhấp vào khối Mở khóa hoặc thẻ Ổ khóa tại Màn kết quả | `user_id`, `event_type`, `clicked_element` (`unlock_checklist` \| `locked_card` \| `cta_sticky_button`)                                                                                                                                                                    |

---

### Metrics & Key Performance Indicators (Chỉ số Màn Kết Quả Free)

| Nhóm chỉ số                    | Tên chỉ số                                             | Dạng đo lường             | Công thức / Quy cách tính chi tiết                                                                                                    | Mục tiêu phân tích / Ý nghĩa                                                                      |
| :-------------------------------- | :-------------------------------------------------------- | :---------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| **Volume**                  | **Lượt xem Khối Kích Hoạt ở Màn Kết Quả**  | Số lượt & Số người (UU) | $\text{Count}(khnl\_result\_activation\_block\_viewed)$                                                                                  | Thống kê quy mô người dùng tiếp cận khối kích hoạt tại màn kết quả.                      |
| **Phễu Chuyển đổi (%)** | **Tỷ lệ Click Mở khóa từ Màn Kết Quả Free** | Tỷ lệ (%)                   | $\frac{\text{Số người nhấp mở khóa ở Màn Kết Quả}}{\text{Tổng người xem Khối Kích Hoạt ở Màn Kết Quả}} \times 100\%$ | Đo lường mức độ quan tâm đối với tính năng xem giờ và hướng dẫn kích hoạt chi tiết. |

---

### Notes / Assumptions / Dependencies

- **Thiết kế giao diện tham chiếu**:
  - Nhóm 1 (Tài lộc - 1 ngày kích hoạt): Header `"THỜI ĐIỂM VÀNG KÍCH HOẠT TÀI LỘC"`, ngày `10/10/2026`, khối Mở khóa (3 tích vàng), Thẻ ổ khóa `Giờ phù hợp và cách kích hoạt riêng theo lá số của bạn`.
  - Nhóm 2 (Vòng tay - Nhiều ngày kích hoạt): Header `"NGÀY KÍCH HOẠT VÒNG TAY CỦA BẠN"`, danh sách 5 ngày `08/10/2026`, `12/10/2026`, `17/10/2026`, `23/10/2026`, `28/10/2026`.
- **Tài liệu liên quan**:
  - User Story Popup App Open: `US-KHNL-ONBOARDING-01`
  - User Story Màn kết quả KHNL Free gốc: [[Story-KichHoatNangLuongResult]]
  - Kế hoạch tổng thể KHNL: [[SVP-KHNL-KichHoatNangLuong]]
  - Map of Content User Stories: [[Stories-MOC]]
