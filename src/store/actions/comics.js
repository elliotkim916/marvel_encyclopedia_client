import { MARVEL_API_BASE_URL, PUBLIC_KEY, TS, HASH } from '../../config';
import history from '../../history';
import * as actionTypes from './actionTypes';

export const findComicRequest = () => ({
  type: actionTypes.FIND_COMIC_REQUEST,
});

export const findComicSuccess = (comic) => ({
  type: actionTypes.FIND_COMIC_SUCCESS,
  comic,
});

export const findComicError = (error) => ({
  type: actionTypes.FIND_COMIC_ERROR,
  error,
});

function searchComic(URI) {
  return fetch(`${URI.slice(5)}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => data.data.results[0]);
}

export const findComic = (URI) => (dispatch) => {
  dispatch(findComicRequest());
  searchComic(URI)
    .then((comic) => {
      dispatch(findComicSuccess(comic));
      dispatch(findComicCharacter(comic.id));
    })
    .then((response) => {
      history.push('/comic');
    })
    .catch((error) => dispatch(findComicError(error)));
};

export const findComicCharacterRequest = () => ({
  type: actionTypes.FIND_COMIC_CHARACTER_REQUEST,
});

export const findComicCharacterSuccess = (comicCharacter) => ({
  type: actionTypes.FIND_COMIC_CHARACTER_SUCCESS,
  comicCharacter,
});

function searchComicCharacter(id) {
  return fetch(
    `${MARVEL_API_BASE_URL}public/comics/${id}/characters?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
  )
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => data.data.results);
}

export const findComicCharacter = (id) => (dispatch) => {
  dispatch(findComicCharacterRequest());
  searchComicCharacter(id)
    .then((comicId) => {
      dispatch(findComicCharacterSuccess(comicId));
    })
    .catch((error) => dispatch(findComicError(error)));
};

// Because this is an async action, rather than return an object from the action creator,
// we return a callback function.  When the action is dispatched, this function will be called by Redux Thunk,
// which passes in the dispatch method

//fetch in action to server-side
