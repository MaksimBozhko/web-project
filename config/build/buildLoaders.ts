import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type ModuleOptions } from 'webpack'
import { type BuildOptions } from './types/types'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { buildBabelLoader } from './babel/buildBabelLoader'

export function buildLoaders (options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development'

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          // for correct resizing
          icon: true,
          svgoConfig: {
            plugins: [
              {
                // The plugin allows you to change the color using a property color
                name: 'convertColors',
                params: {
                  currentColor: true
                }
              }
            ]
          }
        }
      }
    ]
  }

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }

  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
        localIdentName: isDev ? '[local]__[hash:base64:5]' : '[hash:base64:5]'
      }
    }
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoader,
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }

  const tsLoader = {
    // ts-loader умеет работать с JSX
    // Если б мы не использовали тайпскрипт: нужен был бы babel-loader
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          // будет происходить только транспиляция без проверки типов, для проверки используем ForkTsCheckerWebpackPlugin
          transpileOnly: true,
          // hmr
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
          })
        }
      }
    ],
    exclude: /node_modules/
  }

  const babelLoader = buildBabelLoader(options)

  return [
    svgrLoader,
    assetLoader,
    scssLoader,
    // tsLoader
    babelLoader
  ]
}
