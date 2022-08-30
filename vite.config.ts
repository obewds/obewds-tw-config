/// <reference types="vitest"/>

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
      alias: {
          '@': resolve(__dirname, 'src'),
      },
  },
  server: {
      open: true,
  },
  test: {
      globals: true,
  },
  build: {
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ObewdsTwConfig',
      formats: ['es','cjs','umd','iife'],
      fileName: (format: string) => `obewds-tw-config.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: [
        'vue',
        '@obewds/tw-bg-palette-console',
        '@obewds/tw-bg-palette-default',
        '@obewds/tw-bg-palette-monochromatic',
        '@obewds/tw-bg-palette-pastel',
        '@obewds/tw-border-palette-default',
        '@obewds/tw-text-palette-default',
        'lodash.merge',
      ],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
          '@obewds/tw-bg-palette-console': 'TwBgPaletteConsole',
          '@obewds/tw-bg-palette-default': 'TwBgPaletteDefault',
          '@obewds/tw-bg-palette-monochromatic': 'TwBgPaletteMonochromatic',
          '@obewds/tw-bg-palette-pastel': 'TwBgPalettePastel',
          '@obewds/tw-border-palette-default': 'TwBorderPaletteDefault',
          '@obewds/tw-text-palette-default': 'TwTextPaletteDefault',
          'lodash.merge': 'merge',
        },
        //sourcemap: true,
      },
    },
  },
})
