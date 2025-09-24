import type { Meta, StoryObj } from '@storybook/vue3'
import Language from '@components/atoms/Language.vue'

const meta: Meta<typeof Language> = {
  title: 'Atoms/Language',
  component: Language,
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: 'object',
    },
  },
};

export default meta
type Story = StoryObj<typeof Language>

export const Default: Story = {
  args: {
    language: {
      name: 'English',
      level: 'Native',
      img: '/flags/uk.png',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<template>
          <dl class="flex gap-1 items-center text-sm">
            <img :src="language.img" :alt="language.name" :title="language.name" aria-hidden class="size-6 mr-2" />
            <dt class="font-medium">{{ language.name }}</dt>
            <dd class="text-gray dark:text-white print:!text-gray transition-all duration-500"> - {{ language.level }}</dd>
          </dl>
        </template>`,
      },
    },
  },
};