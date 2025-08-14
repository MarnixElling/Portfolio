<script setup lang="ts">
export interface Props {
  img?: string;
  text: string;
}

defineProps<Props>();
</script>

<template>
  <p class="flex items-center gap-3">
    <img v-if="img" :src="img" :alt="text" aria-hidden class="size-6" />
    <slot />
    {{ text }}
  </p>
</template>
