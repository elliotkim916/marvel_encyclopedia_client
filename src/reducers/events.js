import {
  FIND_EVENT_REQUEST,
  FIND_EVENT_SUCCESS,
  SEARCH_EVENT_CHARACTER_REQUEST,
  SEARCH_EVENT_CHARACTER_SUCCESS,
  SEARCH_EVENT_COMIC_REQUEST,
  SEARCH_EVENT_COMIC_SUCCESS,
  FIND_EVENT_ERROR
} from '../actions/events';

const initialState = {
  clickedEvent: {},
  eventCharacter: [],
  eventComic: [],
  loading: false,
  eventCharacterLoading: false,
  eventComicLoading: false,
  error: null
}

export function eventReducer(state=initialState, action) {
  if (action.type === FIND_EVENT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === SEARCH_EVENT_CHARACTER_REQUEST) {
    return Object.assign({}, state, {
      eventCharacterLoading: true,
      error: null
  }); 
  } else if (action.type === SEARCH_EVENT_COMIC_REQUEST) {
    return Object.assign({}, state, {
      eventComicLoading: true,
      error: null
  });  
  } else if (action.type === FIND_EVENT_SUCCESS) {
    return Object.assign({}, state, {
      clickedEvent: action.event,
      loading: false,
      error: null
    });
  } else if (action.type === SEARCH_EVENT_CHARACTER_SUCCESS) {
    return Object.assign({}, state, {
      eventCharacter: action.eventCharacter,
      eventCharacterLoading: false,
      error: null
    }); 
  } else if (action.type === SEARCH_EVENT_COMIC_SUCCESS) {
    return Object.assign({}, state, {
      eventComic: action.eventComic,
      eventComicLoading: false,
      error: null
    });
  } else if (action.type === FIND_EVENT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
}