<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="key-takeaways my-6 rounded-lg border border-[var(--ui-border)] bg-[var(--ui-bg)] overflow-hidden">
    <div class="px-4 py-3 bg-elevated border-b border-[var(--ui-border)]">
      <div class="flex items-center gap-2">
        <UIcon name="i-carbon-bookmark" class="size-4 text-[var(--ui-primary)]" />
        <span class="font-medium text-sm">{{ title || 'What you\'ll learn' }}</span>
      </div>
    </div>
    <div class="p-4 text-sm text-muted">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.key-takeaways :deep(ul) {
  list-style: none;
  margin: 0;
  padding: 0;
}

.key-takeaways :deep(li) {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
}

.key-takeaways :deep(li):last-child {
  margin-bottom: 0;
}

.key-takeaways :deep(li)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.35rem;
  width: 0.875rem;
  height: 0.875rem;
  background: var(--ui-primary);
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='currentColor' d='m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9z'/%3E%3C/svg%3E");
  mask-size: contain;
}

.key-takeaways :deep(li > p) {
  margin: 0;
}
</style>
