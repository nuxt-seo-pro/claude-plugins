# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm test        # run tests (uses vitest)
pnpm test:update # update snapshots
```

Run single test:
```bash
pnpm test -- -t "test name pattern"
```

## Architecture

This repo contains Claude Code plugins for SEO content writing. Structure:

```
nuxtseo-content/           # main plugin
├── .claude-plugin/
│   └── plugin.json        # plugin manifest
└── skills/
    ├── site-setup/           # initialize site context
    ├── content-writing/      # unified content creation
    │   └── references/
    │       ├── foundations.md    # base writing rules
    │       └── types/            # docs, educational, landing, etc.
    ├── research/             # keyword, market, competitor research
    └── content-audit/        # review and improve content
        └── references/
            ├── linking.md        # internal linking
            ├── seo.md            # SEO validation
            ├── geo.md            # AI citation optimization
            └── conversion.md     # sales page testing

evals/                     # skill quality tests
└── skills.test.ts         # runs prompts through claude CLI, checks for banned words
```

## Skills

Each skill has:
- `SKILL.md` — frontmatter (name, description, version) + instructions
- `references/` — supporting docs (patterns, rules)
- `examples/` — sample output (optional)

Skills use artifacts pattern: read/write to `.claude/context/` for project-specific state.

**Key artifacts:**
- `site-config.md` — URL, name, industry, audience, competitors
- `site-pages.md` — Available pages from llms.txt/sitemap
- `writing-style.md` — Per-category voice, structure, terminology

## Testing

Tests shell out to `claude --plugin-dir` and validate:
- No banned AI slop words in output
- Structure matches snapshots

Timeout is 60s per test (LLM calls).

## Writing Rules

From `content-writing/references/foundations.md`:
- TypeScript only, never JavaScript
- Tables for parameters, not prose
- No banned words: dive into, crucial, robust, seamless, leverage, etc
- No hedging: "Do X" not "You may want to consider X"
- Be specific with stats, not vague claims
