import React from 'react'

import { render } from '@testing-library/react'

import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders without error', async () => {
    render(<Navbar />)
  })
})
