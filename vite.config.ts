import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts';
import yaml from '@rollup/plugin-yaml';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(), tailwindcss(), dts(), yaml(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'NavbarPlexicus',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', "@radix-ui/react-select", "lucide-react"],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@radix-ui/react-select': 'SelectPrimitive',
          'lucide-react': 'lucideReact',
        },
      },
    }
  }
})
