<script setup lang="ts">
import SpecificationCard from '@components/atoms/SpecificationCard.vue';

import type { Stack } from '@assets/types';

export interface Props {
  stacks: Stack[];
}

defineProps<Props>();
</script>

<template>
  <ul class="flex flex-wrap gap-3">
    <li v-for="stack in stacks" :key="stack.title" class="w-fit">
      <SpecificationCard class="w-full">
        <img :src="stack.img" :alt="stack.title" class="size-6" />
        <figcaption class="font-semibold">{{ stack.title }}</figcaption>
      </SpecificationCard>
    </li>
  </ul>
</template>
