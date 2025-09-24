
<script setup lang="ts">
import { ref } from 'vue';

const storybookIframe = ref<HTMLIFrameElement | null>(null);
</script>

<template>
  <iframe ref="storybookIframe" src="/storybook/index.html" class="w-full h-[50vh] rounded-lg shadow-md" />
</template>
