import type { Meta, StoryObj } from '@storybook/vue3'
import ColumnWrapper from '@components/atoms/ColumnWrapper.vue'

const meta: Meta<typeof ColumnWrapper> = {
  title: 'Atoms/ColumnWrapper',
  component: ColumnWrapper,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof ColumnWrapper>

export const Default: Story = {
  args: {
    default: 'Column content',
  },
  render: (args) => ({
    components: { ColumnWrapper },
    setup() {
      return { args };
    },
    template: '<ColumnWrapper v-html="args.default"></ColumnWrapper>',
  }),
  parameters: {
    docs: {
      source: {
        code: `<template>
          <div
            class="h-full bg-transparent"
          >
            <slot />
          </div>
        </template>`,
      },
    },
  },
};