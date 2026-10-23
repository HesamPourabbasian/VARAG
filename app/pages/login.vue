<template>
  <div class="min-h-screen bg-[#ECE8FB] text-slate-800 flex flex-col justify-center items-center p-3 sm:p-5 md:p-6 relative selection:bg-purple-600 selection:text-white font-sans overflow-hidden">
    
    <!-- Ambient Background Lighting & Watermark Echoes (Matching login.webp presentation canvas) -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none" aria-hidden="true">
      <!-- Glow orbs -->
      <div class="absolute -top-24 -left-24 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl animate-pulse-glow" />
      <div class="absolute top-1/2 -right-32 w-96 h-96 bg-indigo-200/35 rounded-full blur-3xl" />
      <div class="absolute -bottom-24 left-1/3 w-80 h-80 bg-pink-200/25 rounded-full blur-3xl" />

      <!-- Top-left background watermark echo from login.webp canvas (hidden on mobile, subtle on desktop) -->
      <div class="hidden lg:block absolute top-6 left-10 opacity-20">
        <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">Welcome to</p>
        <p class="text-3xl font-black text-indigo-950 tracking-tight">VARAG</p>
      </div>

      <!-- Bottom background watermark echo from login.webp canvas -->
      <div class="hidden lg:block absolute bottom-6 left-14 opacity-25">
        <p class="text-xs font-semibold text-slate-500">
          Dont have an account? <span class="text-purple-600 underline">Sign up</span>
        </p>
      </div>
    </div>

    <!-- The Auth Card Component -->
    <AuthCard initial-mode="login" />

    <!-- Mobile Quick Nav to Library -->
    <div class="mt-3 text-center">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-indigo-600 transition-colors"
      >
        <span>← Return to Public Library</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthCard from '~/components/AuthCard.vue'

useHead({
  title: 'Log In - VARAG Digital Library',
  meta: [
    { name: 'description', content: 'Log in to your VARAG digital library and vault to manage and read PDFs and EPUBs.' }
  ]
})
</script>
