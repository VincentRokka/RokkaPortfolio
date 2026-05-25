<script setup>
import { useLocale } from '../composables/useLocale.js'

const { locale, localeOptions, content, setLocale } = useLocale()

function onChange(event) {
  setLocale(event.target.value)
}
</script>

<template>
  <div class="language-select">
    <label for="language-select" class="sr-only">
      {{ content.ui.language }}
    </label>
    <select
      id="language-select"
      :value="locale"
      class="language-select__control"
      :aria-label="content.ui.language"
      @change="onChange"
    >
      <option v-for="opt in localeOptions" :key="opt.code" :value="opt.code">
        {{ opt.flag }} {{ opt.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.language-select__control {
  appearance: none;
  cursor: pointer;
  min-width: 8.25rem;
  border-radius: 9999px;
  border: 1px solid color-mix(in srgb, var(--color-soft) 28%, transparent);
  background-color: color-mix(in srgb, var(--color-fg) 8%, var(--color-panel));
  padding: 0.5625rem 2.5rem 0.5625rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-soft);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, var(--color-fg) 10%, transparent),
    0 4px 14px rgba(0, 0, 0, 0.18);
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.85rem center;
}

.language-select__control:hover {
  border-color: color-mix(in srgb, var(--color-soft) 50%, transparent);
  background-color: color-mix(in srgb, var(--color-fg) 12%, var(--color-panel));
  color: var(--color-fg);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, var(--color-fg) 14%, transparent),
    0 6px 18px rgba(0, 0, 0, 0.22);
}

.language-select__control:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--color-accent) 55%, transparent);
  outline-offset: 3px;
}
</style>
