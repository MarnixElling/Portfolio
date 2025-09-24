<script setup lang="ts">
export interface Props {
  img: string;
  alt: string;
}

defineProps<Props>();
</script>

<template>
  <img
    :src="img"
    :alt="alt"
    :title="alt"
    class="rounded-full max-w-40 max-h-40 object-cover object-center shadow-md"
  />
</template>
