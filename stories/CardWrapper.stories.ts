import type { Meta, StoryObj } from '@storybook/vue3'
import CardWrapper from '@components/atoms/CardWrapper.vue'

const meta: Meta<typeof CardWrapper> = {
  title: 'Atoms/CardWrapper',
  component: CardWrapper,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
};

export default meta
type Story = StoryObj<typeof CardWrapper>

export const Default: Story = {
  args: {
    default: 'Card wrapper content',
  },
  render: (args) => ({
    components: { CardWrapper },
    setup() {
      return { args };
    },
    template: '<CardWrapper v-html="args.default"></CardWrapper>',
  }),
};