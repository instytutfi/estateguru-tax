import React from 'react'

import { hydrateRoot } from 'react-dom/client'

import 'config/i18n'

import App from 'App'

import type { PageContextClient } from './types'

import './base.css'

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
