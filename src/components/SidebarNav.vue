<script setup>
import NavIcon from './icons/NavIcon.vue'

defineProps({
  items: { type: Array, required: true },
  activeId: { type: String, required: true },
  ariaLabel: { type: String, default: 'Main navigation' },
})

const emit = defineEmits(['navigate'])
</script>

<template>
  <nav class="mt-8 w-full max-w-[13rem] lg:max-w-[14rem]" :aria-label="ariaLabel">
    <ul class="space-y-3">
      <li v-for="item in items" :key="item.id">
        <button
          type="button"
          class="group flex w-full items-center gap-3 py-1.5 text-left font-bold tracking-widest uppercase transition-all duration-300"
          :class="
            activeId === item.id
              ? 'nav-item-active text-fg'
              : 'text-soft hover:text-fg'
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

