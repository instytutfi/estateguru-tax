import { type AxiosError } from 'axios'
import { csvFormat } from 'd3'
import dayjs from 'dayjs'
import { sortBy } from 'lodash-es'

import { DEDUCTION_TYPES, INCOME_TYPES } from 'common/constants'
import { CalculationError } from 'common/exceptions'
import { type EstateguruCashFlowType, type StatementRow } from 'common/types'

import { NbpApi } from 'api'

import { type ExchangeRate } from 'api/nbp'

interface CalculatorConfig {
  useDeductions: boolean
}

class Calculator {
  data: StatementRow[]
  config: CalculatorConfig
  nbpApi = new NbpApi()

  constructor (data: StatementRow[], config: CalculatorConfig) {
    this.data = sortBy(data, 'paymentDate')
    this.config = config
  }

  async calculate (): Promise<void> {
    const exchangeRates = (
      await this.nbpApi.getCurrencyRateForDates('EUR', ...this.datePeriod)
        .catch((e: AxiosError) => {
          throw new CalculationError(
            'calculation.errors.nbpApiError.title',
            e?.response?.data as string ?? 'calculation.errors.nbpApiError.genericDescription'
          )
        })
    )
    try {
      this.data = this.data.map(row => {
        const exchangeRate = this.findClosestExchangeRate(exchangeRates.data.rates, row)
        if (exchangeRate === undefined) return row
        return {
          ...row,
          exchangeRate: exchangeRate.mid,
          exchangeRateDate: dayjs(exchangeRate.effectiveDate, 'YYYY-MM-DD').toDate(),
          exchangeRateNo: exchangeRate.no,
          converted: row.amount * exchangeRate.mid
        }
      })
    } catch (e) {
      throw new CalculationError(
        'calculation.errors.generic.title',
        'calculation.errors.generic.description'
      )
    }
  }

  generateCsv (): string {
    return csvFormat(this.data)
  }

  findClosestExchangeRate (exchangeRates: ExchangeRate[], statementRow: StatementRow): ExchangeRate | undefined {
    const paymentDate = statementRow.paymentDate.getTime()
    return exchangeRates.reduce((closest: ExchangeRate | undefined, current) => {
      const currentDate = dayjs(current.effectiveDate, 'YYYY-MM-DD').toDate().getTime()
      const closestDate = closest !== undefined ? dayjs(closest.effectiveDate, 'YYYY-MM-DD').toDate().getTime() : Infinity
      const currentDiff = Math.abs(paymentDate - currentDate)
      const closestDiff = Math.abs(paymentDate - closestDate)
      return currentDiff < closestDiff ? current : closest
    }, undefined)
  }

  isProfitType (transactionType: EstateguruCashFlowType): boolean {
    return INCOME_TYPES.some(
      incomeType => incomeType.toLowerCase() === transactionType.toLowerCase()
    )
  }

  isDeductible (transactionType: EstateguruCashFlowType): boolean {
    return DEDUCTION_TYPES.some(
      incomeType => incomeType.toLowerCase() === transactionType.toLowerCase()
    )
  }

  get datePeriod (): [string, string] {
    return [
      dayjs(this.data[0].paymentDate).format('YYYY-MM-DD'),
      dayjs(this.data[this.data.length - 1].paymentDate).format('YYYY-MM-DD')
    ]
  }

  get totalIncome (): number {
    return parseFloat(
      this.data
        .filter(row => this.isProfitType(row.cashFlowType))
        .reduce((prev, row) => prev + row.amount, 0)
        .toFixed(2)
    )
  }

  get deductions (): number {
    return parseFloat(
      this.data
        .filter(row => this.isDeductible(row.cashFlowType))
        .reduce((prev, row) => prev + -row.amount, 0)
        .toFixed(2)
    )
  }

  get convertedIncome (): number {
    return parseFloat(
      this.data
        .filter(row => this.isProfitType(row.cashFlowType))
        .reduce((prev, row) => prev + row.converted, 0)
        .toFixed(2)
    )
  }

  get convertedDeductions (): number {
    return parseFloat(
      this.data
        .filter(row => this.isDeductible(row.cashFlowType))
        .reduce((prev, row) => prev + -row.converted, 0)
        .toFixed(2)
    )
  }

  get tax (): number {
    let basicIncome = this.convertedIncome
    if (this.config.useDeductions) basicIncome -= this.convertedDeductions

    return parseFloat((basicIncome * 0.19).toFixed(2))
  }
}

export default Calculator
