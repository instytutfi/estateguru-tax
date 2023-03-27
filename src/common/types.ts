type EstateguruCurrency = 'EUR'

type Currency = 'EUR' | 'PLN'

type EstateguruCashFlowType = (
  'Deposit'
  | 'Principal'
  | 'Interest'
  | 'Indemnity'
  | 'Penalty'
  | 'Investment(Auto Invest)'
  | 'Investment'
  | 'Secondary Market'
  | 'Sale fee'
  | 'Secondary Market Loss'
)

interface EstateguruCsvRow {
  id: string
  amount: string
  balance: string
  cashFlowStatus: string
  cashFlowType: EstateguruCashFlowType
  confirmationDate: string
  currency: EstateguruCurrency
  loanCode: string
  paymentDate: string
  projectName: string
  secondaryMarket: string
}

interface StatementRow {
  id: string
  amount: number
  balance: number
  cashFlowStatus: string
  cashFlowType: EstateguruCashFlowType
  confirmationDate: Date
  currency: EstateguruCurrency
  loanCode?: string
  paymentDate: Date
  projectName?: string
  secondaryMarket?: string
  converted: number
  exchangeRate: number
  exchangeRateDate: Date
  exchangeRateNo: string
}

type CsvData = Array<Record<string, any>>

export type {
  EstateguruCurrency,
  EstateguruCashFlowType,
  EstateguruCsvRow,
  Currency,
  StatementRow,
  CsvData
}
