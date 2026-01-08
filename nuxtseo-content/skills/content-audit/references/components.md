# Component Audit Patterns

Interactive components for documentation. Use sparingly.

## Component Availability

Before suggesting, check what exists:

**Standard (always available):**
- `::tip`, `::note`, `::warning`, `::danger` - callout variants
- `::code-group` - tabbed code blocks

**Custom (check `components/content/`):**
- `::key-takeaways` - summary box
- `::quick-check` - quiz
- `::checklist` - persistent todo

If missing, install from `../../.shared/component-templates/`.

## Content Type Rules

| Component | `/docs/` | `/learn/`, `/blog/` |
|-----------|----------|---------------------|
| Callouts | Yes | Yes |
| Code groups | Yes | Yes |
| Key takeaways | Never | 1500+ word articles |
| Quick check | Never | Teaching concepts |
| Checklist | Never | Multi-step processes |

**CRITICAL:** Custom interactive components (key-takeaways, quick-check, checklist) are for educational content only. Never use in `/docs/`.

## Component Types

### Callouts

| Type | Use For |
|------|---------|
| `::tip` | Best practices, shortcuts |
| `::note` | Clarifications, tangential info |
| `::warning` | Gotchas, common mistakes |
| `::danger` | Critical issues (rare) |

**Limits:** Max 3 per page. Never stack back-to-back. `::danger` rare (1 per 10 pages).

### Key Takeaways

Summary box at article top. 3-5 actionable bullets.

**Use:** Long educational articles (1500+ words)
**Skip:** Docs, API reference, short articles, how-to guides

### Quick Checks

Single quiz at article end.

**Use:** After teaching concepts, when answer isn't obvious
**Skip:** Docs, reference, obvious answers

### Checklists

Persistent todo with localStorage.

**Use:** Launch guides, multi-step deployment processes
**Skip:** Docs, conceptual content, single-step instructions

## Anti-Patterns

- Stack multiple callouts back-to-back
- Use `::danger` for minor issues
- Add quizzes with obvious answers
- Add key takeaways to docs or short articles
- Convert every list to a checklist
