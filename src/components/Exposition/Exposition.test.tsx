import React from 'react'

import { render } from '@testing-library/react'

import Exposition from './Exposition'

describe('Exposition', () => {
  it('renders without error', async () => {
    render(<Exposition />)
  })
})
