<script setup>
defineProps({
  title: { type: String, required: true },
  emptyMessage: { type: String, required: true },
  labels: { type: Object, required: true },
  items: { type: Array, default: () => [] },
  activeSectionId: { type: String, default: '' },
})

function sectionId(job, index) {
  return index === 0 ? 'experience' : `experience-${job.id}`
}
</script>

<template>
  <template v-if="items.length">
    <section
      v-for="(job, index) in items"
      :id="sectionId(job, index)"
      :key="job.id"
      class="experience-job-page content-panel section-page flex flex-col justify-center px-8 py-12 sm:px-10 lg:px-12 lg:py-16"
    >
      <h2
        v-if="index === 0"
        class="mb-8 text-sm font-semibold tracking-widest text-fg uppercase"
      >
        {{ title }}
      </h2>

      <div class="mx-auto w-full max-w-xl">
        <div class="relative border-l border-soft/35 pl-6">
          <span
            class="experience-timeline-dot"
            :class="{
              'experience-timeline-dot--active':
                activeSectionId === sectionId(job, index),
            }"
            aria-hidden="true"
          />

          <div class="flex items-baseline justify-between gap-4">
            <h3 class="min-w-0 text-lg font-semibold leading-snug text-fg">
              {{ job.role }}
              <span class="font-medium text-soft"> — {{ job.company }}</span>
            </h3>
            <p class="shrink-0 text-sm text-soft tabular-nums">
              {{ job.period }}
            </p>
          </div>

          <div
            v-for="project in job.projects"
            :key="project.id"
            class="mt-8"
          >
            <h4 class="experience-project-title text-base leading-snug">
              <span class="experience-project-title__label"
                >{{ labels.project }}:</span
              >
              <span class="experience-project-title__name">{{
                project.title
              }}</span>
            </h4>

            <ul class="experience-detail-list mt-3 space-y-3">
              <li class="text-sm leading-relaxed text-soft">
                <span class="font-semibold text-fg"
                  >{{ labels.projectDescription }}:</span
                >
                {{ project.description }}
              </li>
              <li class="text-sm leading-relaxed text-soft">
                <span class="font-semibold text-fg"
                  >{{ labels.responsibilities }}:</span
                >
                {{ project.responsibilities }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>

  <section
    v-else
    id="experience"
    class="content-panel section-page flex flex-col justify-center px-8 py-12 sm:px-10 lg:px-12 lg:py-16"
  >
    <h2 class="mb-8 text-sm font-semibold tracking-widest text-fg uppercase">
      {{ title }}
    </h2>
    <p class="mx-auto max-w-xl text-soft italic">{{ emptyMessage }}</p>
  </section>
</template>
