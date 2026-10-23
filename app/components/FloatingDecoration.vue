<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none" aria-hidden="true">
    <!-- Ambient ambient glow spots -->
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/40 dark:bg-purple-900/30 rounded-full blur-3xl animate-pulse-glow" />
    <div class="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-indigo-200/50 dark:bg-indigo-950/40 rounded-full blur-3xl" />
    <div class="absolute -bottom-32 left-1/4 w-96 h-96 bg-pink-200/30 dark:bg-pink-950/20 rounded-full blur-3xl" />

    <!-- Top-Left Floating Blurred 3D Open Book (Inspired by landing.webp) -->
    <div class="absolute -top-6 -left-6 md:top-8 md:left-12 lg:left-16 w-32 h-32 md:w-44 md:h-44 opacity-75 dark:opacity-60 blur-[2px] hover:blur-none transition-all duration-700 animate-float-book">
      <svg viewBox="0 0 200 200" fill="none" class="w-full h-full drop-shadow-[0_20px_35px_rgba(99,102,241,0.3)]">
        <!-- Back cover / shadow -->
        <ellipse cx="100" cy="160" rx="70" ry="14" fill="#A5B4FC" fill-opacity="0.3" />
        <!-- Left Book Page fanning -->
        <path d="M98 50 C70 42 35 52 20 62 C20 120 20 135 20 135 C38 124 72 116 98 122 Z" fill="#E0E7FF" stroke="#C7D2FE" stroke-width="2" />
        <path d="M98 46 C70 38 35 48 24 58 C24 116 24 131 24 131 C40 120 74 112 98 118 Z" fill="#EEF2FF" />
        <path d="M98 42 C72 34 38 44 28 54 C28 112 28 127 28 127 C44 116 76 108 98 114 Z" fill="#FFFFFF" />
        <!-- Right Book Page fanning -->
        <path d="M102 50 C130 42 165 52 180 62 C180 120 180 135 180 135 C162 124 128 116 102 122 Z" fill="#C7D2FE" stroke="#A5B4FC" stroke-width="2" />
        <path d="M102 46 C130 38 165 48 176 58 C176 116 176 131 176 131 C160 120 126 112 102 118 Z" fill="#E0E7FF" />
        <path d="M102 42 C128 34 162 44 172 54 C172 112 172 127 172 127 C156 116 124 108 102 114 Z" fill="#FFFFFF" />
        <!-- Center Book Spine -->
        <path d="M98 42 C100 40 100 40 102 42 L102 122 C100 124 100 124 98 122 Z" fill="#6366F1" />
        <!-- Bookmark ribbon dangling -->
        <path d="M100 42 C100 70 104 85 110 105 L104 118 L114 118 L116 95 C108 80 104 65 100 42 Z" fill="#F43F5E" />
      </svg>
    </div>

    <!-- Bottom-Right Floating Blurred 3D Pencil (Inspired by landing.webp) -->
    <div class="absolute -bottom-10 -right-8 md:bottom-12 md:right-16 w-28 h-28 md:w-40 md:h-40 opacity-70 blur-[2px] hover:blur-none transition-all duration-700 animate-float-pencil">
      <svg viewBox="0 0 160 160" fill="none" class="w-full h-full drop-shadow-[0_20px_30px_rgba(234,179,8,0.25)]">
        <!-- Pencil Body -->
        <rect x="70" y="30" width="22" height="85" rx="3" fill="#FBBF24" stroke="#F59E0B" stroke-width="1.5" />
        <rect x="70" y="30" width="7" height="85" fill="#F59E0B" />
        <rect x="85" y="30" width="7" height="85" fill="#FDE68A" />
        <!-- Metal ferrule -->
        <rect x="70" y="20" width="22" height="12" rx="1" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1" />
        <line x1="70" y1="26" x2="92" y2="26" stroke="#94A3B8" stroke-width="1" />
        <!-- Pink Eraser -->
        <path d="M70 20 C70 14 74 10 81 10 C88 10 92 14 92 20 Z" fill="#FB7185" />
        <!-- Pencil Tip / Cone -->
        <polygon points="70,115 92,115 81,142" fill="#FED7AA" stroke="#FDBA74" stroke-width="1" />
        <!-- Graphite tip -->
        <polygon points="77,133 85,133 81,142" fill="#334155" />
      </svg>
    </div>
  </div>
</template>
