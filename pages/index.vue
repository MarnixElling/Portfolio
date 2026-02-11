<script lang="ts" setup>
import StorybookCard from '@components/organisms/StorybookCard.vue';
import StacksCard from '@components/organisms/StacksCard.vue';
import ExperienceCard from '@components/organisms/ExperienceCard.vue';
import EducationCard from '@components/organisms/EducationCard.vue';
import GeneralSkillsCard from '@components/organisms/GeneralSkillsCard.vue';

definePageMeta({
  name: 'Home',
  title: 'Home',
  description: 'Nuxt 3 (Vue 3 + TS + GraphQL) Frontend Developer | WCAG 2.1 | SEO-ready | Scalable UI Architecture',
  layout: 'default',
});
</script>

<template>
  <NuxtLayout>
    <div class="flex gap-6 relative flex-col md:flex-row print:flex-row">
      <div
        class="
          flex flex-col h-fit gap-6
          md:sticky md:top-0 md:basis-11/12 lg:basis-1/2
          print:basis-1/2
        "
      >
        <ExperienceCard />
        <EducationCard class="hidden print:flex" />
      </div>
      <div class="flex flex-col gap-6 items-center justify-start print:basis-1/2">
        <StacksCard class="grow-0 h-fit print:h-min" />
        <div class="flex gap-6 w-full flex-col lg:flex-row print:flex-col">
          <GeneralSkillsCard class="grow" />
          <EducationCard class="grow print:hidden" />
        </div>
        <StorybookCard class="print:hidden" />
      </div>
    </div>
  </NuxtLayout>
</template>
