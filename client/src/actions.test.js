import { cleanup } from '@testing-library/react';

import * as actions from './actions';

describe('actions', () => {

  afterEach(cleanup);

  it('should create an action when setting places', () => {
    const places = ['place1', 'place2'];
    const expectedAction = {
      type: 'SET_PLACES',
      places
    }
    expect(actions.setPlaces(places)).toEqual(expectedAction);
  })

  it('should create an action when getting the voted places', () => {
    const votedPlaces = ['place1', 'place2'];
    const expectedAction = {
      type: 'GET_VOTED_PLACES',
      votedPlaces,
    }
    expect(actions.getVotedPlaces(votedPlaces)).toEqual(expectedAction);
  })

  it('should create an action when getting the rating', () => {
    const rating = 1;
    const expectedAction = {
      type: 'GET_RATING',
      rating,
    }
    expect(actions.getRating(rating)).toEqual(expectedAction);
  })

})