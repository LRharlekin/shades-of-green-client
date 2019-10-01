import { cleanup } from '@testing-library/react';

import reducer from './reducers';

describe('reducers', () => {
  afterEach(cleanup);

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      places: [],
      votedPlaces: [],
      rating: null,
    })
  })

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

  it('should handle \'GET_VOTED_PLACES\'', () => {
     const state = {
       places: [],
       votedPlaces: ['place1'],
       rating: null,
     }

     const action = {
       type: 'GET_VOTED_PLACES',
       votedPlaces: ['place2'],
     }

     expect(
       reducer(state, action)).toStrictEqual({
         votedPlaces: ['place1', 'place2'],
         places: [],
         rating: null,
       })
  })

})