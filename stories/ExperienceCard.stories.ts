import type { Meta, StoryObj } from '@storybook/vue3'
import ExperienceCard from '@components/organisms/ExperienceCard.vue'

const meta: Meta<typeof ExperienceCard> = {
  title: 'Organisms/ExperienceCard',
  component: ExperienceCard,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof ExperienceCard>

export const Default: Story = {
  args: {},
};