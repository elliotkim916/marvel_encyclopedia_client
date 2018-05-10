import {
    MARVEL_API_BASE_URL, 
    MARVEL_CHARACTERS_ENDPOINT,
    PUBLIC_KEY,
    TS,
    HASH
} from '../config';
import history from '../history';

export const FIND_COMIC_REQUEST = 'FIND_COMIC_REQUEST';
export const findComicRequest = () => ({
    type: FIND_COMIC_REQUEST
});

export const FIND_COMIC_SUCCESS = 'FIND_COMIC_SUCCESS';
export const findComicSuccess = comic => ({
    type: FIND_COMIC_SUCCESS,
    comic
});

export const FIND_COMIC_ERROR = 'SEARCH_COMIC_ERROR';
export const findComicError = error => ({
    type: FIND_COMIC_ERROR,
    error
});

function searchComic(URI) {
    return fetch(`${URI}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results[0]);
}

export const findComic = URI => dispatch => {
    dispatch(findComicRequest());
    searchComic(URI)
        .then(comic => {
            dispatch(findComicSuccess(comic))
            history.push('/comic')
        })
        .catch(error => dispatch(findComicError(error)));
};

export const SEARCH_CHARACTER_REQUEST = 'SEARCH_CHARACTER_REQUEST';
export const searchCharacterRequest = () => ({
    type: SEARCH_CHARACTER_REQUEST
});

export const SEARCH_CHARACTER_SUCCESS = 'SEARCH_CHARACTER_SUCCESS';
export const searchCharacterSuccess = character => ({
    type: SEARCH_CHARACTER_SUCCESS,
    character
});

export const SEARCH_CHARACTER_ERROR = 'SEARCH_CHARACTER_ERROR';
export const searchCharacterError = error => ({
    type: SEARCH_CHARACTER_ERROR,
    error
});

function search(name) {
    return fetch(`${MARVEL_API_BASE_URL}${MARVEL_CHARACTERS_ENDPOINT}?ts=${TS}&name=${name}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results[0]);
}

export const searchCharacter = name => dispatch => {
    dispatch(searchCharacterRequest());
    search(name)
        .then(character => dispatch(searchCharacterSuccess(character)))
        .then(response => {
            history.push('/search-results')
        })
        .catch(error => dispatch(searchCharacterError(error)));
};

// Because this is an async action, rather than return an object from the action creator,
// we return a callback function.  When the action is dispatched, this function will be called by Redux Thunk,
// which passes in the dispatch method