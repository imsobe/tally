import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite config. `server.port` reads PORT from the environment so review-os can serve a
 * review-pass's edited worktree on a port IT picks (the serve-command renderer spawns
 * `bun run dev` with PORT set and polls until it answers). `strictPort` makes the server
 * fail loudly rather than silently hop to another port — review-os is polling the exact one.
 */
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
    strictPort: true,
    host: true,
  },
})
