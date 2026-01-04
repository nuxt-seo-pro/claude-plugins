# Conversion Audit Patterns

Persona-based testing for sales/landing pages. Identify objections and conversion blockers.

## Personas

Test against 5 developer personas:

| Persona | Experience | Context | Key Concern |
|---------|------------|---------|-------------|
| **Junior Dev** | 1 year | Startup | "Is this worth it at my skill level?" |
| **Mid-level Dev** | 3 years | Multiple production apps | "Could I build this myself?" |
| **Senior Dev** | 7+ years | Enterprise | "Is this technically sound?" |
| **Tech Lead** | Budget holder | Team manager | "How do I justify this to stakeholders?" |
| **Indie Dev** | Bootstrapped | Solo founder | "Is this worth it pre-revenue?" |

## Workflow

### 1. Read the Page

Identify:
- All claims made
- Features listed
- Pricing tiers
- CTAs
- Social proof

### 2. Test Each Persona

For each persona, ask: **"Why would they NOT buy?"**

Document:
- Their specific concerns based on experience level
- What information is missing for them
- Trust barriers they face
- Value perception issues

### 3. Identify Universal Objections

Patterns that appear across 3+ personas:
- Pricing confusion
- Unclear deliverables
- Trust issues
- Proof gaps

### 4. Recommend Fixes

For each objection:
- What to add/change
- Specific copy suggestions
- Where on page to place it

## Common Objection Categories

### 1. Value/Price Mismatch

**Symptoms:**
- "Paying for vaporware" (features marked "coming soon")
- "Could build this myself in X hours"
- "Hidden costs revealed late"

**Fixes:**
- Lead with what's available NOW
- Pricing calculator for variable costs
- Time-saved framing ("Building this = 2-3 weeks")

### 2. Trust Issues

**Symptoms:**
- "Solo maintainer = bus factor of 1"
- "History of delays"
- "No testimonials with metrics"

**Fixes:**
- Extended refund policy
- Delivery commitments with deadlines
- Specific testimonials: "Reduced X by Y%"

### 3. Proof Gaps

**Symptoms:**
- "Demos look fake"
- "No case studies"
- "Vague claims without data"

**Fixes:**
- Label demos honestly ("Live Preview" vs "Concept")
- Add problem metrics ("2-5% traffic lost to X")
- Real before/after examples

### 4. Unclear Fit

**Symptoms:**
- "Is this for me?"
- "Too expensive for my situation"
- "Need this immediately but it's not ready"

**Fixes:**
- "Who Is This For?" section with explicit qualifiers
- "Wait If You..." section to disqualify wrong buyers
- Clear timeline/availability messaging

## Example Questions Per Persona

### Junior Dev
- "Do I understand what this actually does?"
- "Is the price worth it at my skill level?"
- "Will I need to learn a lot to use this?"

### Mid-level Dev
- "What's the ROI compared to building it myself?"
- "Are these real solutions or surface-level?"
- "Is the pricing honest or are there hidden costs?"

### Senior Dev
- "Is this technically sound?"
- "Could our team build better custom solutions?"
- "What's the lock-in risk?"

### Tech Lead
- "How do I justify this expense to management?"
- "What are the support/SLA guarantees?"
- "What if this is abandoned?"

### Indie Dev
- "Is this worth it with no revenue yet?"
- "Are there free alternatives that are good enough?"
- "What if my project fails?"

## Psychology Shifts

Common transformations:

| From | To |
|------|-----|
| Artificial urgency ("LIMITED TIME!") | Real value ("3 modules ready now") |
| Vague benefits ("Maximize SEO") | Quantified problems ("2-5% traffic lost") |
| FOMO pressure ("Don't miss out!") | Informed decision ("If you want to wait...") |
| Hidden risks | Transparent guarantees |
| Universal appeal | Target qualification |

## Output Format

```markdown
## Conversion Audit

**Page:** [URL or file path]
**Date:** [YYYY-MM-DD]

### Universal Objections (3+ Personas)

#### 1. [Objection Title]

**What they said:**
- Junior: "[specific concern]"
- Mid-level: "[specific concern]"
- Senior: "[specific concern]"

**Root cause:** [why this objection exists]

**Fix:**
- [specific change]
- [copy suggestion]

---

### Persona-Specific Objections

#### Junior Developer

| Concern | Current State | Recommended Fix |
|---------|---------------|-----------------|
| [concern] | [what page says] | [what to add/change] |

[Repeat for each persona]

---

### Priority Fixes

1. **High:** [fix that addresses most personas]
2. **Medium:** [fix for specific segments]
3. **Low:** [nice to have]

---

### Messaging Transformations

| Before (Problem) | After (Fixed) |
|------------------|---------------|
| "[vague/problematic copy]" | "[improved copy]" |
```
