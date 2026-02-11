<script setup lang="ts">
import Card from '@components/molecules/Card.vue';
import CardHeader from '@components/atoms/CardHeader.vue';
import Divider from '@components/atoms/Divider.vue';
import StackList from '@components/molecules/StackList.vue';

const coreStacks = [
  {
    title: 'Vue',
    img: '/logos/vue.png',
  },
  {
    title: 'Nuxt',
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
    title: 'Tailwind',
    img: '/logos/tailwind.png',
  },
  {
    title: 'Sass',
    img: '/logos/sass.png',
  },
  {
    title: 'HTML5',
    img: '/logos/html5.png',
  },
];

const toolingStacks = [
  {
    title: 'Pinia',
    img: '/logos/pinia.png',
  },
  {
    title: 'Storybook',
    img: '/logos/storybook.png',
  },
  {
    title: 'URQL',
    img: '/logos/urql.png',
  },
  {
    title: 'Vite',
    img: '/logos/vite.png',
  },
  {
    title: 'Vitest',
    img: '/logos/vitest.png',
  },
  {
    title: 'Apollo',
    img: '/logos/apollo.png',
  },
];
</script>

<template>
  <Card title="Core Stacks">
    <StackList :stacks="coreStacks" />
    <Divider />
    <CardHeader>Tooling Stacks</CardHeader>
    <StackList :stacks="toolingStacks" />
  </Card>
</template>
