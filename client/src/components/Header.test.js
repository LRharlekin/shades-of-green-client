import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Correct import
import faker from "faker" // just for fun

import { Header } from './Header'; // using named import instead of import Header from ...

describe('Header.js', () => {
  afterEach(cleanup);
  
  it("renders", () => {
    const { asFragment } = render(<Header />);
    // snapshot test:
    expect(asFragment()).toMatchSnapshot();
  });
  
  it("uses custom text if specified", () => {
    const title = faker.company.bs()
    const { getByTestId } = render(<Header text={ title } />);
  
    expect(getByTestId("h1tag")).toHaveTextContent(title);
    expect(getByTestId("h1tag")).toHaveClass("HeadLine");
  })
  
  it("uses Shades of Green if no custom text is passed", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("h1tag")).toHaveTextContent("Shades of Green");
  })
})
