---
name: Content Writing
description: This skill should be used when the user asks to "write docs", "write documentation", "API reference", "blog post", "tutorial", "guide", "how-to article", "landing page", "homepage copy", "product page", "sales page", "pricing page", "comparison post", "X vs Y", "alternatives to", or create written content for a website. Not for research-only tasks or content audits. For best results, include target keyword, audience level, and reference existing files when asking.
version: 0.12.0
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

**Always load:** `references/foundations.md`, `../.shared/accessibility.md`
**For .md files:** `../.shared/mdc-guidelines.md`
**For landing/sales/comparison:** `../.shared/persuasion.md`

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
| landing | `categories.landing` |
| sales | `categories.landing` |
| comparison | `categories.learn` (analytical voice) |

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

### 5. Self-Audit Loop (TDD-Style)

Before marking content complete, validate and iterate:

```
1. Check banned words → fix any found
2. Verify all internal links exist in site-pages.md → fix broken
3. Confirm code blocks have language tags → add if missing
4. Check H2s under 60 chars → shorten if needed
5. Verify relatedPages has 2-3 valid paths → add if missing
6. Check link text accessibility → no "click here", "learn more" standalone
7. Verify frontmatter has createdAt and updatedAt (run `date +%Y-%m-%d`)
```

**Loop until all pass.** Don't deliver content with known issues.

### 6. Quality Checklist

Final verification (all must be true):

| Check | Pass Criteria |
|-------|---------------|
| Banned words | Zero matches from foundations.md list |
| Site phrases | Zero matches from site-config.md banned_phrases |
| Terminology | Uses writing-style.md preferred terms |
| Code placement | Code within first 3 scrolls (if technical) |
| Internal links | First mention of features linked |
| Related pages | relatedPages frontmatter has 2-3 valid paths |
| Dates | createdAt and updatedAt set in frontmatter |
| Accessibility | Link text is descriptive, images have alt text |
| Length | Within target word count for content type |

## Error Recovery

| Failure | Fallback |
|---------|----------|
| site-config.md missing | Prompt to run `site-setup` first |
| site-pages.md missing | Write content without internal links, note gaps with `[LINK: topic]` |
| writing-style.md missing | Use type-specific reference defaults |
| WebSearch fails for stats | Mark with `[STAT NEEDED: topic]`, continue writing |
| Internal link target not in site-pages.md | Mark with `[LINK: topic]`, verify later |

## Next Steps (Cross-Skill Handoff)

After writing content, suggest relevant follow-up:

| Situation | Suggest |
|-----------|---------|
| Content written | "Run `content-audit` to check for issues?" |
| Technical docs with flows | "Generate architecture diagram with `diagram` skill?" |
| New landing/sales page | "Research keywords with `research` skill first?" |
| Multiple pages planned | "Set up content calendar in `.claude/plans/`?" |

## Visual References

For landing pages and sales content, accept visual inputs:

### Competitor Screenshots
```
User provides: Screenshot of competitor's pricing page
Use for: Layout inspiration, feature comparison, positioning gaps
```

### Design Mockups
```
User provides: Figma export or wireframe
Use for: Match structure, extract copy requirements, identify sections
```

When visual provided, describe what you see and confirm interpretation before writing.
