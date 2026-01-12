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

### Free (nuxt-seo)

| Tool | When |
|------|------|
| `mcp__nuxt-seo__check_meta_tags` | Validate title, description, OG tags |
| `mcp__nuxt-seo__debug_social_share` | Preview social cards, find missing tags |
| `mcp__nuxt-seo__validate_schema` | Check JSON-LD/Microdata for errors |
| `mcp__nuxt-seo__analyze_robots_txt` | Parse robots.txt rules |

### Pro (nuxt-seo-pro)

**Pre-deploy validation (static analysis):**

| Tool | When |
|------|------|
| `mcp__nuxt-seo-pro__analyze_page` | Pre-commit check for `.vue` files - frontmatter, structure, missing fields |
| `mcp__nuxt-seo-pro__analyze_content_page` | Pre-commit check for `.md` files - frontmatter, headings, word count, links |

These analyze source files only. They don't check rendered output, actual meta tags, or schema validity.

**Live site audits (use URL-based free tools instead):**

For deployed pages, prefer `check_meta_tags`, `validate_schema`, `debug_social_share` - they check what Google actually sees.

**Research:**

| Tool | When |
|------|------|
| `mcp__nuxt-seo-pro__research_keywords` | Find target keywords |
| `mcp__nuxt-seo-pro__analyze_serp` | Check competition |

**Schema/OG generation** (requires nuxt-schema-org / nuxt-og-image modules):

| Tool | When | Output |
|------|------|--------|
| `mcp__nuxt-seo-pro__generate_schema_org` | Missing structured data | `composable` for .vue, `frontmatter` for .md |
| `mcp__nuxt-seo-pro__generate_og_image_template` | Missing/weak social preview | `composable` for .vue, `frontmatter` for .md |

Schema types: Article, BlogPosting, Product, FAQPage, HowTo, Recipe, Event, LocalBusiness, SoftwareApplication

**First-time setup:** Run `mcp__nuxt-seo-pro__init_site` before other pro tools.
