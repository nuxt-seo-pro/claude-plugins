---
name: Site Config Check
event: SessionStart
---

# Nuxt SEO Content Plugin

First, check if `content/` directory exists (Nuxt Content project indicator).

If NO `content/` folder, skip - this plugin is not relevant.

If `content/` exists, check for `.claude/context/site-config.md`:

**Missing site-config.md:**
```
SEO Content Plugin: Nuxt Content project detected but no site-config.md. If writing content, audit SEO, or keyword research requested, suggest `site-setup` skill first.
```

**Has site-config.md:**
```
SEO Content Plugin: Site configured. Context in .claude/context/site-config.md
```
