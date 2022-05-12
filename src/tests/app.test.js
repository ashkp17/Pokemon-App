import { render, screen } from '@testing-library/react'
import App from '../App'

test('PokeMon App test', () => {
  render(<App />)
  const headingElement = screen.getByRole('heading', { name: 'PokeMon App' })
  expect(headingElement).toBeInTheDocument()
})
