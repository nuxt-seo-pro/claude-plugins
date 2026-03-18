#!/usr/bin/env node

/**
 * SEO Write Guard - PreToolUse command hook
 *
 * Validates markdown content against banned words, phrases, and patterns
 * from foundations.md before allowing Write operations.
 *
 * Exit 0 = allow, Exit 2 = block with violations message
 */

import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const pluginRoot = process.env.CLAUDE_PLUGIN_ROOT
if (!pluginRoot) {
  // Not running inside Claude Code plugin context — allow write
  process.exit(0)
}

// Read hook input from stdin
let input = ''
for await (const chunk of process.stdin) {
  input += chunk
}

const data = JSON.parse(input)
const toolInput = data.tool_input || {}
const filePath = toolInput.file_path || ''
const content = toolInput.content || ''

// Only check markdown files in content/
if (!filePath.includes('content/') || !filePath.endsWith('.md')) {
  process.exit(0)
}

// Load banned words from foundations.md (single source of truth)
const foundationsPath = join(pluginRoot, 'skills/content-writing/references/foundations.md')
const foundations = readFileSync(foundationsPath, 'utf-8')

const bannedWordsMatch = foundations.match(/\*\*Words:\*\*\s*(.+)/)
const bannedWords = bannedWordsMatch
  ? bannedWordsMatch[1].split(', ').map(w => w.trim().toLowerCase())
  : []

const bannedPhrasesMatch = foundations.match(/\*\*Phrases:\*\*\s*(.+)/)
const bannedPhrases = bannedPhrasesMatch
  ? bannedPhrasesMatch[1].match(/"([^"]+)"/g)?.map(p => p.slice(1, -1).toLowerCase()) ?? []
  : []

const violations = []

// Strip frontmatter and code blocks before checking prose
const proseContent = content
  .replace(/^---[\s\S]*?---/m, '') // frontmatter
  .replace(/```[\s\S]*?```/g, '') // code blocks
  .replace(/`[^`]+`/g, '') // inline code

const proseLower = proseContent.toLowerCase()

// Banned words (word boundary match on prose only)
for (const word of bannedWords) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  if (new RegExp(`\\b${escaped}\\b`, 'i').test(proseContent)) {
    violations.push(`Banned word: "${word}"`)
  }
}

// Banned phrases (prose only, convert [X] placeholders to wildcards)
for (const phrase of bannedPhrases) {
  if (phrase.includes('[')) {
    // Split on [X] placeholder, escape each part, rejoin with .+
    const parts = phrase.split(/\[.*?\]/)
    const pattern = parts.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.+')
    if (new RegExp(pattern, 'i').test(proseContent)) {
      violations.push(`Banned phrase: "${phrase}"`)
    }
  }
  else if (proseLower.includes(phrase)) {
    violations.push(`Banned phrase: "${phrase}"`)
  }
}

// Em dashes in prose (use hyphens instead)
if (proseContent.includes('\u2014')) {
  violations.push('Em dash found \u2014 use hyphens instead')
}

// Banned endings (check last 5 lines of prose)
const proseLines = proseContent.trim().split('\n').filter(l => l.trim())
const lastLines = proseLines.slice(-5).join(' ').toLowerCase()
const bannedEndings = ['now you\'re ready to', 'happy coding', 'in conclusion']
for (const ending of bannedEndings) {
  if (lastLines.includes(ending)) {
    violations.push(`Banned ending: "${ending}"`)
  }
}

// JavaScript code blocks (should be TypeScript)
const jsBlocks = content.match(/```(js|javascript)\b/g)
if (jsBlocks) {
  violations.push(`JavaScript code block (use TypeScript): ${jsBlocks.join(', ')}`)
}

// Code blocks missing language tag
const untaggedBlocks = content.match(/```\s*\n/g)
if (untaggedBlocks) {
  violations.push(`${untaggedBlocks.length} code block(s) missing language tag`)
}

// Inaccessible link text
const badLinkTexts = new Set(['click here', 'here', 'learn more', 'read more', 'link', 'this'])
const linkMatches = content.matchAll(/\[([^\]]+)\]\([^)]+\)/g)
for (const match of linkMatches) {
  const text = match[1].toLowerCase().trim()
  if (badLinkTexts.has(text)) {
    violations.push(`Inaccessible link text: "[${match[1]}]"`)
  }
}

if (violations.length > 0) {
  process.stdout.write(`SEO Write Guard blocked: ${violations.length} violation(s)\n\n${violations.map(v => `- ${v}`).join('\n')}\n\nFix violations in content before writing.\n`)
  process.exit(2)
}

process.exit(0)
