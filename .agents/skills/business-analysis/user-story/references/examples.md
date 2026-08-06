# Ví dụ User Story + AC mẫu cho EdTech & Digital School

> 7 ví dụ thực tế từ các domain phổ biến trong sản phẩm giáo dục trực tuyến:
> đăng ký học, thanh toán, theo dõi tiến độ, mentor, chứng chỉ,
> live class, và quản lý doanh nghiệp đối tác.
>
> Tên thương hiệu được generic hóa: Platform X, Partner X, Provider X...

---

## Ví dụ 1: Đăng ký và thanh toán khóa học

### US-ENROLL-001: Đăng ký khóa học và thanh toán qua ví điện tử

**As a** học viên đã có tài khoản BA Zone và liên kết ví điện tử
**I want to** mua khóa học "Business Analysis Fundamentals" và thanh toán bằng ví
**So that** có thể truy cập ngay nội dung học mà không cần chờ xác nhận thủ công

**INVEST Self-check:**

| Tiêu chí  | ✅/⚠️ | Ghi chú                                              |
| ----------- | ------- | ----------------------------------------------------- |
| Independent | ✅      | Liên kết ví đã có (story riêng)                |
| Negotiable  | ✅      | Chưa cố định payment gateway                      |
| Valuable    | ✅      | Học viên được học ngay, BA Zone nhận doanh thu |
| Estimable   | ✅      | Luồng thanh toán tương tự story trước          |
| Small       | ✅      | ~3 ngày dev                                          |
| Testable    | ✅      | AC đo được                                        |

### Tiêu chí nghiệm thu

**1. Thanh toán và enroll thành công - happy path**
- [ ] Khi bấm "Đăng ký ngay" khóa học (khóa còn slot, số dư ví ≥ giá khóa) → hiển thị popup yêu cầu nhập PIN ví để xác nhận thanh toán.
- [ ] Nhập mã PIN hợp lệ → hệ thống trừ tiền từ ví trong vòng 5 giây và tự động enroll học viên vào khóa học.
- [ ] Sau khi enroll thành công → gửi email xác nhận kèm link truy cập và thêm khóa học vào danh sách "Khóa học của tôi".

**2. Số dư ví không đủ**
- [ ] Khi bấm "Đăng ký ngay" nhưng số dư ví < giá khóa học → hệ thống KHÔNG tạo enrollment và KHÔNG trừ tiền.
- [ ] Ngay lập tức hiển thị thông báo lỗi tính toán đúng số tiền thiếu (VD: "Số dư không đủ. Bạn cần thêm 700.000 VND").
- [ ] Trên màn hình lỗi → cung cấp 2 nút hành động: "Nạp tiền vào ví" và "Chọn phương thức khác".

**3. Mất kết nối trong khi xử lý thanh toán**
- [ ] Nếu mạng bị ngắt (trong khoảng 30s) khi hệ thống đang gọi API thanh toán → giao diện hiển thị trạng thái chờ "Đang xác thực giao dịch...".
- [ ] Khi kết nối mạng khôi phục → hệ thống tự động kiểm tra lại trạng thái giao dịch cuối cùng và hiển thị thông báo thành công hoặc thất bại.
- [ ] Hệ thống đảm bảo block giao dịch trùng lặp, tuyệt đối không trừ tiền 2 lần.

---

## Ví dụ 2: Đặt lịch 1-on-1 với Mentor

### US-MENTOR-BOOK-001: Đặt lịch tư vấn 1-on-1 với Mentor BA Zone

**As a** học viên Digital School đang theo học chương trình BA Advanced
**I want to** đặt lịch tư vấn 1-on-1 với mentor có chuyên môn phù hợp
**So that** nhận được hướng dẫn cụ thể cho bài tập thực hành mà không cần chờ buổi học chung

### Tiêu chí nghiệm thu

**1. Đặt lịch thành công**
- [ ] Khi học viên chọn 1 slot trống của Mentor và bấm xác nhận đặt lịch (trong điều kiện còn quota session 1-on-1) → hệ thống tạo thành công booking code (VD: MNT20260615001).
- [ ] Hệ thống tự động sinh link Google Meet và gửi email lịch hẹn cho cả học viên lẫn Mentor.
- [ ] Hệ thống trừ đi 1 session khỏi quota tháng của học viên và lên lịch gửi reminder trước 1 giờ qua email/app notification.

**2. Race condition - slot bị người khác đặt trước**
- [ ] Trường hợp 2 học viên cùng bấm đặt chung 1 slot ở cùng thời điểm → hệ thống chỉ ghi nhận cho request tới trước.
- [ ] Request tới sau (bị trùng) → hệ thống KHÔNG trừ session quota và KHÔNG tạo booking.
- [ ] Hiển thị thông báo "Slot này vừa được đặt. Vui lòng chọn slot khác" và refresh lại lưới thời gian trống của Mentor.

**3. Mentor hủy buổi tư vấn**
- [ ] Khi Mentor thao tác hủy buổi tư vấn đã đặt (ít nhất 6 tiếng trước giờ hẹn) → hệ thống tự động hoàn lại 1 session vào quota tháng của học viên.
- [ ] Gửi thông báo cho học viên kèm lý do hủy và tự động đề xuất 3 slot thay thế của Mentor đó trong 7 ngày tới.
- [ ] Hệ thống lưu log đánh dấu lịch hủy vào hồ sơ Mentor để team QA nội bộ theo dõi chất lượng.

---

## Ví dụ 3: Theo dõi tiến độ học

### US-PROGRESS-001: Xem báo cáo tiến độ học cá nhân

**As a** học viên đang theo học nhiều khóa học song song trên BA Zone
**I want to** xem dashboard tiến độ học cá nhân theo từng khóa
**So that** biết mình đang ở đâu trong lộ trình và ưu tiên ôn tập những phần chưa hoàn thành

### Tiêu chí nghiệm thu

**1. Hiển thị dashboard tiến độ đúng**
- [ ] Khi truy cập mục "Tiến độ học của tôi" → danh sách các khóa học đang tham gia hiển thị kèm % hoàn thành, số bài đã xem và số bài còn lại.
- [ ] Với mỗi khóa học đang dang dở → UI có highlight trực quan bài học tiếp theo cần làm để user bấm vào học tiếp được ngay.
- [ ] Dữ liệu tiến độ (progress bar) được cập nhật theo thời gian thực (tối đa 1 phút) sau khi user hoàn thành một video bài học.

**2. Học viên chưa bắt đầu khóa học**
- [ ] Với những khóa học đã mua nhưng chưa xem bài nào → dashboard hiển thị "0% hoàn thành" thay vì để trống hoặc báo lỗi.
- [ ] Trạng thái khóa học lúc này hiển thị nút "Bắt đầu học ngay!" với CTA rõ ràng.

**3. Dữ liệu tiến độ không đồng bộ sau khi học offline**
- [ ] Khi học viên xem và hoàn thành bài học ở chế độ không có mạng → ứng dụng lưu tạm tiến độ tại local.
- [ ] Khi thiết bị kết nối lại internet → hệ thống tự động đồng bộ tiến độ local lên server trong vòng 60 giây.
- [ ] Đảm bảo % hoàn thành được cộng dồn chính xác, không bị lỗi ghi đè (reset về số cũ trên server) và hiển thị thông báo "Tiến độ đã được đồng bộ".

---

## Ví dụ 4: Cấp phát chứng chỉ hoàn thành khóa học

### US-CERT-001: Cấp chứng chỉ hoàn thành khóa học cho học viên Digital School

**As a** học viên vừa hoàn thành 100% khóa học và đạt điểm kiểm tra cuối khóa
**I want to** nhận chứng chỉ hoàn thành có tên tôi, tên khóa học và mã xác thực
**So that** có bằng chứng cụ thể để cập nhật vào LinkedIn và hồ sơ xin việc

### Tiêu chí nghiệm thu

**1. Cấp chứng chỉ tự động khi đủ điều kiện**
- [ ] Khi học viên thỏa mãn điều kiện hoàn thành 100% bài học VÀ đạt ≥ 70% điểm bài kiểm tra cuối khóa → hệ thống tự động sinh chứng chỉ PDF.
- [ ] File PDF chứng chỉ chứa tên học viên, khóa học và 1 mã xác thực duy nhất (VD: CERT-BAF-2026-00123).
- [ ] Hệ thống tự động gửi chứng chỉ qua email trong vòng 5 phút và cập nhật vào mục "Thành tích của tôi" của user.

**2. Học viên chưa hoàn thành đủ điều kiện**
- [ ] Nếu học viên hoàn thành 100% bài học nhưng điểm kiểm tra cuối khóa < 70% → hệ thống KHÔNG cấp chứng chỉ.
- [ ] Tại màn hình kết quả kiểm tra → hiển thị thông báo: "Bạn cần đạt tối thiểu 70% để nhận chứng chỉ. Điểm hiện tại: [X]%. Làm lại bài kiểm tra?".
- [ ] Hệ thống block nút làm lại bài kiểm tra trong vòng 24 giờ sau lần thi trượt.

**3. Xác thực chứng chỉ từ bên ngoài**
- [ ] Khi nhà tuyển dụng (hoặc người chưa đăng nhập) truy cập link verify.bazone.vn và nhập mã xác thực chứng chỉ.
- [ ] Nếu mã hợp lệ → hiển thị thông tin xác thực: Tên học viên, Tên khóa học, Ngày cấp, và Trạng thái hoàn thành.
- [ ] Nếu mã không tồn tại hoặc bị giả mạo → hiển thị cảnh báo đỏ "Mã chứng chỉ không hợp lệ hoặc đã bị thu hồi".

---

## Ví dụ 5: Live Class & Q&A

### US-LIVE-001: Đặt câu hỏi trong buổi Live Class của BA Zone

**As a** học viên đang tham dự live class trực tuyến
**I want to** gửi câu hỏi bằng văn bản trong khi giảng viên đang trình bày
**So that** không làm gián đoạn bài giảng nhưng vẫn được giải đáp vào phần Q&A cuối buổi

### Tiêu chí nghiệm thu

**1. Gửi câu hỏi thành công**
- [ ] Trong thời gian buổi live class đang diễn ra (trạng thái Live), user nhập câu hỏi (tối đa 500 ký tự) và ấn "Gửi" → câu hỏi lập tức xuất hiện trong hàng đợi Q&A của giảng viên.
- [ ] Tại phía user → câu hỏi hiển thị trạng thái "Đã gửi - Chờ được giải đáp".
- [ ] Các học viên khác trong lớp thấy câu hỏi này và có thể ấn nút vote "Tôi cũng có câu hỏi này" (+1) để đẩy độ ưu tiên.

**2. Câu hỏi trùng lặp đã có người hỏi**
- [ ] Khi nội dung câu hỏi user chuẩn bị gửi có độ tương đồng cao (similarity ≥ 80%) với một câu hỏi đang có trong hàng đợi.
- [ ] Hệ thống chặn hành động gửi mới và popup gợi ý: "Câu hỏi tương tự đã được gửi. Bạn có muốn vote ủng hộ không?".
- [ ] Nếu user chọn Đồng ý → hệ thống cộng thêm 1 vote vào câu hỏi gốc thay vì tạo ra 1 dòng câu hỏi rác mới.

**3. Buổi live class đã kết thúc**
- [ ] Khi buổi live class chuyển sang trạng thái "Ended" (Đã kết thúc).
- [ ] UI tự động khóa (ẩn) ô text nhập câu hỏi và nút "Gửi".
- [ ] Thay thế ô nhập bằng dòng chữ: "Buổi học đã kết thúc. Xem lại recording hoặc đặt câu hỏi trong diễn đàn khoá học", kèm link click dẫn tới Forum tương ứng.

---

## Ví dụ 6: Quản lý tài khoản doanh nghiệp đối tác

### US-B2B-ENROLL-001: Doanh nghiệp cấp phát khóa học cho nhân viên theo lô

**As a** HR Manager của doanh nghiệp đối tác đã ký hợp đồng với BA Zone
**I want to** cấp phát khóa học cho danh sách nhân viên bằng cách upload file Excel
**So that** không phải enroll từng người một khi số lượng nhân viên lớn (> 20 người)

### Tiêu chí nghiệm thu

**1. Upload và enroll thành công**
- [ ] Khi HR Manager upload file Excel đúng template chứa danh sách nhân viên hợp lệ VÀ số lượng license còn lại trong tài khoản ≥ số lượng trong file.
- [ ] Bấm "Xác nhận cấp phát" → hệ thống quét và enroll tất cả nhân viên trong file vào khóa học.
- [ ] Hệ thống hiển thị báo cáo enroll thành công (VD: 50/50) và gửi email chào mừng (kèm thông tin login) đến từng nhân viên được cấp phát.

**2. File có một số dòng dữ liệu không hợp lệ**
- [ ] Khi file Excel có chứa dữ liệu lỗi (sai định dạng email, trùng email đã cấp phát).
- [ ] Giao diện upload hiển thị preview bảng dữ liệu, trong đó bôi đỏ/highlight các dòng lỗi và giải thích lỗi bên cạnh (VD: "Email sai định dạng").
- [ ] Hệ thống cung cấp nút "Chỉ enroll các dòng hợp lệ" hoặc yêu cầu HR upload file mới. Các dòng lỗi tuyệt đối KHÔNG được enroll.

**3. Không đủ license**
- [ ] Khi tổng số lượng nhân viên trong file upload > số license còn lại của doanh nghiệp.
- [ ] Hệ thống block hoàn toàn tiến trình cấp phát và thông báo: "Bạn cần thêm [X] license. Liên hệ BA Zone để mua thêm".
- [ ] Không có nhân viên nào được enroll, hệ thống không bị trừ license âm, đồng thời cung cấp link liên hệ mua thêm.

---

## Ví dụ 7: Diễn đàn học tập & Cộng đồng BA Zone

### US-FORUM-COMPLAINT-001: Báo cáo nội dung vi phạm trong diễn đàn

**As a** thành viên cộng đồng BA Zone đang tham gia thảo luận trong diễn đàn
**I want to** báo cáo bài viết hoặc bình luận có nội dung vi phạm quy tắc cộng đồng
**So that** được xem xét và xử lý kịp thời, giữ chất lượng thảo luận trong cộng đồng

### Tiêu chí nghiệm thu

**1. Gửi báo cáo vi phạm thành công**
- [ ] Khi user ấn nút "Báo cáo" tại một bài viết/bình luận → hệ thống mở modal chọn lý do vi phạm và ô text nhập mô tả thêm.
- [ ] Bấm Gửi → hệ thống lưu lại báo cáo thành công, tạo mã ticket nội bộ (VD: RPT20260506001) và auto-assign cho Moderator đang trực ca.
- [ ] Nếu một bài viết/bình luận bị báo cáo bởi ≥ 5 user khác nhau trong vòng 1 giờ → hệ thống tự động làm mờ/ẩn bài viết đó và gán nhãn "Đang chờ Moderator duyệt".

**2. Theo dõi trạng thái xử lý báo cáo**
- [ ] Khi Moderator đổi trạng thái của ticket báo cáo từ "Đang xem xét" sang "Đã xử lý" hoặc "Không vi phạm".
- [ ] Hệ thống tự động đẩy notification thông báo kết quả xử lý và lý do cho user đã report.
- [ ] Trong trường hợp vi phạm được xác nhận đúng → user nhận thêm thông báo "Cảm ơn bạn đã góp phần xây dựng cộng đồng".

**3. Báo cáo không có phản hồi sau 48 giờ (SLA Breach)**
- [ ] Khi một ticket báo cáo tồn tại trên 48 giờ ở trạng thái "Chưa xử lý" hoặc "Đang xem xét".
- [ ] Hệ thống tự động escalate ticket (gắn cờ cảnh báo đỏ) cho cấp quản lý Community Manager.
- [ ] Tự động gửi một thông báo xin lỗi phản hồi chậm đến user đã report và cam kết thời hạn xử lý mới (trong vòng 12 giờ).

---

## Patterns rút ra từ 7 ví dụ trên

1. **Persona luôn cụ thể**: không bao giờ "user" chung, luôn có context
   (học viên Digital School đang theo học BA Advanced, HR Manager đã ký hợp đồng...)
2. **Goal đo lường được**: có số liệu cụ thể (50 nhân viên, ≥ 70% điểm, 500 ký tự)
3. **So that focus business outcome**: nhận doanh thu ngay, giảm thao tác thủ công,
   có bằng chứng cho nhà tuyển dụng
4. **AC Bullet format logic**: Mỗi gạch đầu dòng mô tả rõ Điều Kiện + Hành Động → Kết Quả, giúp QA đọc là có thể test ngay mà không bị thiếu ngữ cảnh.
5. **Edge case mang tính domain**: race condition lịch mentor, license không đủ,
   câu hỏi trùng lặp, kết nối gián đoạn khi thi
6. **Số liệu trong AC**: thời gian phản hồi (5 phút, 60 giây), ngưỡng điểm (≥ 70%),
   số lượng báo cáo để tự ẩn (≥ 5)
7. **Tránh implementation detail**: không nói API name, DB schema, framework cụ thể
