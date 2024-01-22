import type webpack from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import type { BuildMode, BuildPlatform, BuildProject } from './config/build/types/types'
import path from 'path'

interface EnvVariables {
  mode?: BuildMode
  port?: number
  analyzer?: boolean
  platform?: BuildPlatform
  project?: BuildProject
}

export default (env: EnvVariables): webpack.Configuration => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public')
  }

  const options = {
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    paths,
    analyzer: env.analyzer ?? false,
    platform: env.platform ?? 'desktop',
    project: env.project ?? 'frontend'
  }

  return buildWebpack(options)
}
