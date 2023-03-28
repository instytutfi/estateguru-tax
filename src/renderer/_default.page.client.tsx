import React from 'react'

import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import { hydrateRoot } from 'react-dom/client'

import 'config/i18n'

import App from 'App'

import type { PageContextClient } from './types'

import './base.css'

Sentry.init({
  dsn: 'https://5482f948da1641368a1bfc825448b956@o552270.ingest.sentry.io/4504917691662336',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0
})

async function render (pageContext: PageContextClient): Promise<void> {
  const { Page, pageProps } = pageContext

  const element = document.getElementById('root')

  hydrateRoot(
    element as Element,
    <App pageContext={pageContext}>
      <Page {...pageProps} />
    </App>
  )
}

export { render }
