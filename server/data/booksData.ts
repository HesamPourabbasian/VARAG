import type { Book, AchievementUser } from '../../shared/types/book'

export const initialBooks: Book[] = [
  // --- Popular Section (Top Row in Screenshot) ---
  {
    id: 'pop-1',
    title: 'The book is an essential key to unlock minds',
    subtitle: 'This is just a general example of a digital masterwork...',
    author: 'Irham Muhammad',
    format: 'PDF',
    size: '14.2 MB',
    pages: 320,
    category: 'Computer Science',
    color: 'blue',
    rating: 4.8,
    reviewsCount: 142,
    isPopular: true,
    isBookmarked: false,
    isFavorite: true,
    iconType: 'popular-1',
    description: 'An inspiring deep-dive into digital libraries, knowledge retrieval, and computational architectures for high-speed information indexing.',
    tableOfContents: [
      'Chapter 1: The Architecture of Digital Information',
      'Chapter 2: Semantic Graph Indexing for Modern Texts',
      'Chapter 3: Distributing Knowledge at Petabyte Scale',
      'Chapter 4: Future Frontiers of Human-Computer Symbiosis'
    ]
  },
  {
    id: 'pop-2',
    title: 'The book is an essential key to unlock creativity',
    subtitle: 'This is just a general example of a design manual...',
    author: 'Elena Rostova',
    format: 'EPUB',
    size: '4.8 MB',
    pages: 248,
    category: 'Design & UX',
    color: 'peach',
    rating: 4.7,
    reviewsCount: 98,
    isPopular: true,
    isBookmarked: true,
    isFavorite: false,
    iconType: 'popular-2',
    description: 'A tactile masterclass on visual hierarchy, spatial rhythm, and modern aesthetic systems for web and physical publications.',
    tableOfContents: [
      'Chapter 1: Form Follows Meaning',
      'Chapter 2: Color Harmonies and Cognitive Load',
      'Chapter 3: Micro-interactions and Delight',
      'Chapter 4: The Tactile Digital Frontier'
    ]
  },
  {
    id: 'pop-3',
    title: 'The book is an essential key to unlock focus',
    subtitle: 'This is just a general example of a time management guide...',
    author: 'Marcus Vance',
    format: 'PDF',
    size: '18.5 MB',
    pages: 410,
    category: 'Productivity',
    color: 'lavender',
    rating: 4.9,
    reviewsCount: 310,
    isPopular: true,
    isBookmarked: false,
    isFavorite: false,
    iconType: 'popular-3',
    description: 'Strategies for deep cognitive endurance, rhythmic sprints, and maintaining peak intellectual clarity in an attention-starved economy.',
    tableOfContents: [
      'Chapter 1: Reclaiming Attention Sovereignty',
      'Chapter 2: Circadian Deep Work Protocols',
      'Chapter 3: Digital Minimalism for Builders',
      'Chapter 4: The 4-Hour Synthesis Sprint'
    ]
  },
  {
    id: 'pop-4',
    title: 'The book is an essential key to unlock wisdom',
    subtitle: 'This is just a general example of philosophy & mindfulness...',
    author: 'Sophia Chen',
    format: 'EPUB',
    size: '6.1 MB',
    pages: 195,
    category: 'Philosophy',
    color: 'coral',
    rating: 4.6,
    reviewsCount: 84,
    isPopular: true,
    isBookmarked: false,
    isFavorite: true,
    iconType: 'popular-4',
    description: 'Reflections on lifelong curiosity, mental peace, and the timeless rituals of reading across civilizations.',
    tableOfContents: [
      'Chapter 1: The Sanctuary of the Page',
      'Chapter 2: Socratic Inquiry in Everyday Life',
      'Chapter 3: Silence and Contemplation',
      'Chapter 4: Passing the Torch of Knowledge'
    ]
  },

  // --- Ongoing Section (Bottom Row in Screenshot) ---
  {
    id: 'ong-1',
    title: 'The book is an essential guide to modern systems',
    subtitle: 'This is just a general example of systems thinking...',
    author: 'Alexander Wright',
    format: 'PDF',
    size: '22.0 MB',
    pages: 512,
    category: 'Engineering',
    color: 'purple',
    rating: 4.9,
    reviewsCount: 220,
    isOngoing: true,
    progress: 74,
    daysLeft: 5,
    isBookmarked: true,
    isFavorite: false,
    iconType: 'ongoing-1',
    description: 'Distributed fault tolerance, consensus models, and resilient software topology for modern digital infrastructures.',
    tableOfContents: [
      'Chapter 1: The Anatomy of Resilience',
      'Chapter 2: Raft, Paxos, and Distributed Truth',
      'Chapter 3: Event Sourcing at Global Scale',
      'Chapter 4: Chaos Engineering Experiments'
    ]
  },
  {
    id: 'ong-2',
    title: 'The book is an essential path to creative writing',
    subtitle: 'This is just a general example of narrative craft...',
    author: 'Chloe Dupont',
    format: 'EPUB',
    size: '3.4 MB',
    pages: 180,
    category: 'Literature',
    color: 'mint',
    rating: 4.5,
    reviewsCount: 65,
    isOngoing: true,
    progress: 45,
    daysLeft: 9,
    isBookmarked: false,
    isFavorite: true,
    iconType: 'ongoing-2',
    description: 'Crafting unforgettable prose, building rich fictional worlds, and finding your distinct literary voice through daily practice.',
    tableOfContents: [
      'Chapter 1: The Spark of the Inciting Incident',
      'Chapter 2: Dialogue That Breaths and Bleeds',
      'Chapter 3: Worldbuilding Without Overwhelm',
      'Chapter 4: The Revision Crucible'
    ]
  },
  {
    id: 'ong-3',
    title: 'The book is an essential foundation for algorithmic logic',
    subtitle: 'This is just a general example of computational logic...',
    author: 'Dr. Hiroshi Tanaka',
    format: 'PDF',
    size: '16.7 MB',
    pages: 390,
    category: 'Mathematics',
    color: 'lavender',
    rating: 4.9,
    reviewsCount: 180,
    isOngoing: true,
    progress: 88,
    daysLeft: 2,
    isBookmarked: false,
    isFavorite: false,
    iconType: 'ongoing-3',
    description: 'A rigorous exposition of discrete mathematics, graph traversals, dynamic programming, and complexity theories.',
    tableOfContents: [
      'Chapter 1: Asymptotic Invariance and Proofs',
      'Chapter 2: Shortest Paths and Flow Networks',
      'Chapter 3: Randomized Algorithms & Probabilistic Logic',
      'Chapter 4: P vs NP Frontiers'
    ]
  },
  {
    id: 'ong-4',
    title: 'The book is an essential handbook for product strategy',
    subtitle: 'This is just a general example of agile development...',
    author: 'Irham Muhammad',
    format: 'EPUB',
    size: '8.2 MB',
    pages: 280,
    category: 'Business',
    color: 'blue',
    rating: 4.7,
    reviewsCount: 114,
    isOngoing: true,
    progress: 25,
    daysLeft: 14,
    isBookmarked: true,
    isFavorite: true,
    iconType: 'ongoing-4',
    description: 'How exceptional cross-functional teams validate problem spaces, build roadmaps, and ship products that customers love.',
    tableOfContents: [
      'Chapter 1: Discovering the Unarticulated Need',
      'Chapter 2: Rapid Prototyping & Feedback Loops',
      'Chapter 3: The North Star Metric Dilemma',
      'Chapter 4: Scaling Product Velocity'
    ]
  },

  // --- Best Sales Section (Right Sidebar in Screenshot) ---
  {
    id: 'bs-1',
    title: 'Grow green',
    subtitle: 'Botanical indoor garden handbook',
    author: 'Sylvia Thorne',
    format: 'EPUB',
    size: '5.2 MB',
    pages: 160,
    category: 'Lifestyle',
    color: 'peach',
    rating: 4.5,
    isBestSale: true,
    iconType: 'bestsale-1',
    description: 'Urban gardening, soil microbiomes, and nurturing verdant plant life inside modern apartments.'
  },
  {
    id: 'bs-2',
    title: 'Raise a plant',
    subtitle: 'Beginner plant care & watering schedules',
    author: 'Kasper Lindqvist',
    format: 'PDF',
    size: '9.4 MB',
    pages: 210,
    category: 'Home & Garden',
    color: 'lavender',
    rating: 4.0,
    isBestSale: true,
    iconType: 'bestsale-2',
    description: 'A visual compendium of tropical foliage, humidity controls, and soil nutrients.'
  },
  {
    id: 'bs-3',
    title: 'One questin...',
    subtitle: 'Crucial inquiries that reshape teams',
    author: 'Miriam Vance',
    format: 'PDF',
    size: '7.8 MB',
    pages: 240,
    category: 'Leadership',
    color: 'purple',
    rating: 4.5,
    isBestSale: true,
    iconType: 'bestsale-3',
    description: 'Master the art of high-impact strategic questioning to unblock deadlocks.'
  },
  {
    id: 'bs-4',
    title: 'Unplug day',
    subtitle: 'Reclaiming mental space from digital noise',
    author: 'Julian Davies',
    format: 'EPUB',
    size: '3.9 MB',
    pages: 175,
    category: 'Wellness',
    color: 'coral',
    rating: 4.0,
    isBestSale: true,
    iconType: 'bestsale-4',
    description: 'Weekend detox protocols, sensory grounding, and reclaiming quiet focus.'
  },
  {
    id: 'bs-5',
    title: 'Best year',
    subtitle: 'Annual blueprint for extraordinary growth',
    author: 'Rachel Sterling',
    format: 'EPUB',
    size: '6.4 MB',
    pages: 295,
    category: 'Self-Improvement',
    color: 'peach',
    rating: 3.5,
    isBestSale: true,
    iconType: 'bestsale-5',
    description: 'Designing systems, quarterly retrospectives, and compounding personal habits.'
  }
]

export const achievementUsers: AchievementUser[] = [
  {
    id: 'ach-1',
    name: 'Irham Muhammad',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
    progress: 66,
    daysLeft: 7,
    color: '#6366F1'
  },
  {
    id: 'ach-2',
    name: 'Sarah Connor',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80',
    progress: 33,
    daysLeft: 12,
    color: '#EC4899'
  }
]

// In-memory collection of all books
export const booksStore: Book[] = [...initialBooks]
