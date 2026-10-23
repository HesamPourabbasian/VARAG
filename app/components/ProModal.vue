<template>
  <dialog
    ref="dialogRef"
    closedby="any"
    aria-labelledby="proModalTitle"
    class="p-0 rounded-3xl bg-white dark:bg-[#16122B] shadow-2xl border border-slate-100 dark:border-purple-900/40 max-w-lg w-[92vw] text-slate-800 dark:text-slate-100 m-auto backdrop:bg-slate-900/60 transition-all duration-200"
  >
    <div class="p-6 sm:p-8 space-y-6 text-center">
      <!-- Pro Badge Icon -->
      <div class="w-16 h-16 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/30">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>

      <div class="space-y-1.5">
        <h2 id="proModalTitle" class="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          VARAG Pro Library Pass
        </h2>
        <p class="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          Unlock unlimited cloud storage, real-time EPUB sync, and advanced AI document indexing.
        </p>
      </div>

      <!-- Features Checklist -->
      <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-purple-950/40 border border-indigo-100/60 dark:border-purple-900/50 text-left space-y-2.5 text-xs text-slate-700 dark:text-slate-200">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-indigo-600 dark:text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
          <span>Unlimited PDF and EPUB library storage</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-indigo-600 dark:text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
          <span>AI Semantic Search across entire book texts</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-indigo-600 dark:text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
          <span>Offline sync with native e-reader devices</span>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          @click="closeModal"
          class="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-purple-900/60 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1E173D]"
        >
          Maybe Later
        </button>
        <button
          type="button"
          @click="confirmPro"
          class="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-bold shadow-md shadow-indigo-500/25 transition-all"
        >
          Upgrade for $7/mo
        </button>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const dialogRef = ref<HTMLDialogElement | null>(null)

const openModal = () => {
  dialogRef.value?.showModal()
}

const closeModal = () => {
  dialogRef.value?.close()
}

const confirmPro = () => {
  alert('Thank you for choosing VARAG Pro! Pro features unlocked.')
  closeModal()
}

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
