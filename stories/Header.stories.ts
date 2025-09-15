import type { Meta, StoryObj } from '@storybook/vue3'
import Header from '@components/templates/Header.vue'

const meta: Meta<typeof Header> = {
  title: 'Templates/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {},
};