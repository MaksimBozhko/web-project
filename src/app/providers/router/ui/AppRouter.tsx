import React, { Suspense, useCallback } from 'react'
import { type RouteProps, Routes, Route } from 'react-router-dom'
import { routerConfig } from '@/shared/config/routerConfig'
import { PageLoader } from '@/widgets/PageLoader'

export const AppRouter = () => {
  const renderWithWrapper = useCallback(({ path, element }: RouteProps) => {
    const withSuspense = (
      <Suspense key={path} fallback={<PageLoader/>}>
        {element}
      </Suspense>
    )
    return (
      <Route
        key={path}
        path={path}
        element={withSuspense}
      />
    )
  }, [])

  return (
    <Routes>
      {routerConfig.map(renderWithWrapper)}
    </Routes>
  )
}
