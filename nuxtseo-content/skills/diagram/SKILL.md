---
name: Diagram
description: Use for "create diagram", "flowchart", "decision tree", "architecture diagram", "visualize", or when content needs visual explanation.
version: 0.7.0
---

# Diagram

Generate D2 diagrams matching user's design system. Outputs SVG to public directory.

## When to Suggest

Proactively offer diagrams for:
- Decision logic ("if X then Y")
- Multi-step processes (3+ steps)
- Architecture/data flow
- Comparisons with branching outcomes

## Artifacts

**Reads:**
- `.claude/context/design-tokens.md` - Brand colors (if exists)

**Creates:**
- `<name>.d2` - D2 source
- `public/<page-path>/<name>.svg` - Generated SVG

**Requires:** d2 CLI (`brew install d2`)

## Workflow

### 1. Extract Design Tokens (First Run)

If `design-tokens.md` doesn't exist, check in order:
1. `tailwind.config.ts` - `theme.extend.colors`
2. `app.config.ts` - `ui.primary`, `ui.gray`
3. `assets/css/main.css` - CSS custom properties

Write to `.claude/context/design-tokens.md`. See `references/design-tokens.md` for format.

### 2. Output Path

Derive from current page: `content/docs/guide/meta.md` → `public/docs/guide/meta/<name>.svg`

### 3. Create Diagram

Keep minimal: max 10-12 nodes, single concept, clear flow direction.

Use design tokens for theming:
- `primary` for decisions/key paths
- `success` for recommended outcomes
- `gray` for defaults
- `border-radius: 8`, `shadow: true`

### 4. Generate SVG

```bash
d2 --pad 24 --theme 0 <name>.d2 public/<path>/<name>.svg
```

### 5. Link in Content

```md
![<alt describing conclusion>](/<path>/<name>.svg)
```

## Alt Text

Write what the diagram concludes, not its structure:
- Good: "Use SSR if content needs indexing; otherwise SPA"
- Bad: "Flowchart showing SSR decision"
