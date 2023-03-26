import dayjs from 'dayjs'
import { expect } from 'vitest'

import { adaptEstateguruDate } from '../adapters'

describe('adaptEstateguruDate', () => {
  it('parses dates properly', async () => {
    const date = '11.12.1996 4:30'
    const adapted = adaptEstateguruDate(date)
    expect(adapted.getFullYear()).toEqual(1996)
    expect(adapted.getMonth()).toEqual(11)
    expect(adapted.getDate()).toEqual(11)

    const displayed = dayjs(adapted).format('YYYY-MM-DD')
    expect(displayed).toEqual('1996-12-11')
  })
})
