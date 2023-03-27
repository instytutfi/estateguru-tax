import React from 'react'

import { render } from '@testing-library/react'
import { describe } from 'vitest'

import { Page } from './index.page'

describe('Hero', () => {
  it('renders without error', async () => {
    render(<Page />)
  })
})
