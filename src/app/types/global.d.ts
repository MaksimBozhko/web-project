declare module '*module.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare const __PLATFORM__: 'mobile' | 'desktop'
declare const __ENV__: 'production' | 'development'
declare const __IS_DEV__: boolean
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest'
