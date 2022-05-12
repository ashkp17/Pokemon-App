import { render, screen } from '@testing-library/react'
import SearchInput from '../components/SearchInput'


describe("SearchInput", ()=> {
  it('SearchInput Buttons should be present', async() => {
    render(<SearchInput />);
    const sortbtn = screen.getByTestId("searchinput");
    expect(sortbtn).toBeInTheDocument();
  });
  it('SearchInput placeholderText should match', async() => {
    render(<SearchInput />);
    const sortbtn = screen.getByPlaceholderText(/Search by Name/i)
    expect(sortbtn).toBeInTheDocument();
  });

})

