# Conversion Audit Patterns

Persona-based testing for sales/landing pages.

See `../../.shared/persuasion.md` for psychology shifts and objection categories.

## Personas

| Persona | Experience | Key Concern |
|---------|------------|-------------|
| **Junior Dev** | 1 year, startup | "Is this worth it at my skill level?" |
| **Mid-level Dev** | 3 years, production apps | "Could I build this myself?" |
| **Senior Dev** | 7+ years, enterprise | "Is this technically sound?" |
| **Tech Lead** | Budget holder, team manager | "How do I justify this to stakeholders?" |
| **Indie Dev** | Bootstrapped, solo founder | "Is this worth it pre-revenue?" |

## What to Check

| Element | Look For |
|---------|----------|
| Pricing | Clarity, comparison anchoring, hidden costs, value justification |
| CTAs | Specificity, placement (above fold?), urgency type, friction |
| Social proof | Specificity ("saved 40%"), recency, relevance to persona |
| Risk reversals | Guarantees, refund policies, trial offers, security badges |
| Feature claims | Proof/demos, benefit vs feature language, differentiation |
| Objection handling | Pre-emptive answers, FAQ placement, trust signals |

## Workflow

1. **Read page** - identify claims, features, pricing, CTAs, social proof
2. **Test each persona** - ask "Why would they NOT buy?"
3. **Find universal objections** - patterns across 3+ personas
4. **Recommend fixes** - what to add/change, specific copy, placement

## Common Objections by Category

| Category | Examples |
|----------|----------|
| Value | "Too expensive", "Free alternatives exist", "Paying for features I don't need" |
| Trust | "Never heard of them", "No reviews from my industry", "What if they shut down?" |
| Timing | "Not ready yet", "Need to check with team", "Maybe next quarter" |
| Technical | "Will it work with my stack?", "Migration seems painful", "Lock-in concerns" |
| Effort | "Learning curve too steep", "Don't have time to set up", "My current solution works" |

## Output Format

Generate `.claude/context/objection-analysis.md`:

```yaml
page: /pricing
personas_tested: 5

universal_objections:
  - category: value
    objection: "Paying for features marked 'coming soon'"
    evidence: "3 of 5 headline features show 'Coming Q2' badges"
    priority: high
    fix: 'Lead with available features, move roadmap to separate section'

  - category: trust
    objection: No social proof from similar companies
    evidence: 'All testimonials from enterprise, none from startups'
    priority: medium
    fix: Add 2-3 indie/startup testimonials

persona_specific:
  junior_dev:
    - 'Pricing assumes team usage, no solo tier'
  tech_lead:
    - No ROI calculator or comparison to alternatives

recommendations:
  - priority: high
    action: "Remove 'coming soon' badges from hero section"
    copy: '[specific suggested copy]'
  - priority: medium
    action: Add startup testimonial
    placement: Below pricing table
```

## Red Flags

Immediate issues that hurt conversion:

| Red Flag | Impact |
|----------|--------|
| "Coming soon" on hero features | Undermines core value prop |
| Only enterprise testimonials | Alienates smaller buyers |
| Vague pricing ("Contact us") | Friction, implies expensive |
| No trial/guarantee | Increases perceived risk |
| Wall of features, no benefits | Doesn't answer "why should I care?" |
| Broken demo/signup flow | Loses ready-to-buy visitors |
