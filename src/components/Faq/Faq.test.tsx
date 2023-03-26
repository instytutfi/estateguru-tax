import React from 'react'

import { render } from '@testing-library/react'

import Faq from './Faq'

describe('Faq', () => {
  it('renders without error', async () => {
    render(<Faq />)
  })
})
