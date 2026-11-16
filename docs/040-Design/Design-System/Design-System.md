---
id: Design-System-Main
type: spec
status: draft
project: Lich_Viet
created: 2026-04-16
updated: 2026-11-12
linked-to: "[[Design-MOC]]", "[[Analysis-QuyTrinhBADesignDev]]"
---

# Hệ thống Thiết kế: Token & Component

Bộ token và component chung của Lịch Việt. Figma là nơi gốc, bộ code trong repo là bản đồng bộ để dựng demo HTML.

| Nơi | Vai trò | Đường dẫn |
| --- | --- | --- |
| Figma | Nơi gốc. Designer chỉ sửa token và component ở đây | File [Y-Kien](https://www.figma.com/design/b6o4GAgCeVxtngbWRzDCGB/Y-Kien), trang "Symbols", khung "Góp ý · Components" |
| Figma Trang chủ | Nơi gốc của token và component Trang chủ. File chưa có Variables, token đặt tên theo giá trị trong khung | File [Lich-Viet-App](https://www.figma.com/design/o0hWmJRQOx48gbUPt8rHmt/Lich-Viet-App?node-id=59830-80197), khung "TrangChu_2026" |
| Bộ code demo | Bản đồng bộ từ Figma, BA dùng để dựng demo | `prototype/design-system/` (`tokens.css`, `components.css`) |
| Trang danh mục | Xem component, trạng thái và copy code | `prototype/design-system/index.html`, trên Vercel ở `/design-system/` |
| Quy tắc cho AI | Cách dựng demo, tạo component tạm, đồng bộ từ Figma | `.agents/rules/demo-components.md` |

Quy trình dùng bộ này: xem [[Analysis-QuyTrinhBADesignDev]].

Đây là bộ dùng chung cho toàn app. Token và component đang được cập nhật dần cho đủ.

## 1. Quy ước đặt tên

| Figma | CSS | Ví dụ |
| --- | --- | --- |
| Variable `color/text/primary` | `--color-text-primary` | `color: var(--color-text-primary)` |
| Variable `space/16` | `--space-16` | `padding: var(--space-16)` |
| Text Style `title/md` | class `.text-title-md` | `<h2 class="text-title-md">` |
| Component `Form/Select` | class `lv-select` + `data-component="Form/Select"` | xem trang danh mục |
| Component tạm (chưa có trên Figma) | class `new-…` + `data-component="new/…"` | `new-rating-card` |

## 2. Màu

Màu ngữ nghĩa trỏ tới màu gốc (Primitives). Khi dùng, luôn gọi màu ngữ nghĩa.

| Token | Giá trị | Màu gốc | Dùng cho |
| --- | --- | --- | --- |
| `color/primary` | #007AFF | blue/500 | Nút chính, tiêu đề popup, điểm nhấn |
| `color/primary-dark` | #005CAC | blue/700 | Thanh điều hướng, nút đang bấm |
| `color/text/primary` | #111111 | gray/950 | Chữ chính |
| `color/text/secondary` | #666666 | gray/600 | Chữ phụ |
| `color/text/tertiary` | #8F9AA9 | gray/450 | Placeholder, chữ mờ, nút vô hiệu |
| `color/text/on-primary` | #FFFFFF | white | Chữ trên nền màu chính |
| `color/border/default` | #D5D5D5 | gray/300 | Viền ô nhập, ô chọn |
| `color/border/divider` | #EBEBEB | gray/200 | Đường kẻ giữa các dòng |
| `color/bg/surface` | #FFFFFF | white | Nền màn, nền popup |
| `color/bg/subtle` | #FBFBFB | gray/50 | Nền ô nhập |
| `color/bg/muted` | #E9ECF1 | gray/150 | Nền ô thêm ảnh, nút vô hiệu, nền icon |
| `color/overlay/scrim` | #000000 (65%) | black/a65 | Nền tối sau popup |
| `color/status/success` | #009E64 | green/600 | Ô chọn đã tick, thành công |
| `color/status/danger` | #FF3333 | red/500 | Lỗi |
| `color/status/warning` | #F5A623 | orange/400 | Cảnh báo |

Màu Trang chủ (từ khung TrangChu_2026):

| Token | Giá trị | Dùng cho |
| --- | --- | --- |
| `color/text/strong` | #000000 | Tiêu đề mục, tên người dùng |
| `color/text/body` | #333333 | Nội dung thẻ quảng bá, giờ |
| `color/text/label` | #272727 | Nhãn ô tính năng, tên dòng menu |
| `color/text/accent` | #2473F8 | Dòng phụ dưới tiêu đề mục |
| `color/text/on-image-accent` | #FCFF00 | Ngày lễ, điểm ngày trên ảnh nền |
| `color/text/promo-gold`, `promo-sky` | #920202, #005CAC | Tiêu đề thẻ quảng bá |
| `color/text/horoscope`, `horoscope-label` | #009E64, #001A41 | Thẻ tử vi hàng ngày |
| `color/text/lucky-number` | #D91F39 | Số may mắn |
| `color/border/card`, `border/button` | #E6E6E6, #DDDDDD | Viền thẻ trắng, viền nút pill |
| `color/border/promo-gold`, `promo-sky`, `horoscope` | #F9DC9D, #D0E3E6, #D0E3E6 | Viền thẻ quảng bá, thẻ tử vi |
| `color/bg/horoscope` | #F6FEFF | Nền thẻ tử vi hàng ngày |
| `color/badge/new`, `hot`, `ribbon`, `count` | #FF3333, #E72B3D, #E03B3B, #577BF9 | Nhãn MỚI, Hot, HOT, số đếm |
| `color/chip/success-*` | #D7F5EA, #C2EADB, #009E64 | Chip chủ đề (nền, viền, chữ) |
| `color/calendar/weekday`, `sunday` | #00549C, #EC260C | Chữ thứ trong dải tuần |
| `color/calendar/weekday-bg`, `sunday-bg` | #F2FDFF, #FFEBEB | Nền hàng thứ |
| `color/calendar/selected`, `divider`, `hero-date` | #02B875, #D8D8D8, #012E80 | Viền ngày đang chọn, vạch ngăn, số ngày lớn |
| `color/chart/grid`, `value` | #E3E3E3, #555555 | Lưới và số % của biểu đồ |
| `color/term/earth`, `fire`, `water`, `metal`, `wood` | #CFA92B, #D14B5B, #4978B0, #949494, #4B904B | Ô màu dải tiết khí |
| `color/tab/active`, `inactive` | #4D5ADD, #7D7D7D | Nhãn tab |

Gradient: `gradient/header` (nền header), `gradient/cta` (nút xanh trên thẻ quảng bá), `gradient/chart-bar` (cột biểu đồ, cam → xám).
Bóng: `shadow/header`, `shadow/card`, `shadow/card-lg`, `shadow/button`, `shadow/badge`, `shadow/cta-text`.

Màu riêng tính năng Tử vi vận hạn (tone xanh lá). Bổ sung từ demo `tuvi_vanhan_matdoisong.html`, chờ designer đưa lên Figma:

| Token | Giá trị | Dùng cho |
| --- | --- | --- |
| `color/vanhan/accent` | #00804F | Câu nhấn hero, nút chữ "Xem vận hạn tháng…" |
| `color/vanhan/bg` | #EEF9F3 | Nền nhạt: hero, tab đang chọn, cột năm nay, khung lời khuyên, tháng tốt |
| `color/vanhan/caution` | #D9822B | Tiêu đề "Điều cần lưu ý", tên tháng |
| `color/vanhan/caution-bg`, `caution-border` | #FFF6EC, #F3DDB5 | Khung tháng cần chú ý |
| `color/vanhan/danger-border` | #F6CFCF | Viền khung tháng không tốt (nền dùng `color/calendar/sunday-bg`) |
| `color/vanhan/info-bg` | #E3EFFF | Nền nhãn mức "Trung bình", thẻ "Giữ ổn định" |
| `gradient/vanhan-navbar` | xanh lá → xanh lam, 4 điểm màu | Thanh điều hướng của tính năng, thay cho `color/primary-dark` |

## 3. Kiểu chữ

Font SF Pro. Trên demo HTML dùng font hệ thống của iPhone, máy khác hiện font gần giống.

| Text Style | Cỡ / dòng (px) | Độ đậm | Dùng cho |
| --- | --- | --- | --- |
| `display` | 72 / 72 | Bold | Số lớn |
| `title/lg` | 24 / 32 | Bold | Tiêu đề trang |
| `title/md` | 20 / 28 | Semibold | Tiêu đề mục, tiêu đề popup |
| `title/md-bold` | 20 / 28 | Bold | Câu nhấn ở khối hero (bổ sung từ demo, chờ Figma) |
| `title/sm` | 18 / 26 | Semibold | Tiêu đề thanh điều hướng |
| `body/md-regular` | 16 / 24 | Regular | Nội dung |
| `body/md-medium` | 16 / 24 | Medium | Ô nhập, ô chọn |
| `body/md-semibold` | 16 / 24 | Semibold | Tên mục trong danh sách |
| `body/sm-regular` | 14 / 20 | Regular | Mô tả ngắn |
| `body/sm-semibold` | 14 / 20 | Semibold | Nhãn nhỏ |
| `caption` | 12 / 16 | Semibold | Chú thích |
| `micro-regular` | 10 / 14 | Regular | Chữ rất nhỏ |
| `micro-semibold` | 10 / 14 | Semibold | Nhãn rất nhỏ, nút ✕ |
| `button/lg` | 16 / 24 | Bold, in hoa | Nút lớn |
| `button/sm` | 14 / 20 | Bold | Nút nhỏ |
| `heading/section` | 24 / 24 | Semibold | Tiêu đề mục Trang chủ |
| `heading/card` | 22 / 24 | Semibold | Tiêu đề khối, tên giờ tốt |
| `heading/date` | 24 / 24 | Bold | Tháng năm trên ảnh nền |
| `overline/lg` | 18 / 21 | Bold, in hoa | Thứ, tiêu đề thẻ tử vi |
| `body/lg-semibold` | 18 / 27 | Semibold | Nội dung thẻ quảng bá |
| `body/md-tight-semibold`, `body/md-tight-medium` | 16 / 18 | Semibold, Medium | Ngày lễ, giờ, dòng phụ |
| `body/sm-tight` | 14 / 18 | Regular | Mô tả dòng menu |
| `label/sm`, `label/sm-medium` | 14 / 21 | Regular, Medium | Nhãn ô dịch vụ, thẻ tử vi |
| `button/md` | 16 / 21 | Semibold | Nút pill "Xem chi tiết" |

## 4. Khoảng cách và bo góc

| Nhóm | Token |
| --- | --- |
| Khoảng cách | `space/2`, `space/4`, `space/8`, `space/10`, `space/12`, `space/16`, `space/18`, `space/20`, `space/24`, `space/32` |
| Bo góc | `radius/xs` 4, `radius/md` 8, `radius/sm` 12, `radius/lg` 16, `radius/pill` 28, `radius/full` 999 |

## 5. Component

| Component (Figma) | Class HTML | Biến thể | Ghi chú |
| --- | --- | --- | --- |
| Button | `lv-button` | Size: Large / Small. State: Default / Pressed / Disabled | `button/lg` in hoa, bo tròn hết |
| Checkbox | `lv-checkbox` | State: Off / On | 22×22, `radius/xs` |
| Navigation Bar | `lv-navbar` | Title | Nền `color/primary-dark`, có nút quay lại |
| Form/Section Header | `lv-section-header` | Title, Icon | Icon 20 + `title/md` |
| Form/Select | `lv-select` | State: Placeholder / Filled | Mở popup chọn |
| Form/Textarea | `lv-textarea` | State: Placeholder / Filled | Cao tối thiểu 128 |
| Form/Image Tile | `lv-image-tile` | Type: Add / Thumbnail | 96×96, nút ✕ ở góc |
| List Item/Selectable | `lv-list-item` | Label, Icon, Selected | Dùng trong popup chọn |
| Bottom Sheet | `lv-bottom-sheet` | Show Illustration, Question | Kèm `lv-scrim` |
| Bottom Sheet/Header | `lv-bottom-sheet__header` | Title | Tiêu đề giữa, nút đóng phải |
| Bottom Action Bar | `lv-action-bar` | — | Nút cố định cuối màn |

Component Trang chủ. Trên Figma các khối này còn là group. Tên `Home/…` là tên đề xuất để designer tạo component:

| Component | Class HTML | Biến thể | Ghi chú |
| --- | --- | --- | --- |
| Light Status Bar | `lv-status-bar` | — | Giờ, sóng, wifi, pin |
| Home/Header | `lv-home-header` | — | Avatar, hạng thành viên (`lv-rank-badge`), năm sinh, menu, chuông |
| Home/Week Strip | `lv-week-strip` | Ngày: Default / Selected. Đánh dấu: Flag / Dot | 7 cột, CN nền đỏ nhạt |
| Home/Today Hero | `lv-today-hero` | — | Số ngày 72, ảnh nền theo ngày |
| Home/Ghost Button | `lv-ghost-button` | — | Nút viền trắng trên ảnh |
| Home/Carousel | `lv-carousel` | — | Cuộn ngang, dừng theo thẻ |
| Home/Promo Card | `lv-promo-card` | Variant: Gold / Sky | 350×170, ảnh nền mây |
| Home/Gradient CTA | `lv-gradient-cta` | Size: Default / Small | Nút xanh gradient có mũi tên |
| Badge | `lv-badge` | New / Hot / Ribbon / Count | MỚI, Hot, HOT, số đếm |
| Chip | `lv-chip` | Success | Chủ đề câu hỏi |
| Card | `lv-card` | Elevation: Default / High | Nền trắng, viền và bóng nhẹ |
| Home/Feature Tile | `lv-feature-tile` + `lv-feature-grid` | Có / không badge | Lưới 3 cột 120×145 |
| Home/Pill Button | `lv-pill-button` | — | Nút trắng có icon mũi tên đôi |
| Home/Good Hour Card | `lv-good-hour` | — | Giờ tốt, sao, danh sách chấm |
| Home/Bar Chart | `lv-bar-chart` | — | Cao cột theo `--h` |
| Home/Solar Term Strip | `lv-term-strip` | Ô: Earth / Fire / Water / Metal / Wood | Dải tiết khí |
| Home/Video Thumb | `lv-video-thumb` | — | 180×242 |
| Home/Daily Horoscope Card | `lv-horoscope` | — | Linh vật đè lên mép trên |
| Home/Menu List, Menu Row | `lv-menu-list`, `lv-menu-row` | Có / không badge | Tử vi chuyên sâu |
| Home/Service Grid, Service Item | `lv-service-grid`, `lv-service-item` | — | Chọn ngày tốt |
| Tab Bar | `lv-tab-bar` | Tab: Active / Inactive | Tab giữa nổi |
| Khác | `lv-divider`, `lv-bullet-list`, `lv-link-more`, `lv-home-section-title` | — | Dùng chung |

Code mẫu và hình từng trạng thái: xem trang danh mục.

## 6. Thêm hoặc sửa token, component

1. Designer sửa hoặc thêm trên Figma.
2. AI đọc Figma và cập nhật `tokens.css`, `components.css`, `index.html` theo `.agents/rules/demo-components.md`.
3. AI so hai phía: cùng token, cùng biến thể, cùng kích thước.
4. Cập nhật bảng ở mục 2–5 của tài liệu này.

Component tạm (`new-`) không đưa vào bộ code cho tới khi designer chuẩn hóa trên Figma.

## 7. Chuyển động

- **Làm mềm tương tác**: `Curves.easeInOutCubic` (chuẩn Flutter cho cảm giác tự nhiên).
- **Radial Entrance**: vòng tròn chạy từ 0% đến giá trị hiện tại trong 800ms, có độ nảy nhẹ.
- **Month Transition**: khi chuyển tháng, nội dung hiện dần kết hợp trượt dọc 20px.
- **Haptic Feedback**: rung nhẹ khi chạm vào các mục trong lưới tháng.

---
## Tài liệu liên quan
- [[Analysis-QuyTrinhBADesignDev]]
- [[Spec-DestinyComponents]]
- [[Spec-DestinyUX]]
