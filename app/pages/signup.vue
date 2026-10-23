<template>
  <div class="min-h-screen bg-[#ECE8FB] text-slate-800 flex flex-col justify-center items-center p-3 sm:p-6 md:p-10 relative selection:bg-purple-600 selection:text-white font-sans overflow-hidden">
    
    <!-- Ambient Background Lighting & Watermarks -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none" aria-hidden="true">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-purple-300/35 rounded-full blur-3xl animate-pulse-glow" />
      <div class="absolute top-1/2 -right-32 w-[32rem] h-[32rem] bg-indigo-200/40 rounded-full blur-3xl" />
      <div class="absolute -bottom-24 left-1/3 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />

      <div class="absolute top-6 left-8 sm:top-10 sm:left-14 opacity-25">
        <p class="text-sm font-bold text-slate-500 uppercase tracking-wider">Create Account</p>
        <p class="text-4xl sm:text-5xl font-black text-indigo-950 tracking-tight">VARAG</p>
      </div>

      <div class="absolute bottom-6 left-12 sm:bottom-10 sm:left-20 opacity-30">
        <p class="text-sm font-semibold text-slate-500">
          Already have an account? <span class="text-purple-600 underline">Log in</span>
        </p>
      </div>
    </div>

    <!-- The Auth Card Component in Sign Up mode -->
    <AuthCard initial-mode="signup" />

    <!-- Mobile Quick Nav to Library -->
    <div class="mt-4 text-center">
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
  title: 'Sign Up - VARAG Digital Library',
  meta: [
    { name: 'description', content: 'Create a VARAG digital library account to upload, read, and manage your PDF and EPUB collections.' }
  ]
})
</script>
