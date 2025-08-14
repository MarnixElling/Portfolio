<script setup lang="ts">
import Toggle from '@components/molecules/Toggle.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useThemeStore } from '@stores/useThemeStore';
import { ThemeOptions } from '@assets/enums';

const { isDark } = toRefs(useThemeStore());
const { setTheme } = useThemeStore();
</script>

<template>
  <Toggle :model-value="isDark" @update:modelValue="setTheme(isDark ? ThemeOptions.LIGHT : ThemeOptions.DARK)">
    <FontAwesomeIcon :icon="['fas', isDark ? 'moon' : 'sun']" class="text-sm" />
  </Toggle>
</template>
