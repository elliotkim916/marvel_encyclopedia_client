import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: null,
  loading: false,
  error: null,
  hasError: false,
};

const createUserRequest = (state, action) => {
  return { ...state, loading: true };
};

const createUserSuccess = (state, action) => {
  return { ...state, loading: false, user: action.user };
};

const createUserError = (state, action) => {
  return { ...state, loading: false, error: action.error, hasError: true };
};

const clearCreateUserError = (state, action) => {
  return { ...state, error: null, hasError: false };
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_USER_REQUEST:
      return createUserRequest(state, action);
    case actionTypes.CREATE_USER_SUCCESS:
      return createUserSuccess(state, action);
    case actionTypes.CREATE_USER_ERROR:
      return createUserError(state, action);
    case actionTypes.CLEAR_CREATE_USER_ERROR:
      return clearCreateUserError(state, action);
    default:
      return state;
  }
}
