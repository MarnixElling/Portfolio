import { resolve } from 'node:path';

export default defineNuxtConfig({
  css: [
    '@assets/css/style.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  postcss: {
    plugins: {
      tailwindcss: {
        config: resolve(__dirname, './tailwind.config.js')
      },
      autoprefixer: {}
    }
  },
  alias: {
    '@assets': resolve(__dirname, './assets'),
    '@components': resolve(__dirname, './components'),
    '@composables': resolve(__dirname, './composables'),
    '@layouts': resolve(__dirname, './layouts'),
    '@stores': resolve(__dirname, './stores'),
    '@public': resolve(__dirname, './public'),
  },
  modules: ['@pinia/nuxt'],
  devtools: {
    enabled: process.env.NODE_ENV === 'development',
  }
});
