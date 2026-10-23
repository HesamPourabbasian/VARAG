import { booksStore, achievementUsers } from '../data/booksData'
import type { Book } from '../../shared/types/book'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const searchText = typeof query.search === 'string' ? query.search.toLowerCase().trim() : ''
  const format = typeof query.format === 'string' ? query.format.toUpperCase() : 'ALL'
  const tab = typeof query.tab === 'string' ? query.tab.toLowerCase() : 'all'

  let filtered: Book[] = [...booksStore]

  if (searchText) {
    filtered = filtered.filter(b => 
      b.title.toLowerCase().includes(searchText) ||
      b.author.toLowerCase().includes(searchText) ||
      b.category.toLowerCase().includes(searchText) ||
      b.subtitle.toLowerCase().includes(searchText)
    )
  }

  if (format === 'PDF' || format === 'EPUB') {
    filtered = filtered.filter(b => b.format === format)
  }

  if (tab === 'popular') {
    filtered = filtered.filter(b => b.isPopular)
  } else if (tab === 'ongoing') {
    filtered = filtered.filter(b => b.isOngoing)
  } else if (tab === 'uploaded') {
    filtered = filtered.filter(b => b.isUploaded)
  } else if (tab === 'favorites') {
    filtered = filtered.filter(b => b.isFavorite)
  } else if (tab === 'bookmarks') {
    filtered = filtered.filter(b => b.isBookmarked)
  }

  const popular = filtered.filter(b => b.isPopular)
  const ongoing = filtered.filter(b => b.isOngoing || b.isUploaded)
  const bestSales = booksStore.filter(b => b.isBestSale)
  const uploaded = booksStore.filter(b => b.isUploaded)

  return {
    books: filtered,
    popular: popular.length > 0 ? popular : filtered.slice(0, 4),
    ongoing: ongoing.length > 0 ? ongoing : filtered.slice(0, 4),
    bestSales,
    uploaded,
    achievements: achievementUsers,
    totalCount: booksStore.length,
    counts: {
      all: booksStore.length,
      pdf: booksStore.filter(b => b.format === 'PDF').length,
      epub: booksStore.filter(b => b.format === 'EPUB').length,
      uploaded: uploaded.length
    }
  }
})
