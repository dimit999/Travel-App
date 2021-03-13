import { LOGIN, LOGIN_FALSE, LOGIN_TRUE, QUIT } from './constants';

function localStorageAuth() {
  switch (localStorage.getItem('isAuth')) {
    case LOGIN_TRUE:
      return true;
    case LOGIN_FALSE:
      return false;
    default:
      return false;
  }
}

const initialState = {
  auth: localStorageAuth(),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('isAuth', 'true');
      return { ...state, auth: true };
    case QUIT:
      localStorage.setItem('isAuth', 'false');
      return { ...state, auth: false };
    default:
      return state;
  }
};

export default authReducer;
