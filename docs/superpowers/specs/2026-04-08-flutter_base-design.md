# Thiết kế: Tạo repository GitHub public `flutter_base`

## Mục tiêu
- Tạo repository công khai trên GitHub với tên `flutter_base`.
- Bao gồm các tệp mặc định: `README.md`, `LICENSE` (MIT), `.gitignore` (Flutter).
- Đẩy toàn bộ mã nguồn hiện tại (nhánh `main`).

## Các bước thực hiện (Design Overview)
1. **Cài đặt GitHub CLI** (`gh`) và đăng nhập.
2. **Tạo repository** trên GitHub với các tùy chọn: public, README, LICENSE MIT, .gitignore Flutter.
3. **Kiểm tra nhánh `main`** tồn tại và đã commit mọi thay đổi.
4. **Thêm remote** `origin` (nếu chưa có) và **đẩy** lên GitHub.
5. **Xác nhận** trên GitHub rằng các tệp `README.md`, `LICENSE`, `.gitignore` đã xuất hiện.

## Checklist
- [ ] Cài `gh` và đăng nhập thành công.
- [ ] Tạo repo trên GitHub với các tùy chọn đúng.
- [ ] Nhánh `main` tồn tại, đã commit.
- [ ] Thêm remote `origin` và đẩy lên.
- [ ] Kiểm tra repo trên GitHub.

## Ghi chú
- Khi chạy `gh auth login`, chọn **HTTPS** và nhập Personal Access Token có quyền `repo`.
- Nếu chưa có token, tạo mới tại `https://github.com/settings/tokens` với scope `repo`.
- Thêm mô tả ngắn gọn vào `README.md` nếu cần.

## Kế hoạch tiếp theo
Sau khi bạn xem và đồng ý với spec này, tôi sẽ tạo **implementation plan** (bước chi tiết các lệnh) bằng cách gọi skill `writing-plans`.
