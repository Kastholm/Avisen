import {defineField, defineType} from 'sanity'
import {MdHome as icon} from 'react-icons/md'

export default defineType({
  name: 'indland',
  title: 'Indland',
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
      name: 'teaser',
      title: 'Teaser',
      type: 'blockContent',
    }),
    defineField({
      name: 'tags',
      title: 'Definer tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tags'}]}],
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
      name: 'showFacebookFields',
      title: 'Brug Opengraph (Facebook)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'fbimage',
      title: 'Facebook Billede',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({document}) => !document?.showFacebookFields,
    }),
    defineField({
      name: 'fbsource',
      title: 'Facebook billede beskrivelse',
      type: 'blockContent',
      hidden: ({document}) => !document?.showFacebookFields,
    }),
    defineField({
      name: 'showTwitterFields',
      title: 'Brug Twitter',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'twitterimage',
      title: 'Twitter Billede',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({document}) => !document?.showTwitterFields,
    }),
    defineField({
      name: 'twittersource',
      title: 'Twitter billede beskrivelse',
      type: 'blockContent',
      hidden: ({document}) => !document?.showTwitterFields,
    }),
    defineField({
      name: 'journalist',
      title: 'Journalist',
      type: 'reference',
      to: [{type: 'journalist'}],
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
      journalistName: 'journalist.name',
      updatedDate: '_updatedAt',
    },
    prepare(selection) {
      const {journalistName, updatedDate} = selection
      const formattedDate = new Date(updatedDate).toLocaleDateString('da-DK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric', // Tilpasser formateringen efter behov
      })
      return {
        title: `${selection.title}`,
        subtitle: `${journalistName}${formattedDate ? ` | ${formattedDate}` : ''}`,
        media: selection.media,
      }
    },
  },
})
