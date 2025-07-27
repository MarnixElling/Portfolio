<script setup lang="ts">
import Card from '@components/card/Card.vue';
import Divider from '@components/divider/Divider.vue';
import SpecificationCard from '@components/specificationCard/SpecificationCard.vue';

const experiences = [
  {
    title: 'Front-endontwikkelaar (medior)',
    description: 'Mogelijk BV - Fulltime',
    img: '/experiences/mogelijk.png',
    startDate: 'apr. 2022',
    endDate: 'heden (3 jaar en 4 maanden)',
    stacks: [
      {
        title: 'Vue.js',
        img: '/logos/vue.png',
      },
      {
        title: 'Nuxt.js',
        img: '/logos/nuxt.png',
      },
      {
        title: 'JavaScript',
        img: '/logos/javascript.png',
      },
      {
        title: 'TypeScript',
        img: '/logos/typescript.png',
      },
      {
        title: 'Tailwind CSS',
        img: '/logos/tailwind.png',
      },
    ],
  },
  {
    title: 'Front-endontwikkelaar (stagiar)',
    description: 'Levarne - Fulltime',
    img: '/experiences/levarne.png',
    startDate: 'sep. 2020',
    endDate: 'apr. 2021 (8 maanden)',
    stacks: [
      {
        title: 'Vue.js',
        img: '/logos/vue.png',
      },
      {
        title: 'Nuxt.js',
        img: '/logos/nuxt.png',
      },
      {
        title: 'JavaScript',
        img: '/logos/javascript.png',
      },
    ],
  },
];
</script>

<template>
  <Card title="Ervaring">
    <ul class="flex flex-col gap-6">
      <template v-for="(experience, index) in experiences" :key="experience.title">
        <li>
          <Experience :experience="experience">
            <SpecificationCard class="w-fit mt-4">
              <template v-for="stack in experience.stacks" :key="stack.title">
                <img :title="stack.title" :src="stack.img" :alt="stack.title" class="size-6" />
              </template>
            </SpecificationCard>
          </Experience>
        </li>
        <Divider v-if="index < (experiences.length - 1)" />
      </template>
    </ul>
  </Card>
</template>
