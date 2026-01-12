# D2 Syntax Reference

Common patterns for D2 diagrams.

## Basic Nodes and Edges

```d2
# Simple connection
a -> b

# Labeled connection
a -> b: "description"

# Bidirectional
a <-> b

# Multiple from one
start -> {a; b; c}
```

## Flowcharts with Decisions

```d2
start: Start
check: Check condition {shape: diamond}
yes: Process A
no: Process B
done: Done

start -> check
check -> yes: "true"
check -> no: "false"
yes -> done
no -> done
```

## Sequence Diagrams

```d2
shape: sequence_diagram

user: User
server: Server
db: Database

user -> server: "1. Request"
server -> db: "2. Query"
db -> server: "3. Result"
server -> user: "4. Response"
```

## Grouped Containers

```d2
client: Client {
  browser: Browser
  cache: Cache
}

server: Server {
  api: API
  db: Database
}

client.browser -> server.api: "HTTP"
server.api -> server.db: "SQL"
```

## Styling

```d2
node: Styled Node {
  style: {
    fill: "#3b82f6"
    stroke: "#1e40af"
    font-color: "#ffffff"
    border-radius: 8
    shadow: true
  }
}

# Edge styling
a -> b: "label" {
  style: {
    stroke: "#22c55e"
    stroke-width: 2
  }
}
```

## Common Shapes

| Shape | Use For |
|-------|---------|
| `rectangle` | Default, processes |
| `diamond` | Decisions |
| `oval` | Start/end |
| `cylinder` | Databases |
| `cloud` | External services |
| `package` | Groups/modules |

```d2
decision: Choose {shape: diamond}
database: DB {shape: cylinder}
external: API {shape: cloud}
```

## Direction

```d2
direction: right  # left, right, up, down

a -> b -> c
```

## Icons

```d2
server: Server {
  icon: https://icons.terrastruct.com/essentials/server.svg
}
```

## Multi-line Labels

```d2
node: |md
  # Title
  Description text
|
```

## Error Prevention

Common syntax issues:

| Problem | Fix |
|---------|-----|
| Special chars in labels | Wrap in quotes: `"label with: colon"` |
| Missing brace | Every `{` needs matching `}` |
| Invalid colors | Use hex: `#3b82f6` not `blue-500` |
| Spaces in node names | Use underscores or quotes |
