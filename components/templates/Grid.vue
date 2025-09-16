<script setup lang="ts">
import StorybookCard from '@components/organisms/StorybookCard.vue';
import ColumnWrapper from '@components/atoms/ColumnWrapper.vue';
import StacksCard from '@components/organisms/StacksCard.vue';
import ExperienceCard from '@components/organisms/ExperienceCard.vue';
import EducationCard from '@components/organisms/EducationCard.vue';
import GeneralSkillsCard from '@components/organisms/GeneralSkillsCard.vue';

const cards = [
  StacksCard,
  ExperienceCard,
  GeneralSkillsCard,
  EducationCard,
  StorybookCard,
];
</script>

<template>
  <section
    class="w-full bg-transparent grid gap-3 grid-cols-1 md:gap-6 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3 print:grid-cols-2 print:gap-4"
  >
    <ColumnWrapper
      v-for="(card, index) in cards"
      :key="index"
      :class="{'md:col-span-2 print:hidden': index === cards.length - 1}"
    >
      <component :is="card" />
    </ColumnWrapper>
  </section>
</template>
