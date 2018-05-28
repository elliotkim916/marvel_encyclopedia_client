import {
    SEARCH_CHARACTER_REQUEST,
    SEARCH_CHARACTER_SUCCESS,
    SEARCH_CHARACTER_COMIC_SUCCESS,
    SEARCH_CHARACTER_EVENT_SUCCESS,
    SEARCH_CHARACTER_ERROR
} from '../actions/characters';

import {
    FIND_COMIC_REQUEST,
    FIND_COMIC_SUCCESS,
    FIND_COMIC_CHARACTER_SUCCESS,
    FIND_COMIC_ERROR
} from '../actions/comics';

import {
    FIND_EVENT_REQUEST,
    FIND_EVENT_SUCCESS,
    SEARCH_EVENT_CHARACTER_SUCCESS,
    SEARCH_EVENT_COMIC_SUCCESS,
    FIND_EVENT_ERROR
} from '../actions/events';

const initialState = {
    searchedCharacter: {},
    searchedCharacterComic: [],
    searchedCharacterEvent: [],
    clickedComic: {},
    comicCharacter: [],
    eventCharacter: [],
    eventComic: [],
    clickedEvent: {},
    loading: false,
    error: null
};

export function characterReducer(state=initialState, action) {
    if (action.type === SEARCH_CHARACTER_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === SEARCH_CHARACTER_SUCCESS) {
        return Object.assign({}, state, {
            searchedCharacter: action.character,
            loading: false,
            error: null
        });
    } else if (action.type === SEARCH_CHARACTER_COMIC_SUCCESS) {
        return Object.assign({}, state, {
            searchedCharacterComic: action.characterComic,
            loading: false,
            error: null
        });
    } else if (action.type === SEARCH_CHARACTER_EVENT_SUCCESS) {
        return Object.assign({}, state, {
            searchedCharacterEvent: action.characterEvent,
            loading: false,
            error: null
        }); 
    } else if (action.type === SEARCH_CHARACTER_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}

export function comicReducer(state=initialState, action) {
    if (action.type === FIND_COMIC_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === FIND_COMIC_SUCCESS) {
        return Object.assign({}, state, {
            clickedComic: action.comic,
            loading: false,
            error: null
        });
    } else if (action.type === FIND_COMIC_CHARACTER_SUCCESS) {
        return Object.assign({}, state, {
            comicCharacter: action.comicCharacter,
            loading: false,
            error: null
        });
    } else if (action.type === FIND_COMIC_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}

export function eventReducer(state=initialState, action) {
    if (action.type === FIND_EVENT_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
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
            loading: false,
            error: null
        }); 
    } else if (action.type === SEARCH_EVENT_COMIC_SUCCESS) {
        return Object.assign({}, state, {
            eventComic: action.eventComic,
            loading: false,
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