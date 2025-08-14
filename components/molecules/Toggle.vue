<script setup lang="ts">
import ToggleWrapper from '@components/atoms/ToggleWrapper.vue';
import ToggleThumb from '@components/atoms/ToggleThumb.vue';

export interface Props {
  modelValue: boolean;
}

interface Emits {
  (event: 'update:modelValue'): void;
}

const emit = defineEmits<Emits>();
defineProps<Props>();
</script>

<template>
  <ToggleWrapper
    :aria-pressed="modelValue"
    :class="{
      'bg-transparent-dark': !modelValue,
      'bg-transparent-light-gray': modelValue,
    }"
    @click="emit('update:modelValue')"
  >
    <ToggleThumb
      :class="{
        'ml-0': !modelValue,
        'ml-8': modelValue,
      }"
    >
      <slot />
    </ToggleThumb>
  </ToggleWrapper>
</template>
