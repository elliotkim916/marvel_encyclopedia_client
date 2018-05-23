import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const getNotesSuccess = notes => ({
    type: GET_NOTES_SUCCESS,
    protected: notes
});

export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';
export const getNotesError = error => ({
    type: GET_NOTES_ERROR,
    error
});

export const ADD_NEW_NOTES_SUCCESS = 'ADD_NEW_NOTES_SUCCESS';
export const addNewNotesSuccess = addNewNotes => ({
    type: ADD_NEW_NOTES_SUCCESS,
    addNewNotes
});

export const DELETE_NOTES_SUCCESS = 'DELETE_NOTES_SUCCESS';
export const deleteNotesSuccess = error => ({
    type: DELETE_NOTES_SUCCESS,
    error
});

export const UPDATE_NOTES_SUCCESS = 'UPDATE_NOTES_SUCCESS';
export const updateNotesSuccess = updateNotes => ({
    type: UPDATE_NOTES_SUCCESS,
    updateNotes
});