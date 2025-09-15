import type { Meta, StoryObj } from '@storybook/vue3'
import Grid from '@components/templates/Grid.vue'

const meta: Meta<typeof Grid> = {
  title: 'Templates/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof Grid>

export const Default: Story = {
  args: {},
};