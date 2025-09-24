import type { Meta, StoryObj } from '@storybook/vue3'
import IconWithText from '@components/atoms/IconWithText.vue'

const meta: Meta<typeof IconWithText> = {
  title: 'Atoms/IconWithText',
  component: IconWithText,
  tags: ['autodocs'],
  argTypes: {
    is: {
      options: ['div', 'p', 'span', 'li', 'a'],
    },
  },
};

export default meta
type Story = StoryObj<typeof IconWithText>

export const Default: Story = {
  args: {
    is: 'p',
  },
  parameters: {
    docs: {
      source: {
        code: `<template>
          <component :is="is" class="flex items-center gap-2 break-all">
            <slot />
          </component>
        </template>`,
      },
    },
  },
};