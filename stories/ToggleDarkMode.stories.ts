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
};