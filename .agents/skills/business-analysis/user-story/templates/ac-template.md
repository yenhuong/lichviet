# Acceptance Criteria Template · BA Zone

> Format: Bullet Checklist (`- [ ]`) — mỗi dòng = 1 điều kiện kiểm chứng được (đúng/sai)
> Tối thiểu 3 AC cho mỗi User Story: Happy path + Edge case + Negative path

---

## Quy tắc viết AC

- Mỗi dòng `- [ ]` là 1 điều kiện có thể kiểm chứng ngay (đúng/sai).
- Dùng ký hiệu `→` để mô tả hành vi sau hành động (VD: "Bấm vào → điều hướng tới deeplink").
- Ghi rõ **điều kiện ẩn/hiện** nếu có logic theo state (VD: "**Đã đăng nhập**: hiển thị avatar. **Chưa đăng nhập**: hiển thị avatar mặc định").
- Ghi rõ **nguồn dữ liệu** nếu lấy từ CMS/ADS/API (VD: "Danh sách lấy từ CMS mục tiện ích").
- Dùng **Bảng điều kiện** khi logic phân nhánh phức tạp (VD: theo hạng Cơ bản/Bạc/Vàng/KC).

---

## Mẫu AC

### Tiêu chí nghiệm thu

- [ ] [Happy path — hành vi chính mong đợi]
- [ ] [Happy path — hành vi phụ / kết quả đi kèm]
- [ ] [Edge case — xử lý khi điều kiện biên xảy ra]
- [ ] [Negative path — xử lý khi lỗi / dữ liệu rỗng / không có quyền]
- [ ] **TH1: [Trạng thái A]**: [Hành vi hệ thống]
- [ ] **TH2: [Trạng thái B]**: [Hành vi hệ thống]

### Bảng điều kiện theo [tiêu chí phân nhánh] (nếu cần)

| Điều kiện | Trạng thái A | Trạng thái B | Trạng thái C |
| ------------ | -------------- | -------------- | -------------- |
| Hiển thị X | ✅             | ❌             | ✅             |
| Hành vi Y   | Mô tả...     | Mô tả...     | Mô tả...     |

---

## Checklist trước khi commit AC

- [ ] Mỗi AC chỉ test 1 điều kiện duy nhất
- [ ] Mỗi dòng đo lường được (có trạng thái rõ, không mơ hồ)
- [ ] Không chứa từ mơ hồ: "nhanh", "phù hợp", "user-friendly"
- [ ] Không chứa logic implementation (API name, DB table, code)
- [ ] Đã có tối thiểu: 1 happy + 1 edge + 1 negative
- [ ] QA có thể viết test case từ AC nàys
