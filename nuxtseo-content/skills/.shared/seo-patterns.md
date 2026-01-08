# SEO Patterns

Shared SEO patterns for writing and auditing content.

## Featured Snippet Targeting

Structure content to win position zero.

| Type | Format | Target Query |
|------|--------|--------------|
| Paragraph | 40-60 word direct answer after question heading | "what is X" |
| List | 4-8 items ordered/unordered | "how to X", "best X" |
| Table | Comparison with specific values | "X vs Y" |
| Definition | Concise definition paragraph | "what is X" |

### Paragraph Snippets

After H2/H3 questions, include 40-60 word direct answer:

```markdown
### How do you reduce no-shows?

Send automated reminders 24 hours and 1 hour before. Include a one-click
reschedule link. Studies show this reduces no-shows by 38%.
```

### List Snippets

Use 4-8 items for "how to" and "best" queries:

```markdown
## How to Improve Conversion Rate

1. Reduce form fields to essentials
2. Show real-time availability
3. Add trust signals (reviews, guarantees)
4. Enable guest checkout
```

## Keyword Placement

| Location | Priority | Approach |
|----------|----------|----------|
| H1 / Title | Highest | Primary keyword naturally |
| First 100 words | High | Primary term 1-2x |
| H2 headings | High | Variations, related terms |
| Meta description | Medium | Include term, focus on clicks |
| H3+ headings | Lower | Questions users ask |

**Don't:** Repeat exact phrase in every heading. Force terms where unnatural.

## Comparison Tables

Google loves tables for "X vs Y" queries:

```markdown
| Feature | Tool A | Tool B |
|---------|--------|--------|
| SSR | ✅ Built-in | ✅ Built-in |
| Vue Support | ✅ | ❌ |
```

Use ✅/❌ or specific values, not vague ratings.
