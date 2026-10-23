import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          primary: '#5B68F6',
          purple: '#6B62FF',
          dark: '#1E1B4B'
        },
        surface: {
          bg: '#EBE7FB',
          card: '#FFFFFF',
          sidebar: '#FFFFFF',
          canvas: '#F5F3FD',
          muted: '#8E95A9',
          light: '#F8F9FD'
        }
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px'
      },
      boxShadow: {
        'portal': '0 25px 60px -15px rgba(110, 89, 209, 0.15), 0 0 1px 1px rgba(110, 89, 209, 0.05)',
        'card-soft': '0 10px 30px -10px rgba(99, 102, 241, 0.08)',
        'card-hover': '0 20px 35px -10px rgba(99, 102, 241, 0.18)',
        'banner': '0 15px 35px -5px rgba(91, 104, 246, 0.35)',
        'glow': '0 0 25px rgba(99, 102, 241, 0.4)'
      }
    }
  }
}
