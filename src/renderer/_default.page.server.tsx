import React from 'react'

import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'

import 'config/i18n'

import App from 'App'

import { type PageContextServer } from './types'

import './base.css'

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

async function render (pageContext: PageContextServer): Promise<Record<string, any>> {
  const { Page, pageProps } = pageContext

  const pageHtml = ReactDOMServer.renderToString(
    <App pageContext={pageContext}>
      <Page {...pageProps} />
    </App>
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = documentProps?.title ?? 'Rozlicz Estateguru'
  const desc = documentProps?.description ?? 'Łatwo rozlicz podatek od inwestycji z Estateguru'

  const documentHtml = escapeInject`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${desc}" />
    <title>${title}</title>
    <script async defer src="https://analytics.umami.is/script.js" data-website-id="6b7ce506-f991-460e-8dc5-cd4cc3d16ff9"></script>
  </head>
  <body>
    <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
  </body>
</html>
`

  return {
    documentHtml,
    pageContext: {}
  }
}

export { render }
