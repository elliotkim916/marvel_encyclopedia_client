import {
    MARVEL_API_BASE_URL, 
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
    return fetch(`${URI.slice(5)}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
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
            dispatch(findComicCharacter(comic.id))
        })
        .then(response => {
            history.push('/comic')
        })
        .catch(error => dispatch(findComicError(error)));
};

export const FIND_COMIC_CHARACTER_REQUEST = 'FIND_COMIC_CHARACTER_REQUEST';
export const findComicCharacterRequest = () => ({
    type: FIND_COMIC_CHARACTER_REQUEST
});

export const FIND_COMIC_CHARACTER_SUCCESS = 'FIND_COMIC_CHARACTER_SUCCESS';
export const findComicCharacterSuccess = comicCharacter => ({
    type: FIND_COMIC_CHARACTER_SUCCESS,
    comicCharacter
});

function searchComicCharacter(id) {
    return fetch(`${MARVEL_API_BASE_URL}public/comics/${id}/characters?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results)
}

export const findComicCharacter = id => dispatch => {
    dispatch(findComicCharacterRequest());
    searchComicCharacter(id)
        .then(comicId => {
            dispatch(findComicCharacterSuccess(comicId))
        })
        .catch(error => dispatch(findComicError(error)));
}

// Because this is an async action, rather than return an object from the action creator,
// we return a callback function.  When the action is dispatched, this function will be called by Redux Thunk,
// which passes in the dispatch method

//fetch in action to server-side