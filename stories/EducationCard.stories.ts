import type { Meta, StoryObj } from '@storybook/vue3'
import EducationCard from '@components/organisms/EducationCard.vue'

const meta: Meta<typeof EducationCard> = {
  title: 'Organisms/EducationCard',
  component: EducationCard,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof EducationCard>

export const Default: Story = {
  args: {},
};