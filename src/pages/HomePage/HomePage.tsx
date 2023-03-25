import React, { type FC } from 'react'

import { adaptEstateguruCsvRow, csvKeysToCamelCase } from 'common/adapters'
import { type CsvData, type EstateguruCsvRow } from 'common/types'

import { DefaultLayout } from 'layouts'

import { FileUpload, Hero } from 'components'

const HomePage: FC = () => {
  const onCsvSubmit = (data: CsvData): void => {
    const newData = csvKeysToCamelCase(data).map(row => adaptEstateguruCsvRow(row as EstateguruCsvRow))
    console.log(newData)
  }

  return (
    <DefaultLayout>
      <Hero />
      <div className="mt-24">
        <FileUpload onSubmit={onCsvSubmit} />
      </div>
    </DefaultLayout>
  )
}

export default HomePage
