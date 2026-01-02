# Quality Tests

Apply these tests to every piece of content before publishing.

## 1. "So What?" Test

After every sentence, the reader shouldn't think "so what?"

**How to apply:**
1. Read each sentence
2. Ask "so what?" or "why does this matter?"
3. If the answer isn't obvious, either:
   - Add the implication
   - Cut the sentence

**Example:**
```markdown
<!-- Fails "so what?" -->
Meta descriptions are HTML attributes.

<!-- Passes -->
Meta descriptions appear in search results and affect click-through rates.
```

## 2. Read Aloud Test

If it sounds like a press release or marketing copy, rewrite.

**Signs of failure:**
- Sounds formal or stiff
- Uses jargon unnecessarily
- Feels like it's selling rather than explaining
- You wouldn't say it to a colleague

**How to fix:**
Read the content aloud. If you cringe, rewrite in the voice you'd use explaining to a coworker.

## 3. Delete Test

If you can remove a sentence without losing meaning, remove it.

**How to apply:**
1. Delete a sentence
2. Read the surrounding content
3. If meaning is intact, keep it deleted
4. If meaning is lost, restore it

**Common deletable content:**
- Transition sentences ("Now let's look at...")
- Obvious statements ("SEO is important for websites")
- Redundant explanations
- Filler before getting to the point

## 4. Information Density Test

Every sentence should add new information. No filler.

**How to apply:**
1. List what each sentence teaches
2. If a sentence teaches nothing new, cut it
3. If two sentences teach the same thing, merge or cut one

**Example:**
```markdown
<!-- Low density (3 sentences, 1 fact) -->
Meta descriptions are important. They appear in search results.
Users see them when they search.

<!-- High density (1 sentence, 2 facts) -->
Meta descriptions appear in search results and affect click-through rates.
```

## 5. First Scroll Test

Can the reader understand what this page does within the first scroll?

**Requirements:**
- Clear title stating what it does
- 1-2 sentence opener explaining use case
- Code example for the 80% use case

**Bad:**
```markdown
# Meta Tags in Nuxt

Meta tags have been around since the early days of the web.
They provide information about a page to search engines and social
media platforms. In this guide, we'll explore...
```

**Good:**
```markdown
# Meta Tags in Nuxt

Set meta tags with `useSeoMeta()`. One composable, full TypeScript support.

\`\`\`ts
useSeoMeta({
  title: 'My Page',
  description: 'Page description'
})
\`\`\`
```

## 6. Code Within 3 Scrolls

Technical content must show code within 3 scrolls (roughly 600 words).

**How to measure:**
- Count paragraphs before first code block
- If more than 3-4 substantial paragraphs, restructure
- Lead with the 80% use case code

## 7. Specificity Test

Replace vague claims with specific numbers or examples.

**Vague → Specific:**
| Vague | Specific |
|-------|----------|
| Most sites | 73% of sites |
| Can improve | Improves by 40% |
| Search engines may | Google rewrites 70% |
| Many developers | Used by 50k+ sites |
| Faster | 200ms faster |

## 8. Action Test

Can the reader take action after reading each section?

**Every section should:**
- Explain what to do
- Show how to do it (code)
- Explain how to verify it worked

**Example structure:**
```markdown
## Add a Sitemap

Add the sitemap module:

\`\`\`bash
npx nuxi module add @nuxtjs/sitemap
\`\`\`

Check `http://localhost:3000/sitemap.xml` to verify.
```

## Pre-Publish Checklist

Run through this before any content goes live:

**Structure:**
- [ ] Title is action-oriented ("Create a sitemap" not "Understanding sitemaps")
- [ ] Opener makes use case obvious in 1-2 sentences
- [ ] Code within first 3 scrolls
- [ ] Parameters in tables, not prose

**Quality:**
- [ ] Passes "so what?" test
- [ ] Passes read aloud test
- [ ] No deletable sentences
- [ ] Every sentence adds information
- [ ] Specific numbers over vague claims

**Links:**
- [ ] `relatedPages` frontmatter with 2-3 pages
- [ ] Inline links on first mention of features
- [ ] No "click here" link text

**Content:**
- [ ] States what NOT to do / when it's overkill
- [ ] Includes verification method
- [ ] No banned words or phrases
- [ ] No filler intro before the point
