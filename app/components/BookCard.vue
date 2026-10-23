<template>
  <div
    class="group flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
    @click="$emit('select', book)"
  >
    <!-- Illustration Pastel Box (Exact match to screenshot) -->
    <div
      class="relative w-full aspect-square rounded-3xl flex items-center justify-center p-3 transition-all duration-300 group-hover:shadow-card-hover overflow-hidden"
      :class="pastelBgClass"
    >
      <!-- Format Pill Tag (Top-left) -->
      <div class="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/75 backdrop-blur-md text-[10px] font-bold tracking-wider text-slate-700 shadow-xs border border-white/60">
        <span class="w-1.5 h-1.5 rounded-full" :class="book.format === 'PDF' ? 'bg-rose-500' : 'bg-emerald-500'" />
        <span>{{ book.format }}</span>
        <span class="text-slate-400 font-normal ml-0.5">{{ book.size }}</span>
      </div>

      <!-- 3D Book Illustration -->
      <BookVisual3D
        :type="book.iconType"
        :format="book.format"
        :color="book.color"
      />

      <!-- Action Buttons Row at bottom of illustration box (Exact match to screenshot) -->
      <div class="absolute bottom-3 inset-x-3 flex items-center justify-between z-10 px-1">
        <!-- Bookmark Button -->
        <button
          type="button"
          @click.stop="$emit('toggle-bookmark', book.id)"
          class="w-7 h-7 rounded-lg bg-white/90 hover:bg-white flex items-center justify-center shadow-xs text-slate-400 hover:text-indigo-600 transition-colors"
          :class="{ 'text-indigo-600 bg-white ring-1 ring-indigo-200': book.isBookmarked }"
          title="Bookmark book"
        >
          <svg class="w-3.5 h-3.5" :fill="book.isBookmarked ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>

        <!-- Heart / Favorite Button -->
        <button
          type="button"
          @click.stop="$emit('toggle-favorite', book.id)"
          class="w-7 h-7 rounded-lg bg-white/90 hover:bg-white flex items-center justify-center shadow-xs text-slate-400 hover:text-rose-500 transition-colors"
          :class="{ 'text-rose-500 bg-white ring-1 ring-rose-200': book.isFavorite }"
          title="Add to favorites"
        >
          <svg class="w-3.5 h-3.5" :fill="book.isFavorite ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <!-- Ongoing Reading Progress Bar if active -->
      <div v-if="book.progress !== undefined && book.progress > 0" class="absolute bottom-0 inset-x-0 h-1 bg-black/5">
        <div class="h-full bg-indigo-600 transition-all duration-500" :style="{ width: `${book.progress}%` }" />
      </div>
    </div>

    <!-- Text details beneath illustration (Exact match to screenshot) -->
    <div class="mt-2.5 space-y-1">
      <h3
        class="text-xs sm:text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-indigo-600 transition-colors tracking-tight"
        :title="book.title"
      >
        {{ book.title }}
      </h3>
      <p class="text-[11px] text-slate-400 line-clamp-1 leading-relaxed">
        {{ book.subtitle }}
      </p>

      <!-- Category & Progress label -->
      <div class="flex items-center justify-between pt-0.5 text-[10px] text-slate-400">
        <span>{{ book.author }}</span>
        <span v-if="book.progress" class="font-semibold text-indigo-600">{{ book.progress }}% Read</span>
        <span v-else class="text-amber-500 font-medium">★ {{ book.rating.toFixed(1) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Book } from '../../shared/types/book'
import BookVisual3D from './BookVisual3D.vue'

const props = defineProps<{
  book: Book
}>()

defineEmits<{
  (e: 'select', book: Book): void
  (e: 'toggle-bookmark', id: string): void
  (e: 'toggle-favorite', id: string): void
}>()

const pastelBgClass = computed(() => {
  switch (props.book.color) {
    case 'blue':
      return 'bg-[#E9F3FF] hover:bg-[#E1EFFF]'
    case 'peach':
      return 'bg-[#FFF0E6] hover:bg-[#FFE8DA]'
    case 'lavender':
      return 'bg-[#F2EDFD] hover:bg-[#EBE3FC]'
    case 'coral':
      return 'bg-[#FFEBEF] hover:bg-[#FFE2E8]'
    case 'purple':
      return 'bg-[#EFEAFF] hover:bg-[#E6DEFF]'
    case 'mint':
      return 'bg-[#E3F9F5] hover:bg-[#D7F5EE]'
    case 'yellow':
      return 'bg-[#FEF8E7] hover:bg-[#FDF2D5]'
    default:
      return 'bg-[#F2EDFD] hover:bg-[#EBE3FC]'
  }
})
</script>
