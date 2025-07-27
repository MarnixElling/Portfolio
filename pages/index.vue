<script lang="ts" setup>
import StacksCard from '@components/templates/StacksCard.vue';
import ExperienceCard from '@components/templates/ExperienceCard.vue';
import EducationCard from '@components/templates/EducationCard.vue';

definePageMeta({
  name: 'Home',
  title: 'Home',
  description: 'Strong Medior Nuxt 3 (Vue 3 + TS + GraphQL) Frontend Developer | WCAG 2.1 & SEO-ready | Scalable UI Architecture',
  layout: 'default',
});
</script>

<template>
  <NuxtLayout>
    <StacksCard />
    <ExperienceCard />
    <EducationCard />
  </NuxtLayout>
</template>
