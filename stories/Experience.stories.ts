import type { Meta, StoryObj } from '@storybook/vue3'
import Experience from '@components/atoms/Experience.vue'

const meta: Meta<typeof Experience> = {
  title: 'Atoms/Experience',
  component: Experience,
  tags: ['autodocs'],
  argTypes: {
    experience: {
      control: 'object',
    },
  },
};

export default meta
type Story = StoryObj<typeof Experience>

export const Default: Story = {
  args: {
    experience: {
      title: 'Software Developer',
      description: 'Developed web applications using Vue.js and TypeScript',
      img: '/experiences/levarne.png',
      startDate: 'Jan 2023',
      endDate: 'Present',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<template>
          <figure class="flex items-start gap-6">
            <img :src="experience.img" :alt="experience.title" class="size-12 2xs:size-16 print:size-12" />
            <figcaption class="flex flex-col sm:gap-2">
              <h3>{{ experience.title }}</h3>
              <p>{{ experience.description }}</p>
              <time datetime="" class="text-gray dark:text-white print:!text-gray transition-all duration-500 mt-1">
                {{ experience.startDate }} - {{ experience.endDate }}
              </time>
              <slot />
            </figcaption>
          </figure>
        </template>`,
      },
    },
  },
};