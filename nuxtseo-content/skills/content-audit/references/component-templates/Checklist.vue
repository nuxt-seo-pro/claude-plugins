<script setup lang="ts">
import { useSpring } from 'motion-v'

const props = defineProps<{
  id: string
  title?: string
}>()

const container = ref<HTMLElement>()
const checkedItems = ref<Set<number>>(new Set())
const totalItems = ref(0)

const storageKey = computed(() => `checklist-${props.id}`)

// Animated progress
const progressSpring = useSpring(0, { stiffness: 200, damping: 25 })

onMounted(async () => {
  await nextTick()

  // Load from localStorage
  const saved = localStorage.getItem(storageKey.value)
  if (saved) {
    checkedItems.value = new Set(JSON.parse(saved))
  }

  // Add click handlers
  if (!container.value)
    return
  const items = container.value.querySelectorAll('li')
  totalItems.value = items.length

  // Update spring with initial progress
  if (totalItems.value > 0)
    progressSpring.set((checkedItems.value.size / totalItems.value) * 100)

  items.forEach((li, i) => {
    if (checkedItems.value.has(i))
      li.classList.add('checked')

    li.addEventListener('click', () => toggleItem(i, li))
  })
})

function toggleItem(index: number, li: Element) {
  // Add pop animation
  li.style.transform = 'scale(0.98)'
  setTimeout(() => li.style.transform = '', 100)

  if (checkedItems.value.has(index)) {
    checkedItems.value.delete(index)
    li.classList.remove('checked')
  }
  else {
    checkedItems.value.add(index)
    li.classList.add('checked')
  }
  localStorage.setItem(storageKey.value, JSON.stringify([...checkedItems.value]))

  // Animate progress
  if (totalItems.value)
    progressSpring.set((checkedItems.value.size / totalItems.value) * 100)
}

const progress = computed(() => {
  const val = progressSpring.current.value
  return Number.isNaN(val) ? 0 : Math.round(val)
})
</script>

<template>
  <div ref="container" class="checklist my-6 rounded-lg border border-[var(--ui-border)] bg-[var(--ui-bg)] overflow-hidden">
    <div class="px-4 py-3 bg-elevated border-b border-[var(--ui-border)]">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <UIcon name="i-carbon-task" class="size-4 text-muted" />
          <span class="font-medium text-sm">{{ title || 'Checklist' }}</span>
        </div>
        <div v-if="totalItems > 0" class="flex items-center gap-2">
          <div class="w-16 h-1.5 bg-[var(--ui-border)] rounded-full overflow-hidden">
            <div
              class="h-full bg-green-500 rounded-full transition-none"
              :style="{ width: `${progress}%` }"
            />
          </div>
          <span class="text-xs text-muted tabular-nums">{{ progress }}%</span>
        </div>
      </div>
    </div>
    <div class="p-4 text-sm">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.checklist :deep(ul) {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.checklist :deep(li) {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem;
  margin: 0 -0.5rem;
  border-radius: 0.375rem;
  transition: background 0.2s;
  cursor: pointer;
}

.checklist :deep(li:hover) {
  background: var(--ui-bg-elevated);
}

.checklist :deep(li)::before {
  content: '';
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--ui-border);
  border-radius: 0.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
  transition: all 0.2s;
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
}

.checklist :deep(li:hover)::before {
  border-color: var(--ui-primary);
}

.checklist :deep(li.checked)::before {
  border-color: rgb(34 197 94);
  background-color: rgb(34 197 94);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='white' d='m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9z'/%3E%3C/svg%3E");
}

.checklist :deep(li.checked) {
  opacity: 0.7;
}

.checklist :deep(li.checked p) {
  text-decoration: line-through;
}

.checklist :deep(li > p) {
  margin: 0;
}
</style>
