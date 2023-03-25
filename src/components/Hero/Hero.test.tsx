import React from 'react'

import { render } from '@testing-library/react'
import { describe } from 'vitest'

import Hero from './Hero'

describe('Hero', () => {
  it('renders without error', async () => {
    render(<Hero />)
  })
})
