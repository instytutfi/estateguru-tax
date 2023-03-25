import React from 'react'

import { render } from '@testing-library/react'

import FileUpload from './FileUpload'

describe('FileUpload', () => {
  it('renders without error', async () => {
    render(<FileUpload />)
  })
})
