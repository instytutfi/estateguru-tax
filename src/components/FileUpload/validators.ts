import dayjs, { type Dayjs } from 'dayjs'
import minMax from 'dayjs/plugin/minMax'
import { isEqual } from 'lodash-es'

import { daysLimit, expectedColumns } from './constants'

dayjs.extend(minMax)

const validateColumns = (columns: string[]): boolean => isEqual(new Set(columns), expectedColumns)

const validateDates = (dates: Dayjs[]): boolean => {
  const dateMin = dayjs.min(dates)
  const dateMax = dayjs.max(dates)
  return dateMax.diff(dateMin, 'day', true) <= daysLimit
}

export {
  validateDates,
  validateColumns
}
