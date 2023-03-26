import React, { type FC } from 'react'

import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

import { Button, Card, Exposition } from 'components'

const CalculationResult: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="section">
      <div className="container">
        <Card title={t('calculation.card.title')} subtitle={t('calculation.card.description') as string}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 md:text-center">
            <Exposition value="€ 10 342.52" label={t('calculation.income.label')} />
            <Exposition value="€ 168.42" label={t('calculation.deductions.label')} />
            <Exposition value="zł 43 764.12" label={t('calculation.converted.label')} />
            <Exposition important value="zł 7877.54" label={t('calculation.tax.label')} />
          </div>
          <Button
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

export default CalculationResult
