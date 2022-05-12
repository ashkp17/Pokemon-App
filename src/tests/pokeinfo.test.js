import { render, screen } from '@testing-library/react'
import Pokeinfo from '../components/PokeInfo'

test('renders Pokeinfo', () => {
  render(<Pokeinfo />)
  //    const linkElement = screen.getByText(/Cards Page/i);
  //   expect(linkElement).toBeInTheDocument();
})
