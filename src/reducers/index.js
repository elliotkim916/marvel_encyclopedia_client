import {
    SEARCH_CHARACTER_REQUEST,
    SEARCH_CHARACTER_SUCCESS,
    SEARCH_CHARACTER_ERROR,
    FIND_COMIC_REQUEST,
    FIND_COMIC_SUCCESS,
    FIND_COMIC_ERROR
} from '../actions';

const initialState = {
    character: {},
    comic: {},
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
            character: action.character,
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
            comic: action.comic,
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