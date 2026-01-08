# Comparison Content Patterns

"X vs Y" and "X alternative" articles. High commercial intent, bottom-of-funnel.

## Article Types

### Head-to-Head (X vs Y)

```markdown
# [Tool A] vs [Tool B]: [Deciding Factor]

[One-paragraph verdict for scanners]

## Quick Comparison

| Feature | Tool A | Tool B |
|---------|--------|--------|

## When to Choose [Tool A]
## When to Choose [Tool B]
## Verdict
```

### Alternatives Listicle

```markdown
# [X] Best [Tool] Alternatives in [Year]

[Why people switch + what to look for]

## Quick Comparison

| Tool | Best For | Price |

## 1. [Alternative] - Best for [Use Case]

**Pros:** / **Cons:** / **Pricing:**
```

## Writing Guidelines

### Be Opinionated

**Bad:** "Both tools have their merits and the choice depends on your needs."
**Good:** "Use Nuxt if you need SSR out of the box. Use Next if your team knows React."

### Lead with the Verdict

```markdown
**TL;DR:** For Vue developers, Nuxt. React developers, Next.js.
```

### Show, Don't Tell

```markdown
❌ "Tool A is faster"
✅ "Tool A builds in 1.2s vs Tool B's 3.4s"
```

### Acknowledge Trade-offs

```markdown
## When NOT to Use [Tool]
- [Scenario where it's wrong]
```

### Include Dates

```markdown
**Last updated:** January 2026
**Versions compared:** Tool A v2.1, Tool B v4.0
```

## SEO

See `../../../.shared/seo-patterns.md` for comparison tables and featured snippets.

**Title patterns:**
- `X vs Y: [Deciding Factor]`
- `X vs Y for [Audience]`
- `[N] Best X Alternatives`

## Credibility

- Disclose bias: "We primarily use Nuxt, but we've built with both"
- Test both tools, don't compare from docs alone
- Link to sources for claims
