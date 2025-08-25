<script setup lang="ts">
import CardWrapper from '@components/atoms/CardWrapper.vue';
import CardHeader from '@components/atoms/CardHeader.vue';
import CardBody from '@components/atoms/CardBody.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <CardWrapper>
    <CardHeader>
      {{ props.title }}
      <button type="button" class="print:hidden">
        <FontAwesomeIcon
          :icon="['fas', 'arrows-up-down-left-right']"
          class="transition-opacity duration-300 cursor-grab opacity-0 group-hover:opacity-100"
        />
      </button>
    </CardHeader>
    <CardBody>
      <slot />
    </CardBody>
  </CardWrapper>
</template>
