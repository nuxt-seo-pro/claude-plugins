# Market Signals Reference

How to interpret search data for product validation.

## Volume Thresholds

| Volume/month | Signal | Action |
|-------------|--------|--------|
| <50 | Niche or emerging | Validate via other channels |
| 50-500 | Early market | Good for first-mover |
| 500-2000 | Established interest | Strong signal, check competition |
| 2000+ | Mainstream | Usually competitive, need differentiation |

## Keyword Intent Types

### Problem Keywords
- Pattern: "how to X", "why does X", "X not working"
- Signal: People have pain, seeking solutions
- Value: High — product can solve

### Solution Keywords
- Pattern: "X tool", "X software", "best X for Y"
- Signal: People know solutions exist, comparing
- Value: High — commercial intent

### Comparison Keywords
- Pattern: "X vs Y", "X alternative", "X pricing"
- Signal: Active buyers evaluating
- Value: Very high — bottom of funnel

### Educational Keywords
- Pattern: "what is X", "X tutorial", "learn X"
- Signal: Awareness stage
- Value: Medium — top of funnel, content opportunity

## Competition Signals

### Domain Rank (DR)

| DR | What it means |
|----|---------------|
| <30 | Small sites, beatable with good content |
| 30-50 | Established but not dominant |
| 50-70 | Strong players, need differentiation |
| 70+ | Major players, very hard to outrank |

### Competitor Types

| Type | Implication |
|------|-------------|
| Content sites ranking | Market needs education, product opportunity |
| Products ranking | Direct competition, study their gaps |
| Aggregators/directories | Market is fragmented |
| Big tech | Hard to compete head-on |

## Red Flags

- All top 10 results are DR 60+
- First page dominated by 1-2 brands
- Keywords only have brand modifiers ("X for Notion")
- Very low CPC ($0) on commercial keywords
- All results are informational when you want transactional

## Green Flags

- Forum posts / Reddit ranking (underserved)
- Old content ranking (outdated solutions)
- Many question keywords (education gap)
- Mix of small and large sites ranking
- High CPC on related keywords (money in market)
- "Alternative to X" keywords exist (dissatisfied users)

## Niche vs Scale

### Niche Product (50-500 volume)
- Lower competition
- Faster to market
- Smaller TAM
- Can charge more per customer

### Scale Product (2000+ volume)
- More competition
- Need differentiation
- Larger TAM
- Need volume or high LTV

## Beyond Search

Search data is one signal. Use social signals to validate:

```
mcp__nuxt-seo-pro__analyze_social_signals
  topic: "[product idea]"
```

Returns GitHub repos/stars, Reddit threads/sentiment, and overall activity level.

Also consider manually checking:
- **Job postings** — Are companies hiring for this skill?
- **Conference talks** — Is the topic trending?

## Domain Availability Check

Use the MCP tool to check availability:

```
mcp__nuxt-seo-pro__check_domain_availability
  domains: ["example.dev", "example.io", "example.com"]
```

### Interpreting Results

| Field | Meaning |
|-------|---------|
| `available: true` | Ready to register |
| `available: false` | Taken |
| `expiration` | When current registration expires (may become available) |
| `created` | Registration date (market timing insight) |

### TLD-Specific Notes

| TLD | Notes |
|-----|-------|
| `.dev` | Requires HTTPS, Google-owned |
| `.io` | Popular for dev tools |
| `.ai` | Expensive (~$80/yr), AI-native |
| `.com` | Most trusted, hardest to find good names |
| `.app` | Requires HTTPS, Google-owned |

Checking availability does not reserve — register promptly if needed.

## Decision Framework

| Factor | Weight |
|--------|--------|
| Search volume exists | 25% |
| Competition beatable | 25% |
| Problem clearly articulated | 20% |
| Monetization path clear | 15% |
| Your unfair advantage | 15% |

Score each 1-5, weight, and:
- 4+ average: Build
- 3-4 average: Validate more
- <3 average: Pivot or pass
