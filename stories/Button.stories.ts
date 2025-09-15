import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '@components/atoms/Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
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
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    type: 'button',
    disabled: false,
    default: 'Click me',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" v-html="args.default"></Button>',
  }),
};