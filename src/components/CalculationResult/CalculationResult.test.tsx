import React from 'react'

import { render } from '@testing-library/react'

import CalculationResult from './CalculationResult'

describe('CalculationResult', () => {
  it('renders without error', async () => {
    render(<CalculationResult />)
  })
})
