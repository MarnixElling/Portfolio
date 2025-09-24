import type { Meta, StoryObj } from '@storybook/vue3'
import ToggleThumb from '@components/atoms/ToggleThumb.vue'

const meta: Meta<typeof ToggleThumb> = {
  title: 'Atoms/ToggleThumb',
  component: ToggleThumb,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof ToggleThumb>

export const Default: Story = {
  args: {
    default: '🌙',
  },
  render: (args) => ({
    components: { ToggleThumb },
    setup() {
      return { args };
    },
    template: '<ToggleThumb v-html="args.default"></ToggleThumb>',
  }),
  parameters: {
    docs: {
      source: {
        code: `<template>
          <span class="transition-all grid place-items-center size-6 rounded-full bg-white dark:bg-black">
            <slot />
          </span>
        </template>`,
      },
    },
  },
};