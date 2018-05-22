import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    protected: data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const ADD_PROTECTED_DATA_SUCCESS = 'ADD_PROTECTED_DATA_SUCCESS';
export const addProtectedDataSuccess = addComicData => ({
    type: ADD_PROTECTED_DATA_SUCCESS,
    addComicData
});

export const DELETE_PROTECTED_DATA_SUCCESS = 'DELETE_PROTECTED_DATA_SUCCESS';
export const deleteProtectedDataSuccess = error => ({
    type: DELETE_PROTECTED_DATA_SUCCESS,
    error
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const username = getState().auth.currentUser.username;
    const headers =  {
        Authorization: `Bearer ${authToken}`
    }

    return fetch(`${window.api_url}/marvel/${username}`, {
        headers,
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const addData = (title, read, imgUrl, resourceURI, username) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const username = getState().auth.currentUser.username;
    const data = JSON.stringify({
        title: title,
        read: read,
        imgUrl: imgUrl,
        resourceURI: resourceURI,
        username: username
    });
    const headers = {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': `application/json`
    };

    return fetch(`${window.api_url}/marvel/${username}`, {
        headers,
        method: 'POST',
        body: data
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(addProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
    });
};

export const deleteData = _id => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const url = `${API_BASE_URL}/marvel/` + _id;
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
    .then((data) => dispatch(deleteProtectedDataSuccess(data)))
    .then(window.location.reload())
    .catch(err => {
        dispatch(fetchProtectedDataError(err))
    });
};
