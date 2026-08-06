---
id: Spec-ContentPushMungMot
type: spec
status: draft
project: Lich_Viet
owner: "@product_manager"
tags: [push-notification, content, mung-mot, personalization, chi-so-ngay, hop-tuoi]
linked-to: [[BRD-001-PushNotificationCaNhanHoa]], [[Analysis-ChienLuocPushNotiMungMot]]
created: 2026-07-10
---

# ĐẶC TẢ NỘI DUNG PUSH MÙNG 1 — CHỈ SỐ NGÀY & VIỆC HỢP TUỔI (CÁ NHÂN HÓA)

Đặc tả nội dung (copy) cho push thông báo gửi **đúng sáng ngày Mùng 1 âm lịch (06:30)** — thuộc Nội dung 1 trong [[BRD-001-PushNotificationCaNhanHoa]]. Tin được cá nhân hóa theo **tuổi (can chi)** của người dùng, hiển thị **chỉ số ngày tốt (%)** và **danh sách việc hợp tuổi nên làm** trong ngày.

Tài liệu này chốt lại bộ template để Dev cấu hình FCM và tránh 2 lỗi đang tồn tại ở bản cũ: (1) BRD đánh số case bị nhảy (1, 3, 4, 5 — thiếu case 2); (2) bản Analysis mâu thuẫn nội tại (ngày *tốt* nhưng lại khuyên *"nên hạn chế [việc]"*).

---

## 1. Đối tượng & điều kiện gửi

- **Đối tượng nhận:** Người dùng bật thông báo **và** đã thiết lập ngày sinh **khác ngày sinh mặc định** (`15/05/1950`, `01/01/2000`). Người dùng còn ngày sinh mặc định → dùng bản fallback không cá nhân hóa (mục 6).
- **Thời điểm:** 06:30 sáng đúng ngày Mùng 1 âm lịch (múi giờ thiết bị, mặc định GMT+7).
- **Click action:** Mở màn hình **Chi tiết ngày** của hôm nay, mở sẵn tab/pop-up **Văn khấn Mùng 1**.

---

## 2. Biến cá nhân hóa (personalization variables)

| Biến | Mô tả | Nguồn | Ví dụ |
| :--- | :--- | :--- | :--- |
| `{thang_am}` | Số tháng âm lịch hiện tại | Lịch âm | `7` |
| `{can_chi}` | Tuổi can chi của người dùng | Ngày sinh → 60 hoa giáp | `Ất Tỵ` |
| `{chi_so}` | Chỉ số ngày tốt theo tuổi (0–100) | Engine ngày tốt × can chi | `78` |
| `{tier}` | Bậc chất lượng ngày, suy ra từ `{chi_so}` | Bảng mục 3 | `Khá tốt` |
| `{ds_viec}` | Danh sách việc hợp tuổi nên làm hôm nay | Engine việc hợp tuổi × can chi | `[xuất hành, cầu tài, gặp gỡ]` |
| `{co_viec}` | Cờ có ≥1 việc hợp tuổi hay không | `len(ds_viec) > 0` | `true` |

---

## 3. Bảng bậc chỉ số ngày (day-quality tiers)

Chỉ số `{chi_so}` được quy về 4 bậc mô tả + 2 dải lời chúc. Dùng dải lời chúc cho **tiêu đề/mở đầu**, dùng cụm mô tả bậc cho phần nêu chỉ số.

| Dải `{chi_so}` | `{tier}` (cụm mô tả) | Cụm chỉ số trong tin | Dải lời chúc |
| :--- | :--- | :--- | :--- |
| 80–100 | Rất tốt | `rất tốt – {chi_so}%` | **hanh thông** |
| 60–79 | Khá tốt | `khá tốt – {chi_so}%` | **hanh thông** |
| 40–59 | Trung bình | `trung bình – {chi_so}%` | **bình an** |
| 0–39 | Chưa cao | `chưa cao – {chi_so}%` | **bình an** |

> Ngưỡng chốt: **`{chi_so} ≥ 60` → nhóm "ngày tốt"** (lời chúc *hanh thông*); **`< 60` → nhóm "ngày thấp"** (lời chúc *bình an*). Ranh giới 60 có thể tinh chỉnh sau khi có dữ liệu A/B.

---

## 4. Danh sách việc hợp tuổi — quy tắc hiển thị

- **Số việc tối đa hiển thị:** 3 việc (ưu tiên theo điểm hợp tuổi giảm dần). Còn dư → thêm `…` để gợi mở "xem thêm".
- **Chuẩn hóa từ vựng việc** (dùng đúng thuật ngữ trong app, viết thường): `xuất hành`, `cầu tài`, `khai trương`, `ký kết`, `giao dịch`, `gặp gỡ`, `dọn dẹp`, `mua sắm`, `nhập trạch`, `động thổ`, `an sàng`, `cưới hỏi`.
- **Nối chuỗi:** ngăn cách bằng dấu phẩy, không dùng "và" (tiết kiệm ký tự): `xuất hành, cầu tài, gặp gỡ…`.
- **Không có việc nên làm** (`{co_viec} = false`): thay bằng gợi ý hành vi nhẹ theo nhóm ngày (xem case 3 & 5).

---

## 5. Ma trận nội dung (8 case) — bản chốt

Tiêu đề chung cho mọi case: **`Hôm nay mùng 1 tháng {thang_am} âm`**
(Biến thể A/B có emoji: `🌸 Hôm nay mùng 1 tháng {thang_am} âm` — test riêng, mục 8.)

Cấu trúc body chung:
`Chúc bạn tháng mới {lời chúc}. Tuổi {can_chi} của bạn có chỉ số ngày {cụm chỉ số}, {mệnh đề việc}.`

> **Giữ "của bạn"** — xưng hô trực tiếp tạo hơi ấm & cảm giác cá nhân hóa (Nguyên tắc 3). Gắn vào *tuổi* (`Tuổi {can_chi} của bạn`), không gắn vào *chỉ số*, để tránh lặp "của" hai lần.
> **Không lặp "hôm nay" trong body** — tiêu đề đã nêu "Hôm nay mùng 1…", body chỉ tập trung vào chỉ số & việc cho mượt và tiết kiệm ký tự.

Trong đó `{mệnh đề việc}` đổi theo `{co_viec}` và nhóm ngày:

| # | Nhóm ngày | `{co_viec}` | Nội dung (body) |
| :-: | :--- | :-: | :--- |
| 1 | Tốt (≥60) | có | `Chúc bạn tháng mới hanh thông. Tuổi {can_chi} của bạn có chỉ số ngày {cụm chỉ số}, hợp {việc1}, {việc2}, {việc3}…` |
| 2 | Tốt (≥60) | không | `Chúc bạn tháng mới hanh thông. Tuổi {can_chi} của bạn có chỉ số ngày {cụm chỉ số}, phù hợp khởi sự nhẹ nhàng và giữ tinh thần an vui.` |
| 3 | Thấp (<60) | có | `Chúc bạn tháng mới bình an. Tuổi {can_chi} của bạn có chỉ số ngày {cụm chỉ số}, hợp {việc1}, {việc2}…` |
| 4 | Thấp (<60) | không | `Chúc bạn tháng mới bình an. Tuổi {can_chi} của bạn có chỉ số ngày {cụm chỉ số}, nên ưu tiên việc nhẹ và thắp hương cầu an đầu tháng.` |

> Lưu ý logic: khi ngày **thấp mà vẫn có việc hợp tuổi**, chỉ **liệt kê việc nên làm** (đón lành), **không** liệt kê việc nên tránh trong push — theo Nguyên tắc 2 (không dọa dẫm câu click) của [[Analysis-ChienLuocPushNotiMungMot]]. Việc nên tránh đã được phủ bởi Nội dung 4.

### 5.1. Ví dụ đã điền (dùng để QA)

| Case | `{chi_so}` | `{can_chi}` | `{ds_viec}` | Nội dung hiển thị |
| :-: | :-: | :--- | :--- | :--- |
| 1a | 88 | Ất Tỵ | xuất hành, cầu tài, gặp gỡ | Chúc bạn tháng mới hanh thông. Tuổi Ất Tỵ của bạn có chỉ số ngày rất tốt – 88%, hợp xuất hành, cầu tài, gặp gỡ… |
| 1b | 72 | Bính Ngọ | khai trương, ký kết | Chúc bạn tháng mới hanh thông. Tuổi Bính Ngọ của bạn có chỉ số ngày khá tốt – 72%, hợp khai trương, ký kết. |
| 2 | 76 | Giáp Thìn | (rỗng) | Chúc bạn tháng mới hanh thông. Tuổi Giáp Thìn của bạn có chỉ số ngày khá tốt – 76%, phù hợp khởi sự nhẹ nhàng và giữ tinh thần an vui. |
| 3 | 45 | Nhâm Tý | dọn dẹp, mua sắm | Chúc bạn tháng mới bình an. Tuổi Nhâm Tý của bạn có chỉ số ngày trung bình – 45%, hợp dọn dẹp, mua sắm… |
| 4 | 32 | Canh Thân | (rỗng) | Chúc bạn tháng mới bình an. Tuổi Canh Thân của bạn có chỉ số ngày chưa cao – 32%, nên ưu tiên việc nhẹ và thắp hương cầu an đầu tháng. |

---

## 6. Fallback — người dùng chưa cá nhân hóa (ngày sinh mặc định)

Không có `{can_chi}` đáng tin → **bỏ chỉ số & việc hợp tuổi**, giữ tin nghi lễ chung:

- **Tiêu đề:** `Hôm nay mùng 1 tháng {thang_am} âm`
- **Nội dung:** `Chúc bạn tháng mới bình an. Xem giờ đẹp thắp hương và bài văn khấn Mùng 1 để lễ đầu tháng chu đáo.`
- (Kèm CTA cập nhật ngày sinh ở màn đích để chuyển họ sang nhóm cá nhân hóa.)

---

## 7. Ràng buộc kỹ thuật (character budget)

- **Tiêu đề:** ≤ 40 ký tự để không bị cắt ở trạng thái thu gọn trên đa số thiết bị Android/iOS. (Mẫu hiện tại ~28 ký tự — đạt.)
- **Nội dung:** thân tin nhắm ~120–160 ký tự; giới hạn cứng 178 ký tự để an toàn ở dòng thu gọn. Việc cắt danh sách việc còn tối đa 3 mục (mục 4) giúp giữ ngân sách này ngay cả với tuổi có nhiều việc hợp.
- **`{chi_so}`** luôn kèm ký hiệu `%`, không thập phân.
- **Thiếu dữ liệu chỉ số** (`{chi_so}` null) mà vẫn cá nhân hóa được tuổi → dùng fallback mục 6 (không đăng chỉ số sai).

---

## 8. A/B testing & tracking

- **A/B tiêu đề:** (A) không emoji vs (B) `🌸` mở đầu — đo CTR.
- **A/B ngưỡng nhóm ngày:** thử mốc 60 vs 55 để xem tác động tới CTR nhóm "thấp".
- **Tracking params** (theo BRD §4.2): `campaign_id = push_ca_nhan_hoa_noidung_1`, thêm `case_id` (1a/1b/2/3/4/fallback), `user_age_group = {can_chi}`, `day_index_tier = {tier}`, `platform`, `send_time`.

---

## 9. Định nghĩa hoàn thành (DoD)

- [ ] Dev map được `{chi_so} → {tier} → cụm chỉ số/lời chúc` đúng bảng mục 3.
- [ ] Engine trả `{ds_viec}` đã sắp xếp theo điểm hợp tuổi, client cắt còn ≤3 mục + `…`.
- [ ] 4 case chính + fallback render đúng trên Android & iOS, không tràn/cắt chữ ở trạng thái thu gọn.
- [ ] Deep link mở Chi tiết ngày + tab Văn khấn Mùng 1.
- [ ] Gắn đủ tracking params (mục 8), verify sự kiện Sent/Delivered/Opened.
