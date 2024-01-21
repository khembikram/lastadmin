import { sync } from 'glob';
import { defineConfig } from 'vite';
import path, { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig(({ command, mode, ssrBuild }) => {
  const list = [];

  if (mode === 'production') {
    sync('*.html').forEach((file) => {
      list.push(file);
    });
  }

  return {
    base: '/lastadmin/',
    root: '.', 
    server: {
      open: true,
    },
    plugins: [
      handlebars({
        partialDirectory: resolve('./partials'),
      }),
    ],
    resolve: {
      alias: {
        '@css': path.resolve('./assets/css/'),
        '@/*': path.resolve('./*'),
      },
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: [
          'index.html',
          ...list,
        ],
      },
    },
  };
});
