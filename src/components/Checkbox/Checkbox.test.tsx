import React from 'react'

import { render } from '@testing-library/react'

import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('renders without error', async () => {
    render(<Checkbox name="test" label="Test" />)
  })
})
