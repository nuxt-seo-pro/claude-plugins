# D2 Syntax Reference

Minimal D2 patterns for documentation diagrams.

## Direction

```d2
direction: down   # top to bottom (default for decision trees)
direction: right  # left to right (for processes)
```

## Nodes

Simple:
```d2
Node Label
```

With ID (for reuse):
```d2
node_id: Node Label
```

## Edges

Basic connection:
```d2
A -> B
```

Labeled:
```d2
A -> B: label text
```

Bidirectional:
```d2
A <-> B
```

## Styling Nodes

Inline (short):
```d2
Node: {style.fill: "#fff"; style.font-size: 14}
```

Block (readable):
```d2
Node: {
  style.fill: "#ffffff"
  style.stroke: "#374151"
  style.font-color: "#111827"
  style.font-size: 14
}
```

## Styling Edges

```d2
A -> B: {
  style.stroke: "#6b7280"
  style.font-color: "#374151"
}
```

With label:
```d2
A -> B: Yes {
  style.stroke: "#15803d"
}
```

## Containers/Groups

```d2
Container: {
  A
  B
  A -> B
}
```

## Decision Tree Pattern

```d2
direction: down

question: Is X true?: {
  style.fill: "#dbeafe"
  style.stroke: "#1d4ed8"
  style.font-color: "#1e3a8a"
  style.font-size: 16
}

yes_outcome: Do Y: {
  style.fill: "#dcfce7"
  style.stroke: "#15803d"
  style.font-color: "#14532d"
}

no_outcome: Do Z: {
  style.fill: "#ffffff"
  style.stroke: "#374151"
  style.font-color: "#111827"
}

question -> yes_outcome: Yes
question -> no_outcome: No
```

## Process Flow Pattern

```d2
direction: right

step1: Step 1
step2: Step 2
step3: Step 3

step1 -> step2 -> step3
```

## Common Shapes

```d2
rectangle: {shape: rectangle}
oval: {shape: oval}
diamond: {shape: diamond}  # for decisions
cylinder: {shape: cylinder}  # for databases
```

## CLI Usage

Generate SVG:
```bash
d2 input.d2 output.svg
```

With theme:
```bash
d2 --theme 0 input.d2 output.svg  # default theme
```

Watch mode:
```bash
d2 --watch input.d2 output.svg
```
