<script setup lang="ts">
import Avatar from '@components/atoms/Avatar.vue';
import IconWithText from '@components/atoms/IconWithText.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import type { Profile } from '@assets/types';

export interface Props {
  profile: Profile;
}

defineProps<Props>();
</script>

<template>
  <article class="flex items-center gap-12">
    <Avatar :avatar="profile.avatar" />
    <header class="flex flex-col gap-3">
      <h1>{{ profile.name }}</h1>
      <p class="text-gray dark:text-white transition-all duration-500 text-2xl">{{ profile.role }}</p>
      <nav>
        <ul class="flex items-center gap-6">
          <li v-for="social in profile.socials" :key="social.name">
            <a :href="social.url" target="_blank" rel="noopener noreferrer" class="underline">
              <IconWithText :text="social.name">
                <FontAwesomeIcon :icon="['fab', social.icon]" class="text-2xl" />
              </IconWithText>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </article>
</template>
