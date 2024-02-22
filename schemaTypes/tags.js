import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'tags',
  title: 'Nyheder Tags',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Navn til tag',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
