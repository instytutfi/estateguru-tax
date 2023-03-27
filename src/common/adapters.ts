import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { camelCase } from 'lodash-es'

import { type CsvData, type EstateguruCsvRow, type StatementRow } from './types'

dayjs.extend(customParseFormat)

const csvKeysToCamelCase = (data: CsvData): CsvData => {
  return data.map(row => Object.fromEntries(
    Object.entries(row).map(([key, value]) => [camelCase(key), value])
  ))
}

const adaptEstateguruDate = (date: string): Date => {
  return dayjs(date, 'DD.MM.YYYY HH:mm').toDate()
}

const adaptEstateguruCsvRow = (row: EstateguruCsvRow): StatementRow => {
  return {
    id: row.id,
    amount: parseFloat(row.amount),
    converted: parseFloat(row.amount),
    balance: parseFloat(row.balance),
    cashFlowStatus: row.cashFlowStatus,
    cashFlowType: row.cashFlowType,
    confirmationDate: adaptEstateguruDate(row.confirmationDate),
    currency: row.currency,
    loanCode: row.loanCode === '' ? undefined : row.loanCode,
    paymentDate: adaptEstateguruDate(row.paymentDate),
    projectName: row.projectName === '' ? undefined : row.projectName,
    secondaryMarket: row.secondaryMarket === '' ? undefined : row.secondaryMarket
  }
}

export {
  adaptEstateguruDate,
  csvKeysToCamelCase,
  adaptEstateguruCsvRow
}
