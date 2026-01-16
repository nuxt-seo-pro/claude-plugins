---
name: SEO Write Guard
event: PreToolUse
matchTool: Write
matchFileGlob: "**/*.md"
---

# SEO Content Validation

Before writing this markdown file, verify:

## Banned Words Check
Scan your content for these AI slop words and remove them:
- dive into, crucial, essential, vital, robust, seamless, leverage, utilize, ensure, comprehensive, harness, empower, elevate, unlock, game-changer, delve, realm, landscape, plethora, myriad

## Banned Phrases
- "it's important to note", "in today's [X]", "let's explore", "this is where X comes in", "at its core", "when it comes to", "by the end of this guide"

## Banned Patterns
- Rhetorical questions as intros
- Three-adjective chains ("powerful, flexible, intuitive")
- Filler intros before getting to the point
- Superlatives without proof
- Em dashes (use hyphen only)

## Banned Endings
Never: "Now you're ready to...", "Happy coding!", "In conclusion..."

## Quick Fixes
| Slop | Fix |
|------|-----|
| It's important to note that... | [just state it] |
| This allows you to... | You can... |
| In order to... | To... |
| provides a way to | lets you |
| is designed to | does |

## Code Requirements
- TypeScript only, never JavaScript
- All code blocks need language tags

If any violations found, fix them before writing.
