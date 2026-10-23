<template>
  <footer class="border-t border-indigo-100/80 dark:border-purple-900/40 bg-white/70 dark:bg-[#0F0B21]/90 backdrop-blur-md pt-12 sm:pt-16 pb-8 px-4 sm:px-8 text-slate-600 dark:text-slate-300 transition-colors">
    <div class="max-w-7xl mx-auto space-y-12">
      
      <!-- Social Media Connect Cards Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-purple-50/50 to-pink-50/40 dark:from-[#181233] dark:via-[#1F1742] dark:to-[#140E2D] border border-indigo-100/80 dark:border-purple-900/40 shadow-sm">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/70 dark:bg-purple-900/40 text-indigo-700 dark:text-purple-300 text-xs font-bold mb-2">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Connect With Us</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Join the VARAG Digital Community
            </h3>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Follow our latest literary curation, anime library drops, and open-source updates.
            </p>
          </div>

          <!-- Quick Return to Top -->
          <button
            type="button"
            @click="scrollToTop"
            class="px-4 py-2 rounded-xl bg-white/80 dark:bg-purple-950/60 hover:bg-white dark:hover:bg-purple-900/60 border border-slate-200/80 dark:border-purple-900/50 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-sm flex items-center gap-1.5 group cursor-pointer transition-all"
          >
            <span>Back to top</span>
            <svg class="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        <!-- Social Media 3-Card Grid: Instagram / Telegram / GitHub -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <!-- 1. Instagram Card -->
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#16112E] hover:bg-white dark:hover:bg-[#1E173E] border border-slate-200/70 dark:border-purple-900/40 shadow-sm hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4 overflow-hidden"
          >
            <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-tr from-amber-400/20 via-pink-500/20 to-purple-600/20 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
            
            <div class="flex items-center gap-3.5 z-10">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 shadow-md shadow-pink-500/25 flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                <div class="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center text-white">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </div>
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="text-sm font-black text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Instagram</span>
                  <span class="text-[10px] font-bold px-1.5 py-0.2 rounded bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-300 border border-pink-100 dark:border-pink-900/40">Visuals</span>
                </div>
                <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">@varag.library</p>
                <p class="text-[11px] text-slate-400 dark:text-slate-500">Book art & retro aesthetics</p>
              </div>
            </div>

            <div class="z-10 w-8 h-8 rounded-full bg-slate-100 dark:bg-purple-950/60 flex items-center justify-center text-slate-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 group-hover:translate-x-0.5 transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

          <!-- 2. Telegram Card -->
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#16112E] hover:bg-white dark:hover:bg-[#1E173E] border border-slate-200/70 dark:border-purple-900/40 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4 overflow-hidden"
          >
            <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-tr from-sky-400/20 via-blue-500/20 to-indigo-600/20 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

            <div class="flex items-center gap-3.5 z-10">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-600 p-0.5 shadow-md shadow-sky-500/25 flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                <div class="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center text-white">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </div>
              </div>
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="text-sm font-black text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Telegram</span>
                  <span class="text-[10px] font-bold px-1.5 py-0.2 rounded bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-300 border border-sky-100 dark:border-sky-900/40">Channel</span>
                </div>
                <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">@varag_vault</p>
                <p class="text-[11px] text-slate-400 dark:text-slate-500">Book announcements & drops</p>
              </div>
            </div>

            <div class="z-10 w-8 h-8 rounded-full bg-slate-100 dark:bg-purple-950/60 flex items-center justify-center text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

          <!-- 3. GitHub Card -->
          <a
            href="https://github.com/HesamPourabbasian/VARAG"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#16112E] hover:bg-white dark:hover:bg-[#1E173E] border border-slate-200/70 dark:border-purple-900/40 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4 overflow-hidden"
          >
            <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-slate-900/20 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

            <div class="flex items-center gap-3.5 z-10">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-slate-700 via-indigo-600 to-purple-700 p-0.5 shadow-md shadow-slate-950/20 flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                <div class="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center text-white">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
              </div>
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="text-sm font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors">GitHub</span>
                  <span class="text-[10px] font-bold px-1.5 py-0.2 rounded bg-indigo-50 dark:bg-purple-950/50 text-indigo-600 dark:text-purple-300 border border-indigo-100 dark:border-purple-900/40">Repo</span>
                </div>
                <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">HesamPourabbasian/VARAG</p>
                <p class="text-[11px] text-slate-400 dark:text-slate-500">Source code & documentation</p>
              </div>
            </div>

            <div class="z-10 w-8 h-8 rounded-full bg-slate-100 dark:bg-purple-950/60 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

        </div>
      </div>

      <!-- Main Navigation Columns -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-4">
        
        <!-- Column 1: Brand & Philosophy (5 Cols) -->
        <div class="md:col-span-5 space-y-4">
          <NuxtLink to="/" class="flex items-center gap-3 group w-fit">
            <div class="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 shadow-md shadow-indigo-500/10 border border-indigo-100 dark:border-purple-900/50 flex items-center justify-center overflow-hidden p-0.5 group-hover:scale-105 transition-transform">
              <img src="/logo.png" alt="VARAG" class="w-full h-full object-contain rounded-lg" />
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <span class="text-xl font-black text-slate-900 dark:text-white tracking-tight">VARAG</span>
                <span class="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-indigo-50 dark:bg-purple-900/40 text-indigo-600 dark:text-purple-300 border border-indigo-100 dark:border-purple-800/40">ورق</span>
              </div>
              <p class="text-[11px] text-slate-400 dark:text-slate-500 font-medium">Digital Book Vault & Hub</p>
            </div>
          </NuxtLink>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
            Step through the digital looking glass into our reading sanctuary. Explore curated literature, manage personal EPUBs and PDFs, and discover timeless adventures.
          </p>

          <div class="flex items-center gap-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Digital Vault Service Operational</span>
            <span class="text-slate-300 dark:text-slate-700">•</span>
            <span class="font-mono text-[11px]">v2.4.0</span>
          </div>
        </div>

        <!-- Column 2: Chapters & Exploration (3 Cols) -->
        <div class="md:col-span-3 space-y-3">
          <p class="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Explore Stories
          </p>
          <ul class="space-y-2 text-xs">
            <li>
              <button
                type="button"
                @click="scrollToChapter('portal')"
                class="hover:text-indigo-600 dark:hover:text-purple-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
              >
                <span class="text-purple-400">01</span>
                <span>The Gateway Portal</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="scrollToChapter('curiosity')"
                class="hover:text-indigo-600 dark:hover:text-purple-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
              >
                <span class="text-purple-400">02</span>
                <span>Curiosity & Wonder</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="scrollToChapter('vault')"
                class="hover:text-indigo-600 dark:hover:text-purple-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
              >
                <span class="text-purple-400">03</span>
                <span>The Grand Vault</span>
              </button>
            </li>
            <li>
              <NuxtLink
                to="/library"
                class="hover:text-indigo-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5"
              >
                <span class="text-purple-400">✦</span>
                <span>Interactive Library</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Quick Navigation (4 Cols) -->
        <div class="md:col-span-4 space-y-3">
          <p class="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Library & Account
          </p>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="space-y-2">
              <NuxtLink to="/library" class="block hover:text-indigo-600 dark:hover:text-purple-400 transition-colors">
                Public Library
              </NuxtLink>
              <NuxtLink to="/login" class="block hover:text-indigo-600 dark:hover:text-purple-400 transition-colors">
                Reader Sign In
              </NuxtLink>
              <NuxtLink to="/signup" class="block hover:text-indigo-600 dark:hover:text-purple-400 transition-colors">
                Create Account
              </NuxtLink>
            </div>
            <div class="space-y-2 text-slate-500 dark:text-slate-400">
              <span class="block text-slate-400 dark:text-slate-500">Universal PDF Reader</span>
              <span class="block text-slate-400 dark:text-slate-500">EPUB Vault Ingestion</span>
              <span class="block text-slate-400 dark:text-slate-500">Offline Reading Sync</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Bar: Copyright & Attribution -->
      <div class="pt-8 border-t border-slate-200/60 dark:border-purple-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div class="flex items-center gap-2">
          <span>© 2026 VARAG (ورق). All rights reserved.</span>
          <span class="hidden sm:inline">•</span>
          <span class="hidden sm:inline">Crafted with curiosity & wonder.</span>
        </div>

        <div class="flex items-center gap-4 text-[11px] font-medium">
          <NuxtLink to="/library" class="hover:text-indigo-600 dark:hover:text-purple-400 transition-colors">
            Catalog
          </NuxtLink>
          <NuxtLink to="/login" class="hover:text-indigo-600 dark:hover:text-purple-400 transition-colors">
            Login
          </NuxtLink>
          <NuxtLink to="/signup" class="hover:text-indigo-600 dark:hover:text-purple-400 transition-colors">
            Sign Up
          </NuxtLink>
          <a
            href="https://github.com/HesamPourabbasian/VARAG"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-indigo-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const scrollToChapter = (chapterId: string) => {
  if (typeof window !== 'undefined') {
    const el = document.getElementById(chapterId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
