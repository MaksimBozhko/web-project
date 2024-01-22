import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider'
import '@/app/styles/index.scss'

import './shared/config/i18n/i18n'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}

const container = createRoot(root)

container.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider initialTheme={Theme.LIGHT}>
        <App/>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
