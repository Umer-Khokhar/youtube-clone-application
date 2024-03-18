import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import env from 'vite-plugin-env'; // Import the vite-plugin-env plugin

export default defineConfig({
  plugins: [
    react(),
    // env() // Add the env plugin to the plugins array
  ]
});
