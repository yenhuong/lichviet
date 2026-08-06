---
trigger: model_decision
description: Always apply when editing, creating, or iterating on prototype HTML files in the prototype/ directory
---
# Prototype Iteration Rules

> [!IMPORTANT]
> This rule governs how the agent handles prototype changes and documentation sync.
> It applies whenever files in `prototype/` are modified.

## Change Classification

Before making any prototype edit, classify the change:

| Category | Examples | Doc Sync Required? |
|---|---|---|
| **Cosmetic** | Spacing, font size, colors, border-radius, shadows, padding | ❌ No |
| **Content** | Text changes, label updates, icon swaps | ❌ No |
| **Behavioral** | Add/remove feature, change button action, add/remove popup, modify interaction logic | ⚡ Yes — inline sync |
| **Structural** | Add/remove entire block/section, change navigation flow, add new screen | ⚠️ Yes — inline sync + verify scope |

## Sync Rules by Category

### Cosmetic & Content Changes
1. Edit the prototype HTML only.
2. No documentation updates needed.
3. Confirm the change to the user and move on.

### Behavioral Changes
1. Edit the prototype HTML.
2. **Immediately after**, check if a related User Story exists in `docs/022-User-Stories/`.
3. If yes → update the relevant Acceptance Criteria (AC) or add new ones.
4. If a Design Spec exists in `docs/040-Design/Specs/` → update it too.
5. Briefly note what was synced in the response.

### Structural Changes
1. Edit the prototype HTML.
2. **Immediately after**, update ALL related docs:
   - User Story (AC, flow, condition tables)
   - Design Spec (component list, layout)
   - Design System (if new tokens/components introduced)
3. List all docs updated in the response.

## Finding Related Documentation

Since new prototypes can be added at any time, use the following generic approach to find related documentation for ANY prototype file:

1. **Identify the Core Feature:** Extract the main feature name from the prototype filename (e.g., `Dichvu_V2.html` -> `DichVu`, `destiny_redesign.html` -> `Destiny`, `TrangChu_V2.html` -> `TrangChu`).
2. **Search User Stories:** Look for files in `docs/022-User-Stories/` matching `*FeatureName*.md` (e.g., `Story-DichVu-*.md`).
3. **Search Design Specs:** Look for files in `docs/040-Design/Specs/` matching `*FeatureName*.md` (e.g., `Spec-Destiny*.md`).
4. **Verify:** If multiple documents match, briefly review them to find the one that accurately corresponds to the modified prototype section.

> [!NOTE]
> If no matching doc exists for a prototype, skip the sync step.
> Do NOT create new User Stories or Specs automatically — only update existing ones.

## Session-End Sync

When the user indicates the prototype is finalized (e.g., "OK xong rồi", "prototype ổn rồi", "ship được rồi"), perform a final sync:

1. List all changes made during the session.
2. Verify all Behavioral/Structural changes have been synced to docs.
3. If any were missed, update them now.
4. Present a sync summary table:

```
| Change | Type | Prototype | Doc Synced? |
|---|---|---|---|
| Added feature X | Behavioral | ✅ | ✅ Story updated |
| Changed color Y | Cosmetic | ✅ | — (not needed) |
```

## Anti-Patterns (DO NOT)

- ❌ Do NOT update docs for every cosmetic tweak — this slows iteration.
- ❌ Do NOT create new documentation files during iteration — only update existing.
- ❌ Do NOT ask the user "should I update docs?" for Behavioral/Structural changes — just do it.
- ❌ Do NOT skip doc sync for Behavioral/Structural changes — this causes drift.
