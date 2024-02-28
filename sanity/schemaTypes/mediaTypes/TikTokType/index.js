import {defineType, defineField} from 'sanity'
import {PlayIcon} from '@sanity/icons'
import { TikTokPreview } from './TikTokPreview'
//import {YouTubePreview} from './YouTubePreview'

export const tikTokType = defineType({
  name: 'tikTok',
  type: 'object',
  title: 'TikTok',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'TikTok video URL',
    }),
  ],
  preview: {
     select: {title: 'url'},
   },
   components: {
     preview: TikTokPreview,
   },
})