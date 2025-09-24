import type { Meta, StoryObj } from '@storybook/vue3'
import GreenButton from '@components/molecules/GreenButton.vue'

const meta: Meta<typeof GreenButton> = {
  title: 'Molecules/GreenButton',
  component: GreenButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit'],
    },
    disabled: {
      control: 'boolean',
    },
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof GreenButton>

export const Default: Story = {
  args: {
    type: 'button',
    disabled: false,
    default: 'Green Button',
  },
  render: (args) => ({
    components: { GreenButton },
    setup() {
      return { args };
    },
    template: '<GreenButton v-bind="args" v-html="args.default"></GreenButton>',
  }),
  parameters: {
    docs: {
      source: {
        code: `<template>
          <Button
            :type="props.type"
            :disabled="props.disabled"
            class="font-semibold rounded-lg text-white bg-green-700
            hover:bg-green-500
            active:bg-green-900
            disabled:cursor-not-allowed disabled:bg-transparent-light-gray"
          >
            <slot />
          </Button>
        </template>`,
      },
    },
  },
};