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

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const headers =  {
        Authorization: `Bearer ${authToken}`
    }

    return fetch(`${API_BASE_URL}/marvel`, {
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

export const addData = (title, read, imgUrl, resourceURI) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const data = JSON.stringify({
        title: title,
        read: read,
        imgUrl: imgUrl,
        resourceURI: resourceURI
    });
    const headers = {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': `application/json`
    };

    return fetch(`${API_BASE_URL}/marvel`, {
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
