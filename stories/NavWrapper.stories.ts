import type { Meta, StoryObj } from '@storybook/vue3'
import NavWrapper from '@components/atoms/NavWrapper.vue'

const meta: Meta<typeof NavWrapper> = {
  title: 'Atoms/NavWrapper',
  component: NavWrapper,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof NavWrapper>

export const Default: Story = {
  args: {
    direction: 'row',
    default: '<li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li>',
  },
  render: (args) => ({
    components: { NavWrapper },
    setup() {
      return { args };
    },
    template: '<NavWrapper v-bind="args" v-html="args.default"></NavWrapper>',
  }),
};
