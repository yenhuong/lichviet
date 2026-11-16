---
id: US-KHHT
type: story
status: draft
project: Lich_Viet
owner: "@product-team"
tags: [kich-hoat-hoc-tap, thap-van-xuong, tri-tue-cong-danh, intro]
linked-to: "[[Stories-MOC]]", "[[Story-KichHoatNangLuong]]", "[[BPRD-004-KichHoatTriTueCongDanh]]"
created: 2026-10-27
---
# User Stories - Tính năng Kích hoạt Trí tuệ & Công danh

---

## US-KHHT-01 - Xem giới thiệu tính năng Kích hoạt Trí tuệ & Công danh

**As a** phụ huynh hoặc người đang đi học, đi làm quan tâm đến việc học tập và công danh của bản thân hoặc con

**I want to** xem giới thiệu về sao Văn Xương, Thân Vượng và các lợi ích khi đặt Tháp Văn Xương trước khi nhập thông tin

**So that** tôi hiểu giá trị của tính năng và có động lực khám phá xem bản thân hoặc con có sở hữu lợi thế này không

---

### Metadata

- **Epic/Feature**: Kích hoạt Trí tuệ & Công danh - Màn giới thiệu
- **Priority**: Must Have
- **Estimate**: 2 Story Points (Small)
- **Dependencies**:
  - Màn Nhập thông tin xem Kích hoạt Trí tuệ & Công danh (US-KHHT-02).
- **Assumptions**:
  - Toàn bộ nội dung trên màn (tiêu đề, ảnh minh họa, mô tả, danh sách lợi ích, nút CTA) được fix cứng trong ứng dụng theo thiết kế, không lấy từ server.

---

### INVEST Self-check

| Tiêu chí            | Đánh giá | Ghi chú                                                                              |
| --------------------- | ----------- | ------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Màn tĩnh, không phụ thuộc dữ liệu người dùng.                               |
| **N**egotiable  | ✅          | Nội dung lợi ích, hình minh họa và câu chữ CTA có thể tinh chỉnh.          |
| **V**aluable    | ✅          | Truyền tải giá trị tính năng, tăng tỷ lệ chuyển sang màn nhập thông tin. |
| **E**stimable   | ✅          | Màn tĩnh có cuộn và nút cố định, dễ ước lượng.                          |
| **S**mall       | ✅          | Hoàn thành trong một sprint.                                                       |
| **T**estable    | ✅          | Kiểm thử được nội dung hiển thị và điều hướng.                           |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

#### AC1 - Phần đầu màn hình (Happy path)

- [ ] Header gồm nút quay lại ở góc trái và tiêu đề 2 dòng "KÍCH HOẠT" / "Trí tuệ & Công danh" (kèm họa tiết trang trí hai bên), bên dưới là dòng phụ đề "Khai mở tư duy, trợ duyên học vấn và công danh".
- [ ] Dưới phụ đề là ảnh minh họa gia đình cùng Tháp Văn Xương, tiếp theo là đoạn mô tả "Theo Bát tự, sao Văn Xương tượng trưng cho trí tuệ, khả năng học hỏi và tư duy. Đặc biệt, người có sao Văn Xương · Thân vượng sở hữu lợi thế nổi bật. Đặt Tháp Văn Xương giúp kích hoạt sao, hỗ trợ phát huy trí tuệ, học tập và công danh".

#### AC2 - Khối Lợi ích khi đặt Tháp Văn Xương

- [ ] Khối có nhãn tiêu đề "LỢI ÍCH KHI ĐẶT THÁP VĂN XƯƠNG" và phụ đề "Phát huy lợi thế Văn Xương sẵn có khi Thân vượng".
- [ ] Khối hiển thị đúng 3 lợi ích theo thứ tự, mỗi lợi ích gồm icon riêng, tiêu đề và mô tả, phân cách bằng đường kẻ:
  - **Phát triển công danh**: "Hỗ trợ phát huy chuyên môn, giao tiếp thuyết phục, nâng cao uy tín và cơ hội thăng tiến."
  - **Phát huy trí tuệ**: "Hỗ trợ tư duy logic, sáng tạo, diễn đạt rõ ràng và giải quyết vấn đề."
  - **Học tốt, tự tin thi cử**: "Hỗ trợ tập trung, ghi nhớ, tiếp thu kiến thức."

#### AC3 - Khối CTA cố định cuối màn hình

- [ ] Dòng text "Bạn hoặc con có đang sở hữu lợi thế này?" và nút "Khám phá ngay để kích hoạt" được ghim cố định ở đáy màn hình, không cuộn theo nội dung. Nội dung phía trên cuộn được và không bị khối CTA che mất phần cuối.

#### AC4 - Điều hướng

- [ ] Người dùng mở deeplink tính năng `lichviet://?screen=kich_hoat_hoc_tap` (gắn ở khối tính năng Trang chủ, noti hoặc popup) → mở màn giới thiệu.
- [ ] Bấm nút "Khám phá ngay để kích hoạt" → chuyển tới màn Nhập thông tin xem Kích hoạt Trí tuệ & Công danh (US-KHHT-02).
- [ ] Bấm nút quay lại → đóng màn giới thiệu, trở về màn trước đó.

---

### Luồng thao tác

1. Người dùng vào màn giới thiệu Kích hoạt Trí tuệ & Công danh.
2. Người dùng cuộn xem mô tả và 3 lợi ích khi đặt Tháp Văn Xương.
3. Người dùng bấm "Khám phá ngay để kích hoạt" để sang màn nhập thông tin, hoặc bấm quay lại để trở về màn trước đó.

---

## US-KHHT-02 - Nhập thông tin để khám phá Văn Xương

**As a** người dùng muốn biết thế mạnh học hỏi của bản thân hoặc người thân

**I want to** nhập hoặc chọn nhanh thông tin Họ tên, Ngày sinh, Giờ sinh và Giới tính của bản thân hoặc người thân

**So that** hệ thống có đủ dữ liệu để phân tích thế mạnh học hỏi và gợi ý Tháp Văn Xương phù hợp với người được xem

---

### Metadata

- **Epic/Feature**: Kích hoạt Trí tuệ & Công danh - Màn nhập thông tin
- **Priority**: Must Have
- **Estimate**: 3 Story Points (Medium)
- **Dependencies**:
  - Logic nhập thông tin dùng chung với màn nhập thông tin Kích hoạt năng lượng cá nhân
  - Màn chọn thành viên gia đình dùng chung của ứng dụng.
  - Màn Kết quả phân tích Kích hoạt Trí tuệ & Công danh.
- **Assumptions**:
  - Ngày sinh dương lịch là trường bắt buộc. Giờ sinh không bắt buộc nhưng được khuyến nghị để kết quả chính xác hơn.
  - Người dùng chưa đăng nhập vẫn dùng được toàn bộ tính năng.

---

### INVEST Self-check

| Tiêu chí            | Đánh giá | Ghi chú                                                                                 |
| --------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Tái sử dụng logic form của Kích hoạt năng lượng, không phụ thuộc màn khác. |
| **N**egotiable  | ✅          | Câu chữ mô tả và thông báo có thể điều chỉnh.                                |
| **V**aluable    | ✅          | Dữ liệu đầu vào bắt buộc để tạo kết quả phân tích.                         |
| **E**stimable   | ✅          | Form đã có sẵn ở tính năng Kích hoạt năng lượng, dễ ước lượng.          |
| **S**mall       | ✅          | Chủ yếu thay đổi tiêu đề, mô tả và điểm điều hướng.                      |
| **T**estable    | ✅          | Có kịch bản hợp lệ và không hợp lệ rõ ràng.                                   |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

#### AC1 - Giao diện màn nhập thông tin (Happy path)

- [ ] Header gồm nút quay lại và tiêu đề "Kích hoạt Trí tuệ & Công danh". Bấm nút quay lại → trở về màn giới thiệu.
- [ ] Dưới header là dòng "Nhập thông tin để khám phá lợi thế Văn Xương của bạn hoặc con và cách phát huy phù hợp".
- [ ] Form gồm 4 trường theo thứ tự Họ và tên, Ngày sinh dương lịch, Giờ sinh, Giới tính.
- [ ] Dưới form là nút "Xem kết quả phân tích" và dòng ghi chú "🔒 Thông tin của bạn được bảo mật tuyệt đối".

#### AC2 - Dữ liệu mặc định

- [ ] Lần đầu vào màn → form tự điền thông tin của người dùng. Các lần sau → form hiển thị thông tin xem gần nhất.

#### AC3 - Nhập thông tin các trường

- [ ] **Họ và tên**: trường nhập văn bản, kèm nút "Chọn người thân" ở góc phải.
- [ ] **Ngày sinh dương lịch**: bấm vào trường → mở popup chọn ngày. Chọn xong → hiển thị theo định dạng `DD/MM/YYYY` (ví dụ `15/06/1995`).
- [ ] **Giờ sinh**: nhãn có chú thích "(khuyến nghị)" và dòng gợi ý "Thêm giờ sinh để kết quả phân tích chi tiết, chính xác hơn". Bấm vào trường → mở popup chọn giờ. Chọn xong → hiển thị theo định dạng `HH:MM` (ví dụ `08:30`).
- [ ] **Giới tính**: radio button Nam/Nữ, chỉ chọn được 1 giá trị, mặc định chọn "Nam".

#### AC4 - Hiển thị Can Chi và Mệnh theo ngày sinh

- [ ] Đã có ngày sinh → dưới trường Ngày sinh hiển thị năm Can Chi và Mệnh ngũ hành tương ứng (ví dụ "Ất Hợi • Mệnh: Sơn Đầu Hoả"). Đổi ngày sinh → thông tin cập nhật theo năm sinh mới. Chưa có ngày sinh → không hiển thị.

#### AC5 - Chọn thành viên gia đình

- [ ] Bấm "Chọn người thân" → chuyển sang màn chọn thành viên gia đình. Chọn một thành viên → quay lại màn nhập thông tin, tự điền Họ tên, Ngày sinh, Giờ sinh, Giới tính của thành viên đó (nếu có) và cập nhật Can Chi, Mệnh tương ứng.
- [ ] Sau khi tự điền, người dùng vẫn sửa được mọi trường trước khi xem kết quả. Thông tin chỉnh sửa không cập nhật vào hồ sơ của thành viên đã chọn.

#### AC6 - Kiểm tra dữ liệu và xem kết quả (Negative path & Happy path)

- [ ] Chưa chọn ngày sinh dương lịch → bấm "Xem kết quả phân tích" thì hệ thống chặn lại và hiển thị toast "Vui lòng chọn ngày sinh dương lịch!".
- [ ] Thông tin hợp lệ → bấm "Xem kết quả phân tích" thì chuyển sang màn Kết quả phân tích Kích hoạt Trí tuệ & Công danh.

---

### Luồng thao tác

1. Người dùng bấm "Khám phá ngay để kích hoạt" ở màn giới thiệu để vào màn nhập thông tin.
2. Form tự điền thông tin của người dùng (lần đầu) hoặc thông tin xem gần nhất (các lần sau).
3. Người dùng chỉnh sửa thông tin, hoặc bấm "Chọn người thân" để điền nhanh thông tin người thân.
4. Người dùng bấm "Xem kết quả phân tích".
5. Hệ thống kiểm tra ngày sinh. Thiếu ngày sinh thì hiển thị toast lỗi, hợp lệ thì chuyển sang màn Kết quả phân tích.

---

## US-KHHT-03 - Popup lợi thế hiếm có khi lá số có sao Văn Xương và Thân Vượng

**As a** người dùng vừa xem kết quả phân tích có lá số chứa sao Văn Xương ở trạng thái Thân Vượng

**I want to** nhận được popup thông báo lợi thế hiếm có ngay khi vào màn kết quả

**So that** tôi biết mình (hoặc người thân) sở hữu tổ hợp hiếm có giúp phát huy khả năng học hỏi, tư duy và diễn đạt, từ đó quan tâm hơn đến kết quả phân tích và Tháp Văn Xương

---

### Metadata

- **Epic/Feature**: Kích hoạt Trí tuệ & Công danh - Màn kết quả phân tích
- **Priority**: Must Have
- **Estimate**: 2 Story Points (Small)
- **Dependencies**:
  - Engine Bát tự trả về kết quả lá số có sao Văn Xương hay không và trạng thái Thân Vượng.
  - Màn Kết quả phân tích Kích hoạt Trí tuệ & Công danh.
- **Assumptions**:
  - Ảnh minh họa và câu chữ của popup được fix cứng trong ứng dụng theo thiết kế, riêng tỷ lệ X% tính theo AC2.

---

### INVEST Self-check

| Tiêu chí            | Đánh giá | Ghi chú                                                                              |
| --------------------- | ----------- | ------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Popup chỉ phụ thuộc kết quả lá số, tách biệt khỏi nội dung màn kết quả. |
| **N**egotiable  | ✅          | Câu chữ, tỷ lệ và hình minh họa có thể tinh chỉnh.                          |
| **V**aluable    | ✅          | Tạo cảm xúc tích cực, tăng mức độ quan tâm đến kết quả.                 |
| **E**stimable   | ✅          | Popup tĩnh với một điều kiện hiển thị, dễ ước lượng.                     |
| **S**mall       | ✅          | Hoàn thành trong vài giờ làm việc.                                              |
| **T**estable    | ✅          | Kiểm thử bằng lá số thỏa và không thỏa điều kiện.                         |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

#### AC1 - Điều kiện hiển thị popup

- [ ] Lá số của người được xem có sao Văn Xương **và** ở trạng thái Thân Vượng → khi vào màn Kết quả phân tích, hiển thị popup lợi thế hiếm có đè lên màn kết quả, phía sau phủ lớp nền tối.
- [ ] Lá số không thỏa đồng thời cả hai điều kiện trên → không hiển thị popup, người dùng xem màn kết quả như bình thường.

#### AC2 - Nội dung popup (Happy path)

- [ ] Popup hiển thị theo thứ tự: ảnh minh họa (cuốn sách mở cùng ngôi sao), tiêu đề "BẠN SỞ HỮU LỢI THẾ HIẾM CÓ", dòng nổi bật "Chỉ X%" và dòng "Người dùng Lịch Việt có đồng thời", tiếp theo là 2 nhãn "Sao Văn Xương" và "Thân Vượng". X là tỷ lệ người dùng Lịch Việt đồng thời có sao Văn Xương và Thân Vượng (tính tương đối, ví dụ "Chỉ 12%").
- [ ] Dưới đường phân cách họa tiết là 2 gạch đầu dòng:
  - "Theo Bát tự, đây là tổ hợp thuận lợi để phát huy khả năng **Học hỏi, tư duy và diễn đạt.**"
  - "Đặt Tháp Văn Xương giúp kích hoạt lợi thế này, **hỗ trợ học vấn và công danh**."

#### AC3 - Đóng popup

- [ ] Popup có icon ✕ ở góc trên bên phải. Bấm ✕ hoặc vùng bên ngoài popup → đóng popup, người dùng tiếp tục xem màn Kết quả phân tích.

---

### Luồng thao tác

1. Người dùng bấm "Xem kết quả phân tích" ở màn nhập thông tin.
2. Hệ thống phân tích lá số. Nếu có sao Văn Xương và Thân Vượng thì hiển thị popup lợi thế hiếm có trên màn kết quả.
3. Người dùng bấm ✕ để đóng popup và xem kết quả phân tích chi tiết.

---

## US-KHHT-04 - Xem kết quả luận giải Văn Xương theo lá số Bát tự

**As a** người dùng vừa nhập thông tin của bản thân hoặc người thân

**I want to** xem lá số Bát tự, biểu đồ ngũ hành và luận giải về sao Văn Xương, trạng thái Thân Vượng/Thân Nhược cùng gợi ý Tháp Văn Xương phù hợp

**So that** tôi hiểu thế mạnh học hỏi của người được xem và chọn được Tháp Văn Xương hợp với lá số để hỗ trợ học tập, công việc

---

### Metadata

- **Epic/Feature**: Kích hoạt Trí tuệ & Công danh - Màn kết quả luận giải
- **Priority**: Must Have
- **Estimate**: 8 Story Points (Large)
- **Dependencies**:
  - Khối lá số Tứ trụ và Biểu đồ Ngũ hành dùng chung với màn kết quả Kích hoạt năng lượng cá nhân ([[Story-KichHoatNangLuongResult]] US-01, US-02).
  - API kết quả luận giải từ server: trả về trường hợp (TH1 – TH3), dữ liệu lá số và toàn bộ nội dung luận giải, gợi ý chọn tháp, sản phẩm gợi ý theo lá số.
  - Màn chi tiết sản phẩm Tháp Văn Xương (US-KHHT-05).
  - Popup lợi thế hiếm có (US-KHHT-03).
- **Assumptions**:
  - Màn kết quả không phân quyền Free/Premium, mọi người dùng đều xem được toàn bộ nội dung.
  - Nội dung luận giải (AC3 – AC5) và sản phẩm gợi ý (AC6) do server trả về theo lá số, ứng dụng không fix cứng câu chữ. Các câu chữ trong AC là ví dụ lấy từ thiết kế. Riêng khối tổng kết Văn Xương (AC2) fix cứng trong ứng dụng.
  - Màn kết quả có 3 trường hợp theo sao Văn Xương và trạng thái thân:

| Trường hợp | Sao Văn Xương | Trạng thái thân |
| ------------- | ---------------- | ------------------ |
| TH1           | Có              | Thân Vượng      |
| TH2           | Không có       | Thân Vượng      |
| TH3           | Có hoặc không | Thân Nhược      |

---

### INVEST Self-check

| Tiêu chí            | Đánh giá | Ghi chú                                                                                                 |
| --------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| **I**ndependent | ✅          | Tái sử dụng khối lá số và biểu đồ ngũ hành, các khối luận giải tách biệt.              |
| **N**egotiable  | ✅          | Nội dung do server trả về, tinh chỉnh không cần phát hành lại ứng dụng.                       |
| **V**aluable    | ✅          | Là giá trị cốt lõi của tính năng, dẫn người dùng tới mua tháp.                             |
| **E**stimable   | ✅          | Bố cục rõ, phần dùng chung đã có sẵn.                                                           |
| **S**mall       | ⚠️        | Nhiều khối nội dung thay đổi theo 3 trường hợp, có thể tách story theo khối khi lên sprint. |
| **T**estable    | ✅          | Kiểm thử bằng lá số mẫu cho từng trường hợp.                                                   |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

#### AC1 - Header và thông tin người xem

- [ ] Header gồm nút quay lại và tiêu đề "Kết quả luận giải". Bấm nút quay lại → trở về màn nhập thông tin.
- [ ] Dưới header là họ tên, ngày sinh dương lịch kèm ngày âm lịch, giờ sinh kèm tên giờ nếu có (ví dụ "05:30 · Giờ Mão") và giới tính.

#### AC2 - Khối lá số Bát tự

- [ ] Tiêu đề "Lá số Bát tự của bạn"
- [ ] Bảng lá số Tứ trụ hiển thị và tính toán giống màn kết quả Kích hoạt năng lượng cá nhân.
- [ ] Hàng thần sát cuối bảng lá số hiển thị các thần sát của từng trụ. Lá số có sao Văn Xương → "Văn Xương" hiển thị ở các trụ có sao này (ví dụ có ở trụ Năm và trụ Tháng thì hiển thị ở cả 2 trụ).
- [ ] TH1 → dưới bảng lá số hiển thị khối tổng kết Văn Xương, nội dung fix cứng trong ứng dụng gồm tiêu đề "BẠN CÓ SAO VĂN XƯƠNG" và dòng "Hỗ trợ khả năng học hỏi, sáng tạo, diễn đạt và phát triển công danh".
- [ ] TH3 → dưới bảng lá số hiển thị khối tổng kết gồm tiêu đề và các gạch đầu dòng:
  - Tiêu đề: có sao Văn Xương → "BẠN CÓ SAO VĂN XƯƠNG – THÂN NHƯỢC". Không có sao Văn Xương → "BẠN KHÔNG CÓ SAO VĂN XƯƠNG – THÂN NHƯỢC".
  - Nội dung gạch đầu dòng do server trả về, ví dụ "Bạn là người nhân ái, bao dung, có khả năng tư duy, học hỏi và sáng tạo." và "Do Thân nhược, bạn chưa phù hợp đặt tháp kích hoạt sao Văn Xương. Bạn cần cân bằng năng lượng theo bản mệnh."
- [ ] TH2 → không hiển thị khối tổng kết dưới bảng lá số.

#### AC3 - Khối Biểu đồ Ngũ hành

- [ ] Khối chỉ hiển thị ở TH1, TH2, còn TH3 thì không hiển thị khối Biểu đồ Ngũ hành.
- [ ] Khối có tiêu đề "Biểu đồ Ngũ hành", gồm biểu đồ cột Thập thần, bảng Can – Thiên Can – Địa Chi – Trạng Thái – Trường Sinh và tỷ lệ 5 hành Kim/Thủy/Mộc/Hoả/Thổ, hiển thị và tính toán giống màn kết quả Kích hoạt năng lượng cá nhân.
- [ ] Dưới tỷ lệ 5 hành là khối Can ngày, mở đầu bằng câu "Can ngày là yếu tố đại diện cho bản mệnh trong lá số Bát Tự. Được xác định từ ngày sinh.", tiếp theo là Can ngày, Trạng thái và Dụng thần do server trả về theo lá số (ví dụ "GIÁP", "THÂN VƯỢNG", "THỦY").
- [ ] Phần nhận định của khối Can ngày do server trả về theo trường hợp:
  - **TH1**: 2 gạch đầu dòng "Lá số của bạn có Nhật chủ Thân vượng, sao Văn Xương ở {tên trụ}" (ví dụ "trụ tháng") và "Thân vượng tạo nền để khí chất Văn Xương phát huy: tư duy sáng suốt, tiếp thu tốt, có văn tài và năng lực diễn đạt nổi bật."
  - **TH2**: 2 gạch đầu dòng "Bạn có trạng thái Thân vượng nhưng không có sao Văn Xương." và "Bạn phát triển khả năng học hỏi, tư duy và sáng tạo qua sự rèn luyện kiến thức tích lũy đều góp phần tạo nên thế mạnh riêng."
- [ ] TH1 → dưới khối Can ngày hiển thị khối lợi thế hiếm có, nội dung giống popup US-KHHT-03 (AC2): ảnh minh họa, tiêu đề "BẠN SỞ HỮU LỢI THẾ HIẾM CÓ", dòng "Chỉ X%" (cùng tỷ lệ X với popup), dòng "Người dùng Lịch Việt có đồng thời", 2 nhãn "Sao Văn Xương", "Thân Vượng" và 2 gạch đầu dòng "Theo Bát tự, đây là tổ hợp thuận lợi để phát huy khả năng **Học hỏi, tư duy và diễn đạt**." và "Đặt Tháp Văn Xương giúp kích hoạt lợi thế này, **hỗ trợ học vấn và công danh**.".
- [ ] TH2 → dưới khối Can ngày hiển thị ảnh minh họa (cuốn sách mở cùng ngôi sao), tiêu đề "BẠN KHÔNG CÓ SAO VĂN XƯƠNG – THÂN VƯỢNG" và dòng "Tuy không có sao Văn Xương, bạn vẫn có nền tảng Thân vượng để phát huy khả năng học hỏi và sáng tạo. Đặt tháp Văn Xương để hỗ trợ tập trung, nuôi dưỡng tư duy và vận dụng kiến thức trong học tập, công việc.", cuối khối là đường phân cách họa tiết.

#### AC4 - Khối luận giải ý nghĩa đặt tháp

- [ ] Khối gồm tiêu đề và 4 ý nghĩa (mỗi ý có icon, tiêu đề, mô tả) do server trả về theo 3 yếu tố: trường hợp (TH1 – TH2), Nhật chủ của lá số (Giáp, Ất, …) và nhóm tuổi của người được xem (dưới 19 tuổi là trẻ em, từ 19 tuổi là người lớn). Nội dung lấy từ sheet `TH THÂN VƯỢNG - NHƯỢC` trong file [THÁP VĂN XƯƠNG](https://docs.google.com/spreadsheets/d/1diRZnsMM4shJ0fecRM9RWTQ6rDHP4MEPH_uQaYpyv-8/edit?usp=sharing).
- [ ] Ví dụ TH1 (có sao Văn Xương – Thân Vượng), người lớn, Nhật chủ Giáp/Ất:

  - Tiêu đề: "LỢI ÍCH KHI ĐẶT THÁP"
  - Lợi ích:

    - **Hỗ trợ tư duy, diễn đạt và sáng tạo**: "Hướng đến phát huy khả năng học hỏi, nghiên cứu và trình bày ý tưởng rõ ràng, giúp bạn vận dụng kiến thức vào giải quyết vấn đề và phát triển chuyên môn."
    - **Nuôi dưỡng lòng nhân ái, biết sẻ chia**: "Bồi đắp đức Nhân của Nhật chủ Giáp Mộc, khuyến khích sự bao dung, quan tâm và sẵn lòng giúp đỡ người khác, vun đắp những mối quan hệ bằng sự chân thành."
    - **Bồi đắp sự khiêm nhường, ứng xử đúng mực**: "Phát huy đức Lễ gắn với Văn Xương thuộc Hỏa, hướng đến cách giao tiếp có chừng mực, biết kính trên nhường dưới và tôn trọng mọi người."
    - **Hỗ trợ chuyển kiến thức thành kết quả**: "Việc đặt tháp mang ý nghĩa hỗ trợ phát huy trí tuệ cùng đức Nhân và đức Lễ. Kết hợp với quá trình trau dồi chuyên môn và nỗ lực thực tế, bạn từng bước tạo dựng uy tín, được tin tưởng và ghi nhận bằng năng lực của mình."

#### AC5 - Khối Chọn Tháp Văn Xương

- [ ] Khối Chọn Tháp Văn Xương (AC5) và Sản phẩm gợi ý (AC6) chỉ hiển thị ở TH1, TH2. TH3 → không hiển thị các khối này.
- [ ] Khối có tiêu đề "CHỌN THÁP VĂN XƯƠNG NHẬN HƯỚNG DẪN KÍCH HOẠT RIÊNG", dòng "Khi mua tháp, bạn sẽ nhận được hướng dẫn phù hợp với kết quả tra cứu" và 4 mục icon "Ngày & giờ kích hoạt", "Hướng đặt", "Vị trí đặt", "Thanh tẩy Tháp".
- [ ] Tháp được gợi ý theo hành của Thập thần. [Màu tháp] và các sản phẩm gợi ý ở AC6 tương ứng với hành đó.
- [ ] Phần gợi ý chọn tháp do server trả về theo trường hợp và lá số. Các phần [thập thần], [hành], [màu tháp] và [số mẫu tháp] do hệ thống tính theo lá số, [số mẫu tháp] khớp với số sản phẩm gợi ý ở AC6. Ví dụ:
  - **TH1**: "Bạn có sao Văn Xương cùng nền tảng Thân vượng. Lợi thế đặc biệt để phát huy tư chất sẵn có. Với [thập thần] thuộc hành [hành], chọn Tháp Văn Xương màu [màu tháp]" và "[Số mẫu tháp] mẫu tháp dưới đây được gợi ý với chất liệu và màu sắc phù hợp với hành [hành]. Đặt tháp kích hoạt sao Văn Xương mang ý nghĩa phát huy lợi thế, hỗ trợ học hỏi, sáng tạo, diễn đạt và tạo dựng uy tín bằng tri thức." (ví dụ "Với Thực Thần – Thương Quan thuộc hành Thủy, chọn Tháp Văn Xương màu Đen hoặc Xanh dương", "Hai mẫu tháp dưới đây…")
  - **TH2**: "Với người Thân vượng có [thập thần] thuộc hành [hành]. Ưu tiên chọn Tháp Văn Xương màu [màu tháp]." và "[Số mẫu tháp] mẫu Tháp Văn Xương dưới đây được gợi ý với chất liệu và màu sắc phù hợp, như lời nhắc nuôi dưỡng tư duy, sáng tạo và vận dụng kiến thức."

#### AC6 - Sản phẩm Tháp Văn Xương gợi ý

- [ ] Hiển thị danh sách sản phẩm gợi ý do server trả về theo lá số, mỗi thẻ gồm ảnh, tên sản phẩm, màu và hành (ví dụ "Màu xanh | Hành Mộc"), chất liệu, giá bán, giá gốc gạch ngang, dòng "Đã bao gồm hướng dẫn kích hoạt riêng" và nút "Xem sản phẩm".
- [ ] Bấm "Xem sản phẩm" → mở màn chi tiết sản phẩm tương ứng (US-KHHT-05).
- [ ] Server không trả về sản phẩm gợi ý → không hiển thị khối danh sách sản phẩm.

#### AC7 - Khối Ưu tiên cân bằng năng lượng (TH3)

- [ ] TH3 → dưới khối tổng kết ở AC2 là khối cuối màn, gồm ảnh minh họa, tiêu đề "ƯU TIÊN CÂN BẰNG NĂNG LƯỢNG", dòng "Thân nhược khiến bạn khó phát huy hết khả năng tư duy, học hỏi và làm việc. Cân bằng năng lượng phù hợp với bản mệnh giúp bạn xây dựng nền tảng ổn định để phát huy năng lực tốt hơn." và nút "Khám phá cách cân bằng năng lượng".
- [ ] Bấm "Khám phá cách cân bằng năng lượng" → mở màn kết quả tính năng Kích hoạt năng lượng cá nhân với thông tin người xem đã nhập ở bên kíhc hoạt học tập.

---

### Luồng thao tác

1. Người dùng bấm "Xem kết quả phân tích" ở màn nhập thông tin.
2. Hệ thống phân tích lá số, xác định trường hợp (TH1 – TH3) và hiển thị màn kết quả tương ứng. TH1 hiển thị thêm popup lợi thế hiếm có (US-KHHT-03).
3. TH1, TH2: người dùng cuộn xem lá số, biểu đồ ngũ hành, luận giải và gợi ý chọn tháp, bấm "Xem sản phẩm" để xem chi tiết Tháp Văn Xương được gợi ý.
4. TH3: người dùng xem lá số và khối tổng kết Thân nhược, bấm "Khám phá cách cân bằng năng lượng" để sang tính năng Kích hoạt năng lượng cá nhân.

---

## US-KHHT-05 - Xem chi tiết sản phẩm Tháp Văn Xương

**As a** người dùng vừa xem gợi ý Tháp Văn Xương ở màn kết quả luận giải

**I want to** xem chi tiết sản phẩm Tháp Văn Xương được gợi ý

**So that** tôi có đủ thông tin để quyết định mua tháp phù hợp với lá số

---

### Metadata

- **Epic/Feature**: Kích hoạt Trí tuệ & Công danh - Màn chi tiết sản phẩm
- **Priority**: Must Have
- **Estimate**: 2 Story Points (Small)
- **Dependencies**:
  - Màn chi tiết sản phẩm của Kích hoạt năng lượng ([[Story-KichHoatNangLuongResultPremium]]).
  - Màn Kết quả luận giải Văn Xương (US-KHHT-04).
- **Assumptions**:
  - Màn chi tiết sản phẩm Tháp Văn Xương dùng chung bố cục và nội dung với màn chi tiết sản phẩm của Kích hoạt năng lượng.
  - Nội dung hướng dẫn kích hoạt (ngày & giờ kích hoạt, hướng đặt, vị trí đặt) do server trả về theo lá số đã tra cứu.

---

### INVEST Self-check

| Tiêu chí            | Đánh giá | Ghi chú                                                                 |
| --------------------- | ----------- | ------------------------------------------------------------------------ |
| **I**ndependent | ✅          | Tái sử dụng màn chi tiết sản phẩm của Kích hoạt năng lượng. |
| **N**egotiable  | ✅          | Nội dung khối dành riêng cho bạn có thể tinh chỉnh.              |
| **V**aluable    | ✅          | Là bước dẫn người dùng tới mua tháp.                            |
| **E**stimable   | ✅          | Màn đã có sẵn, dễ ước lượng.                                   |
| **S**mall       | ✅          | Hoàn thành trong một sprint.                                          |
| **T**estable    | ✅          | Kiểm thử được điều hướng và nội dung hiển thị.              |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

#### AC1 - Mở màn chi tiết sản phẩm

- [ ] Bấm "Xem sản phẩm" ở màn Kết quả luận giải (US-KHHT-04, AC6) → mở webview màn chi tiết của đúng Tháp Văn Xương đã chọn, theo cách mở như các sản phẩm của Kích hoạt năng lượng.

#### AC2 - Nội dung màn chi tiết sản phẩm

- [ ] Sản phẩm thuộc dòng Tháp Văn Xương → khối nội dung dành riêng cho bạn fix cứng, gồm tiêu đề "MUA THÁP – NHẬN HƯỚNG DẪN DÀNH RIÊNG CHO BẠN", dòng "Sau khi mua tháp, Lịch Việt sẽ gửi hướng dẫn đến bạn" và 3 mục (mỗi mục có icon):
  - "Chọn tháp phù hợp: Chất liệu và màu sắc theo kết quả Bát tự."
  - "Hướng và vị trí đặt: Xác định vị trí đặt tháp dành riêng cho bạn"
  - "Ngày giờ và cách đặt tháp: Thời điểm phù hợp cùng hướng dẫn thực hiện từng bước"

#### AC3 - Hướng dẫn kích hoạt sau khi mua

- [ ] Đặt hàng hoặc thanh toán Tháp Văn Xương thành công → người dùng xem được hướng dẫn kích hoạt riêng theo kết quả tra cứu, gồm ngày & giờ kích hoạt, hướng đặt và vị trí đặt.
- [ ] Đơn hàng đã thanh toán → người dùng xem lại hướng dẫn kích hoạt ở mục Vật phẩm của tôi.

#### AC4 - Điều hướng

- [ ] Bấm nút quay lại → trở về màn Kết quả luận giải.

---

### Luồng thao tác

1. Người dùng bấm "Xem sản phẩm" ở màn Kết quả luận giải.
2. Hệ thống mở màn chi tiết sản phẩm Tháp Văn Xương tương ứng.
3. Người dùng xem chi tiết sản phẩm, hoặc bấm quay lại để trở về màn Kết quả luận giải.
4. Người dùng đặt hàng hoặc thanh toán thành công → xem hướng dẫn kích hoạt riêng. Sau đó, khi đơn đã thanh toán, người dùng xem lại hướng dẫn ở mục Vật phẩm của tôi.

---

## Yêu cầu thống kê & Deeplink

### Deeplink

| Deeplink                                      | Màn mở ra                             | Ghi chú                                             |
| --------------------------------------------- | --------------------------------------- | ---------------------------------------------------- |
| `lichviet://?screen=kich_hoat_hoc_tap`        | Màn giới thiệu (US-KHHT-01)          | Gắn ở khối tính năng Trang chủ, noti, popup.   |
| `lichviet://?screen=kich_hoat_hoc_tap_ketqua` | Màn Kết quả luận giải (US-KHHT-04) | Bỏ qua màn giới thiệu và màn nhập thông tin. |

- [ ] Mở deeplink màn kết quả → hiển thị kết quả theo thông tin xem gần nhất. Chưa từng xem → dùng thông tin hồ sơ của người dùng. Hồ sơ chưa có ngày sinh → mở màn nhập thông tin (US-KHHT-02).
- [ ] Mở deeplink màn kết quả, lá số thuộc TH1 → vẫn hiển thị popup lợi thế hiếm có (US-KHHT-03).

### Log `screen_view`

- [ ] Mỗi lần màn hoặc popup hiển thị → bắn 1 sự kiện `screen_view` với `screen_name` tương ứng:

| Màn / popup                            | `screen_name`             | Tham số thêm |
| --------------------------------------- | --------------------------- | -------------- |
| Màn giới thiệu (US-KHHT-01)          | `KHHocTap_GioiThieu`      |                |
| Màn nhập thông tin (US-KHHT-02)      | `KHHocTap_NhapThongTin`   |                |
| Popup lợi thế hiếm có (US-KHHT-03)  | `KHHocTap_PopupLoiThe`    |                |
| Màn Kết quả luận giải (US-KHHT-04) | `KHHocTap_KetQua`         |                |
| Màn chi tiết sản phẩm (US-KHHT-05)  | `KHHocTap_ChiTietSanPham` |                |
