---
name: Landing Page Copy
description: Use for "landing page copy", "hero section", "marketing copy", "homepage", "sales page", "value proposition", "CTA copy", "conversion copy", or product page content.
version: 0.1.0
---

# Landing Page Copy

Conversion-focused copy for developer tools and products. Different from docs or tutorials—this is marketing that sells.

## Artifacts

**Reads:**
- `.claude/context/market-research.md` — Product context, positioning, keywords
- `.claude/context/competitors.md` — Competitor weaknesses to exploit

**Generates:**
- `.claude/context/brand-voice.md` — Tone, terminology for other skills
- `.claude/context/product-positioning.md` — Value props, messaging

**Before writing:** Check for market-research.md. If missing, either run market-research skill first or ask user key questions about product/audience.

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

Code speaks louder than copy:

```markdown
Stop writing this:

​```ts
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
// ... 10 more imports
​```

Just write this:

​```ts
useSeoMeta({ title: 'My Page' })
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
# AI-Powered Frontend Development

MCP servers, cursor rules, and Claude skills for Vue, React, and Nuxt developers.

[Get Started] [View on GitHub]

Used by 5,000+ developers
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
## AI tools don't understand your framework

Generic coding assistants miss framework conventions.
They suggest patterns that don't fit Vue.
They ignore Nuxt's auto-imports.
They waste your time fixing their mistakes.

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

### Framework-Aware Cursor Rules
Pre-configured rules that understand Vue SFCs, Nuxt conventions, and your component library.

### MCP Servers for Your Stack
Connect Claude to Nuxt UI, Pinia, VueUse—tools that understand your actual codebase.

### Ready-to-Use Claude Skills
Drop-in skills for common tasks: component generation, test writing, refactoring.
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

1. **Install the MCP server**
   `npx aifrontend add nuxt-ui`

2. **Add to Claude Code**
   One line in your config

3. **Start building**
   Claude now understands Nuxt UI components
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
## Trusted by Vue Developers

> "Finally, an AI that doesn't fight my framework."
> — Sarah Chen, Senior Developer at Acme

[Vue Logo] [Nuxt Logo] [Tailwind Logo]

⭐ 2,400 GitHub stars · 📦 50k downloads · 👥 1,200 Discord members
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
| **Benefit** | [Outcome] for [Audience] | "Better DX for Vue developers" |
| | [Action] [Object] | "Ship components faster" |
| | The [Adjective] Way to [X] | "The lazy way to add SEO" |
| **Contrast** | [Old way] → [New way] | "From boilerplate to one-liner" |
| | Stop [X]. Start [Y]. | "Stop configuring. Start shipping." |
| | [X] Without [Y] | "Meta tags without the setup" |
| **Specificity** | [Number] [Noun] in [Time] | "Add SEO in 2 minutes" |
| | [X]% [Better/Faster/Less] | "50% less configuration" |
| **Problem** | The [X] Problem Solved | "The meta tag problem, solved" |
| | Why [X] Fails (And What Works) | "Why manual SEO fails" |
| | [X] That Actually Works | "Framework AI that actually works" |
| **Curiosity** | What [Audience] Know About [X] | "What senior devs know about DX" |
| | The [X] Mistake Everyone Makes | "The SEO mistake costing you traffic" |
| **Social** | Join [Number]+ [Audience] | "Join 5,000+ Vue developers" |
| | [X] Teams Use This | "Why Nuxt teams use this" |

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

- **Headline:** "Stop Correcting Your AI"
- **Subhead:** "MCP servers and cursor rules that understand Vue, Nuxt, and React conventions."

### CTAs

| Weak | Strong |
|------|--------|
| Submit | Get Started |
| Click Here | View Pricing |
| Learn More | See How It Works |
| Sign Up | Start Free Trial |

Be specific about what happens:
- "Get Started — Free"
- "Add to Claude Code"
- "Download Cursor Rules"

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
| [Product]: [Value Prop] | "AI Frontend: AI Tools for Vue & React Developers" |
| [Action] [Object] with [Product] | "Build Faster with AI Frontend" |

### Meta Descriptions

150-160 chars. Include:
- What it is
- Who it's for
- Key benefit

**Example:**
"MCP servers, cursor rules, and Claude skills for Vue and React developers. Ship faster with AI that understands your framework."

### H1 Strategy

One H1 per page = the headline. Make it count for SEO:

- Include primary keyword naturally
- Focus on user intent
- Keep under 60 characters

## Example: Complete Landing Page

See `examples/tool-landing.md` for a complete example.

## Quality Checklist

- [ ] Hero communicates value in 5 seconds
- [ ] Specific claims (numbers, comparisons)
- [ ] Code examples where relevant
- [ ] Clear CTA above the fold
- [ ] Social proof included
- [ ] No banned words/patterns
- [ ] Mobile-friendly copy (short paragraphs)
- [ ] Scannable with clear headings
