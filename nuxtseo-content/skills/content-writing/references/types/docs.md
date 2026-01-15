# Documentation Patterns

Technical reference documentation. Model after Stripe, Anthropic, and Claude Code docs.

## Core Principles

- Task-oriented titles: "Add Authentication" not "Understanding Authentication"
- Code within first 3 scrolls
- Tables for parameters, not prose
- State limitations clearly
- Assume reader intelligence - skip obvious setup
- Say what NOT to do and when it's overkill

## Page Structure

```markdown
---
title: [Action-oriented title]
description: [What it does in one line]
relatedPages:
  - path: /docs/related-module
    title: Related Feature
---

[1-2 sentence opener: what it does + primary use case]

[Code for the 80% case]

## Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|

## [Topic Sections]

[Deeper content, edge cases]
```

## Title Patterns

| Good | Bad |
|------|-----|
| Add Authentication | Understanding Authentication |
| Configure Database | Working with Databases |
| Debug API Routes | Troubleshooting API Issues |

## Opening Sentences

Open with facts, not introductions.

**Bad:** "Authentication is an important part of web security. In this guide..."
**Good:** "Authentication handles login, sessions, and protected routes. Add it with one module."

## Documentation Types

### Composable Docs

```markdown
Manages authentication state and session handling.

\`\`\`ts
const { user, loggedIn, login, logout } = useAuth()
\`\`\`

## Parameters

| Param | Type | Description |
```

### Config Docs

```markdown
Configure database connection in `nuxt.config.ts`.

\`\`\`ts
export default defineNuxtConfig({
  database: { /* options */ }
})
\`\`\`

## Options

| Option | Type | Default | Description |
```

## What to Include

- **Verification:** How to test it works
- **Limitations:** State inline where relevant
- **When to skip:** Tell readers when something is overkill

## What NOT to Include

- "Best practices" sections
- "When to use" / "When not to use" blocks
- Dedicated "Decision" sections
- "Quick Setup" - just call it "Setup"
- "Related" H2 sections - use frontmatter
- Filler introductions

## When to Suggest Diagrams

After writing docs, suggest `diagram` skill for:

| Content | Diagram Type |
|---------|--------------|
| Authentication flows | Sequence diagram |
| Data pipelines | Flowchart |
| Component hierarchy | Tree diagram |
| State machines | State diagram |
| API request/response | Sequence diagram |
| Build/deploy process | Flowchart |

### Trigger Phrases in Content

If docs mention these, suggest diagram:

- "the flow is..." / "data flows from..."
- "first X, then Y, then Z"
- "components communicate via..."
- "the lifecycle is..."
- Multiple numbered steps (5+)

### Inline Suggestion

```md
This doc explains [complex flow]. Generate architecture diagram with `diagram` skill?
```

Don't auto-generate - ask first. Diagrams add maintenance burden.
