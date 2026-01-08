# Code Quality Audit Patterns

Skip basic checks (syntax, brackets, quotes) - LLM handles these.

## Audience Consistency

Code must match target stack from site-config.md or file path.

### Framework API Boundaries

**Vue-only (don't use in Nuxt content):**
- `createApp()`, `app.mount()`
- Direct imports: `import { useRoute } from 'vue-router'`

**Nuxt-only (don't use in Vue content):**
- `useAsyncData()`, `useFetch()`, `useLazyFetch()`
- `definePageMeta()`, `defineNuxtComponent()`
- `useNuxtApp()`, `useRuntimeConfig()`
- Auto-imports without explicit imports

## Code Completeness

Examples must be copy-pasteable. Check for undeclared variables:

| Used | Requires |
|------|----------|
| `route.params` | `const route = useRoute()` |
| `router.push()` | `const router = useRouter()` |
| `props.title` | `defineProps<{ title: string }>()` |
| `emit('click')` | `defineEmits<{ click: [] }>()` |

**Exception:** `// ...` indicates intentional truncation.

## Alternative Grouping

Consecutive code blocks showing variants must use `::code-group`:

**Group when showing:**
- Package manager commands (npm/pnpm/yarn/bun)
- Config formats (ts/js/json)
- Multiple files for one concept

**Don't group:**
- Sequential steps (use numbered list)
- Before/after comparisons
