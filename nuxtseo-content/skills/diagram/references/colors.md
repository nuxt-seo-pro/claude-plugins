# Accessible Color Fallbacks

WCAG AA compliant fallback colors when design tokens unavailable. All combinations meet 4.5:1 contrast ratio.

**Note:** Prefer extracting colors from user's design system via `design-tokens.md`. Use these as fallbacks only.

## Default (Monochrome)

Use for most diagrams:

```d2
# Default node - white bg, dark text
node: {
  style.fill: "#ffffff"
  style.stroke: "#374151"
  style.font-color: "#111827"
  style.font-size: 14
}
```

## Semantic Colors

Only when meaning requires differentiation:

### Decision/Question Nodes

Blue - for questions, branch points:

```d2
question: {
  style.fill: "#dbeafe"
  style.stroke: "#1d4ed8"
  style.font-color: "#1e3a8a"
  style.font-size: 16
}
```

### Success/Positive Outcome

Green - for recommended paths, good outcomes:

```d2
success: {
  style.fill: "#dcfce7"
  style.stroke: "#15803d"
  style.font-color: "#14532d"
  style.font-size: 14
}
```

### Warning/Caution

Amber - for deprecated, not recommended:

```d2
warning: {
  style.fill: "#fef3c7"
  style.stroke: "#b45309"
  style.font-color: "#78350f"
  style.font-size: 14
}
```

### Error/Avoid

Red - for anti-patterns, deprecated:

```d2
error: {
  style.fill: "#fee2e2"
  style.stroke: "#b91c1c"
  style.font-color: "#7f1d1d"
  style.font-size: 14
}
```

## Edge Styles

Default edges:

```d2
a -> b: {
  style.stroke: "#6b7280"
  style.font-color: "#374151"
  style.font-size: 12
}
```

Labeled edges (Yes/No):

```d2
question -> yes_path: Yes {
  style.stroke: "#15803d"
  style.font-color: "#14532d"
}

question -> no_path: No {
  style.stroke: "#6b7280"
  style.font-color: "#374151"
}
```

## Full Palette Reference

| Purpose | Background | Border | Text |
|---------|------------|--------|------|
| Default | `#ffffff` | `#374151` | `#111827` |
| Question | `#dbeafe` | `#1d4ed8` | `#1e3a8a` |
| Success | `#dcfce7` | `#15803d` | `#14532d` |
| Warning | `#fef3c7` | `#b45309` | `#78350f` |
| Error | `#fee2e2` | `#b91c1c` | `#7f1d1d` |
| Neutral | `#f3f4f6` | `#6b7280` | `#374151` |

## Usage Rules

1. **Default to monochrome** - only add color when semantically meaningful
2. **One color per meaning** - don't mix blue for questions AND process steps
3. **Never rely on color alone** - add text labels or shape differences
4. **Limit colored nodes** - max 3-4 in a diagram
