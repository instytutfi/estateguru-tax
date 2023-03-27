import { csvFormat } from 'd3'
import dayjs from 'dayjs'
import { sortBy } from 'lodash-es'

import { type StatementRow } from 'common/types'

import { NbpApi } from 'api'

import { type ExchangeRate } from 'api/nbp'

const INCOME_TYPES = ['Interest', 'Indemnity', 'Penalty', 'Secondary Market']
const DEDUCTION_TYPES = ['Sale fee', 'Secondary Market Loss']

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
    const exchangeRates = await this.nbpApi.getCurrencyRateForDates('EUR', ...this.datePeriod)
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

  get datePeriod (): [string, string] {
    return [
      dayjs(this.data[0].paymentDate).format('YYYY-MM-DD'),
      dayjs(this.data[this.data.length - 1].paymentDate).format('YYYY-MM-DD')
    ]
  }

  get totalIncome (): number {
    return parseFloat(
      this.data
        .filter(row => INCOME_TYPES.includes(row.cashFlowType))
        .reduce((prev, row) => prev + row.amount, 0)
        .toFixed(2)
    )
  }

  get deductions (): number {
    return parseFloat(
      this.data
        .filter(row => DEDUCTION_TYPES.includes(row.cashFlowType))
        .reduce((prev, row) => prev + -row.amount, 0)
        .toFixed(2)
    )
  }

  get convertedIncome (): number {
    return parseFloat(
      this.data
        .filter(row => INCOME_TYPES.includes(row.cashFlowType))
        .reduce((prev, row) => prev + row.converted, 0)
        .toFixed(2)
    )
  }

  get convertedDeductions (): number {
    return parseFloat(
      this.data
        .filter(row => DEDUCTION_TYPES.includes(row.cashFlowType))
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
