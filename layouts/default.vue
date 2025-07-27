<script lang="ts" setup>
import Light from '@components/light/Light.vue';

import { LightColors } from '@assets/enums/theme';
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
  <main class="max-w-8xl mx-auto w-full h-screen pt-12 bg-white dark:bg-black dark:!text-white">
    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <slot />
    </div>
    <!-- Background lights -->
    <div aria-hidden="true" class="fixed w-screen h-screen overflow-hidden">
      <Light :color="LightColors.PINK" class="-bottom-72 left-48" />
      <Light :color="LightColors.PURPLE" class="-top-20 left-20" />
      <Light :color="LightColors.YELLOW" class="top-20 right-[30%]" />
      <Light :color="LightColors.BLUE" class="top-1/5 right-40" />
    </div>
  </main>
</template>
