---
id: SVP-XXX
type: survey-plan
status: draft
project: Lich_Viet
owner: "@product-team"
tags: [khao-sat, in-app-survey]
linked-to: [[BPRD-002-KhaoSatInApp]], [[<BPRD của tính năng>]], [[Requirements-MOC]]
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
# Kế hoạch khảo sát: <Tên tính năng> (SVP-XXX)

> Survey Plan — kế hoạch và cấu hình toàn bộ khảo sát in-app của một tính năng.
>
> **Đọc [[BPRD-002-KhaoSatInApp]] trước** để hiểu cơ chế chung.
>
> **Cách dùng mẫu**: sao chép file, đặt tên `SVP-<MÃ>-<TenTinhNang>.md`, thay `XXX` bằng mã tính năng (trùng tiền tố `survey_id`). Mỗi chiến dịch là một mục 5.x đủ 7 phần a–g. Sau khi tạo: (1) thêm vào bảng đăng ký tại BPRD-002 mục 10 và Requirements-MOC; (2) thêm mục lớn "Khảo sát in-app" chứa đường dẫn tới file này vào BRD/BPRD tính năng, ngay sau mục Thiết kế.

## 1. Thông tin tài liệu

| **Trường**                   | **Nội dung**                    |
| :----------------------------- | :-------------------------------- |
| Tính năng                    | <tên> — [[<BPRD của tính năng>]] |
| Mã tính năng (`feature_key`) | `XXX`                             |
| Cơ chế nền tảng            | [[BPRD-002-KhaoSatInApp]]         |
| Số chiến dịch               | <n>                               |
| Người phụ trách             | <tên>                            |
| Phiên bản                    | v1.0                              |
| Trạng thái                   | Draft                             |

## Nhật ký thay đổi

| Ngày cập nhật | Phiên bản | Người thực hiện | Nội dung thay đổi |
| :--------------- | :---------- | :------------------ | :-------------------- |
| YYYY-MM-DD       | v1.0        | <tên>              | Khởi tạo           |

---

## 2. Mục tiêu nghiên cứu

### 2.1. Câu hỏi nghiên cứu

| **Mã** | **Câu hỏi nghiên cứu** | **Chiến dịch** | **Quyết định sản phẩm dựa trên kết quả** |
| :------ | :------------------------- | :--------------- | :------------------------------------------- |
| RQ1     |                            | `SV-XXX-01`    |                                              |

---

## 3. Tổng quan chiến dịch

| **Mã khảo sát** | **Tập người dùng** | **RQ** | **Ưu tiên** | **Kiểu** | **Số câu** | **Cỡ mẫu** | **Thời gian chạy** | **Trạng thái** |
| :--------------- | :-------------------- | :----- | :------------ | :--------- | :----------- | :----------- | :------------------- | :--------------- |
| `SV-XXX-01`    |                       | RQ1    | 1             | Entry      |              |              |                      | draft            |

---

## 4. Phân tập người dùng

### 4.1. Định nghĩa dùng chung

| **Khái niệm**          | **Định nghĩa**                                                                 |
| :------------------------ | :-------------------------------------------------------------------------------- |
| **Lượt xem hợp lệ** | <điều kiện để một lần vào màn kết quả được tính là sử dụng thật> |

### 4.2. Bản đồ tập theo phễu

*(Sơ đồ mermaid thể hiện người dùng rơi vào tập nào theo phễu; ghi rõ các tập loại trừ / chồng lấn nhau.)*

### 4.3. Thứ tự ưu tiên khi thuộc nhiều tập

| **Ưu tiên** | **Chiến dịch** | **Lý do** |
| :------------ | :--------------- | :---------- |
| 1             | `SV-XXX-01`    |             |

---

## 5. Chi tiết từng chiến dịch

### 5.1. SV-XXX-01 — <Tên tập>

**a. Thông tin chiến dịch**

| Trường             | Giá trị               |
| :------------------- | :---------------------- |
| Mã khảo sát       | `SV-XXX-01` · version 1 |
| Loại khảo sát     |                         |
| Câu hỏi nghiên cứu | RQ1                   |
| Ưu tiên            |                         |
| Đối tượng        |                         |
| Cỡ mẫu mục tiêu  |                         |
| Thời gian chạy     |                         |
| Trạng thái         | draft                   |

**b. Tập người dùng**

* **Thuộc tập khi**:
* **Loại trừ**:

**c. Điều kiện hiển thị** *(cột So với mặc định: ghi "Như mặc định" hoặc lý do thay đổi so với BPRD-002 mục 4.4)*

| STT | Điều kiện                                      | Bật         | Tham số                 | So với mặc định |
| :-- | :------------------------------------------------ | :----------- | :------------------------ | :------------------- |
| 1   | Số lần sử dụng hợp lệ trong N ngày         | ⬜           | X = 3, N = 30 ngày      |                      |
| 2   | Tổng thời gian xem màn kết quả trong N ngày | ⬜           | Y = 3 phút              |                      |
| 3   | Thời gian ở màn kết quả trong phiên         | ✅           | Z = 20 giây             |                      |
| 4   | Chưa hoàn thành khảo sát/phiên bản         | ✅           | —                        | Bắt buộc           |
| 5   | Thời gian chờ sau khi bỏ qua                  | ✅           | 14 ngày, tối đa 2 lần |                      |
| 6   | Trong ngày chưa hiển thị khảo sát nào khác | ✅           | 1/ngày                  |                      |
| 7   | Khoảng cách tối thiểu từ khảo sát gần nhất | ✅           | M = 30 ngày             |                      |
| 8   | Đối tượng & tập người dùng                  | ✅           |                          |                      |
| 9   | Khoảng cách với khảo sát khác của cùng tính năng | ✅           | K = 90 ngày             |                      |

**d. Cách hiển thị**

| Trường | Giá trị |
| :------- | :-------- |
| Kiểu    | Entry     |
| Vị trí  |           |

**e. Thiết kế** *(chỉ ghi phần riêng của chiến dịch; thiết kế dùng chung xem [[BPRD-002-KhaoSatInApp#6. Thiết kế]])*

- **Link thiết kế**: (sẽ cập nhật)
- **Ảnh minh họa**: (sẽ cập nhật)
- **Yêu cầu riêng**:
  - 

**f. Bộ câu hỏi** *(tối đa 5 câu; câu hỏi mở đặt cuối, không bắt buộc; mỗi câu phải có mục đích gắn với RQ)*

| STT | Câu hỏi | Dạng       | Đáp án | Bắt buộc | Mục đích |
| :-- | :-------- | :----------- | :------- | :--------- | :--------- |
| 1   |           | Chọn 1      |          | Có        |            |
| 2   |           | Câu hỏi mở |          | Không     |            |

**g. Đọc kết quả & ngưỡng hành động**

| Tín hiệu | Ngưỡng | Hành động gợi ý |
| :--------- | :------- | :------------------ |
|            |          |                     |

---

## 6. Ma trận so sánh điều kiện (tra cứu nhanh)

*(Chỉ cần khi tính năng có từ 2 chiến dịch trở lên.)*

## 7. Tác động tới tính năng

### 7.1. Vị trí trên màn hình

| Màn | Vị trí hiển thị | Khảo sát | Ràng buộc với UI hiện có |
| :--- | :---------------- | :-------- | :-------------------------- |
|      |                   |           |                             |

### 7.2. Tracking cần bổ sung

| **Sự kiện** | **Thuộc tính bắt buộc** | **Dùng cho** |
| :------------- | :-------------------------- | :-------------- |
|                |                             |                 |

### 7.3. Lưu ý khi phát triển

-

## 8. Số liệu cần phân tích để chốt tham số

Tham số trong mục 5 là đề xuất; phải chốt lại bằng số liệu thật trước khi bật chiến dịch.

- **Dùng phân vị thay cho số trung bình**: p50 = 25 giây nghĩa là một nửa số phiên dưới 25 giây; p90 = 180 giây nghĩa là chỉ 10% số phiên lâu hơn 180 giây. Vài người dùng rất lâu sẽ kéo số trung bình lên cao và làm ngưỡng bị sai.
- **Ngưỡng "thoát nhanh" lấy quanh p10–p25**, **ngưỡng `Z` lấy quanh p50–p60**, **ngưỡng chờ trước khi hỏi lấy quanh p75–p90**.
- **Mỗi tập nên chiếm 15–40% nhóm đối tượng**: nhỏ hơn thì không đủ cỡ mẫu, lớn hơn thì điều kiện quá lỏng.

### 8.1. Danh sách số liệu cần lấy

| Mã | Số liệu cần lấy | Bóc tách theo | Dùng để chốt | Cách dùng |
| :-- | :---------------- | :-------------- | :-------------- | :---------- |
| D01 | Phân bố thời gian ở màn kết quả mỗi phiên | | Ngưỡng "lượt xem hợp lệ", `Z` | |
| D02 | Phân bố số lượt xem / người trong N ngày | | `X` | |
| D03 | Số người rơi vào từng tập theo tuần | | Cỡ mẫu, thời gian chạy | |

### 8.2. Ước lượng khả năng đạt cỡ mẫu

```
Số phản hồi kỳ vọng
  = Số người thuộc tập trong kỳ
  × Tỷ lệ quay lại màn kết quả trong kỳ
  × Tỷ lệ vượt được các điều kiện chống làm phiền
  × Tỷ lệ phản hồi S01 (8% Entry / 20% Direct)
```

Không đạt ⇒ theo thứ tự: kéo dài thời gian chạy → nới tham số → hạ cỡ mẫu → (cuối cùng) xin PO duyệt tắt điều kiện 9.

### 8.3. Bảng chốt tham số sau phân tích

| Tham số | Chiến dịch | Giá trị đang đề xuất | Số liệu dùng | Giá trị sau phân tích | Ngày chốt |
| :-------- | :----------- | :---------------------- | :-------------- | :----------------------- | :---------- |
|           |              |                         |                 |                          |             |

## 9. Vấn đề mở / cần duyệt

| # | Vấn đề | Người quyết định | Trạng thái |
| :- | :------- | :------------------ | :----------- |
| 1  |          |                     |              |

## 10. Theo dõi triển khai

| **Mã khảo sát** | **Hiển thị** | **Phản hồi / Cỡ mẫu** | **S01** | **S02** | **S03** | **S04** | **S05** | **Ghi chú** |
| :--------------- | :------------- | :------------------------ | :------ | :------ | :------ | :------ | :------ | :------------ |
| `SV-XXX-01`    | —              | — /                       | —       | —       | —       | —       | —       |               |
