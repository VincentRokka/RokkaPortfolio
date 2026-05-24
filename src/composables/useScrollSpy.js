import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Theo dõi section đang hiển thị và scroll tới section khi click nav.
 * @param {string[]} sectionIds
 * @param {import('vue').Ref<HTMLElement | null>} scrollRootRef
 */
export function useScrollSpy(sectionIds, scrollRootRef) {
  const activeSection = ref(sectionIds[0] ?? 'summary')

  function getScrollRoot() {
    const el = scrollRootRef.value
    if (!el) return null
    const style = getComputedStyle(el)
    const scrollable =
      style.overflowY === 'auto' ||
      style.overflowY === 'scroll' ||
      el.scrollHeight > el.clientHeight
    return scrollable ? el : null
  }

  function scrollToSection(id) {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeSection.value = id
  }

  let observer = null

  onMounted(() => {
    const root = getScrollRoot()

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          activeSection.value = visible[0].target.id
        }
      },
      {
        root,
        rootMargin: root ? '0px 0px -40% 0px' : '0px 0px -35% 0px',
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  })

  onUnmounted(() => observer?.disconnect())

  return { activeSection, scrollToSection }
}
