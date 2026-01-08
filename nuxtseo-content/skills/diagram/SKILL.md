---
name: Diagram
description: Use for "create diagram", "flowchart", "decision tree", "architecture diagram", "visualize", or when content needs visual explanation.
version: 0.5.0
---

# Diagram

Generate modern D2 diagrams matching user's design system. Outputs SVG to public directory.

## When to Suggest

Proactively offer diagrams when writing content that includes:
- Decision logic ("if X then Y, otherwise Z")
- Multi-step processes (3+ sequential steps)
- Architecture/data flow explanations
- Comparisons with branching outcomes
- Complex relationships between concepts

Ask: "This would be clearer with a diagram. Want me to generate one?"

## Artifacts

**Reads:**
- `.claude/context/site-config.md` — Site URL for path context
- `.claude/context/design-tokens.md` — Brand colors, fonts (if exists)

**Creates:**
- `<name>.d2` — D2 source file (in content directory)
- `public/<page-path>/<name>.svg` — Generated SVG
- `.claude/context/design-tokens.md` — Extracted design tokens (first run)

**Requires:** d2 CLI (`brew install d2` or `go install oss.terrastruct.com/d2@latest`)

## Workflow

### 1. Extract Design Tokens (First Run)

If `design-tokens.md` doesn't exist, extract from project:

**Check in order:**

1. **tailwind.config.ts** — `theme.extend.colors`
2. **app.config.ts** — `ui.colors`, `ui.primary`, `ui.gray`
3. **nuxt.config.ts** — `app.head` for font families
4. **assets/css/main.css** — CSS custom properties
5. **Existing site** — Fetch homepage, extract computed styles

Extract:
- Primary color (brand)
- Gray scale (for neutrals)
- Accent colors (success, warning, error)
- Font family
- Border radius tokens

Write to `.claude/context/design-tokens.md`.

### 2. Determine Output Path

From current page path, derive SVG location:

```
content/docs/guide/meta-tags.md → public/docs/guide/meta-tags/<name>.svg
content/blog/seo-basics.md → public/blog/seo-basics/<name>.svg
```

### 3. Design Diagram

Keep minimal:
- Max 10-12 nodes for decision trees
- Single concept per diagram
- Clear flow direction (usually `direction: down` or `direction: right`)

### 4. Apply Theme

Load colors from `design-tokens.md` and map to diagram elements:

| Token | Diagram Use |
|-------|-------------|
| `primary` | Decision nodes, key paths |
| `gray` | Default nodes, edges |
| `success` | Positive outcomes, recommended |
| `warning` | Caution, deprecated |
| `error` | Anti-patterns, avoid |

Apply modern styling from `references/modern-styles.md`:
- Rounded corners (`border-radius: 8`)
- Subtle shadows
- Consistent padding
- Clean typography

### 5. Write D2 File

Create `<name>.d2` alongside content file or in designated diagrams folder.

### 6. Generate SVG

Run:
```bash
d2 --pad 24 <name>.d2 public/<page-path>/<name>.svg
```

### 7. Link in Content

Add to markdown:
```md
![<alt text>](/<page-path>/<name>.svg)
```

## Quality Check

- Uses brand colors from design-tokens.md
- Contrast ≥ 4.5:1, no color as only differentiator
- Max 12 nodes, clear labels
- Works in dark mode (if site supports)

## Alt Text

Write alt text that conveys conclusion, not structure:

| Bad | Good |
|-----|------|
| "Flowchart showing SSR decision" | "Use SSR if content needs indexing; otherwise SPA is fine" |
| "Architecture diagram" | "Client connects to API server, which queries PostgreSQL" |
