<template>
  <header class="flex items-center justify-between gap-4 py-2">
    <!-- Left: Hamburger (Mobile) + Search Bar -->
    <div class="flex items-center gap-3 flex-1 max-w-md">
      <!-- Mobile Sidebar Toggle -->
      <button
        class="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-purple-900/40 transition-colors"
        @click="$emit('toggle-sidebar')"
        aria-label="Toggle navigation"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Search Input (Pill style matching screenshot) -->
      <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          :value="modelValue"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          type="text"
          placeholder="Search books, authors, or categories..."
          class="w-full pl-10 pr-4 py-2.5 bg-slate-50/90 dark:bg-[#201A3D] hover:bg-slate-100/80 dark:hover:bg-[#28214D] focus:bg-white dark:focus:bg-[#1E173B] text-xs md:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 rounded-full border border-slate-200/70 dark:border-purple-900/60 focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-purple-900/40 transition-all duration-200"
        />
        <button
          v-if="modelValue"
          @click="$emit('update:modelValue', '')"
          class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Right Controls: Upload CTA, Live Pill, Moon/Sun Toggle, Bell, User Profile -->
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
      <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs font-semibold border border-rose-100/80 dark:border-rose-900/50 select-none shadow-sm">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
        </span>
        <span class="text-[11px] tracking-wide">Live</span>
      </div>

      <!-- Theme / Dark Mode Toggle Icon -->
      <button
        @click="toggleTheme"
        class="p-2 text-slate-500 dark:text-amber-300 hover:text-indigo-600 dark:hover:text-amber-200 rounded-full hover:bg-slate-100 dark:hover:bg-purple-900/40 transition-colors"
        :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
      >
        <!-- Sun icon in dark mode, Moon in light mode -->
        <component :is="isDark ? Sun : Moon" class="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
      </button>

      <!-- Notification Bell (Exact match from screenshot) -->
      <div class="relative">
        <button
          @click="showNotifications = !showNotifications"
          class="p-2 text-slate-500 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-purple-900/40 transition-colors relative"
          aria-label="Notifications"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full ring-2 ring-white dark:ring-slate-900"></span>
        </button>

        <!-- Notification Dropdown -->
        <div
          v-if="showNotifications"
          class="absolute right-0 mt-2 w-72 bg-white dark:bg-[#1A1535] rounded-2xl shadow-2xl border border-slate-100 dark:border-purple-900/60 p-3 z-50 text-xs space-y-2 animate-in fade-in slide-in-from-top-2"
        >
          <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-purple-900/40">
            <span class="font-bold text-slate-800 dark:text-slate-100">Notifications</span>
            <span class="text-[10px] text-indigo-600 dark:text-purple-400 font-semibold cursor-pointer">Mark all read</span>
          </div>
          <div class="space-y-2">
            <div class="p-2 rounded-xl bg-indigo-50/60 dark:bg-purple-950/50 text-slate-700 dark:text-slate-200">
              <p class="font-semibold text-indigo-900 dark:text-purple-300">New EPUB Added</p>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">"Atomic Habits" is now indexed in your library.</p>
            </div>
            <div class="p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-purple-900/30 text-slate-700 dark:text-slate-200">
              <p class="font-semibold text-slate-800 dark:text-slate-100">Reading Goal Unlocked</p>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Irham Muhammad achieved 66% milestone!</p>
            </div>
          </div>
        </div>
      </div>

      <!-- User Profile (Exact match from screenshot with dropdown & auth) -->
      <div class="relative">
        <button
          @click="showUserMenu = !showUserMenu"
          class="flex items-center gap-2 pl-1 cursor-pointer group focus:outline-none"
          aria-label="User account menu"
        >
          <div class="relative">
            <img
              :src="currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'"
              :alt="currentUser?.name || 'User'"
              class="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-100 dark:ring-purple-900/80 group-hover:ring-indigo-300 dark:group-hover:ring-purple-500 transition-all"
            />
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-slate-900"></span>
          </div>
        </button>

        <!-- User Dropdown Menu -->
        <div
          v-if="showUserMenu"
          class="absolute right-0 mt-2 w-56 bg-white dark:bg-[#1A1535] rounded-2xl shadow-2xl border border-slate-100 dark:border-purple-900/60 p-2 z-50 text-xs space-y-1 animate-in fade-in"
        >
          <div class="p-2 border-b border-slate-100 dark:border-purple-900/40 flex items-center gap-2.5">
            <img
              :src="currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'"
              class="w-8 h-8 rounded-full object-cover"
            />
            <div class="min-w-0">
              <p class="font-bold text-slate-800 dark:text-slate-100 truncate">{{ currentUser?.name || 'Guest Reader' }}</p>
              <p class="text-[10px] text-slate-400 dark:text-slate-400 truncate">{{ currentUser?.email || 'Sign in to sync' }}</p>
            </div>
          </div>

          <NuxtLink
            to="/login"
            @click="showUserMenu = false"
            class="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-purple-900/40 font-medium transition-colors"
          >
            <svg class="w-4 h-4 text-slate-400 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Log In Page</span>
          </NuxtLink>

          <NuxtLink
            to="/signup"
            @click="showUserMenu = false"
            class="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-purple-900/40 font-medium transition-colors"
          >
            <svg class="w-4 h-4 text-slate-400 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span>Sign Up Page</span>
          </NuxtLink>

          <button
            v-if="currentUser"
            @click="handleLogout"
            class="w-full text-left flex items-center gap-2 px-3 py-2 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 font-medium transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import { useAuth } from '~/composables/useAuth'
import { useTheme } from '~/composables/useTheme'

const props = defineProps<{
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'toggle-sidebar'): void
  (e: 'open-upload'): void
}>()

const { currentUser, logout } = useAuth()
const { isDark, toggleTheme } = useTheme()
const showNotifications = ref(false)
const showUserMenu = ref(false)

const handleLogout = () => {
  showUserMenu.value = false
  logout()
}
</script>
