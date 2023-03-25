import React from 'react'

import { render } from '@testing-library/react'
import { describe } from 'vitest'

import HomePage from './HomePage'

describe('Hero', () => {
  it('renders without error', async () => {
    render(<HomePage />)
  })
})
