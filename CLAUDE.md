# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm test:guard  # deterministic write-guard tests (~300ms)
pnpm test:evals  # LLM evals via claude CLI (~6min)
pnpm test        # all tests (vitest watch mode)
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
│   └── plugin.json        # plugin manifest (only plugin.json here)
├── hooks/                 # command hooks (deterministic, no LLM)
│   ├── hooks.json         # hook definitions
│   ├── write-guard.mjs    # PreToolUse/Write - banned words regex
│   └── site-config-check.mjs  # SessionStart - file existence check
└── skills/
    ├── .shared/              # shared references across skills
    ├── site-setup/           # initialize site context
    ├── content-writing/      # unified content creation ($ARGUMENTS)
    │   └── references/
    │       ├── foundations.md    # base writing rules + banned words
    │       └── types/            # docs, educational, landing, etc.
    ├── research/             # keyword/market/competitor (context: fork)
    ├── content-audit/        # review and improve content ($ARGUMENTS)
    │   └── references/
    │       ├── linking.md, seo.md, geo.md, conversion.md, etc.
    └── diagram/              # visual explanations (user-invocable: false)

evals/                     # tests
├── write-guard.test.ts    # deterministic hook tests (fast, no LLM)
└── skills.test.ts         # LLM evals (haiku, 60s timeout)
```

## Key Design Decisions

- **Hooks are command type, not prompt** — write-guard.mjs runs regex checks instantly (no LLM call per write)
- **Research uses `context: fork`** — runs in subagent to isolate MCP results from main context
- **Skills use `$ARGUMENTS`** — parameterized invocation (`/write blog post about X`)
- **Diagram is `user-invocable: false`** — Claude invokes when needed, not in user menu
- **Only plugin.json inside .claude-plugin/** — hooks, skills, agents at plugin root

## Skills

Each skill has:
- `SKILL.md` — frontmatter (name, description, version, context, argument-hint) + instructions
- `references/` — supporting docs (patterns, rules)
- Uses `${CLAUDE_SKILL_DIR}` for portable reference file paths

Skills use artifacts pattern: read/write to `.claude/context/` for project-specific state.

## Testing

Two test types:
- `write-guard.test.ts` — deterministic regex tests, ~300ms, 13 tests
- `skills.test.ts` — LLM evals via `claude --plugin-dir`, 60s timeout, inherently non-deterministic

## Writing Rules

From `content-writing/references/foundations.md`:
- TypeScript only, never JavaScript
- Tables for parameters, not prose
- No banned words: dive into, crucial, robust, seamless, leverage, etc
- No hedging: "Do X" not "You may want to consider X"
- Be specific with stats, not vague claims
