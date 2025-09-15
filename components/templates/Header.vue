<script setup lang="ts">
import Profile from '@components/molecules/Profile.vue';

const profile = {
  name: 'Marnix Elling',
  role: 'Frontend Developer',
  avatar: {
    img: '/avatars/marnix.png',
    alt: 'Marnix Elling',
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/marnixelling',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/marnix-elling-0091a61a7',
      icon: 'linkedin',
    },
  ],
};
</script>

<template>
  <header class="max-w-8xl w-full mx-auto flex justify-between items-center p-3 sm:p-6 print:px-0">
    <Profile :profile="profile" />
    <div class="flex items-center gap-6">
      <slot />
    </div>
  </header>
</template>
