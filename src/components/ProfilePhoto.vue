<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: 'Profile photo' },
})

/**
 * Kích thước ảnh (để lần sau bạn chỉ cần nói +/- px):
 *
 * TRƯỚC:
 *   - Rộng: 176px (w-44) / 192px sm (w-48)
 *   - Cao (tự tính aspect 4:5): 220px / 240px sm
 *   - Khoảng cách: margin-bottom 24px (mb-6)
 *
 * SAU (lần chỉnh này):
 *   - Rộng: giữ nguyên 176px / 192px sm
 *   - Cao: giảm 28px → 192px (h-48) / giảm 32px sm → 208px (h-52)
 *   - Đẩy lên: margin-top -16px (-mt-4)
 *   - Khoảng cách dưới ảnh: giảm 4px (mb-6 → mb-5, tức 24px → 20px)
 */
</script>

<template>
  <div class="-mt-4 mb-5 flex justify-center">
    <img
      :src="src"
      :alt="alt"
      width="176"
      height="192"
      class="h-48 w-44 rounded-2xl object-cover object-[center_18%] shadow-lg ring-1 ring-accent/25 sm:h-52 sm:w-48"
      loading="eager"
      decoding="async"
    />
  </div>
</template>
