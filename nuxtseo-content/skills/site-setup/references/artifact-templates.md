# Artifact Templates

Write to `.claude/context/`.

## site-config.md

```yaml
url: https://example.com
name: Site Name
industry: saas # saas, ecommerce, agency, content, education
audience: developers # developers, technical, business, general
level: intermediate # beginner, intermediate, advanced, mixed
personality: professional # professional, friendly, authoritative, playful
primary_cta: start-free-trial # signup, trial, demo, learn-more
content_goal: educate # educate, convert, authority

# Optional
competitors: [competitor1.com, competitor2.com]
differentiator: Only solution that does X
banned_phrases: [industry-leading, best-in-class]
style_guide: docs/CONTRIBUTING.md

# Components (detected from components/content/)
components:
  standard: [tip, note, warning, danger, code-group]
  custom: [key-takeaways, quick-check, checklist] # /learn/, /blog/ only
```

## site-pages.md

```markdown
# Available Pages
Source: llms.txt | sitemap.xml | project scan
Fetched: YYYY-MM-DD
Total: N pages

## Pages
| Path | Title |
|------|-------|
| /docs/getting-started | Getting started |
```

For 100+ pages, group by pattern: `/docs/modules/{module}/** (124 pages)`

## writing-style.md

```yaml
# Writing Style Guide
Generated: YYYY-MM-DD
Source: Analyzed X pages | defaults

categories:
  docs:
    patterns: ['/docs/**', '/api/**']
    voice: {formality: technical, tone: direct}
  learn:
    patterns: ['/learn/**', '/tutorials/**']
    voice: {formality: conversational, tone: educational}
  landing:
    patterns: [/, /features, /pricing]
    voice: {formality: casual, tone: benefit-focused}
```
