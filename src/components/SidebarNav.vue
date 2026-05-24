<script setup>
import NavIcon from './icons/NavIcon.vue'

defineProps({
  items: { type: Array, required: true },
  activeId: { type: String, required: true },
})

const emit = defineEmits(['navigate'])
</script>

<template>
  <nav class="mt-8 w-full max-w-[13rem] lg:max-w-[14rem]" aria-label="Mục chính">
    <ul class="space-y-3">
      <li v-for="item in items" :key="item.id">
        <button
          type="button"
          class="group flex w-full items-center gap-3 py-1.5 text-left font-bold tracking-widest uppercase transition-all duration-300"
          :class="
            activeId === item.id
              ? 'nav-item-active text-accent'
              : 'text-muted hover:text-fg/80'
          "
          :aria-current="activeId === item.id ? 'true' : undefined"
          @click="emit('navigate', item.id)"
        >
          <NavIcon :active="activeId === item.id" />
          <span>{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-item-active {
  text-shadow:
    0 0 8px color-mix(in srgb, var(--color-accent) 55%, transparent),
    0 0 18px color-mix(in srgb, var(--color-accent) 30%, transparent);
}
</style>
