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
          ? 'h-2.5 w-2.5 bg-accent shadow-[0_0_8px_rgba(214,199,161,0.75),0_0_16px_rgba(214,199,161,0.35)]'
          : 'h-2 w-2 border border-muted bg-transparent group-hover:border-accent/50'
      "
    />
  </span>
</template>
