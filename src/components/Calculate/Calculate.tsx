import React, { type FC, useEffect, useRef, useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { adaptEstateguruCsvRow, csvKeysToCamelCase } from 'common/adapters'
import { type EstateguruCsvRow } from 'common/types'

import { Calculator } from 'services'

import { CalculationResult, FileUpload } from 'components'

import { type Props as FileUploadProps } from 'components/FileUpload/FileUpload'

const Calculate: FC = () => {
  const [isCalculating, setIsCalculating] = useState<boolean>(false)
  const [calculator, setCalculator] = useState<Calculator | null>(null)
  const calculationElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (calculator != null) calculationElement.current?.scrollIntoView({ behavior: 'smooth' })
  }, [calculator])

  const onReset = (): void => {
    setIsCalculating(false)
    setCalculator(null)
  }

  const onCsvSubmit: FileUploadProps['onSubmit'] = async (data, { useDeductions }): Promise<void> => {
    setIsCalculating(true)
    const newData = csvKeysToCamelCase(data).map(row => adaptEstateguruCsvRow(row as EstateguruCsvRow))
    const calculator = new Calculator(newData, { useDeductions })
    await calculator.calculate()
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
