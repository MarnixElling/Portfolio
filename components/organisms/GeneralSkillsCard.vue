<script setup lang="ts">
import Card from '@components/molecules/Card.vue';
import CardHeader from '@components/atoms/CardHeader.vue';
import Divider from '@components/atoms/Divider.vue';
import IconWithText from '@components/atoms/IconWithText.vue';
import Language from '@components/atoms/Language.vue';

const values = [
  {
    img: '/emojis/bricks.png',
    description: 'Scalable UI Architecture',
  },
  {
    img: '/emojis/wand.png',
    description: 'Performance and Readability',
  },
  {
    img: '/emojis/search.png',
    description: 'Search Engine Optimization',
  },
  {
    img: '/emojis/wheelchair.png',
    description: 'WCAG 2.1 Toegankelijkheidsrichtlijnen',
  },
];

const languages = [
  {
    name: 'Nederlands',
    level: 'Moedertaal',
    img: '/flags/nl.png',
  },
  {
    name: 'English',
    level: 'Vloeiend',
    img: '/flags/uk.png',
  }
];
</script>

<template>
  <Card title="Specialiteiten">
    <ul class="flex flex-col gap-4">
      <li v-for="(value, index) in values" :key="index">
        <IconWithText>
          <img :src="value.img" :alt="value.description" aria-hidden class="size-6" />
          {{ value.description }}
        </IconWithText>
      </li>
    </ul>
    <Divider />
    <CardHeader>Talen</CardHeader>
    <Language v-for="lang in languages" :key="lang.name" :language="lang" />
  </Card>
</template>
