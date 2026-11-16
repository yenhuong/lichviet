---
description: Convert an HTML demo screen in prototype/ into Figma frames that reuse the shared Figma components.
---

# HTML to Figma Workflow

> [!IMPORTANT]
> **MANDATORY**: Read `.agents/rules/demo-components.md` and `.agents/rules/prototype-iteration.md` before starting.
> Figma is the source of truth for tokens and components. The HTML demo only feeds layout and copy into Figma.

---

## MCP Usage Guidelines

| Tool                                     | When to Use                                                  |
| :--------------------------------------- | :----------------------------------------------------------- |
| `create_session`                         | First call once the target Figma fileKey is known            |
| `search_design_system` / `get_libraries` | Find existing components, variables, text styles to reuse   |
| `use_figma` (load `/figma-use` first)    | Build frames, place component instances, bind variables      |
| `get_screenshot` / `get_metadata`        | Verify the resulting frames                                  |

Target Figma file: `o0hWmJRQOx48gbUPt8rHmt` ("Lich-Viet-App"), node `192:80` ([link](https://www.figma.com/design/o0hWmJRQOx48gbUPt8rHmt/Lich-Viet-App?node-id=192-80)). Imported frames go here.
Component source: see "Figma source" in `demo-components.md`.

---

## Step 1: Pre-flight Check of the HTML Demo

// turbo

1. Identify the demo file(s) in `prototype/` and the related User Story in `docs/022-User-Stories/`.
2. Check the demo against `demo-components.md`:
   - Phone frame is 414 × 896.
   - Links `../design-system/components.css`, no copied token values.
   - Every component root has `data-component="<Figma component name>"`.
   - Screen CSS uses tokens only (no raw hex, ad-hoc font size, spacing, radius).
   - Every state is reachable on its own URL hash (e.g. `#state=error`).
   - Copy matches the User Story exactly.
3. List all states to export, one Figma frame per state.
4. List `new-*` components (no Figma counterpart yet).
5. Fix any violation in the demo first. **WAIT** for user confirmation if fixes change behavior or copy.

---

## Step 2: Build Frames in Figma

The agent reads the HTML file directly from `prototype/` (plus `prototype/design-system/tokens.css` and `components.css`) and builds the frames itself via Figma MCP. No deploy, no html.to.design plugin.

1. Read the demo HTML, its screen CSS and the state logic (which blocks show for each `#state=`).
2. Load `/figma-use`, call `create_session` on the target file, then `search_design_system` to resolve every `data-component` name to a Figma component.
3. Create a page named `<Feature> · Import <YYYY-MM-DD>`. For each state, build one frame 414 × 896 (screen size used in the target Figma file) unless the user says otherwise. If an older demo has another width (e.g. 390), keep content at fill width so it reflows to 414, and note it in the hand-off:
   - Layers with `data-component` → instance of the matching Figma component with the correct variant.
   - Other layers → auto layout frames following the HTML structure, fills, strokes, spacing, radius bound to Figma Variables, text bound to Text Styles (naming map in `demo-components.md`).
   - `new-*` components → plain frames, layer name prefixed `new/`, frame label colored so the designer can find them.
   - Images → upload from `prototype/` assets.
4. Name frames `<Screen> / <State>` and arrange them left-to-right following the user flow.

---

## Step 3: Verify

1. `get_screenshot` each frame and compare with the HTML source of that state (layout, copy, components). Do not open the demo in a browser.
2. Check: no detached raw colors or text styles, copy unchanged, all states present.
3. Report any mismatch (component missing in Figma, variant missing, token mismatch) to the user.

---

## Step 4: Hand-off

Reply to the user in Vietnamese with:

- Figma link to the import page and the frame list.
- "Component mới chờ chuẩn hóa": name, screens using it, states.
- Mismatches found in Step 3.

After the designer standardizes the new components, run "Syncing From Figma" in `demo-components.md` to update `prototype/design-system/`.

---

## Quick Reference

| Step | Action                         | Output                            |
| ---- | ------------------------------ | --------------------------------- |
| 1    | Pre-flight check               | State list, `new-*` list          |
| 2    | Read HTML, build frames via MCP | Frames using component instances |
| 3    | Verify                         | Mismatch report                   |
| 4    | Hand-off                       | Figma link + pending components   |
