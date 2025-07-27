// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'node:path';

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  alias: {
    '@assets': resolve(__dirname, './assets'),
    '@components': resolve(__dirname, './components'),
    '@layouts': resolve(__dirname, './layouts'),
    '@composables': resolve(__dirname, './composables'),
    '@stores': resolve(__dirname, './stores'),
    '@public': resolve(__dirname, './public'),
  },
  css: [
    '@assets/css/style.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {
        config: resolve(__dirname, './tailwind.config.js'),
      },
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt'],
  fontawesome: {
    icons: {
      solid: ['faDownload'],
      brands: ['faGithub', 'faLinkedin']
    }
  },
});