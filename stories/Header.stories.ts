import type { Meta, StoryObj } from '@storybook/vue3'
import Header from '@components/templates/Header.vue'

const meta: Meta<typeof Header> = {
  title: 'Templates/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `<template>
          <header class="max-w-8xl w-full mx-auto flex justify-between gap-4 p-3 flex-col md:p-6 md:items-center md:flex-row print:px-0">
            <Profile :profile="profile" />
            <div class="flex items-center gap-6 justify-between md:justify-start">
              <slot />
            </div>
          </header>
        </template>`,
      },
    },
  },
};