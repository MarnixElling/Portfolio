<script setup lang="ts">
import Card from '@components/molecules/Card.vue';
import CardHeader from '@components/atoms/CardHeader.vue';
import Divider from '@components/atoms/Divider.vue';
import IconWithText from '@components/atoms/IconWithText.vue';
import Language from '@components/atoms/Language.vue';

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
  <Card title="Algemene vaardigheden">
    <ul class="flex flex-col gap-3">
      <li v-for="(value, index) in values" :key="index" class="font-medium">
        <IconWithText :img="value.img" :text="value.description" />
      </li>
    </ul>
    <Divider />
    <CardHeader>Talen</CardHeader>
    <Language v-for="lang in languages" :key="lang.name" :language="lang" />
  </Card>
</template>
