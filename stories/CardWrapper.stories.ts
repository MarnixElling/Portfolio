import type { Meta, StoryObj } from '@storybook/vue3'
import CardWrapper from '@components/atoms/CardWrapper.vue'

const meta: Meta<typeof CardWrapper> = {
  title: 'Atoms/CardWrapper',
  component: CardWrapper,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof CardWrapper>

export const Default: Story = {
  args: {
    default: 'Card wrapper content',
  },
  render: (args) => ({
    components: { CardWrapper },
    setup() {
      return { args };
    },
    template: '<CardWrapper v-html="args.default"></CardWrapper>',
  }),
  parameters: {
    docs: {
      source: {
        code: `<template>
          <article
            class="group p-4 flex flex-col gap-6 max-h-full rounded-lg shadow-md backdrop-blur-xl
            transition-all bg-transparent-light
            dark:bg-transparent-dark
            sm:h-full sm:p-6
            print:p-4 print:gap-4 print:shadow-none print:!bg-transparent-white-150"
          >
            <slot />
          </article>
        </template>`,
      },
    },
  },
};