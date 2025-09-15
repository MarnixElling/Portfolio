import type { Meta, StoryObj } from '@storybook/vue3'
import Lights from '@components/templates/Lights.vue'

const meta: Meta<typeof Lights> = {
  title: 'Templates/Lights',
  component: Lights,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof Lights>

export const Default: Story = {
  args: {},
};