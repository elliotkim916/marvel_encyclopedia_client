import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from '../actions/auth';

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null,
};

const authRequest = (state, action) => {
  return { ...state, loading: true };
};

const authSuccess = (state, action) => {
  return { ...state, loading: false, currentUser: action.currentUser };
};

const setAuthToken = (state, action) => {
  return { ...state, authToken: action.authToken };
};

const authError = (state, action) => {
  return { ...state, loading: false, error: action.error };
};

const clearAuth = (state, action) => {
  return { ...state, authToken: null, currentUser: null };
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return authRequest(state, action);
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case SET_AUTH_TOKEN:
      return setAuthToken(state, action);
    case AUTH_ERROR:
      return authError(state, action);
    case CLEAR_AUTH:
      return clearAuth(state, action);
    default:
      return state;
  }
}
