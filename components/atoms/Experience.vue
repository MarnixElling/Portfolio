<script setup lang="ts">
import { formatDateDifferenceYearsMonths, formatDateMonthYear, isToday } from '@composables/dates';

import type { Experience } from '@assets/types';

export interface Props {
  experience: Experience;
}

const props = defineProps<Props>();

const endDateToShow = computed(() => (
  isToday(props.experience.endDate) ? 'Heden' : formatDateMonthYear(props.experience.endDate)
));
</script>

<template>
  <figure class="flex items-start gap-6 w-full">
    <img :src="experience.img" :alt="experience.title" class="size-12 2xs:size-16 print:size-12" />
    <figcaption class="flex flex-col sm:gap-2 print:gap-0">
      <h3>{{ experience.title }}</h3>
      <p>{{ experience.description }}</p>
      <span class="text-gray dark:text-white print:!text-gray transition-all duration-500 mt-1">
        <time :datetime="experience.startDate.toISOString()" class="capitalize">
          {{ formatDateMonthYear(experience.startDate) }}
        </time>
        -
        <time :datetime="experience.endDate.toISOString()" class="capitalize">
          {{ endDateToShow }}
        </time>
        ({{ formatDateDifferenceYearsMonths(experience.startDate, experience.endDate) }})
      </span>
    </figcaption>
    <slot />
  </figure>
</template>
