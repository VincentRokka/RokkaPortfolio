<script setup>
import { computed } from 'vue'
import { useTheme } from '../composables/useTheme.js'
import { useLocale } from '../composables/useLocale.js'

const { theme, toggleTheme } = useTheme()
const { content } = useLocale()

const ariaLabel = computed(() =>
  theme.value === 'day'
    ? content.value.ui.themeToggleToNight
    : content.value.ui.themeToggleToDay,
)
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    @click="toggleTheme"
  >
    <!-- Ban đêm → hiện icon mặt trời (bật ban ngày) -->
    <svg
      v-if="theme === 'night'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-[1.125rem] w-[1.125rem]"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
    <!-- Ban ngày → hiện icon mặt trăng (bật ban đêm) -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-[1.125rem] w-[1.125rem]"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  height: 2.375rem;
  width: 2.375rem;
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid color-mix(in srgb, var(--color-soft) 28%, transparent);
  background-color: color-mix(in srgb, var(--color-fg) 8%, var(--color-panel));
  color: var(--color-soft);
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease;
}

.theme-toggle:hover {
  border-color: color-mix(in srgb, var(--color-soft) 50%, transparent);
  background-color: color-mix(in srgb, var(--color-fg) 12%, var(--color-panel));
  color: var(--color-fg);
}

.theme-toggle:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--color-accent) 55%, transparent);
  outline-offset: 3px;
}
</style>
