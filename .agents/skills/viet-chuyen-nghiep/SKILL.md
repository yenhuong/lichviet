---
name: viet-chuyen-nghiep
description: Orchestrator tạo nội dung tiếng Việt chuyên nghiệp theo mô hình IPO. Định hướng đến các module phù hợp cho storytelling, technical docs, data reports, và executive briefs. Kích hoạt khi có yêu cầu viết tiếng Việt ("Viết bài...", "Tạo nội dung...", "Phân tích..."). Luôn đảm bảo chuẩn tiếng Việt.
---

# Viết Chuyên Nghiệp

Orchestrator tạo nội dung tiếng Việt chuyên nghiệp theo mô hình IPO (Input-Process-Output).

## Khi Nào Dùng Skill Này

**Tự động kích hoạt khi:**
- User yêu cầu tạo nội dung tiếng Việt: "Viết bài về...", "Tạo nội dung..."
- User cần phân tích hoặc nghiên cứu: "Phân tích...", "Nghiên cứu..."
- User muốn báo cáo hoặc trình bày: "Làm báo cáo...", "Trình bày..."
- Bất kỳ task viết chuyên nghiệp bằng tiếng Việt nào

**Các loại content được hỗ trợ:**
- Blog posts và social media
- Tài liệu kỹ thuật
- Báo cáo kinh doanh và phân tích
- Nội dung marketing và case studies
- Executive summaries

## Cách Skill Hoạt Động

Skill này là **orchestrator** có nhiệm vụ:
1. Phân tích yêu cầu của user qua 5 câu hỏi then chốt
2. Định hướng đến process modules phù hợp (nếu cần)
3. Luôn enforce chuẩn tiếng Việt
4. Định hướng đến output method phù hợp
5. Tạo nội dung tiếng Việt chất lượng cao

**Triết lý:** Phân tích → Định hướng → Load đúng modules → Viết

## Phân Tích INPUT: 5 Câu Hỏi Thiết Yếu

Trước khi routing đến bất kỳ module nào, phân tích request bằng 5 câu hỏi:

### 1. User cung cấp gì?
- Dữ liệu thô cần phân tích?
- Ý tưởng hoặc outline?
- Chỉ có topic hoặc keywords?
- Nội dung có sẵn cần cải thiện?

### 2. Mục đích là gì?
- **Inform**: Chia sẻ kiến thức hoặc updates
- **Persuade**: Thay đổi suy nghĩ hoặc thúc đẩy hành động
- **Analyze**: Phân tích dữ liệu thành insights
- **Inspire**: Truyền cảm hứng hoặc kể chuyện
- **Instruct**: Dạy hoặc hướng dẫn

### 3. Độc giả là ai?
- **Công chúng**: Người không chuyên, phổ thông
- **Professionals**: Có kiến thức ngành
- **Technical**: Kỹ sư, chuyên gia
- **Executives**: Người ra quyết định, format ngắn gọn

### 4. Context/Platform là gì?
- Blog hoặc website
- LinkedIn hoặc social media
- Báo cáo kinh doanh hoặc presentation
- Tài liệu kỹ thuật
- Email hoặc memo nội bộ

### 5. Tone mong muốn?
- Chuyên nghiệp và trang trọng
- Thoải mái và trò chuyện
- Phân tích và dựa trên dữ liệu
- Truyền cảm hứng và cảm xúc
- Rõ ràng và hướng dẫn

## Decision Tree

```
Yêu cầu từ User
    ↓
┌─────────────────────────┐
│ Phân tích INPUT (5 câu) │
└─────────────────────────┘
    ↓
┌─────────────────────────────────────────┐
│ PROCESS: Cần xử lý trước khi viết?      │
├─────────────────────────────────────────┤
│ ✓ Data phức tạp? → process/phan-tich.md│
│ ✓ Cần info? → process/nghien-cuu.md    │
│ ✓ Verify facts? → process/kiem-chung.md│
│ ✗ Bỏ qua nếu không cần                  │
└─────────────────────────────────────────┘
    ↓
┌──────────────────────────────────────────┐
│ FOUNDATION (BẮT BUỘC)                    │
│ → foundation/quy-tac-viet.md            │
└──────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────┐
│ OUTPUT: Chọn phương pháp viết           │
├─────────────────────────────────────────┤
│ Inspire/persuade + độc giả phổ thông    │
│   → output/storytelling.md              │
│                                         │
│ Educate/document + technical/academic   │
│   → output/technical-academic.md        │
│                                         │
│ Instruct/explain + format rõ ràng      │
│   → output/technical.md                 │
│                                         │
│ Inform + data-driven + professionals    │
│   → output/data-report.md               │
│                                         │
│ Brief + quyết định + executives         │
│   → output/executive.md                 │
└─────────────────────────────────────────┘
    ↓
Viết Content
```

## Routing Rules

### Bước 1: Xác Định Process Cần Thiết

Load process modules **chỉ khi cần**:

| Tình huống | Module | Khi nào dùng |
|-----------|--------|-------------|
| User cung cấp data phức tạp | `process/phan-tich.md` | Số liệu thô, spreadsheets, cần trích xuất insights |
| Topic cần thu thập thông tin | `process/nghien-cuu.md` | Chủ đề xa lạ, cần facts/context |
| Facts quan trọng cần kiểm chứng | `process/kiem-chung.md` | Claims, số liệu, nội dung nhạy cảm |

**Logic quyết định:**
- Nếu user có data nhưng chưa rõ insights → Load `phan-tich.md` trước
- Nếu topic cần nghiên cứu → Load `nghien-cuu.md` trước
- Nếu nội dung có claims quan trọng → Load `kiem-chung.md` sau khi viết draft
- Nếu không cần → Qua Bước 2

### Bước 2: Load Vietnamese Foundation (BẮT BUỘC)

**Luôn thực hiện:**
```
file_read(foundation/quy-tac-viet.md)
```

File này chứa các quy tắc then chốt về:
- Dấu câu và khoảng cách tiếng Việt chuẩn
- Tránh trộn Anh-Việt
- Cách diễn đạt tự nhiên (không giống AI)
- Chuẩn typography

**Không bao giờ bỏ qua bước này.** Mọi nội dung tiếng Việt phải tuân theo các quy tắc này.

### Bước 3: Chọn Output Method

Chọn phương pháp viết phù hợp dựa trên phân tích INPUT:

| Mục đích | Tone | Độc giả | Platform | Module |
|---------|------|----------|----------|--------|
| Inspire, persuade | Cảm xúc, story | Phổ thông | Blog, social | `output/storytelling.md` |
| Educate, document | Chuyên môn, academic | Technical/Students | Docs, Books, Whitepaper | `output/technical-academic.md` |
| Instruct, explain | Rõ ràng, trực tiếp | Mọi level | Docs, guides | `output/technical.md` |
| Inform, hỗ trợ quyết định | Phân tích, data | Professionals | Reports | `output/data-report.md` |
| Brief executives | Ngắn gọn, actionable | Decision-makers | Memos | `output/executive.md` |

**Hướng dẫn chọn nhanh:**
- User muốn emotional connection? → storytelling
- User cần tài liệu kỹ thuật/học thuật? → technical-academic
- User cần hướng dẫn từng bước? → technical
- User có data cần trình bày? → data-report
- User cần executive brief? → executive

### Auto-Detect Patterns

Tự động routing dựa trên cụm từ thường gặp:

| User Nói | Auto-Route Đến |
|-----------|---------------|
| "Viết bài blog về..." | storytelling |
| "Viết tài liệu kỹ thuật..." | technical-academic |
| "Viết documentation..." | technical-academic |
| "Viết giáo trình/sách..." | technical-academic |
| "Viết hướng dẫn..." | technical |
| "Phân tích data/dữ liệu..." | phan-tich → data-report |
| "Làm báo cáo..." | data-report hoặc executive |
| "Nghiên cứu về..." | nghien-cuu → (chọn method) |
| "Tạo case study..." | storytelling hoặc data-report |
| "Tóm tắt cho sếp..." | executive |

## Ví Dụ Workflow

### Ví Dụ 1: Blog Post Đơn Giản

```
User: "Viết bài về AI trong marketing"

Phân tích:
1. User cung cấp: Chỉ topic
2. Mục đích: Inform + inspire
3. Độc giả: Professionals phổ thông
4. Platform: Blog
5. Tone: Chuyên nghiệp nhưng engaging

Routing:
• Bỏ qua process (đủ kiến thức)
• Load foundation/quy-tac-viet.md
• Chọn: storytelling (inspire + general)
• Load output/storytelling.md
• Viết content
```

### Ví Dụ 2: Báo Cáo Phân Tích Data

```
User: "Phân tích dữ liệu bán hàng Q3" + file data

Phân tích:
1. User cung cấp: Dữ liệu bán hàng thô
2. Mục đích: Analyze + inform
3. Độc giả: Business professionals
4. Platform: Báo cáo
5. Tone: Phân tích

Routing:
• Load process/phan-tich.md (trích xuất insights)
• Load foundation/quy-tac-viet.md
• Chọn: data-report (analytical + professionals)
• Load output/data-report.md
• Viết báo cáo
```

### Ví Dụ 3: Hướng Dẫn Kỹ Thuật Có Nghiên Cứu

```
User: "Viết hướng dẫn sử dụng blockchain trong ngân hàng"

Phân tích:
1. User cung cấp: Topic
2. Mục đích: Instruct
3. Độc giả: Technical + business
4. Platform: Documentation
5. Tone: Rõ ràng và chuyên nghiệp

Routing:
• Load process/nghien-cuu.md (thu thập info về blockchain)
• Load process/kiem-chung.md (verify technical claims)
• Load foundation/quy-tac-viet.md
• Chọn: technical (instruct + clear)
• Load output/technical.md
• Viết hướng dẫn
```

### Ví Dụ 4: Executive Brief

```
User: "Tóm tắt báo cáo thị trường cho CEO"

Phân tích:
1. User cung cấp: Báo cáo thị trường
2. Mục đích: Inform + hỗ trợ quyết định
3. Độc giả: Executives
4. Platform: Memo/brief
5. Tone: Ngắn gọn và actionable

Routing:
• Load process/phan-tich.md (tổng hợp điểm chính)
• Load foundation/quy-tac-viet.md
• Chọn: executive (brief + decision-makers)
• Load output/executive.md
• Viết brief
```

## Sơ Đồ Module

```
viet-chuyen-nghiep/
│
├── SKILL.md ← Bạn đang ở đây (Router)
│
├── foundation/
│   └── quy-tac-viet.md ← BẮT BUỘC cho mọi nội dung tiếng Việt
│
├── process/ ← Optional, load khi cần
│   ├── phan-tich.md ← Data → Insights
│   ├── nghien-cuu.md ← Topic → Information
│   └── kiem-chung.md ← Claims → Verification
│
└── output/ ← Phương pháp viết
    ├── storytelling.md ← Cảm xúc/Blog [SẴN SÀNG]
    ├── technical-academic.md ← Tài liệu kỹ thuật/Học thuật [SẴN SÀNG]
    ├── technical.md ← Hướng dẫn/Docs [SẴN SÀNG]
    ├── data-report.md ← Phân tích [SẴN SÀNG]
    └── executive.md ← Briefs [SẴN SÀNG]
```

## Checklist Thực Hiện

Với mỗi request tạo nội dung:

- [ ] Phân tích INPUT kỹ lưỡng (trả lời đủ 5 câu hỏi)
- [ ] Xác định có cần process modules không
- [ ] **Load foundation/quy-tac-viet.md** (BẮT BUỘC - không bỏ qua)
- [ ] Chọn output method phù hợp
- [ ] Load các modules đã chọn bằng file_read
- [ ] Viết content theo guidelines đã load
- [ ] Verify đã tuân thủ quy tắc tiếng Việt

## Lỗi Thường Gặp Cần Tránh

**❌ Không nên:**
- Bỏ qua loading Vietnamese foundation
- Trộn cụm từ tiếng Anh trong văn xuôi tiếng Việt ("performance của team")
- Dùng format kiểu AI trong storytelling ("Key insights:")
- Load tất cả modules cùng lúc (lãng phí token)
- Viết trước khi phân tích INPUT

**✅ Nên:**
- Luôn load quy-tac-viet.md trước
- Giữ tiếng Việt thuần túy (chỉ giữ từ quen thuộc như CEO, AI)
- Viết tự nhiên như người Việt
- Load modules dần dần khi cần
- Hoàn thành phân tích INPUT trước khi routing

## Mở Rộng Trong Tương Lai

Skill này có thể mở rộng với các modules bổ sung:

**Process modules:**
- `interview.md` - Phân tích và tổng hợp phỏng vấn
- `survey.md` - Xử lý dữ liệu khảo sát
- `competitor.md` - Phân tích đối thủ

**Output modules:**
- `social-media.md` - Posts cho từng platform
- `email.md` - Email campaigns
- `presentation.md` - Nội dung slide
- `video-script.md` - Script cho video

Thêm modules mới vào thư mục phù hợp và update router này.

---

**Token Budget:** ~2,000 tokens
**Vai trò:** Orchestrator/Router
**Triết lý:** Điều phối nhẹ, ủy thác nặng cho các specialized modules
