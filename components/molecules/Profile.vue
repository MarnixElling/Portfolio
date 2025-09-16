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
  <article class="flex items-center justify-between gap-2 2xs:gap-4 2xs:justify-start lg:gap-6">
    <Avatar :avatar="profile.avatar" class="h-16 xs:h-20" />
    <header class="flex flex-col sm:gap-3">
      <h1 class="font-semibold text-md xs:text-xl md:text-2xl lg:text-3xl">{{ profile.name }}</h1>
      <div class="flex gap-2 flex-col sm:gap-6 sm:flex-row">
        <p class="text-gray dark:text-white transition-all duration-500 text-sm xs:text-md md:text-lg lg:text-xl">{{ profile.role }}</p>
        <nav class="print:hidden">
          <ul class="flex items-center gap-1 xs:flex-row xs:gap-6">
            <li v-for="social in profile.socials" :key="social.name">
              <IconWithText
                :href="social.url"
                is="a"
                target="_blank"
                rel="noopener noreferrer"
                class="underline text-xs md:text-sm lg:text-base"
              >
                <FontAwesomeIcon :icon="['fab', social.icon]" class="text-lg md:text-xl lg:text-2xl" />
                {{ social.name }}
              </IconWithText>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </article>
</template>
