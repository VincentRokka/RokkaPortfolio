<script setup>
defineProps({
  paragraphs: { type: Array, required: true },
})
</script>

<template>
  <section
    id="summary"
    class="content-panel section-page flex flex-col justify-center px-8 py-12 sm:px-10 lg:px-12 lg:py-16"
  >
    <h2 class="sr-only">Summary</h2>
    <div
      class="summary-content mx-auto w-full max-w-xl space-y-4 text-base leading-relaxed"
    >
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="index"
        class="text-muted"
        v-html="paragraph"
      />
    </div>
  </section>
</template>
