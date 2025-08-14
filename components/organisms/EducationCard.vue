<script setup lang="ts">
import Card from '@components/molecules/Card.vue';
import Experience from '@components/atoms/Experience.vue';
import Divider from '@components/atoms/Divider.vue';

const experiences = [
  {
    title: 'Hogeschool van Amsterdam',
    description: 'propedeuse, ICT- en mediabeheer',
    img: '/experiences/hva.png',
    startDate: 'sep. 2020',
    endDate: 'jul. 2021',
  },
  {
    title: 'Grafisch Lyceum Utrecht',
    description: 'mediadeveloper, ICT- en mediabeheer',
    img: '/experiences/glu.png',
    startDate: 'sep. 2016',
    endDate: 'jul. 2020',
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
