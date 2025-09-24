import type { Meta, StoryObj } from '@storybook/vue3'
import CardHeader from '@components/atoms/CardHeader.vue'

const meta: Meta<typeof CardHeader> = {
  title: 'Atoms/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof CardHeader>

export const Default: Story = {
  args: {
    default: 'Card Header Title',
  },
  render: (args) => ({
    components: { CardHeader },
    setup() {
      return { args };
    },
    template: '<CardHeader v-html="args.default"></CardHeader>',
  }),
  parameters: {
    docs: {
      source: {
        code: `<template>
          <header>
            <h2 class="flex justify-between font-medium uppercase text-gray dark:text-white print:!text-gray transition-all duration-500"><slot /></h2>
          </header>
        </template>`,
      },
    },
  },
};