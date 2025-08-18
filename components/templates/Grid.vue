<script setup lang="ts">
import columnWrapper from '@components/atoms/columnWrapper.vue';
import ValuesCard from '@components/organisms/ValuesCard.vue';
import StacksCard from '@components/organisms/StacksCard.vue';
import ExperienceCard from '@components/organisms/ExperienceCard.vue';
import EducationCard from '@components/organisms/EducationCard.vue';
import LanguageCard from '@components/organisms/LanguageCard.vue';

const cards = [
  ValuesCard,
  StacksCard,
  EducationCard,
  ExperienceCard,
  LanguageCard,
];
</script>

<template>
  <section class="w-full xl:h-[calc(100dvh-128px)] bg-transparent grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3">
    <columnWrapper v-for="(card, index) in cards" :key="index">
      <component :is="card" />
    </columnWrapper>
  </section>
</template>
