import type { Meta, StoryObj } from '@storybook/vue3'
import ToggleDarkMode from '@components/templates/ToggleDarkMode.vue'

const meta: Meta<typeof ToggleDarkMode> = {
  title: 'Templates/ToggleDarkMode',
  component: ToggleDarkMode,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof ToggleDarkMode>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `<template>
          <Toggle
            :model-value="modelValue"
            class="print:!hidden"
            @update:modelValue="emit('update:modelValue')"
          >
            <FontAwesomeIcon :icon="['fas', modelValue ? 'moon' : 'sun']" class="text-sm" />
          </Toggle>
        </template>`,
      },
    },
  },
};