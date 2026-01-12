# Style Analysis

Extract patterns from existing content for writing-style.md.

## What to Analyze

Sample 3-5 pages per category. Prefer recent, longer content.

## Metrics to Extract

### Voice

| Metric | How to Measure | Categories |
|--------|----------------|------------|
| Formality | Contractions, personal pronouns | formal/conversational |
| Person | "you" vs "we" vs passive | second/first/third |
| Tone | Imperatives, hedging, exclamations | direct/cautious/enthusiastic |

**Indicators:**
- Contractions (don't, won't) → conversational
- "We recommend" → first person
- "You should" → second person
- "It is recommended" → passive/formal

### Structure

| Element | What to Check |
|---------|---------------|
| Heading depth | Max H2 only? H3? H4? |
| Paragraph length | Short (2-3 sentences) vs long (5+) |
| List usage | Frequent bullets vs prose |
| Code frequency | Blocks per 500 words |

### Technical Density

| Signal | Interpretation |
|--------|----------------|
| Code blocks per page | High (5+) = reference style |
| Inline code frequency | API-heavy content |
| External links | How much external sourcing |

## Pattern Detection

### Sentence Length

```
Count words per sentence across sample.
- Short: avg < 15 words
- Medium: avg 15-25 words
- Long: avg > 25 words
```

### Terminology Preferences

Look for consistent choices:
- "config" vs "configuration"
- "setup" vs "set up"
- "e.g." vs "for example"
- Framework-specific terms

### Opening Patterns

How do articles start?
- Problem statement first
- Feature announcement
- Question hook
- Direct instruction

## Output Format

Write to `.claude/context/writing-style.md`:

```yaml
categories:
  docs:
    voice: direct, second person
    structure: short paragraphs, heavy code
    terminology:
      - prefer "config" over "configuration"
      - use "composable" not "hook"
    openings: direct instruction

  learn:
    voice: conversational, second person
    structure: longer paragraphs, narrative flow
    terminology:
      - explain jargon on first use
    openings: problem statement

  landing:
    voice: confident, first person plural
    structure: short punchy sentences
    terminology:
      - avoid technical terms
    openings: benefit statement
```

## Fallback Defaults

If no content to analyze:

```yaml
default:
  voice: direct, second person
  structure: short paragraphs
  terminology: []
  openings: varies by type
```
