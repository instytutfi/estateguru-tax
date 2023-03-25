import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { camelCase } from 'lodash'

import { type CsvData, type EstateguruCsvRow, type StatementRow } from './types'

dayjs.extend(customParseFormat)

const csvKeysToCamelCase = (data: CsvData): CsvData => {
  return data.map(row => Object.fromEntries(
    Object.entries(row).map(([key, value]) => [camelCase(key), value])
  ))
}

const adaptEstateguruCsvRow = (row: EstateguruCsvRow): StatementRow => {
  return {
    id: row.id,
    amount: parseFloat(row.amount),
    balance: parseFloat(row.balance),
    cashFlowStatus: row.cashFlowStatus,
    cashFlowType: row.cashFlowType,
    confirmationDate: dayjs(row.confirmationDate, 'DD.MM.YYYY HH:mm').toDate(),
    currency: row.currency,
    loanCode: row.loanCode === '' ? undefined : row.loanCode,
    paymentDate: dayjs(row.paymentDate, 'DD.MM.YYYY HH:mm').toDate(),
    projectName: row.projectName === '' ? undefined : row.projectName,
    secondaryMarket: row.secondaryMarket === '' ? undefined : row.secondaryMarket
  }
}

export {
  csvKeysToCamelCase,
  adaptEstateguruCsvRow
}
