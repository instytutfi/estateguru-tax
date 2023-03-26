import React from 'react'

import { render } from '@testing-library/react'

import Card from './Card'

describe('Card', () => {
  it('renders without error', async () => {
    render(<Card />)
  })
})
