---
id: Spec-KichHoatNangLuong
type: spec
status: draft
project: Lich_Viet
created: 2026-07-13
linked-to: [[Design-MOC]]
---

# Đặc tả UX/UI: Thiết kế màn hình giới thiệu và nhập thông tin Kích hoạt năng lượng cá nhân

Tài liệu này mô tả chi tiết kiến trúc thông tin, bố cục thiết kế và các hành vi tương tác cho luồng tính năng **Kích hoạt năng lượng cá nhân** gồm 2 màn hình chính:
1. **Màn hình giới thiệu tính năng (Landing/Intro Screen - `KichHoatNangLuong_Intro.html`)**
2. **Màn hình nhập thông tin kích hoạt (Input Screen - `KichHoatNangLuong_Input.html`)**

---

## 1. Màn hình Giới thiệu Tính năng (`KichHoatNangLuong_Intro.html`)
Màn hình này nhằm giới thiệu khái quát lợi ích và thu hút người dùng bắt đầu trải nghiệm tính năng, được thiết kế với phân cấp trực quan rõ ràng, tránh sự dàn trải:

1. **Khối Biểu Ngữ & Sơ Đồ Ngũ Hành Nghệ Thuật (Đầu trang):**
   * Tiêu đề chính xếp đầu tiên: dòng 1 là **"KÍCH HOẠT"** (màu lục sẫm, cỡ chữ `24px`) và dòng 2 là **"NĂNG LƯỢNG CÁ NHÂN"** (màu vàng đất `--gold`, **cỡ chữ `20px`**). Khoảng cách giữa hai dòng tiêu đề được căn chỉnh chính xác **`5px`** (trong khoảng 4-6px).
   * Dòng mô tả ngắn gọn (Slogan 1) ngay dưới tiêu đề: **"Khám phá điểm mạnh, điểm cần cân bằng / và cách kích hoạt năng lượng phù hợp."** (chữ đứng bình thường, được chia thành 2 dòng, **cỡ chữ `15px`**). Khoảng cách từ dòng tiêu đề 2 đến mô tả được căn chỉnh chính xác **`16px`** (trong khoảng 14-18px).
   * Sơ đồ Ngũ Hành chính thức [ChatGPT Image 17_05_01 13 thg 7, 2026.png](file:///Users/doyen/Downloads/Lich_Viet/prototype/ChatGPT%20Image%2017_05_01%2013%20thg%207,%202026.png) nằm dưới slogan, hiển thị bằng thẻ `img` trong vùng chứa `.wuxing-container` có chiều cao cố định **`150px` (chiếm đúng 1/6 chiều cao màn hình mockup mới `896px`)**. Khoảng cách từ dòng mô tả (Slogan 1) đến sơ đồ Ngũ hành được căn chỉnh chính xác **`14px`** (trong khoảng 12-16px). Sử dụng kiểu co giãn `object-fit: contain;` kết hợp màu nền kem của container trùng khớp với nền ảnh để sơ đồ hiển thị trọn vẹn không bị cắt xén, đồng thời tạo cảm giác liền mạch tràn viền tự nhiên sang hai bên sườn.
   * Một nút quay lại nổi hình tròn màu trắng có mũi tên (`<-`) nằm ở góc trái trên cùng đè lên nền sơ đồ để quay lại màn hình trước.
   * Ngay dưới sơ đồ Ngũ hành, hiển thị đoạn văn bản giới thiệu thứ hai: **"Dựa trên ngày sinh và giờ sinh, hệ thống sẽ / phân tích bản đồ ngũ hành và đưa ra kết quả / dành riêng cho bạn"** (cỡ chữ **`15px`**, trong đó cụm từ "dành riêng cho bạn" được bôi đậm màu đỏ, chữ được chia làm 3 dòng cân đối).

2. **Khối Khung Gộp 6 Kết Quả Nhận Được (Unified 3x2 Benefits Grid Frame):**
   * Bố cục 6 kết quả được đặt trong cùng 1 khung viền bo tròn góc (`.benefits-frame`), viền màu vàng đất (`rgba(182, 127, 48, 0.4)`), tiêu đề *"KẾT QUẢ BẠN NHẬN ĐƯỢC"* được lồng khéo léo vào giữa phần viền trên của khung, hai bên tiêu đề có 2 biểu tượng hoa sen vàng trang trí.
   * Bên trong khung chia thành lưới 2 cột và 3 hàng (3x2), ngăn cách bằng các đường phân chia mảnh:
     * **DỤNG THẦN:** Xác định năng lượng chủ đạo phù hợp với bản thân. (Icon Âm Dương)
     * **MÀU SẮC HỖ TRỢ:** Màu sắc giúp cân bằng năng lượng và thu hút vận may. (Icon hoa 5 cánh)
     * **LINH VẬT PHÙ HỢP:** Linh vật phù hợp giúp kích hoạt năng lượng tích cực. (Icon kim cương/pháp bảo)
     * **PHƯƠNG THỨC KÍCH HOẠT:** Gợi ý phương pháp kích hoạt năng lượng hiệu quả cho bạn. (Icon nút thắt vô tận)
     * **QUÝ NHÂN:** Xác định và thu hút những mối quan hệ hỗ trợ bạn. (Icon hai người)
     * **TÀI LỘC:** Gợi ý cách thu hút tài lộc, cải thiện cuộc sống và sự nghiệp. (Icon đồng tiền cổ)

3. **Khối Nhận Kết Quả & Nút CTA Xem Bản Đồ (Cố định chân trang):**
   * Vùng chứa cố định ở đáy màn hình `.fixed-bottom-area` (nền kính mờ bán trong suốt màu kem `rgba(250, 246, 238, 0.85)` kết hợp hiệu ứng `backdrop-filter: blur(12px)`, có viền trên màu vàng đất mờ `rgba(182, 127, 48, 0.12)` và bóng đổ nhẹ lên trên) chứa trực tiếp nút CTA (đã loại bỏ dòng kêu gọi hành động "Nhập thông tin..." và biểu tượng hoa sen).
   * Nội dung bên trong gồm:
     * Nút bấm lớn màu đỏ sẫm truyền thống `#A1201B`, nội dung văn bản được căn giữa, viết chữ thường: **"Xem bản đồ ngũ hành của bạn"** (loại bỏ biểu tượng chevron `>`) chuyển tiếp người dùng sang màn hình điền thông tin `KichHoatNangLuong_Input.html`.
   * Vùng cuộn `.scroller` được cấu hình `padding-bottom: 100px;` để đảm bảo nội dung cuộn có thể hiển thị trọn vẹn trên vùng CTA cố định này.

4. **Hành vi tương tác cuộn trang (Scroll & AppBar Behavior):**
   * Mặc định khi ở đỉnh trang, thanh AppBar ở trạng thái trong suốt và tiêu đề được ẩn đi. Nút quay lại hiển thị dạng nút tròn nổi nền trắng có bóng đổ (`.floating-back-btn`).
   * Khi người dùng cuộn nội dung xuống (khoảng cách cuộn `scrollTop > 50px`), thanh AppBar cố định ở đỉnh màn hình (`.app-bar`) sẽ chuyển sang nền đặc màu kem nhạt `#FAF6EE` kèm viền dưới màu vàng đất mờ `rgba(182, 127, 48, 0.12)`.
   * Tiêu đề **"Kích hoạt năng lượng cá nhân"** (chữ thường, cỡ `16px`, màu lục sẫm, độ đậm `700`) trên AppBar sẽ mờ dần vào (fade-in) kết hợp hiệu ứng trượt nhẹ từ dưới lên (từ `translateY(8px)` về `0`).
   * Nút quay lại hình tròn nổi nền trắng có bóng đổ (`.floating-back-btn`) được giữ nguyên trạng thái thiết kế ban đầu khi cuộn để bảo toàn độ tương phản và nhất quán. Khi cuộn ngược về đỉnh trang, các hiệu ứng này sẽ tự động đảo ngược.

---

## 2. Màn hình Nhập Thông tin Kích hoạt (`KichHoatNangLuong_Input.html`)
Màn hình tiếp nhận dữ liệu người dùng để tiến hành phân tích:

* **Dòng mô tả giới thiệu (Intro Description)**: Nằm ngay trên các trường nhập liệu ở đầu vùng cuộn, có kích thước `15px`, được căn giữa và ngắt làm 2 dòng: dòng 1 có độ đậm trung bình (`font-weight: 500`) màu xanh lục sẫm chính, dòng 2 ("dành riêng cho bạn.") mang màu đỏ sẫm `#A1201B` nổi bật (`font-weight: 700`): *"Nhập thông tin để tạo bản đồ ngũ hành <br> dành riêng cho bạn."*
* **Dữ liệu Mock mặc định (Default Demo Data)**: Khi tải trang lần đầu, hệ thống tự động điền sẵn thông tin mẫu (Họ tên: *Nguyễn Minh Khang*, Ngày sinh: *15/06/1995*, Giờ sinh: *08:30*, Giới tính: *Nam*). Việc này giúp hiển thị ngay kết quả tính toán tuổi và mệnh mẫu nhằm tối ưu hóa trải nghiệm kiểm duyệt giao diện.

1. **Các Khối Nhập Liệu Độc Lập (Stacked Input Groups):**
   * Loại bỏ toàn bộ khung viền lớn bao quanh khối form. Thay vào đó, mỗi trường thông tin được tách thành một khối độc lập gồm hai dòng:
       * **Dòng tiêu đề**: Tiêu đề và biểu tượng icon nằm cạnh nhau (cách nhau `10px`). Có chiều cao cố định là `24px` để đảm bảo khoảng cách đến ô chọn phía dưới luôn bằng nhau trên toàn bộ các trường. Các icon đã được chuyển đổi từ dạng emoji nhiều màu sang một bộ sưu tập icon dạng nét vẽ (SVG line icons) thống nhất màu vàng đất, có cùng kích thước (`18px`) và độ dày nét vẽ đồng bộ.
     * **Dòng ô chọn/nhập bên dưới**:
        * Đối với Họ tên, Ngày sinh, Giờ sinh: Nằm trong một ô nhập liệu độc lập có bo góc màu ngà `#FFFDF9` và viền vàng đất nhạt. Văn bản hiển thị được căn lề trái.
        * Đối với Họ tên: Ở phía bên phải của dòng tiêu đề (cùng hàng với "Họ tên") tích hợp liên kết dạng văn bản trơn màu vàng đất: `"Chọn thành viên ›"` (cỡ chữ `14px`, `font-weight: 500` và sử dụng dấu `›` mềm mại). Vùng nhấn của liên kết này có chiều cao tối thiểu là `44px`. Liên kết này được hiển thị dưới dạng tĩnh phục vụ trình diễn giao diện (không mở ra tấm chọn Bottom Sheet khi nhấn).
        * Đối với Giờ sinh: Có thêm dòng chữ gợi ý phụ (helper text) màu xám dưới ô chọn, có kích thước `13px` và cách ô chọn một khoảng cách đệm trên là `8px`: *"Thêm giờ sinh để kết quả phân tích chính xác hơn."*
        * Đối với Giới tính: Hiển thị dưới dạng các nút radio tròn truyền thống (Nam/Nữ) chia làm 2 phần bằng nhau (mỗi lựa chọn chiếm 50% chiều rộng) và được căn lề trái, nút được chọn sẽ đổi sang màu vàng đất của ứng dụng.

2. **Thông tin Bản mệnh Động dưới Ô chọn Ngày sinh (Inline Destiny Info):**
   * Thay vì khối card riêng biệt ở chân trang, thông tin tuổi và mệnh sẽ hiển thị trực tiếp và gọn gàng ngay bên dưới ô chọn ngày sinh dương lịch (cỡ chữ `14px`, cách ô chọn một khoảng đệm trên là `8px`) sau khi đã điền ngày.
   * Được định dạng chuỗi hiển thị gọn gàng trên một hàng, cách nhau bằng dấu chấm ở giữa: `<strong>[Can Chi]</strong> · Mệnh <strong>[Hành nạp âm]</strong>` (Ví dụ: `<strong>Ất Hợi</strong> · Mệnh <strong>Sơn Đầu Hỏa</strong>`). Chỉ hiển thị Can Chi và Mệnh nạp âm (cả hai được in đậm), không hiển thị số tuổi âm lịch.

3. **Khối CTA Chân Trang (Scrollable Bottom Action Card):**
   * Nằm ở cuối luồng cuộn của trang (không ghim cố định), tự động dịch chuyển xuống dưới khối Bản mệnh động khi được hiển thị. Chứa:
     * Nút bấm chính màu đỏ sẫm: **"Xem kết quả phân tích"** (căn giữa chữ thường) kích hoạt hành động phân tích ngũ hành (chuyển hướng trực tiếp sang màn hình kết quả `KichHoatNangLuong_Result.html` mà không hiển thị thông báo thành công hay tải giả lập).
     * Dòng cam kết bảo mật: **"🔒 Thông tin của bạn được bảo mật tuyệt đối"** (căn giữa, cỡ chữ `13px`).

---

## 3. Màn hình Kết quả Kích hoạt Năng lượng (`KichHoatNangLuong_Result.html`)
Màn hình hiển thị kết quả phân tích Lá số Bát tự và bản đồ ngũ hành cá nhân dựa trên thông tin đã nhập:

1. **Thanh AppBar Cố Định & Nút Quay Lại Đồng Bộ (Đỉnh trang):**
   * Sử dụng thanh AppBar cố định (`.app-bar`) ở trên cùng có chiều cao **`96px`** (gồm `padding-top: 48px`), nền kem `#FAF6EE`, viền dưới màu vàng đất mờ `rgba(182, 127, 48, 0.08)` và bóng đổ nhẹ.
   * Tiêu đề chính hiển thị trên AppBar: **"Kết quả luận giải"** (cỡ chữ `16px`, độ đậm `700`, màu xanh lục sẫm).
   * Nút quay lại dạng hình tròn nổi nền trắng có bóng đổ (`.floating-back-btn`), đường kính `30px`, được căn chỉnh chính xác ở vị trí `top: 56px; left: 20px;` để thẳng hàng theo trục ngang với tiêu đề AppBar.
   * Vùng cuộn `.scroller` cấu hình `padding-top: 96px;` để đẩy nội dung xuống dưới và tránh bị AppBar che khuất.

2. **Tiêu đề phân tích chính (Hero Title):**
   * Tiêu đề **"Lá số Bát tự"** (không viết hoa toàn bộ) nằm ở đầu khối Hero, sử dụng phông chữ **SF Pro** cỡ chữ **`30px`**, được căn giữa trang, giãn dòng `line-height: 1.25`.

3. **Khối Thông Tin Người Xem (Viewer Info Block):**
   * Nằm ngay dưới tiêu đề chính, có khoảng cách trên và dưới là `margin: 16px 0 12px 0`.
   * Thiết kế tối giản, hiển thị trực tiếp văn bản trên nền trang (không sử dụng khung viền, màu nền hay bóng đổ).
   * Phân cấp văn bản:
     * Họ tên người xem: **[Họ tên]** (Ví dụ: *Nguyễn Hiếu Minh*), cỡ chữ **`20px`**, phông chữ **SF Pro** sang trọng, màu vàng đất, độ đậm `700`, được căn giữa trang.
     * Cấu trúc thông tin chia làm 2 cột (`id-grid`) có biểu tượng SVG đi kèm nhãn:
       * Cột 1 (Ngày sinh): Nhãn đi kèm biểu tượng lịch. Hiển thị ngày Dương lịch dạng lớn (`18px` bold, màu sẫm) và ngày Âm lịch phía dưới dạng nhỏ (`15px`, màu xám sẫm `#374151`).
       * Cột 2 (Giờ sinh): Nhãn đi kèm biểu tượng đồng hồ. Hiển thị giờ sinh Dương lịch dạng lớn (`18px` bold, màu sẫm) và giờ Âm chi phía dưới dạng nhỏ (`15px`, màu xám sẫm `#374151`).

4. **Bảng Tứ Trụ & Chi Tiết Bản Mệnh:**
   * Hiển thị bảng phân tích 4 trụ (Năm, Tháng, Ngày, Giờ) cùng Thiên can, Địa chi, Tàng can và Thập thần tương ứng, được bọc trong khung viền vàng đất nhạt tinh tế.

5. **Khối Linh Vật Hộ Thân (Animal Mascot Protection Card):**
   * Đặt ngay dưới khối Dụng thần và màu sắc tương sinh / tương khắc.
   * Tiêu đề lớn: **"Linh vật hộ thân của bạn"** (`24px` bold).
   * Thẻ chứa thông tin flex-row gồm:
     * Hình ảnh con trâu (`mascot_trau.png`, `90x90px` bo góc `12px`, nền `#FAF7F2`) ở phía bên trái.
     * Tên linh vật in hoa **"TRÂU"** (`22px` font SF Pro, màu xanh sẫm `#1F5A3D`) và dòng chữ mô tả **"Biểu tượng của sức mạnh bền bỉ"** (`14px`, màu xám `#555555`) ở phía bên phải.

---

## 4. Quy định kiểu chữ (Typography)
* Toàn bộ giao diện của các màn hình sử dụng thống nhất phông chữ **SF Pro** (bao gồm `SF Pro`, `SF Pro Text`, `SF Pro Display`, `-apple-system`, `BlinkMacSystemFont` trên hệ điều hành iOS/macOS) để đem lại cảm giác tối giản, hiện đại và cao cấp chuẩn hệ điều hành. Riêng các tiêu đề chính hoặc tên người dùng được sử dụng phông chữ **Lora** để tạo điểm nhấn cổ điển, trang trọng.

## 5. Kế hoạch Xác thực (Verification Plan)
* Kiểm tra tính phản hồi và liên kết liền mạch giữa ba màn hình: Intro -> Click CTA -> Input -> Submit -> Result.
* Đảm bảo Khối Thông Tin Người Xem luôn hiển thị đầu tiên trên màn hình kết quả, không bị chồng lấp bởi nút quay lại nổi ở góc trái.
* Xác nhận phân cấp thông tin và định dạng trực quan của Card đạt chuẩn premium.

---
## Related Documents
- [[Design-MOC]]
