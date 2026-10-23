import { ref, computed } from 'vue'

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  joinedDate?: string
}

export const useAuth = () => {
  const authCookie = useCookie<User | null>('varag_auth_user', {
    default: () => ({
      id: 'usr-1',
      name: 'Irham Muhammad',
      email: 'bonjourguys@talk.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
      joinedDate: 'October 2026'
    }),
    maxAge: 60 * 60 * 24 * 7 // 7 days
  })

  const currentUser = useState<User | null>('auth_user', () => authCookie.value)

  const isAuthenticated = computed(() => !!currentUser.value)

  const login = async (email: string, password: string) => {
    // Simulate network latency for authentic feel
    await new Promise((resolve) => setTimeout(resolve, 600))

    if (!email || !password) {
      throw new Error('Please fill in both email and password.')
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long.')
    }

    // Default to Irham if matching demo, or dynamic username from email
    const namePart = email.split('@')[0]
    const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1)

    const user: User = {
      id: `usr-${Date.now()}`,
      name: email === 'bonjourguys@talk.com' ? 'Irham Muhammad' : formattedName,
      email: email.trim().toLowerCase(),
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
      joinedDate: 'October 2026'
    }

    currentUser.value = user
    authCookie.value = user
    return user
  }

  const signup = async (name: string, email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 700))

    if (!name || !email || !password) {
      throw new Error('Please fill in all required fields.')
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long.')
    }

    const user: User = {
      id: `usr-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      avatar: `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(name)}`,
      joinedDate: 'October 2026'
    }

    currentUser.value = user
    authCookie.value = user
    return user
  }

  const logout = () => {
    currentUser.value = null
    authCookie.value = null
    navigateTo('/login')
  }

  return {
    currentUser,
    isAuthenticated,
    login,
    signup,
    logout
  }
}
