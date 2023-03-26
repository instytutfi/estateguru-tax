import React, { type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { adaptEstateguruCsvRow, csvKeysToCamelCase } from 'common/adapters'
import { type CsvData, type EstateguruCsvRow } from 'common/types'

import { useTitle } from 'hooks/useTitle'

import { DefaultLayout } from 'layouts'

import { CalculationResult, FileUpload, Hero } from 'components'

const HomePage: FC = () => {
  const { t } = useTranslation()

  useTitle(t('menu.home'))

  const onCsvSubmit = (data: CsvData): void => {
    const newData = csvKeysToCamelCase(data).map(row => adaptEstateguruCsvRow(row as EstateguruCsvRow))
    console.log(newData)
  }

  return (
    <DefaultLayout>
      <Hero />
      <FileUpload onSubmit={onCsvSubmit} />
      <CalculationResult />
    </DefaultLayout>
  )
}

export default HomePage
