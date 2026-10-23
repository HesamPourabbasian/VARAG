<template>
  <div class="relative w-full max-w-[720px] lg:max-w-[780px] bg-white dark:bg-[#16122B] rounded-2xl sm:rounded-3xl shadow-[0_15px_45px_-12px_rgba(79,70,229,0.18)] dark:shadow-2xl dark:shadow-purple-950/40 border border-white/90 dark:border-purple-900/40 overflow-hidden transition-all duration-300">
    <div class="flex flex-col md:flex-row min-h-0 md:min-h-[420px] lg:min-h-[450px]">
      
      <!-- MOBILE BANNER: Compact Illustration Header (Shows only on mobile < md) -->
      <div class="block md:hidden relative h-24 sm:h-28 w-full overflow-hidden bg-[#1E0C4C]">
        <AuthVisualIllustration />
        <!-- Bottom curved transition into white card -->
        <div class="absolute -bottom-1 left-0 right-0 h-5 pointer-events-none select-none z-10">
          <svg viewBox="0 0 400 30" preserveAspectRatio="none" class="w-full h-full fill-white dark:fill-[#16122B]">
            <path d="M 0 30 L 0 10 C 120 28, 280 0, 400 15 L 400 30 Z" />
          </svg>
        </div>
      </div>

      <!-- LEFT COLUMN: Clean Minimalist Auth Form (Exact match to login.webp) -->
      <div class="w-full md:w-[48%] lg:w-[47%] p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between z-20 bg-white dark:bg-[#16122B] relative">
        
        <!-- Top Section: Amber Sun Badge & Welcome Header -->
        <div class="space-y-2.5 sm:space-y-3">
          <div class="flex items-center justify-between">
            <!-- Amber / Sun Badge (Exact match to login.webp) -->
            <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 to-amber-300 shadow-sm shadow-amber-400/25 flex items-center justify-center transform hover:scale-105 transition-transform">
              <div class="w-3 h-3 rounded-full bg-white/40 blur-[1px]"></div>
            </div>

            <!-- Return to Library Link -->
            <NuxtLink
              to="/library"
              class="text-[10px] font-semibold text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 group"
            >
              <svg class="w-3 h-3 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Library</span>
            </NuxtLink>
          </div>

          <!-- Main Brand & Mode Header -->
          <div class="space-y-0.5">
            <p class="text-[11px] font-semibold text-slate-400 dark:text-slate-400 tracking-wide">
              {{ isSignUp ? 'Get started with' : 'Welcome to' }}
            </p>
            <h1 class="text-lg sm:text-xl font-extrabold text-[#1E1B4B] dark:text-white tracking-tight flex items-center gap-1.5">
              <span>VARAG</span>
              <span class="text-[8px] font-bold px-1.5 py-0.2 rounded-full bg-indigo-50 dark:bg-purple-900/40 text-indigo-600 dark:text-purple-300 border border-indigo-100 dark:border-purple-800/40">
                {{ isSignUp ? 'Register' : 'Vault' }}
              </span>
            </h1>
            <p class="text-[10px] text-slate-400 dark:text-slate-400 line-clamp-1">
              {{ isSignUp ? 'Create your free digital reader account.' : 'Sign in to unlock your digital book vault.' }}
            </p>
          </div>

          <!-- Mode Toggle Tabs (Login / Sign Up) -->
          <div class="flex p-0.5 bg-slate-100/90 dark:bg-purple-950/60 rounded-lg w-fit text-[10px] font-semibold border border-transparent dark:border-purple-900/40">
            <button
              type="button"
              @click="setMode(false)"
              :class="[
                'px-2.5 py-0.5 rounded-md transition-all duration-200',
                !isSignUp ? 'bg-white dark:bg-[#281F4B] text-indigo-600 dark:text-purple-300 shadow-sm font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              ]"
            >
              Login
            </button>
            <button
              type="button"
              @click="setMode(true)"
              :class="[
                'px-2.5 py-0.5 rounded-md transition-all duration-200',
                isSignUp ? 'bg-white dark:bg-[#281F4B] text-indigo-600 dark:text-purple-300 shadow-sm font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              ]"
            >
              Sign Up
            </button>
          </div>

          <!-- Error Alert Banner -->
          <div
            v-if="errorMessage"
            class="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/50 border border-rose-100 dark:border-rose-900/50 text-rose-600 dark:text-rose-300 text-[10px] flex items-center gap-1.5 animate-in fade-in"
          >
            <svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ errorMessage }}</span>
          </div>

          <!-- Form Element -->
          <form @submit.prevent="handleSubmit" class="space-y-2 pt-0.5" novalidate>
            <!-- Full Name (Sign Up only) -->
            <div v-if="isSignUp" class="auth-field space-y-0.5">
              <label for="fullName" class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Full Name
              </label>
              <input
                id="fullName"
                v-model="form.name"
                type="text"
                required
                autocomplete="name"
                placeholder="e.g. Eleanor Vance"
                class="auth-input py-1 text-xs"
              />
              <div class="auth-error-msg text-[9px] text-rose-500 items-center gap-1">
                <span>Please enter your name.</span>
              </div>
            </div>

            <!-- Email Field -->
            <div class="auth-field space-y-0.5">
              <label for="email" class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                autocomplete="email"
                :placeholder="isSignUp ? 'you@example.com' : 'bonjourguys@talk.com'"
                class="auth-input py-1 text-xs font-medium"
              />
              <div class="auth-error-msg text-[9px] text-rose-500 items-center gap-1">
                <span>Please enter a valid email address.</span>
              </div>
            </div>

            <!-- Password Field -->
            <div class="auth-field space-y-0.5">
              <div class="flex items-center justify-between">
                <label for="password" class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Password
                </label>
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="text-[10px] font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {{ showPassword ? 'Hide' : 'Show' }}
                </button>
              </div>

              <div class="relative">
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  minlength="6"
                  :autocomplete="isSignUp ? 'new-password' : 'current-password'"
                  :placeholder="isSignUp ? 'At least 6 characters' : '••••••••'"
                  class="auth-input py-1 tracking-wider font-mono text-xs"
                />
              </div>
              <div class="auth-error-msg text-[9px] text-rose-500 items-center gap-1">
                <span>Min 6 characters.</span>
              </div>
            </div>

            <!-- Confirm Password (Sign Up only) -->
            <div v-if="isSignUp" class="auth-field space-y-0.5">
              <label for="confirmPassword" class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                v-model="form.confirmPassword"
                :type="showPassword ? 'text' : 'password'"
                required
                minlength="6"
                autocomplete="new-password"
                placeholder="Re-enter password"
                class="auth-input py-1 tracking-wider font-mono text-xs"
              />
              <div v-if="passwordMismatch" class="text-[10px] text-rose-500 flex items-center gap-1 mt-0.5">
                <span>✕ Passwords do not match</span>
              </div>
              <div v-else-if="passwordMatchSuccess" class="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5 font-medium">
                <span>✓ Passwords match</span>
              </div>
            </div>

            <!-- Remember me & Demo Fill (Login mode) -->
            <div v-if="!isSignUp" class="flex items-center justify-between pt-0.5">
              <label class="flex items-center gap-1.5 cursor-pointer text-[10px] text-slate-500 dark:text-slate-400 select-none">
                <input
                  type="checkbox"
                  v-model="rememberMe"
                  class="w-3.5 h-3.5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 accent-purple-600 cursor-pointer"
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                @click="fillDemoCredentials"
                class="text-[10px] font-semibold text-indigo-600 dark:text-purple-400 hover:text-indigo-800 dark:hover:text-purple-300 transition-colors cursor-pointer"
              >
                Fill Demo
              </button>
            </div>

            <!-- Terms agreement (Sign Up mode) -->
            <div v-if="isSignUp" class="pt-0.5">
              <label class="flex items-center gap-2 cursor-pointer text-[10px] text-slate-600 dark:text-slate-300 select-none">
                <input
                  type="checkbox"
                  v-model="agreedTerms"
                  required
                  class="w-3.5 h-3.5 rounded text-purple-600 focus:ring-purple-500 border-slate-300 dark:border-purple-800 dark:bg-purple-950/60 accent-purple-600 cursor-pointer"
                />
                <span>I agree to Library Terms & Privacy Policy</span>
              </label>
            </div>

            <!-- Submit Button (Pill button matching login.webp LOGIN) -->
            <div class="pt-1.5">
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full sm:w-auto px-7 py-2.5 rounded-full bg-gradient-to-r from-[#9333EA] to-[#A855F7] hover:from-[#7E22CE] hover:to-[#9333EA] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1.5 disabled:opacity-60 cursor-pointer"
              >
                <svg
                  v-if="isLoading"
                  class="animate-spin -ml-1 mr-1 h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>{{ isLoading ? 'Processing...' : (isSignUp ? 'SIGN UP' : 'LOGIN') }}</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Bottom Link (Exact match: Dont have an account? Sign up) -->
        <div class="pt-2 text-[10px] text-slate-500 dark:text-slate-400">
          <span v-if="!isSignUp">
            Dont have an account?
            <button
              type="button"
              @click="setMode(true)"
              class="text-[#A855F7] hover:text-[#7E22CE] dark:text-purple-400 dark:hover:text-purple-300 font-bold underline underline-offset-2 ml-1 transition-colors cursor-pointer"
            >
              Sign up
            </button>
          </span>
          <span v-else>
            Already have an account?
            <button
              type="button"
              @click="setMode(false)"
              class="text-[#A855F7] hover:text-[#7E22CE] dark:text-purple-400 dark:hover:text-purple-300 font-bold underline underline-offset-2 ml-1 transition-colors cursor-pointer"
            >
              Log in
            </button>
          </span>
        </div>
      </div>

      <!-- RIGHT COLUMN: Night Scene Illustration + Organic Wave (Desktop/Tablet) -->
      <div class="hidden md:block w-full md:w-[52%] lg:w-[53%] relative overflow-hidden bg-[#1E0C4C]">
        <!-- Full-fidelity vector illustration component -->
        <AuthVisualIllustration />

        <!-- Organic S-Curve overlay on desktop separating white form and night scene -->
        <div class="absolute top-0 bottom-0 left-0 w-16 lg:w-20 -translate-x-[1px] pointer-events-none select-none z-10 h-full">
          <svg viewBox="0 0 100 680" preserveAspectRatio="none" class="w-full h-full fill-white dark:fill-[#16122B]">
            <path d="M 0 0 L 100 0 C 70 120, 95 240, 50 380 C 15 490, 45 590, 0 680 Z" />
          </svg>
        </div>

        <!-- Blue accent wave at the bottom-left of the card (Exact match to login.webp) -->
        <div class="absolute bottom-0 left-0 w-28 h-20 pointer-events-none select-none z-10">
          <svg viewBox="0 0 200 160" preserveAspectRatio="none" class="w-full h-full">
            <defs>
              <linearGradient id="blueWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="60%" stop-color="#4F46E5" />
                <stop offset="100%" stop-color="#7C3AED" />
              </linearGradient>
            </defs>
            <path
              d="M 0 60 C 50 40, 110 90, 160 140 L 160 160 L 0 160 Z"
              fill="url(#blueWaveGrad)"
              opacity="0.95"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import AuthVisualIllustration from './AuthVisualIllustration.vue'
import { useAuth } from '../composables/useAuth'

const props = defineProps<{
  initialMode?: 'login' | 'signup'
}>()

const emit = defineEmits<{
  (e: 'success', user: any): void
  (e: 'mode-changed', mode: 'login' | 'signup'): void
}>()

const { login, signup } = useAuth()

const isSignUp = ref(props.initialMode === 'signup')
const showPassword = ref(false)
const rememberMe = ref(true)
const agreedTerms = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

const form = reactive({
  name: '',
  email: props.initialMode === 'signup' ? '' : 'bonjourguys@talk.com',
  password: props.initialMode === 'signup' ? '' : '••••••••',
  confirmPassword: ''
})

const passwordMismatch = computed(() => {
  return isSignUp.value && form.confirmPassword.length > 0 && form.password !== form.confirmPassword
})

const passwordMatchSuccess = computed(() => {
  return isSignUp.value && form.confirmPassword.length >= 6 && form.password === form.confirmPassword
})

const setMode = (signUp: boolean) => {
  isSignUp.value = signUp
  errorMessage.value = ''
  emit('mode-changed', signUp ? 'signup' : 'login')

  if (signUp) {
    if (form.email === 'bonjourguys@talk.com') form.email = ''
    if (form.password === '••••••••' || form.password === 'inspace2026') form.password = ''
    if (typeof window !== 'undefined' && window.location.pathname === '/login') {
      navigateTo('/signup')
    }
  } else {
    if (!form.email) form.email = 'bonjourguys@talk.com'
    if (!form.password) form.password = '••••••••'
    if (typeof window !== 'undefined' && window.location.pathname === '/signup') {
      navigateTo('/login')
    }
  }
}

const fillDemoCredentials = () => {
  form.email = 'bonjourguys@talk.com'
  form.password = 'inspace2026'
  errorMessage.value = ''
}

const handleSubmit = async () => {
  errorMessage.value = ''

  if (isSignUp.value) {
    if (!form.name.trim()) {
      errorMessage.value = 'Please enter your full name.'
      return
    }
    if (!form.email.trim()) {
      errorMessage.value = 'Please enter your email address.'
      return
    }
    if (!form.password || form.password.length < 6) {
      errorMessage.value = 'Password must be at least 6 characters.'
      return
    }
    if (form.password !== form.confirmPassword) {
      errorMessage.value = 'Passwords do not match.'
      return
    }
    if (!agreedTerms.value) {
      errorMessage.value = 'Please agree to the Library Terms & Privacy Policy to continue.'
      return
    }
  } else {
    if (!form.email.trim()) {
      errorMessage.value = 'Please enter your email.'
      return
    }
    if (!form.password) {
      errorMessage.value = 'Please enter your password.'
      return
    }
  }

  isLoading.value = true

  try {
    let user
    if (isSignUp.value) {
      user = await signup(form.name.trim(), form.email.trim(), form.password)
    } else {
      user = await login(form.email.trim(), form.password === '••••••••' ? 'inspace2026' : form.password)
    }

    emit('success', user)
    await navigateTo('/library')
  } catch (err: any) {
    errorMessage.value = err.message || 'An error occurred during authentication.'
  } finally {
    isLoading.value = false
  }
}
</script>
