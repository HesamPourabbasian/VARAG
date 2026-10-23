<template>
  <div class="relative w-full max-w-[1020px] bg-white rounded-3xl md:rounded-[36px] shadow-[0_25px_70px_-15px_rgba(79,70,229,0.22)] border border-white/90 overflow-hidden transition-all duration-300">
    <div class="flex flex-col md:flex-row min-h-[580px] lg:min-h-[620px]">
      
      <!-- LEFT COLUMN: Clean Minimalist Auth Form (Exact match to login.webp) -->
      <div class="w-full md:w-[48%] lg:w-[46%] p-6 sm:p-8 md:p-12 flex flex-col justify-between z-20 bg-white relative">
        
        <!-- Top Section: Amber Sun Badge & Welcome Header -->
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <!-- Amber / Sun Badge (Exact match to login.webp) -->
            <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-300 shadow-md shadow-amber-400/30 flex items-center justify-center transform hover:scale-105 transition-transform">
              <div class="w-4 h-4 rounded-full bg-white/40 blur-[1px]"></div>
            </div>

            <!-- Return to Library Link -->
            <NuxtLink
              to="/"
              class="text-xs font-semibold text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1 group"
            >
              <svg class="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Library</span>
            </NuxtLink>
          </div>

          <!-- Main Brand & Mode Header -->
          <div class="space-y-1">
            <p class="text-xs md:text-sm font-semibold text-slate-400 tracking-wide">
              {{ isSignUp ? 'Get started with' : 'Welcome to' }}
            </p>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] tracking-tight flex items-center gap-2">
              <span>VARAG</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                {{ isSignUp ? 'Register' : 'Vault' }}
              </span>
            </h1>
            <p class="text-xs text-slate-400 pt-0.5">
              {{ isSignUp ? 'Create your reader account to upload & index books.' : 'Enter your credentials to unlock your digital book vault.' }}
            </p>
          </div>

          <!-- Quick Toggle Tabs (Login / Sign Up) -->
          <div class="flex p-1 bg-slate-100/80 rounded-xl w-fit text-xs font-semibold">
            <button
              type="button"
              @click="setMode(false)"
              :class="[
                'px-4 py-1.5 rounded-lg transition-all duration-200',
                !isSignUp ? 'bg-white text-indigo-600 shadow-sm font-bold' : 'text-slate-500 hover:text-slate-800'
              ]"
            >
              Login
            </button>
            <button
              type="button"
              @click="setMode(true)"
              :class="[
                'px-4 py-1.5 rounded-lg transition-all duration-200',
                isSignUp ? 'bg-white text-indigo-600 shadow-sm font-bold' : 'text-slate-500 hover:text-slate-800'
              ]"
            >
              Sign Up
            </button>
          </div>

          <!-- Error Alert Banner -->
          <div
            v-if="errorMessage"
            class="p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 text-xs flex items-center gap-2 animate-in fade-in"
          >
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ errorMessage }}</span>
          </div>

          <!-- Form Element -->
          <form @submit.prevent="handleSubmit" class="space-y-4 pt-1" novalidate>
            <!-- Full Name (Sign Up only) -->
            <div v-if="isSignUp" class="auth-field space-y-1">
              <label for="fullName" class="text-xs font-semibold text-slate-400">
                Full Name
              </label>
              <input
                id="fullName"
                v-model="form.name"
                type="text"
                required
                autocomplete="name"
                placeholder="Alex Morgan"
                class="auth-input"
              />
              <div class="auth-error-msg text-[11px] text-rose-500 items-center gap-1">
                <span>Please enter your name.</span>
              </div>
            </div>

            <!-- Email Field (Exact match from login.webp) -->
            <div class="auth-field space-y-1">
              <label for="email" class="text-xs font-semibold text-slate-400">
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                autocomplete="email"
                placeholder="bonjourguys@talk.com"
                class="auth-input font-medium"
              />
              <div class="auth-error-msg text-[11px] text-rose-500 items-center gap-1">
                <span>Please enter a valid email address.</span>
              </div>
            </div>

            <!-- Password Field (Exact match from login.webp) -->
            <div class="auth-field space-y-1">
              <div class="flex items-center justify-between">
                <label for="password" class="text-xs font-semibold text-slate-400">
                  Password
                </label>
                <!-- Show / Hide Password toggle -->
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="text-[11px] text-slate-400 hover:text-indigo-600 transition-colors"
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
                  :autocomplete="isSignUp ? 'new-password' : 'current-password'"
                  placeholder="••••••••"
                  class="auth-input tracking-wider font-mono text-sm"
                />
              </div>
              <div class="auth-error-msg text-[11px] text-rose-500 items-center gap-1">
                <span>Password must be at least 6 characters.</span>
              </div>
            </div>

            <!-- Confirm Password (Sign Up only) -->
            <div v-if="isSignUp" class="auth-field space-y-1">
              <label for="confirmPassword" class="text-xs font-semibold text-slate-400">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                v-model="form.confirmPassword"
                :type="showPassword ? 'text' : 'password'"
                required
                autocomplete="new-password"
                placeholder="••••••••"
                class="auth-input tracking-wider font-mono text-sm"
              />
              <div v-if="passwordMismatch" class="text-[11px] text-rose-500 flex items-center gap-1 pt-1">
                <span>Passwords do not match.</span>
              </div>
            </div>

            <!-- Remember me & Forgot Password (Login mode) -->
            <div v-if="!isSignUp" class="flex items-center justify-between pt-1">
              <label class="flex items-center gap-2 cursor-pointer text-xs text-slate-500 select-none">
                <input
                  type="checkbox"
                  v-model="rememberMe"
                  class="w-3.5 h-3.5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 accent-purple-600"
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                @click="fillDemoCredentials"
                class="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Fill Demo
              </button>
            </div>

            <!-- Terms agreement (Sign Up mode) -->
            <div v-if="isSignUp" class="pt-1">
              <label class="flex items-start gap-2 cursor-pointer text-[11px] text-slate-500 select-none">
                <input
                  type="checkbox"
                  v-model="agreedTerms"
                  required
                  class="w-3.5 h-3.5 mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 accent-purple-600"
                />
                <span>I agree to the Library Terms of Access & Privacy Policy</span>
              </label>
            </div>

            <!-- Submit Button (Pill button matching login.webp LOGIN) -->
            <div class="pt-4">
              <button
                type="submit"
                :disabled="isLoading"
                class="px-8 py-3 rounded-full bg-gradient-to-r from-[#9333EA] to-[#A855F7] hover:from-[#7E22CE] hover:to-[#9333EA] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <svg
                  v-if="isLoading"
                  class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
        <div class="pt-6 text-xs text-slate-400">
          <span v-if="!isSignUp">
            Dont have an account?
            <button
              type="button"
              @click="setMode(true)"
              class="text-[#A855F7] hover:text-[#7E22CE] font-bold underline underline-offset-2 ml-1 transition-colors"
            >
              Sign up
            </button>
          </span>
          <span v-else>
            Already have an account?
            <button
              type="button"
              @click="setMode(false)"
              class="text-[#A855F7] hover:text-[#7E22CE] font-bold underline underline-offset-2 ml-1 transition-colors"
            >
              Log in
            </button>
          </span>
        </div>
      </div>

      <!-- RIGHT COLUMN: Night Scene Illustration + Organic Wave (login.webp) -->
      <div class="w-full md:w-[52%] lg:w-[54%] relative min-h-[300px] md:min-h-full overflow-hidden bg-[#1E0C4C]">
        <!-- Full-fidelity vector illustration component -->
        <AuthVisualIllustration />

        <!-- Organic S-Curve overlay on desktop separating white form and night scene -->
        <div class="hidden md:block absolute top-0 bottom-0 left-0 w-28 -translate-x-[1px] pointer-events-none select-none z-10 h-full">
          <svg viewBox="0 0 100 680" preserveAspectRatio="none" class="w-full h-full fill-white">
            <!-- Smooth bezier wave matching the white form swooping into the illustration -->
            <path d="M 0 0 L 100 0 C 70 120, 95 240, 50 380 C 15 490, 45 590, 0 680 Z" />
          </svg>
        </div>

        <!-- Blue accent wave at the bottom-left of the card (Exact match to login.webp) -->
        <div class="hidden md:block absolute bottom-0 left-0 w-44 h-36 pointer-events-none select-none z-10">
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
  email: 'bonjourguys@talk.com',
  password: '••••••••',
  confirmPassword: ''
})

const passwordMismatch = computed(() => {
  return isSignUp.value && form.confirmPassword.length > 0 && form.password !== form.confirmPassword
})

const setMode = (signUp: boolean) => {
  isSignUp.value = signUp
  errorMessage.value = ''
  emit('mode-changed', signUp ? 'signup' : 'login')
}

const fillDemoCredentials = () => {
  form.email = 'bonjourguys@talk.com'
  form.password = 'inspace2026'
  errorMessage.value = ''
}

const handleSubmit = async () => {
  errorMessage.value = ''

  if (isSignUp.value && passwordMismatch.value) {
    errorMessage.value = 'Passwords do not match.'
    return
  }

  if (isSignUp.value && !agreedTerms.value) {
    errorMessage.value = 'Please accept the Library Terms & Privacy Policy to continue.'
    return
  }

  isLoading.value = true

  try {
    let user
    if (isSignUp.value) {
      user = await signup(form.name, form.email, form.password)
    } else {
      user = await login(form.email, form.password === '••••••••' ? 'inspace2026' : form.password)
    }

    emit('success', user)
    await navigateTo('/')
  } catch (err: any) {
    errorMessage.value = err.message || 'An error occurred during authentication.'
  } finally {
    isLoading.value = false
  }
}
</script>
