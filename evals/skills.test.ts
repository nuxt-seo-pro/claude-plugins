import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

const PLUGIN_DIR = join(import.meta.dirname, '../nuxtseo-content')
const SKILLS_DIR = join(PLUGIN_DIR, 'skills')

// Parse banned words from foundations.md
const foundationsFile = readFileSync(join(SKILLS_DIR, 'content-writing/references/foundations.md'), 'utf-8')

// Extract banned words section (single line of comma-separated words)
const bannedWordsMatch = foundationsFile.match(/### Banned Words\n\n(.+)\n/)
const BANNED_WORDS = bannedWordsMatch
  ? bannedWordsMatch[1].split(', ').map(w => w.trim().toLowerCase())
  : []

// Extract banned phrases section (list items with quotes)
const bannedPhrasesSection = foundationsFile.match(/### Banned Phrases\n\n([\s\S]*?)(?=\n### |$)/)
const BANNED_PHRASES = bannedPhrasesSection
  ? bannedPhrasesSection[1]
      .split('\n')
      .filter(line => line.startsWith('- "'))
      .map(line => line.slice(3, -1).toLowerCase())
  : []

// Hedging phrases that indicate weak writing
const HEDGING_PHRASES = [
  'you may want to',
  'you might want to',
  'consider using',
  'it is recommended',
  'could potentially',
  'might potentially',
  'may help',
  'could help',
]

function claude(prompt: string) {
  const escaped = prompt.replace(/'/g, '\'\\\'\'')
  const output = execSync(
    `claude --plugin-dir '${PLUGIN_DIR}' --print '${escaped}'`,
    { encoding: 'utf-8', timeout: 120000 },
  )
  return output.trim()
}

function checkBannedContent(text: string) {
  const lower = text.toLowerCase()
  const foundWords = BANNED_WORDS.filter(word => lower.includes(word))
  const foundPhrases = BANNED_PHRASES.filter(phrase => lower.includes(phrase))
  return { foundWords, foundPhrases }
}

function checkHedging(text: string) {
  const lower = text.toLowerCase()
  return HEDGING_PHRASES.filter(phrase => lower.includes(phrase))
}

function hasTable(text: string) {
  return /\|.+\|/.test(text) && /\|-+\|/.test(text)
}

function hasHeading(text: string, pattern: RegExp) {
  return pattern.test(text)
}

function hasCodeBlock(text: string, lang?: string) {
  if (lang)
    return new RegExp(`\`\`\`${lang}`).test(text)
  return /```\w+/.test(text)
}

// Normalize output for stable snapshots
function normalizeForSnapshot(text: string) {
  return text
    .replace(/\d{4}-\d{2}-\d{2}/g, '[DATE]')
    .replace(/\d+\/mo/g, '[VOLUME]/mo')
    .replace(/\d+%/g, '[X]%')
    .replace(/\d+\.\d+s/g, '[X]s')
    .trim()
}

describe('writing-foundations', () => {
  it('generates content without banned words', () => {
    const output = claude('Write a short paragraph explaining what useSeoMeta does in Nuxt')
    const { foundWords, foundPhrases } = checkBannedContent(output)

    expect(foundWords, `Found banned words: ${foundWords.join(', ')}`).toEqual([])
    expect(foundPhrases, `Found banned phrases: ${foundPhrases.join(', ')}`).toEqual([])
  })

  it('uses direct language without hedging', () => {
    const output = claude('Write one sentence about adding a sitemap to Nuxt')
    const hedging = checkHedging(output)

    expect(hedging, `Found hedging: ${hedging.join(', ')}`).toEqual([])
    expect(normalizeForSnapshot(output)).toMatchSnapshot()
  })

  it('uses TypeScript not JavaScript', () => {
    const output = claude('Write a code block showing how to use useSeoMeta in Nuxt. Output ONLY the code block, nothing else.')

    expect(hasCodeBlock(output, 'ts') || hasCodeBlock(output, 'typescript') || hasCodeBlock(output, 'vue')).toBe(true)
    expect(hasCodeBlock(output, 'js')).toBe(false)
    expect(hasCodeBlock(output, 'javascript')).toBe(false)
  })
})

describe('docs-writing', () => {
  it('generates doc intro without slop', () => {
    const output = claude('Write an intro paragraph for the defineOgImage composable documentation')
    const { foundWords, foundPhrases } = checkBannedContent(output)

    expect(foundWords).toEqual([])
    expect(foundPhrases).toEqual([])
  })

  it('uses tables for parameters not prose', () => {
    const output = claude('Document a composable with 3 parameters: title (string), description (string), image (string)')

    expect(hasTable(output), 'Should use table for parameters').toBe(true)
  })

  it('opens with facts not introductions', () => {
    const output = claude('Write the first 2 sentences for sitemap module documentation')
    const lower = output.toLowerCase()

    // Should not start with filler
    expect(lower).not.toMatch(/^(in this guide|this guide will|let's explore|welcome to)/)
    // Should mention what it does quickly
    expect(lower).toMatch(/sitemap|xml|route/)
  })

  it('doc structure matches expected format', () => {
    const output = claude('Output a minimal API reference section in markdown for a composable called useExample with 2 parameters: name (string) and count (number). Do not create any files.')
    expect(normalizeForSnapshot(output)).toMatchSnapshot()
  })
})

describe('learn-writing', () => {
  it('generates learn article intro without slop', () => {
    const output = claude('Write a 2-sentence intro for an article about meta tag best practices. Be direct and specific. Avoid filler words.')
    const { foundWords, foundPhrases } = checkBannedContent(output)

    expect(foundWords, `Found banned words: ${foundWords.join(', ')}`).toEqual([])
    expect(foundPhrases, `Found banned phrases: ${foundPhrases.join(', ')}`).toEqual([])
  })

  it('uses specific stats not vague claims', () => {
    const output = claude('Write one sentence about why meta descriptions matter for SEO')

    // Should have specificity (numbers, percentages, concrete details)
    const hasSpecificity = /\d+%|\d+ percent|\d+\.\d+|\d+ (?:out of|in|of)/.test(output)
      || /google|search engine|click|ctr/i.test(output)

    expect(hasSpecificity, 'Should use specific claims').toBe(true)
  })

  it('learn intro structure', () => {
    const output = claude('Write a 2-sentence hook for an article about structured data in Nuxt')
    expect(normalizeForSnapshot(output)).toMatchSnapshot()
  })
})

describe('content-research', () => {
  it('research output has required sections', () => {
    const output = claude('Output a content research summary in markdown for "nuxt sitemap" topic. Include sections for keywords, competition, and gaps. Use placeholder values. Do not create files.')

    expect(hasHeading(output, /keyword/i), 'Should have Keywords section').toBe(true)
    expect(hasHeading(output, /competition|competitor/i), 'Should have Competition section').toBe(true)
    expect(hasTable(output), 'Should use tables for keyword data').toBe(true)
  })

  it('research output format', () => {
    const output = claude('Output a minimal content research template in markdown for "nuxt og image" topic. Show structure with placeholder values. Do not create files.')
    expect(normalizeForSnapshot(output)).toMatchSnapshot()
  })
})

describe('market-research', () => {
  it('market research has required sections', () => {
    const output = claude('Output a market research summary in markdown for a "vue component library" product idea. Include demand, competition, and recommendation sections. Use placeholder values. Do not create files.')

    expect(hasHeading(output, /demand|keyword|search/i), 'Should analyze search demand').toBe(true)
    expect(hasHeading(output, /competition|competitor/i), 'Should analyze competition').toBe(true)
    expect(hasHeading(output, /recommendation|verdict|conclusion/i), 'Should include recommendation').toBe(true)
  })

  it('provides actionable recommendation', () => {
    const output = claude('Write a one-paragraph market recommendation for a developer tool. End with a clear verdict: Build, Validate, or Pass.')
    const lower = output.toLowerCase()

    // Should have clear action recommendation
    const hasAction = /build|validate|pass|pivot|proceed|skip|invest|pursue|avoid/.test(lower)
    expect(hasAction, 'Should have actionable recommendation').toBe(true)
  })

  it('market research structure', () => {
    const output = claude('Output a minimal market research template in markdown for "ai code review tool". Show structure with placeholder values. Do not create files.')
    expect(normalizeForSnapshot(output)).toMatchSnapshot()
  })
})

describe('comparison-writing', () => {
  it('comparison leads with verdict', () => {
    const output = claude('Write the TL;DR opening paragraph for a Nuxt vs Next.js comparison. State which to choose and why in the first sentence.')
    const lower = output.toLowerCase()

    // First paragraph should have a recommendation
    const hasVerdict = /use|choose|pick|better|recommend|prefer|nuxt|next|vue|react/.test(lower)
    expect(hasVerdict, 'Should lead with verdict').toBe(true)
  })

  it('comparison uses tables', () => {
    const output = claude('Write a feature comparison section for Nuxt vs Next.js with 4 features')

    expect(hasTable(output), 'Should use comparison table').toBe(true)
  })

  it('comparison is opinionated not neutral', () => {
    const output = claude('Write a "When to Choose" section for Nuxt in a Nuxt vs Next comparison')
    const lower = output.toLowerCase()

    // Should NOT be wishy-washy
    expect(lower).not.toMatch(/both are great|depends on your needs|either works/)
    // Should have specific scenarios
    expect(lower).toMatch(/if you|when you|for|developers who/)
  })

  it('comparison structure', () => {
    const output = claude('Create a minimal comparison article structure for "React vs Vue" (headings only)')
    expect(normalizeForSnapshot(output)).toMatchSnapshot()
  })
})

describe('landing-copy', () => {
  it('hero leads with outcome not feature', () => {
    const output = claude('Write a hero headline and subhead for a developer tool. Focus on what the user achieves, not what the tool does. Use outcome-focused language.')
    const lower = output.toLowerCase()

    // Should focus on what user gets, not what tool does
    const hasOutcome = /faster|easier|less|stop|ship|save|without|better|more|free|never|no more|automat/.test(lower)
    expect(hasOutcome, 'Should lead with outcome').toBe(true)
  })

  it('landing copy has no marketing slop', () => {
    const output = claude('Write a features section for a meta tag management tool with 3 features')
    const { foundWords, foundPhrases } = checkBannedContent(output)

    expect(foundWords).toEqual([])
    expect(foundPhrases).toEqual([])
  })

  it('cTAs are specific not generic', () => {
    const output = claude('Write 3 CTA button texts for a developer tool landing page')
    const lower = output.toLowerCase()

    // Should NOT have generic CTAs
    expect(lower).not.toMatch(/click here|learn more|submit/)
    // Should have action-oriented CTAs
    expect(lower).toMatch(/get started|install|add|try|view|start/)
  })

  it('uses code examples in landing copy', () => {
    const output = claude('Write a "before/after" section showing code improvement for a meta tag tool')

    expect(hasCodeBlock(output), 'Should include code examples').toBe(true)
  })

  it('landing copy structure', () => {
    const output = claude('Create a landing page structure for a developer tool (section headings only)')
    expect(normalizeForSnapshot(output)).toMatchSnapshot()
  })
})
