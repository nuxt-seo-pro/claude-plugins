# Linking Audit Patterns

## What to Check

### Broken Links
- Links to non-existent paths or anchors
- Outdated paths (renamed/moved pages)

### Frontmatter Validation

Check `relatedPages` paths against site-pages.md:

```yaml
relatedPages:
  - path: /docs/guide/non-existent-page # Flag if not in site-pages.md
    title: Some Guide
```

### Missing Links

Every page should link to 2-5 related pages. Check:
- Features mentioned without links to their docs
- Concepts explained elsewhere but not linked

Match site-pages.md titles/descriptions against content text.

### Related Section Migration

Migrate `## Related` markdown sections to `relatedPages` frontmatter, then delete the section.

## Rules

### Inline Links (Preferred)

Link where text already mentions a concept:

```markdown
When debugging [authentication](/docs/auth) issues, check the session.
```

Link first mention of features with dedicated pages.

### Frontmatter Only for Related

Never add `## Related` markdown sections. Use frontmatter:

```yaml
relatedPages:
  - path: /docs/auth
    title: Authentication Guide
```

## Banned Patterns

- Arrow links: `→`, `->`, `>>`, `⟶`
- Link dumps at page end
- Generic lists: "Related articles:", "See also:"
- Linking same page twice in one section
- Linking every mention (first only)
- "click here", "this page", "here"
- Adding `## Related` H2 sections
