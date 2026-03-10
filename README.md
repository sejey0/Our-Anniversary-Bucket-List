# Our Bucket List 💝

A beautiful, full-stack bucket list web application built with Next.js, Tailwind CSS, and Supabase. Features a special security question-based authentication system.

## Features

- **Security Question Authentication** - Access controlled by a personal question
- **Full CRUD Operations** - Create, read, update, and delete bucket list items
- **Drag & Drop Reordering** - Rearrange items by dragging
- **Categories & Priorities** - Organize items by category, priority, and status
- **Search & Filter** - Find items quickly with search and filter options
- **Progress Tracking** - Visual progress bar and statistics
- **Category Charts** - Pie chart visualization of bucket list categories
- **Dark Mode** - Toggle between light and dark themes
- **PDF Export** - Export your bucket list as a PDF
- **Shareable View** - Read-only share page at `/share`
- **Random Idea Generator** - Get random bucket list suggestions
- **Motivational Quotes** - Rotating inspirational quotes
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Toast Notifications** - Feedback for all user actions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Charts**: Recharts
- **Drag & Drop**: @hello-pangea/dnd
- **PDF Export**: jsPDF
- **Language**: TypeScript

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd anniversary-bucket-list
npm install
```

### 2. Set up Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to the **SQL Editor** in your Supabase dashboard
4. Copy and paste the contents of `supabase/schema.sql` and run it
5. Go to **Settings > API** to find your project URL and anon key

### 3. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Login

Answer the security question: **"What is our monthsary?"**

## Deploying to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add the environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Deploy**

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── buckets/
│   │       ├── route.ts          # GET all, POST new
│   │       ├── [id]/route.ts     # GET, PUT, DELETE by ID
│   │       └── reorder/route.ts  # PUT reorder
│   ├── share/
│   │   └── page.tsx              # Read-only share page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   ├── BucketCard.tsx            # Individual bucket item card
│   ├── BucketForm.tsx            # Add/edit form
│   ├── CategoryChart.tsx         # Pie chart of categories
│   ├── Dashboard.tsx             # Main dashboard
│   ├── ExportButton.tsx          # PDF export and share
│   ├── FilterBar.tsx             # Search and filter controls
│   ├── Header.tsx                # App header with dark mode toggle
│   ├── LoginForm.tsx             # Security question login
│   ├── ProgressBar.tsx           # Progress tracking
│   └── QuoteCard.tsx             # Motivational quotes
├── hooks/
│   └── useAuth.ts                # Authentication and dark mode hooks
├── lib/
│   ├── data.ts                   # Quotes and random ideas
│   └── supabase.ts               # Supabase client
└── types/
    └── bucket.ts                 # TypeScript types and constants
```

## License

Private - For personal use only.
