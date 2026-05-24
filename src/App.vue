<script setup>
import { ref } from 'vue'
import ProfilePhoto from './components/ProfilePhoto.vue'
import SidebarNav from './components/SidebarNav.vue'
import SocialLinks from './components/SocialLinks.vue'
import SummarySection from './components/sections/SummarySection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import { useScrollSpy } from './composables/useScrollSpy.js'
import {
  profile,
  navItems,
  socialLinks,
  summaryParagraphs,
  experienceItems,
  projectItems,
} from './data/portfolio.js'

const scrollRoot = ref(null)
const sectionIds = navItems.map((item) => item.id)
const { activeSection, scrollToSection } = useScrollSpy(sectionIds, scrollRoot)
</script>

<template>
  <!-- Calm Developer: canvas #0F1115 — panel #232A36 (sáng hơn) -->
  <div class="min-h-screen p-4 sm:p-5 lg:p-6">
    <div
      class="mx-auto flex max-w-7xl flex-col gap-5 lg:min-h-[calc(100vh-3rem)] lg:flex-row lg:gap-6"
    >
      <!-- Navbar trái — căn giữa -->
      <aside
        class="lg:sticky lg:top-6 lg:flex lg:h-[calc(100vh-3rem)] lg:w-[42%] lg:max-w-md lg:shrink-0 lg:self-start"
      >
        <div
          class="content-panel flex h-full flex-col items-center justify-between px-8 py-10 text-center sm:px-10 lg:min-h-0 lg:px-12 lg:py-12"
        >
          <div class="flex w-full flex-col items-center">
            <ProfilePhoto
              v-if="profile.avatar"
              :src="profile.avatar"
              :alt="profile.avatarAlt"
            />
            <h1 class="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
              {{ profile.name }}
            </h1>
            <p class="mt-2 text-lg font-medium text-fg sm:text-xl">
              {{ profile.title }}
            </p>
            <p
              class="mx-auto mt-4 max-w-xs text-base leading-relaxed text-muted"
            >
              {{ profile.tagline }}
            </p>

            <SidebarNav
              :items="navItems"
              :active-id="activeSection"
              class="mx-auto mt-8"
              @navigate="scrollToSection"
            />
          </div>

          <SocialLinks
            :links="socialLinks"
            class="mt-10 justify-center lg:mt-0"
          />
        </div>
      </aside>

      <!-- Nội dung phải -->
      <div
        ref="scrollRoot"
        class="scroll-smooth lg:h-[calc(100vh-3rem)] lg:flex-1 lg:snap-y lg:snap-mandatory lg:overflow-y-auto"
      >
        <div class="flex flex-col gap-5 lg:gap-6">
          <SummarySection :paragraphs="summaryParagraphs" />
          <ExperienceSection :items="experienceItems" />
          <ProjectsSection :items="projectItems" />
        </div>
      </div>
    </div>
  </div>
</template>
