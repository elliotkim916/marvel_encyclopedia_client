import {
  FIND_COMIC_REQUEST,
  FIND_COMIC_SUCCESS,
  FIND_COMIC_CHARACTER_REQUEST,
  FIND_COMIC_CHARACTER_SUCCESS,
  FIND_COMIC_ERROR,
} from '../actions/comics';

const initialState = {
  clickedComic: {},
  comicCharacter: [],
  loading: false,
  error: null,
};

const findComicRequest = (state, action) => {
  return { ...state, loading: true };
};

const findComicCharacterRequest = (state, action) => {
  return { ...state, loading: true };
};

const findComicSuccess = (state, action) => {
  return { ...state, clickedComic: action.comic, loading: false };
};

const findComicCharacterSuccess = (state, action) => {
  return { ...state, comicCharacter: action.comicCharacter, loading: false };
};

const findComicError = (state, action) => {
  return { ...state, error: action.error, loading: false };
};

export function comicReducer(state = initialState, action) {
  switch (action.type) {
    case FIND_COMIC_REQUEST:
      return findComicRequest(state, action);
    case FIND_COMIC_CHARACTER_REQUEST:
      return findComicCharacterRequest(state, action);
    case FIND_COMIC_SUCCESS:
      return findComicSuccess(state, action);
    case FIND_COMIC_CHARACTER_SUCCESS:
      return findComicCharacterSuccess(state, action);
    case FIND_COMIC_ERROR:
      return findComicError(state, action);
    default:
      return state;
  }
}
