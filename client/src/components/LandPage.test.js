import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { LandPage } from './LandPage';

describe ('LandPage.js', () => {

  afterEach(cleanup);

  it('renders', () => {
    const { asFragment } = render(<div className="LandPageContainer" />)
    expect(asFragment()).toMatchSnapshot();
  });

  it('headline is \'Shades of Green\'', () => {
    const { getByTestId } = render(<Router>  <LandPage/> </Router>);

    expect(getByTestId('h1tag')).toHaveTextContent('Shades of Green');
  })

})