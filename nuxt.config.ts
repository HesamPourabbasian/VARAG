// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'VARAG - Digital Book Library & Vault',
      meta: [
        { name: 'color-scheme', content: 'light dark' },
        { name: 'description', content: 'Explore and upload digital books, PDFs, and EPUBs with VARAG modern library portal inspired by modern 3D UI aesthetics.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      script: [
        {
          children: `(function(){try{var c=document.cookie.match(/varag_theme=([^;]+)/);var t=c?c[1]:(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})()`
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap' }
      ]
    }
  }
})
