import { render, screen,waitFor } from '@testing-library/react';
import Card from '../components/card';
import { BrowserRouter } from 'react-router-dom'

const MockCard = ()=> {
  <BrowserRouter>
  <Card />
  </BrowserRouter>
}

describe("Main",()=>{
  it('Card Component should render properly', async() => {
    render(<MockCard pokemon = {[]} loading = {true} />);
    //const cardItemID = await screen.findByTestId("card-item-0");
     //expect(cardItemID).toBeInTheDocument();
  });
  // it('should render pokemon names when api responds', async () => {
    
  //   // mockData.mockResolvedValue({
  //   //     {
  //   //       name: 'pokedex',
  //   //     },
  //   // })
  //   render(<MockCard />);
  //   await waitFor(()=> {
  //     screen.getAllByAltText("bulbasaur")
  //   })
  // })
})

