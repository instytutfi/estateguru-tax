import React, { type FC, useEffect, useRef, useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { adaptEstateguruCsvRow, csvKeysToCamelCase } from 'common/adapters'
import { CalculationError } from 'common/exceptions'
import { type EstateguruCsvRow } from 'common/types'

import { Calculator } from 'services'

import { Alert, CalculationResult, FileUpload } from 'components'

import { type Props as FileUploadProps } from 'components/FileUpload/FileUpload'

const Calculate: FC = () => {
  const { t } = useTranslation()
  const [isCalculating, setIsCalculating] = useState<boolean>(false)
  const [calculator, setCalculator] = useState<Calculator | null>(null)
  const calculationElement = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<CalculationError | unknown | null>(null)

  useEffect(() => {
    if (calculator != null || error != null) {
      calculationElement.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [calculator, error])

  const onReset = (): void => {
    setError(null)
    setIsCalculating(false)
    setCalculator(null)
  }

  const onCsvSubmit: FileUploadProps['onSubmit'] = async (data, { useDeductions }): Promise<void> => {
    setError(null)
    setIsCalculating(true)
    try {
      const newData = csvKeysToCamelCase(data).map(row => adaptEstateguruCsvRow(row as EstateguruCsvRow))
      const calculator = new Calculator(newData, { useDeductions })
      await calculator.calculate()
    } catch (e) {
      setError(e)
      setIsCalculating(false)
      return
    }
    setCalculator(calculator)
    setIsCalculating(false)
  }

  return (
    <div>
      <FileUpload
        onSubmit={onCsvSubmit}
        onReset={onReset}
        isCalculating={isCalculating}
        isCalculated={calculator != null}
      />
      <div ref={calculationElement}>
        <AnimatePresence>
          {error != null && (
            <div className="container-sm">
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -200 }}
                transition={{ duration: 0.5 }}
              >
                <Alert
                  title={t(error instanceof CalculationError ? error.title : 'calculation.errors.generic.title') as string}
                  content={t(error instanceof CalculationError ? error.message : 'calculation.errors.generic.content') as string}
                  status="error"
                />
              </motion.div>
            </div>
          )}
          {calculator != null && (
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -200 }}
              transition={{ duration: 0.5 }}
            >
              <CalculationResult calculator={calculator} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Calculate
