<template>
  <div class="space-y-4">
    <!-- Header with VIEW ALL (Exact match to screenshot) -->
    <div class="flex items-center justify-between">
      <h3 class="text-xs font-bold text-slate-800 tracking-tight">Best sales</h3>
      <button
        type="button"
        @click="$emit('view-all')"
        class="text-[10px] font-bold text-slate-400 hover:text-indigo-600 tracking-wider transition-colors"
      >
        VIEW ALL
      </button>
    </div>

    <!-- Items List (Exact match to screenshot) -->
    <div class="space-y-3">
      <div
        v-for="item in items"
        :key="item.id"
        class="flex items-center justify-between gap-3 p-2 rounded-2xl hover:bg-slate-50 transition-colors group cursor-pointer"
        @click="$emit('select-book', item)"
      >
        <!-- Left: Thumbnail + Title + Star Rating -->
        <div class="flex items-center gap-3 min-w-0">
          <!-- Thumbnail box -->
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xs"
            :class="getThumbBg(item.color)"
          >
            <!-- SVG icon miniature -->
            <svg class="w-5 h-5 text-indigo-700/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>

          <!-- Text Details -->
          <div class="min-w-0">
            <h4 class="text-xs font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors">
              {{ item.title }}
            </h4>
            <div class="flex items-center gap-1.5 text-[10px] text-slate-400">
              <span class="text-amber-500 font-semibold flex items-center gap-0.5">
                ★ {{ item.rating }}
              </span>
              <span class="text-slate-300">•</span>
              <span class="uppercase font-mono text-[9px]">{{ item.format }}</span>
            </div>
          </div>
        </div>

        <!-- Right: Order / Read Pill Button (Exact match from screenshot) -->
        <button
          type="button"
          @click.stop="$emit('select-book', item)"
          class="px-3.5 py-1.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-[11px] font-semibold transition-all duration-200 hover:shadow-md hover:shadow-indigo-500/20 flex-shrink-0"
        >
          Order
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Book } from '../../shared/types/book'

defineProps<{
  items: Book[]
}>()

defineEmits<{
  (e: 'view-all'): void
  (e: 'select-book', book: Book): void
}>()

const getThumbBg = (color?: string) => {
  switch (color) {
    case 'peach':
      return 'bg-amber-100/80 text-amber-900'
    case 'lavender':
      return 'bg-purple-100/80 text-purple-900'
    case 'purple':
      return 'bg-indigo-100/80 text-indigo-900'
    case 'coral':
      return 'bg-rose-100/80 text-rose-900'
    default:
      return 'bg-slate-100 text-slate-800'
  }
}
</script>
