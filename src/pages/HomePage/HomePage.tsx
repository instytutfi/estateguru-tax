import React, { type FC } from 'react'

import { DefaultLayout } from 'layouts'

import { Hero } from 'components'

const HomePage: FC = () => {
  return (
    <DefaultLayout>
      <Hero />
    </DefaultLayout>
  )
}

export default HomePage
