import React, { type FC } from 'react'

import { DefaultLayout } from 'layouts'

import { Calculate, Faq, Hero } from 'components'

const Page: FC = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Calculate />
      <Faq />
    </DefaultLayout>
  )
}

export { Page }
