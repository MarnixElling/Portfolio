import type { Meta, StoryObj } from '@storybook/vue3'
import Divider from '@components/atoms/Divider.vue'

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `<template>
          <div aria-hidden="true" class="h-[1px] w-full bg-transparent-light-gray dark:bg-transparent-dark-gray" />
        </template>`,
      },
    },
  },
};