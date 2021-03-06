import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchedCharacter: {},
  searchedCharacterComic: [],
  searchedCharacterEvent: [],
  loading: false,
  error: null,
};

const searchCharacterRequest = (state, action) => {
  return { ...state, loading: true };
};

const searchCharacterComicRequest = (state, action) => {
  return { ...state, loading: true };
};

const searchCharacterEventRequest = (state, action) => {
  return { ...state, loading: true };
};

const searchCharacterSuccess = (state, action) => {
  return { ...state, loading: false, searchedCharacter: action.character };
};

const searchCharacterComicSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    searchedCharacterComic: action.characterComic,
  };
};

const searchCharacterEventSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    searchedCharacterEvent: action.characterEvent,
  };
};

const searchCharacterError = (state, action) => {
  return { ...state, loading: false, error: action.error };
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_CHARACTER_REQUEST:
      return searchCharacterRequest(state, action);
    case actionTypes.SEARCH_CHARACTER_COMIC_REQUEST:
      return searchCharacterComicRequest(state, action);
    case actionTypes.SEARCH_CHARACTER_EVENT_REQUEST:
      return searchCharacterEventRequest(state, action);
    case actionTypes.SEARCH_CHARACTER_SUCCESS:
      return searchCharacterSuccess(state, action);
    case actionTypes.SEARCH_CHARACTER_COMIC_SUCCESS:
      return searchCharacterComicSuccess(state, action);
    case actionTypes.SEARCH_CHARACTER_EVENT_SUCCESS:
      return searchCharacterEventSuccess(state, action);
    case actionTypes.SEARCH_CHARACTER_ERROR:
      return searchCharacterError(state, action);
    default:
      return state;
  }
}
