# Nuxt SEO Pro Claude Plugins

Claude Code plugins for SEO content writing and documentation.

## Installation

```bash
/plugin marketplace add nuxt-seo-pro/claude-plugins
/plugin install nuxtseo-content
```

## Requirements

Requires [Nuxt SEO Pro MCP](https://nuxtseo.com/docs/nuxt-seo-pro/mcp/installation) — API key starts with `nsp_`.

Some skills use site-specific tools (`get_sitemap_urls`, `analyze_content_page`). Run `init_site` first:

```
Set up https://mysite.com for SEO analysis
```

## Available Skills

### site-setup
Initialize site context for all writing skills. Extracts site config, fetches pages, analyzes existing content for style patterns.

**Triggers:** "setup site", "configure site", "initialize project"

**Generates:**
- `.claude/context/site-config.md` — URL, name, industry, audience, competitors
- `.claude/context/site-pages.md` — Available pages from llms.txt/sitemap
- `.claude/context/writing-style.md` — Per-category voice, structure, terminology

### content-writing
Unified content creation. Detects content type and loads appropriate patterns.

**Triggers:** "write docs", "write article", "landing page", "comparison post", "blog post", "tutorial"

**Content Types:**
| Type | Trigger |
|------|---------|
| docs | "write docs", "API reference" |
| educational | "write article", "blog post", "tutorial" |
| landing | "landing page", "hero section" |
| comparison | "X vs Y", "alternatives to" |
| sales | "sales page", "pricing page" |

### research
Unified research for keyword discovery, market validation, and competitive analysis.

**Triggers:** "keyword research", "market research", "competitor analysis", "validate product idea"

**Research Types:**
| Type | Trigger |
|------|---------|
| content | "what to write", "content gaps", "topic ideas" |
| market | "is there demand", "validate idea", "should I build" |
| competitor | "competitor analysis", "who ranks for" |

### content-audit
Content review and improvement. Detects content type and applies appropriate audit patterns.

**Triggers:** "audit content", "fix links", "check SEO", "improve content", "test sales page"

**Audit Types:**
| Type | Trigger |
|------|---------|
| style | "check voice", "tone consistency" |
| linking | "fix links", "internal linking" |
| seo | "check SEO", "keyword optimization" |
| geo | "AI optimization", "ChatGPT visibility" |
| conversion | "test sales page", "objection handling" |

## Usage

```bash
# First time setup
"setup site"

# Research before writing
"research keywords for meta tags in nuxt"

# Validate a product idea
"research demand for a vue component library"

# Write documentation
"write docs for the sitemap module"

# Write educational content
"write an article about dynamic OG images"

# Write comparison content
"write nuxt vs next comparison"

# Write landing page copy
"write hero section for my SEO tool"

# Audit existing content
"audit /docs/getting-started for SEO"
```

## License

MIT
