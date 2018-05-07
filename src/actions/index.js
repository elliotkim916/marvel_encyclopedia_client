import React from 'react';
import {MARVEL_API_BASE_URL} from '../config';
import {MARVEL_CHARACTERS_ENDPOINT} from '../config';
import {PUBLIC_KEY} from '../config';
// import {PRIVATE_KEY} from '../config';

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
    return fetch(`${MARVEL_API_BASE_URL}${MARVEL_CHARACTERS_ENDPOINT}?name=${name}&apikey=${PUBLIC_KEY}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => console.log(data));
}

export const searchCharacter = name => dispatch => {
    dispatch(searchCharacterRequest());
    search(name)
        .then(character => dispatch(searchCharacterSuccess(character)))
        .catch(error => dispatch(searchCharacterError(error)));
};

// Because this is an async action, rather than return an object from the action creator,
// we return a callback function.  When the action is dispatched, this function will be called by Redux Thunk,
// which passes in the dispatch method