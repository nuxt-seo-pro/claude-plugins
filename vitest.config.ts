import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 60000, // LLM calls can be slow
    hookTimeout: 60000,
  },
})
