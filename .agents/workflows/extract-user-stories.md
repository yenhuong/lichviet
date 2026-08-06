---
description: Extract detailed User Stories from UI prototypes or design files into standardized BPRD format.
---

# Extract User Stories Workflow

> [!IMPORTANT]
> **MANDATORY**: Apply `.agents/rules/documents.md` for all document creation.
> **MANDATORY**: Apply `.agents/skills/viet-chuyen-nghiep/foundation/quy-tac-viet.md` for all Vietnamese output.

## Step 1: Initialization & Context Gathering

// turbo

1. Read the Target File: Use `view_file` to thoroughly read the HTML prototype, code, or design specifications provided by the user.
2. Load Templates: Read `.agents/skills/business-analysis/templates/user-story-detailed.md` to enforce the strict User Story format.
3. Understand the Requirements: Identify the key UI blocks, interactions, and data flows in the target file.

## Step 2: Phase I - Interface Breakdown & Analysis

1. Invoke **[business-analysis]** skill to:
   - Break down the provided UI into logical components/blocks (e.g., Header, Hero Area, Lists, Forms).
   - Analyze user flows, interactions, and data mapping implied by the interface.
   - For each block, identify the primary User Persona, the core Action (What), and the Value (Why).

## Step 3: Phase II - Story Generation (The "BA" Phase)

1. For each identified block, draft a User Story following the exact Agile/Scrum template:
   - **Tiêu đề**: `[Vai trò] - [Tên tính năng]`
   - **Câu chuyện người dùng**: `Với vai trò... Tôi muốn... Để...`
   - **Tiêu chí nghiệm thu**: Viết dưới dạng Bullet checklist (`- [ ]`), mỗi dòng = 1 điều kiện kiểm chứng được. Dùng ký hiệu `→` cho hành vi sau hành động. Đảm bảo bao phủ: hiển thị, ẩn/hiện theo state, edge cases, nguồn dữ liệu.
   - **Luồng thao tác**: Mô tả tuần tự (1, 2, 3...) cách hệ thống phản hồi thao tác.
   - **Ghi chú kỹ thuật**: API liên quan (nếu có), Component UI, Ảnh hưởng State.
   - **Điều kiện hoàn thành (DoD)**: Các checkpoint kỹ thuật để bàn giao.
2. Enforce Language Rules: Ensure no mixed English (unless technical terms like Component, API, State) and correct capitalization per Vietnamese writing rules.

## Step 4: Documentation & Verification

1. Create or Update Document: Save the extracted User Stories to a new Markdown file in the `docs/` directory, named appropriately (e.g., `docs/US-[FeatureName].md`).
   // turbo
2. Verify Formatting: Ensure markdown formatting (tables, lists, blockquotes) is perfectly aligned.
3. **WAIT** for user approval: Present the extracted User Stories to the user, highlighting any assumptions made about edge cases or API behaviors, and ask for their review.
