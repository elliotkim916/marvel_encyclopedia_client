import { API_BASE_URL } from '../../config';
import { normalizeResponseErrors } from '../../shared/utils';
import * as actionTypes from './actionTypes';

export const createUserRequest = () => ({
  type: actionTypes.CREATE_USER_REQUEST,
});

export const createUserSuccess = (user) => ({
  type: actionTypes.CREATE_USER_SUCCESS,
  user,
});

export const createUserError = (error) => ({
  type: actionTypes.CREATE_USER_ERROR,
  error,
});

export const clearCreateUserError = () => ({
  type: actionTypes.CLEAR_CREATE_USER_ERROR,
});

export const registerUser = (user) => (dispatch) => {
  dispatch(createUserRequest());
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => normalizeResponseErrors(res))
    .then((res) => res.json())
    .then((user) => dispatch(createUserSuccess(user)))
    .catch((err) => dispatch(createUserError(err)));
};
