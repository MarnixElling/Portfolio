<script setup lang="ts">
import Card from '@components/molecules/Card.vue';
import IconWithText from '@components/atoms/IconWithText.vue';

const values = [
  {
    img: '/emojis/bricks.png',
    description: 'Scalable UI Architecture (smart/dumb splits, nuxtlayers)',
  },
  {
    img: '/emojis/wand.png',
    description: 'Perfomance + Readability',
  },
  {
    img: '/emojis/search.png',
    description: 'SEO (HTML5 semantics & structured markup)',
  },
  {
    img: '/emojis/wheelchair.png',
    description: 'WCAG 2.1 Toegankelijkheidsrichtlijnen',
  },
];
</script>

<template>
  <div class="h-full flex flex-col gap-6 justify-between">
    <Card title="Core Values">
      <ul class="flex flex-col gap-3">
        <li v-for="(value, index) in values" :key="index" class="font-medium">
          <IconWithText :img="value.img" :text="value.description" />
        </li>
      </ul>
    </Card>
  </div>
</template>
