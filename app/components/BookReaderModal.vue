<template>
  <dialog
    ref="dialogRef"
    closedby="any"
    aria-labelledby="readerModalTitle"
    class="p-0 rounded-3xl bg-white dark:bg-[#16122B] shadow-2xl border border-slate-100 dark:border-purple-900/40 max-w-2xl w-[92vw] text-slate-800 dark:text-slate-100 m-auto backdrop:bg-slate-900/60 transition-all duration-200"
  >
    <div v-if="book" class="p-6 sm:p-8 space-y-6">
      <!-- Header -->
      <div class="flex items-start justify-between gap-4">
        <div class="flex items-center gap-3">
          <span
            class="px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-xs"
            :class="book.format === 'PDF' ? 'bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-transparent dark:border-rose-900/60' : 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-transparent dark:border-emerald-900/60'"
          >
            {{ book.format }} Digital Document
          </span>
          <span class="text-xs text-slate-400 dark:text-slate-500 font-medium">{{ book.size }} • {{ book.pages }} Pages</span>
        </div>

        <button
          type="button"
          @click="closeModal"
          class="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-purple-900/30 transition-colors"
          aria-label="Close dialog"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Main Book Banner -->
      <div class="flex flex-col sm:flex-row items-center gap-6 p-5 rounded-2xl bg-slate-50 dark:bg-[#1E173D] border border-slate-100 dark:border-purple-900/40">
        <!-- 3D Artwork box -->
        <div class="w-32 h-32 rounded-2xl flex items-center justify-center flex-shrink-0 border border-transparent dark:border-purple-900/30" :class="bgToneClass">
          <BookVisual3D
            :type="book.iconType"
            :format="book.format"
            :color="book.color"
          />
        </div>

        <!-- Info details -->
        <div class="flex-1 space-y-2 text-center sm:text-left">
          <h2 id="readerModalTitle" class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
            {{ book.title }}
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">By {{ book.author }} • Category: {{ book.category }}</p>

          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-600 dark:text-slate-300 pt-1">
            <span class="flex items-center gap-1 text-amber-500 font-bold">
              ★ {{ book.rating.toFixed(1) }} <span class="text-slate-400 dark:text-slate-500 font-normal">({{ book.reviewsCount || 42 }} reviews)</span>
            </span>
            <span v-if="book.progress !== undefined" class="text-indigo-600 dark:text-purple-400 font-semibold">
              {{ currentProgress }}% Completed
            </span>
          </div>
        </div>
      </div>

      <!-- Tabs: Overview vs Simulated Reading Mode -->
      <div class="flex items-center gap-2 border-b border-slate-100 dark:border-purple-900/40 pb-2">
        <button
          type="button"
          @click="activeTab = 'overview'"
          :class="[
            'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all',
            activeTab === 'overview' ? 'bg-indigo-600 dark:bg-purple-600 text-white shadow-xs' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          ]"
        >
          Book Overview
        </button>
        <button
          type="button"
          @click="activeTab = 'preview'"
          :class="[
            'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all',
            activeTab === 'preview' ? 'bg-indigo-600 dark:bg-purple-600 text-white shadow-xs' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          ]"
        >
          Digital Reader Excerpt
        </button>
      </div>

      <!-- Tab 1: Overview -->
      <div v-if="activeTab === 'overview'" class="space-y-4">
        <div class="space-y-1">
          <h3 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Synopsis</h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ book.description || book.subtitle }}
          </p>
        </div>

        <div v-if="book.tableOfContents && book.tableOfContents.length" class="space-y-2">
          <h3 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Table of Contents</h3>
          <div class="space-y-1.5 max-h-36 overflow-y-auto pr-2">
            <div
              v-for="(chap, idx) in book.tableOfContents"
              :key="idx"
              class="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-[#1E173D] hover:bg-indigo-50/60 dark:hover:bg-purple-900/30 text-xs text-slate-700 dark:text-slate-200 transition-colors"
            >
              <span>{{ chap }}</span>
              <span class="text-[10px] text-slate-400 dark:text-slate-500 font-mono">Sec. 0{{ idx + 1 }}</span>
            </div>
          </div>
        </div>

        <!-- Progress updater if ongoing -->
        <div class="p-3.5 rounded-2xl bg-indigo-50/60 dark:bg-purple-950/40 border border-indigo-100 dark:border-purple-900/50 space-y-2">
          <div class="flex items-center justify-between text-xs font-semibold text-indigo-950 dark:text-purple-200">
            <span>Reading Progress</span>
            <span>{{ currentProgress }}%</span>
          </div>
          <input
            v-model.number="currentProgress"
            type="range"
            min="0"
            max="100"
            class="w-full accent-indigo-600 dark:accent-purple-500 cursor-pointer"
            @change="updateProgress"
          />
        </div>
      </div>

      <!-- Tab 2: Digital Reader Excerpt Preview -->
      <div v-else class="space-y-3">
        <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-[#251D3A] border border-amber-100 dark:border-purple-900/40 text-xs text-slate-700 dark:text-slate-200 space-y-2 font-serif leading-relaxed max-h-56 overflow-y-auto">
          <p class="font-bold text-slate-900 dark:text-white font-sans text-sm">Excerpt from {{ book.title }}</p>
          <p>
            "Knowledge is not merely an accumulation of data; it is an active architectural blueprint of how minds navigate complexity. When readers open a digital codex, they are initiating a cognitive dialogue with thoughts formulated across space and time."
          </p>
          <p>
            "In this modern library, every page is an index into human curiosity. The formats may shift from parchment to PDF and EPUB, yet the core transformation remains invariant: reading changes the observer."
          </p>
        </div>
        <p class="text-[11px] text-slate-400 dark:text-slate-500 text-center">Simulated in-browser reader for {{ book.format }} document format.</p>
      </div>

      <!-- Action Footer -->
      <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-purple-900/40">
        <div class="flex items-center gap-2">
          <button
            type="button"
            @click="toggleBookmark"
            class="px-3 py-2 rounded-xl border border-slate-200 dark:border-purple-900/60 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            :class="book.isBookmarked ? 'bg-indigo-50 dark:bg-purple-950/60 text-indigo-600 dark:text-purple-300 border-indigo-200 dark:border-purple-800' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1E173D]'"
          >
            <svg class="w-4 h-4" :fill="book.isBookmarked ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span>{{ book.isBookmarked ? 'Bookmarked' : 'Bookmark' }}</span>
          </button>

          <button
            type="button"
            @click="toggleFavorite"
            class="px-3 py-2 rounded-xl border border-slate-200 dark:border-purple-900/60 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            :class="book.isFavorite ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 border-rose-200 dark:border-rose-800' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1E173D]'"
          >
            <svg class="w-4 h-4" :fill="book.isFavorite ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{{ book.isFavorite ? 'Favorited' : 'Favorite' }}</span>
          </button>
        </div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            @click="downloadBook"
            class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-brand-primary text-white text-xs font-bold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download {{ book.format }}</span>
          </button>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import type { Book } from '../../shared/types/book'
import BookVisual3D from './BookVisual3D.vue'

const emit = defineEmits<{
  (e: 'update-book', book: Book): void
}>()

const dialogRef = ref<HTMLDialogElement | null>(null)
const book = ref<Book | null>(null)
const activeTab = ref<'overview' | 'preview'>('overview')
const currentProgress = ref(0)

const bgToneClass = computed(() => {
  if (!book.value) return 'bg-slate-100 dark:bg-slate-800'
  switch (book.value.color) {
    case 'blue': return 'bg-[#E9F3FF] dark:bg-[#15233D]'
    case 'peach': return 'bg-[#FFF0E6] dark:bg-[#2F1F1A]'
    case 'lavender': return 'bg-[#F2EDFD] dark:bg-[#20183B]'
    case 'coral': return 'bg-[#FFEBEF] dark:bg-[#331824]'
    case 'purple': return 'bg-[#EFEAFF] dark:bg-[#22183E]'
    case 'mint': return 'bg-[#E3F9F5] dark:bg-[#122A26]'
    default: return 'bg-[#F2EDFD] dark:bg-[#20183B]'
  }
})

const open = (selected: Book) => {
  book.value = { ...selected }
  currentProgress.value = selected.progress || 0
  activeTab.value = 'overview'
  dialogRef.value?.showModal()
}

const closeModal = () => {
  dialogRef.value?.close()
}

const toggleBookmark = async () => {
  if (!book.value) return
  book.value.isBookmarked = !book.value.isBookmarked
  emit('update-book', book.value)
  await $fetch(`/api/books/${book.value.id}`, {
    method: 'PATCH',
    body: { isBookmarked: book.value.isBookmarked }
  }).catch(() => {})
}

const toggleFavorite = async () => {
  if (!book.value) return
  book.value.isFavorite = !book.value.isFavorite
  emit('update-book', book.value)
  await $fetch(`/api/books/${book.value.id}`, {
    method: 'PATCH',
    body: { isFavorite: book.value.isFavorite }
  }).catch(() => {})
}

const updateProgress = async () => {
  if (!book.value) return
  book.value.progress = currentProgress.value
  emit('update-book', book.value)
  await $fetch(`/api/books/${book.value.id}`, {
    method: 'PATCH',
    body: { progress: currentProgress.value }
  }).catch(() => {})
}

const downloadBook = () => {
  if (!book.value) return
  alert(`Starting digital download: "${book.value.title}.${book.value.format.toLowerCase()}" (${book.value.size})`)
}

// Fallback script for light-dismiss on browsers without closedby support
const handleBackdropClickFallback = (event: MouseEvent) => {
  const dialog = dialogRef.value
  if (!dialog) return
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    if (event.target !== dialog) return
    const rect = dialog.getBoundingClientRect()
    const isDialogContent = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    )
    if (!isDialogContent) {
      dialog.close()
    }
  }
}

onMounted(() => {
  dialogRef.value?.addEventListener('click', handleBackdropClickFallback)
})

onBeforeUnmount(() => {
  dialogRef.value?.removeEventListener('click', handleBackdropClickFallback)
})

defineExpose({
  open,
  closeModal
})
</script>
