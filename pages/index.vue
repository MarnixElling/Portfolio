<script lang="ts" setup>
import Grid from '@components/templates/Grid.vue';

definePageMeta({
  name: 'Home',
  title: 'Home',
  description: 'Strong Medior Nuxt 3 (Vue 3 + TS + GraphQL) Frontend Developer | WCAG 2.1 & SEO-ready | Scalable UI Architecture',
  layout: 'default',
});
</script>

<template>
  <NuxtLayout>
    <div class="h-full">
      <Grid />
    </div>
  </NuxtLayout>
</template>
