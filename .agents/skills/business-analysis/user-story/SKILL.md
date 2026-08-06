---
name: user-story-ac-writer
description: |
  Sinh User Story và Acceptance Criteria chuẩn INVEST + Bullet Checklist 
  cho BA/PO. Skill enforce 6 tiêu chí INVEST (Independent, Negotiable, 
  Valuable, Estimable, Small, Testable) và format AC theo dạng `- [ ]` 
  (mỗi dòng = 1 điều kiện kiểm chứng được).
  Hỗ trợ 3 mode: viết mới từ feature description, refine US đang có,
  bổ sung AC cho US đã viết.
  
  Sử dụng phối hợp với workflow: [[gen-user-story]] để đạt hiệu quả cao nhất.
  
  KHÔNG dùng cho: viết PRD/URD/SRS toàn bộ (dùng prd-writer, srs-writer),
  viết test case kỹ thuật chi tiết (AC ≠ test case), viết Use Case 
  formal (dùng po-usecase-refiner), business rules (dùng 
  business-rule-generator).
---
# User Story & Acceptance Criteria Writer

## Mục đích

Skill này giúp BA/PO viết User Story và Acceptance Criteria đạt chuẩn
chất lượng cao, sẵn sàng cho dev estimate và QA viết test case.

## Quy tắc Logic (Logic Engine)

Khi thực hiện workflow [[gen-user-story]], hãy áp dụng các quy tắc sau:

### 1. Xác định chế độ làm việc (Mode Selection)

- **Mode A - Viết mới**: Sinh US + AC từ mô tả tính năng.
- **Mode B - Tối ưu (Refine)**: Review và đề xuất sửa đổi US/AC hiện có.
- **Mode C - Bổ sung AC**: Tập trung chi tiết hóa tiêu chí nghiệm thu cho US có sẵn.

### Quy tắc 2: Phân tích nguồn dữ liệu và Thu thập input

Trước khi sinh, cần phân tích kỹ nguồn dữ liệu đầu vào (Prototype HTML, Link Figma, hoặc Ảnh chụp thiết kế) và đảm bảo đủ các thông tin sau:

1. **Phân tích thiết kế (Visual/Code Analysis)**: Trích xuất các block UI, logic tương tác và các luồng dữ liệu từ file prototype hoặc hình ảnh được cung cấp.
2. **Persona/User type**: Ai sẽ dùng tính năng này? (Dựa trên context của màn hình thiết kế).
3. **Goal**: User muốn thực hiện hành động gì trên giao diện này?
4. **Business value**: Tại sao cần tính năng/màn hình này?
5. **Context/Scope**: Màn hình này nằm trong module nào của dự án?

KHÔNG được tự bịa thông tin nếu thiết kế không thể hiện rõ - phải hỏi lại user để làm rõ Persona và Value.

### Quy tắc 3: Sinh User Story theo template

Dùng format chuẩn 3 thành phần:

```
**US-[ID]**: [Tiêu đề ngắn gọn]

**As a** [persona cụ thể, không generic như "user"]
**I want to** [hành động cụ thể, đo lường được]
**So that** [business value rõ ràng, không lặp lại I want]
```

### Quy tắc 4: Apply checklist INVEST

Trước khi xuất, tự kiểm tra US theo 6 tiêu chí:

| Tiêu chí            | Câu hỏi kiểm tra                          | Nếu fail thì làm gì        |
| --------------------- | -------------------------------------------- | ------------------------------ |
| **I**ndependent | Story có phụ thuộc story khác không?    | Tách dependency hoặc gộp    |
| **N**egotiable  | Có để chỗ cho thảo luận không?        | Bỏ chi tiết kỹ thuật cứng |
| **V**aluable    | Mang lại giá trị gì cho user/business?   | Viết lại phần "So that"     |
| **E**stimable   | Dev có ước lượng được effort không? | Bổ sung context/constraint    |
| **S**mall       | Hoàn thành trong 1 sprint không?          | Split thành nhiều story      |
| **T**estable    | QA viết được test case không?           | Bổ sung AC cụ thể           |

Tham khảo chi tiết: `references/invest-criteria.md`

### Quy tắc 5: Sinh Acceptance Criteria

Mỗi US cần **tối thiểu 3 AC**, format Bullet Checklist:

```
### Tiêu chí nghiệm thu

- [ ] [Happy path — hành vi chính mong đợi]
- [ ] [Happy path — hành vi phụ / kết quả đi kèm]
- [ ] [Edge case — xử lý khi điều kiện biên xảy ra]
- [ ] [Negative path — xử lý khi lỗi / dữ liệu rỗng]
- [ ] **TH1: [Trạng thái A]**: [Hành vi hệ thống]
- [ ] **TH2: [Trạng thái B]**: [Hành vi hệ thống]
```

**Quy tắc viết AC tốt:**

- Bao quát đủ 3 loại: happy path, edge case, negative path
- Mỗi dòng `- [ ]` = 1 điều kiện kiểm chứng được (đúng/sai)
- Dùng ký hiệu `→` cho hành vi sau hành động (VD: "Bấm vào → mở popup")
- Ghi rõ điều kiện ẩn/hiện nếu có logic theo state
- Ghi rõ nguồn dữ liệu nếu từ CMS/ADS/API
- Dùng **Bảng điều kiện** khi logic phân nhánh phức tạp
- Tránh từ mơ hồ: "nhanh", "hợp lý", "user-friendly"
- Không viết logic implementation (đó là việc của dev)
- 1 AC = 1 điều kiện duy nhất, không gộp nhiều case

### Quy tắc 6: Định dạng Output cuối cùng

Trình bày theo format:

1. User Story (3 dòng As a / I want / So that)
2. INVEST Self-check (bảng đánh giá 6 tiêu chí với ✅/⚠️)
3. Acceptance Criteria (đánh số AC1, AC2, AC3...)
4. Notes (nếu có dependency, assumption, hoặc câu hỏi cần PO làm rõ)

## Anti-patterns - KHÔNG làm những điều sau

❌ **Persona generic**: "As a user" → ✅ "As a học viên Digital School
   đã đăng ký khóa học và xác thực email"

❌ **Goal vague**: "I want to manage profile" → ✅ "I want to update
   my email address"

❌ **Value lặp lại goal**: "So that I can manage profile" → ✅ "So that
   I receive notifications at correct address"

❌ **AC mô tả UI**: "Then button turns blue" → ✅ "Then system displays
   confirmation message"

❌ **AC chứa logic kỹ thuật**: "Then call API /v1/users/update" →
   ✅ "Then user data is updated and persisted"

❌ **AC quá ít**: chỉ có 1 happy path → ✅ tối thiểu 3 AC bao quát các
   nhánh

❌ **Story quá lớn**: 1 story cover cả CRUD → ✅ tách thành Create,
   Read, Update, Delete riêng

## Khi nào cần split User Story?

Đề xuất split khi gặp các dấu hiệu:

- Story chứa từ "AND" trong tiêu đề ("Login AND register")
- Có nhiều persona khác nhau trong 1 story
- Story cover nhiều CRUD operation
- AC vượt quá 7-8 scenarios
- Dev ước lượng > 5 ngày làm việc

Pattern split phổ biến:

- Theo **CRUD**: tách Create / Read / Update / Delete
- Theo **persona**: tách Học viên / Mentor / Admin / Doanh nghiệp
- Theo **business rule**: tách Happy path / Validation / Permission
- Theo **data type**: tách theo loại data xử lý

## Tham khảo thêm

- `templates/user-story-template.md` - template trống điền vào
- `templates/ac-template.md` - template AC chuẩn Bullet Checklist
- `references/invest-criteria.md` - giải thích sâu INVEST
- `references/examples.md` - 7 ví dụ mẫu cho EdTech & Digital School
- `checklists/quality-checklist.md` - checklist self-review trước khi xuất
