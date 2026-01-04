# Component Audit Patterns

Interactive components that improve documentation comprehension. Use sparingly.

## Component Availability

Before suggesting components, check what's available in the project.

**Standard (Nuxt UI Pro):** Always available, all content types
- `::tip`, `::note`, `::warning`, `::danger` — Callout variants
- `::code-group` — Tabbed code blocks

**Custom:** Blog/tutorial pages ONLY — never use in `/docs/`
- `::key-takeaways` — Check `components/content/KeyTakeaways.vue`
- `::quick-check` — Check `components/content/QuickCheck.vue`
- `::checklist` — Check `components/content/Checklist.vue`

**IMPORTANT:** Custom interactive/summary components are for educational content (`/learn/`, `/blog/`, `/tutorials/`) only. For `/docs/` pages, use standard callouts (`::tip`, `::warning`, etc.) and `::code-group` — but not key-takeaways, quick-checks, or checklists.

### Installing Missing Components

If a custom component doesn't exist:

1. Read the template from `component-templates/{Component}.vue`
2. Adapt for the project's codebase:
   - Match existing component patterns (Composition API style, naming)
   - Use project's icon library (replace `UIcon` if needed)
   - Match CSS variable naming (`--ui-*` may differ)
   - Check if `motion-v` is available, simplify animations if not
3. Write to `components/content/{Component}.vue`
4. Test that MDC syntax works: `::component-name`

**Template locations:**
- `component-templates/KeyTakeaways.vue`
- `component-templates/QuickCheck.vue`
- `component-templates/Checklist.vue`

## Component Types

### 1. Key Takeaways

Summary box at article top. Scannable preview of main points.

**Content types:** `/learn/`, `/blog/`, `/tutorials/` only

**When to use:**
- Long educational articles (1500+ words) teaching concepts
- Tutorial-style content with multiple steps
- Articles where readers need quick reference after reading

**When to skip:**
- ALL `/docs/` pages — docs should be scannable without components
- API reference pages
- Index/hub pages
- Short articles (<1000 words)
- How-to guides (steps are the takeaways)
- Pages that are already structured as lists

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

Contextual highlights that break the flow. Use sparingly.

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

**Content types:** `/learn/`, `/blog/`, `/tutorials/` only

**When to use:**
- Articles teaching a specific concept
- After explaining a common mistake
- When there's a non-obvious answer

**When to skip:**
- ALL `/docs/` pages
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

**Content types:** `/learn/`, `/blog/`, `/tutorials/` only

**When to use:**
- Launch/setup guides (in tutorials section)
- Multi-step processes users track over time
- Pre-flight checks before deployment

**When to skip:**
- ALL `/docs/` pages — use regular lists instead
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
\`\`\`ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: { head: { title: 'My Site' } }
})
\`\`\`

\`\`\`vue [pages/index.vue]
<script setup>
useSeoMeta({ title: 'Home' })
</script>
\`\`\`
::
```

## Audit Workflow

### 1. Scan Article Structure

- Is it 1500+ words of educational content? → Consider `::key-takeaways`
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

## Anti-Patterns

### Don't

- Stack multiple callouts back-to-back
- Use `::danger` for minor issues
- Add quizzes with obvious answers
- Add key takeaways to docs or short articles
- Convert every list to a checklist

### Do

- Space components naturally through content
- Reserve danger for genuinely critical issues
- Make quizzes test understanding
- Use key takeaways only for long educational content (1500+ words)
- Use checklists only for actionable multi-step processes

## Output Format

```markdown
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
