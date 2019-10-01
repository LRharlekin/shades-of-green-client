import { cleanup } from '@testing-library/react';

import * as actions from '../actions';

describe('actions', () => {

  afterEach(cleanup);

  it('should create an action when updating places', () => {
    const places = ['place', 'place'];
    const expectedAction = {
      type: 'SET_PLACES',
      places
    }
    expect(actions.updatePlaces(places)).toEqual(expectedAction);
  })

  it('should create an action when ')

})