<script setup lang="ts">
import Card from '@components/molecules/Card.vue';
import Experience from '@components/atoms/Experience.vue';
import Divider from '@components/atoms/Divider.vue';

const experiences = [
  {
    title: 'Hogeschool van Amsterdam',
    description: 'propedeuse, ICT- en mediabeheer',
    img: '/experiences/hva.png',
    startDate: new Date('2020-09-01'),
    endDate: new Date('2021-07-01'),
  },
  {
    title: 'Grafisch Lyceum Utrecht',
    description: 'mediadeveloper, ICT- en mediabeheer',
    img: '/experiences/glu.png',
    startDate: new Date('2016-09-01'),
    endDate: new Date('2020-07-01'),
  },
];
</script>

<template>
  <Card title="Opleiding">
    <ul class="flex flex-col gap-6">
      <template v-for="(experience, index) in experiences" :key="experience.title">
        <li><Experience :experience="experience" /></li>
        <Divider v-if="index < (experiences.length - 1)" />
      </template>
    </ul>
  </Card>
</template>
