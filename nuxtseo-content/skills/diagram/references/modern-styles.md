# Modern Diagram Styles

Contemporary styling patterns for clean, professional diagrams.

## Core Principles

1. **Generous whitespace** — `--pad 24` minimum
2. **Rounded corners** — `border-radius: 8` on all nodes
3. **Subtle depth** — Light shadows, not flat
4. **Consistent spacing** — Even gaps between nodes
5. **Restrained color** — Monochrome base, color for meaning

## Base Node Template

Default node with modern styling:

```d2
node: {
  style.fill: "#ffffff"
  style.stroke: "#e5e7eb"
  style.stroke-width: 1
  style.border-radius: 8
  style.shadow: true
  style.font: "Inter"
  style.font-size: 14
  style.font-color: "#374151"
  style.padding: 12
}
```

## Themed Node Templates

Using design tokens (replace `{token}` with values from design-tokens.md):

### Decision Node (Primary)

```d2
question: {
  style.fill: "{primary.light}"
  style.stroke: "{primary.base}"
  style.stroke-width: 2
  style.border-radius: 8
  style.shadow: true
  style.font-size: 16
  style.font-color: "{primary.dark}"
  style.bold: true
}
```

### Outcome Node (Success)

```d2
success: {
  style.fill: "{success.light}"
  style.stroke: "{success.base}"
  style.stroke-width: 1
  style.border-radius: 8
  style.shadow: true
  style.font-size: 14
  style.font-color: "{success.dark}"
}
```

### Warning Node

```d2
warning: {
  style.fill: "{warning.light}"
  style.stroke: "{warning.base}"
  style.stroke-width: 1
  style.border-radius: 8
  style.font-size: 14
  style.font-color: "{warning.dark}"
}
```

### Error/Deprecated Node

```d2
error: {
  style.fill: "{error.light}"
  style.stroke: "{error.base}"
  style.stroke-width: 1
  style.border-radius: 8
  style.font-size: 14
  style.font-color: "{error.dark}"
  style.stroke-dash: 3
}
```

### Neutral/Option Node

```d2
option: {
  style.fill: "{gray.50}"
  style.stroke: "{gray.200}"
  style.stroke-width: 1
  style.border-radius: 8
  style.font-size: 14
  style.font-color: "{gray.700}"
}
```

## Edge Styles

### Default Edge

```d2
a -> b: {
  style.stroke: "{gray.400}"
  style.stroke-width: 1
  style.font-size: 12
  style.font-color: "{gray.700}"
}
```

### Labeled Yes/No Edges

```d2
question -> yes_path: Yes {
  style.stroke: "{success.base}"
  style.stroke-width: 2
  style.font-color: "{success.dark}"
  style.bold: true
}

question -> no_path: No {
  style.stroke: "{gray.400}"
  style.stroke-width: 1
  style.font-color: "{gray.700}"
}
```

### Dashed Edge (Alternative/Optional)

```d2
a -> b: optional {
  style.stroke: "{gray.400}"
  style.stroke-dash: 4
  style.font-color: "{gray.400}"
  style.italic: true
}
```

## Container/Group Styles

```d2
group: {
  style.fill: "{gray.50}"
  style.stroke: "{gray.200}"
  style.stroke-width: 1
  style.border-radius: 12
  style.font-size: 12
  style.font-color: "{gray.400}"
}
```

## Complete Decision Tree Template

```d2
direction: down

# Questions - primary color
q1: Should you use SSR?: {
  style.fill: "{primary.light}"
  style.stroke: "{primary.base}"
  style.stroke-width: 2
  style.border-radius: 8
  style.shadow: true
  style.font-size: 16
  style.font-color: "{primary.dark}"
  style.bold: true
}

# Outcomes - success for recommended
ssr: Use Full SSR: {
  style.fill: "{success.light}"
  style.stroke: "{success.base}"
  style.border-radius: 8
  style.shadow: true
  style.font-size: 14
  style.font-color: "{success.dark}"
}

spa: Stay with SPA: {
  style.fill: "{gray.50}"
  style.stroke: "{gray.200}"
  style.border-radius: 8
  style.shadow: true
  style.font-size: 14
  style.font-color: "{gray.700}"
}

# Options - neutral
nuxt: Nuxt: {
  style.fill: "#ffffff"
  style.stroke: "{gray.200}"
  style.border-radius: 8
  style.font-size: 14
  style.font-color: "{gray.700}"
}

# Edges
q1 -> ssr: Yes - SEO needed {
  style.stroke: "{success.base}"
  style.stroke-width: 2
  style.font-color: "{success.dark}"
}

q1 -> spa: No {
  style.stroke: "{gray.400}"
  style.font-color: "{gray.700}"
}

ssr -> nuxt
```

## Process Flow Template

```d2
direction: right

step1: 1. Configure: {
  style.fill: "{primary.light}"
  style.stroke: "{primary.base}"
  style.border-radius: 8
  style.shadow: true
  style.font-color: "{primary.dark}"
}

step2: 2. Build: {
  style.fill: "{gray.50}"
  style.stroke: "{gray.200}"
  style.border-radius: 8
  style.shadow: true
  style.font-color: "{gray.700}"
}

step3: 3. Deploy: {
  style.fill: "{success.light}"
  style.stroke: "{success.base}"
  style.border-radius: 8
  style.shadow: true
  style.font-color: "{success.dark}"
}

step1 -> step2: {style.stroke: "{gray.400}"}
step2 -> step3: {style.stroke: "{gray.400}"}
```

## Architecture Diagram Template

```d2
direction: right

client: Client: {
  style.fill: "{gray.50}"
  style.stroke: "{gray.200}"
  style.border-radius: 8
}

server: Server: {
  style.fill: "{primary.light}"
  style.stroke: "{primary.base}"
  style.border-radius: 8

  api: API: {
    style.fill: "#ffffff"
    style.stroke: "{gray.200}"
    style.border-radius: 6
  }

  db: Database: {
    shape: cylinder
    style.fill: "#ffffff"
    style.stroke: "{gray.200}"
  }

  api -> db
}

client -> server.api: HTTPS {
  style.stroke: "{gray.400}"
}
```

## CLI Command

Generate with padding for whitespace:

```bash
d2 --pad 24 --theme 0 input.d2 output.svg
```

Available themes:
- `0` — Default (neutral)
- `1` — Neutral gray
- `3` — Earth tones
- `4` — Slate

For brand consistency, prefer `--theme 0` and apply custom colors.
