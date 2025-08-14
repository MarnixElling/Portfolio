<script setup lang="ts">
import Card from '@components/molecules/Card.vue';
import Language from '@components/atoms/Language.vue';

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
  <Card title="Talen">
    <Language v-for="lang in languages" :key="lang.name" :language="lang" />
  </Card>
</template>
