# UDBHAV – The Inter-IIIT Hackathon 2025–26

A cyberpunk-grade, multi-page Next.js (App Router) site for **UDBHAV**, hosted by **IIIT Sri City**, uniting 24 IIITs. This drop focuses on design + front-end interactions; backend integration is intentionally deferred.

## Stack
- Next.js 14 (App Router, TypeScript)
- TailwindCSS + Framer Motion
- Dark neon UI system with reusable components

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Dev server**
   ```bash
   npm run dev
   ```
3. **Build/start**
   ```bash
   npm run build
   npm start
   ```

## Project Structure
- `src/app/(site)` – App Router pages (`/`, `/about`, `/schedule`, `/iiits`, `/team`, `/contact`, `/sponsors`)
- `src/components` – UI atoms, layout, and sections
- `src/data` – Static datasets for IIITs, team, sponsors, and rounds
- `src/styles/globals.css` – Global neon theming and utilities

## Data
Current build ships with static data (24 IIIT placeholders, team roster, sponsors). Pages are ready to plug into a backend or CMS later—swap `src/data/*.ts` for API calls when you wire it up.

## Notes
- Animations via Framer Motion (page transitions and micro-interactions)
- Dark neon theming with accessible contrasts
- Metadata + OG tags configured in `src/app/layout.tsx`

Happy building — may your commits glow neon!
