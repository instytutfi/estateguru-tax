import React from 'react'

import { render } from '@testing-library/react'

import { Calculator } from 'services'

import CalculationResult from './CalculationResult'

describe('CalculationResult', () => {
  it('renders without error', async () => {
    render(<CalculationResult calculator={new Calculator([])} />)
  })
})
