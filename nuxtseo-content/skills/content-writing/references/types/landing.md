# Landing Page Patterns

Conversion-focused copy for developer tools and products. This is marketing that sells.

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

\`\`\`ts
// 15 lines of boilerplate
const config = { ... }
await initialize(config)
await validate(config)
\`\`\`

Just write this:

\`\`\`ts
await start({ autoConfig: true })
\`\`\`
```

## Page Sections

### Hero Section

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

```markdown
## Scheduling shouldn't take 15 back-and-forth emails

Phone tag wastes your time.
Calendly-style tools look generic.
Custom booking pages cost $5,000+.

**There's a better way.**
```

### Features Section

List what the product does, framed as benefits.

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

```markdown
## Trusted by {site.industry} Professionals

> "Cut our no-show rate from 18% to 4%."
> — Sarah Chen, {site.industry} Business Owner

⭐ 4.9/5 rating · 📅 50,000+ bookings · 👥 500+ businesses
```

### CTA Section

```markdown
## Ready to Ship Faster?

Get AI that actually understands your stack.

[Get Started — Free] [Read the Docs]
```

## Headlines

### Core Formulas

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
| | [X] That Actually Works | "Booking software that actually works" |
| **Social** | Join [Number]+ [Audience] | "Join 500+ {site.industry} businesses" |

### Headline Tests

1. **Competitor test:** Could a competitor use this exact headline? If yes, it's too generic.
2. **So what test:** Does it answer "why should I care?" in under 3 seconds?
3. **Specificity test:** Does it have a number, timeframe, or concrete outcome?

### Avoid

- "AI-Powered" (everyone says this)
- Questions as headlines ("Ready to...?")
- Unverifiable superlatives ("The best", "Revolutionary")

## CTAs

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

## Quality Checklist

- [ ] Hero communicates value in 5 seconds
- [ ] Specific claims (numbers, comparisons)
- [ ] Code examples where relevant
- [ ] Clear CTA above the fold
- [ ] Social proof included
- [ ] No banned words/patterns
- [ ] Mobile-friendly copy (short paragraphs)
- [ ] Scannable with clear headings
