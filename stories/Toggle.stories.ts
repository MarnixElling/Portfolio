import type { Meta, StoryObj } from '@storybook/vue3'
import Toggle from '@components/molecules/Toggle.vue'

const meta: Meta<typeof Toggle> = {
  title: 'Molecules/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
    },
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    modelValue: false,
    default: '🌙',
  },
  render: (args) => ({
    components: { Toggle },
    setup() {
      return { args };
    },
    template: '<Toggle v-bind="args" v-html="args.default"></Toggle>',
  }),
  parameters: {
    docs: {
      source: {
        code: `<template>
          <ToggleWrapper
            :aria-pressed="modelValue"
            :class="{
              'bg-transparent-dark': !modelValue,
              'bg-transparent-light-gray': modelValue,
            }"
            @click="emit('update:modelValue')"
          >
            <ToggleThumb
              :class="{
                'ml-0': !modelValue,
                'ml-8': modelValue,
              }"
            >
              <slot />
            </ToggleThumb>
          </ToggleWrapper>
        </template>`,
      },
    },
  },
};