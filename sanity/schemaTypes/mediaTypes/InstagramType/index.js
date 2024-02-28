import {defineType, defineField} from 'sanity'
import {PlayIcon} from '@sanity/icons'
import { InstagramPreview } from './InstagramPreview'

export const instagramType = defineType({
  name: 'instagram',
  type: 'object',
  title: 'Instagram',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Instagram video URL',
    }),
  ],
  preview: {
     select: {title: 'url'},
   },
   components: {
     preview: InstagramPreview,
   },
})