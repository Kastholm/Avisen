import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'journalist',
  title: 'Journalister',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Navn',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Insert your Email',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'email', media: 'image'},
  },
})
