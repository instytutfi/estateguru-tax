import React, { type FC } from 'react'

import { DefaultLayout } from 'layouts'

import { FileUpload, Hero } from 'components'

const HomePage: FC = () => {
  const onCsvSubmit = (data: Array<Record<string, any>>): void => {
    console.log(data)
  }

  return (
    <DefaultLayout>
      <Hero />
      <FileUpload onSubmit={onCsvSubmit} />
    </DefaultLayout>
  )
}

export default HomePage
