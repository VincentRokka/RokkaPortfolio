<script setup>
defineProps({
  items: { type: Array, default: () => [] },
})
</script>

<template>
  <section
    id="projects"
    class="content-panel section-page flex flex-col justify-center px-8 py-12 sm:px-10 lg:px-12 lg:py-16"
  >
    <h2 class="mb-8 text-sm font-semibold tracking-widest text-fg uppercase">
      Projects
    </h2>

    <ul v-if="items.length" class="mx-auto w-full max-w-xl space-y-8">
      <li
        v-for="item in items"
        :key="item.id"
          class="group rounded-lg border border-muted/20 p-5 transition-colors hover:border-accent/40"
      >
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-lg font-medium text-fg group-hover:underline">
            <a
              v-if="item.href"
              :href="item.href"
              target="_blank"
              rel="noreferrer noopener"
            >
              {{ item.title }}
            </a>
            <span v-else>{{ item.title }}</span>
          </h3>
        </div>
        <p class="mt-2 text-sm leading-relaxed text-muted">
          {{ item.description }}
        </p>
        <ul class="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
          <li
            v-for="tech in item.technologies"
            :key="tech"
            class="text-xs text-muted"
          >
            {{ tech }}
          </li>
        </ul>
      </li>
    </ul>

    <p v-else class="text-muted italic">Nội dung Projects sẽ được thêm sau.</p>
  </section>
</template>
