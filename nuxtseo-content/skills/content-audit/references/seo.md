# SEO Audit Patterns

Non-obvious SEO checks. Skip basic rules (title length, meta description, single H1, heading hierarchy) - LLM knows these.

See `../../.shared/seo-patterns.md` for featured snippet targeting and keyword placement.

## URL Structure

| Check | Why | Fix |
|-------|-----|-----|
| Hyphens not underscores | Google treats hyphens as word separators | `/performance-optimization` not `_` |
| No dates in evergreen | `/blog/vue-guide` not `/blog/2024/vue-guide` | Remove year unless time-sensitive |
| No database IDs | `/post/slug` not `/post/12345` | Use slugs |
| Keyword front-loaded | `/nuxt-seo-guide` not `/guide-for-nuxt-seo` | Important terms near start |

**Path vs Query Params:**
- Paths (`/products/phones`) - indexed, ranked
- Query params (`?sort=price`) - filters only, need canonical

## Open Graph

| Check | Issue |
|-------|-------|
| Absolute OG URLs | Relative paths don't work: `ogImage: 'https://site.com/og.png'` |
| Unique descriptions | No templates like "Welcome to {page}" |
| No duplicate tags | Twitter/Slack/LinkedIn fallback to OG |

## Missing Citations

Claims requiring sources:

| Pattern | Example | Needs |
|---------|---------|-------|
| Statistics | "80% of users prefer..." | Source study |
| Superlatives | "the most popular SEO tool" | Ranking data |
| Technical specs | "Google recommends max 50KB" | Official docs |
| Performance claims | "3x faster than..." | Benchmark source |

**Optional:** Common knowledge, your own product features, subjective recommendations.

## MCP Tools

If Nuxt SEO Pro MCP available:

| Tool | When |
|------|------|
| `mcp__nuxt-seo-pro__analyze_content_page` | Validate markdown SEO |
| `mcp__nuxt-seo-pro__research_keywords` | Find target keywords |
| `mcp__nuxt-seo-pro__analyze_serp` | Check what ranks |
