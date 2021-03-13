/* eslint-disable no-case-declarations */
import { FAVORITE } from './constants';

const initialState = {
  favorites: [],
};

const favoriteFlightsListReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case FAVORITE:
      return {
        ...state,
        favorites:
          state.favorites.includes(action.payload)
            ? state.favorites.filter(el => el !== action.payload)
            : [...state.favorites, action.payload],
      };
    default: return state;
  }
};

export default favoriteFlightsListReducer;
