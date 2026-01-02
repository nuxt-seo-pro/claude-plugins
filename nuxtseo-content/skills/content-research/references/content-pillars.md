# Content Pillars Reference

Content pillars are core topics a site owns. All content should ladder up to these.

## Identifying Pillars

### From Sitemap Analysis

1. **Top-level sections** — `/docs/` paths indicate major topic areas
2. **Category groupings** — `/learn/[category]/` reveals content clusters
3. **Recurring themes** — Topics that appear across multiple pages

### Pillar Criteria

A topic qualifies as a pillar when:
- 5+ articles can support it
- Clear user intent exists (search demand)
- Aligns with product/site positioning
- Has depth for expert-level content

## Example: Nuxt SEO Pillars

Likely pillars for nuxtseo.com:

| Pillar | Supporting Content |
|--------|-------------------|
| Meta tags & SEO fundamentals | useSeoMeta, meta descriptions, titles, Open Graph |
| Technical SEO | Sitemaps, robots.txt, canonical URLs, redirects |
| Structured data | Schema.org, JSON-LD, rich results |
| Performance & Core Web Vitals | LCP, CLS, INP, image optimization |
| OG images & social sharing | Dynamic OG images, Twitter cards |
| Nuxt-specific patterns | SSR vs SSG, hybrid rendering, edge deployment |

## Pillar Health Check

For each pillar, evaluate:

- **Breadth** — Are all subtopics covered?
- **Depth** — Is there beginner → advanced content?
- **Freshness** — Is content up to date?
- **Internal linking** — Do articles link to each other?

## Gap Analysis Questions

When researching a topic:

1. Does this support an existing pillar?
2. Is there a gap in pillar coverage?
3. Should this become a new pillar?
4. What internal linking opportunities exist?

## Tracking New Content Ideas

Add missed opportunities to `content/todo.md`:

```markdown
## Content Todo

### [Pillar Name]

- [ ] **Article Title** (`/path/to/article.md`)
  - Target: "keyword" (volume/mo, difficulty)
  - Cover: [what to include]
  - Link from: [existing pages that should link here]
  - Priority: high/medium/low

- [ ] **Another Article** (`/path/to/another.md`)
  - Target: "another keyword" (volume/mo, difficulty)
  - ...
```

Prioritize by:
1. Keyword volume + low difficulty
2. Gaps referenced by existing content
3. User questions without answers
