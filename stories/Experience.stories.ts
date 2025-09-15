import type { Meta, StoryObj } from '@storybook/vue3'
import Experience from '@components/atoms/Experience.vue'

const meta: Meta<typeof Experience> = {
  title: 'Atoms/Experience',
  component: Experience,
  tags: ['autodocs'],
  argTypes: {
    experience: {
      control: 'object',
    },
  },
};

export default meta
type Story = StoryObj<typeof Experience>

export const Default: Story = {
  args: {
    experience: {
      title: 'Software Developer',
      description: 'Developed web applications using Vue.js and TypeScript',
      img: '/experiences/levarne.png',
      startDate: 'Jan 2023',
      endDate: 'Present',
    },
  },
};