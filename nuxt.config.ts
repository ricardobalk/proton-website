import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'
import { viteRequire } from 'vite-require';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [svgLoader(
      {
        svgo: false // Keep in mind to optimize SVGs before adding them to the website.
      }
    ), viteRequire()]
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});