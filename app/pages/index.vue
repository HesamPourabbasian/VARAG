<template>
  <div class="min-h-screen bg-[#F4F1FD] dark:bg-[#0C091C] text-slate-800 dark:text-slate-100 font-sans selection:bg-indigo-600 selection:text-white relative overflow-x-hidden transition-colors duration-300">
    
    <!-- Ambient Floating Background Blobs -->
    <div class="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none" aria-hidden="true">
      <div class="absolute -top-32 -left-32 w-[34rem] h-[34rem] bg-purple-300/35 dark:bg-purple-900/25 rounded-full blur-3xl animate-pulse-glow" />
      <div class="absolute top-1/3 -right-36 w-[38rem] h-[38rem] bg-indigo-200/40 dark:bg-indigo-950/30 rounded-full blur-3xl" />
      <div class="absolute top-2/3 -left-28 w-[32rem] h-[32rem] bg-pink-200/30 dark:bg-pink-950/20 rounded-full blur-3xl" />
      <div class="absolute -bottom-32 right-1/4 w-[36rem] h-[36rem] bg-purple-200/35 dark:bg-purple-900/25 rounded-full blur-3xl" />
    </div>

    <!-- Sticky Navigation Header -->
    <header class="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#16122B]/85 border-b border-indigo-50/80 dark:border-purple-900/40 px-4 sm:px-8 py-3.5 transition-all shadow-sm">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Brand Logo & Title -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 shadow-md shadow-indigo-500/15 border border-indigo-100 dark:border-purple-900/50 flex items-center justify-center overflow-hidden p-0.5 group-hover:scale-105 transition-transform">
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

        <!-- Action CTA Buttons (SPECIFIC BUTTON TO ENTER LANDING PAGE + DARK MODE TOGGLE) -->
        <div class="flex items-center gap-2.5">
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 text-slate-500 dark:text-amber-300 hover:text-indigo-600 dark:hover:text-amber-200 rounded-full hover:bg-slate-100 dark:hover:bg-purple-900/40 transition-colors"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
            :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            <component :is="isDark ? Sun : Moon" class="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
          </button>

          <NuxtLink
            to="/login"
            class="hidden sm:inline-flex px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-purple-300 hover:bg-indigo-50/60 dark:hover:bg-purple-900/40 transition-colors"
          >
            Log In
          </NuxtLink>

          <!-- The Specific Enter Landing Page Button -->
          <NuxtLink
            to="/library"
            class="group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Enter Library</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Hero Intro Section with 80s Japanese Anime Background Image (100% Full Width) -->
    <section class="relative w-full overflow-hidden text-center text-white min-h-[580px] md:min-h-[640px] lg:min-h-[700px] flex flex-col justify-center items-center shadow-2xl border-b border-indigo-100/30 dark:border-purple-900/40">
      <!-- 80s Japanese Anime Background Image spanning 100% full width (Static Background) -->
      <img
        src="/hero-anime.webp"
        alt="1980s Retro Japanese Anime Library Background"
        class="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] pointer-events-none select-none"
        loading="eager"
      />

      <!-- Multi-layer contrast and gradient overlays for text readability -->
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/60 to-slate-950/90 pointer-events-none" />
      <div class="absolute inset-0 bg-indigo-950/25 mix-blend-multiply pointer-events-none" />

      <!-- Floating 80s Anime Badge (Top Left Corner) -->
      <div class="absolute top-4 left-4 sm:top-6 sm:left-8 z-20 flex items-center gap-2">
        <div class="px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold text-amber-300 flex items-center gap-1.5 shadow-md">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span>1980s Anime Edition • ヴァラグ 昭和アニメ</span>
        </div>
      </div>

      <!-- Foreground Content: ALL intro texts directly on the full-width background illustration -->
      <div class="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-20 md:py-24 space-y-6">
        <!-- Main Title -->
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
          Where Every Story Begins With
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-300 to-indigo-200">
            Curiosity & Wonder
          </span>
        </h1>

        <!-- Primary Action Buttons in Hero -->
        <div class="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <!-- SPECIFIC MAIN ENTRY BUTTON -->
          <NuxtLink
            to="/library"
            class="px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-extrabold text-sm shadow-xl shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2.5"
          >
            <span>Enter VARAG Library Portal</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>

          <button
            type="button"
            @click="scrollToChapter('portal')"
            class="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-sm border border-white/30 shadow-md transition-all duration-200 flex items-center gap-2"
          >
            <span>Explore Chapters</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <!-- Feature Pill Badges directly in the hero container -->
        <div class="flex flex-wrap justify-center items-center gap-3 sm:gap-4 pt-4 text-xs">
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 text-white shadow-md">
            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <span class="font-semibold text-slate-200">Universal PDF & EPUB Ingestion</span>
          </div>
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 text-white shadow-md">
            <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <span class="font-semibold text-slate-200">1980s Retro Anime Library</span>
          </div>
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 text-white shadow-md">
            <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <span class="font-semibold text-slate-200">Offline Synced Reading Vault</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PARALLEL STORYTELLING SECTIONS (Chapters 1, 2, 3) -->
    <main class="max-w-7xl mx-auto px-4 sm:px-8 space-y-20 sm:space-y-32 pt-16 sm:pt-20 pb-24">
      
      <!-- CHAPTER 1: The Gateway to Wonder (page3.webp) -->
      <section id="portal" class="scroll-mt-24">
        <div class="bg-white/90 dark:bg-[#16122B] rounded-3xl md:rounded-[40px] border border-white/80 dark:border-purple-900/40 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.15)] dark:shadow-2xl dark:shadow-purple-950/40 p-6 sm:p-10 md:p-14 overflow-hidden transition-colors">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <!-- Parallel Text Column (Left) -->
            <div class="lg:col-span-5 space-y-5">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50 text-xs font-bold tracking-wider uppercase">
                <span>Chapter 01</span>
                <span>•</span>
                <span>The Portal</span>
              </div>

              <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Step Through the Portal of Curiosity
              </h2>

              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Every profound reading journey begins with an unexpected doorway. Like following the hurried rabbit into the glowing hollow of the ancient tree, VARAG opens a secret portal into a treasury of ideas, knowledge, and imagination.
              </p>

              <!-- Feature Highlights Checklist -->
              <ul class="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <li class="flex items-start gap-2.5">
                  <div class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Instant portal access to thousands of curated digital publications.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <div class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>High-speed semantic search across titles, authors, and genres.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <div class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Zero clutter — only pure reading serenity and modern elegance.</span>
                </li>
              </ul>

              <!-- Quick CTA to Library -->
              <div class="pt-4 flex items-center gap-3">
                <NuxtLink
                  to="/library"
                  class="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-purple-600 dark:hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 group"
                >
                  <span>Explore the Portal</span>
                  <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
                <span class="text-xs text-slate-400 dark:text-slate-500">Direct to catalog</span>
              </div>
            </div>

            <!-- Parallel Image Column (Right - page3.webp) -->
            <div class="lg:col-span-7 relative group">
              <!-- Glow backdrop effect -->
              <div class="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-indigo-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div class="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/80 dark:border-purple-900/50 bg-amber-50/30 dark:bg-amber-950/20">
                <img
                  src="/page3.webp"
                  alt="Alice and the White Rabbit at the Glowing Tree Portal"
                  class="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                <!-- Floating Badge Overlay -->
                <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/80 dark:border-purple-900/50 shadow-lg text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
                  <span>Curiosity Unlocked • Follow the White Rabbit</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- CHAPTER 2: The Vortex of Leaves & Books (page2.webp) -->
      <section id="vortex" class="scroll-mt-24">
        <div class="bg-white/90 dark:bg-[#16122B] rounded-3xl md:rounded-[40px] border border-white/80 dark:border-purple-900/40 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.15)] dark:shadow-2xl dark:shadow-purple-950/40 p-6 sm:p-10 md:p-14 overflow-hidden transition-colors">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <!-- Parallel Image Column (Left on Desktop - page2.webp) -->
            <div class="lg:col-span-7 relative group order-2 lg:order-1">
              <!-- Glow backdrop effect -->
              <div class="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div class="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/80 dark:border-purple-900/50 bg-indigo-950/20">
                <img
                  src="/page2.webp"
                  alt="Alice tumbling down the vortex of flying book pages, keys, and clocks"
                  class="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                <!-- Floating Badge Overlay -->
                <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/80 dark:border-purple-900/50 shadow-lg text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
                  <span class="text-base">📖</span>
                  <span>The Infinite Vault • Every Page (ورق) Preserved</span>
                </div>
              </div>
            </div>

            <!-- Parallel Text Column (Right on Desktop) -->
            <div class="lg:col-span-5 space-y-5 order-1 lg:order-2">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50 text-xs font-bold tracking-wider uppercase">
                <span>Chapter 02</span>
                <span>•</span>
                <span>The Vortex Vault</span>
              </div>

              <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Falling into an Endless Sea of Knowledge
              </h2>

              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                In Persian, <em>VARAG (ورق)</em> is the living leaf of a book—the physical spark of a written thought. As Alice tumbles through flying manuscripts and floating golden keys, VARAG catches and cradles every volume you upload into permanent digital sanctuary.
              </p>

              <!-- Feature Highlights Checklist -->
              <ul class="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <li class="flex items-start gap-2.5">
                  <div class="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Universal file drag-and-drop for both PDF and EPUB digital formats.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <div class="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Automated metadata extraction, file size calculation, and cover palette.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <div class="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Offline digital book reader with interactive table of contents.</span>
                </li>
              </ul>

              <!-- Quick CTA to Library -->
              <div class="pt-4 flex items-center gap-3">
                <NuxtLink
                  to="/library"
                  class="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-500/20 flex items-center gap-2 group"
                >
                  <span>Upload & Vault Books</span>
                  <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
                <span class="text-xs text-slate-400 dark:text-slate-500">PDF & EPUB ready</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- CHAPTER 3: The Feast of Shared Stories (page1.webp) -->
      <section id="gathering" class="scroll-mt-24">
        <div class="bg-white/90 dark:bg-[#16122B] rounded-3xl md:rounded-[40px] border border-white/80 dark:border-purple-900/40 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.15)] dark:shadow-2xl dark:shadow-purple-950/40 p-6 sm:p-10 md:p-14 overflow-hidden transition-colors">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <!-- Parallel Text Column (Left) -->
            <div class="lg:col-span-5 space-y-5">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50 text-xs font-bold tracking-wider uppercase">
                <span>Chapter 03</span>
                <span>•</span>
                <span>The Community Banquet</span>
              </div>

              <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                A Feast of Knowledge Shared Together
              </h2>

              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Stories taste sweeter when savored in good company. Gather at the Mad Hatter’s grand banquet of literature—track reading goals with fellow book lovers, unlock milestones, and immerse yourself in community masterclasses.
              </p>

              <!-- Feature Highlights Checklist -->
              <ul class="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <li class="flex items-start gap-2.5">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Reading milestones, circular progress gauges, and streak tracking.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Ranked Best-Sellers and trending author recommendations.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Interactive course modules and literary discussions.</span>
                </li>
              </ul>

              <!-- Quick CTA to Library -->
              <div class="pt-4 flex items-center gap-3">
                <NuxtLink
                  to="/library"
                  class="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-500/20 flex items-center gap-2 group"
                >
                  <span>Join the Tea Party</span>
                  <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
                <span class="text-xs text-slate-400 dark:text-slate-500">Discover achievements</span>
              </div>
            </div>

            <!-- Parallel Image Column (Right - page1.webp) -->
            <div class="lg:col-span-7 relative group">
              <!-- Glow backdrop effect -->
              <div class="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-purple-600/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div class="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/80 dark:border-purple-900/50 bg-emerald-50/30 dark:bg-emerald-950/20">
                <img
                  src="/page1.webp"
                  alt="Mad Hatter, Alice, and the Cheshire Cat Tea Party"
                  class="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                <!-- Floating Badge Overlay -->
                <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/80 dark:border-purple-900/50 shadow-lg text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
                  <span class="text-base">☕</span>
                  <span>The Grand Tea Party • Stories Are Meant to Be Shared</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>

    <!-- FINAL CALL TO ACTION (The Master Button to Enter Landing Page) -->
    <section class="max-w-6xl mx-auto px-4 sm:px-8 pb-20">
      <div class="relative rounded-3xl md:rounded-[44px] bg-gradient-to-br from-[#1E1242] via-[#2D1660] to-[#431B82] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl text-center space-y-6 border border-indigo-400/20">
        
        <!-- Ambient decorative shapes inside banner -->
        <div class="absolute -top-24 -left-24 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
        <div class="absolute -bottom-24 -right-24 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl pointer-events-none" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div class="relative z-10 space-y-3 max-w-2xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-purple-200">
            <span>✨ Your Digital Reading Vault Awaits</span>
          </div>

          <h2 class="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Begin Your Adventure in
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-300 to-indigo-200">
              VARAG
            </span>?
          </h2>

          <p class="text-xs sm:text-sm md:text-base text-purple-200/90 font-normal leading-relaxed max-w-xl mx-auto">
            Access the full 3D interactive dashboard, browse popular collections, upload personal PDFs & EPUBs, and unlock daily reading achievements.
          </p>
        </div>

        <!-- THE PROMINENT SPECIFIC ENTRY BUTTON -->
        <div class="relative z-10 pt-2 flex flex-wrap items-center justify-center gap-4">
          <NuxtLink
            to="/library"
            class="px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-extrabold text-sm sm:text-base shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 active:scale-98 transition-all duration-300 flex items-center gap-3"
          >
            <span>Enter the VARAG Library</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/signup"
            class="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm border border-white/20 transition-all duration-200"
          >
            Create Reader Account
          </NuxtLink>
        </div>

        <p class="relative z-10 text-[11px] text-purple-300/70 pt-2">
          Free digital vault • Instant access • No download required
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-indigo-100/80 dark:border-purple-900/40 bg-white/60 dark:bg-[#120E24]/80 backdrop-blur-sm py-8 px-4 sm:px-8 text-center text-xs text-slate-500 dark:text-slate-400">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="VARAG" class="w-6 h-6 object-contain" />
          <span class="font-bold text-slate-800 dark:text-slate-200">VARAG (ورق)</span>
          <span>— Modern Digital Book Library & Vault</span>
        </div>
        
        <div class="flex items-center gap-4 font-semibold text-slate-600 dark:text-slate-300">
          <NuxtLink to="/library" class="hover:text-indigo-600 dark:hover:text-purple-400">Library Catalog</NuxtLink>
          <NuxtLink to="/login" class="hover:text-indigo-600 dark:hover:text-purple-400">Sign In</NuxtLink>
          <NuxtLink to="/signup" class="hover:text-indigo-600 dark:hover:text-purple-400">Sign Up</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '~/composables/useTheme'

useHead({
  title: 'VARAG - Explore the Digital Book Library & Vault',
  meta: [
    {
      name: 'description',
      content: 'Welcome to VARAG (ورق). Step through the digital looking glass into an enchanted book vault featuring PDF and EPUB library management.'
    }
  ]
})

const { isDark, toggleTheme } = useTheme()
const activeChapter = ref('portal')

const chapters = [
  { id: 'portal', navTitle: 'The Portal' },
  { id: 'vortex', navTitle: 'The Vortex' },
  { id: 'gathering', navTitle: 'The Banquet' }
]

const scrollToChapter = (id: string) => {
  activeChapter.value = id
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

// Update active chapter on scroll
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeChapter.value = entry.target.id
        }
      })
    },
    { threshold: 0.4 }
  )

  chapters.forEach((c) => {
    const el = document.getElementById(c.id)
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
