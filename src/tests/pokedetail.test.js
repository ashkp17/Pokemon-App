import { render, screen } from '@testing-library/react'
import Pokedetail from '../Components/PokeDetail'
import { BrowserRouter } from 'react-router-dom'

const MockPokeDetail = ()=>{
  return(
    <BrowserRouter>
     <Pokedetail/>
    </BrowserRouter>
  )
}

test('renders Pokedetail', () => {
  render(<MockPokeDetail />)
  const linkElement = screen.getByRole('heading')
  expect(linkElement).toBeInTheDocument()
})
