---
name: Content Writing
description: This skill should be used when the user asks to "write docs", "write documentation", "API reference", "blog post", "tutorial", "guide", "how-to article", "landing page", "homepage copy", "product page", "sales page", "pricing page", "comparison post", "X vs Y", "alternatives to", or create written content for a website. Not for research-only tasks or content audits.
version: 0.7.0
---

# Content Writing

Unified content creation skill. Detects content type and loads appropriate patterns.

## Artifacts

**Reads:**
- `.claude/context/site-config.md` - Site URL, name, industry
- `.claude/context/site-pages.md` - Available pages for internal linking
- `.claude/context/writing-style.md` - Per-category voice, structure, terminology

**Requires:** Run `site-setup` first if site-config.md is missing.

## Workflow

### 1. Detect Content Type & Load References

| Type | Triggers | Load |
|------|----------|------|
| `docs` | "write docs", "API reference" | `references/types/docs.md` |
| `educational` | "blog post", "tutorial", "guide" | `references/types/educational.md` |
| `landing` | "landing page", "marketing copy" | `references/types/landing.md` |
| `comparison` | "X vs Y", "alternatives to" | `references/types/comparison.md` |
| `sales` | "sales page", "pricing page" | `references/types/sales.md` |

**Always load:** `references/foundations.md`
**For .md files:** `../.shared/mdc-guidelines.md`

If unclear, ask user which type.

### 2. Check Context

```
Read: .claude/context/site-config.md
Read: .claude/context/site-pages.md
Read: .claude/context/writing-style.md
```

If site-config.md missing, prompt user to run `site-setup` first.

### 3. Match Category Style

| Content Type | Category in writing-style.md |
|--------------|------------------------------|
| docs | `categories.docs` |
| educational | `categories.learn` |
| landing/sales | `categories.landing` |

Apply: voice, structure, terminology, code style from category.

### 4. Write Content

**Target length by type:**

| Type | Words | Notes |
|------|-------|-------|
| docs | 300-800 | Concise, scannable |
| educational | 1000-2000 | Room for examples |
| landing | 500-1000 | Punchy, benefit-focused |
| comparison | 1500-2500 | Thorough analysis |
| sales | 800-1500 | Persuasive depth |

Apply from site-config.md:
- **audience** - Adjust jargon level
- **level** - Beginner = more explanation
- **personality** - Professional vs friendly
- **banned_phrases** - Never use these

### 5. Quality Check

- No banned words (foundations.md)
- No site-specific banned phrases (site-config.md)
- Uses preferred terminology from writing-style.md
- Code within first 3 scrolls (if technical)
- Internal links on first mentions
- relatedPages frontmatter (2-3 pages)
