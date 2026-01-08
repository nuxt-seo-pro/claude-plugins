<script setup lang="ts">
import { useSpring } from 'motion-v'

defineProps<{
  question: string
}>()

const container = ref<HTMLElement>()
const selectedIndex = ref<number | null>(null)
const checked = ref(false)
const correctIndex = ref<number | null>(null)
const items = ref<Element[]>([])

// Spring animation for feedback
const feedbackSpring = useSpring(0, { stiffness: 300, damping: 20 })

onMounted(() => {
  if (!container.value)
    return

  items.value = [...container.value.querySelectorAll('li')]
  items.value.forEach((li, i) => {
    const text = li.textContent || ''
    // Find correct answer by "Correct" text
    if (text.toLowerCase().includes('correct'))
      correctIndex.value = i

    // Hide explanation text - everything after the code block
    const p = li.querySelector('p')
    if (p) {
      // Find the code element (might be nested in spans from syntax highlighting)
      const code = p.querySelector('code')
      if (code) {
        // Find the parent that's a direct child of p
        let codeParent: Node = code
        while (codeParent.parentNode && codeParent.parentNode !== p) {
          codeParent = codeParent.parentNode
        }

        // Get all siblings after the code/code-parent
        const explanation = document.createElement('span')
        explanation.className = 'explanation'

        let sibling = codeParent.nextSibling
        while (sibling) {
          const next = sibling.nextSibling
          explanation.appendChild(sibling)
          sibling = next
        }

        if (explanation.childNodes.length)
          p.appendChild(explanation)
      }
    }

    li.addEventListener('click', () => {
      if (checked.value)
        return
      selectedIndex.value = i
      checked.value = true
      feedbackSpring.set(1)

      // Apply result classes with staggered animation
      items.value.forEach((el, j) => {
        setTimeout(() => {
          if (j === correctIndex.value)
            el.classList.add('correct')
          else
            el.classList.add('incorrect')
        }, j * 50)
      })
    })
  })
})

const feedbackStyle = computed(() => ({
  opacity: feedbackSpring.current.value,
  transform: `translateY(${(1 - feedbackSpring.current.value) * 10}px)`,
}))
</script>

<template>
  <div
    ref="container"
    class="quick-check my-6 rounded-lg border border-[var(--ui-border)] bg-[var(--ui-bg)] overflow-hidden"
    :class="{ checked }"
  >
    <div class="px-4 py-3 bg-elevated border-b border-[var(--ui-border)]">
      <div class="flex items-center gap-2">
        <UIcon name="i-heroicons-question-mark-circle" class="size-4 text-[var(--ui-primary)]" />
        <span class="font-medium text-sm">Quick Check</span>
      </div>
    </div>

    <div class="p-4">
      <p class="font-medium text-[var(--ui-text)] mb-4">
        {{ question }}
      </p>

      <div class="text-sm">
        <slot />
      </div>

      <div v-if="checked" class="mt-4 pt-4 border-t border-[var(--ui-border)]" :style="feedbackStyle">
        <div v-if="selectedIndex === correctIndex" class="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
          <UIcon name="i-carbon-checkmark-filled" class="size-4" />
          <span class="font-medium">Correct!</span>
        </div>
        <div v-else class="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
          <UIcon name="i-carbon-close-filled" class="size-4" />
          <span class="font-medium">Not quite. See the correct answer above.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quick-check :deep(ul) {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.quick-check :deep(li) {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid var(--ui-border);
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
}

.quick-check:not(.checked) :deep(li:hover) {
  border-color: var(--ui-primary);
  background: var(--ui-bg-elevated);
}

.quick-check :deep(li)::before {
  content: '';
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--ui-border);
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 0.125rem;
  transition: all 0.2s;
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
}

/* Selected state (before checking) */
.quick-check :deep(li.selected)::before {
  border-color: var(--ui-primary);
  background-color: var(--ui-primary);
}

/* Checked state - correct answer */
.quick-check.checked :deep(li.correct) {
  border-color: rgb(34 197 94 / 0.5);
  background: rgb(34 197 94 / 0.08);
}

.quick-check.checked :deep(li.correct)::before {
  border-color: rgb(34 197 94);
  background-color: rgb(34 197 94);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='white' d='m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9z'/%3E%3C/svg%3E");
}

/* Checked state - wrong answers */
.quick-check.checked :deep(li) {
  cursor: default;
}

.quick-check.checked :deep(li.incorrect) {
  opacity: 0.6;
}

.quick-check.checked :deep(li.incorrect)::before {
  border-color: rgb(239 68 68 / 0.5);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='rgb(239,68,68)' d='M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6z'/%3E%3C/svg%3E");
}

.quick-check :deep(li > p) {
  margin: 0;
}

/* Hide explanation until checked */
.quick-check :deep(.explanation) {
  display: none;
}

.quick-check.checked :deep(.explanation) {
  display: inline;
  color: var(--ui-text-muted);
}
</style>
