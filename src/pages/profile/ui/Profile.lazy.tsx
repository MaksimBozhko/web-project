import { lazy } from 'react'

export const ProfileLazy = lazy(async () => await import('./Profile'))
