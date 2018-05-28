import {
    FIND_COMIC_REQUEST,
    FIND_COMIC_SUCCESS,
    FIND_COMIC_CHARACTER_SUCCESS,
    FIND_COMIC_ERROR
} from '../actions/comics';

const initialState = {
    clickedComic: {},
    comicCharacter: [],
    loading: false,
    error: null
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