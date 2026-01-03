---
name: Landing Page Copy
description: Use for "landing page copy", "hero section", "marketing copy", "homepage", "sales page", "value proposition", "CTA copy", "conversion copy", or product page content.
version: 0.1.0
---

# Landing Page Copy

Conversion-focused copy for developer tools and products. Different from docs or tutorials—this is marketing that sells.

## Artifacts

**Reads:**
- `.claude/context/site-config.md` — Site URL, name, industry for examples
- `.claude/context/market-research.md` — Product context, positioning, keywords
- `.claude/context/competitors.md` — Competitor weaknesses to exploit

**Generates:**
- `.claude/context/brand-voice.md` — Tone, terminology for other skills
- `.claude/context/product-positioning.md` — Value props, messaging

**Before writing:** Check for site-config.md. If missing, ask user for site URL, name, and industry. Use `{site.*}` placeholders in examples, replaced with actual values.

## When to Use

- Homepage hero sections
- Product landing pages
- Feature section copy
- CTA (call-to-action) copy
- Pricing page copy
- Tool/library announcement pages

## Core Principles

### 1. Lead with Outcome, Not Feature

**Feature:** "Built-in SSR support"
**Outcome:** "Ship SEO-friendly pages without configuration"

**Feature:** "Auto-imports"
**Outcome:** "Stop writing import statements"

### 2. Be Specific

**Vague:** "Blazing fast performance"
**Specific:** "3x faster builds than Create React App"

**Vague:** "Easy to use"
**Specific:** "Set up in 2 minutes with one command"

### 3. Speak Developer

Developers detect marketing BS instantly. Write like a dev, not a marketer:

**Marketing speak:** "Leverage our cutting-edge solution to unlock developer productivity"
**Developer speak:** "Less boilerplate. More shipping."

### 4. Show, Then Tell

Code speaks louder than copy. Show the before/after:

```markdown
Stop writing this:

​```ts
// 15 lines of boilerplate
const config = { ... }
await initialize(config)
await validate(config)
// ... more setup
​```

Just write this:

​```ts
await start({ autoConfig: true })
​```
```

## Page Sections

### Hero Section

The first thing visitors see. Make it count.

**Components:**
1. **Headline** — One clear value proposition
2. **Subhead** — Expand on the headline (1-2 sentences)
3. **CTA** — Clear next action
4. **Social proof** — Optional but powerful

**Formula:**
```
[Outcome] for [Audience]
[How it works / what it replaces]
[CTA Button]
```

**Example:**
```markdown
# {site.tagline}

{site.name} helps [target audience] [achieve outcome] without [pain point].

[Get Started] [View Demo]

Trusted by 500+ customers
```

### Problem Section

Agitate the pain before offering the solution.

**Formula:**
```
[Problem statement]
[Why existing solutions fail]
[Transition to your solution]
```

**Example:**
```markdown
## Scheduling shouldn't take 15 back-and-forth emails

Phone tag wastes your time.
Calendly-style tools look generic.
Custom booking pages cost $5,000+.

**There's a better way.**
```

### Features Section

List what the product does, framed as benefits.

**Structure:**
```markdown
## Features

### [Benefit-focused title]
[One sentence explanation]

### [Benefit-focused title]
[One sentence explanation]
```

**Example:**
```markdown
## What's Included

### Smart Scheduling
Syncs with your calendar, blocks buffer time, handles timezone conversion automatically.

### Branded Booking Pages
Your colors, your logo, your domain—not a generic booking link.

### Automated Reminders
SMS and email reminders that reduce no-shows by 38%.
```

### How It Works

Reduce friction by showing simplicity.

**Formula:**
```
1. [First step] — [What happens]
2. [Second step] — [What happens]
3. [Third step] — [Outcome]
```

**Example:**
```markdown
## Get Started in 60 Seconds

1. **Create your booking page**
   Pick a template, add your services

2. **Connect your calendar**
   Google, Outlook, or Apple Calendar

3. **Share your link**
   Embed on your site or send directly to clients
```

### Social Proof

Borrow credibility from users.

**Types:**
- Testimonials (quotes with names/photos)
- Logos (companies using it)
- Stats (downloads, stars, users)
- Community (Discord members, contributors)

**Example:**
```markdown
## Trusted by {site.industry} Professionals

> "Cut our no-show rate from 18% to 4%."
> — Sarah Chen, {site.industry} Business Owner

⭐ 4.9/5 rating · 📅 50,000+ bookings · 👥 500+ businesses
```

### CTA Section

Clear call to action. One primary, one secondary max.

**Example:**
```markdown
## Ready to Ship Faster?

Get AI that actually understands your stack.

[Get Started — Free] [Read the Docs]
```

### Pricing Section

For paid products. Be clear and honest.

**Example:**
```markdown
## Pricing

### Free
For individual developers
- All cursor rules
- Core MCP servers
- Community support

### Pro — $19/mo
For teams shipping fast
- Everything in Free
- Premium MCP servers
- Priority support
- Team sharing
```

## Writing Guidelines

### Headlines

**Core Formulas (15 patterns):**

| Category | Pattern | Example |
|----------|---------|---------|
| **Benefit** | [Outcome] for [Audience] | "Effortless scheduling for busy professionals" |
| | [Action] [Object] | "Book more clients" |
| | The [Adjective] Way to [X] | "The lazy way to fill your calendar" |
| **Contrast** | [Old way] → [New way] | "From phone tag to one-click booking" |
| | Stop [X]. Start [Y]. | "Stop chasing. Start booking." |
| | [X] Without [Y] | "Online booking without the complexity" |
| **Specificity** | [Number] [Noun] in [Time] | "Set up in 5 minutes" |
| | [X]% [Better/Faster/Less] | "38% fewer no-shows" |
| **Problem** | The [X] Problem Solved | "The scheduling problem, solved" |
| | Why [X] Fails (And What Works) | "Why phone booking fails" |
| | [X] That Actually Works | "Booking software that actually works" |
| **Curiosity** | What [Audience] Know About [X] | "What top studios know about booking" |
| | The [X] Mistake Everyone Makes | "The booking mistake costing you clients" |
| **Social** | Join [Number]+ [Audience] | "Join 500+ {site.industry} businesses" |
| | [X] Teams Use This | "Why top studios use this" |

**Headline Tests:**

1. **Competitor test:** Could a competitor use this exact headline? If yes, it's too generic.
2. **So what test:** Does it answer "why should I care?" in under 3 seconds?
3. **Specificity test:** Does it have a number, timeframe, or concrete outcome?

**Avoid:**
- "AI-Powered" (everyone says this)
- Questions as headlines ("Ready to...?")
- Unverifiable superlatives ("The best", "Revolutionary")

### Subheads

Support the headline. Add specificity:

- **Headline:** "Stop Playing Phone Tag"
- **Subhead:** "Let clients book instantly. Sync with your calendar. Send automatic reminders."

### CTAs

| Weak | Strong |
|------|--------|
| Submit | Get Started |
| Click Here | View Pricing |
| Learn More | See How It Works |
| Sign Up | Start Free Trial |

Be specific about what happens:
- "Get Started — Free"
- "Book a Demo"
- "Start Your Free Trial"

### Avoid

**Banned words:**
- Leverage, utilize, harness
- Cutting-edge, revolutionary, game-changer
- Robust, seamless, best-in-class
- Empower, elevate, unlock

**Banned patterns:**
- "In today's fast-paced world..."
- "We're excited to announce..."
- "Introducing the future of..."
- Questions as headlines ("Ready to transform...?")

## Voice

### Do

- Direct and confident
- Technical but accessible
- Honest about limitations
- Specific with claims

### Don't

- Hype without substance
- Vague superlatives
- Hedge with "might", "could", "may"
- Apologize for features

**Example transformation:**

❌ "Our solution might help improve your development workflow by potentially reducing the time spent on repetitive tasks."

✅ "Write components 50% faster. We measured it."

## SEO for Landing Pages

### Title Tags

| Pattern | Example |
|---------|---------|
| [Product]: [Value Prop] | "{site.name}: Online Booking for {site.industry}" |
| [Action] [Object] with [Product] | "Book More Clients with {site.name}" |

### Meta Descriptions

150-160 chars. Include:
- What it is
- Who it's for
- Key benefit

**Example:**
"Online booking software for {site.industry} professionals. Let clients book 24/7, reduce no-shows by 38%, and sync with your calendar."

### H1 Strategy

One H1 per page = the headline. Make it count for SEO:

- Include primary keyword naturally
- Focus on user intent
- Keep under 60 characters

## Example: Complete Landing Page

See `examples/tool-landing.md` for a complete example.

## Design System Integration

When implementing landing pages, check for project design tokens:

**Reads:**
- `.claude/context/design-system.md` — Project-specific colors, typography, spacing

**Key patterns to match:**
- Color palette (accent color, backgrounds, text)
- Typography scale (heading sizes, font weights)
- Spacing rhythm (section padding, gaps)
- Component patterns (buttons, cards, badges)
- Interactive states (hover, focus, disabled)

See `references/design-patterns.md` for common developer tool landing patterns.

## Quality Checklist

- [ ] Hero communicates value in 5 seconds
- [ ] Specific claims (numbers, comparisons)
- [ ] Code examples where relevant
- [ ] Clear CTA above the fold
- [ ] Social proof included
- [ ] No banned words/patterns
- [ ] Mobile-friendly copy (short paragraphs)
- [ ] Scannable with clear headings
- [ ] Matches project design system (if defined)

## References

- `references/design-patterns.md` — Common landing page design patterns
