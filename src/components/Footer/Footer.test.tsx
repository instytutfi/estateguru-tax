import React from 'react'

import { render } from '@testing-library/react'
import { describe } from 'vitest'

import Footer from './Footer'

describe('Hero', () => {
  it('renders without error', async () => {
    render(<Footer />)
  })
})
