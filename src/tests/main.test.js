import { render, screen } from '@testing-library/react';
import Main from '../Components/Main';


describe("Main",()=>{
  it('sortname', async() => {
    render(<Main />);
    const sortbtn = screen.getByTestId("sortname");
    expect(sortbtn).toBeInTheDocument();
  });

  it('sortByHeight should be present', async() => {
    render(<Main />);
    const sortbtn = screen.getByTestId("sortByHeight");
    expect(sortbtn).toBeInTheDocument();
  });

  it('sortByWeight should be present', async() => {
    render(<Main />);
    const sortbtn = screen.getByTestId("sortByWeight");
    expect(sortbtn).toBeInTheDocument();
  });
  it('10page should be present', async() => {
    render(<Main />);
    const sortbtn = screen.getByTestId("10page");
    expect(sortbtn).toBeInTheDocument();
  });
  it('20page should be present', async() => {
    render(<Main />);
    const sortbtn = screen.getByTestId("20page");
    expect(sortbtn).toBeInTheDocument();
  });
})


