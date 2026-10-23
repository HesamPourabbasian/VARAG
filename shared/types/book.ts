export type BookFormat = 'PDF' | 'EPUB'

export interface Book {
  id: string
  title: string
  subtitle: string
  author: string
  format: BookFormat
  size: string
  pages: number
  category: string
  color: 'blue' | 'peach' | 'lavender' | 'coral' | 'purple' | 'mint' | 'yellow'
  rating: number
  reviewsCount?: number
  isPopular?: boolean
  isOngoing?: boolean
  isBestSale?: boolean
  isUploaded?: boolean
  isBookmarked?: boolean
  isFavorite?: boolean
  progress?: number // 0 to 100 for ongoing books
  daysLeft?: number
  iconType: string
  description?: string
  tableOfContents?: string[]
}

export interface AchievementUser {
  id: string
  name: string
  avatar: string
  progress: number
  daysLeft: number
  color: string
}
