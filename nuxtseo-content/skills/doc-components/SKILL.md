---
name: Documentation Components
description: Use for "add callouts", "improve docs readability", "where to add warnings", "add key takeaways", "doc component audit", "interactive docs", or improving documentation with components.
version: 0.1.0
---

# Documentation Components

Interactive components that improve documentation comprehension. Use sparingly—only when they genuinely help readers.

## Artifacts

**Reads:**
- Documentation files to audit
- `.claude/context/doc-components.md` — Project-specific component syntax

**Generates:**
- Component insertion recommendations with line numbers

## When to Use

- After writing documentation
- When auditing existing docs for improvements
- When docs feel like walls of text
- When critical information gets buried

## Component Types

### 1. Key Takeaways

Summary box at article top. Scannable preview of main points.

**When to use:**
- Every substantive article (not index/intro pages)
- Articles with 3+ key concepts
- Technical guides with actionable advice

**When to skip:**
- Index/hub pages
- Very short articles (<500 words)
- API reference pages

**Example:**
```md
::key-takeaways
- Keep titles under 60 characters to avoid truncation
- Use title templates for site-wide consistency
- Each page needs a unique, descriptive title
::
```

**Writing tips:**
- 3-5 bullet points max
- Actionable statements, not vague summaries
- Lead with most important point
- Use specific numbers when available

### 2. Callouts

Contextual highlights that break the flow. Use sparingly—if everything is highlighted, nothing is.

| Type | Use For |
|------|---------|
| `::tip` | Helpful suggestions, best practices, shortcuts |
| `::note` | Additional context, clarifications, tangential info |
| `::warning` | Gotchas, common mistakes, things to watch for |
| `::danger` | Critical issues that could cause real problems |

**Frequency guide:**
- Max 2-3 callouts per article
- Never stack callouts back-to-back
- Danger should be rare (1 per 10 articles)

**Example:**
```md
::warning
OG images require absolute URLs. Relative paths will break on social platforms.
::
```

### 3. Quick Checks

Interactive quiz at article end. Reinforces key concept through active recall.

**When to use:**
- Articles teaching a specific concept
- After explaining a common mistake
- When there's a non-obvious answer

**When to skip:**
- Reference/API docs
- Very short articles
- When answer is too obvious

**Example:**
```md
::quick-check{question="What happens when your title exceeds 60 characters?"}
- `It gets rejected` — Google accepts any length, just truncates display
- `Google truncates it with ...` — Correct! Truncation affects click-through rates
- `Nothing changes` — Titles over 60 chars are cut off in search results
::
```

**Writing tips:**
- One quiz per article max
- Include wrong answers that seem plausible
- Explain why each answer is right/wrong
- Test understanding, not memory

### 4. Checklists

Persistent todo with localStorage. Progress saved across sessions.

**When to use:**
- Launch/setup guides
- Multi-step processes
- Pre-flight checks

**When to skip:**
- Regular articles
- Single-step instructions
- Conceptual content

**Example:**
```md
::checklist{id="launch-seo" title="SEO Launch Checklist"}
- Verify Search Console access
- Submit sitemap
- Test robots.txt
- Check canonical URLs
- Validate structured data
::
```

### 5. Code Groups

Tabbed code examples for multiple contexts.

**When to use:**
- Showing same concept in different frameworks
- Multiple file examples
- Alternative implementations

**Example:**
```md
::code-group
```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: { head: { title: 'My Site' } }
})
```

```vue [pages/index.vue]
<script setup>
useSeoMeta({ title: 'Home' })
</script>
```
::
```

## Audit Workflow

### 1. Scan Article Structure

- Does it have a clear intro? → Consider `::key-takeaways`
- Are there buried warnings? → Extract to `::warning`
- Is there a non-obvious gotcha? → Add `::danger`
- Could a quiz reinforce learning? → Add `::quick-check`

### 2. Identify Component Opportunities

| Signal | Component |
|--------|-----------|
| "Important:", "Note that", "Remember" | `::note` or `::warning` |
| "Never do X", "Avoid", "Don't" | `::warning` or `::danger` |
| "Tip:", "Pro tip", "Best practice" | `::tip` |
| Lists of requirements | `::checklist` |
| Multiple code examples | `::code-group` |

### 3. Check Component Density

After adding components, verify:
- Not more than 3 callouts per article
- Components are spread out, not clustered
- Flow still reads naturally
- Critical info isn't lost in component overload

## Output Format

```markdown
## Component Audit: [filename]

### Add Key Takeaways
**Location:** Line 10 (after frontmatter)
**Content:**
- [takeaway 1]
- [takeaway 2]
- [takeaway 3]

### Add Warning
**Location:** Line ~85 (after the section about X)
**Content:** "[warning text about common gotcha]"

### Add Quick Check
**Location:** End of article
**Question:** "[question]"
**Options:**
- `[wrong answer]` — [explanation]
- `[correct answer]` — Correct! [why]
- `[wrong answer]` — [explanation]
```

## Anti-Patterns

### Don't

- Stack multiple callouts back-to-back
- Use `::danger` for minor issues
- Add quizzes with obvious answers
- Put key takeaways on index pages
- Convert every list to a checklist

### Do

- Space components naturally through content
- Reserve danger for genuinely critical issues
- Make quizzes test understanding
- Use key takeaways on substantive articles
- Use checklists only for actionable multi-step processes

## References

- `references/component-syntax.md` — Project-specific component syntax
