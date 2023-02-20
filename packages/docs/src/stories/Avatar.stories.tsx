import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@wezoa-ui/react' 

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/13079493?v=4',
    alt: 'Eduardo Fujiwara'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}