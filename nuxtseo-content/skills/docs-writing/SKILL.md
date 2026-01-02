---
name: Documentation Writing
description: This skill should be used when the user asks to "write docs", "document feature", "create API docs", "technical documentation", "document this module", or needs to write reference documentation. Provides structure and patterns for technical documentation pages.
version: 0.1.0
---

# Documentation Writing

Technical documentation for `/docs/` pages. Reference `writing-foundations` for voice, banned words, and quality tests.

## Reference Style

Model after Stripe, Anthropic, and Claude Code docs:
- Task-oriented titles: "Create a sitemap" not "Understanding sitemaps"
- Code within first 3 scrolls
- Tables for parameters, not prose
- States limitations clearly
- Assumes reader intelligence—skip obvious setup

## Page Structure

```markdown
---
title: [Topic]
relatedPages:
  - path: /docs/related
    title: Related Page
---

[1-2 sentence opener: what it does + who it's for]

[Code for the 80% use case—no heading if one code block fits]

## [Section if multiple steps needed]

[Deeper content as needed]

[Mention limitations/overkill inline where relevant]
```

## Title Patterns

| Good | Bad |
|------|-----|
| Create a sitemap | Understanding sitemaps |
| Configure robots.txt | Working with robots.txt |
| Debug OG images | Troubleshooting OG image issues |

## Opening Sentences

Open with facts, not introductions.

**Bad:**
> Meta descriptions are an important part of SEO. In this guide, we'll explore how to configure them.

**Good:**
> Meta descriptions don't affect rankings. They affect clicks.

## Code Examples

- Show code for the 80% use case first
- Use `::code-group` for multiple approaches
- Show ❌ Bad / ✅ Good comparisons
- Use real URLs (nuxtseo.com) not example.com
- TypeScript, not JavaScript

```markdown
::code-group
\`\`\`ts [Recommended]
useSeoMeta({ title: 'My Page' })
\`\`\`

\`\`\`ts [Alternative]
useHead({ title: 'My Page' })
\`\`\`
::
```

Inline code needs language tag:
- `doSomething()`{lang="ts"}
- `<MyComponent>`{lang="html"}
- `nuxt.config.ts`{lang="bash"}

## Parameter Documentation

Always use tables for parameters, never prose.

**Good:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Generate sitemap |
| `hostname` | `string` | — | Site URL |

**Bad:**
> The enabled prop is a boolean that defaults to true and controls whether the sitemap is generated. The hostname prop is a string that...

## What to Include

- **State what NOT to do** — Real experts know pitfalls
- **Say when it's overkill** — "Skip this unless you need X"
- **Include verification** — How to test it works

```markdown
## Verify

Check `http://localhost:3000/sitemap.xml` shows your pages.
```

## What NOT to Include

- "Best practices" sections
- "✅ When to use" / "❌ When not to use" blocks
- Dedicated decision sections—the opener makes use case clear
- "Quick Setup" — just call it "Setup"
- "Related" H2 sections—use `relatedPages` frontmatter

## Opinions Welcome

State opinions directly:
- "This is lazy"
- "Overkill for most sites"
- "Don't bother unless..."
- "I'd recommend..."

## Required Frontmatter

```yaml
---
title: Page Title
relatedPages:
  - path: /docs/related-module/page
    title: Related Page Title
  - path: /learn/topic/article
    title: Related Article
---
```

2-3 related pages. Mix of docs and learn content where relevant.
