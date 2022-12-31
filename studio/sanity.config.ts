import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'winy',

  projectId: 'riyu2i5m',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
//TODO -> se da errore devi aggiungere file come quello eliminato
//File nome -> sanity.cli.ts
//dentro:
// import {defineCliConfig} from 'sanity/cli'

// export default defineCliConfig({
//   api: {
//     projectId: 'riyu2i5m',
//     dataset: 'production'
//   }
// })
