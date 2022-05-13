import { render, screen,waitFor } from '@testing-library/react'
import Pokeinfo from '../components/PokeInfo'


describe('Pokeinfo',()=>{
  it('renders Pokeinfo', async() => {
    render(<Pokeinfo />)
  })

  it('should render pokemon names when api responds', async () => {
    render(<Pokeinfo />);
     await waitFor(()=> {
       screen.getAllByAltText("bulbasaur")
     })
  })

}) 

