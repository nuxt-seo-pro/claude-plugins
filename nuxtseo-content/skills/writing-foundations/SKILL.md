---
name: Writing Foundations
description: This skill should be used when the user asks to "write content", "improve writing", "fix AI slop", "review content quality", or needs general writing guidance. Provides shared writing principles that all specialized writing skills inherit. Automatically loaded alongside docs-writing and learn-writing skills.
version: 0.1.0
---

# Writing Foundations

Shared writing principles for all Nuxt SEO content. Reference this skill for voice, linking, and quality standards.

## Voice

Developer-to-developer, casual but accurate.

- First person plural for shared experience ("we")
- Second person for instructions ("you")
- Contractions allowed, exclamation marks rare
- Be specific to Nuxt—avoid copy that fits any SEO tool
- Say what NOT to do. Real experts know pitfalls.
- Vary sentence length. Some short. Others longer when explaining.

### No Hedging

| Instead of | Write |
|------------|-------|
| You may want to consider | Do X |
| It's recommended that | Do X |
| This might potentially | This will |
| Could possibly help | Helps |

### Specificity

| Instead of | Write |
|------------|-------|
| Search engines may modify | Google rewrites 70% |
| Most sites have issues | 73% of sites fail Core Web Vitals |
| It can improve performance | Reduces LCP by 40% |

## Banned Content

See `references/banned-words.md` for the full list.

**Words to avoid:** dive into, crucial, essential, vital, robust, seamless, leverage, utilize, ensure, comprehensive, harness, empower, elevate, unlock, game-changer, delve, realm, landscape

**Phrases to avoid:** "it's important to note", "in today's [X]", "let's explore", "this is where X comes in", "at its core", "when it comes to"

**Patterns to avoid:**
- Rhetorical questions
- Three-adjective chains ("powerful, flexible, and robust")
- Filler intros before getting to the point
- Superlatives without proof

## Internal Linking

Link aggressively. Every page should link to 2-5 related pages.

### Two Methods

1. **Inline links** — First mention of features/concepts
2. **`relatedPages` frontmatter** — Rendered automatically at page end

```yaml
relatedPages:
  - path: /docs/og-image/getting-started
    title: OG Image Setup
  - path: /learn/mastering-meta/descriptions
    title: Meta Descriptions
```

### Link Text

| Good | Bad |
|------|-----|
| Configure [robots.txt](/docs/robots) | [Click here](/docs/robots) for robots |
| See [OG Image docs](/docs/og-image) | See the docs [here](/docs/og-image) |

### Rules

- Link first mention only, not every occurrence
- Never use "click here" or "this page"
- No "Related" or "See also" H2 sections—use frontmatter

## Quality Tests

See `references/quality-tests.md` for detailed guidance.

1. **"So what?" test** — After every sentence, reader shouldn't think "so what?"
2. **Read aloud test** — If it sounds like a press release, rewrite
3. **Delete test** — If you can remove a sentence without losing meaning, remove it
4. **Information density** — Every sentence adds new info. No filler.

## Quick Fixes

| Slop | Fix |
|------|-----|
| It's important to note that... | [just state it] |
| This allows you to... | You can... |
| In order to... | To... |
| provides a way to | lets you |
| is designed to / aims to | does |
| is intended to return | returns |

## Endings

**Never write:**
- "Now you're ready to..."
- "Happy coding!"
- "And that's it!"
- "In conclusion..."

**Do:** Just stop. Or link to next logical action.

## Gap Markers

When drafting, mark gaps rather than hallucinating:

```markdown
[STAT NEEDED: % of sites with X]
[VERIFY: does this work in Nuxt 4?]
[EXAMPLE NEEDED: real-world use case]
[LINK: internal link to related page]
```

## Pre-Publish Checklist

**Structure:**
- [ ] Opener makes use case obvious
- [ ] Code within first 3 scrolls
- [ ] Parameters in tables, not prose

**Links:**
- [ ] `relatedPages` frontmatter with 2-3 related pages
- [ ] Inline links on first mention of features/concepts
- [ ] Descriptive link text (no "click here")

**Content:**
- [ ] States what NOT to do / when it's overkill
- [ ] Includes verification method (how to test it works)
- [ ] No banned words or phrases

## Additional Resources

### Reference Files
- **`references/banned-words.md`** — Complete list of AI slop to avoid
- **`references/quality-tests.md`** — Detailed quality testing guidance
