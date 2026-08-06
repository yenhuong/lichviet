---
name: writing-skills
description: Use when creating new skills, editing existing skills, or verifying skills work before deployment
---

# Writing Skills

## Overview

**Writing skills IS Test-Driven Development applied to process documentation.**

You write test cases (pressure scenarios with subagents), watch them fail (baseline behavior), write the skill (documentation), watch tests pass (agents comply), and refactor (close loopholes).

**Core principle:** If you didn't watch an agent fail without the skill, you don't know if the skill teaches the right thing.

> [!IMPORTANT]  
> **REQUIRED BACKGROUND:** You MUST understand `superpowers:test-driven-development` before using this skill. That skill defines the fundamental RED-GREEN-REFACTOR cycle. This skill adapts TDD to documentation.

## When to Create a Skill

**Create when:**
- Technique wasn't intuitively obvious to you
- You'd reference this again across projects
- Pattern applies broadly (not project-specific)

**Don't create for:**
- One-off solutions or project-specific conventions (put in `CLAUDE.md` or `.agents/rules/`)
- Standard practices well-documented elsewhere
- Mechanical constraints (if it's enforceable with regex/validation, automate it)

## 🚀 Core Workflows

### Phase 1: Creation (The "GREEN" Phase)
When asked to write a skill, you must use the standard template.
- **Action**: Use `view_file` to read `templates/skill-template.md` before drafting.
- **Action**: Read `references/cso-guide.md` to learn how to write effective frontmatter descriptions and keywords.

### Phase 2: Testing & Bulletproofing (The "RED" & "REFACTOR" Phases)
No skill is complete without failing tests first.
- **Action**: Use `view_file` to read `references/testing-and-bulletproofing.md` to understand how to design pressure scenarios.
- **Testing Approach**: For rule/discipline skills, test with time/sunk-cost pressures. For technique skills, test with application scenarios.

### Phase 3: Deployment & Review
Before moving to the next skill or concluding the task, you must verify the skill.
- **Action**: Use `view_file` to read `templates/skill-creation-checklist.md` and complete every item.
- **Final Step**: Commit the skill to version control (if requested).

## 📚 Reference Library

### Templates

| Template              | Path                               | Purpose                                                                                                        |
| --------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Skill Template**    | `templates/skill-template.md`      | Cấu trúc chuẩn bắt buộc của 1 file `SKILL.md` kèm hướng dẫn điền YAML.                                          |
| **Creation Checklist**| `templates/skill-creation-checklist.md` | Bảng kiểm nghiệm thu các công đoạn RED-GREEN-REFACTOR trước khi hoàn tất 1 skill.                            |

### Frameworks & Manuals (References)

| Reference                    | Path                                           | Purpose                                                                                                |
| ---------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **CSO Guide**                | `references/cso-guide.md`                      | Hướng dẫn viết Description để tối ưu tìm kiếm (Claude Search Optimization), từ khóa, giới hạn token. |
| **Testing & Bulletproofing** | `references/testing-and-bulletproofing.md`     | Chiến lược TDD, The Iron Law, xử lý rationalizations, và cách viết rule chống lách luật.               |
| Anthropic Best Practices     | `anthropic-best-practices.md`                  | Hướng dẫn chung của Anthropic về việc tạo skill.                                                       |
| Testing with Subagents       | `testing-skills-with-subagents.md`             | Kỹ thuật gọi subagent để test thử rule.                                                                |
| Persuasion Principles        | `persuasion-principles.md`                     | Các nguyên tắc tâm lý (Cialdini) để viết rule có tính răn đe cao.                                      |
