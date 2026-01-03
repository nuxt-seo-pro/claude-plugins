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
    ├── writing-foundations/  # base writing rules (loaded with other skills)
    ├── docs-writing/         # /docs/ reference documentation
    ├── learn-writing/        # /learn/ educational articles
    ├── content-research/     # keyword research
    ├── market-research/      # competitor analysis
    ├── comparison-writing/   # vs pages
    └── landing-copy/         # landing pages

evals/                     # skill quality tests
└── skills.test.ts         # runs prompts through claude CLI, checks for banned words
```

## Skills

Each skill has:
- `SKILL.md` — frontmatter (name, description, version) + instructions
- `references/` — supporting docs (banned words, quality tests)
- `examples/` — sample output

Skills use artifacts pattern: read from `.claude/context/` for project-specific overrides.

## Testing

Tests shell out to `claude --plugin-dir` and validate:
- No banned AI slop words in output
- Structure matches snapshots

Timeout is 60s per test (LLM calls).

## Writing Rules

From `writing-foundations`:
- TypeScript only, never JavaScript
- Tables for parameters, not prose
- No banned words: dive into, crucial, robust, seamless, leverage, etc
- No hedging: "Do X" not "You may want to consider X"
- Be specific with stats, not vague claims
