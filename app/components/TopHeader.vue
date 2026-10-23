<template>
  <header class="flex items-center justify-between gap-4 py-2">
    <!-- Left: Hamburger (Mobile) + Search Bar -->
    <div class="flex items-center gap-3 flex-1 max-w-md">
      <!-- Mobile Sidebar Toggle -->
      <button
        class="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        @click="$emit('toggle-sidebar')"
        aria-label="Toggle navigation"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Search Input (Pill style matching screenshot) -->
      <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          :value="modelValue"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          type="text"
          placeholder="Search books, authors, or categories..."
          class="w-full pl-10 pr-4 py-2.5 bg-slate-50/90 hover:bg-slate-100/80 focus:bg-white text-xs md:text-sm text-slate-800 placeholder-slate-400 rounded-full border border-slate-200/70 focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
        />
        <button
          v-if="modelValue"
          @click="$emit('update:modelValue', '')"
          class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Right Controls: Upload CTA, Live Pill, Moon Icon, Bell, User Profile -->
    <div class="flex items-center gap-2 md:gap-3.5">
      <!-- Upload Digital Book CTA -->
      <button
        @click="$emit('open-upload')"
        class="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-brand-primary text-white text-xs font-semibold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200"
        title="Upload PDF or EPUB digital book"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>Upload Book</span>
        <span class="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full font-mono">PDF/EPUB</span>
      </button>

      <!-- Live Badge Pill (Exact match from screenshot) -->
      <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold border border-rose-100/80 select-none shadow-sm shadow-rose-500/5">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
        </span>
        <span class="text-[11px] tracking-wide">Live</span>
      </div>

      <!-- Theme / Dark Mode Icon (Exact match from screenshot) -->
      <button
        @click="toggleDarkMode"
        class="p-2 text-slate-500 hover:text-indigo-600 rounded-full hover:bg-slate-100 transition-colors"
        aria-label="Toggle dark mode"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>

      <!-- Notification Bell (Exact match from screenshot) -->
      <div class="relative">
        <button
          @click="showNotifications = !showNotifications"
          class="p-2 text-slate-500 hover:text-indigo-600 rounded-full hover:bg-slate-100 transition-colors relative"
          aria-label="Notifications"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full ring-2 ring-white"></span>
        </button>

        <!-- Notification Dropdown -->
        <div
          v-if="showNotifications"
          class="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 text-xs space-y-2 animate-in fade-in slide-in-from-top-2"
        >
          <div class="flex items-center justify-between pb-2 border-b border-slate-100">
            <span class="font-bold text-slate-800">Notifications</span>
            <span class="text-[10px] text-indigo-600 font-semibold cursor-pointer">Mark all read</span>
          </div>
          <div class="space-y-2">
            <div class="p-2 rounded-xl bg-indigo-50/60 text-slate-700">
              <p class="font-semibold text-indigo-900">New EPUB Added</p>
              <p class="text-[11px] text-slate-500">"Atomic Habits" is now indexed in your library.</p>
            </div>
            <div class="p-2 rounded-xl hover:bg-slate-50 text-slate-700">
              <p class="font-semibold text-slate-800">Reading Goal Unlocked</p>
              <p class="text-[11px] text-slate-500">Irham Muhammad achieved 66% milestone!</p>
            </div>
          </div>
        </div>
      </div>

      <!-- User Profile (Exact match from screenshot) -->
      <div class="flex items-center gap-2 pl-1 cursor-pointer group">
        <div class="relative">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="Irham Muhammad"
            class="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-100 group-hover:ring-indigo-300 transition-all"
          />
          <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white"></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'toggle-sidebar'): void
  (e: 'open-upload'): void
}>()

const showNotifications = ref(false)

const toggleDarkMode = () => {
  // Graceful notification toast or state switch
  alert('Theme switcher: Dark mode preview active! Soft lilac mode is currently active.')
}
</script>
