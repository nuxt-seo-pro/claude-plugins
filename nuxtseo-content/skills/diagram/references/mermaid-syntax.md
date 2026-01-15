# Mermaid Syntax Reference

Use Mermaid when:
- Output is markdown (GitHub/GitLab renders natively)
- Simple diagrams without custom styling
- No CLI dependency needed
- Inline documentation

Use D2 when:
- Need custom colors/design tokens
- Complex layouts with precise control
- SVG output for web pages
- Visual polish matters

## Diagram Types

### Flowchart

```mermaid
flowchart TD
    A[Start] --> B{Decision?}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
```

Direction: `TD` (top-down), `LR` (left-right), `BT`, `RL`

### Sequence Diagram

```mermaid
sequenceDiagram
    participant C as Client
    participant S as Server
    participant D as Database

    C->>S: Request
    S->>D: Query
    D-->>S: Result
    S-->>C: Response
```

Arrows: `->>` solid, `-->>` dashed, `-x` cross, `-)` async

### State Diagram

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Loading: fetch()
    Loading --> Success: 200
    Loading --> Error: 4xx/5xx
    Success --> [*]
    Error --> Idle: retry
```

### Entity Relationship

```mermaid
erDiagram
    USER ||--o{ POST : writes
    POST ||--|{ COMMENT : has
    USER ||--o{ COMMENT : writes
```

Cardinality: `||` one, `o{` zero or more, `|{` one or more

### Git Graph

```mermaid
gitGraph
    commit
    branch feature
    checkout feature
    commit
    commit
    checkout main
    merge feature
    commit
```

## Node Shapes

| Shape | Syntax | Use For |
|-------|--------|---------|
| Rectangle | `[text]` | Default, actions |
| Round | `(text)` | Start/end |
| Diamond | `{text}` | Decisions |
| Stadium | `([text])` | Terminal |
| Cylinder | `[(text)]` | Database |
| Hexagon | `{{text}}` | Preparation |

## Styling (Limited)

```mermaid
flowchart TD
    A[Start]:::green --> B{Check}
    B -->|Pass| C[Done]:::green
    B -->|Fail| D[Error]:::red

    classDef green fill:#d4edda,stroke:#28a745
    classDef red fill:#f8d7da,stroke:#dc3545
```

Keep styling minimal - Mermaid's strength is simplicity.

## Best Practices

1. **Max 8-10 nodes** - Split complex diagrams
2. **Consistent direction** - Pick TD or LR, stick with it
3. **Short labels** - 2-3 words max per node
4. **Meaningful IDs** - `Auth` not `A`, helps readability
5. **No redundant arrows** - Remove if flow is obvious

## Markdown Integration

Inline in markdown files:

~~~md
```mermaid
flowchart LR
    A --> B --> C
```
~~~

GitHub, GitLab, Notion, Obsidian render automatically.
