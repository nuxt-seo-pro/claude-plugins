# GEO Audit Patterns

Generative Engine Optimization—making content citable by AI search (ChatGPT, Perplexity, Google AI Overviews).

## Why It Matters

AI search synthesizes answers citing 2-7 sources. 80% of AI Overview citations come from pages already ranking top 3. Pages with schema.org are 40% more likely to be cited.

GEO extends SEO—if your site isn't crawlable, AI can't cite it either.

## Platform Preferences

| Platform | Favors | Style |
|----------|--------|-------|
| ChatGPT | Wikipedia, news, academic | Neutral, comprehensive, well-sourced |
| Gemini (AI Overviews) | Top organic results, structured data | Documentation-style, schema.org |
| Perplexity | Reddit, community, recent articles | Real experiences, discussions |

**Implication:** Write like documentation, not marketing. Include code, acknowledge limitations, cite sources.

## What to Check

### 1. Opening Structure

AI extracts from first paragraph. Answer immediately:

| Check | Why |
|-------|-----|
| Answer in first 2 sentences | AI uses opening for summaries |
| No filler intro | "In today's..." wastes extraction space |
| Concrete over abstract | Specific tool/method names |

**Bad:** "In today's web development landscape, meta tags play a crucial role in how search engines understand your content."

**Good:** "Use `useSeoMeta()` to set meta tags in Nuxt. It's auto-imported, handles SSR, and supports reactivity."

### 2. Heading Format

AI matches headings to queries:

| Pattern | Example | Why |
|---------|---------|-----|
| Question format | `## How to Set Meta Tags in Nuxt` | Matches "how to" queries |
| Specific method | `### Using useSeoMeta()` | Matches tool-specific queries |
| Problem-solving | `### Troubleshooting SSR Issues` | Matches debug queries |

**Avoid:** Vague headings like "Getting Started" or "Introduction."

### 3. Code Examples

Technical queries expect working code. AI engines cite pages with examples:

| Check | Why |
|-------|-----|
| Code within first 3 scrolls | AI prioritizes early content |
| Complete, runnable examples | Partial snippets less useful |
| TypeScript over JavaScript | Modern, type-safe preference |

### 4. Quotable Facts

AI cites specific, sourced statistics:

| Good | Bad |
|------|-----|
| "67.6% of websites have duplicate content (Semrush, 2024)" | "Most sites have SEO issues" |
| "Google rewrites 70% of meta descriptions" | "Search engines may modify descriptions" |
| "Pages with schema.org are 40% more likely cited" | "Structured data helps SEO" |

### 5. Authority Signals

AI weights third-party mentions:

| Signal | How to Build |
|--------|--------------|
| Wikipedia citations | Add your docs as references (follow their guidelines) |
| Reddit mentions | Answer questions in r/nuxt, r/vuejs, link to your content |
| Stack Overflow | Detailed answers linking to documentation |
| GitHub | README files, discussions get crawled |

## Output Format

```markdown
### GEO Issues

| Location | Issue | Fix |
|----------|-------|-----|
| Opening | Filler intro before answer | Move "Use `useSeoMeta()`..." to first sentence |
| Line 45 | Vague heading "Getting Started" | Change to "How to Install nuxt-seo" |
| Line 89 | Unsourced stat "most sites..." | Add source or use "[STAT NEEDED]" |

### Schema.org Opportunities

| Content | Schema Type | Priority |
|---------|-------------|----------|
| Tutorial article | `defineArticle()` | High |
| FAQ section (line 120) | `defineFAQPage()` | Medium |
```
