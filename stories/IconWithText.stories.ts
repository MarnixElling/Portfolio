import type { Meta, StoryObj } from '@storybook/vue3'
import IconWithText from '@components/atoms/IconWithText.vue'

const meta: Meta<typeof IconWithText> = {
  title: 'Atoms/IconWithText',
  component: IconWithText,
  tags: ['autodocs'],
  argTypes: {
    img: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
  },
};

export default meta
type Story = StoryObj<typeof IconWithText>

export const Default: Story = {
  args: {
    img: '/emojis/search.png',
    text: 'Search functionality',
  },
};