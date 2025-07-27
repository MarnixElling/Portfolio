
<script setup lang="ts">
export interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <article class="flex flex-col gap-6 p-6 rounded-lg shadow-card bg-transparent-light dark:bg-transparent-dark">
    <h2 class="text-gray font-medium uppercase">{{ props.title }}</h2>
    <slot />
  </article>
</template>