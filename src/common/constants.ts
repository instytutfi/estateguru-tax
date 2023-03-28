const INCOME_TYPES = [
  'Interest',
  'Indemnity',
  'Penalty',
  'Referral',
  'Borrower Bonus',
  'EG Bonus',
  'Cashback Bonus',
  'Secondary Market Profit'
] as const

const DEDUCTION_TYPES = [
  'Sale fee', 'Secondary Market Loss', 'Fee'
] as const

export {
  INCOME_TYPES,
  DEDUCTION_TYPES
}
