# Design Token Extraction

Extract brand colors from user's project for diagram theming.

## Extraction Order

Check in order, stop when found:

1. **tailwind.config.ts** - `theme.extend.colors`
2. **app.config.ts** - `ui.primary`, `ui.gray` (Nuxt UI preset names)
3. **assets/css/main.css** - CSS custom properties
4. **Live site** - Fetch homepage, extract computed styles

## Output Format

Write to `.claude/context/design-tokens.md`:

```yaml
# Design Tokens
Extracted: YYYY-MM-DD
Source: [file(s) checked]

primary:
  light: '#dbeafe' # node fill
  base: '#3b82f6' # stroke
  dark: '#1e3a8a' # text

gray:
  50: '#f9fafb' # backgrounds
  200: '#e5e7eb' # borders
  700: '#374151' # text

success:
  light: '#dcfce7'
  base: '#22c55e'

warning:
  light: '#fef3c7'
  base: '#f59e0b'

error:
  light: '#fee2e2'
  base: '#ef4444'

border_radius: 8
font_family: 'Inter, system-ui, sans-serif'
```

## Nuxt UI Presets

When `app.config.ts` uses preset names like `primary: 'green'` or `gray: 'zinc'`, map to Tailwind color palette values. Claude knows these.

## Fallback

If no tokens found, use Tailwind defaults: blue-500 primary, gray scale, 8px radius.
