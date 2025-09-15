import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from '@components/atoms/Avatar.vue'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    avatar: {
      control: 'object',
    },
  },
};

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    avatar: {
      img: '/avatars/marnix.png',
      alt: 'Marnix Elling',
    },
  },
};
