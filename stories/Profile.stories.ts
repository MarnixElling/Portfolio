import type { Meta, StoryObj } from '@storybook/vue3'
import Profile from '@components/molecules/Profile.vue'

const meta: Meta<typeof Profile> = {
  title: 'Molecules/Profile',
  component: Profile,
  tags: ['autodocs'],
  argTypes: {
    profile: {
      control: 'object',
    },
  },
};

export default meta
type Story = StoryObj<typeof Profile>

export const Default: Story = {
  args: {
    profile: {
      name: 'Marnix Elling',
      role: 'Frontend Developer',
      avatar: {
        img: '/avatars/marnix.png',
        alt: 'Marnix Elling',
      },
      socials: [
        {
          name: 'GitHub',
          url: 'https://github.com/marnixelling',
          icon: 'github',
        },
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/marnix-elling',
          icon: 'linkedin',
        },
      ],
    },
  },
};