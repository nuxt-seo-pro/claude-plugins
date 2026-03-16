# Nuxt SEO Pro Claude Plugins

Claude Code plugins for SEO content writing and documentation.

## Installation

```bash
/plugin marketplace add nuxt-seo-pro/claude-plugins
/plugin install nuxtseo-content
```

## Requirements

Requires [Nuxt SEO Pro MCP](https://nuxtseo.com/docs/nuxt-seo-pro/mcp/installation) — API key starts with `nsp_`.

Some skills use site-specific tools (`get_sitemap_urls`, `analyze_page`).

## Available Skills

### site-setup
Initialize site context for all writing skills. Extracts site config, fetches pages, analyzes existing content for style patterns.

```
/nuxtseo-content:site-setup
/nuxtseo-content:site-setup https://mysite.com
```

**Generates:**
- `.claude/context/site-config.md` — URL, name, industry, audience, competitors
- `.claude/context/site-pages.md` — Available pages from llms.txt/sitemap
- `.claude/context/writing-style.md` — Per-category voice, structure, terminology

### content-writing
Unified content creation. Detects content type from arguments and loads appropriate patterns.

```
/nuxtseo-content:content-writing docs for the sitemap module
/nuxtseo-content:content-writing blog post about dynamic OG images
/nuxtseo-content:content-writing landing page for my SEO tool
/nuxtseo-content:content-writing nuxt vs next comparison
/nuxtseo-content:content-writing pricing page for pro tier
```

| Type | Triggers |
|------|----------|
| docs | "docs", "API reference", "composable" |
| educational | "blog", "tutorial", "guide", "article" |
| landing | "landing page", "homepage", "marketing" |
| comparison | "vs", "alternatives to" |
| sales | "sales page", "pricing page" |

### research
Keyword discovery, market validation, and competitive analysis. Runs in isolated context (`context: fork`) to keep large MCP results out of main conversation.

```
/nuxtseo-content:research keywords for meta tags in nuxt
/nuxtseo-content:research demand for a vue component library
/nuxtseo-content:research competitors of nuxtseo.com
```

| Type | Triggers |
|------|----------|
| content | "keywords", "what to write", "content gaps" |
| market | "demand", "validate idea", "should I build" |
| competitor | "competitors", "who ranks for" |

### content-audit
Content review and improvement with 8 audit types.

```
/nuxtseo-content:content-audit style content/docs/auth.md
/nuxtseo-content:content-audit seo content/learn/meta-tags.md
/nuxtseo-content:content-audit content/docs/getting-started.md
```

| Type | Triggers |
|------|----------|
| style | "check voice", "tone", "terminology" |
| accessibility | "a11y", "alt text", "link text" |
| linking | "fix links", "broken links" |
| seo | "check SEO", "meta tags" |
| geo | "AI optimization", "GEO" |
| conversion | "test sales page", "objections" |

### diagram (auto-invoked)
Visual explanations for technical content. Not in the `/` menu — Claude invokes it when content benefits from a diagram.

Supports Mermaid (inline markdown) and D2 (styled SVGs with design tokens).

## Hooks

### SEO Write Guard (PreToolUse/Write)
Deterministic regex-based validation. Blocks writes to `content/**/*.md` if content contains:
- Banned words/phrases from foundations.md
- Em dashes, JavaScript code blocks, missing language tags
- Inaccessible link text ("click here", "learn more")
- Banned endings ("Happy coding!", "In conclusion...")

Instant — no LLM call, just regex matching.

### Site Config Check (SessionStart)
Checks for `content/` directory and `.claude/context/site-config.md`. Reports status on session start.

## License

MIT
