<script setup>
import LanguageSelect from '../LanguageSelect.vue'
import ThemeToggle from '../ThemeToggle.vue'

defineProps({
  heading: { type: String, required: true },
  paragraphs: { type: Array, required: true },
})
</script>

<template>
  <section
    id="summary"
    class="content-panel section-page relative flex flex-col justify-center px-8 py-12 sm:px-10 lg:px-12 lg:py-16"
  >
    <div
      class="summary-toolbar absolute top-10 right-8 z-10 flex items-center gap-2 sm:top-12 sm:right-10 lg:top-14 lg:right-12"
    >
      <ThemeToggle />
      <LanguageSelect />
    </div>
    <div class="mx-auto w-full max-w-xl">
      <h2 class="summary-heading mb-6 text-xl uppercase tracking-widest sm:mb-8 sm:text-2xl">
        {{ heading }}
      </h2>
      <div
        class="summary-content space-y-4 text-[1.0625rem] leading-8 text-soft"
      >
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="index"
        v-html="paragraph"
      />
      </div>
    </div>
  </section>
</template>
