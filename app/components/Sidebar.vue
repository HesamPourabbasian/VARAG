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
        'fixed lg:static top-0 bottom-0 left-0 z-50 w-64 bg-white lg:bg-transparent flex flex-col justify-between p-6 transition-transform duration-300 lg:translate-x-0 border-r border-slate-100 lg:border-none',
        isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <!-- Top Brand & Navigation -->
      <div class="space-y-8">
        <!-- Logo Header -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3 cursor-pointer group">
            <!-- Stylized Stacked Books Icon (Exact representation of screenshot logo) -->
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-brand-primary flex items-center justify-center shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 28 28" fill="none" class="w-6 h-6 text-white">
                <!-- Stacked books glyph -->
                <rect x="5" y="7" width="18" height="4.5" rx="2" fill="white" />
                <rect x="5" y="13" width="18" height="4.5" rx="2" fill="white" fill-opacity="0.9" />
                <rect x="5" y="19" width="14" height="4.5" rx="2" fill="white" fill-opacity="0.8" />
              </svg>
            </div>
            <div>
              <span class="text-xl font-extrabold text-slate-800 tracking-tight flex items-center gap-1.5">
                VARAG
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100">Vault</span>
              </span>
              <p class="text-[11px] text-slate-400 font-medium">Digital Library & Hub</p>
            </div>
          </div>

          <!-- Close button on mobile -->
          <button
            class="p-1.5 text-slate-400 hover:text-slate-700 lg:hidden rounded-lg hover:bg-slate-100"
            @click="$emit('close')"
            aria-label="Close sidebar"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Navigation Menu Items -->
        <nav class="space-y-1.5" aria-label="Main Navigation">
          <button
            v-for="item in navItems"
            :key="item.name"
            @click="handleSelect(item.name)"
            :class="[
              'w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group relative',
              currentSection === item.name
                ? 'text-indigo-600 font-semibold bg-indigo-50/70'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            ]"
          >
            <!-- Active indicator left bar (like in screenshot) -->
            <div
              v-if="currentSection === item.name"
              class="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-indigo-600 rounded-r-full hidden lg:block"
            />

            <!-- Item Icon -->
            <component
              :is="item.icon"
              :class="[
                'w-5 h-5 transition-transform duration-200 group-hover:scale-110',
                currentSection === item.name ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'
              ]"
            />

            <span class="truncate">{{ item.label }}</span>

            <!-- Badge indicator for Live Class or Library -->
            <span
              v-if="item.badge"
              class="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full"
              :class="item.badgeClass"
            >
              {{ item.badge }}
            </span>
          </button>
        </nav>
      </div>

      <!-- Bottom Card: Upgrade to Pro (Exact match to screenshot) -->
      <div class="mt-8 pt-4">
        <div class="p-5 rounded-2xl bg-gradient-to-b from-[#F7F5FF] to-[#ECE7FE] border border-indigo-100/60 text-center relative overflow-hidden group">
          <!-- Subtle decorative circle -->
          <div class="absolute -right-6 -bottom-6 w-20 h-20 bg-indigo-200/40 rounded-full blur-xl pointer-events-none" />

          <p class="text-xs font-semibold text-slate-700 leading-snug mb-3">
            Upgrade to <span class="text-indigo-600 font-bold">Pro</span> for more facilities
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
  Users,
  GraduationCap,
  BookOpen,
  Tv,
  CheckSquare,
  CreditCard,
  Library,
  AlertTriangle
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

const currentSection = ref(props.activeSection || 'Library')

const navItems = [
  { name: 'Home', label: 'Home', icon: Home },
  { name: 'Students', label: 'Students', icon: Users },
  { name: 'Teachers', label: 'Teachers', icon: GraduationCap },
  { name: 'Courses', label: 'Courses', icon: BookOpen },
  { name: 'Live Class', label: 'Live Class', icon: Tv, badge: 'Live', badgeClass: 'bg-rose-100 text-rose-600' },
  { name: 'Attendance', label: 'Attendance', icon: CheckSquare },
  { name: 'Payments', label: 'Payments', icon: CreditCard },
  { name: 'Library', label: 'Library', icon: Library, badge: '1.4k', badgeClass: 'bg-indigo-100 text-indigo-700' },
  { name: 'Reports', label: 'Reports', icon: AlertTriangle }
]

const handleSelect = (name: string) => {
  currentSection.value = name
  emit('select-section', name)
  emit('close')
}
</script>
