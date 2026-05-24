<script setup>
import SocialIcon from './icons/SocialIcon.vue'

defineProps({
  links: { type: Array, required: true },
})
</script>

<template>
  <ul
    class="mt-8 flex items-center gap-5 lg:mt-0"
    aria-label="Liên kết mạng xã hội"
  >
    <li v-for="link in links" :key="link.name">
      <a
        :href="link.href"
        target="_blank"
        rel="noreferrer noopener"
        class="text-muted transition-colors hover:text-accent"
        :aria-label="link.name"
      >
        <SocialIcon :icon="link.icon" />
      </a>
    </li>
  </ul>
</template>
