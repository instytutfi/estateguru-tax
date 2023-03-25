import React from 'react'

import { render } from '@testing-library/react'

import Hero from './Hero'

describe('Hero', () => {
  it('renders without error', async () => {
    render(<Hero />)
  })
})
