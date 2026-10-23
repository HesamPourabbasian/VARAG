<template>
  <div class="p-5 rounded-3xl bg-slate-50/70 border border-slate-100 space-y-4">
    <!-- Header with Toggle Switch (Exact match to screenshot) -->
    <div class="flex items-start justify-between">
      <div>
        <h3 class="text-xs font-bold text-slate-800 tracking-tight">Unlocks achievement</h3>
        <p class="text-[11px] text-slate-400 mt-0.5">Goal achieved success unlocked.</p>
      </div>

      <!-- Toggle Switch -->
      <button
        type="button"
        @click="isEnabled = !isEnabled"
        :class="[
          'relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          isEnabled ? 'bg-indigo-600' : 'bg-slate-300'
        ]"
        role="switch"
        :aria-checked="isEnabled"
      >
        <span
          :class="[
            'pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out',
            isEnabled ? 'translate-x-4' : 'translate-x-0'
          ]"
        />
      </button>
    </div>

    <!-- User Achievement Progress Rows (Exact match to screenshot) -->
    <div class="space-y-3 pt-1">
      <!-- User 1: Irham Muhammad -->
      <div class="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
          alt="Irham Muhammad"
          class="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-200"
        />
        <div class="flex-1">
          <div class="flex items-center justify-between text-[11px] font-semibold text-slate-700 mb-1">
            <span class="text-indigo-700">66% Achieved</span>
            <span class="text-slate-400 font-normal">7 Days left</span>
          </div>
          <!-- Progress Bar -->
          <div class="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
            <div class="h-full bg-indigo-600 rounded-full transition-all duration-700" style="width: 66%" />
          </div>
        </div>
      </div>

      <!-- User 2: Sarah Connor -->
      <div class="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
          alt="Sarah Connor"
          class="w-8 h-8 rounded-full object-cover ring-2 ring-rose-200"
        />
        <div class="flex-1">
          <div class="flex items-center justify-between text-[11px] font-semibold text-slate-700 mb-1">
            <span class="text-purple-600">33% Achieved</span>
            <span class="text-slate-400 font-normal">12 Days left</span>
          </div>
          <!-- Progress Bar -->
          <div class="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
            <div class="h-full bg-purple-400 rounded-full transition-all duration-700" style="width: 33%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isEnabled = ref(true)
</script>
