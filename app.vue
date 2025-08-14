<script setup lang="ts">
import { useThemeStore } from '@stores/useThemeStore';
import { ThemeOptions } from '@assets/enums';
import { debounce } from '@composables/utils';

const { selectedMode } = toRefs(useThemeStore());
const { setTheme, setIsDarkModePreferedBySystem } = useThemeStore();

const systemPreference = ref<MediaQueryList | null>(null);

const onSystemModeChange = (newSystemMode: MediaQueryListEvent) => {
  setIsDarkModePreferedBySystem(newSystemMode.matches);
  
  if (selectedMode.value === ThemeOptions.SYSTEM) {
    setTheme(newSystemMode.matches ? ThemeOptions.DARK : ThemeOptions.LIGHT);
  }
};

const detectDarkmodePreference = () => {
  const instance = getCurrentInstance();

  systemPreference.value?.addEventListener('change', newSystemMode => {
    const callback = () => onSystemModeChange(newSystemMode);

    if (instance) {
      debounce(callback, instance.uid);
    }
  });
};

onMounted(async () => {
  systemPreference.value = window.matchMedia('(prefers-color-scheme: dark)');
  const savedMode = localStorage.getItem('theme') as ThemeOptions | null;

  setTheme(savedMode ?? ThemeOptions.SYSTEM);
  detectDarkmodePreference();
});
</script>

<template>
  <NuxtPage />
</template>
