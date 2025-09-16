<script setup lang="ts">
export interface Props {
  is?: 'div' | 'p' | 'span' | 'li' | 'a' | 'p';
}

withDefaults(defineProps<Props>(), {
  is: 'p',
});
</script>

<template>
  <component :is="is" class="flex items-center gap-2 break-all">
    <slot />
  </component>
</template>
