import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'html/index.html'),
        projetos: resolve(__dirname, 'html/projetos.html'),
        cadastro: resolve(__dirname, 'html/cadastro.html')
      }
    }
  }
});
