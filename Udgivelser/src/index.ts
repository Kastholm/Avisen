import {definePlugin} from 'sanity'
import UdgivelserTool from './UdgivelserTool' 
interface MyPluginConfig {
  /* nothing here yet */
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {myPlugin} from 'sanity-plugin-Udgivelser'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [myPlugin()],
 * })
 * ```
 */
export const myPlugin = definePlugin<MyPluginConfig | void>((config = {}) => {
  // eslint-disable-next-line no-console
  console.log('hello from sanity-plugin-Udgivelser')
  return {
    name: 'sanity-plugin-Udgivelser',
    title: 'Udgivelser',
    component: UdgivelserTool
  }
})
