import { API_BASE_URL } from '../../config';
import { normalizeResponseErrors } from './utils';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const createUserRequest = () => ({
  type: CREATE_USER_REQUEST,
});

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const createUserSuccess = (user) => ({
  type: CREATE_USER_SUCCESS,
  user,
});

export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const createUserError = (error) => ({
  type: CREATE_USER_ERROR,
  error,
});

export const CLEAR_CREATE_USER_ERROR = 'CLEAR_CREATE_USER_ERROR';
export const clearCreateUserError = () => ({
  type: CLEAR_CREATE_USER_ERROR,
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
