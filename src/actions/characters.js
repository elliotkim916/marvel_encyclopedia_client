import {
    MARVEL_API_BASE_URL, 
    MARVEL_CHARACTERS_ENDPOINT,
    PUBLIC_KEY,
    TS,
    HASH
} from '../config';
import history from '../history';

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
    }).then(data => data.data.results[0])   
}

export const searchCharacter = name => dispatch => {
    dispatch(searchCharacterRequest());
    search(name)
        .then(character => {
            dispatch(searchCharacterSuccess(character))
            dispatch(findCharacterComic(character.id))
            dispatch(findCharacterEvent(character.id))
        })
        .then(response => {
            history.push('/search-results')
        })
        .catch(error => dispatch(searchCharacterError(error)))
        .then(response => {
            history.push('/search-results')
        });
};

export const SEARCH_CHARACTER_COMIC_REQUEST = 'SEARCH_CHARACTER_COMIC_REQUEST';
export const searchCharacterComicRequest = () => ({
    type: SEARCH_CHARACTER_COMIC_REQUEST
});

export const SEARCH_CHARACTER_COMIC_SUCCESS = 'SEARCH_CHARACTER_COMIC_SUCCESS';
export const searchCharacterComicSuccess = characterComic => ({
    type: SEARCH_CHARACTER_COMIC_SUCCESS,
    characterComic
});

function searchCharacterComic(id) {
    return fetch(`${MARVEL_API_BASE_URL}${MARVEL_CHARACTERS_ENDPOINT}/${id}/comics?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results);
}

export const findCharacterComic = id => dispatch => {
    dispatch(searchCharacterComicRequest());
    searchCharacterComic(id)
        .then(characterId => dispatch(searchCharacterComicSuccess(characterId)))
        .catch(error => dispatch(searchCharacterError(error)));
};

export const SEARCH_CHARACTER_EVENT_REQUEST = 'SEARCH_CHARACTER_EVENT_REQUEST';
export const searchCharacterEventRequest = () => ({
    type: SEARCH_CHARACTER_EVENT_REQUEST
});

export const SEARCH_CHARACTER_EVENT_SUCCESS = 'SEARCH_CHARACTER_EVENT_SUCCESS';
export const searchCharacterEventSuccess = characterEvent => ({
    type: SEARCH_CHARACTER_EVENT_SUCCESS,
    characterEvent
});

function searchCharacterEvent(id) {
    return fetch(`${MARVEL_API_BASE_URL}${MARVEL_CHARACTERS_ENDPOINT}/${id}/events?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results);
}

export const findCharacterEvent = id => dispatch => {
    dispatch(searchCharacterEventRequest());
    searchCharacterEvent(id)
        .then(characterId => dispatch(searchCharacterEventSuccess(characterId)))
        .catch(error => dispatch(searchCharacterError(error)));
};