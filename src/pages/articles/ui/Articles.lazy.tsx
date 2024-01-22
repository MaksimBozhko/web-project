import { lazy } from 'react'

export const ArticlesLazy = lazy(async () => await import('./Articles'))
