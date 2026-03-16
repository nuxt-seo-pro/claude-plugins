#!/usr/bin/env node

/**
 * Site Config Check - SessionStart command hook
 *
 * Checks if this is a Nuxt Content project and whether site-config.md exists.
 * Instant file-existence check, no LLM needed.
 */

import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const cwd = process.cwd()

// Not a Nuxt Content project - skip silently
if (!existsSync(resolve(cwd, 'content'))) {
  process.exit(0)
}

if (existsSync(resolve(cwd, '.claude/context/site-config.md'))) {
  process.stdout.write('SEO Content Plugin: Site configured (.claude/context/site-config.md)\n')
}
else {
  process.stdout.write('SEO Content Plugin: Nuxt Content project detected, no site-config.md. Run /nuxtseo-content:site-setup first if writing content.\n')
}

process.exit(0)
