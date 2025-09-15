import path from 'path';
import vue from '@vitejs/plugin-vue';

import type { StorybookConfig } from '@storybook/vue3-vite';

export const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|ts|jsx|tsx|vue)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal(configVite) {
    configVite.plugins = [...(configVite.plugins || []), vue()];
    configVite.resolve = {
      ...(configVite.resolve || {}),
      alias: {
        ...(configVite.resolve?.alias || {}),
        '@assets': path.resolve(__dirname, '../assets'),
        '@components': path.resolve(__dirname, '../components'),
        '@composables': path.resolve(__dirname, '../composables'),
        '@layouts': path.resolve(__dirname, '../layouts'),
        '@stores': path.resolve(__dirname, '../stores'),
      },
    };
    return configVite;
  },
};

export default config;
