<template>
  <div>
    <!-- Mobile Backdrop -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
      @click="$emit('close')"
    />

    <!-- Sidebar Container -->
    <aside
      :class="[
        'fixed lg:static top-0 bottom-0 left-0 z-50 w-64 bg-white dark:bg-[#16122B] lg:bg-transparent lg:dark:bg-transparent flex flex-col justify-between p-6 transition-transform duration-300 lg:translate-x-0 border-r border-slate-100 dark:border-purple-900/40 lg:border-none',
        isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <!-- Top Brand & Navigation -->
      <div class="space-y-8">
        <!-- Logo Header -->
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-3 cursor-pointer group">
            <!-- Brand Icon using official VARAG logo -->
            <div class="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 shadow-md shadow-indigo-500/10 border border-indigo-100 dark:border-purple-900/50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform p-0.5">
              <img src="/logo.png" alt="VARAG" class="w-full h-full object-contain rounded-lg" />
            </div>
            <div>
              <span class="text-xl font-extrabold text-slate-800 dark:text-white tracking-tight flex items-center gap-1.5">
                VARAG
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-50 dark:bg-purple-900/40 text-indigo-600 dark:text-purple-300 border border-indigo-100 dark:border-purple-800/40">Vault</span>
              </span>
              <p class="text-[11px] text-slate-400 dark:text-slate-500 font-medium">ورق • Digital Library</p>
            </div>
          </NuxtLink>

          <!-- Close button on mobile -->
          <button
            class="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 lg:hidden rounded-lg hover:bg-slate-100 dark:hover:bg-purple-900/30 transition-colors"
            @click="$emit('close')"
            aria-label="Close sidebar"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Navigation Menu Items: Exactly HOME, CATEGORIES, AUTHORS, COURSES, LIBRARY, SIGN-REGISTER -->
        <nav class="space-y-1.5" aria-label="Main Navigation">
          <template v-for="item in navItems" :key="item.name">
            <!-- NuxtLink for items with direct route (Sign-Register) -->
            <NuxtLink
              v-if="item.to"
              :to="item.to"
              :class="[
                'w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group relative',
                currentSection === item.name
                  ? 'text-indigo-600 dark:text-purple-300 font-semibold bg-indigo-50/70 dark:bg-purple-950/60'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-purple-900/25'
              ]"
              @click="$emit('close')"
            >
              <!-- Active indicator left bar -->
              <div
                v-if="currentSection === item.name"
                class="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-indigo-600 dark:bg-purple-500 rounded-r-full hidden lg:block"
              />

              <!-- Item Icon -->
              <component
                :is="item.icon"
                :class="[
                  'w-5 h-5 transition-transform duration-200 group-hover:scale-110',
                  currentSection === item.name ? 'text-indigo-600 dark:text-purple-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                ]"
              />

              <span class="truncate font-semibold tracking-wide text-xs uppercase">{{ item.label }}</span>

              <span
                v-if="item.badge"
                class="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                :class="item.badgeClass"
              >
                {{ item.badge }}
              </span>
            </NuxtLink>

            <!-- Standard Section Button -->
            <button
              v-else
              type="button"
              @click="handleSelect(item.name)"
              :class="[
                'w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group relative text-left',
                currentSection === item.name
                  ? 'text-indigo-600 dark:text-purple-300 font-semibold bg-indigo-50/70 dark:bg-purple-950/60'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-purple-900/25'
              ]"
            >
              <!-- Active indicator left bar -->
              <div
                v-if="currentSection === item.name"
                class="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-indigo-600 dark:bg-purple-500 rounded-r-full hidden lg:block"
              />

              <!-- Item Icon -->
              <component
                :is="item.icon"
                :class="[
                  'w-5 h-5 transition-transform duration-200 group-hover:scale-110',
                  currentSection === item.name ? 'text-indigo-600 dark:text-purple-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                ]"
              />

              <span class="truncate font-semibold tracking-wide text-xs uppercase">{{ item.label }}</span>

              <span
                v-if="item.badge"
                class="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                :class="item.badgeClass"
              >
                {{ item.badge }}
              </span>
            </button>
          </template>
        </nav>
      </div>

      <!-- Bottom Card: Upgrade to Pro -->
      <div class="mt-8 pt-4">
        <div class="p-5 rounded-2xl bg-gradient-to-b from-[#F7F5FF] to-[#ECE7FE] dark:from-[#1D163B] dark:to-[#171131] border border-indigo-100/60 dark:border-purple-900/50 text-center relative overflow-hidden group">
          <div class="absolute -right-6 -bottom-6 w-20 h-20 bg-indigo-200/40 dark:bg-purple-600/20 rounded-full blur-xl pointer-events-none" />

          <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-snug mb-3">
            Upgrade to <span class="text-indigo-600 dark:text-purple-400 font-bold">Pro</span> for unlimited storage
          </p>

          <button
            @click="$emit('open-pro-modal')"
            class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white text-xs font-semibold shadow-md shadow-indigo-500/25 transition-all duration-200 hover:shadow-indigo-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-1.5"
          >
            <span>Upgrade</span>
            <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Home,
  LayoutGrid,
  Users,
  BookOpen,
  Library,
  LogIn
} from 'lucide-vue-next'

const props = defineProps<{
  isOpen?: boolean
  activeSection?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'select-section', section: string): void
  (e: 'open-pro-modal'): void
}>()

const currentSection = ref(props.activeSection || 'Home')

// Exact items requested: HOME / CATEGORIES / AUTHORS / COURSES / LIBRARY / SIGN-REGISTER
const navItems = [
  { name: 'Home', label: 'HOME', icon: Home, to: '/' },
  { name: 'Categories', label: 'CATEGORIES', icon: LayoutGrid, badge: 'Vault', badgeClass: 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300' },
  { name: 'Authors', label: 'AUTHORS', icon: Users },
  { name: 'Courses', label: 'COURSES', icon: BookOpen, badge: 'New', badgeClass: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' },
  { name: 'Library', label: 'LIBRARY', icon: Library, badge: '1.4k', badgeClass: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300', to: '/library' },
  { name: 'Sign-Register', label: 'SIGN-REGISTER', icon: LogIn, to: '/login' }
]

const handleSelect = (name: string) => {
  currentSection.value = name
  emit('select-section', name)
  emit('close')
}
</script>
