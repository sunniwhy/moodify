import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // o el framework que uses

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/moodify/', // <-- Añade esta línea con el nombre de tu repositorio
})
