<script setup>
defineProps({
  active: { type: Boolean, default: false },
})
</script>

<template>
  <span
    class="flex h-5 w-5 shrink-0 items-center justify-center"
    aria-hidden="true"
  >
    <span
      class="rounded-full transition-all duration-300"
      :class="
        active
          ? 'h-2.5 w-2.5 bg-fg'
          : 'h-2 w-2 border border-soft bg-transparent group-hover:border-fg/60'
      "
    />
  </span>
</template>
