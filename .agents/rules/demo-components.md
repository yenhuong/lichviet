---
trigger: model_decision
description: Apply when building or editing an HTML demo (prototype) screen, or when syncing the component library from Figma
---
# Demo Component Rules

> [!IMPORTANT]
> HTML demos MUST be built from the shared component library in `prototype/design-system/`.
> Figma is the source of truth for tokens and components; the repo library is a synced copy.

## Library

| File | Content |
|---|---|
| `prototype/design-system/tokens.css` | Color, spacing, radius tokens and `.text-*` text styles, synced from Figma Variables / Text Styles |
| `prototype/design-system/components.css` | `lv-*` components mirroring Figma components (imports `tokens.css`) |
| `prototype/design-system/index.html` | Catalog: every component, its variants and copy-paste HTML |

Figma source: file `b6o4GAgCeVxtngbWRzDCGB` ("Y-Kien"), page "Symbols", frame "Góp ý · Components".

Naming map: Figma `color/text/primary` → CSS `--color-text-primary`; Figma text style `title/md` → class `.text-title-md`.

## Building a Demo

1. Phone frame is fixed at 414 × 896, matching the screen size in Figma.
1. Link `../design-system/components.css` (path relative to the demo file). Do not copy token values into the demo.
2. Check `index.html` first and reuse an existing component or variant whenever possible.
3. Every component root keeps its `data-component="<Figma component name>"` attribute. This is what maps layers back to Figma components after import into Figma (see `.agents/workflows/html-to-figma.md`).
4. Screen-specific CSS may only use tokens (`var(--color-*)`, `var(--space-*)`, `var(--radius-*)`, `.text-*`). No raw hex colors, no ad-hoc font sizes, spacing or radius values.
5. Build every state as its own reachable view (popup open, toast shown, error, empty, limit reached), e.g. via URL hash `#state=success`, so each can be imported into Figma as a separate frame.
6. Text in the demo is final copy. It must match the User Story exactly.

## Missing Component

1. Only create a new component if no existing component/variant fits.
2. Prefix the class with `new-` (e.g. `.new-rating-card`) and set `data-component="new/<Name>"`.
3. Build it with tokens only.
4. List it in the hand-off under "Component mới chờ chuẩn hóa": name, screens using it, states.
5. Do not add `new-` components to `components.css`. They live in the demo until the designer standardizes them in Figma.

## Syncing From Figma

Run when the designer adds or changes a component in Figma:

1. Read Figma Variables and Text Styles → update `tokens.css` (keep the naming map).
2. Read the changed component (layout, padding, gap, radius, bound variables, variants) → add/update its `lv-*` block in `components.css` and its entry in `index.html`.
3. Update the "Last sync" date in both CSS files.
4. Verify: the HTML component uses the same tokens, variants and sizes as the Figma component. Report any mismatch.
5. Remove the component from the "Component mới chờ chuẩn hóa" list.
6. Update the token and component tables in `docs/040-Design/Design-System/Design-System.md`.
