<script setup lang="ts">
export interface Props {
  text: string;
  img?: string;
  is?: 'div' | 'p' | 'span' | 'li' | 'a' | 'p';
}

withDefaults(defineProps<Props>(), {
  img: undefined,
  is: 'p',
});
</script>

<template>
  <component :is="is" class="flex items-center gap-2 break-all">
    <img v-if="img" :src="img" :alt="text" aria-hidden class="size-6" />
    <slot />
    {{ text }}
  </component>
</template>
