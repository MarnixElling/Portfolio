<script lang="ts" setup>
import Lights from '@components/templates/Lights.vue';
import Header from '@components/templates/Header.vue';
import GreenButton from '@components/molecules/GreenButton.vue';
import ToggleDarkMode from '@components/templates/ToggleDarkMode.vue';

import { ThemeOptions } from '@assets/enums';
import { useRoute } from 'vue-router';
import { useHead } from 'nuxt/app';
import { useThemeStore } from '@stores/useThemeStore';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const { isDark } = toRefs(useThemeStore());
const { setTheme } = useThemeStore();

const route = useRoute();

const saveAsPDF = () => window.print();

useHead(
  computed(() => ({
    meta: [
      {
        name: 'og:title',
        content: `${route.meta.title} | Portfolio`,
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
    ],
    titleTemplate: '%s | Portfolio',
  })),
);
</script>

<template>
  <Head>
    <Title>{{ route.meta.title }}</Title>
    <Link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png"
    />
    <Link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <Link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <Link
      href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&f[]=montserrat@700&display=swap"
      rel="stylesheet"
    />
    <Link rel="manifest" href="/favicons/site.webmanifest" />
    <Meta name="msapplication-TileColor" content="#ffffff" />
    <Meta name="theme-color" content="#ffffff" />
  </Head>
  <Header>
    <GreenButton @click="saveAsPDF">
      Bewaar CV
      <FontAwesomeIcon :icon="['fas', 'file-pdf']" />
    </GreenButton>
    <ToggleDarkMode :model-value="isDark" @update:modelValue="setTheme(isDark ? ThemeOptions.LIGHT : ThemeOptions.DARK)" />
  </Header>
  <main class="max-w-8xl mx-auto w-full px-3 pb-3 md:px-6 md:pb-6 print:pb-0">
    <slot />
    <Lights />
  </main>
</template>
