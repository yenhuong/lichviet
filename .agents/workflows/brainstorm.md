---
description: Analyze ideas with the user and create preliminary high-level documents (Roadmap, PRD).
---

# Brainstorm Workflow

> [!IMPORTANT]
> **MANDATORY**: Read `.agent/rules/documents.md` before creating any document.

---

## MCP Usage Guidelines

| MCP Tool                                     | When to Use                                            | Example                                 |
| :------------------------------------------- | :----------------------------------------------------- | :-------------------------------------- |
| `mcp_sequential-thinking_sequentialthinking` | Analyze requirements, feature dependencies, trade-offs | Break down ambiguous requests           |
| `mcp_context7_resolve-library-id`            | Find library ID before querying                        | "mermaid js"                            |
| `mcp_context7_query-docs`                    | Research library patterns, APIs, best practices        | "How to setup auth in Next.js"          |
| `search_web`                                 | Proactive research for implementation patterns         | "best architecture for agentic systems" |

---

## Step 1: Deep Research

// turbo

> 💡 **MANDATORY**: Follow `.agent/rules/research.md` before starting any ideation.

1. **Invoke `[research]`** (via `search_web` + `read_url_content`) to:
   - Identify 5-10 key trends in the project's domain.
   - Find "best-in-class" examples of similar products.
   - Identify common pitfalls and modern "Wow Factors".
2. Create `research-insights.md` artifact in `docs/050-Research/`.
3. **WAIT** for user to review the research findings.

---

## Document Priority Order

```
Priority 0: Roadmap       ← Project Planning & Timeline
Priority 1: BPRD          ← Single Source of Truth for Requirements
```

---

## Step 2: Clarification & Understanding

**Role: Product Manager**

> [!NOTE]
> This step is **MANDATORY**. Do NOT proceed without user confirmation.

> 💡 **MCP**: Use `sequential-thinking` to analyze ambiguous or complex requests

1. **Invoke `[product-manager]` skill** to:
   - Summarize understanding
   - Create clarification questions
2. Create `clarification-questions.md` artifact
3. **WAIT** for user to review and confirm

---

## Step 3: Create Roadmap

// turbo

> 💡 **MCP**: Use `sequential-thinking` for phased planning and risk assessment

1. **Invoke `[product-manager]` skill** to draft:
   - Project timeline and milestones
   - Phase breakdown (MVP, v1.0, v2.0)
   - Key deliverables per phase
2. Create `draft-roadmap.md` artifact
3. After approval → Save to `docs/010-Planning/Roadmap-{ProjectName}.md`
4. **WAIT** for user response

---

## Step 4: Create BPRD (Single Source of Truth)

// turbo

1. **Invoke `[business-analysis]` skill** to draft the BPRD:
   - **CRITICAL**: Read `.agents/skills/business-analysis/references/skill-bprd.md` to grasp the mindset.
   - Use the `templates/bprd.md` skeleton.
   - Cover both Business Objectives (ROI, KPIs) and Product Logic (User Flows, Edge Cases).
2. Create `draft-bprd.md` artifact
3. After approval → Save to `docs/020-Requirements/BPRD/BPRD-{NNN}-{ProjectName}.md`
4. **WAIT** for user response

---

## Step 5: Transition to Documentation

1. Present summary of created artifacts (Roadmap, BPRD).
2. Suggest next step: Run `/documentation` to generate detailed specifications (SDD, Epics, User Stories) based cleanly on the new BPRD.
