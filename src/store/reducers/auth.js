import * as actionTypes from '../actions/actionTypes';

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null,
  hasError: false,
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
  return { ...state, loading: false, error: action.error, hasError: true };
};

const clearAuthError = (state, action) => {
  return { ...state, error: null, hasError: false };
};

const clearAuth = (state, action) => {
  return { ...state, authToken: null, currentUser: null };
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST:
      return authRequest(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.SET_AUTH_TOKEN:
      return setAuthToken(state, action);
    case actionTypes.AUTH_ERROR:
      return authError(state, action);
    case actionTypes.CLEAR_AUTH:
      return clearAuth(state, action);
    case actionTypes.CLEAR_AUTH_ERROR:
      return clearAuthError(state, action);
    default:
      return state;
  }
}
