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
  <article class="flex items-center justify-between gap-4 xs:justify-start sm:gap-10 md:gap-4 lg:gap-12">
    <Avatar :avatar="profile.avatar" class="size-16 xs:size-40 md:size-32 lg:size-40" />
    <header class="flex flex-col gap-2 xs:gap-3">
      <h1>{{ profile.name }}</h1>
      <p class="text-gray dark:text-white transition-all duration-500 text-sm xs:text-lg md:text-xl lg:text-2xl">{{ profile.role }}</p>
      <nav>
        <ul class="flex items-center gap-2 xs:gap-6">
          <li v-for="social in profile.socials" :key="social.name">
            <a :href="social.url" target="_blank" rel="noopener noreferrer" class="underline text-xs md:text-sm lg:text-base">
              <IconWithText :text="social.name">
                <FontAwesomeIcon :icon="['fab', social.icon]" class="text-lg md:text-xl lg:text-2xl" />
              </IconWithText>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </article>
</template>
