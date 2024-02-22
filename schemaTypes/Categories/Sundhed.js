import {defineField, defineType} from 'sanity'
import {MdFitnessCenter as icon} from 'react-icons/md'

export default defineType({
  name: 'sundhed',
  title: 'Sundhed',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'image',
      title: 'Artikel Billede',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'source',
      title: 'Billede kilde',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Definer tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tags'}]}],
    }),
    defineField({
      name: 'journalist',
      title: 'Journalist',
      type: 'reference',
      to: [{type: 'journalist'}],
    }),
    defineField({
      name: 'teaser',
      title: 'Teaser',
      type: 'blockContent',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'image',
      journaList0: 'journalist.0.person.name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      }
    },
  },
})
