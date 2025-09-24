import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from '@components/atoms/Avatar.vue'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    img: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
};

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    img: '/avatars/marnix.png',
    alt: 'Marnix Elling',
  },
  parameters: {
    docs: {
      source: {
        code: `<template>
          <img
            :src="img"
            :alt="alt"
            :title="alt"
            class="rounded-full max-w-40 max-h-40 object-cover object-center shadow-md"
          />
        </template>`,
      },
    },
  },
};
