# Design Token Extraction

Extract brand colors and styles from user's project for diagram theming.

## Extraction Sources

Check in order, stop when tokens found:

### 1. Tailwind Config

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: { 500: '#3b82f6', 600: '#2563eb' },  // → primary
        gray: { 100: '#f3f4f6', 800: '#1f2937' },     // → neutral
      }
    }
  }
}
```

### 2. Nuxt UI App Config

```ts
// app.config.ts
export default defineAppConfig({
  ui: {
    primary: 'green',      // → map to tailwind green palette
    gray: 'zinc',          // → map to tailwind zinc palette
    colors: ['primary', 'success', 'warning', 'error']
  }
})
```

Color mapping for Nuxt UI presets:

| Name | 500 (fill bg) | 600 (stroke) | 900 (text) |
|------|---------------|--------------|------------|
| `red` | `#ef4444` | `#dc2626` | `#7f1d1d` |
| `orange` | `#f97316` | `#ea580c` | `#7c2d12` |
| `amber` | `#f59e0b` | `#d97706` | `#78350f` |
| `yellow` | `#eab308` | `#ca8a04` | `#713f12` |
| `lime` | `#84cc16` | `#65a30d` | `#365314` |
| `green` | `#22c55e` | `#16a34a` | `#14532d` |
| `emerald` | `#10b981` | `#059669` | `#064e3b` |
| `teal` | `#14b8a6` | `#0d9488` | `#134e4a` |
| `cyan` | `#06b6d4` | `#0891b2` | `#164e63` |
| `sky` | `#0ea5e9` | `#0284c7` | `#0c4a6e` |
| `blue` | `#3b82f6` | `#2563eb` | `#1e3a8a` |
| `indigo` | `#6366f1` | `#4f46e5` | `#312e81` |
| `violet` | `#8b5cf6` | `#7c3aed` | `#4c1d95` |
| `purple` | `#a855f7` | `#9333ea` | `#581c87` |
| `fuchsia` | `#d946ef` | `#c026d3` | `#701a75` |
| `pink` | `#ec4899` | `#db2777` | `#831843` |
| `rose` | `#f43f5e` | `#e11d48` | `#881337` |

Gray scales:

| Name | 50 (light bg) | 200 (border) | 400 (muted) | 700 (text) | 900 (dark) |
|------|---------------|--------------|-------------|------------|------------|
| `slate` | `#f8fafc` | `#e2e8f0` | `#94a3b8` | `#334155` | `#0f172a` |
| `gray` | `#f9fafb` | `#e5e7eb` | `#9ca3af` | `#374151` | `#111827` |
| `zinc` | `#fafafa` | `#e4e4e7` | `#a1a1aa` | `#3f3f46` | `#18181b` |
| `neutral` | `#fafafa` | `#e5e5e5` | `#a3a3a3` | `#404040` | `#171717` |
| `stone` | `#fafaf9` | `#e7e5e4` | `#a8a29e` | `#44403c` | `#1c1917` |

### 3. CSS Custom Properties

```css
/* assets/css/main.css */
:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --radius: 0.5rem;
  --font-sans: 'Inter', sans-serif;
}
```

### 4. Live Site Extraction

If deployed, fetch homepage and extract:

```js
// computed styles from :root
getComputedStyle(document.documentElement)
  .getPropertyValue('--color-primary')
```

## Output Format

Write to `.claude/context/design-tokens.md`:

```yaml
# Design Tokens

Extracted: YYYY-MM-DD
Source: tailwind.config.ts, app.config.ts

## Colors

primary:
  light: "#dbeafe"    # fill for highlighted nodes
  base: "#3b82f6"     # stroke, accents
  dark: "#1e3a8a"     # text on light bg

gray:
  50: "#f9fafb"       # node backgrounds
  200: "#e5e7eb"      # subtle borders
  400: "#9ca3af"      # muted text, edges
  700: "#374151"      # primary text
  900: "#111827"      # headings

success:
  light: "#dcfce7"
  base: "#22c55e"
  dark: "#14532d"

warning:
  light: "#fef3c7"
  base: "#f59e0b"
  dark: "#78350f"

error:
  light: "#fee2e2"
  base: "#ef4444"
  dark: "#7f1d1d"

## Typography

font_family: "Inter, system-ui, sans-serif"
font_size_base: 14
font_size_heading: 16

## Shape

border_radius: 8
padding: 12
shadow: true
```

## Dark Mode Support

If site has dark mode, extract both palettes:

```yaml
light:
  primary:
    light: "#dbeafe"
    base: "#3b82f6"
    dark: "#1e3a8a"
  gray:
    50: "#f9fafb"
    200: "#e5e7eb"
    700: "#374151"
    900: "#111827"
  background: "#ffffff"

dark:
  primary:
    light: "#1e3a8a"
    base: "#60a5fa"
    dark: "#dbeafe"
  gray:
    50: "#18181b"
    200: "#3f3f46"
    700: "#d4d4d8"
    900: "#fafafa"
  background: "#09090b"
```

For dark mode sites, generate two SVGs:
- `<name>.svg` — light mode
- `<name>-dark.svg` — dark mode

Link with picture element:
```html
<picture>
  <source srcset="/<path>/<name>-dark.svg" media="(prefers-color-scheme: dark)">
  <img src="/<path>/<name>.svg" alt="...">
</picture>
```

Or use CSS filter fallback (less precise):
```css
.dark img[src$=".svg"] {
  filter: invert(1) hue-rotate(180deg);
}
```

## Fallback

If no design tokens found, use defaults:

```yaml
primary:
  light: "#dbeafe"
  base: "#3b82f6"
  dark: "#1e3a8a"

gray:
  50: "#f9fafb"
  200: "#e5e7eb"
  400: "#9ca3af"
  700: "#374151"
  900: "#111827"

border_radius: 8
font_family: "system-ui, sans-serif"
```
