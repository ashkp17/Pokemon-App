import { render, screen, waitFor } from '@testing-library/react'
import Main from '../components/Main'
import { BrowserRouter } from 'react-router-dom'
import mockData from '../mockData'

const MockMain = () => {
  ;<BrowserRouter>
    <Main />
  </BrowserRouter>
}
jest.mock('../mockData')

describe('Main', () => {
  it('sortname', async () => {
    render(<Main />)
    const sortbtn = screen.getByTestId('sortname')
    expect(sortbtn).toBeInTheDocument()
  })

  it('sortByHeight should be present', async () => {
    render(<Main />)
    const sortbtn = screen.getByTestId('sortByHeight')
    expect(sortbtn).toBeInTheDocument()
  })

  it('sortByWeight should be present', async () => {
    render(<Main />)
    const sortbtn = screen.getByTestId('sortByWeight')
    expect(sortbtn).toBeInTheDocument()
  })
  it('10page should be present', async () => {
    render(<Main />)
    const sortbtn = screen.getByTestId('10page')
    expect(sortbtn).toBeInTheDocument()
  })
  it('20page should be present', async () => {
    render(<Main />)
    const sortbtn = screen.getByTestId('20page')
    expect(sortbtn).toBeInTheDocument()
  })
it('should render pokemon names when api responds', async () => {
    
   mockData.mockResolvedValue({
    results:[
      {
        name: 'pokedex',
     },
    ]  
   })
    render(<MockCard />);
   await waitFor(()=> {
       screen.getAllByAltText("pokedex")
   })
 })
})
