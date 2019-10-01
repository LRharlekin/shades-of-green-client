import React from 'react';
import { render, cleanup } from '@testing-library/react';

import * as actions from './actions';
import reducer from './reducers';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      places: [],
      votedPlaces: [],
      rating: null,
    })
  })

  //TODO: HOW TO TEST THE REDUCER...npm
  it('should handle \'SET_PLACES\'', () => {
    const INITIAL_STATE = {
      places: ['place1'],
      votedPlaces: ['place1'],
      rating: null
    }

    expect(
      reducer(INITIAL_STATE, {
        type: 'SET_PLACES',
        places: { results: ['newPlace1'] }
      }
      )).toStrictEqual({
        votedPlaces: ['place1'],
        places: [ 'newPlace1'],
        rating: null
      })

  })

})