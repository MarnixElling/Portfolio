import type { Meta, StoryObj } from '@storybook/vue3'
import ToggleWrapper from '@components/atoms/ToggleWrapper.vue'

const meta: Meta<typeof ToggleWrapper> = {
  title: 'Atoms/ToggleWrapper',
  component: ToggleWrapper,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof ToggleWrapper>

export const Default: Story = {
  args: {
    default: 'Toggle content',
  },
  render: (args) => ({
    components: { ToggleWrapper },
    setup() {
      return { args };
    },
    template: '<ToggleWrapper v-html="args.default"></ToggleWrapper>',
  }),
  parameters: {
    docs: {
      source: {
        code: `<template>
          <button
            type="button"
            role="switch"
            class="box-border w-16 bg-transparent-dark dark:bg-transparent-light-gray rounded-full p-1 flex"
          >
            <slot />
          </button>
        </template>`,
      },
    },
  },
};