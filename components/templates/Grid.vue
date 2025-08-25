<script setup lang="ts">
import ColumnWrapper from '@components/atoms/ColumnWrapper.vue';
import StacksCard from '@components/organisms/StacksCard.vue';
import ExperienceCard from '@components/organisms/ExperienceCard.vue';
import EducationCard from '@components/organisms/EducationCard.vue';
import ValuesAndLanguageCard from '@components/organisms/ValuesAndLanguageCard.vue';

const cards = [
  StacksCard,
  ExperienceCard,
  ValuesAndLanguageCard,
  EducationCard,
];
</script>

<template>
  <section class="w-full bg-transparent grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3 2xl:h-[calc(100dvh-128px)]">
    <ColumnWrapper v-for="(card, index) in cards" :key="index">
      <component :is="card" />
    </ColumnWrapper>
  </section>
</template>
