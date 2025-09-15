import type { Meta, StoryObj } from '@storybook/vue3'
import GeneralSkillsCard from '@components/organisms/GeneralSkillsCard.vue'

const meta: Meta<typeof GeneralSkillsCard> = {
  title: 'Organisms/GeneralSkillsCard',
  component: GeneralSkillsCard,
  tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof GeneralSkillsCard>

export const Default: Story = {
  args: {},
};