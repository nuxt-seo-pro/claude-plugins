---
name: Educational Content Writing
description: This skill should be used when the user asks to "write article", "create learn content", "blog post about", "educational content", "write tutorial", "explain how to", "guide for", or needs to write educational/blog-style content with SEO optimization.
version: 0.2.0
---

# Educational Content Writing

Educational articles and tutorials optimized for search. Different from docs—more narrative, problem-focused, teaches concepts.

## Artifacts

**Reads:**
- `.claude/context/site-config.md` — Site URL, name, industry for examples
- `.claude/context/market-research.md` — Product context, audience
- `.claude/context/brand-voice.md` — Tone, terminology
- `.claude/context/target-keywords.md` — Keywords to incorporate
- `.claude/context/product-positioning.md` — Value props for consistent messaging

**Before writing:** Check for site-config.md. If missing, ask user for site URL and name. Use `{site.url}` and `{site.name}` in examples.

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

### Example

Search terms: `online booking system`, `appointment scheduling software`, `how to take bookings online`

```markdown
# How to Set Up Online Booking for Your Business

Most small businesses lose 20% of potential bookings to phone tag. Here's how to fix that in 10 minutes.

## Choosing a Booking System

[content]

## Setting Up Your Availability

[content]

### Why do customers abandon the booking process?

[answer to common problem]
```

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

## LLM Search Optimization

LLMs append year and use question-based queries. Light touches help:

- Mention year once naturally (intro or where version matters)
- Version numbers: "Nuxt 4", "Vue 3"
- Some H2s as questions users ask
- "Recommended" when genuinely recommending

Don't plaster "(2025)" everywhere or force question headings.

## E-E-A-T Signals

Google prioritizes Experience, Expertise, Authoritativeness, and Trustworthiness. Build these signals into content:

### Experience (First-hand)

Show you've actually done the thing:

```markdown
❌ "Online booking is useful for service businesses."

✅ "When we switched from phone-only to online booking, no-shows dropped from 18% to 6%."
```

Markers: "When I built...", "In production we found...", "After testing..."

### Expertise

Demonstrate deep knowledge:

- Explain *why*, not just *how*
- Acknowledge edge cases and limitations
- Reference official sources accurately

### Authoritativeness

Build credibility through:

- **Author bylines** with relevant credentials
- **Citations** to official docs, not random blogs
- **Internal links** to related authoritative content

### Trustworthiness

Maintain trust with:

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

### Example with E-E-A-T

```markdown
---
author: {site.author}
authorRole: {site.authorRole}
lastUpdated: 2026-01-03
---

# How to Reduce Appointment No-Shows

After running {site.name} for 8 years, I've tested every reminder system.
Here's what actually works to get customers to show up.

## Automated Reminder Sequence

According to [industry research](https://example.com/source), SMS reminders
sent 24 hours before reduce no-shows by 38%...
```

**Note:** Replace `{site.*}` placeholders with values from site-config.md.

## Time-Saving Framing

Position around saving time:

| Use | Avoid |
|-----|-------|
| "2 minutes to set up" | "easy to configure" |
| "Zero config required" | "simple setup process" |
| "Catches X before it costs you traffic" | "helps detect issues" |
| "One line replaces 10" | "convenient wrapper" |

## Code Examples

### TypeScript Only

```ts
useSeoMeta({
  title: 'Page Title',
  description: 'Description here'
})
```

### Show the Problem First

````markdown
Most sites do this:

```ts [❌ Common Pattern]
useHead({
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    // 10 more lines...
  ]
})
```

One line does the same thing:

```ts [✅ Better]
useSeoMeta({ title, description })
```
````

### Real Examples

Use realistic content, not lorem ipsum:
```ts
useSeoMeta({
  title: 'Professional Portrait Photography in London',
  description: 'Book your headshot session. 60 minutes, 10 edited photos included.'
})
```

## Voice

- Developer-to-developer, casual
- Personal opinions welcome: "I'd recommend...", "This is lazy"
- No hedging: "Do X" not "You may want to consider X"
- Be specific: numbers over vague claims

## Banned Content

**Words:** dive into, crucial, essential, robust, seamless, leverage, utilize, comprehensive, harness, empower, elevate, unlock, game-changer

**Phrases:** "it's important to note", "in today's [X]", "let's explore", "this is where X comes in", "by the end of this guide"

**Patterns:**
- Rhetorical questions ("Ever wondered...?")
- Three-adjective chains ("powerful, flexible, and robust")
- Filler intros before the point
- "In conclusion" endings

## Endings

**Never:**
- "Now you're ready to..."
- "Happy coding!"
- "And that's it!"
- "In conclusion..."

**Do:** Just stop. Or link to the logical next step.

## Internal Linking

- 2-3 related pages in frontmatter
- Inline link first mention of features
- Link to relevant docs for deep dives

```yaml
relatedPages:
  - path: /docs/api/bookings
    title: Booking API Reference
  - path: /learn/scheduling/reducing-no-shows
    title: Reducing No-Shows
```

## MCP Tools

| Tool | When | Requires init_site |
|------|------|-------------------|
| `mcp__nuxt-seo-pro__research_keywords` | Before writing—find target keywords | No |
| `mcp__nuxt-seo-pro__analyze_content_page` | After writing—validate SEO | Yes |

**Note:** `analyze_content_page` requires site initialization. If not available, skip SEO validation step.

## Quality Checks

Before publishing:

- [ ] Problem-first opening (not feature-first)
- [ ] Code within first 3 scrolls
- [ ] Primary keyword in H1 and first paragraph
- [ ] H2s use variations naturally
- [ ] States what NOT to do
- [ ] No banned words/phrases
- [ ] relatedPages frontmatter with 2-3 links
- [ ] Verification method included

## Example: Complete Article

See `examples/learn-article.md` for a complete example.
