import type { Meta, StoryObj } from '@storybook/vue3'
import GreenButton from '@components/molecules/GreenButton.vue'

const meta: Meta<typeof GreenButton> = {
  title: 'Molecules/GreenButton',
  component: GreenButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit'],
    },
    disabled: {
      control: 'boolean',
    },
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof GreenButton>

export const Default: Story = {
  args: {
    type: 'button',
    disabled: false,
    default: 'Green Button',
  },
  render: (args) => ({
    components: { GreenButton },
    setup() {
      return { args };
    },
    template: '<GreenButton v-bind="args" v-html="args.default"></GreenButton>',
  }),
};