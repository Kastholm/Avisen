
import {defineType, defineField} from 'sanity'
import {PlayIcon} from '@sanity/icons'
import { FacebookPreview } from './FacebookPreview'

export const faceBookType = defineType({
  name: 'faceBook',
  type: 'object',
  title: 'Facebook',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Facebook video URL',
    }),
  ],
  preview: {
    select: {title: 'url'},
  },
  components: {
    preview: FacebookPreview,
  },
})

