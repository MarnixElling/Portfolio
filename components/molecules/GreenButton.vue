<script setup lang="ts">
import Button from '@components/atoms/Button.vue';

export interface Props {
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
});
</script>

<template>
  <Button
    :type="props.type"
    :disabled="props.disabled"
    class="font-semibold rounded-lg text-white bg-green-700
    hover:bg-green-500
    active:bg-green-900
    disabled:cursor-not-allowed disabled:bg-transparent-light-gray"
  >
    <slot />
  </Button>
</template>
