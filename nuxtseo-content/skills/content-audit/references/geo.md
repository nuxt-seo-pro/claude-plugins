# GEO Audit Patterns

Generative Engine Optimization - making content citable by AI search (ChatGPT, Perplexity, Google AI Overviews).

## Platform Preferences

| Platform | Favors | Style |
|----------|--------|-------|
| ChatGPT | Wikipedia, news, academic | Neutral, comprehensive, well-sourced |
| Gemini (AI Overviews) | Top organic results, structured data | Documentation-style, schema.org |
| Perplexity | Reddit, community, recent articles | Real experiences, discussions |

**Implication:** Write like documentation, not marketing. Include code, acknowledge limitations, cite sources.

## What to Check

### Heading Format

AI matches headings to queries. Only suggest changes when they flow naturally:

| Pattern | Example | When |
|---------|---------|------|
| Question format | `## How to Add Authentication in Nuxt` | Educational content, tutorials |
| Specific method | `### Using useAuth()` | API docs, reference |
| Problem-solving | `### Troubleshooting Login Issues` | Guides with common issues |

**Don't force question headings.** `## Configuration` is fine for docs - don't rewrite as `## How to Configure X?`

**Only flag:** Vague headings like "Getting Started", "Introduction", "Overview" that could be more specific

### Quotable Facts

AI cites specific, sourced statistics. **Always WebSearch to verify:**

| Good | Bad |
|------|-----|
| "67.6% of websites have duplicate content (Semrush, 2024)" | "Most sites have SEO issues" |
| "Google rewrites 70% of meta descriptions" | "Search engines may modify descriptions" |

**Verification workflow:**
```
Found stat → WebSearch: "[topic] statistics [current-year]"
→ Fallback: [current-year - 1] if no results
→ Cite with source + year
```

Authoritative sources: Semrush, Ahrefs, W3Techs, HTTPArchive, Originality.ai, Cloudflare Radar

### Schema.org Opportunities

Pages with schema.org are 40% more likely to be cited. Flag opportunities:
- Tutorial → `defineArticle()`
- FAQ section → `defineFAQPage()`

**MCP tools:**
- `mcp__nuxt-seo__validate_schema` - Check existing JSON-LD for errors
- `mcp__nuxt-seo-pro__generate_schema_org` - Generate new schema (`composable` for .vue, `frontmatter` for .md)

Requires nuxt-schema-org module for generation.

### Authority Signals

| Signal | How to Build |
|--------|--------------|
| Wikipedia | Add docs as references |
| Reddit | Answer in r/nuxt, r/vuejs |
| Stack Overflow | Detailed answers linking to docs |
| GitHub | README files, discussions |
