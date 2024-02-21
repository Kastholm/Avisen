import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Nyhedsmedie',

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
