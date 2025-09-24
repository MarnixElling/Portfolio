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
  parameters: {
    docs: {
      source: {
        code: `<template>
          <ul class="flex flex-wrap gap-2 xs:gap-3">
            <li v-for="stack in stacks" :key="stack.title" class="w-fit grow 2xs:grow-0">
              <SpecificationCard class="w-full">
                <img :src="stack.img" :alt="stack.title" class="size-6" />
                <figcaption class="font-semibold">{{ stack.title }}</figcaption>
              </SpecificationCard>
            </li>
          </ul>
        </template>`,
      },
    },
  },
};