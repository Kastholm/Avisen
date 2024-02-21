import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

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
      name: 'releaseDate',
      title: 'Udgivelse',
      type: 'datetime',
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
      name: 'journalist',
      title: 'Journalister',
      type: 'array',
      of: [{type: 'journalist'}],
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
