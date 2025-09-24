import type { Meta, StoryObj } from '@storybook/vue3'
import ExperienceCard from '@components/organisms/ExperienceCard.vue'

const meta: Meta<typeof ExperienceCard> = {
  title: 'Organisms/ExperienceCard',
  component: ExperienceCard,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof ExperienceCard>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `<template>
          <Card title="Ervaring">
            <ul class="flex flex-col gap-6">
              <template v-for="(experience, index) in experiences" :key="experience.title">
                <li>
                  <Experience :experience="experience">
                    <SpecificationCard class="w-fit mt-2 sm:mt-4">
                      <template v-for="stack in experience.stacks" :key="stack.title">
                        <img :title="stack.title" :src="stack.img" :alt="stack.title" class="size-4 sm:size-6" />
                      </template>
                    </SpecificationCard>
                  </Experience>
                </li>
                <Divider v-if="index < (experiences.length - 1)" />
              </template>
            </ul>
          </Card>
        </template>`,
      },
    },
  },
};