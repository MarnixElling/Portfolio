import { defineStore } from 'pinia';

import { ThemeOptions } from '@assets/enums';

export const useThemeStore = defineStore('theme', () => {
  // State
  const selectedMode = ref(ThemeOptions.SYSTEM);
  const isDarkModePreferedBySystem = ref(false);

  const isDark = computed(() => selectedMode.value === ThemeOptions.SYSTEM ? isDarkModePreferedBySystem.value : selectedMode.value === ThemeOptions.DARK);

  // Actions
  const setThemeClass = () => {
    if (!process.client) return;
    document.documentElement.classList.toggle('dark', isDark.value);
  };

  const setSelectedMode = (mode: ThemeOptions) => {
    selectedMode.value = mode;
  };

  const setIsDarkModePreferedBySystem = (isDark: boolean) => {
    isDarkModePreferedBySystem.value = isDark;
  };

  const setLocalStorageTheme = (theme: ThemeOptions) => {
    localStorage.setItem('theme', theme);
  };

  const setTheme = (theme: ThemeOptions) => {
    setSelectedMode(theme);
    setLocalStorageTheme(theme);
    setThemeClass();
  };

  return {
    // state
    selectedMode,
    isDark,

    // actions
    setTheme,
    setSelectedMode,
    setIsDarkModePreferedBySystem,
  };
});
