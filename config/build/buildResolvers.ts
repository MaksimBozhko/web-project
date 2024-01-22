import { type Configuration } from 'webpack'
import { type BuildOptions } from './types/types'

export function buildResolvers (options: BuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': options.paths.src,
      icons: `${options.paths.src}/shared/assets/icons`
    }
  }
}
