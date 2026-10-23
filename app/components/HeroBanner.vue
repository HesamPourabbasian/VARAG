<template>
  <div class="relative w-full rounded-3xl bg-gradient-to-r from-[#5969F6] via-[#686EF5] to-[#7E6EF7] p-6 md:p-8 text-white overflow-hidden shadow-banner transition-all duration-300">
    <!-- Subtle Background Sparkles & Dots (Matching screenshot) -->
    <div class="absolute inset-0 pointer-events-none select-none">
      <div class="absolute top-4 left-1/4 w-2 h-2 rounded-full bg-amber-300/80 animate-pulse" />
      <div class="absolute top-1/2 left-2/5 w-1.5 h-1.5 rounded-full bg-cyan-300/70" />
      <div class="absolute bottom-6 left-1/3 w-2 h-2 rounded-full bg-purple-200/60" />
      <div class="absolute top-6 right-1/4 w-3 h-3 rounded-full border-2 border-amber-300/60" />
      <div class="absolute bottom-10 right-1/3 w-1.5 h-1.5 rounded-full bg-white/80" />
      <div class="absolute -top-16 -right-16 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
    </div>

    <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Left 3D Illustration: Stack of 3D Books with Golden Glasses (Exact match to screenshot) -->
      <div class="hidden lg:flex items-center justify-center w-52 h-44 flex-shrink-0 animate-float-slow">
        <svg viewBox="0 0 220 180" fill="none" class="w-full h-full drop-shadow-[0_15px_25px_rgba(30,27,75,0.35)]">
          <!-- Shadow underneath -->
          <ellipse cx="110" cy="165" rx="75" ry="12" fill="#312E81" fill-opacity="0.25" />

          <!-- Bottom Book: Orange/Coral Hardcover -->
          <g>
            <rect x="40" y="130" width="140" height="26" rx="6" fill="#F97316" />
            <rect x="40" y="148" width="140" height="8" rx="4" fill="#C2410C" />
            <rect x="45" y="134" width="130" height="14" rx="3" fill="#FFFFFF" />
            <!-- Pages lines -->
            <line x1="50" y1="138" x2="170" y2="138" stroke="#E2E8F0" stroke-width="1.5" />
            <line x1="50" y1="143" x2="170" y2="143" stroke="#CBD5E1" stroke-width="1.5" />
          </g>

          <!-- Middle Book: Bright Purple Hardcover with Bookmark -->
          <g transform="translate(6, -24)">
            <rect x="36" y="120" width="144" height="26" rx="6" fill="#8B5CF6" />
            <rect x="36" y="138" width="144" height="8" rx="4" fill="#6D28D9" />
            <rect x="42" y="124" width="132" height="14" rx="3" fill="#F8FAFC" />
            <line x1="48" y1="128" x2="168" y2="128" stroke="#E2E8F0" stroke-width="1.5" />
            <line x1="48" y1="133" x2="168" y2="133" stroke="#CBD5E1" stroke-width="1.5" />
            <!-- White dangling bookmark -->
            <path d="M150 120 L150 148 L155 142 L160 148 L160 120 Z" fill="#FFFFFF" />
          </g>

          <!-- Top Book: Mint / Lime Green Hardcover -->
          <g transform="translate(14, -48)">
            <rect x="40" y="120" width="124" height="22" rx="5" fill="#10B981" />
            <rect x="40" y="136" width="124" height="6" rx="3" fill="#047857" />
            <rect x="45" y="123" width="114" height="13" rx="2.5" fill="#FFFFFF" />
            <line x1="50" y1="127" x2="154" y2="127" stroke="#E2E8F0" stroke-width="1.5" />
          </g>

          <!-- Pair of Golden Wire Glasses Resting on Top Book (Exact match) -->
          <g transform="translate(18, 52)">
            <!-- Left lens circle -->
            <circle cx="85" cy="24" r="16" stroke="#FBBF24" stroke-width="3" fill="#FEF08A" fill-opacity="0.25" />
            <circle cx="85" cy="24" r="13" stroke="#F59E0B" stroke-width="1" fill="none" />
            <!-- Right lens circle -->
            <circle cx="125" cy="24" r="16" stroke="#FBBF24" stroke-width="3" fill="#FEF08A" fill-opacity="0.25" />
            <circle cx="125" cy="24" r="13" stroke="#F59E0B" stroke-width="1" fill="none" />
            <!-- Bridge -->
            <path d="M101 22 Q105 17 109 22" stroke="#FBBF24" stroke-width="3" fill="none" stroke-linecap="round" />
            <!-- Left temple arm -->
            <path d="M69 24 Q55 20 48 28" stroke="#FBBF24" stroke-width="2.5" fill="none" stroke-linecap="round" />
            <!-- Right temple arm -->
            <path d="M141 24 Q155 20 162 28" stroke="#FBBF24" stroke-width="2.5" fill="none" stroke-linecap="round" />
            <!-- Lens glints -->
            <path d="M80 16 Q85 14 90 16" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
            <path d="M120 16 Q125 14 130 16" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
          </g>
        </svg>
      </div>

      <!-- Center Text & CTAs (Exact copy & layout from screenshot) -->
      <div class="flex-1 text-center md:text-left max-w-xl">
        <p class="text-xs sm:text-sm text-indigo-100/90 font-normal mb-5 leading-relaxed">
          The library serves as a welcoming home for knowledge seekers and avid readers alike. Upload and explore your favorite digital books in PDF and EPUB formats.
        </p>

        <div class="flex flex-wrap items-center justify-center md:justify-start gap-3">
          <!-- Glass button "Learn more" (Exact from screenshot) -->
          <button
            @click="$emit('learn-more')"
            class="px-5 py-2.5 rounded-full text-xs font-semibold text-white glass-banner-btn transition-all duration-200 hover:scale-105 shadow-sm"
          >
            Learn more
          </button>

          <!-- Upload Digital Book CTA -->
          <button
            @click="$emit('open-upload')"
            class="px-5 py-2.5 rounded-full text-xs font-bold text-indigo-700 bg-white hover:bg-indigo-50 transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-950/20 flex items-center gap-2"
          >
            <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <span>Upload Digital Book</span>
          </button>
        </div>
      </div>

      <!-- Right 3D Illustration: Wooden Wall Shelf with Books (Exact match to screenshot) -->
      <div class="hidden lg:flex items-center justify-center w-52 h-44 flex-shrink-0 animate-float-slow">
        <svg viewBox="0 0 220 180" fill="none" class="w-full h-full drop-shadow-[0_15px_25px_rgba(30,27,75,0.35)]">
          <!-- Wall shadow -->
          <ellipse cx="110" cy="155" rx="75" ry="10" fill="#312E81" fill-opacity="0.25" />

          <!-- Wooden Shelf -->
          <!-- Top Surface -->
          <rect x="30" y="115" width="160" height="12" rx="3" fill="#D97706" />
          <rect x="30" y="115" width="160" height="3" fill="#FBBF24" />
          <!-- Front Face -->
          <rect x="30" y="125" width="160" height="10" rx="2" fill="#B45309" />
          <!-- Shelf Brackets -->
          <path d="M48 135 L48 152 L60 135 Z" fill="#92400E" />
          <path d="M172 135 L172 152 L160 135 Z" fill="#92400E" />

          <!-- Stacked / Standing Books on Shelf (Right-aligned, colorful) -->
          <!-- Book 1: Purple upright tall -->
          <g transform="translate(136, 45)">
            <rect x="0" y="0" width="14" height="70" rx="3" fill="#A855F7" />
            <rect x="2" y="3" width="10" height="64" rx="2" fill="#C084FC" />
            <line x1="7" y1="12" x2="7" y2="45" stroke="#FFFFFF" stroke-width="1.5" />
          </g>

          <!-- Book 2: Indigo / Dark Blue upright tall -->
          <g transform="translate(152, 38)">
            <rect x="0" y="0" width="14" height="77" rx="3" fill="#4338CA" />
            <rect x="2" y="3" width="10" height="71" rx="2" fill="#6366F1" />
            <line x1="7" y1="15" x2="7" y2="55" stroke="#E0E7FF" stroke-width="1.5" />
          </g>

          <!-- Book 3: Lilac slightly tilted book -->
          <g transform="translate(168, 48)">
            <rect x="0" y="0" width="14" height="67" rx="3" fill="#C084FC" />
            <rect x="2" y="3" width="10" height="61" rx="2" fill="#E9D5FF" />
          </g>

          <!-- Left Books on Shelf (Laying horizontal) -->
          <!-- Stack of 3 books lying flat on the left of the shelf -->
          <!-- Bottom flat: Yellow -->
          <g transform="translate(42, 98)">
            <rect x="0" y="0" width="75" height="16" rx="3" fill="#FBBF24" />
            <rect x="0" y="12" width="75" height="4" fill="#D97706" />
            <rect x="4" y="3" width="67" height="9" rx="1.5" fill="#FFFFFF" />
          </g>
          <!-- Middle flat: Cyan / Mint -->
          <g transform="translate(44, 82)">
            <rect x="0" y="0" width="70" height="16" rx="3" fill="#06B6D4" />
            <rect x="0" y="12" width="70" height="4" fill="#0891B2" />
            <rect x="4" y="3" width="62" height="9" rx="1.5" fill="#FFFFFF" />
          </g>
          <!-- Top flat: Soft Magenta / Purple -->
          <g transform="translate(48, 66)">
            <rect x="0" y="0" width="62" height="16" rx="3" fill="#EC4899" />
            <rect x="0" y="12" width="62" height="4" fill="#BE185D" />
            <rect x="4" y="3" width="54" height="9" rx="1.5" fill="#FFFFFF" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'learn-more'): void
  (e: 'open-upload'): void
}>()
</script>
