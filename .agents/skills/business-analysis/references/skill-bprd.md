---
name: bprd
description: 'Generate high-quality Business & Product Requirements Documents (BPRDs) acting as the Single Source of Truth for all stakeholders (Business, Dev, QA, Design).'
license: MIT
---

# Business & Product Requirements Document (BPRD)

## Overview

Design comprehensive, production-grade BPRDs that bridge the gap between business vision, functional requirements, and technical execution. This skill replaces separate BRD and PRD files with a unified document.

## When to Use

Use this skill when:

- Starting a new product or feature development cycle
- Translating a vague idea into a concrete business & technical specification
- Stakeholders (Business, Dev, QA, Design) need a unified "source of truth"
- User asks to "write a PRD", "write a BRD", "write a BPRD", or "plan a feature"

---

## Operational Workflow

### Phase 1: Discovery (The Interview)

Before writing a single line of the BPRD, you **MUST** interrogate the user to fill knowledge gaps. Do not assume context. Nghiệp vụ Business & Product phải đi đôi với nhau.

**Ask about:**

- **The Core Problem**: Why are we building this now?
- **Success Metrics**: How do we know it worked?
- **Constraints**: Budget, tech stack, or deadline?

### Phase 2: Analysis & Scoping

Synthesize the user's input. Identify dependencies and hidden complexities.

- Map out the **User Flow**.
- Define **Non-Goals** to protect the timeline.

### Phase 3: Drafting & Formatting

Generate the document using the **BPRD Template** located at `.agents/skills/business-analysis/templates/bprd.md`. 
**CRITICAL:** You MUST read the `bprd.md` template file and strictly follow its structure (9 main sections: Thông tin chung, Tổng quan kinh doanh, Personas, Yêu cầu nghiệp vụ, Yêu cầu sản phẩm, v.v.).

---

## BPRD Quality Standards

### Requirements Quality

Use concrete, measurable criteria. Avoid "fast", "easy", or "intuitive".

```diff
# Vague (BAD)
- The search should be fast and return relevant results.
- The UI must look modern and be easy to use.

# Concrete (GOOD)
+ The search must return results within 200ms for a 10k record dataset.
+ The search algorithm must achieve >= 85% Precision@10 in benchmark evals.
+ The UI must follow the 'Vercel/Next.js' design system and achieve 100% Lighthouse Accessibility score.
```

---

## Implementation Guidelines

### DO (Always)

- **Unify Perspectives**: Represent both the Business (Why/ROI) and the Product/Dev (How/ACs) in the same document.
- **Iterate**: Present a draft and ask for feedback on specific sections.

### DON'T (Avoid)

- **Skip Discovery**: Never write a BPRD without asking at least 2-3 clarifying questions first.
- **Use Old Formats**: Never generate a standalone BRD or PRD. Always use the BPRD format.

---

## Example: Intelligent Search System

### 1. Executive Summary

**Problem**: Users struggle to find specific documentation snippets in massive repositories.
**Solution**: An intelligent search system that provides direct answers with source citations.
**Success**:

- Reduce search time by 50%.
- Citation accuracy >= 95%.

### 2. User Stories

- **Story**: As a developer, I want to ask natural language questions so I don't have to guess keywords.
- **AC**:
  - Supports multi-turn clarification.
  - Returns code blocks with "Copy" button.

### 3. AI System Architecture

- **Tools Required**: `codesearch`, `grep`, `webfetch`.

### 4. Evaluation

- **Benchmark**: Test with 50 common developer questions.
- **Pass Rate**: 90% must match expected citations.
