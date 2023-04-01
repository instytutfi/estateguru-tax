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

const LANG_CODES = ['en', 'pl'] as const

const LANG_ICONS = {
  en: '🇬🇧',
  pl: '🇵🇱'
} as const

export {
  INCOME_TYPES,
  DEDUCTION_TYPES,
  LANG_CODES,
  LANG_ICONS
}
