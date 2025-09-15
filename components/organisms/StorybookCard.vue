
<script setup lang="ts">
import { useThemeStore } from '@stores/useThemeStore';

const { isDark } = toRefs(useThemeStore());

const storybookIframe = ref<HTMLIFrameElement | null>(null);

watch(isDark, (value) => {
  if (storybookIframe.value?.contentWindow) {
    storybookIframe.value.contentWindow.postMessage({ type: 'PARENT_THEME', dark: value }, '*');
  }
})
</script>

<template>
  <iframe ref="storybookIframe" src="/storybook/index.html" class="w-full h-[50vh] rounded-lg shadow-md" />
</template>
