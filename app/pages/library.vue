<template>
  <div class="min-h-screen bg-[#ECE8FB] dark:bg-[#0C091C] text-slate-800 dark:text-slate-100 flex flex-col justify-center items-center p-2 sm:p-4 md:p-8 relative selection:bg-indigo-500 selection:text-white font-sans transition-colors duration-300">
    <!-- Ambient 3D floating decorations (Book on top-left, pencil on bottom-right) -->
    <FloatingDecoration />

    <!-- Main White Portal Container (Exact representation of landing.webp floating app container) -->
    <div class="w-full max-w-[1480px] bg-white dark:bg-[#16122B] rounded-3xl md:rounded-[36px] shadow-portal dark:shadow-2xl dark:shadow-purple-950/40 border border-white/80 dark:border-purple-900/40 p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 transition-all">
      <!-- Left Column: Navigation Sidebar -->
      <Sidebar
        :is-open="isMobileSidebarOpen"
        :active-section="activeSection"
        @close="isMobileSidebarOpen = false"
        @select-section="handleSelectSection"
        @open-pro-modal="openProModal"
      />

      <!-- Right Column: Main Content Area -->
      <main class="flex-1 min-w-0 space-y-6">
        <!-- Top Bar: Search, Live pill, Dark mode, Bell, User Profile, Upload Button -->
        <TopHeader
          v-model="searchQuery"
          @toggle-sidebar="isMobileSidebarOpen = !isMobileSidebarOpen"
          @open-upload="openUploadModal"
        />

        <!-- Hero Banner: 3D Books with Glasses + Greeting + 3D Bookshelf -->
        <HeroBanner
          @learn-more="scrollToLibrary"
          @open-upload="openUploadModal"
        />

        <!-- Format & Filter Pills -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <button
              v-for="filter in formatFilters"
              :key="filter.id"
              @click="activeFilter = filter.id"
              :class="[
                'px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5',
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/20'
                  : 'bg-slate-100 dark:bg-[#20193D] text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-[#2B2352] hover:text-slate-900 dark:hover:text-white'
              ]"
            >
              <span>{{ filter.label }}</span>
              <span
                v-if="filter.count !== undefined"
                :class="[
                  'text-[10px] px-1.5 py-0.2 rounded-full font-mono',
                  activeFilter === filter.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 dark:bg-purple-900/40 text-slate-600 dark:text-slate-300'
                ]"
              >
                {{ filter.count }}
              </span>
            </button>
          </div>

          <!-- Total digital library counter badge -->
          <div class="text-[11px] text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Digital Repository: {{ allBooks.length }} books indexed</span>
          </div>
        </div>

        <!-- Center & Right Multi-column Grid -->
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-start">
          <!-- Center Columns: Popular & Ongoing Book Grids (8 Cols on XL) -->
          <div class="xl:col-span-8 space-y-8">
            <!-- SECTION 1: Popular (Exact match to screenshot top row) -->
            <section v-if="popularBooks.length > 0" class="space-y-4">
              <div class="flex items-center justify-between">
                <h2 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">Popular</h2>
                <button
                  type="button"
                  @click="activeFilter = 'all'"
                  class="text-[11px] font-bold text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 tracking-wider transition-colors"
                >
                  VIEW ALL
                </button>
              </div>

              <!-- 4-Card Responsive Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <BookCard
                  v-for="book in popularBooks"
                  :key="book.id"
                  :book="book"
                  @select="openReader"
                  @toggle-bookmark="toggleBookmark"
                  @toggle-favorite="toggleFavorite"
                />
              </div>
            </section>

            <!-- SECTION 2: Ongoing / Recently Uploaded (Exact match to screenshot bottom row) -->
            <section class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <h2 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">Ongoing</h2>
                  <span v-if="uploadedCount > 0" class="text-[10px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold px-2 py-0.5 rounded-full border border-indigo-100 dark:border-indigo-900/50">
                    +{{ uploadedCount }} Uploaded
                  </span>
                </div>
                <button
                  type="button"
                  @click="activeFilter = 'ongoing'"
                  class="text-[11px] font-bold text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 tracking-wider transition-colors"
                >
                  VIEW ALL
                </button>
              </div>

              <!-- 4-Card Responsive Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <BookCard
                  v-for="book in ongoingBooks"
                  :key="book.id"
                  :book="book"
                  @select="openReader"
                  @toggle-bookmark="toggleBookmark"
                  @toggle-favorite="toggleFavorite"
                />
              </div>

              <!-- Empty search state -->
              <div
                v-if="ongoingBooks.length === 0 && popularBooks.length === 0"
                class="py-12 text-center rounded-3xl bg-slate-50 dark:bg-[#1A1435] border border-slate-100 dark:border-purple-900/30 space-y-3"
              >
                <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-purple-900/40 text-indigo-600 dark:text-purple-300 flex items-center justify-center mx-auto">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 class="text-sm font-bold text-slate-800 dark:text-slate-100">No books found</h3>
                <p class="text-xs text-slate-400 dark:text-slate-400 max-w-xs mx-auto">
                  We couldn't find any books matching "{{ searchQuery }}". Try adjusting your search or upload a new PDF / EPUB.
                </p>
                <button
                  @click="openUploadModal"
                  class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm"
                >
                  Upload this Book
                </button>
              </div>
            </section>
          </div>

          <!-- Right Column Rail: Achievements & Best Sales (4 Cols on XL) -->
          <div class="xl:col-span-4 space-y-6">
            <!-- Widget 1: Unlocks achievement (Exact match to screenshot) -->
            <AchievementsWidget />

            <!-- Widget 2: Best sales / Top Reads (Exact match to screenshot) -->
            <BestSalesWidget
              :items="bestSalesBooks"
              @select-book="openReader"
              @view-all="activeFilter = 'all'"
            />
          </div>
        </div>
      </main>
    </div>

    <!-- Upload Book Modal (<dialog> compliant with modern-web-guidance) -->
    <UploadModal
      ref="uploadModalRef"
      @book-uploaded="handleBookUploaded"
    />

    <!-- Digital Book Reader / Details Modal -->
    <BookReaderModal
      ref="readerModalRef"
      @update-book="handleBookUpdated"
    />

    <!-- Pro Upgrade Modal -->
    <ProModal ref="proModalRef" />

    <!-- Toast Notification -->
    <transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="toastMsg"
        class="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900 text-white text-xs font-medium shadow-2xl border border-slate-800"
      >
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span>{{ toastMsg }}</span>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Book } from '../../shared/types/book'
import FloatingDecoration from '~/components/FloatingDecoration.vue'
import Sidebar from '~/components/Sidebar.vue'
import TopHeader from '~/components/TopHeader.vue'
import HeroBanner from '~/components/HeroBanner.vue'
import BookCard from '~/components/BookCard.vue'
import AchievementsWidget from '~/components/AchievementsWidget.vue'
import BestSalesWidget from '~/components/BestSalesWidget.vue'
import UploadModal from '~/components/UploadModal.vue'
import BookReaderModal from '~/components/BookReaderModal.vue'
import ProModal from '~/components/ProModal.vue'

// UI States
const isMobileSidebarOpen = ref(false)
const activeSection = ref('Library')
const searchQuery = ref('')
const activeFilter = ref<'all' | 'pdf' | 'epub' | 'ongoing' | 'uploaded' | 'favorites'>('all')
const toastMsg = ref('')

// Modal references
const uploadModalRef = ref<InstanceType<typeof UploadModal> | null>(null)
const readerModalRef = ref<InstanceType<typeof BookReaderModal> | null>(null)
const proModalRef = ref<InstanceType<typeof ProModal> | null>(null)

// Server Fetching using Nuxt's useFetch
const { data, refresh } = await useFetch('/api/books', {
  query: computed(() => ({
    search: searchQuery.value,
    format: activeFilter.value === 'pdf' ? 'PDF' : activeFilter.value === 'epub' ? 'EPUB' : 'ALL',
    tab: activeFilter.value
  }))
})

const allBooks = computed(() => data.value?.books || [])
const popularBooks = computed(() => data.value?.popular || [])
const ongoingBooks = computed(() => data.value?.ongoing || [])
const bestSalesBooks = computed(() => data.value?.bestSales || [])
const uploadedCount = computed(() => data.value?.counts?.uploaded || 0)

const formatFilters = computed(() => [
  { id: 'all' as const, label: 'All Digital Books', count: data.value?.counts?.all },
  { id: 'pdf' as const, label: 'PDF Vault', count: data.value?.counts?.pdf },
  { id: 'epub' as const, label: 'EPUB Books', count: data.value?.counts?.epub },
  { id: 'uploaded' as const, label: 'My Uploads', count: data.value?.counts?.uploaded },
  { id: 'favorites' as const, label: 'Favorites' }
])

// Handlers
const openUploadModal = () => {
  uploadModalRef.value?.openModal()
}

const openReader = (book: Book) => {
  readerModalRef.value?.open(book)
}

const openProModal = () => {
  proModalRef.value?.openModal()
}

const showToast = (msg: string) => {
  toastMsg.value = msg
  setTimeout(() => {
    toastMsg.value = ''
  }, 4000)
}

const handleBookUploaded = async () => {
  await refresh()
  showToast('Digital book uploaded and indexed successfully into VARAG!')
}

const handleBookUpdated = (updatedBook: Book) => {
  const target = allBooks.value.find(b => b.id === updatedBook.id)
  if (target) {
    target.isBookmarked = updatedBook.isBookmarked
    target.isFavorite = updatedBook.isFavorite
    target.progress = updatedBook.progress
  }
}

const toggleBookmark = async (id: string) => {
  const b = allBooks.value.find(item => item.id === id)
  if (!b) return
  b.isBookmarked = !b.isBookmarked
  showToast(b.isBookmarked ? `"${b.title.slice(0, 24)}..." bookmarked` : 'Bookmark removed')
  await $fetch(`/api/books/${id}`, {
    method: 'PATCH',
    body: { isBookmarked: b.isBookmarked }
  }).catch(() => {})
}

const toggleFavorite = async (id: string) => {
  const b = allBooks.value.find(item => item.id === id)
  if (!b) return
  b.isFavorite = !b.isFavorite
  showToast(b.isFavorite ? `"${b.title.slice(0, 24)}..." added to favorites` : 'Removed from favorites')
  await $fetch(`/api/books/${id}`, {
    method: 'PATCH',
    body: { isFavorite: b.isFavorite }
  }).catch(() => {})
}

const handleSelectSection = (name: string) => {
  activeSection.value = name
  if (name === 'Home') {
    activeFilter.value = 'all'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else if (name === 'Library') {
    activeFilter.value = 'all'
    scrollToLibrary()
  } else if (name === 'Categories') {
    scrollToLibrary()
    showToast('Categories: Filter between PDF Vault, EPUB Books, and Uploads')
  } else if (name === 'Authors') {
    showToast('Authors: Showing curated works from top digital authors')
  } else if (name === 'Courses') {
    showToast('Courses: Digital book learning tracks and masterclasses')
  } else if (name === 'Sign-Register') {
    navigateTo('/login')
  }
}

const scrollToLibrary = () => {
  window.scrollTo({ top: 350, behavior: 'smooth' })
}
</script>
