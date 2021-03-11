import { DATE_DEFAULT } from './constants';

const initialState = {
  date: '',
};

const defaultDateReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case DATE_DEFAULT:
      return { ...state, date: action.payload };
    default: return state;
  }
};

export default defaultDateReducer;
