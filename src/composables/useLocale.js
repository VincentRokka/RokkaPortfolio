import { ref, computed, watch } from 'vue'
import { messages, localeOptions, defaultLocale } from '../i18n/locales.js'

const STORAGE_KEY = 'portfolio-locale'

function readStoredLocale() {
  if (typeof document !== 'undefined') {
    const onRoot = document.documentElement.lang
    if (onRoot === 'ko') return 'kor'
    if (onRoot === 'vi') return 'vie'
    if (onRoot === 'en') return 'eng'
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && messages[stored]) return stored
  } catch {
    /* private mode / blocked storage */
  }

  return defaultLocale
}

function applyHtmlLang(code) {
  const opt = localeOptions.find((o) => o.code === code)
  document.documentElement.lang = opt?.htmlLang ?? 'en'
}

const locale = ref(readStoredLocale())
applyHtmlLang(locale.value)

watch(locale, (code) => {
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    /* ignore */
  }
  applyHtmlLang(code)
})

export function useLocale() {
  const content = computed(() => messages[locale.value])

  function setLocale(code) {
    if (messages[code]) locale.value = code
  }

  return { locale, localeOptions, content, setLocale }
}
