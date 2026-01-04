# Linking Audit Patterns

Internal linking validation and improvement.

## What to Check

### 1. Broken Links

- Links to non-existent paths
- Links to non-existent anchors (`#section`)
- Outdated paths (renamed/moved pages)
- External links that 404

### 2. Missing Links

Every page should link to 2-5 related pages.

**First-mention links:**
- Features mentioned without links to their docs
- Concepts explained elsewhere but not linked
- Tools referenced without linking to their pages

**Check against site-pages.md:**
- Match page titles/descriptions against content text
- If page mentions "robots.txt" and `/tools/robots-debug` exists, link it

### 3. Orphan Pages

Pages with no inbound links from other content.

### 4. Link Text Quality

| Good | Bad |
|------|-----|
| Configure [robots.txt](/docs/robots) | [Click here](/docs/robots) |
| See [OG Image docs](/docs/og-image) | See the docs [here](/docs/og-image) |
| The [Sitemap module](/docs/sitemap) | [This](/docs/sitemap) handles sitemaps |

### 5. Related Section Migration

Migrate `## Related` markdown sections to `relatedPages` frontmatter.

**Before:**
```markdown
## Related

- [Feature Guide](/learn/topic/feature)
- [API Reference](/docs/api/feature)
```

**After:**
```yaml
---
relatedPages:
  - path: /learn/topic/feature
    title: Feature Guide
  - path: /docs/api/feature
    title: API Reference
---
```

Then delete the `## Related` section.

## Linking Rules

### Inline Links (Preferred)

Add links where existing text already mentions a concept:

```markdown
# Before
When debugging robots.txt issues, check the syntax is correct.

# After
When debugging [robots.txt](/docs/robots) issues, check the syntax is correct.
```

**When to inline link:**
- First mention of a feature/module with a dedicated page
- Prerequisites ("Requires [Site Config](/docs/site-config)")
- Tools mentioned in context

### Related Pages (Frontmatter Only)

Never add `## Related` markdown sections. Use frontmatter:

```yaml
---
relatedPages:
  - path: /docs/robots
    title: Robots.txt Configuration
  - path: /tools/robots-debug
    title: Robots.txt Debugger
---
```

## Banned Patterns

- Arrow links: `→`, `->`, `>>`, `⟶`
- Link dumps at page end
- Generic lists: "Related articles:", "See also:", "More resources:"
- Linking same page twice in one section
- Linking every mention (first mention only)
- "click here", "this page", "here"
- Adding `## Related` H2 sections

## Cross-Linking Patterns

### Educational → Reference

When articles mention a feature, link to its docs:
- Feature name → `/docs/[feature]/getting-started`
- API mention → `/docs/api/[endpoint]`

### Reference → Educational

When docs explain a concept, link to the learn article:
- Concept explanation → `/learn/[topic]/[concept]`

### Feature Cross-References

Identify features commonly used together and ensure they link to each other.

## Output Format

```markdown
### Broken Links

| File | Line | Link | Issue |
|------|------|------|-------|
| `path/to/file.md` | 93 | `/path#anchor` | Anchor doesn't exist |

### Missing Links

| File | Mention | Should Link To |
|------|---------|----------------|
| `path/to/file.md` | "Booking API" | `/docs/api/bookings` |

### Related Section Migrations

| File | Links to Migrate |
|------|------------------|
| `path/to/file.md` | 3 links |

### Orphan Pages

Pages with no inbound links:
- `/path/to/orphan.md`
```
