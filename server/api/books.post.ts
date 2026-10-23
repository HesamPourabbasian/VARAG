import { booksStore } from '../data/booksData'
import type { Book, BookFormat } from '../../shared/types/book'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body || !body.title) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Title is required to upload a digital book'
    })
  }

  const format: BookFormat = (body.format?.toUpperCase() === 'EPUB') ? 'EPUB' : 'PDF'
  const randomId = 'book-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5)

  const newBook: Book = {
    id: randomId,
    title: body.title.trim(),
    subtitle: body.subtitle?.trim() || `Uploaded digital ${format} document`,
    author: body.author?.trim() || 'Community Member',
    format,
    size: body.size || '3.5 MB',
    pages: Number(body.pages) || 120,
    category: body.category || 'General Reading',
    color: body.color || (format === 'PDF' ? 'blue' : 'peach'),
    rating: 5.0,
    reviewsCount: 1,
    isPopular: false,
    isOngoing: true,
    isUploaded: true,
    progress: 0,
    daysLeft: 14,
    isBookmarked: false,
    isFavorite: false,
    iconType: body.iconType || 'custom-upload',
    description: body.description?.trim() || `A newly uploaded digital ${format} volume added to the VARAG knowledge repository.`,
    tableOfContents: [
      'Document Introduction & Metadata',
      'Chapter 1: Primary Overview',
      'Chapter 2: Key Concepts & Index',
      'Chapter 3: Summary & Notes'
    ]
  }

  // Prepend to store so newly uploaded books appear first in Ongoing / Recent
  booksStore.unshift(newBook)

  return {
    success: true,
    message: `Digital book "${newBook.title}" successfully uploaded and indexed!`,
    book: newBook
  }
})
