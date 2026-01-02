# Banned Words and Phrases

Content that uses these patterns reads as AI-generated slop. Avoid them.

## Banned Words

- dive into
- crucial
- essential
- vital
- robust
- seamless
- leverage
- utilize
- ensure
- comprehensive
- harness
- empower
- elevate
- unlock
- game-changer
- navigate
- streamlined
- synergy
- best-in-class
- delve
- realm
- landscape
- tapestry
- multifaceted
- myriad
- plethora
- whilst
- firstly
- secondly
- in conclusion

## Banned Phrases

- "it's important to note"
- "in today's [X]"
- "whether you're a beginner or expert"
- "let's explore"
- "this is where X comes in"
- "at its core"
- "take X to the next level"
- "when it comes to"
- "plays a crucial role"
- "it's worth noting"
- "without further ado"
- "by the end of this guide"
- "in this article"
- "are you looking for"
- "look no further"
- "in the world of"
- "in the realm of"

## Banned Patterns

### Rhetorical Questions
```markdown
<!-- Bad -->
Ever wondered how to optimize your meta tags?

<!-- Good -->
Most Nuxt sites ship with broken meta tags.
```

### Three-Adjective Chains
```markdown
<!-- Bad -->
A powerful, flexible, and robust solution.

<!-- Good -->
Handles edge cases without config.
```

### Hedging
```markdown
<!-- Bad -->
This might potentially help improve your rankings.

<!-- Good -->
This improves rankings.
```

### Superlatives Without Proof
```markdown
<!-- Bad -->
The best SEO solution for Nuxt.

<!-- Good -->
Used by 50,000+ Nuxt sites.
```

### Filler Intros
```markdown
<!-- Bad -->
In today's digital landscape, SEO is more important than ever.
Let's dive into how Nuxt SEO can help.

<!-- Good -->
Most Nuxt sites ship with broken meta tags. Here's how to fix that.
```

## Quick Substitutions

| Slop | Fix |
|------|-----|
| It's important to note that... | [just state it] |
| This allows you to... | You can... |
| In order to... | To... |
| It is recommended that... | Do X |
| provides a way to | lets you |
| is designed to | does |
| aims to | does |
| is intended to return | returns |
| helps ensure | ensures |
| plays a key role in | affects |
| a wide range of | many |
| in a timely manner | quickly |
| at the end of the day | ultimately |
| going forward | next |
| leverage | use |
| utilize | use |
| implement | add / use |
| facilitate | help / enable |

## Before/After Examples

### Example 1: Feature Description

**Bad (AI slop):**
> In today's digital landscape, it's crucial to leverage comprehensive SEO strategies. Let's dive into how Nuxt SEO can help you unlock your site's potential and take your rankings to the next level.

**Good:**
> Most Nuxt sites ship with broken meta tags. Here's how to fix that in 2 minutes.

### Example 2: Technical Explanation

**Bad:**
> The useSeoMeta composable provides a powerful, flexible, and robust way to manage your meta tags. It's designed to ensure that your meta tags are properly configured.

**Good:**
> `useSeoMeta` sets meta tags with full TypeScript support. One line replaces 10 lines of `useHead` config.

### Example 3: Call to Action

**Bad:**
> Ready to take your SEO to the next level? Let's explore how to get started!

**Good:**
> Add the module and check `/sitemap.xml`. That's it.
