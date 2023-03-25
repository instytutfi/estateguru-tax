import React from 'react'

import { render } from '@testing-library/react'
import { describe } from 'vitest'

import Features from './Features'

describe('Hero', () => {
  it('renders without error', async () => {
    render(<Features />)
  })
})
