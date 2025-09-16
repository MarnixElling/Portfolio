<script setup lang="ts">
import type { Language } from '@assets/types';

export interface Props {
 language: Language;
}

defineProps<Props>();
</script>

<template>
  <dl class="flex gap-1 items-center text-sm">
    <img :src="language.img" :alt="language.name" :title="language.name" aria-hidden class="size-6 mr-2" />
    <dt class="font-medium">{{ language.name }}</dt>
    <dd class="text-gray dark:text-white transition-all duration-500"> - {{ language.level }}</dd>
  </dl>
</template>
