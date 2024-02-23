import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemaTypes'
import {theme} from 'https://themer.sanity.build/api/hues?preset=tw-cyan'
import {media} from 'sanity-plugin-media'
import {scheduledPublishing} from '@sanity/scheduled-publishing'
import {assist} from '@sanity/assist'
import MyNavBar from './components/MyNavBar'
import MyLayout from './components/MyLayout'
import './stylesheets/studio.css'
import './stylesheets/MyNavBar.css'
//import {myPlugin} from './Udgivelser'

export default defineConfig({
  name: 'default',
  title: 'Nyhedsmedie',
  theme,
  projectId: 'ic4a6jgw',
  dataset: 'production',

  plugins: [
    structureTool(),
    //visionTool(),
    media(),
    scheduledPublishing(),
    //myPlugin(),
    //googleMapsInput(),
  ],

  studio: {
    components: {
      //layout: MyLayout,
      navbar: MyNavBar,
      //toolMenu: MyToolMenu,
    },
  },

  schema: {
    types: schemaTypes,
  },
})
