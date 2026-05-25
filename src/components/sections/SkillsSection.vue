<script setup>
import { computed } from 'vue'

const props = defineProps({
  emptyMessage: { type: String, required: true },
  labels: { type: Object, required: true },
  items: { type: Array, default: () => [] },
  education: { type: Object, default: null },
  activeSectionId: { type: String, default: '' },
})

const SKILLS_LEFT_COUNT = 4

const skillsLeftColumn = computed(() =>
  props.items.slice(0, SKILLS_LEFT_COUNT),
)
const skillsRightColumn = computed(() =>
  props.items.slice(SKILLS_LEFT_COUNT),
)
</script>

<template>
  <section
    id="skills"
    class="skills-section-page content-panel section-page flex flex-col justify-center px-8 py-6 sm:px-10 lg:px-12 lg:py-8"
  >
    <div class="mx-auto w-full max-w-3xl">
      <div
        v-if="items.length || education"
        class="skills-education-stack flex flex-col gap-10"
      >
        <!-- Skills — timeline riêng: 1 chấm + vạch dọc theo hết nội dung -->
        <div
          v-if="items.length"
          class="skills-education-timeline relative border-l border-soft/35 pl-6"
        >
          <span
            class="experience-timeline-dot"
            :class="{
              'experience-timeline-dot--active': activeSectionId === 'skills',
            }"
            aria-hidden="true"
          />

          <h3
            class="skills-education-block-heading skills-block-heading--wide text-xl font-semibold text-fg"
          >
            {{ labels.skills }}
          </h3>

          <div class="skills-columns mt-3">
            <ul class="skills-columns__left flex flex-col gap-y-2.5 text-left">
              <li
                v-for="item in skillsLeftColumn"
                :key="item.id"
                class="text-base leading-relaxed text-soft"
              >
                <span class="font-semibold text-fg">{{ item.category }}:</span>
                {{ ' ' }}{{ item.value }}
              </li>
            </ul>

            <ul class="skills-columns__right flex flex-col gap-y-2.5 text-left">
              <li
                v-for="item in skillsRightColumn"
                :key="item.id"
                class="text-base leading-relaxed text-soft"
              >
                <span class="font-semibold text-fg">{{ item.category }}:</span>
                {{ ' ' }}{{ item.value }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Education — timeline riêng, tách khỏi Skills -->
        <div
          v-if="education"
          class="skills-education-timeline relative border-l border-soft/35 pl-6"
        >
          <span
            class="experience-timeline-dot"
            :class="{
              'experience-timeline-dot--active': activeSectionId === 'skills',
            }"
            aria-hidden="true"
          />

          <h3
            class="skills-education-block-heading border-b border-soft/40 pb-2 text-xl font-semibold text-fg"
          >
            {{ labels.education }}
          </h3>

          <div class="mt-3 flex items-baseline justify-between gap-4">
            <div class="min-w-0">
              <h4 class="text-lg font-semibold leading-snug text-fg">
                {{ education.degree }}
              </h4>
              <p class="mt-0.5 text-base font-medium text-soft">
                {{ education.school }}
              </p>
            </div>
            <p class="shrink-0 text-base text-soft tabular-nums">
              {{ education.period }}
            </p>
          </div>

          <ul
            v-if="education.highlights?.length"
            class="experience-detail-list mt-3 space-y-1.5"
          >
            <li
              v-for="(highlight, index) in education.highlights"
              :key="index"
              class="text-base leading-relaxed text-soft"
              v-html="highlight"
            />
          </ul>
        </div>
      </div>

      <p v-else class="text-sm text-soft italic">{{ emptyMessage }}</p>
    </div>
  </section>
</template>
