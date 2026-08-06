# Generate User Story Workflow

> [!IMPORTANT]
> **MANDATORY**: Apply `.agents/rules/documents.md` for all document creation.
> **MANDATORY**: Apply `.agents/skills/viet-chuyen-nghiep/foundation/quy-tac-viet.md` for all Vietnamese output.

## Step 1: Initialization & Design Analysis

1. **Read & Analyze Input Source**: Use `view_file` or visual analysis tools to read the provided **Prototype (HTML)**, **Figma link**, or **Design Image**.
2. **Invoke `business-analysis/user-story` sub-skill**:
   - Read and apply the rules from `.agents/skills/business-analysis/user-story/SKILL.md`.
   - Identify operation mode (New/Refine/Add AC).
   - Collect mandatory inputs (Persona, Goal, Value, Context) based on the design analysis.
3. **Verify Inputs**: Do not proceed until all inputs are clearly defined and aligned with the visual/code input.

## Step 2: Story Generation & INVEST Check

1. **Draft User Story**: Use the standard template found in `.agents/skills/business-analysis/user-story/templates/user-story-template.md`.
2. **Apply INVEST Checklist**: Evaluate the story against the 6 criteria defined in the sub-skill logic. Ensure it's ready for estimation.

## Step 3: Acceptance Criteria (AC) Generation

1. **Generate Scenarios**: Create at least 3 ACs (Happy/Edge/Negative) using the **Bullet Checklist (`- [ ]`)** format defined in `.agents/skills/business-analysis/user-story/templates/ac-template.md`.
2. **Review AC Quality**: Ensure criteria are measurable, each line is an independent testable condition (`[Điều kiện] + [Hành động] -> [Kết quả]`), and free of technical implementation details.

## Step 4: Documentation & Output

1. **Format Final Document**: Organize content as:
   - User Story (3 lines)
   - INVEST Self-check (Table with ✅/⚠️)
   - Acceptance Criteria (AC1, AC2, ...)
   - Notes (Dependencies, Assumptions)
2. **Save to Backlog**:
   // turbo
   - Create a new Markdown file in `docs/022-User-Stories/Backlog/` named `Story-[FeatureName].md`.
   - Update `docs/022-User-Stories/Stories-MOC.md`.

## Step 5: Verification & Review

1. **Review Vietnamese**: Ensure professional tone and correct grammar using `viet-chuyen-nghiep` rules.
2. **WAIT** for user approval: Present the story and ask for final review.
