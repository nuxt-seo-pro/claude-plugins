---
name: SEO Write Guard
event: PreToolUse
matchTool: Write
matchFileGlob: "content/**/*.md"
---

# SEO Content Validation

Before writing this markdown file, load and apply rules from `${CLAUDE_PLUGIN_ROOT}/skills/content-writing/references/foundations.md`.

Verify your content passes:

1. **Zero banned words or phrases** from the Banned section
2. **No banned patterns** - rhetorical questions, three-adjective chains, filler intros, superlatives without proof, em dashes
3. **No banned endings** - "Now you're ready to...", "Happy coding!", "In conclusion..."
4. **TypeScript only** - never JavaScript in code blocks
5. **All code blocks have language tags**
6. **Accessible link text** - no "click here", "learn more", "here" standalone

Apply quick fixes from foundations.md for any slop found. Fix all violations before writing.
