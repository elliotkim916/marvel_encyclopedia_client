import jwtDecode from 'jwt-decode';
import { API_BASE_URL } from '../../config';
import { normalizeResponseErrors } from '../../shared/utils';
import { saveAuthToken, clearAuthToken } from '../../shared/local-storage';
import * as actionTypes from './actionTypes';

export const setAuthToken = (authToken) => ({
  type: actionTypes.SET_AUTH_TOKEN,
  authToken,
});

export const clearAuth = () => ({
  type: actionTypes.CLEAR_AUTH,
});

export const authRequest = () => ({
  type: actionTypes.AUTH_REQUEST,
});

export const authSuccess = (currentUser) => ({
  type: actionTypes.AUTH_SUCCESS,
  currentUser,
});

export const authError = (error) => ({
  type: actionTypes.AUTH_ERROR,
  error,
});

export const clearAuthError = () => ({
  type: actionTypes.CLEAR_AUTH_ERROR,
});

// SET_AUTH_TOKEN stores the encoded token which is used for authentication
// The user info contained in the payload is stored by dispatching the authSuccess action
const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

export const login = (username, password) => (dispatch) => {
  dispatch(authRequest());
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => normalizeResponseErrors(res))
    .then((res) => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch((err) => dispatch(authError(err)));
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().authReducer.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then((res) => normalizeResponseErrors(res))
    .then((res) => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch((err) => {
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(authToken);
    });
};
