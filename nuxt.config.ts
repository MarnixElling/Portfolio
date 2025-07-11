// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'node:path';

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  alias: {
    '@assets': resolve(__dirname, './assets'),
    '@components': resolve(__dirname, './components'),
    '@layouts': resolve(__dirname, './layouts'),
    '@helpers': resolve(__dirname, './helpers'),
    '@stores': resolve(__dirname, './stores'),
    '@public': resolve(__dirname, './public'),
  },
  css: [
    '@assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {
        config: resolve(__dirname, './tailwind.config.js'),
      },
      autoprefixer: {},
    },
  },
});
