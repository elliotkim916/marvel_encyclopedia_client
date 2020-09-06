import {
  FETCH_PROTECTED_DATA_SUCCESS,
  FETCH_PROTECTED_DATA_ERROR,
  ADD_PROTECTED_DATA_SUCCESS,
  DELETE_PROTECTED_DATA_SUCCESS,
} from '../actions/protected-data';

const initialState = {
  data: '',
  addComicData: '',
  error: null,
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
    addComicData: { data: [...state.data.data, action.addComicData] },
  };
};

const deleteProtectedDataSuccess = (state, action) => {
  return {
    ...state,
    data: { data: state.data.data.filter((comic) => comic._id !== action.id) },
  };
};

export default function protectedDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROTECTED_DATA_SUCCESS:
      return fetchProtectedDataSuccess(state, action);
    case ADD_PROTECTED_DATA_SUCCESS:
      return addProtectedDataSuccess(state, action);
    case DELETE_PROTECTED_DATA_SUCCESS:
      return deleteProtectedDataSuccess(state, action);
    case FETCH_PROTECTED_DATA_ERROR:
      return fetchProtectedDataError(state, action);
    default:
      return state;
  }
}
