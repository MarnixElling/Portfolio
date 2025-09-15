<script setup lang="ts">
import Toggle from '@components/molecules/Toggle.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export interface Props {
  modelValue: boolean;
}

defineProps<Props>();

interface Emits {
  (event: 'update:modelValue'): void;
}

const emit = defineEmits<Emits>();
</script>

<template>
  <Toggle
    :model-value="modelValue"
    class="print:!hidden"
    @update:modelValue="emit('update:modelValue')"
  >
    <FontAwesomeIcon :icon="['fas', modelValue ? 'moon' : 'sun']" class="text-sm" />
  </Toggle>
</template>
