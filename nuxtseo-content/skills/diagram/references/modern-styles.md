# Modern Diagram Styles

## Principles

1. **Whitespace** - `--pad 24` minimum
2. **Rounded corners** - `border-radius: 8` on all nodes
3. **Subtle shadows** - `style.shadow: true`
4. **Restrained color** - Monochrome base, color for meaning

## Token Mapping

Map design-tokens.md colors to diagram elements:

| Token | Use |
|-------|-----|
| `primary` | Decision nodes, key paths |
| `gray.50` | Default node fill |
| `gray.200` | Default stroke |
| `gray.700` | Text |
| `success` | Positive outcomes, recommended paths |
| `warning` | Caution, deprecated |
| `error` | Anti-patterns |

## Node Template

```d2
node: {
  style.fill: "{gray.50}"
  style.stroke: "{gray.200}"
  style.border-radius: 8
  style.shadow: true
  style.font-size: 14
  style.font-color: "{gray.700}"
}
```

Highlighted node: use `{primary.light}` fill, `{primary.base}` stroke.

## CLI

```bash
d2 --pad 24 --theme 0 input.d2 output.svg
```

Use `--theme 0` and apply custom colors from design-tokens.md.
