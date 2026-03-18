import { execSync } from 'node:child_process'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

const PLUGIN_ROOT = join(import.meta.dirname, '../nuxtseo-content')
const HOOK_PATH = join(PLUGIN_ROOT, 'hooks/write-guard.mjs')

function runGuard(filePath: string, content: string): { exitCode: number, output: string } {
  const input = JSON.stringify({
    tool_name: 'Write',
    tool_input: { file_path: filePath, content },
  })

  try {
    const output = execSync(`node ${HOOK_PATH}`, {
      encoding: 'utf-8',
      timeout: 5000,
      input,
      env: { ...process.env, CLAUDE_PLUGIN_ROOT: PLUGIN_ROOT },
    })
    return { exitCode: 0, output: output.trim() }
  }
  catch (e: any) {
    return { exitCode: e.status, output: (e.stdout || '').trim() }
  }
}

describe('write-guard', () => {
  it('passes clean content', () => {
    const result = runGuard('/project/content/docs/auth.md', [
      '---',
      'title: Add Authentication',
      'description: Set up authentication in your Nuxt app',
      '---',
      '',
      'Authentication handles login, sessions, and protected routes. Add it with one module.',
      '',
      '```ts',
      'export default defineNuxtConfig({',
      '  modules: [\'nuxt-auth\']',
      '})',
      '```',
    ].join('\n'))
    expect(result.exitCode).toBe(0)
  })

  it('ignores non-content files', () => {
    const result = runGuard('/project/README.md', 'This is a comprehensive dive into the robust system.')
    expect(result.exitCode).toBe(0)
  })

  it('ignores non-markdown files', () => {
    const result = runGuard('/project/content/app.vue', 'comprehensive robust')
    expect(result.exitCode).toBe(0)
  })

  it('blocks banned words', () => {
    const result = runGuard('/project/content/docs/test.md', [
      '---',
      'title: Test',
      '---',
      '',
      'This is a comprehensive guide. Let us dive into the robust system.',
    ].join('\n'))
    expect(result.exitCode).toBe(2)
    expect(result.output).toContain('comprehensive')
    expect(result.output).toContain('dive into')
    expect(result.output).toContain('robust')
  })

  it('blocks banned phrases', () => {
    const result = runGuard('/project/content/docs/test.md', [
      '---',
      'title: Test',
      '---',
      '',
      'It\'s important to note that this feature works well. In today\'s web development landscape.',
    ].join('\n'))
    expect(result.exitCode).toBe(2)
    expect(result.output).toContain('it\'s important to note')
    expect(result.output).toContain('in today\'s [x]')
  })

  it('blocks em dashes', () => {
    const result = runGuard('/project/content/docs/test.md', [
      '---',
      'title: Test',
      '---',
      '',
      'Authentication \u2014 the process of verifying identity \u2014 is handled automatically.',
    ].join('\n'))
    expect(result.exitCode).toBe(2)
    expect(result.output).toContain('Em dash')
  })

  it('blocks JavaScript code blocks', () => {
    const result = runGuard('/project/content/docs/test.md', [
      '---',
      'title: Test',
      '---',
      '',
      '```js',
      'const foo = \'bar\'',
      '```',
    ].join('\n'))
    expect(result.exitCode).toBe(2)
    expect(result.output).toContain('JavaScript')
  })

  it('blocks code blocks without language tag', () => {
    const result = runGuard('/project/content/docs/test.md', [
      '---',
      'title: Test',
      '---',
      '',
      '```',
      'const foo = \'bar\'',
      '```',
    ].join('\n'))
    expect(result.exitCode).toBe(2)
    expect(result.output).toContain('missing language tag')
  })

  it('blocks inaccessible link text', () => {
    const result = runGuard('/project/content/docs/test.md', [
      '---',
      'title: Test',
      '---',
      '',
      'For more details, [click here](/docs/details) or see [here](/docs/other).',
    ].join('\n'))
    expect(result.exitCode).toBe(2)
    expect(result.output).toContain('click here')
    expect(result.output).toContain('here')
  })

  it('blocks banned endings', () => {
    const result = runGuard('/project/content/docs/test.md', [
      '---',
      'title: Test',
      '---',
      '',
      'Authentication works automatically.',
      '',
      'Happy coding!',
    ].join('\n'))
    expect(result.exitCode).toBe(2)
    expect(result.output).toContain('happy coding')
  })

  it('ignores banned words inside code blocks', () => {
    const result = runGuard('/project/content/docs/test.md', [
      '---',
      'title: Test',
      '---',
      '',
      'Set up meta tags in your app.',
      '',
      '```ts',
      '// ensure comprehensive coverage',
      'const config = { robust: true }',
      '```',
    ].join('\n'))
    expect(result.exitCode).toBe(0)
  })

  it('ignores banned words in frontmatter', () => {
    const result = runGuard('/project/content/docs/test.md', [
      '---',
      'title: A Comprehensive Guide',
      'description: Dive into robust patterns',
      '---',
      '',
      'Set up meta tags in your app.',
    ].join('\n'))
    expect(result.exitCode).toBe(0)
  })

  it('reports multiple violations at once', () => {
    const result = runGuard('/project/content/docs/test.md', [
      '---',
      'title: Test',
      '---',
      '',
      'Let\'s explore the comprehensive system. It\'s important to note that this works.',
      '',
      '```js',
      'const x = 1',
      '```',
      '',
      '[Click here](/docs/test) for more.',
      '',
      'Happy coding!',
    ].join('\n'))
    expect(result.exitCode).toBe(2)
    const violationCount = (result.output.match(/^- /gm) || []).length
    expect(violationCount).toBeGreaterThan(3)
  })
})
