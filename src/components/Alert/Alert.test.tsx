import React from 'react'

import { render } from '@testing-library/react'

import Alert from './Alert'

describe('Alert', () => {
  it('renders without error', async () => {
    render(<Alert title="Test" content="Test" status="success" />)
  })
})
