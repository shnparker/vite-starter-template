import { render } from '@testing-library/react'

import App from '@/App'

describe('App', () => {
  it('renders hello world', () => {
    const { getByText } = render(<App />)
    expect(getByText('Hello World')).toBeInTheDocument()
  })
})
