import {
    GET_NOTES_SUCCESS,
    GET_NOTES_ERROR,
    ADD_NEW_NOTES_SUCCESS,
    DELETE_NOTES_SUCCESS,
    UPDATE_NOTES_SUCCESS
} from '../actions/notes';

const initialState = {
    notes: '',
    addNewNotes: '',
    updateNotes: '',
    isEditing: false,
    error: null
}

export default function notesReducer(state=initialState, action) {
    if (action.type === GET_NOTES_SUCCESS) {
        return Object.assign({}, state, {
            notes: action.protected,
            error: null
        });
    } else if (action.type === UPDATE_NOTES_SUCCESS) {
        return Object.assign({}, state, {
            updateNotes: action.updateNotes,
            isEditing: action.isEditing,
            error: action.error
        })
    } else if (action.type === ADD_NEW_NOTES_SUCCESS) {
        return Object.assign({}, state, {
            addNewNotes: action.addNewNotes,
            error: null
        });
    } else if (action.type === DELETE_NOTES_SUCCESS) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === GET_NOTES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}