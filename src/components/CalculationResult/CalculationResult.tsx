import React, { type FC, useMemo } from 'react'

import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

import { type Calculator } from 'services'

import { useDownload } from 'hooks/useDownload'

import { Button, Card, Exposition } from 'components'

const CalculationResult: FC<Props> = ({ calculator }) => {
  const { t } = useTranslation()
  const download = useDownload()

  const onCsvDownload = (): void => {
    const csvContent = calculator.generateCsv()
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    download(
      blob,
      t('calculation.download.filename', { date: dayjs().format('YYYY-MM-DD HH-mm-ss') })
    )
  }

  const deductions = useMemo(() => {
    return calculator.config.useDeductions ? `€ ${calculator.deductions}` : '—'
  }, [calculator.config.useDeductions, calculator.deductions])

  return (
    <div className="section">
      <div className="container">
        <Card title={t('calculation.card.title')} subtitle={t('calculation.card.description') as string}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 md:text-center">
            <Exposition value={`€ ${calculator.totalIncome}`} label={t('calculation.income.label')} />
            <Exposition value={deductions} label={t('calculation.deductions.label')} />
            <Exposition value={`zł ${calculator.convertedIncome}`} label={t('calculation.converted.label')} />
            <Exposition important value={`zł ${calculator.tax}`} label={t('calculation.tax.label')} />
          </div>
          <Button
            onClick={onCsvDownload}
            className="mt-8 md:mt-12 md:mx-auto"
            icon={<DocumentArrowDownIcon className="h-7 w-7 mr-2" />}
          >
            {t('calculation.download.label')}
          </Button>
        </Card>
      </div>
    </div>
  )
}

interface Props {
  calculator: Calculator
}

export default CalculationResult
