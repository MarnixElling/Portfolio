<script setup lang="ts">
export interface Props {
  direction?: 'row' | 'column';
}

withDefaults(defineProps<Props>(), {
  direction: 'row'
});
</script>

<template>
  <nav>
    <ul class="flex items-center gap-1 xs:gap-6" :class="{'flex-col': direction === 'column'}">
      <slot />
    </ul>
  </nav>
</template>
