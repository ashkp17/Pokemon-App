import { render, screen } from '@testing-library/react';
import Card from '../Components/card';

describe("Main",()=>{
  it('Card Component should render properly', () => {
    render(<Card />);
    const sortbtn = screen.getByTestId("showdetails");
    expect(sortbtn).toBeInTheDocument();
  });
 
})

