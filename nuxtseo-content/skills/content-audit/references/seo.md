# SEO Audit Patterns

Search optimization validation for content.

## What to Check

### 1. Title & Meta

| Element | Check | Target |
|---------|-------|--------|
| Title length | Under 60 chars | Avoid truncation |
| Title keyword | Primary term present | Natural placement |
| Meta description | 150-160 chars | Click-worthy |
| Description keyword | Primary term present | Front-loaded |

### 2. Heading Structure

| Check | Why |
|-------|-----|
| Single H1 | Only one H1 per page |
| H1 = Title | Should match or be close |
| H2s use variations | Keyword variations, not stuffing |
| Logical hierarchy | H2 → H3, no skipping levels |
| Question H3s | Some headings as questions (PAA targeting) |

### 3. URL Structure

| Check | Why | Fix |
|-------|-----|-----|
| Hyphens not underscores | Google treats hyphens as word separators | `/performance-optimization` not `_` |
| Lowercase only | Mixed case = duplicate content risk | `/about` not `/About` |
| Under 60 chars | Prevents SERP truncation | Shorten slug |
| No dates in evergreen | `/blog/vue-guide` not `/blog/2024/vue-guide` | Remove year unless time-sensitive |
| No database IDs | `/post/slug` not `/post/12345` | Use slugs |
| Keyword front-loaded | Important terms near start | `/nuxt-seo-guide` not `/guide-for-nuxt-seo` |

**Path vs Query Params:**
- Paths (`/products/phones`) — indexed, ranked
- Query params (`?sort=price`) — filters only, need canonical

### 4. Keyword Placement

| Location | Requirement |
|----------|-------------|
| First 100 words | Primary keyword 1-2x |
| H2 headings | Variations, related terms |
| Image alt text | Descriptive, keyword where natural |
| URL slug | Primary keyword, short |

**Don't:**
- Repeat exact phrase in every heading
- Force terms where unnatural
- Stuff keywords unnaturally

### 5. Featured Snippet Opportunities

**Paragraph snippets:** 40-60 word direct answers after question headings.

**List snippets:** 4-8 item lists for "how to" and "best" queries.

**Table snippets:** Comparison tables for "X vs Y" content.

**Definition snippets:** Concise definitions for "what is" queries.

### 6. AI Citation Structure (GEO)

AI engines (ChatGPT, Perplexity, Google AI Overviews) extract differently than traditional search. Pages with schema.org are 40% more likely to be cited.

| Check | Why |
|-------|-----|
| Answer in first paragraph | AI extracts opening content for summaries |
| Question-format H2s | `## How to X` gets matched to queries |
| Code examples present | Technical queries expect working code |
| Stats with sources | AI cites specific numbers: "67.6% of sites (Semrush, 2024)" |
| No marketing fluff | AI prefers documentation-style over sales copy |

**Bad opening:** "In today's web development landscape, meta tags play a crucial role..."

**Good opening:** "Use `useSeoMeta()` to set meta tags in Nuxt. It's auto-imported, handles SSR, and supports reactivity."

### 7. Open Graph & Social

| Check | Issue |
|-------|-------|
| Absolute OG URLs | Relative paths don't work: `ogImage: 'https://site.com/og.png'` |
| Unique descriptions | No templates like "Welcome to {page}" |
| OG image exists | Test with Facebook Sharing Debugger |
| No duplicate tags | Twitter/Slack/LinkedIn fallback to OG—don't duplicate |

**Testing tools:**
- Google Rich Results Test
- Facebook Sharing Debugger
- Twitter compose preview

### 8. Content Quality

| Signal | Issue |
|--------|-------|
| Thin content | Under 300 words for substantive topic |
| No code examples | Technical content without code |
| Missing E-E-A-T | No author, no dates, no sources |
| Outdated info | Version numbers, dates out of date |

### 9. Missing Citations

Claims requiring external sources:

| Pattern | Example | Needs Citation |
|---------|---------|----------------|
| Statistics | "80% of users prefer..." | Source study/survey |
| Superlatives | "the most popular SEO tool" | Ranking/comparison data |
| Technical specs | "Google recommends max 50KB" | Official documentation |
| Version info | "Added in v3.2" | Changelog/release notes |
| Performance claims | "3x faster than..." | Benchmark source |

**When optional:**
- Common knowledge ("meta tags affect SEO")
- Your own product features
- Subjective recommendations

## MCP Tools

| Tool | When |
|------|------|
| `mcp__nuxt-seo-pro__analyze_content_page` | Validate markdown file SEO |
| `mcp__nuxt-seo-pro__research_keywords` | Find target keywords |
| `mcp__nuxt-seo-pro__analyze_serp` | See what ranks, SERP features |

## Output Format

```markdown
### Title & Meta

| Issue | Current | Recommended |
|-------|---------|-------------|
| Title too long | "[current title - 75 chars]" | "[shorter version - 58 chars]" |
| Missing keyword | Description lacks "nuxt seo" | Add to first sentence |

### Heading Issues

| Location | Issue | Fix |
|----------|-------|-----|
| Line 45 | H3 before any H2 | Change to H2 or add parent H2 |
| Line 78 | Keyword stuffing in H2 | "[natural variation]" |

### Featured Snippet Opportunities

| Heading | Type | Add |
|---------|------|-----|
| "What is a sitemap?" | Definition | 40-60 word definition paragraph |
| "How to configure" | List | Numbered steps (4-8 items) |

### Missing Citations

| Line | Claim | Suggested Source |
|------|-------|------------------|
| 45 | "Google recommends..." | Google Search Central docs |
| 89 | "70% of sites..." | Cite study or mark [STAT NEEDED] |
```
