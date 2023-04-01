import React from 'react'

import { render } from '@testing-library/react'

import LanguageSwitcher from './LanguageSwitcher'

describe('LanguageSwitcher', () => {
  it('renders without error', async () => {
    render(<LanguageSwitcher />)
  })
})
