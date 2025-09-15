<script setup lang="ts">
import type { Avatar } from '@assets/types';

export interface Props {
  avatar: Avatar;
}

defineProps<Props>();
</script>

<template>
  <img
    :src="avatar.img"
    :alt="avatar.alt"
    :title="avatar.alt"
    class="rounded-full max-w-40 max-h-40 object-cover object-center shadow-md"
  />
</template>
