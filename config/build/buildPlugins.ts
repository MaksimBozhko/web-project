import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { type Configuration } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { type BuildOptions } from './types/types'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import path from 'path'
import CopyPlugin from 'copy-webpack-plugin'

export function buildPlugins ({ mode, paths, analyzer, platform, project }: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const plugins: Configuration['plugins'] = [
    // add scripts to index.html
    // template - link for our index.html
    new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, 'favicon.ico') }),
    // global variables, need type declaration
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __PLATFORM__: JSON.stringify(platform),
      __ENV__: JSON.stringify(mode),
      __PROJECT__: JSON.stringify(project)
    }),
    // копирование файлов, которые уже существуют в дереве исходного кода, как часть процесса сборки в build, например языки
    new CopyPlugin({
      patterns: [
        { from: path.resolve(paths.public, 'locales'), to: path.resolve(paths.output, 'locales') }
      ]
    }),
    new webpack.ProvidePlugin({ 'React': 'react' })
  ]

  if (isDev) {
    // progress line build in terminal, but can be slow in prod
    plugins.push(new webpack.ProgressPlugin())
    // выносит проверку типов в отдельный процесс: не нагружая сборку
    plugins.push(new ForkTsCheckerWebpackPlugin())
    // hmr
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}
