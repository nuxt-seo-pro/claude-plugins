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

### content-research
Keyword research and content gap analysis before writing.

**Triggers:** "research keywords", "find content gaps", "analyze topic"

### market-research
Validate product ideas by analyzing search demand, competition, and market signals.

**Triggers:** "research product idea", "validate demand", "analyze competitors", "check domain"

### writing-foundations
Shared writing principles: voice, banned AI slop, quality tests, internal linking.

**Triggers:** "write content", "improve writing", "fix AI slop"

### docs-writing
Technical documentation patterns for `/docs/` pages.

**Triggers:** "write docs", "document feature", "create API docs"

### learn-writing
Educational/blog content with SEO optimization for `/learn/` pages.

**Triggers:** "write article", "create learn content", "blog post"

### comparison-writing
Comparison articles for "X vs Y" and alternatives content.

**Triggers:** "X vs Y", "compare tools", "alternatives to X", "switching guide"

### landing-copy
Conversion-focused copy for developer tools landing pages.

**Triggers:** "landing page copy", "hero section", "marketing copy", "CTA copy"

## Usage

```bash
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
```

## License

MIT
