import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    ADD_PROTECTED_DATA_SUCCESS,
    DELETE_PROTECTED_DATA_SUCCESS
} from '../actions/protected-data';

const initialState = {
    data: '',
    addComicData: '',
    error: null
};

export default function protectedDataReducer(state=initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.protected,
            error: null
        });
    } else if (action.type === ADD_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            addComicData: action.addComicdata,
            error: null
        });
    } else if (action.type === DELETE_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: state.data.filter(comic => comic._id !== action.id),
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}