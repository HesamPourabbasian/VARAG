import { ref, watch, onMounted } from 'vue'

export const useTheme = () => {
  const themeCookie = useCookie<'light' | 'dark'>('varag_theme', {
    default: () => 'light',
    maxAge: 60 * 60 * 24 * 365 // 1 year
  })

  const isDark = useState<boolean>('is_dark_theme', () => themeCookie.value === 'dark')

  const applyTheme = (dark: boolean) => {
    isDark.value = dark
    themeCookie.value = dark ? 'dark' : 'light'

    if (import.meta.client) {
      if (dark) {
        document.documentElement.classList.add('dark')
        document.documentElement.style.colorScheme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.style.colorScheme = 'light'
      }
    }
  }

  const toggleTheme = () => {
    applyTheme(!isDark.value)
  }

  // Initialize on mount
  if (import.meta.client) {
    onMounted(() => {
      // Check if user has explicit saved preference, otherwise respect system preference
      const savedTheme = themeCookie.value
      if (savedTheme) {
        applyTheme(savedTheme === 'dark')
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme(true)
      } else {
        applyTheme(false)
      }
    })
  }

  return {
    isDark,
    toggleTheme,
    applyTheme
  }
}
