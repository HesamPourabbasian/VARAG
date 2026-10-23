<template>
  <div class="w-full h-full flex items-center justify-center p-3 select-none">
    <!-- 1. Popular 1: Layered colorful 3D book stack (orange, yellow, blue) -->
    <svg v-if="type === 'popular-1'" viewBox="0 0 160 140" fill="none" class="w-full h-full max-h-32 drop-shadow-md">
      <ellipse cx="80" cy="125" rx="55" ry="8" fill="#93C5FD" fill-opacity="0.4" />
      <!-- Bottom book: Royal Blue -->
      <g transform="translate(20, 90)">
        <rect x="0" y="0" width="120" height="22" rx="5" fill="#3B82F6" />
        <rect x="0" y="16" width="120" height="6" rx="3" fill="#1D4ED8" />
        <rect x="4" y="3" width="112" height="12" rx="2" fill="#FFFFFF" />
        <line x1="10" y1="7" x2="105" y2="7" stroke="#E2E8F0" stroke-width="1.5" />
      </g>
      <!-- Middle book: Bright Yellow / Gold -->
      <g transform="translate(26, 68)">
        <rect x="0" y="0" width="108" height="22" rx="5" fill="#FBBF24" />
        <rect x="0" y="16" width="108" height="6" rx="3" fill="#D97706" />
        <rect x="4" y="3" width="100" height="12" rx="2" fill="#FFFFFF" />
        <line x1="8" y1="7" x2="95" y2="7" stroke="#E2E8F0" stroke-width="1.5" />
      </g>
      <!-- Top book: Vibrant Orange -->
      <g transform="translate(32, 46)">
        <rect x="0" y="0" width="96" height="22" rx="5" fill="#F97316" />
        <rect x="0" y="16" width="96" height="6" rx="3" fill="#C2410C" />
        <rect x="4" y="3" width="88" height="12" rx="2" fill="#FFFFFF" />
        <line x1="8" y1="7" x2="85" y2="7" stroke="#E2E8F0" stroke-width="1.5" />
        <!-- Dangling ribbon bookmark -->
        <path d="M80 0 L80 25 L84 20 L88 25 L88 0 Z" fill="#38BDF8" />
      </g>
    </svg>

    <!-- 2. Popular 2: Red 3D hardcover book with pencil cup and mini notepad -->
    <svg v-else-if="type === 'popular-2'" viewBox="0 0 160 140" fill="none" class="w-full h-full max-h-32 drop-shadow-md">
      <ellipse cx="80" cy="126" rx="58" ry="8" fill="#FDBA74" fill-opacity="0.35" />
      <!-- Book 1: Red Hardcover angled -->
      <g transform="translate(42, 60) rotate(-6)">
        <rect x="0" y="0" width="96" height="26" rx="6" fill="#EF4444" />
        <rect x="0" y="20" width="96" height="6" rx="3" fill="#B91C1C" />
        <rect x="5" y="3" width="86" height="15" rx="3" fill="#FFFBEB" />
        <line x1="10" y1="9" x2="80" y2="9" stroke="#E5E7EB" stroke-width="1.5" />
      </g>
      <!-- Underneath Book: Gold book -->
      <g transform="translate(36, 85)">
        <rect x="0" y="0" width="102" height="24" rx="5" fill="#F59E0B" />
        <rect x="0" y="18" width="102" height="6" rx="3" fill="#D97706" />
        <rect x="4" y="3" width="94" height="14" rx="2" fill="#FFFFFF" />
      </g>
      <!-- Green Cup with Pencils on left -->
      <g transform="translate(24, 45)">
        <rect x="8" y="22" width="22" height="32" rx="4" fill="#10B981" />
        <rect x="8" y="22" width="22" height="5" rx="2" fill="#059669" />
        <!-- Pencils sticking out -->
        <line x1="14" y1="22" x2="10" y2="6" stroke="#FBBF24" stroke-width="3" stroke-linecap="round" />
        <line x1="20" y1="22" x2="22" y2="4" stroke="#60A5FA" stroke-width="3" stroke-linecap="round" />
        <line x1="25" y1="22" x2="28" y2="8" stroke="#F43F5E" stroke-width="3" stroke-linecap="round" />
      </g>
      <!-- Mini eraser / sharpener -->
      <rect x="115" y="104" width="16" height="10" rx="3" fill="#3B82F6" />
    </svg>

    <!-- 3. Popular 3: 3D Open white book with fanning pages and alarm clock -->
    <svg v-else-if="type === 'popular-3'" viewBox="0 0 160 140" fill="none" class="w-full h-full max-h-32 drop-shadow-md">
      <ellipse cx="80" cy="126" rx="58" ry="8" fill="#C4B5FD" fill-opacity="0.35" />
      <!-- Open fanning book pages -->
      <g transform="translate(56, 38)">
        <!-- Back cover -->
        <rect x="-4" y="4" width="76" height="72" rx="4" fill="#818CF8" />
        <!-- Pages layers -->
        <rect x="0" y="2" width="70" height="70" rx="3" fill="#E0E7FF" />
        <rect x="3" y="0" width="66" height="70" rx="3" fill="#F8FAFC" />
        <line x1="12" y1="12" x2="58" y2="12" stroke="#CBD5E1" stroke-width="2" />
        <line x1="12" y1="20" x2="58" y2="20" stroke="#E2E8F0" stroke-width="1.5" />
        <line x1="12" y1="28" x2="48" y2="28" stroke="#E2E8F0" stroke-width="1.5" />
        <line x1="12" y1="36" x2="58" y2="36" stroke="#E2E8F0" stroke-width="1.5" />
        <line x1="12" y1="44" x2="42" y2="44" stroke="#E2E8F0" stroke-width="1.5" />
        <!-- Ribbon bookmark -->
        <path d="M35 0 L35 48 L40 42 L45 48 L45 0 Z" fill="#6366F1" />
      </g>
      <!-- Coral Alarm Clock on the left (Exact match to screenshot) -->
      <g transform="translate(22, 65)">
        <circle cx="18" cy="18" r="16" fill="#F43F5E" />
        <circle cx="18" cy="18" r="13" fill="#FFFFFF" />
        <!-- Bells on top -->
        <circle cx="6" cy="6" r="4" fill="#E11D48" />
        <circle cx="30" cy="6" r="4" fill="#E11D48" />
        <!-- Hands -->
        <line x1="18" y1="18" x2="18" y2="10" stroke="#1E293B" stroke-width="2" stroke-linecap="round" />
        <line x1="18" y1="18" x2="23" y2="18" stroke="#1E293B" stroke-width="2" stroke-linecap="round" />
        <!-- Legs -->
        <line x1="8" y1="32" x2="5" y2="38" stroke="#E11D48" stroke-width="3" stroke-linecap="round" />
        <line x1="28" y1="32" x2="31" y2="38" stroke="#E11D48" stroke-width="3" stroke-linecap="round" />
      </g>
    </svg>

    <!-- 4. Popular 4: Takeaway coffee cup with notebook and pen -->
    <svg v-else-if="type === 'popular-4'" viewBox="0 0 160 140" fill="none" class="w-full h-full max-h-32 drop-shadow-md">
      <ellipse cx="80" cy="126" rx="55" ry="8" fill="#FDA4AF" fill-opacity="0.35" />
      <!-- Notebook flat -->
      <g transform="translate(68, 82)">
        <rect x="0" y="0" width="70" height="26" rx="5" fill="#F59E0B" />
        <rect x="0" y="20" width="70" height="6" rx="3" fill="#D97706" />
        <rect x="4" y="3" width="62" height="15" rx="2" fill="#FFFFFF" />
        <!-- Pen resting on top -->
        <rect x="10" y="-4" width="46" height="5" rx="2.5" fill="#1E293B" />
        <polygon points="56,-4 62,-1.5 56,1" fill="#FBBF24" />
      </g>
      <!-- 3D Coffee Cup on left -->
      <g transform="translate(26, 42)">
        <!-- Cup Lid -->
        <ellipse cx="26" cy="10" rx="22" ry="6" fill="#F8FAFC" />
        <rect x="8" y="10" width="36" height="6" fill="#E2E8F0" rx="2" />
        <!-- Cup Body -->
        <path d="M10 16 L15 64 Q26 68 37 64 L42 16 Z" fill="#92400E" />
        <!-- Kraft Sleeve -->
        <path d="M12 28 L14 48 Q26 51 38 48 L40 28 Q26 27 12 28 Z" fill="#D97706" />
      </g>
    </svg>

    <!-- 5. Ongoing 1: Purple 3D tilted hardcover books with ribbons -->
    <svg v-else-if="type === 'ongoing-1'" viewBox="0 0 160 140" fill="none" class="w-full h-full max-h-32 drop-shadow-md">
      <ellipse cx="80" cy="126" rx="55" ry="8" fill="#C4B5FD" fill-opacity="0.35" />
      <!-- Book 1: Tilted lavender hardcover -->
      <g transform="translate(48, 40) rotate(-18)">
        <rect x="0" y="0" width="62" height="80" rx="6" fill="#A78BFA" />
        <rect x="4" y="4" width="54" height="72" rx="4" fill="#C4B5FD" />
        <rect x="8" y="8" width="46" height="64" rx="3" fill="#EDE9FE" />
        <!-- Ribbon bookmark -->
        <path d="M22 0 L22 40 L27 34 L32 40 L32 0 Z" fill="#3B82F6" />
      </g>
      <!-- Book 2: Supporting book leaning -->
      <g transform="translate(75, 45) rotate(15)">
        <rect x="0" y="0" width="58" height="76" rx="6" fill="#7C3AED" />
        <rect x="4" y="4" width="50" height="68" rx="4" fill="#8B5CF6" />
        <rect x="8" y="8" width="42" height="60" rx="3" fill="#FFFFFF" />
      </g>
    </svg>

    <!-- 6. Ongoing 2: Stack of books with cute cloud & umbrella character -->
    <svg v-else-if="type === 'ongoing-2'" viewBox="0 0 160 140" fill="none" class="w-full h-full max-h-32 drop-shadow-md">
      <ellipse cx="80" cy="126" rx="55" ry="8" fill="#99F6E4" fill-opacity="0.35" />
      <!-- Bottom Book: Yellow pastel -->
      <g transform="translate(30, 94)">
        <rect x="0" y="0" width="100" height="20" rx="4" fill="#FDE68A" />
        <rect x="0" y="15" width="100" height="5" rx="2.5" fill="#FCD34D" />
        <rect x="4" y="3" width="92" height="11" rx="2" fill="#FFFFFF" />
      </g>
      <!-- Middle Book: Pink pastel -->
      <g transform="translate(36, 76)">
        <rect x="0" y="0" width="88" height="20" rx="4" fill="#FBCFE8" />
        <rect x="0" y="15" width="88" height="5" rx="2.5" fill="#F472B6" />
        <rect x="4" y="3" width="80" height="11" rx="2" fill="#FFFFFF" />
      </g>
      <!-- Top Book: Mint pastel -->
      <g transform="translate(42, 58)">
        <rect x="0" y="0" width="76" height="20" rx="4" fill="#A7F3D0" />
        <rect x="0" y="15" width="76" height="5" rx="2.5" fill="#34D399" />
        <rect x="4" y="3" width="68" height="11" rx="2" fill="#FFFFFF" />
      </g>
      <!-- Cute 3D Cloud creature on top -->
      <g transform="translate(56, 32)">
        <ellipse cx="24" cy="18" rx="22" ry="14" fill="#67E8F9" />
        <!-- Cheeks and Eyes -->
        <circle cx="16" cy="16" r="2" fill="#0E7490" />
        <circle cx="32" cy="16" r="2" fill="#0E7490" />
        <ellipse cx="12" cy="21" rx="2.5" ry="1.5" fill="#F43F5E" fill-opacity="0.6" />
        <ellipse cx="36" cy="21" rx="2.5" ry="1.5" fill="#F43F5E" fill-opacity="0.6" />
        <path d="M21 21 Q24 24 27 21" stroke="#0E7490" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <!-- Tiny purple umbrella -->
        <path d="M40 8 C40 -2 56 -2 56 8 Z" fill="#C084FC" />
        <line x1="48" y1="8" x2="48" y2="22" stroke="#7C3AED" stroke-width="2" />
      </g>
    </svg>

    <!-- 7. Ongoing 3: Bookshelf organizer with tilted books and clock -->
    <svg v-else-if="type === 'ongoing-3'" viewBox="0 0 160 140" fill="none" class="w-full h-full max-h-32 drop-shadow-md">
      <ellipse cx="80" cy="126" rx="55" ry="8" fill="#DDD6FE" fill-opacity="0.35" />
      <!-- Bookend frame -->
      <path d="M30 115 L30 45 L38 45 L38 115 Z" fill="#FBBF24" />
      <!-- Stack of standing books -->
      <!-- Green book -->
      <rect x="42" y="52" width="12" height="63" rx="2.5" fill="#34D399" />
      <!-- Mint book -->
      <rect x="56" y="44" width="14" height="71" rx="2.5" fill="#6EE7B7" />
      <!-- Blue book tilted -->
      <g transform="translate(73, 50) rotate(12)">
        <rect x="0" y="0" width="16" height="66" rx="3" fill="#60A5FA" />
        <rect x="2" y="3" width="12" height="60" rx="2" fill="#93C5FD" />
      </g>
      <!-- Cyan book tilted -->
      <g transform="translate(90, 56) rotate(18)">
        <rect x="0" y="0" width="14" height="62" rx="3" fill="#22D3EE" />
      </g>
      <!-- Tiny alarm clock on bottom right -->
      <g transform="translate(112, 86)">
        <circle cx="14" cy="14" r="12" fill="#EF4444" />
        <circle cx="14" cy="14" r="9" fill="#FFFFFF" />
        <circle cx="5" cy="5" r="3" fill="#DC2626" />
        <circle cx="23" cy="5" r="3" fill="#DC2626" />
        <line x1="14" y1="14" x2="14" y2="9" stroke="#1E293B" stroke-width="1.5" />
        <line x1="14" y1="14" x2="18" y2="14" stroke="#1E293B" stroke-width="1.5" />
      </g>
    </svg>

    <!-- 8. Ongoing 4: Open workbook, pencil, and blue project folder -->
    <svg v-else-if="type === 'ongoing-4'" viewBox="0 0 160 140" fill="none" class="w-full h-full max-h-32 drop-shadow-md">
      <ellipse cx="80" cy="126" rx="55" ry="8" fill="#BFDBFE" fill-opacity="0.35" />
      <!-- Blue Project Folder in background -->
      <rect x="30" y="36" width="65" height="80" rx="6" fill="#3B82F6" />
      <rect x="30" y="36" width="28" height="12" rx="3" fill="#2563EB" />
      <!-- Yellow Notebook on right -->
      <rect x="76" y="44" width="55" height="72" rx="5" fill="#FBBF24" />
      <!-- Open workbook in foreground -->
      <g transform="translate(38, 62)">
        <rect x="0" y="0" width="78" height="52" rx="4" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
        <line x1="39" y1="0" x2="39" y2="52" stroke="#CBD5E1" stroke-width="1.5" />
        <!-- Content lines -->
        <line x1="8" y1="12" x2="32" y2="12" stroke="#E2E8F0" stroke-width="1.5" />
        <line x1="8" y1="20" x2="28" y2="20" stroke="#E2E8F0" stroke-width="1.5" />
        <line x1="8" y1="28" x2="34" y2="28" stroke="#E2E8F0" stroke-width="1.5" />
        <line x1="46" y1="12" x2="70" y2="12" stroke="#E2E8F0" stroke-width="1.5" />
        <line x1="46" y1="20" x2="66" y2="20" stroke="#E2E8F0" stroke-width="1.5" />
      </g>
      <!-- Blue sharp pencil resting on bottom -->
      <g transform="translate(98, 70) rotate(-45)">
        <rect x="0" y="0" width="8" height="42" rx="2" fill="#2563EB" />
        <polygon points="0,42 8,42 4,50" fill="#FDE68A" />
        <polygon points="2,47 6,47 4,50" fill="#1E293B" />
      </g>
    </svg>

    <!-- 9. Uploaded / Custom Book Cover Visual -->
    <div
      v-else
      class="w-28 h-32 rounded-xl flex flex-col justify-between p-3 relative overflow-hidden shadow-md group-hover:scale-105 transition-transform"
      :class="colorClasses"
    >
      <div class="flex items-center justify-between">
        <span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-white/70 backdrop-blur-sm shadow-xs uppercase tracking-wider text-slate-700">
          {{ format || 'PDF' }}
        </span>
        <div class="w-2 h-6 bg-white/60 rounded-full" />
      </div>

      <div class="space-y-1">
        <div class="w-10 h-10 rounded-lg bg-white/80 flex items-center justify-center shadow-xs">
          <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div class="w-14 h-1.5 bg-white/50 rounded-full" />
        <div class="w-8 h-1.5 bg-white/40 rounded-full" />
      </div>

      <!-- Book Spine Accent -->
      <div class="absolute left-0 inset-y-0 w-2 bg-black/10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type?: string
  format?: 'PDF' | 'EPUB'
  color?: string
}>()

const colorClasses = computed(() => {
  switch (props.color) {
    case 'blue':
      return 'bg-gradient-to-br from-blue-300 to-indigo-400 text-blue-900'
    case 'peach':
      return 'bg-gradient-to-br from-orange-200 to-amber-300 text-orange-950'
    case 'lavender':
    case 'purple':
      return 'bg-gradient-to-br from-purple-200 to-indigo-300 text-purple-950'
    case 'coral':
      return 'bg-gradient-to-br from-rose-200 to-pink-300 text-rose-950'
    case 'mint':
      return 'bg-gradient-to-br from-teal-200 to-emerald-300 text-teal-950'
    default:
      return 'bg-gradient-to-br from-indigo-200 to-purple-300 text-indigo-950'
  }
})
</script>
