import type { Meta, StoryObj } from '@storybook/vue3'
import EducationCard from '@components/organisms/EducationCard.vue'

const meta: Meta<typeof EducationCard> = {
  title: 'Organisms/EducationCard',
  component: EducationCard,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof EducationCard>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `<template>
          <Card title="Opleiding">
            <ul class="flex flex-col gap-6">
              <template v-for="(experience, index) in experiences" :key="experience.title">
                <li><Experience :experience="experience" /></li>
                <Divider v-if="index < (experiences.length - 1)" />
              </template>
            </ul>
          </Card>
        </template>`,
      },
    },
  },
};