# Source Priority Reference

When verifying claims or finding authoritative sources, follow this hierarchy.

## Priority Levels

### 1. Official Documentation (Highest)
- Google Search Central
- MDN Web Docs
- Framework docs (nuxt.com, vuejs.org)
- W3C specifications

### 2. Primary Research
- Google studies and reports
- Industry research (State of JS, Stack Overflow surveys)
- Academic papers
- Official announcements

### 3. Notable Ecosystem Voices
Core team members and recognized contributors carry authority.

**Vue/Nuxt ecosystem:**
- Anthony Fu (@antfu7) — Nuxt/Vue core, VueUse
- Daniel Roe (@danielroe) — Nuxt lead
- Eduardo San Martin (@posva) — Vue Router, Pinia
- Sébastien Chopin (@atinux) — Nuxt creator
- Evan You — Vue creator

**SEO ecosystem:**
- John Mueller — Google Search Relations
- Gary Illyes — Google Search
- Martin Splitt — Google Developer Relations

Prioritize authors who contribute code, not just content.

### 4. Authoritative Blogs
- web.dev
- developers.google.com
- Chrome Developers blog
- V8 blog

### 5. Reputable Tech Sites
- Moz (SEO)
- Ahrefs (SEO)
- Smashing Magazine
- CSS-Tricks

### 6. Community Consensus
- Stack Overflow (high-voted answers only)
- GitHub discussions (from maintainers)
- Reddit (verified experts)

## Sources to Avoid

**Never cite:**
- Generic tutorial sites (tutorialspoint, w3schools, geeksforgeeks)
- Medium posts without known authors
- Content farms
- AI-generated summaries
- Outdated articles (>2 years for SEO/web topics)

**Be cautious with:**
- Blog posts without author credentials
- Sites with heavy ad presence
- Content that doesn't cite its own sources

## Verification Patterns

### Statistics
- Find primary source, not articles citing it
- Include year/date of study
- Note sample size if relevant
- Mark outdated stats with `[STAT: year]`

### Technical Facts
- Verify against official documentation
- Check if behavior changed in recent versions
- Note version-specific behavior

### Best Practices
- Distinguish "Google says" vs "SEO community consensus"
- Link to official guidance when available
- Note when practices are debated

## Search Query Patterns

| Topic | Query Pattern |
|-------|---------------|
| Current best practice | `"[topic] best practices 2025 site:web.dev OR site:developers.google.com"` |
| Official stance | `"[topic] site:developers.google.com OR site:support.google.com"` |
| Statistics | `"[topic] statistics study research"` |
| Nuxt-specific | `"[topic] site:nuxt.com OR site:github.com/nuxt"` |
| Vue-specific | `"[topic] site:vuejs.org"` |

## Citation Formats

### Inline Citations
For stats and specific claims:
```markdown
Google rewrites 70% of meta descriptions ([Portent study](https://www.portent.com/blog/seo/...)).
```

### Reference Links
For general background:
```markdown
See [Google's documentation on meta descriptions][meta-docs] for official guidance.

[meta-docs]: https://developers.google.com/search/docs/appearance/snippet
```
