import type { Meta, StoryObj } from '@storybook/vue3'
import StacksCard from '@components/organisms/StacksCard.vue'

const meta: Meta<typeof StacksCard> = {
  title: 'Organisms/StacksCard',
  component: StacksCard,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof StacksCard>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `<template>
          <Card title="Core Stacks">
            <StackList :stacks="coreStacks" />
            <Divider />
            <CardHeader>Tooling Stacks</CardHeader>
            <StackList :stacks="toolingStacks" />
          </Card>
        </template>`,
      },
    },
  },
};