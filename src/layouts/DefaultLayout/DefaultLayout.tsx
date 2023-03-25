import React, { type FC, type ReactNode } from 'react'

import { Footer, Navbar } from 'components'

const DefaultLayout: FC<Props> = ({ children = null }) => {
  return (
    <div className="min-h-[100svh] flex flex-col">
      <Navbar />
      <main className="grow py-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}

interface Props {
  children?: ReactNode
}

export default DefaultLayout
