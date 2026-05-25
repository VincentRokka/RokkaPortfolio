import { ref, watch } from 'vue'

export const THEME_STORAGE_KEY = 'portfolio-theme'

/** Ban ngày: 06:00–17:59 theo giờ thiết bị */
export function getThemeFromLocalHour(date = new Date()) {
  const hour = date.getHours()
  return hour >= 6 && hour < 18 ? 'day' : 'night'
}

function readInitialTheme() {
  if (typeof document !== 'undefined') {
    const onRoot = document.documentElement.getAttribute('data-theme')
    if (onRoot === 'day' || onRoot === 'night') return onRoot
  }

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'day' || stored === 'night') return stored
  } catch {
    /* ignore */
  }

  return getThemeFromLocalHour()
}

function applyTheme(code) {
  document.documentElement.setAttribute('data-theme', code)
}

const theme = ref(readInitialTheme())
applyTheme(theme.value)

watch(theme, (code) => {
  applyTheme(code)
  try {
    localStorage.setItem(THEME_STORAGE_KEY, code)
  } catch {
    /* ignore */
  }
})

export function useTheme() {
  const isDay = () => theme.value === 'day'

  function setTheme(code) {
    if (code === 'day' || code === 'night') theme.value = code
  }

  function toggleTheme() {
    theme.value = theme.value === 'day' ? 'night' : 'day'
  }

  return { theme, isDay, setTheme, toggleTheme }
}
