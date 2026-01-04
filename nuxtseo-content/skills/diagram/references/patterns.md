# Common Diagram Patterns

Ready-to-use patterns for SEO and web development content.

## Decision Trees

### SSR vs SPA Decision

```d2
direction: down

need_seo: Need SEO?: {
  style.fill: "{primary.light}"
  style.stroke: "{primary.base}"
  style.font-color: "{primary.dark}"
  style.font-size: 16
  style.border-radius: 8
  style.shadow: true
}

dynamic: Dynamic content?: {
  style.fill: "{primary.light}"
  style.stroke: "{primary.base}"
  style.font-color: "{primary.dark}"
  style.border-radius: 8
}

ssr: Full SSR: {
  style.fill: "{success.light}"
  style.stroke: "{success.base}"
  style.font-color: "{success.dark}"
  style.border-radius: 8
}

ssg: Static Generation: {
  style.fill: "{success.light}"
  style.stroke: "{success.base}"
  style.font-color: "{success.dark}"
  style.border-radius: 8
}

spa: SPA: {
  style.fill: "{gray.50}"
  style.stroke: "{gray.200}"
  style.font-color: "{gray.700}"
  style.border-radius: 8
}

need_seo -> spa: No
need_seo -> dynamic: Yes
dynamic -> ssr: Yes
dynamic -> ssg: No
```

### Framework Selection

```d2
direction: down

react: Using React?: {style.fill: "{primary.light}"; style.stroke: "{primary.base}"; style.border-radius: 8}
vue: Using Vue?: {style.fill: "{primary.light}"; style.stroke: "{primary.base}"; style.border-radius: 8}

next: Next.js: {style.fill: "{success.light}"; style.stroke: "{success.base}"; style.border-radius: 8}
nuxt: Nuxt: {style.fill: "{success.light}"; style.stroke: "{success.base}"; style.border-radius: 8}
astro: Astro: {style.fill: "{success.light}"; style.stroke: "{success.base}"; style.border-radius: 8}

react -> next: Yes
react -> vue: No
vue -> nuxt: Yes
vue -> astro: No
```

## Process Flows

### Crawl → Index → Rank

```d2
direction: right

crawl: Crawl: {
  style.fill: "{gray.50}"
  style.stroke: "{gray.200}"
  style.border-radius: 8
  style.shadow: true
}

index: Index: {
  style.fill: "{gray.50}"
  style.stroke: "{gray.200}"
  style.border-radius: 8
  style.shadow: true
}

rank: Rank: {
  style.fill: "{success.light}"
  style.stroke: "{success.base}"
  style.border-radius: 8
  style.shadow: true
}

crawl -> index: Render & parse
index -> rank: Evaluate quality
```

### Build Pipeline

```d2
direction: right

source: Source: {style.fill: "{gray.50}"; style.border-radius: 8}
build: Build: {style.fill: "{primary.light}"; style.stroke: "{primary.base}"; style.border-radius: 8}
optimize: Optimize: {style.fill: "{gray.50}"; style.border-radius: 8}
deploy: Deploy: {style.fill: "{success.light}"; style.stroke: "{success.base}"; style.border-radius: 8}

source -> build -> optimize -> deploy
```

## Architecture

### JAMstack

```d2
direction: down

cdn: CDN: {
  style.fill: "{primary.light}"
  style.stroke: "{primary.base}"
  style.border-radius: 8

  static: Static Assets
  html: Pre-rendered HTML
}

api: APIs: {
  style.fill: "{gray.50}"
  style.stroke: "{gray.200}"
  style.border-radius: 8

  cms: Headless CMS
  auth: Auth Service
  db: Database
}

browser: Browser: {
  style.fill: "{gray.50}"
  style.border-radius: 8
}

browser -> cdn: Request
cdn -> browser: HTML + JS
browser -> api: API calls
```

### SSR Request Flow

```d2
direction: right

client: Client: {style.border-radius: 8}
server: Server: {
  style.fill: "{primary.light}"
  style.stroke: "{primary.base}"
  style.border-radius: 8

  render: Render
  data: Fetch Data
}
db: Database: {shape: cylinder; style.border-radius: 8}

client -> server: Request
server.render -> server.data
server.data -> db
db -> server.data
server -> client: HTML
```

## Comparisons

### Side-by-Side Options

```d2
grid-columns: 2

spa: SPA: {
  style.fill: "{gray.50}"
  style.border-radius: 8

  pros: |md
    ✓ Simple deploy
    ✓ Fast navigation
  |
  cons: |md
    ✗ No SEO
    ✗ Slow initial load
  |
}

ssr: SSR: {
  style.fill: "{success.light}"
  style.stroke: "{success.base}"
  style.border-radius: 8

  pros: |md
    ✓ Full SEO
    ✓ Fast initial load
  |
  cons: |md
    ✗ Server required
    ✗ More complex
  |
}
```

## Data Relationships

### One-to-Many

```d2
user: User: {shape: rectangle; style.border-radius: 8}
posts: Posts: {shape: rectangle; style.border-radius: 8}

user -> posts: has many {
  style.stroke-dash: 0
  source-arrowhead: 1
  target-arrowhead: * {
    shape: cf-many
  }
}
```

### Module Dependencies

```d2
app: App: {style.fill: "{primary.light}"; style.border-radius: 8}

sitemap: sitemap: {style.border-radius: 6}
robots: robots: {style.border-radius: 6}
og: og-image: {style.border-radius: 6}

app -> sitemap
app -> robots
app -> og
sitemap -> robots: uses
```
