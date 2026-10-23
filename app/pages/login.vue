<template>
  <div class="min-h-screen bg-[#ECE8FB] dark:bg-[#0C091C] text-slate-800 dark:text-slate-100 flex flex-col justify-center items-center p-2 sm:p-4 md:p-5 relative selection:bg-purple-600 selection:text-white font-sans overflow-x-hidden transition-colors duration-300">
    
    <!-- Top Bar Controls (Theme toggle & Brand) -->
    <div class="absolute top-4 right-4 z-30">
      <button
        @click="toggleTheme"
        class="p-2 text-slate-500 dark:text-amber-300 hover:text-indigo-600 dark:hover:text-amber-200 rounded-full hover:bg-slate-200/60 dark:hover:bg-purple-900/40 transition-colors"
        :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
      >
        <component :is="isDark ? Sun : Moon" class="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
      </button>
    </div>

    <!-- Ambient Background Lighting & Watermark Echoes (Matching login.webp presentation canvas) -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none" aria-hidden="true">
      <div class="absolute -top-24 -left-24 w-72 h-72 bg-purple-300/30 dark:bg-purple-900/25 rounded-full blur-3xl animate-pulse-glow" />
      <div class="absolute top-1/2 -right-32 w-80 h-80 bg-indigo-200/35 dark:bg-indigo-950/30 rounded-full blur-3xl" />
      <div class="absolute -bottom-24 left-1/3 w-72 h-72 bg-pink-200/25 dark:bg-pink-950/20 rounded-full blur-3xl" />

      <div class="hidden xl:block absolute top-6 left-10 opacity-20">
        <p class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Welcome to</p>
        <p class="text-2xl font-black text-indigo-950 dark:text-purple-200 tracking-tight">VARAG</p>
      </div>

      <div class="hidden xl:block absolute bottom-6 left-14 opacity-25">
        <p class="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Dont have an account? <span class="text-purple-600 dark:text-purple-400 underline">Sign up</span>
        </p>
      </div>
    </div>

    <!-- The Auth Card Component -->
    <AuthCard initial-mode="login" />

    <!-- Quick Nav to Library -->
    <div class="mt-2.5 text-center">
      <NuxtLink
        to="/library"
        class="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors"
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
  title: 'Log In - VARAG Digital Library',
  meta: [
    { name: 'description', content: 'Log in to your VARAG digital library and vault to manage and read PDFs and EPUBs.' }
  ]
})

const { isDark, toggleTheme } = useTheme()
</script>
