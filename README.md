# VARAG - Modern Digital Book Library & Vault

VARAG is a responsive, full-stack digital book library web application built with **Nuxt 4**, **Nitro**, and **Tailwind CSS**, featuring a clean 3D aesthetic inspired by modern reading interfaces.

## Features

- **Introductory Storytelling Page (`/`)**:
  - Parallel storytelling experience introducing VARAG (*ورق • کتابخانه دیجیتال*).
  - High-fidelity artwork narrative based on classic wonder:
    - **Chapter 1: The Portal** (`page3.webp`): Stepping through the hollow tree portal of curiosity.
    - **Chapter 2: The Vortex Vault** (`page2.webp`): Falling into the infinite sea of flying leaves, books, and keys.
    - **Chapter 3: The Banquet** (`page1.webp`): Gathering around the grand tea party of shared knowledge and achievement tracking.
  - Dedicated interactive entry buttons (**"Enter VARAG Library Portal"**) leading to the main library dashboard (`/library`).
  - Sticky navigation header with chapter steppers and live scroll indicators.
- **3D UI Design**: Floating decorations (ambient open book, ribbon, and pencil) with soft pastel glows and rounded glassmorphism-inspired containers.
- **Digital Library Catalog**:
  - Filter by **All Books**, **PDF Vault**, **EPUB Books**, **My Uploads**, or **Favorites**.
  - Real-time client & server search.
  - Popular and Ongoing reading sections.
- **Book Upload Flow**:
  - Drag-and-drop or select PDF and EPUB files.
  - Automatic size calculation and metadata tagging (title, author, genre, custom theme palette).
- **Interactive Book Reader & Viewer**:
  - 3D visual preview cover.
  - Chapter list and interactive sample text reader.
  - Reading progress tracker and bookmark toggle.
- **Authentication Pages (`/login` & `/signup`)**:
  - High-fidelity visual interface inspired by modern illustrated portal art (`login.webp`).
  - Night scene vector illustration with mountain ranges, starry night sky, glowing full moon, pine forest, modernist architectural villa, glowing stone steps, and celestial open doorway.
  - Organic bezier curve divider and bottom-left indigo accent wave.
  - Smooth animated toggle between Login and Sign Up modes.
  - Modern HTML5 validation (`:user-invalid`, `:user-valid`, `autocomplete`, format hints) adhering to modern web guidance.
  - Interactive password show/hide toggle, demo credentials quick-fill, and persistent auth cookie state.
- **Sidebar & Widgets**:
  - "Unlocks achievement" reading challenge cards with circular progress indicators.
  - "Best sales" book ranking.
  - Collapsible responsive drawer for mobile and tablet screens.
- **Full-Stack Nitro API**:
  - `GET /api/books`: Filtered digital book listing and counts.
  - `POST /api/books`: Live book upload and catalog indexing.
  - `PATCH /api/books/:id`: Live bookmark, favorite, and progress updates.

## Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/) (Vue 3, Vite, Nitro Server Engine)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

## Getting Started

### 1. Install Dependencies

```bash
# Using npm
npm install

# Or using pnpm
pnpm install
```

### 2. Run the Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

```bash
npm run build
npm run preview
```
