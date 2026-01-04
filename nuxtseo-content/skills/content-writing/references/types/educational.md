# Educational Content Patterns

Blog posts, tutorials, and guides optimized for search. Different from docs—more narrative, problem-focused, teaches concepts.

## Core Principles

- Lead with problems, not features
- Target long-tail keywords with clear intent
- Save readers time—that's the universal motivator
- Include code within first 3 scrolls
- Say what NOT to do

## Audience

| Segment | % | Wants |
|---------|---|-------|
| Beginners | 40% | Guidance, guardrails, fear of missing something |
| Intermediate | 35% | "Just works", hates configuration |
| Experienced | 25% | Depth, customization, full control |

**Universal motivator:** Saving time on things they know they should do but can't prioritize.

## Article Structure

```markdown
---
title: How to [Primary Search Term]
description: [Click-worthy description with primary term]
relatedPages:
  - path: /docs/relevant-module
    title: Module Docs
  - path: /learn/related-topic
    title: Related Article
---

[Opening: problem statement + what this solves]

## [H2: First major topic—uses keyword variation]

[Content with code examples]

## [H2: Second topic—another angle]

[Content]

### [H3: Question users ask]

[Direct answer]

## [H2: Common Mistakes] (optional)

[What NOT to do]
```

## SEO Structure

Target long-tail keywords. "how to add meta tags nuxt 4" beats "meta tags".

### Heading Optimization

| Element | Priority | Approach |
|---------|----------|----------|
| H1 / Title | Highest | Primary keyword naturally |
| H2 headings | High | Variations, related terms |
| First paragraph | High | Primary term in first 100 words |
| Meta description | Medium | Include term, focus on clicks |
| H3+ headings | Lower | Questions users ask |

### Natural Placement

- Primary term: 1-2x in first 100 words, then only where natural
- Headings read as navigation, not keyword lists
- If you'd cringe reading it aloud, rewrite

**Don't:**
- Repeat exact phrase in every heading
- Force terms where they don't fit
- Add framework name to every heading when context is obvious

## Featured Snippet Targeting

Structure content to win featured snippets (position zero).

### Paragraph Snippets

After each H2/H3 question, include a 40-60 word direct answer:

```markdown
### How do you reduce no-shows for appointments?

Send automated reminders 24 hours and 1 hour before appointments. Include
a one-click reschedule link. Studies show this reduces no-shows by 38%.
For high-value appointments, add a small deposit requirement during booking.
```

### List Snippets

Use ordered/unordered lists with 4-8 items for "how to" and "best" queries:

```markdown
## How to Improve Your Booking Conversion Rate

1. Reduce form fields to essentials only
2. Show real-time availability
3. Add trust signals (reviews, guarantees)
4. Enable guest checkout
5. Send instant confirmation emails
```

### Definition Snippets

For "what is" queries, lead with a concise definition:

```markdown
## What is a booking widget?

A booking widget is an embeddable calendar that lets customers schedule
appointments directly from your website. It syncs with your availability,
sends confirmations automatically, and eliminates back-and-forth emails.
```

## Opening Patterns

Lead with problems/outcomes, not features.

### Problem + Solution

**Bad:**
> In today's digital landscape, online booking is important. This guide explores scheduling.

**Good:**
> 67% of customers prefer booking online. Here's how to set it up in 10 minutes.

### Surprising Fact + Implication

> Businesses with online booking see 26% more appointments. Here's why phone-only is costing you.

### Common Mistake + Better Way

> Most booking pages ask for too much info upfront—and lose 40% of customers. Here's how to fix it.

## E-E-A-T Signals

Google prioritizes Experience, Expertise, Authoritativeness, and Trustworthiness.

### Experience (First-hand)

Show you've actually done the thing:

```markdown
❌ "Online booking is useful for service businesses."

✅ "When we switched from phone-only to online booking, no-shows dropped from 18% to 6%."
```

Markers: "When I built...", "In production we found...", "After testing..."

### Expertise

- Explain *why*, not just *how*
- Acknowledge edge cases and limitations
- Reference official sources accurately

### Authoritativeness

- **Author bylines** with relevant credentials
- **Citations** to official docs, not random blogs
- **Internal links** to related authoritative content

### Trustworthiness

- **Last updated dates** on all content
- **Version numbers** for framework-specific advice
- **Corrections** when content becomes outdated

### Citation Priority

| Source Type | Example | Trust Level |
|-------------|---------|-------------|
| Official docs | Vue.js docs, Nuxt docs | Highest |
| Framework team | Evan You's blog, Pooya Parsa's tweets | High |
| Primary research | Google studies, State of JS survey | High |
| Authoritative blogs | web.dev, developers.google.com | Medium-high |
| Well-known devs | Specific named experts with track record | Medium |

**Avoid citing:** tutorialspoint, w3schools, Medium posts without known authors, StackOverflow answers without verification, content >2 years old for rapidly changing topics.

## Time-Saving Framing

Position around saving time:

| Use | Avoid |
|-----|-------|
| "2 minutes to set up" | "easy to configure" |
| "Zero config required" | "simple setup process" |
| "Catches X before it costs you traffic" | "helps detect issues" |
| "One line replaces 10" | "convenient wrapper" |

## LLM Search Optimization

LLMs append year and use question-based queries. Light touches help:

- Mention year once naturally (intro or where version matters)
- Version numbers: "Nuxt 4", "Vue 3"
- Some H2s as questions users ask
- "Recommended" when genuinely recommending

Don't plaster "(2025)" everywhere or force question headings.

## MCP Tools

| Tool | When | Requires init_site |
|------|------|-------------------|
| `mcp__nuxt-seo-pro__research_keywords` | Before writing—find target keywords | No |
| `mcp__nuxt-seo-pro__analyze_content_page` | After writing—validate SEO | Yes |

## Quality Checklist

- [ ] Problem-first opening (not feature-first)
- [ ] Code within first 3 scrolls
- [ ] Primary keyword in H1 and first paragraph
- [ ] H2s use variations naturally
- [ ] States what NOT to do
- [ ] relatedPages frontmatter with 2-3 links
- [ ] Verification method included
