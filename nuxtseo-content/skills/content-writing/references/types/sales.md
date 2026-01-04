# Sales Page Patterns

Sales and pricing pages optimized for conversion. Builds on landing page patterns with pricing-specific elements.

## When to Use

- Pricing pages
- Sales pages with purchase intent
- Premium tier explanations
- Upgrade prompts

## Page Structure

```markdown
# [Value Proposition Headline]

[Subhead: expand on the value]

## Pricing

[Pricing tiers with clear differentiation]

## What's Included

[Feature breakdown by tier]

## Who Is This For?

[Explicit qualification—who should buy]

## FAQ

[Address objections as questions]

## Guarantee

[Risk reversal]

## CTA

[Final push with urgency if genuine]
```

## Pricing Presentation

### Tier Structure

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

### Enterprise — Custom
For organizations at scale
- Everything in Pro
- SSO/SAML
- Dedicated support
- Custom integrations
```

### Pricing Psychology

| Pattern | When to Use |
|---------|-------------|
| Anchor high | Show enterprise first if selling mid-tier |
| Decoy pricing | Add tier that makes target tier look better |
| Annual discount | "2 months free" beats "17% off" |
| Price per unit | "$0.50/user" feels smaller than "$50/team" |

### What to Avoid

- Hidden costs revealed late
- "Contact us" for basic pricing
- Too many tiers (3 is ideal)
- Feature lists that look identical across tiers

## Qualification Sections

### Who Is This For?

Explicit about ideal customers:

```markdown
## Who Is This For?

**Perfect fit:**
- Teams with 5+ developers
- Shipping production apps weekly
- Need consistent code quality

**Wait if you:**
- Solo dev on side projects (free tier works)
- Not using AI coding tools yet
- Need enterprise compliance (coming Q2)
```

### When to Wait

Disqualify wrong buyers to build trust:

```markdown
## When to Wait

- **Pre-revenue?** Free tier handles most needs
- **Need feature X?** It's on our roadmap for Q2
- **Team <3 people?** You won't need team features
```

## Objection Handling

Address objections before they become blockers.

### Common Developer Objections

| Objection | Address With |
|-----------|--------------|
| "Could build this myself" | Time calculation: "Building this = 2-3 weeks" |
| "What if abandoned?" | Commitment: "Active development since 2020" |
| "Solo maintainer risk" | Bus factor mitigation, open source core |
| "Hidden costs?" | All-inclusive pricing, no surprises |

### FAQ Section

```markdown
## FAQ

### Can I try before buying?

Yes. The free tier is fully functional. Pro adds [specific features].

### What if I need to cancel?

Cancel anytime. No questions, no hoops. Annual plans get prorated refunds.

### Do you offer team discounts?

Teams of 10+ get 20% off. [Contact us](/contact) for enterprise pricing.
```

## Trust Elements

### Guarantees

```markdown
## 30-Day Money Back Guarantee

Not happy? Full refund, no questions asked. We've processed 3 refunds
in 2 years—but the option is always there.
```

### Social Proof (Specific)

```markdown
> "Paid for itself in the first week. Saved 4 hours on our first project."
> — Alex Chen, Senior Developer at Acme Corp
```

Not: "Great product!" — vague testimonials hurt credibility.

### Metrics

```markdown
- 500+ teams using Pro
- 4.9/5 average rating
- <2 hour average support response
```

## Psychology Shifts

| From | To |
|------|-----|
| Artificial urgency ("LIMITED TIME!") | Real value ("3 modules ready now") |
| Vague benefits ("Maximize SEO") | Quantified problems ("2-5% traffic lost") |
| FOMO pressure ("Don't miss out!") | Informed decision ("If you want to wait...") |
| Hidden risks | Transparent guarantees |
| Universal appeal | Target qualification |

## CTA Patterns

### Primary CTA

Clear, specific, low friction:

```markdown
[Start Free Trial — No Credit Card]
[Get Pro — $19/mo]
[Book a Demo — 15 minutes]
```

### Secondary CTA

For those not ready:

```markdown
[Compare Plans] [Read the Docs] [See Examples]
```

### Placement

- After hero
- After pricing table
- After FAQ
- Sticky on scroll (optional)

## Quality Checklist

- [ ] Value clear in first 5 seconds
- [ ] Pricing visible without scrolling
- [ ] Clear tier differentiation
- [ ] "Who is this for" section
- [ ] Objections addressed in FAQ
- [ ] Guarantee/refund policy stated
- [ ] Specific testimonials with metrics
- [ ] No hidden costs or surprises
- [ ] CTA specific about what happens next
