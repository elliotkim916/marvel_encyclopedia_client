import {
  FIND_EVENT_REQUEST,
  FIND_EVENT_SUCCESS,
  SEARCH_EVENT_CHARACTER_REQUEST,
  SEARCH_EVENT_CHARACTER_SUCCESS,
  SEARCH_EVENT_COMIC_REQUEST,
  SEARCH_EVENT_COMIC_SUCCESS,
  FIND_EVENT_ERROR,
} from '../actions/events';

const initialState = {
  clickedEvent: {},
  eventCharacter: [],
  eventComic: [],
  loading: false,
  error: null,
};

const findEventRequest = (state, action) => {
  return { ...state, loading: true };
};

const findEventSuccess = (state, action) => {
  return { ...state, loading: false, clickedEvent: action.event };
};

const findEventError = (state, action) => {
  return { ...state, error: action.error };
};

const searchEventCharacterRequest = (state, action) => {
  return { ...state, loading: true };
};

const searchEventCharacterSuccess = (state, action) => {
  return {
    ...state,
    eventCharacter: action.eventCharacter,
    loading: false,
  };
};
const searchEventComicRequest = (state, action) => {
  return { ...state, loading: true };
};

const searchEventComicSuccess = (state, action) => {
  return { ...state, eventComic: action.eventComic, loading: false };
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case FIND_EVENT_REQUEST:
      return findEventRequest(state, action);
    case SEARCH_EVENT_CHARACTER_REQUEST:
      return searchEventCharacterRequest(state, action);
    case SEARCH_EVENT_COMIC_REQUEST:
      return searchEventComicRequest(state, action);
    case FIND_EVENT_SUCCESS:
      return findEventSuccess(state, action);
    case SEARCH_EVENT_CHARACTER_SUCCESS:
      return searchEventCharacterSuccess(state, action);
    case SEARCH_EVENT_COMIC_SUCCESS:
      return searchEventComicSuccess(state, action);
    case FIND_EVENT_ERROR:
      return findEventError(state, action);
    default:
      return state;
  }
}
