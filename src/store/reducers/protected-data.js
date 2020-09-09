import * as actionTypes from '../actions/actionTypes';

const initialState = {
  data: '',
  addComicData: '',
  error: null,
  deleteFinish: false,
};

const fetchProtectedDataSuccess = (state, action) => {
  return { ...state, data: action.protected };
};

const fetchProtectedDataError = (state, action) => {
  return { ...state, error: action.error };
};

const addProtectedDataSuccess = (state, action) => {
  return {
    ...state,
    addComicData: { data: [action.addComicData, ...state.data.data] },
  };
};

const deleteProtectedDataSuccess = (state, action) => {
  return {
    ...state,
    data: { data: state.data.data.filter((comic) => comic._id !== action.id) },
    deleteFinish: true,
  };
};

const refreshProtectedDataDelete = (state, action) => {
  return {
    ...state,
    deleteFinish: false,
  };
};

export default function protectedDataReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PROTECTED_DATA_SUCCESS:
      return fetchProtectedDataSuccess(state, action);
    case actionTypes.ADD_PROTECTED_DATA_SUCCESS:
      return addProtectedDataSuccess(state, action);
    case actionTypes.DELETE_PROTECTED_DATA_SUCCESS:
      return deleteProtectedDataSuccess(state, action);
    case actionTypes.FETCH_PROTECTED_DATA_ERROR:
      return fetchProtectedDataError(state, action);
    case actionTypes.REFRESH_PROTECTED_DATA_DELETE:
      return refreshProtectedDataDelete(state, action);
    default:
      return state;
  }
}
