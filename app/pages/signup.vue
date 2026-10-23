<template>
  <div class="min-h-screen bg-[#ECE8FB] dark:bg-[#0C091C] text-slate-800 dark:text-slate-100 flex flex-col justify-center items-center p-3 sm:p-5 md:p-6 relative selection:bg-purple-600 selection:text-white font-sans overflow-x-hidden transition-colors duration-300">
    
    <!-- Ambient Background Lighting & Depth Blobs -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none" aria-hidden="true">
      <div class="absolute -top-24 -left-24 w-72 h-72 bg-purple-300/30 dark:bg-purple-900/25 rounded-full blur-3xl animate-pulse-glow" />
      <div class="absolute top-1/2 -right-32 w-80 h-80 bg-indigo-200/35 dark:bg-indigo-950/30 rounded-full blur-3xl" />
      <div class="absolute -bottom-24 left-1/3 w-72 h-72 bg-pink-200/25 dark:bg-pink-950/20 rounded-full blur-3xl" />
    </div>

    <!-- Top Navigation Bar (Logo Brand & Theme Toggle) -->
    <header class="w-full max-w-[720px] lg:max-w-[780px] flex items-center justify-between py-2 mb-2 px-1">
      <NuxtLink to="/" class="flex items-center gap-2.5 group">
        <div class="w-8 h-8 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-indigo-100 dark:border-purple-900/50 flex items-center justify-center overflow-hidden p-0.5 group-hover:scale-105 transition-transform">
          <img src="/logo.png" alt="VARAG" class="w-full h-full object-contain rounded-lg" />
        </div>
        <div class="flex items-center gap-1.5">
          <span class="text-sm font-black text-slate-900 dark:text-white tracking-tight">VARAG</span>
          <span class="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 border border-purple-100 dark:border-purple-800/40">ورق</span>
        </div>
      </NuxtLink>

      <div class="flex items-center gap-2">
        <button
          @click="toggleTheme"
          class="p-2 text-slate-500 dark:text-amber-300 hover:text-indigo-600 dark:hover:text-amber-200 rounded-full hover:bg-white/80 dark:hover:bg-purple-900/40 transition-colors shadow-sm bg-white/60 dark:bg-[#16122B]/80 border border-slate-200/60 dark:border-purple-900/40 cursor-pointer"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <component :is="isDark ? Sun : Moon" class="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
        </button>
      </div>
    </header>

    <!-- The Auth Card Component in Sign Up mode -->
    <AuthCard initial-mode="signup" />

    <!-- Quick Nav to Library -->
    <div class="mt-3 text-center">
      <NuxtLink
        to="/library"
        class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors"
      >
        <span>← Return to Public Library</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import AuthCard from '~/components/AuthCard.vue'
import { useTheme } from '~/composables/useTheme'

useHead({
  title: 'Sign Up - VARAG Digital Library',
  meta: [
    { name: 'description', content: 'Create a VARAG digital library account to upload, read, and manage your PDF and EPUB collections.' }
  ]
})

const { isDark, toggleTheme } = useTheme()
</script>
