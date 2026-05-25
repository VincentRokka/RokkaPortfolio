import { ref, onMounted, onUnmounted, watch, toValue } from 'vue'

/**
 * Theo dõi section đang hiển thị và scroll tới section khi click nav.
 * @param {import('vue').MaybeRefOrGetter<string[]>} sectionIdsSource
 * @param {import('vue').Ref<HTMLElement | null>} scrollRootRef
 */
export function useScrollSpy(sectionIdsSource, scrollRootRef) {
  const activeSection = ref(toValue(sectionIdsSource)[0] ?? 'summary')

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

  function bindObserver() {
    observer?.disconnect()
    const root = getScrollRoot()
    const sectionIds = toValue(sectionIdsSource)

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
  }

  onMounted(() => {
    bindObserver()
  })

  watch(sectionIdsSource, () => {
    bindObserver()
  })

  onUnmounted(() => observer?.disconnect())

  return { activeSection, scrollToSection }
}
