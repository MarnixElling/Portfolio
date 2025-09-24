import type { Meta, StoryObj } from '@storybook/vue3'
import SpecificationCard from '@components/atoms/SpecificationCard.vue'

const meta: Meta<typeof SpecificationCard> = {
  title: 'Atoms/SpecificationCard',
  component: SpecificationCard,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof SpecificationCard>

export const Default: Story = {
  args: {
    default: 'Specification content',
  },
  render: (args) => ({
    components: { SpecificationCard },
    setup() {
      return { args };
    },
    template: '<SpecificationCard v-html="args.default"></SpecificationCard>',
  }),
  parameters: {
    docs: {
      source: {
        code: `<template>
          <figure class="flex items-center bg-transparent-gray rounded-lg overflow-x-auto p-2 gap-2 sm:p-3 sm:gap-3">
            <slot />
          </figure>
        </template>`,
      },
    },
  },
};