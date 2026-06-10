# Tally

A tiny habit tracker — a minimal, real multi-screen React app.

Built as a **demo target for [review-os](https://github.com/imsobe/review-os)**: a small
but real product to point the review canvas at, pin comments on, and let the agent edit.
Four screens (Dashboard, Habits, Habit detail, Settings) and a handful of reusable
components, no backend (static fixtures in `src/data/habits.ts`).

## Run

```bash
bun install
bun run dev          # Vite dev server (honors PORT — review-os sets it per pass)
```

Open http://localhost:5173.

## Stack

Vite · React 18 · React Router · TypeScript. Plain CSS with design tokens in `src/index.css`.

## Structure

```
src/
  App.tsx              # router + shell
  components/          # Nav, Button, Card, Badge, StatTile, ProgressRing, HabitRow
  pages/               # Dashboard, Habits, HabitDetail, Settings
  data/habits.ts       # static habit fixtures + helpers
```
