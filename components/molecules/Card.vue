<script setup lang="ts">
import CardWrapper from '@components/atoms/CardWrapper.vue';
import CardHeader from '@components/atoms/CardHeader.vue';
import CardBody from '@components/atoms/CardBody.vue';

export interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <CardWrapper>
    <CardHeader>
      {{ props.title }}
    </CardHeader>
    <CardBody>
      <slot />
    </CardBody>
  </CardWrapper>
</template>
