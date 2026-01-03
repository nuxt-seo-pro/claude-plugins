# Landing Page Design Patterns

Common patterns for developer tool landing pages.

## Visual Hierarchy

### Dark-First Design

Most developer tools use dark themes:
- Primary background: near-black (`#0a0a0a` - `#171717`)
- Elevated surfaces: slightly lighter
- Single accent color for CTAs
- High contrast text

### Terminal Aesthetic

Developer-friendly visual language:
- Monospace fonts for code, versions, commands
- `$` prompt prefix for CLI elements
- Code syntax highlighting in UI
- Minimal ornamentation (no shadows, gradients)

## Layout Patterns

### Hero Section

```
Section (pt-16 pb-24)
└── Container (max-w-4xl)
    ├── Meta line (version badge, breadcrumb)
    ├── H1 (4xl-6xl, semibold)
    ├── Description (lg, muted)
    ├── Primary action (install command or CTA)
    └── Secondary actions (docs, GitHub)
```

### Feature Grid

```
Section (py-20)
└── Container
    ├── Section title
    └── Grid (2-3 columns)
        └── Feature cards
            ├── Icon
            ├── Title
            └── Description
```

### Stats Row

```
Section (py-20)
└── Container
    └── Grid (4 columns)
        └── Stat items
            ├── Number (large, monospace)
            └── Label (muted)
```

### Code Comparison

```
Section (py-20)
└── Container
    └── Side-by-side
        ├── "Before" code block
        └── "After" code block
```

## Component Patterns

### Buttons

| Type | Pattern | Usage |
|------|---------|-------|
| Primary | Solid accent color | Main CTA |
| Secondary | Outline, muted border | Alternative action |
| Ghost | No border/background | Tertiary actions |

### Cards

- Subtle border (1px)
- Slight background elevation
- Hover: border lightens, subtle background shift
- No shadows

### Badges

- Muted background
- Small, monospace text
- Accent variant for highlights

### Install Commands

```html
<div class="font-mono bg-surface border rounded-lg p-4">
  <span class="text-muted">$</span> npx create-thing
  <button>Copy</button>
</div>
```

## Interactive States

### Hover

- Borders: shift one step lighter
- Backgrounds: add transparency or shift lighter
- Text: muted → default color
- Transitions: 150-200ms

### Focus

- Visible outline using accent color
- Don't rely on color alone

### Disabled

- Reduced opacity (75%)
- Not-allowed cursor

## Spacing System

### Section Rhythm

| Element | Spacing |
|---------|---------|
| Section padding | py-20 to py-24 |
| Container max-width | max-w-4xl (focused) to max-w-6xl |
| Element gaps | gap-4 to gap-8 |
| Component padding | p-4 to p-6 |

### Responsive

- Mobile: Stack vertically, increase touch targets
- Tablet: 2-column grids
- Desktop: Full layouts, 3-4 columns

## Typography Scale

| Element | Size | Weight |
|---------|------|--------|
| H1 | 4xl-6xl | Semibold |
| H2 | 2xl-3xl | Semibold |
| H3 | xl-2xl | Medium |
| Body | lg | Regular |
| Small | sm | Regular |
| Mono | sm, monospace | Regular |

## Motion Guidelines

- Keep it subtle: 150-200ms transitions
- Avoid: Bounces, long delays, dramatic animations
- Use for: State changes, hovers, reveals
- Properties: opacity, transform, colors

## Accessibility

- Sufficient color contrast (4.5:1 for text)
- Focus indicators visible
- Interactive targets 44x44px minimum
- Don't rely on color alone for meaning
