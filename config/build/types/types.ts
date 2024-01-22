export interface BuildPaths {
  entry: string
  html: string
  output: string
  public: string
  src: string
}

export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop'
export type BuildProject = 'storybook' | 'jest' | 'frontend'

export interface BuildOptions {
  port: number
  paths: BuildPaths
  mode: BuildMode
  platform: BuildPlatform
  analyzer?: boolean
  project: BuildProject
}
