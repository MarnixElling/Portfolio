import type { Meta, StoryObj } from '@storybook/vue3'
import Language from '@components/atoms/Language.vue'

const meta: Meta<typeof Language> = {
  title: 'Atoms/Language',
  component: Language,
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: 'object',
    },
  },
};

export default meta
type Story = StoryObj<typeof Language>

export const Default: Story = {
  args: {
    language: {
      name: 'English',
      level: 'Native',
      img: '/flags/uk.png',
    },
  },
};