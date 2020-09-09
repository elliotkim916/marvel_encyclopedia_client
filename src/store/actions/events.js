import { MARVEL_API_BASE_URL, PUBLIC_KEY, TS, HASH } from '../../config';
import history from '../../history';
import * as actionTypes from './actionTypes';

export const findEventRequest = () => ({
  type: actionTypes.FIND_EVENT_REQUEST,
});

export const findEventSuccess = (event) => ({
  type: actionTypes.FIND_EVENT_SUCCESS,
  event,
});

export const findEventError = (error) => ({
  type: actionTypes.FIND_EVENT_ERROR,
  error,
});

function searchEvent(URI) {
  return fetch(`${URI.slice(5)}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => data.data.results[0]);
}

export const findEvent = (URI) => (dispatch) => {
  dispatch(findEventRequest());
  searchEvent(URI)
    .then((event) => {
      dispatch(findEventSuccess(event));
      dispatch(findEventCharacter(event.id));
      dispatch(findEventComic(event.id));
    })
    .then((response) => {
      history.push('/event');
    })
    .catch((error) => dispatch(findEventError(error)));
};

export const searchEventCharacterRequest = () => ({
  type: actionTypes.SEARCH_EVENT_CHARACTER_REQUEST,
});

export const searchEventCharacterSuccess = (eventCharacter) => ({
  type: actionTypes.SEARCH_EVENT_CHARACTER_SUCCESS,
  eventCharacter,
});

function searchEventCharacter(id) {
  return fetch(
    `${MARVEL_API_BASE_URL}/public/events/${id}/characters?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
  )
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => data.data.results);
}

export const findEventCharacter = (id) => (dispatch) => {
  dispatch(searchEventCharacterRequest());
  searchEventCharacter(id)
    .then((eventId) => dispatch(searchEventCharacterSuccess(eventId)))
    .catch((error) => dispatch(findEventError(error)));
};

export const searchEventComicRequest = () => ({
  type: actionTypes.SEARCH_EVENT_COMIC_REQUEST,
});

export const searchEventComicSuccess = (eventComic) => ({
  type: actionTypes.SEARCH_EVENT_COMIC_SUCCESS,
  eventComic,
});

function searchEventComic(id) {
  return fetch(
    `${MARVEL_API_BASE_URL}/public/events/${id}/comics?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
  )
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => data.data.results);
}

export const findEventComic = (id) => (dispatch) => {
  dispatch(searchEventComicRequest());
  searchEventComic(id)
    .then((comicId) => dispatch(searchEventComicSuccess(comicId)))
    .catch((error) => dispatch(findEventError(error)));
};
