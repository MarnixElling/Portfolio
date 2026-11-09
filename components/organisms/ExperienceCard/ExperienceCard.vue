<script setup lang="ts">
import Card from '@components/molecules/Card.vue';
import Divider from '@components/atoms/Divider.vue';
import Experience from '@components/atoms/Experience.vue';
import SpecificationCard from '@components/atoms/SpecificationCard.vue';

import { experiences } from '@components/organisms/ExperienceCard/Experiences';
</script>

<template>
  <Card title="Ervaring">
    <ul class="flex flex-col gap-6 w-full">
      <template v-for="(experience, index) in experiences" :key="experience.title">
        <li class="w-full print:h-[95dvh]">
          <Experience :experience="experience" class="w-full">
            <div class="flex justify-end grow">
              <SpecificationCard class="w-fit">
                <template v-for="stack in experience.stacks" :key="stack.title">
                  <img :title="stack.title" :src="stack.img" :alt="stack.title" class="size-4 sm:size-6" />
                </template>
              </SpecificationCard>
            </div>
          </Experience>
          <p v-for="(responsibility, index) in experience.responsibilities" :key="index" class="text-sm mt-5">{{ responsibility }}</p>
        </li>
        <Divider v-if="index < (experiences.length - 1)" class="print:hidden" />
      </template>
    </ul>
  </Card>
</template>
