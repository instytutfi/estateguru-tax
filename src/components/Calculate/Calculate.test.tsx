import React from 'react'

import { render } from '@testing-library/react'

import Calculate from './Calculate'

describe('Calculate', () => {
  it('renders without error', async () => {
    render(<Calculate />)
  })
})
