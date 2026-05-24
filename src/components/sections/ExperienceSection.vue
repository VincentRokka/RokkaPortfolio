<script setup>
defineProps({
  items: { type: Array, default: () => [] },
})
</script>

<template>
  <section
    id="experience"
    class="content-panel section-page flex flex-col justify-center px-8 py-12 sm:px-10 lg:px-12 lg:py-16"
  >
    <h2 class="mb-8 text-sm font-semibold tracking-widest text-fg uppercase">
      Experience
    </h2>

    <ol v-if="items.length" class="mx-auto w-full max-w-xl space-y-10">
      <li
        v-for="item in items"
        :key="item.id"
        class="group relative border-l border-muted/30 pl-6"
      >
        <span
          class="absolute top-1 -left-1.5 h-3 w-3 rounded-full border border-muted bg-panel group-hover:border-accent group-hover:bg-accent"
          aria-hidden="true"
        />
        <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 class="text-lg font-medium text-fg">
            {{ item.role }}
            <span class="text-muted"> · {{ item.company }}</span>
          </h3>
          <span class="shrink-0 text-sm text-muted tabular-nums">{{ item.period }}</span>
        </div>
        <p class="mt-3 text-sm leading-relaxed text-muted">
          {{ item.description }}
        </p>
        <ul class="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
          <li
            v-for="tech in item.technologies"
            :key="tech"
            class="rounded-full border border-muted/40 px-2.5 py-0.5 text-xs text-muted"
          >
            {{ tech }}
          </li>
        </ul>
      </li>
    </ol>

    <p v-else class="text-muted italic">Nội dung Experience sẽ được thêm sau.</p>
  </section>
</template>
