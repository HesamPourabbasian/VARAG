<template>
  <dialog
    ref="dialogRef"
    closedby="any"
    aria-labelledby="uploadModalTitle"
    class="p-0 rounded-3xl bg-white dark:bg-[#16122B] shadow-2xl border border-slate-100 dark:border-purple-900/40 max-w-xl w-[92vw] text-slate-800 dark:text-slate-100 m-auto backdrop:bg-slate-900/60 transition-all duration-200"
  >
    <div class="p-6 sm:p-8 space-y-6">
      <!-- Modal Header -->
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-purple-900/40 text-indigo-600 dark:text-purple-300 flex items-center justify-center font-bold">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <div>
            <h2 id="uploadModalTitle" class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              Upload Digital Book
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Add digital PDF or EPUB publications to your VARAG library vault.
            </p>
          </div>
        </div>

        <!-- Close Button -->
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

      <!-- Drag & Drop Zone -->
      <div
        @dragover.prevent="isDragging = true"
        @dragleave.prevent="isDragging = false"
        @drop.prevent="handleDrop"
        @click="triggerFileInput"
        :class="[
          'relative border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-2.5',
          isDragging
            ? 'border-indigo-500 bg-indigo-50/50 dark:bg-purple-900/30 scale-[1.01]'
            : selectedFileName
              ? 'border-emerald-300 dark:border-emerald-700/60 bg-emerald-50/30 dark:bg-emerald-950/20'
              : 'border-slate-200 dark:border-purple-900/40 hover:border-indigo-300 dark:hover:border-purple-600 hover:bg-slate-50/50 dark:hover:bg-[#20193D]/40'
        ]"
      >
        <input
          ref="fileInputRef"
          type="file"
          accept=".pdf,.epub"
          class="hidden"
          @change="handleFileChange"
        />

        <div
          class="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform"
          :class="selectedFileName ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400' : 'bg-indigo-50 dark:bg-purple-900/40 text-indigo-600 dark:text-purple-300 group-hover:scale-110'"
        >
          <svg v-if="selectedFileName" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        <div v-if="selectedFileName" class="space-y-0.5">
          <p class="text-xs font-bold text-slate-800 dark:text-slate-100">{{ selectedFileName }}</p>
          <p class="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">{{ selectedFileSize }} • {{ form.format }} Ready</p>
        </div>
        <div v-else class="space-y-1">
          <p class="text-xs font-semibold text-slate-700 dark:text-slate-200">
            <span class="text-indigo-600 dark:text-purple-400 underline">Choose a file</span> or drag and drop
          </p>
          <p class="text-[11px] text-slate-400 dark:text-slate-400">Supported formats: PDF, EPUB (up to 50MB)</p>
        </div>
      </div>

      <!-- Book Metadata Form -->
      <form @submit.prevent="submitUpload" class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Title -->
          <div class="space-y-1">
            <label class="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Book Title *</label>
            <input
              v-model="form.title"
              required
              type="text"
              placeholder="e.g. Designing Data-Intensive Apps"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#20193D] border border-slate-200 dark:border-purple-900/60 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 dark:focus:border-purple-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-purple-900/40"
            />
          </div>

          <!-- Author -->
          <div class="space-y-1">
            <label class="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Author Name</label>
            <input
              v-model="form.author"
              type="text"
              placeholder="e.g. Martin Kleppmann"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#20193D] border border-slate-200 dark:border-purple-900/60 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 dark:focus:border-purple-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-purple-900/40"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Format Selector -->
          <div class="space-y-1">
            <label class="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Format</label>
            <div class="flex items-center gap-2">
              <button
                type="button"
                @click="form.format = 'PDF'"
                :class="[
                  'flex-1 py-2 rounded-xl text-xs font-bold border transition-all',
                  form.format === 'PDF'
                    ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-300'
                    : 'bg-slate-50 dark:bg-[#20193D] border-slate-200 dark:border-purple-900/50 text-slate-600 dark:text-slate-300'
                ]"
              >
                PDF
              </button>
              <button
                type="button"
                @click="form.format = 'EPUB'"
                :class="[
                  'flex-1 py-2 rounded-xl text-xs font-bold border transition-all',
                  form.format === 'EPUB'
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300'
                    : 'bg-slate-50 dark:bg-[#20193D] border-slate-200 dark:border-purple-900/50 text-slate-600 dark:text-slate-300'
                ]"
              >
                EPUB
              </button>
            </div>
          </div>

          <!-- Category -->
          <div class="space-y-1">
            <label class="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Category</label>
            <select
              v-model="form.category"
              class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#20193D] border border-slate-200 dark:border-purple-900/60 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:border-indigo-500 dark:focus:border-purple-500"
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Design & UX">Design & UX</option>
              <option value="Productivity">Productivity</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Engineering">Engineering</option>
              <option value="Literature">Literature</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <!-- Color Theme -->
          <div class="space-y-1">
            <label class="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Card Palette</label>
            <div class="flex items-center gap-2 pt-1">
              <button
                v-for="c in colorOptions"
                :key="c.name"
                type="button"
                @click="form.color = c.name"
                class="w-6 h-6 rounded-full transition-transform"
                :class="[
                  c.bg,
                  form.color === c.name ? 'ring-2 ring-indigo-600 scale-110' : 'hover:scale-105'
                ]"
                :title="c.name"
              />
            </div>
          </div>
        </div>

        <!-- Description / Note -->
        <div class="space-y-1">
          <label class="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Summary / Notes</label>
          <textarea
            v-model="form.description"
            rows="2"
            placeholder="Brief overview of the book's core themes or chapters..."
            class="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-[#20193D] border border-slate-200 dark:border-purple-900/60 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 dark:focus:border-purple-500"
          />
        </div>

        <!-- Submit Button & Feedback -->
        <div class="pt-2 flex items-center justify-between gap-3">
          <p v-if="errorMsg" class="text-xs text-rose-600 dark:text-rose-400 font-semibold truncate">{{ errorMsg }}</p>
          <div v-else />

          <div class="flex items-center gap-3">
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-purple-900/60 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#20193D]"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-brand-primary text-white text-xs font-bold shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all disabled:opacity-60 flex items-center gap-2"
            >
              <svg v-if="isSubmitting" class="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ isSubmitting ? 'Uploading & Indexing...' : 'Upload & Add to Library' }}</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { BookFormat } from '../../shared/types/book'

const emit = defineEmits<{
  (e: 'book-uploaded'): void
}>()

const dialogRef = ref<HTMLDialogElement | null>(null)
const fileInputRef = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)
const isSubmitting = ref(false)
const errorMsg = ref('')

const selectedFileName = ref('')
const selectedFileSize = ref('')

const form = ref<{
  title: string
  author: string
  format: BookFormat
  category: string
  color: 'blue' | 'peach' | 'lavender' | 'coral' | 'mint'
  description: string
}>({
  title: '',
  author: '',
  format: 'PDF',
  category: 'Computer Science',
  color: 'blue',
  description: ''
})

const colorOptions = [
  { name: 'blue', bg: 'bg-blue-400' },
  { name: 'peach', bg: 'bg-amber-400' },
  { name: 'lavender', bg: 'bg-purple-400' },
  { name: 'coral', bg: 'bg-rose-400' },
  { name: 'mint', bg: 'bg-emerald-400' }
] as const

const triggerFileInput = () => {
  fileInputRef.value?.click()
}

const handleFile = (file: File) => {
  selectedFileName.value = file.name
  const sizeMb = (file.size / (1024 * 1024)).toFixed(1)
  selectedFileSize.value = `${sizeMb} MB`

  const ext = file.name.split('.').pop()?.toLowerCase()
  if (ext === 'epub') {
    form.value.format = 'EPUB'
    form.value.color = 'peach'
  } else {
    form.value.format = 'PDF'
    form.value.color = 'blue'
  }

  // Pre-fill title if empty from filename
  if (!form.value.title) {
    const rawName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
    form.value.title = rawName.charAt(0).toUpperCase() + rawName.slice(1)
  }
}

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    handleFile(target.files[0])
  }
}

const handleDrop = (e: DragEvent) => {
  isDragging.value = false
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
    handleFile(e.dataTransfer.files[0])
  }
}

const submitUpload = async () => {
  if (!form.value.title.trim()) {
    errorMsg.value = 'Please provide a book title'
    return
  }

  isSubmitting.value = true
  errorMsg.value = ''

  try {
    const res = await $fetch('/api/books', {
      method: 'POST',
      body: {
        title: form.value.title,
        subtitle: `Uploaded ${form.value.format} volume • ${selectedFileSize.value || '4.2 MB'}`,
        author: form.value.author || 'Community Contributor',
        format: form.value.format,
        size: selectedFileSize.value || '4.2 MB',
        pages: 180,
        category: form.value.category,
        color: form.value.color,
        description: form.value.description
      }
    })

    if (res.success) {
      emit('book-uploaded')
      closeModal()
      resetForm()
    }
  } catch (err: any) {
    errorMsg.value = err.message || 'Failed to upload book'
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  form.value = {
    title: '',
    author: '',
    format: 'PDF',
    category: 'Computer Science',
    color: 'blue',
    description: ''
  }
  selectedFileName.value = ''
  selectedFileSize.value = ''
}

const openModal = () => {
  resetForm()
  dialogRef.value?.showModal()
}

const closeModal = () => {
  dialogRef.value?.close()
}

// Fallback script for light-dismiss on browsers without closedby support
// Per Modern Web Guidance rules:
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
  openModal,
  closeModal
})
</script>
