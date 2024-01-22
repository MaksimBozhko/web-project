import type webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildResolvers } from './buildResolvers'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { type BuildOptions } from './types/types'

export function buildWebpack (options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options

  const isDev = mode === 'development'

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      // dynamic name for bundle
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath: '/'
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : 'source-map',
    // rebuild when code was change
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
