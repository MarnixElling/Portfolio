<script lang="ts" setup>
import Lights from '@components/templates/Lights.vue';
import Header from '@components/templates/Header.vue';

import { useRoute } from 'vue-router';
import { useHead } from 'nuxt/app';

const route = useRoute();

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
  <Header />
  <main class="max-w-8xl mx-auto w-full max-h-dvh py-12 px-6">
    <slot />
    <Lights />
  </main>
</template>
