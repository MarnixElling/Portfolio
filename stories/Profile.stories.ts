import type { Meta, StoryObj } from '@storybook/vue3'
import Profile from '@components/molecules/Profile.vue'

const meta: Meta<typeof Profile> = {
  title: 'Molecules/Profile',
  component: Profile,
  tags: ['autodocs'],
  argTypes: {
    profile: {
      control: 'object',
    },
  },
};

export default meta
type Story = StoryObj<typeof Profile>

export const Default: Story = {
  args: {
    profile: {
      name: 'Marnix Elling',
      role: 'Frontend Developer',
      avatar: {
        img: '/avatars/marnix.png',
        alt: 'Marnix Elling',
      },
      socials: [
        {
          name: 'GitHub',
          url: 'https://github.com/marnixelling',
          icon: 'github',
        },
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/marnix-elling',
          icon: 'linkedin',
        },
      ],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<template>
          <article class="flex items-center justify-between gap-2 2xs:gap-4 2xs:justify-start lg:gap-6">
            <Avatar :img="profile.avatar.img" :alt="profile.name" class="h-16 xs:h-20" />
            <div class="flex flex-col sm:gap-1">
              <h1 class="font-semibold text-md xs:text-xl md:text-2xl lg:text-3xl">{{ profile.name }}</h1>
              <div class="flex gap-2 flex-col sm:gap-6 sm:flex-row">
                <p class="text-gray dark:text-white print:!text-gray transition-all duration-500 text-sm xs:text-md md:text-lg lg:text-xl">{{ profile.role }}</p>
                <NavWrapper class="print:hidden">
                  <li v-for="social in profile.socials" :key="social.name">
                    <IconWithText
                      :href="social.url"
                      is="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="underline text-xs md:text-sm lg:text-base"
                    >
                      <FontAwesomeIcon :icon="['fab', social.icon]" class="text-lg md:text-xl lg:text-2xl" />
                      {{ social.name }}
                    </IconWithText>
                  </li>
                </NavWrapper>
              </div>
            </div>
          </article>
        </template>`,
      },
    },
  },
};