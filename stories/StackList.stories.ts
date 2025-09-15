import type { Meta, StoryObj } from '@storybook/vue3'
import StackList from '@components/molecules/StackList.vue'

const meta: Meta<typeof StackList> = {
  title: 'Molecules/StackList',
  component: StackList,
  tags: ['autodocs'],
  argTypes: {
    stacks: {
      control: 'object',
    },
  },
};

export default meta
type Story = StoryObj<typeof StackList>

export const Default: Story = {
  args: {
    stacks: [
      {
        title: 'Vue.js',
        img: '/logos/vue.png',
      },
      {
        title: 'TypeScript',
        img: '/logos/typescript.png',
      },
      {
        title: 'Nuxt',
        img: '/logos/nuxt.png',
      },
    ],
  },
};