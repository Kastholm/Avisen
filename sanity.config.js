import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemaTypes'
import {theme} from 'https://themer.sanity.build/api/hues?preset=tw-cyan'

export default defineConfig({
  name: 'default',
  title: 'Nyhedsmedie',
  theme,
  projectId: 'ic4a6jgw',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})


