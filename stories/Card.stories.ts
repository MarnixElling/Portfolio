import type { Meta, StoryObj } from '@storybook/vue3'
import Card from '@components/molecules/Card.vue'

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: 'Sample Card Title',
    default: 'This is the card content',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" v-html="args.default"></Card>',
  }),
};