<script setup lang="ts">
import type { Experience } from '@assets/types';

export interface Props {
  experience: Experience;
}

defineProps<Props>();
</script>

<template>
  <figure class="flex items-start gap-6">
    <img :src="experience.img" :alt="experience.title" class="size-12 2xs:size-16 print:size-12" />
    <figcaption class="flex flex-col sm:gap-2">
      <h3>{{ experience.title }}</h3>
      <p>{{ experience.description }}</p>
      <time datetime="" class="text-gray dark:text-white transition-all duration-500 mt-1">
        {{ experience.startDate }} - {{ experience.endDate }}
      </time>
      <slot />
    </figcaption>
  </figure>
</template>
