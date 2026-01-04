# Comparison Content Patterns

"X vs Y" and "X alternative" articles. High commercial intent, bottom-of-funnel content.

## Why Comparison Content Works

| Keyword Type | Intent | Conversion |
|--------------|--------|------------|
| "X vs Y" | Bottom-funnel | High |
| "X alternative" | Switching intent | Very high |
| "best X for Y" | Purchase ready | High |
| "X review" | Evaluation | Medium-high |

Users searching these are ready to decide. Content that helps them choose wins.

## Article Types

### 1. Head-to-Head (X vs Y)

Direct comparison of two specific tools.

```markdown
# [Tool A] vs [Tool B]: [Deciding Factor]

[One-paragraph verdict for scanners]

## Quick Comparison

| Feature | Tool A | Tool B |
|---------|--------|--------|
| [Feature 1] | [value] | [value] |

## [Tool A] Overview

[What it is, who it's for]

### Strengths
### Weaknesses

## [Tool B] Overview

[What it is, who it's for]

### Strengths
### Weaknesses

## Detailed Comparison

### [Category 1: e.g., Performance]
### [Category 2: e.g., DX]
### [Category 3: e.g., Ecosystem]

## When to Choose [Tool A]

[Specific scenarios]

## When to Choose [Tool B]

[Specific scenarios]

## Verdict

[Clear recommendation with reasoning]
```

### 2. Alternatives Listicle

Multiple options for users leaving a tool.

```markdown
# [X] Best [Tool] Alternatives in [Year]

[Why people switch + what to look for]

## Quick Comparison

| Tool | Best For | Price |
|------|----------|-------|
| [Alt 1] | [use case] | [price] |

## 1. [Alternative 1] — Best for [Use Case]

[Overview]

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]

**Pricing:** [Details]

## 2. [Alternative 2] — Best for [Use Case]

[...]

## How to Choose

[Decision framework based on needs]
```

### 3. Framework/Tool Showdown

Compare across a category (3+ options).

```markdown
# Best [Category] for [Use Case]: [Year] Comparison

[Context + what matters when choosing]

## TL;DR

| Tool | Best For | Our Take |
|------|----------|----------|
| [Tool 1] | [scenario] | [one-liner] |

## What We Compared

[Methodology, criteria]

## [Tool 1]

### Overview
### Pros & Cons
### Best For

[Repeat for each tool]

## Comparison Table

[Detailed feature matrix]

## Our Recommendations

### For [Scenario 1]: [Tool X]
### For [Scenario 2]: [Tool Y]
```

## Writing Guidelines

### Be Opinionated

**Bad:** "Both tools have their merits and the choice depends on your needs."

**Good:** "Use Nuxt if you need SSR out of the box. Use Next if your team already knows React."

### Lead with the Verdict

Readers scan. Put the answer first:

```markdown
**TL;DR:** For Vue developers, Nuxt cursor rules are better maintained.
React developers should use the official Next.js rules.
```

### Use Specific Criteria

| Criteria | Why It Matters |
|----------|----------------|
| Performance | Measurable (bundle size, build time) |
| DX | Setup time, error messages, docs |
| Ecosystem | Plugins, community, jobs |
| Maintenance | Last commit, issue response time |

### Show, Don't Just Tell

```markdown
❌ "Tool A is faster"

✅ "Tool A builds in 1.2s vs Tool B's 3.4s on the same project"
```

### Acknowledge Trade-offs

Nothing is universally better. Credibility comes from honesty:

```markdown
## When NOT to Use [Tool]

- [Scenario where it's wrong]
- [Another scenario]
```

### Update Dates

Comparison content gets stale. Always include:

```markdown
**Last updated:** January 2026
**Versions compared:** Tool A v2.1, Tool B v4.0
```

## SEO Optimization

### Title Patterns

| Pattern | Example |
|---------|---------|
| X vs Y: [Deciding Factor] | "Nuxt vs Next: Which Framework in 2026?" |
| X vs Y for [Audience] | "Vue vs React for Beginners" |
| [N] Best X Alternatives | "7 Best Create React App Alternatives" |

### Comparison Tables

Google loves tables for featured snippets:

```markdown
| Feature | Nuxt | Next |
|---------|------|------|
| SSR | ✅ Built-in | ✅ Built-in |
| SSG | ✅ Built-in | ✅ Built-in |
| Vue Support | ✅ | ❌ |
| React Support | ❌ | ✅ |
```

Use ✅/❌ or specific values, not vague ratings.

### Featured Snippet Strategy

**Table snippets:** Quick comparison tables dominate "X vs Y" SERPs.

**Paragraph snippets:** After "When to Choose X" headings, include 40-60 word direct answers.

**List snippets:** Use for "best alternatives" content with numbered lists.

## Fairness & Credibility

### Disclose Bias

```markdown
**Disclosure:** We primarily use Nuxt, but we've built production apps with both frameworks.
```

### Test Both Tools

Don't compare from docs alone:
- Build something small with each
- Note real pain points
- Capture actual metrics

### Link to Sources

```markdown
According to the [State of JS 2025 survey](link),
Next.js has 78% satisfaction vs Nuxt's 82%.
```

## MCP Tools

| Tool | When |
|------|------|
| `mcp__nuxt-seo-pro__research_keywords` | Find "X vs Y" keyword volume |
| `mcp__nuxt-seo-pro__analyze_serp` | See what comparison content ranks |
| `mcp__nuxt-seo-pro__check_rankings` | Analyze competitor comparison pages |

## Quality Checklist

- [ ] Clear verdict in first paragraph
- [ ] Comparison table with specific values
- [ ] Both tools actually tested
- [ ] Specific scenarios for each choice
- [ ] Trade-offs acknowledged
- [ ] Last updated date included
- [ ] Versions compared specified
- [ ] Sources linked where relevant
