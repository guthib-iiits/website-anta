# UDBHAV – The Inter-IIIT Hackathon 2025–26

A cyberpunk-grade, multi-page Next.js (App Router) site for **UDBHAV**, hosted by **IIIT Sri City**, uniting 24 IIITs.

## Stack
- Next.js 14 (App Router, TypeScript)
- TailwindCSS + Framer Motion
- Prisma (MongoDB)
- Fully typed, reusable components

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Environment**
   Copy `.env.example` to `.env.local` and set `DATABASE_URL` (MongoDB connection).
3. **Prisma**
   ```bash
   npm run prisma:generate
   npm run prisma:seed
   ```
   Seed includes 24 IIITs, sample team, and sponsors.
4. **Dev server**
   ```bash
   npm run dev
   ```
5. **Build/start**
   ```bash
   npm run build
   npm start
   ```

## Importing data from Excel/CSV later
Convert Excel to CSV (UTF-8). Supported headers are listed below.

### IIIT import
```bash
npm run import:iiits ./data/iiits.csv
```
Columns: `name, city, state, latitude, longitude, website, logoUrl`
- Upserts by `name`.

### Team import
```bash
npm run import:team ./data/team.csv
```
Columns: `name, role, bio, imageUrl, order, socials`
- `socials` can be a JSON string (e.g., `{ "linkedin": "https://..." }`).
- Upserts by `name`.

## Project Structure
- `src/app/(site)` – App Router pages (`/`, `/about`, `/schedule`, `/iiits`, `/team`, `/contact`, `/sponsors`)
- `src/components` – UI atoms, layout, and sections
- `src/lib/prisma.ts` – Prisma client helper
- `prisma/schema.prisma` – MongoDB models (IIIT, TeamMember, Sponsor)
- `prisma/seed.ts` – Seeds IIIT roster, team, sponsors
- `scripts/import-iiits.ts`, `scripts/import-team.ts` – CSV import utilities

## Notes
- Animations via Framer Motion (page transitions and micro-interactions)
- Dark neon theming with accessible contrasts
- Metadata + OG tags configured in `src/app/layout.tsx`

Happy building — may your commits glow neon! 
