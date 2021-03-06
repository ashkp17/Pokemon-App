import { render, screen } from '@testing-library/react'
import NextPrevBtn from '../components/NextPrevBtn'


describe("NextPrevBtn", ()=> {
  it('NextPrev Buttons should be present', async() => {
    render(<NextPrevBtn />);
    const sortbtn = screen.getByTestId("nextprev");
    expect(sortbtn).toBeInTheDocument();
  });
})

