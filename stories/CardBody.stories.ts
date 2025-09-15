import type { Meta, StoryObj } from '@storybook/vue3'
import CardBody from '@components/atoms/CardBody.vue'

const meta: Meta<typeof CardBody> = {
  title: 'Atoms/CardBody',
  component: CardBody,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof CardBody>

export const Default: Story = {
  args: {
    default: 'This is the card body content',
  },
  render: (args) => ({
    components: { CardBody },
    setup() {
      return { args };
    },
    template: '<CardBody v-html="args.default"></CardBody>',
  }),
};