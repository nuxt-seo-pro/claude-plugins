# Educational Content Patterns

Blog posts, tutorials, and guides. Different from docs - more narrative, problem-focused, teaches concepts.

## Core Principles

- Lead with problems, not features
- Target long-tail keywords with clear intent
- Save readers time - that's the universal motivator
- Code within first 3 scrolls
- Say what NOT to do

## Article Structure

```markdown
---
title: How to [Primary Search Term]
description: [Click-worthy description with primary term]
relatedPages:
  - path: /docs/relevant-module
    title: Module Docs
---

[Opening: problem statement + what this solves]

## [H2: First major topic - keyword variation]

[Content with code examples]

### [H3: Question users ask]

[Direct answer - 40-60 words for featured snippet]

## Common Mistakes (optional)

[What NOT to do]
```

## Opening Patterns

Lead with problems/outcomes, not features.

| Pattern | Example |
|---------|---------|
| Problem + Solution | "67% of customers prefer booking online. Here's how to set it up in 10 minutes." |
| Surprising Fact | "Businesses with online booking see 26% more appointments." |
| Common Mistake | "Most booking pages ask for too much info - and lose 40% of customers." |

## SEO

See `../../../.shared/seo-patterns.md` for featured snippet targeting and keyword placement.

**Long-tail wins:** "how to add meta tags nuxt 4" beats "meta tags"

**Natural placement:**
- Primary term: 1-2x in first 100 words, then only where natural
- If you'd cringe reading it aloud, rewrite

## E-E-A-T Signals

Show experience with markers: "When I built...", "In production we found...", "After testing..."

**Citations:** Prefer official docs, framework team posts, primary research. Avoid tutorialspoint, w3schools, unverified Medium posts.

## Time-Saving Framing

| Use | Avoid |
|-----|-------|
| "2 minutes to set up" | "easy to configure" |
| "Zero config required" | "simple setup process" |
| "One line replaces 10" | "convenient wrapper" |

## Interactive Components

For long articles (1500+ words), consider adding:
- `::key-takeaways` - summary box at top
- `::quick-check` - quiz at end

Check `components/content/` for existing components. If missing, create from standard patterns.
