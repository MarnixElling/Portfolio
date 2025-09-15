import type { Meta, StoryObj } from '@storybook/vue3'
import Light from '@components/atoms/Light.vue'

const meta: Meta<typeof Light> = {
  title: 'Atoms/Light',
  component: Light,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
    },
  },
};

export default meta
type Story = StoryObj<typeof Light>

export const Default: Story = {
  args: {},
};