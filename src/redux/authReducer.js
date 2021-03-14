import { LOGIN, LOGIN_FALSE, LOGIN_TRUE, QUIT } from './constants';
import { auth } from '../utils/FirebaseDB/FirebaseDB';

function localStorageAuth() {
  // debugger
  switch (localStorage.getItem('isAuth') === 'true') {
    case true:
      return true;
    case false:
      localStorage.removeItem('uidTravel');
      return false;
    default:
      localStorage.removeItem('uidTravel');
      return false;
  }
}

const initialState = {
  auth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, auth: true };
    case QUIT:
      localStorage.setItem('isAuth', 'false');
      localStorage.removeItem('uidTravel');
      auth.signOut();
      return { ...state, auth: false };
    default:
      return state;
  }
};

export default authReducer;
