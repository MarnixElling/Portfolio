<script setup lang="ts">
export interface Props {
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false
});
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    class="transition-all flex items-center gap-3 p-3"
  >
    <slot />
  </button>
</template>
