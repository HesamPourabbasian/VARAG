import { booksStore } from '../../data/booksData'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  const book = booksStore.find(b => b.id === id)
  if (!book) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Book not found'
    })
  }

  if (typeof body.isBookmarked === 'boolean') {
    book.isBookmarked = body.isBookmarked
  }
  if (typeof body.isFavorite === 'boolean') {
    book.isFavorite = body.isFavorite
  }
  if (typeof body.progress === 'number') {
    book.progress = Math.min(100, Math.max(0, body.progress))
  }

  return {
    success: true,
    book
  }
})
