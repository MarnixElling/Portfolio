import type { Meta, StoryObj } from '@storybook/vue3'
import Divider from '@components/atoms/Divider.vue'

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {
  args: {},
};