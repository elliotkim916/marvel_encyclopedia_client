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

export const getNotesData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const username = getState().auth.currentUser.username;
    const headers = {
        Authorization: `Bearer ${authToken}`
    }

    return fetch(`${API_BASE_URL}/notes/${username}`, {
        headers,
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(getNotesSuccess(data)))
        .catch(err => {
            dispatch(getNotesError(err));
        });
};

export const addNotesData = (title, note, username) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const username = getState().auth.currentUser.username;
    const data = JSON.stringify({
        title: title,
        note: note,
        username: username
    });
    const headers = {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': `application/json`
    };

    return fetch(`${API_BASE_URL}/notes/${username}`, {
        headers,
        method: 'POST',
        body: data
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(addNewNotesSuccess(data)))
        .catch(err => {
            dispatch(getNotesError(err));
        });
};

export const deleteNotesData = _id => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const url = `${API_BASE_URL}/notes/` + _id;
    const headers = {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': `application/json`
    };
    return fetch(`${url}`, {
        headers,
        method: 'DELETE'
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => dispatch(deleteNotesSuccess(data)))
    .then(window.location.reload())
    .catch(err => {
        dispatch(getNotesError(err))
    });
};