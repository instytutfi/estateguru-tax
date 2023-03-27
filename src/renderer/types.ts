import { type ReactElement } from 'react'

import type {
  PageContextBuiltIn,
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient
} from 'vite-plugin-ssr'

type PageProps = Record<string, any>

type Page = (pageProps: PageProps) => ReactElement

export interface PageContextCustom {
  Page: Page
  pageProps?: PageProps
  urlPathname: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
}

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

type PageContext = PageContextClient | PageContextServer

export type { PageContextServer }
export type { PageContextClient }
export type { PageContext }
export type { PageProps }
