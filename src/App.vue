<script setup>
import { ref, computed } from 'vue'
import ProfilePhoto from './components/ProfilePhoto.vue'
import SidebarNav from './components/SidebarNav.vue'
import SocialLinks from './components/SocialLinks.vue'
import LanguageSelect from './components/LanguageSelect.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import SummarySection from './components/sections/SummarySection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import { useScrollSpy } from './composables/useScrollSpy.js'
import { useLocale } from './composables/useLocale.js'

const { content } = useLocale()

const scrollRoot = ref(null)

const sectionIds = computed(() => [
  'summary',
  'skills',
  ...content.value.experienceItems.map((job, index) =>
    index === 0 ? 'experience' : `experience-${job.id}`,
  ),
])

const { activeSection, scrollToSection } = useScrollSpy(sectionIds, scrollRoot)

/** Nav "Experience" sáng khi đang ở bất kỳ trang công ty nào */
const navActiveSection = computed(() => {
  const id = activeSection.value
  if (id === 'experience' || id.startsWith('experience-')) return 'experience'
  return id
})
</script>

<template>
  <!-- Theme: day panel #FFFFFF + viền L/R/B — night #0B1020 -->
  <div class="min-h-screen p-4 sm:p-5 lg:p-6">
    <div
      class="mx-auto flex max-w-7xl flex-col gap-5 lg:min-h-[calc(100vh-3rem)] lg:flex-row lg:gap-6"
    >
      <!-- Sidebar trái (có ảnh) -->
      <aside
        class="lg:sticky lg:top-6 lg:flex lg:h-[calc(100vh-3rem)] lg:w-[42%] lg:max-w-md lg:shrink-0 lg:self-start"
      >
        <div
          class="content-panel flex h-full flex-col items-center justify-between px-8 py-10 text-center sm:px-10 lg:min-h-0 lg:px-12 lg:py-12"
        >
          <div class="flex w-full flex-col items-center">
            <ProfilePhoto
              v-if="content.profile.avatar"
              :src="content.profile.avatar"
              :alt="content.profile.avatarAlt"
            />
            <h1
              class="max-w-full text-center text-[clamp(1.125rem,2.5vw,1.625rem)] font-bold leading-tight tracking-tight whitespace-nowrap text-fg"
            >
              {{ content.profile.name }}
            </h1>
            <p class="mt-3 text-lg font-medium leading-snug text-fg sm:text-xl">
              {{ content.profile.title }}
            </p>
            <p
              class="mx-auto mt-5 max-w-xs text-[1.0625rem] leading-8 text-soft"
            >
              {{ content.profile.tagline }}
            </p>

            <SidebarNav
              :items="content.navItems"
              :active-id="navActiveSection"
              :aria-label="content.ui.navAriaLabel"
              class="mx-auto mt-8"
              @navigate="scrollToSection"
            />
          </div>

          <SocialLinks
            :links="content.socialLinks"
            class="mt-10 justify-center text-soft lg:mt-0"
          />
        </div>
      </aside>

      <!-- Sidebar phải (Summary, Skills, Experience) -->
      <div
        ref="scrollRoot"
        class="relative scroll-smooth lg:h-[calc(100vh-3rem)] lg:flex-1 lg:snap-y lg:snap-mandatory lg:overflow-y-auto"
      >
        <div
          class="content-toolbar sticky top-4 z-20 -mb-14 flex justify-end gap-2 px-8 pointer-events-none sm:px-10 lg:top-6 lg:px-12"
        >
          <div class="pointer-events-auto flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelect />
          </div>
        </div>

        <div class="flex flex-col gap-5 lg:gap-6">
          <SummarySection
            :heading="content.sections.summaryHeading"
            :paragraphs="content.summaryParagraphs"
          />
          <SkillsSection
            :empty-message="content.empty.skills"
            :labels="content.skillsEducationLabels"
            :items="content.skillsItems"
            :education="content.education"
            :active-section-id="activeSection"
          />
          <ExperienceSection
            :title="content.sections.experience"
            :empty-message="content.empty.experience"
            :labels="content.experienceLabels"
            :items="content.experienceItems"
            :active-section-id="activeSection"
          />
        </div>
      </div>
    </div>
  </div>
</template>
