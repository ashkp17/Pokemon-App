import { render, screen } from '@testing-library/react';
import Card from '../Components/card';
import { BrowserRouter } from 'react-router-dom'

const MockCard = ()=> {
  <BrowserRouter>
  <Card />
  </BrowserRouter>
}

describe("Main",()=>{
  it('Card Component should render properly', async() => {
    render(<MockCard pokemon = {[]} loading = {true} />);
    const cardItemID = await screen.findByTestId("card-item-0");
     expect(cardItemID).toBeInTheDocument();
  });
 
})

