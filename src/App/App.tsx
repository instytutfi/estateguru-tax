import React, { type FC, type ReactNode } from 'react'

import { type PageContext } from '../renderer/types'

const App: FC<Props> = ({ children, pageContext }) => {
  return (
    <>
      {children}
    </>
  )
}

interface Props {
  children: ReactNode
  pageContext: PageContext
}

export default App
