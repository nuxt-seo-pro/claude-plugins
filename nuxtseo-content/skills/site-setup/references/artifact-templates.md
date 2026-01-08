# Artifact Templates

Templates for generated context files.

## site-config.md

```yaml
url: https://example.com
name: Site Name
tagline: One-line description
industry: saas

# Audience
audience: developers
level: intermediate

# Brand
personality: professional
primary_cta: start-free-trial
content_goal: educate

# Optional
competitors:
  - competitor1.com
  - competitor2.com
differentiator: Only solution that does X
banned_phrases:
  - industry-leading
  - best-in-class

# Reference
style_guide: docs/CONTRIBUTING.md # if found

# Available components
components:
  standard: # always available with Nuxt UI Pro
    - tip
    - note
    - warning
    - danger
    - code-group
  custom: # for /learn/, /blog/, /tutorials/ only
    - key-takeaways
    - quick-check
    - checklist
```

## site-pages.md

**Under 100 pages:** List all individually.

```markdown
# Available Pages

Source: llms.txt | sitemap.xml | project scan
Fetched: YYYY-MM-DD
Total: 45 pages

## Pages

| Path | Title/Description |
|------|-------------------|
| /docs/getting-started | Getting started guide |
| /docs/api/overview | API reference |
```

**100+ pages:** Group by URL pattern.

```markdown
# Available Pages

Source: llms.txt
Fetched: YYYY-MM-DD
Total: 247 pages (38 listed, 209 grouped)

## Unique Pages

| Path | Title/Description |
|------|-------------------|
| / | Homepage |
| /pricing | Pricing page |

## Grouped by Pattern

### /docs/modules/{module}/**
124 pages. Examples:
- /docs/modules/sitemap/getting-started
- /docs/modules/sitemap/api/config
- /docs/modules/robots/getting-started

### /learn/{topic}/**
85 pages. Examples:
- /learn/seo/meta-tags
- /learn/performance/core-web-vitals
```

## writing-style.md

**With analysis:**

```yaml
# Writing Style Guide

Generated: YYYY-MM-DD
Source: Analyzed X pages across Y categories

categories:
  docs:
    patterns:
      - /docs/**
      - /api/**
    voice:
      formality: technical
      perspective: second-person
      tone: direct
    structure:
      intro: problem-solution
      sections: task-oriented
      depth: 2-3 levels
      conclusion: none
    code:
      language: typescript
      show_imports: true
      snippet_length: short
    terminology:
      prefer: [composable, module, config]
      avoid: [plugin, package]

  learn:
    patterns:
      - /learn/**
    voice:
      formality: conversational
      perspective: second-person
      tone: educational
    structure:
      intro: context-first
      sections: concept-to-practice
      conclusion: summary
    code:
      language: typescript
      snippet_length: medium

  landing:
    patterns:
      - /
      - /features
      - /pricing
    voice:
      formality: casual
      tone: benefit-focused
    structure:
      intro: hook
      sections: benefit-blocks
      conclusion: cta
    code:
      snippet_length: minimal
```

**Without analysis (defaults):**

```yaml
# Writing Style Guide

Generated: YYYY-MM-DD
Source: defaults (analysis skipped)

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
