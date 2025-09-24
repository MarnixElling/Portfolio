import type { Meta, StoryObj } from '@storybook/vue3'
import GeneralSkillsCard from '@components/organisms/GeneralSkillsCard.vue'

const meta: Meta<typeof GeneralSkillsCard> = {
  title: 'Organisms/GeneralSkillsCard',
  component: GeneralSkillsCard,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof GeneralSkillsCard>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `<template>
          <Card title="Specialiteiten">
            <ul class="flex flex-col gap-4">
              <li v-for="(value, index) in values" :key="index">
                <IconWithText>
                  <img :src="value.img" :alt="value.description" aria-hidden class="size-6" />
                  {{ value.description }}
                </IconWithText>
              </li>
            </ul>
            <Divider />
            <CardHeader>Talen</CardHeader>
            <Language v-for="lang in languages" :key="lang.name" :language="lang" />
          </Card>
        </template>`,
      },
    },
  },
};