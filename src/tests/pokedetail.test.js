import { render, screen,waitFor } from '@testing-library/react'
import Pokedetail from '../components/PokeDetail'
import { BrowserRouter } from 'react-router-dom'

const MockPokeDetail = ()=>{
  return(
    <BrowserRouter>
     <Pokedetail/>
    </BrowserRouter>
  )
}

describe("Pokedetail",()=>{
  it('renders Pokedetail', async() => {
    render(<MockPokeDetail />)
    const linkElement = screen.getByRole('heading')
    expect(linkElement).toBeInTheDocument()
  })

})
