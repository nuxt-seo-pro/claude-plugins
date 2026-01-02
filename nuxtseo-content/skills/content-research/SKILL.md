---
name: Content Research
description: This skill should be used when the user asks to "research keywords", "find content gaps", "analyze topic for article", "keyword research for [topic]", "what should I write about", or needs to understand search demand before writing content. Provides keyword research workflow using Nuxt SEO Pro MCP tools.
version: 0.1.0
---

# Content Research

Pre-writing research workflow for keyword discovery, content gap analysis, and competitive research. Assumes Nuxt SEO Pro MCP is available.

## Workflow

### 1. Get Context

Before researching, gather:

| Context | How to Get |
|---------|------------|
| Sitemap URLs | Use `get_sitemap_urls` MCP tool |
| Site profile | Use `profile_site` or `init_site` MCP tool |
| Existing rankings | Use `check_rankings` MCP tool |

### 2. Identify Content Pillars

Content pillars are core topics the site owns. Identify from sitemap:

1. Look at top-level `/docs/` sections
2. Note `/learn/` category groupings
3. Identify recurring themes across pages

When researching, determine:
- Does this article support an existing pillar?
- Is there a gap in pillar coverage?
- Should this become a new pillar? (rare—needs 5+ articles to justify)

See `references/content-pillars.md` for pillar analysis patterns.

### 3. Keyword Research

Use `research_keywords` MCP tool with target topic.

**Selection criteria:**
- Volume: 100-1000/month (long-tail sweet spot)
- Difficulty: <40 (achievable ranking)
- Higher CPC often indicates commercial intent

Pick 3-5 long-tail keywords with decent volume + low difficulty.

### 4. Competition Analysis

Use `analyze_serp` MCP tool to understand current rankings:
- Who ranks in top 10?
- What SERP features exist (featured snippets, PAA)?
- What content format dominates?

### 5. Content Gap Analysis

Compare existing sitemap URLs against keyword opportunities:
- Which keywords have no matching content?
- Which existing pages could target additional keywords?
- What questions do users ask that aren't answered?

Track opportunities in `content/todo.md`:
```markdown
- [ ] **Article Title** (`/path/to/article.md`)
  - Target: "keyword" (volume/mo, difficulty)
  - Cover: [what to include]
  - Link from: [existing pages]
```

## Research Markers

Use these markers for gaps during research:

```markdown
[VERIFY: claim about X - check official docs]
[STAT NEEDED: specific statistic to find]
[SOURCE NEEDED: claim requires authoritative source]
[OUTDATED: info from YYYY - needs update]
[CONFLICTING: sources disagree - investigate]
```

## Source Priority

When verifying claims, prioritize sources in this order. See `references/source-priority.md` for details.

1. Official docs (Google Search Central, MDN, framework docs)
2. Primary research (Google studies, industry reports)
3. Notable ecosystem voices (core team, library authors)
4. Authoritative blogs (web.dev, developers.google.com)
5. Reputable tech sites (Moz, Ahrefs for SEO)

**Avoid:** Generic tutorial sites, Medium posts without known authors, content older than 2 years for SEO topics.

## MCP Tools Reference

| Tool | Use For |
|------|---------|
| `research_keywords` | Keyword suggestions with volume/difficulty |
| `analyze_serp` | Competition analysis, SERP features |
| `check_rankings` | Current rankings for a domain |
| `get_sitemap_urls` | Existing content inventory |
| `profile_site` | Site type, industry, audience |

## Output Format

After researching, provide:

```markdown
## Research Summary

**Topic:** [topic]
**Researched:** [date]

### Target Keywords
| Keyword | Volume | Difficulty | Intent |
|---------|--------|------------|--------|
| ... | ... | ... | ... |

### Competition
- Top rankers: [domains]
- SERP features: [features present]
- Content format: [what works]

### Content Gaps
- [gap] — opportunity because [reason]

### Suggested Approach
- [recommendation for content angle]
```

## Additional Resources

### Reference Files
- **`references/source-priority.md`** — Detailed source hierarchy with examples
- **`references/content-pillars.md`** — Pillar analysis patterns
