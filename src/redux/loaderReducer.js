import { LOADER_OFF, LOADER_ON } from './constants';

const initialState = {
  isLoading: true,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return { ...state, isLoading: true };
    case LOADER_OFF:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default loaderReducer;
