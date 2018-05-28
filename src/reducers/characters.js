import {
    SEARCH_CHARACTER_REQUEST,
    SEARCH_CHARACTER_SUCCESS,
    SEARCH_CHARACTER_COMIC_SUCCESS,
    SEARCH_CHARACTER_EVENT_SUCCESS,
    SEARCH_CHARACTER_ERROR
} from '../actions/characters';

const initialState = {
    searchedCharacter: {},
    searchedCharacterComic: [],
    searchedCharacterEvent: [],
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