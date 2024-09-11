// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // Define configuration
// export default defineConfig({
//   plugins: [react()],
//   root: './frontend',  // Make sure Vite looks in the correct directory
//   build: {
//     outDir: 'dist',  // Output directory for build files
//     rollupOptions: {
//       input: '/public/index.html'  // Correct entry point for Rollup
//     }
//   }
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define configuration
export default defineConfig({
  plugins: [react()],
  root: '.',  // The root is now the current directory (frontend)
  build: {
    outDir: 'dist',  // Output directory for build files
    rollupOptions: {
      input: 'public/index.html'  // Entry point relative to the root directory
    }
  }
});
