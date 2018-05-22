import {
    MARVEL_API_BASE_URL, 
    MARVEL_CHARACTERS_ENDPOINT,
    PUBLIC_KEY,
    TS,
    HASH
} from '../config';
import history from '../history';

export const FIND_EVENT_REQUEST = 'FIND_EVENT_REQUEST';
export const findEventRequest = () => ({
    type: FIND_EVENT_REQUEST
});

export const FIND_EVENT_SUCCESS = 'FIND_EVENT_SUCCESS';
export const findEventSuccess = event => ({
    type: FIND_EVENT_SUCCESS,
    event
});

export const FIND_EVENT_ERROR = 'FIND_EVENT_ERROR';
export const findEventError = error => ({
    type: FIND_EVENT_ERROR,
    error
});

function searchEvent(URI) {
    return fetch(`${URI.slice(5)}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results[0]);
}

export const findEvent = URI => dispatch => {
    dispatch(findEventRequest());
    searchEvent(URI)
        .then(event => {
            dispatch(findEventSuccess(event))
            dispatch(findEventCharacter(event.id))
            dispatch(findEventComic(event.id))
        })
        .then(response => {
            history.push('/event')
        })
        .catch(error => dispatch(findEventError(error)));
};

export const FIND_COMIC_REQUEST = 'FIND_COMIC_REQUEST';
export const findComicRequest = () => ({
    type: FIND_COMIC_REQUEST
});

export const FIND_COMIC_SUCCESS = 'FIND_COMIC_SUCCESS';
export const findComicSuccess = comic => ({
    type: FIND_COMIC_SUCCESS,
    comic
});

export const FIND_COMIC_ERROR = 'SEARCH_COMIC_ERROR';
export const findComicError = error => ({
    type: FIND_COMIC_ERROR,
    error
});

function searchComic(URI) {
    return fetch(`${URI.slice(5)}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results[0]);
}

export const findComic = URI => dispatch => {
    dispatch(findComicRequest());
    searchComic(URI)
        .then(comic => {
            dispatch(findComicSuccess(comic))
            dispatch(findComicCharacter(comic.id))
        })
        .then(response => {
            history.push('/comic')
        })
        .catch(error => dispatch(findComicError(error)));
};

export const FIND_COMIC_CHARACTER_REQUEST = 'FIND_COMIC_CHARACTER_REQUEST';
export const findComicCharacterRequest = () => ({
    type: FIND_COMIC_CHARACTER_REQUEST
});

export const FIND_COMIC_CHARACTER_SUCCESS = 'FIND_COMIC_CHARACTER_SUCCESS';
export const findComicCharacterSuccess = comicCharacter => ({
    type: FIND_COMIC_CHARACTER_SUCCESS,
    comicCharacter
});

export const FIND_COMIC_CHARACTER_ERROR = 'FIND_COMIC_CHARACTER_ERROR';
export const findComicCharacterError = error => ({
    type: FIND_COMIC_CHARACTER_ERROR,
    error
});

function searchComicCharacter(id) {
    return fetch(`${MARVEL_API_BASE_URL}public/comics/${id}/characters?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results)
}

export const findComicCharacter = id => dispatch => {
    dispatch(findComicCharacterRequest());
    searchComicCharacter(id)
        .then(comicId => {
            console.log(comicId);
            dispatch(findComicCharacterSuccess(comicId))
        })
        .catch(error => dispatch(findComicCharacterError(error)));
}

export const SEARCH_CHARACTER_REQUEST = 'SEARCH_CHARACTER_REQUEST';
export const searchCharacterRequest = () => ({
    type: SEARCH_CHARACTER_REQUEST
});

export const SEARCH_CHARACTER_SUCCESS = 'SEARCH_CHARACTER_SUCCESS';
export const searchCharacterSuccess = character => ({
    type: SEARCH_CHARACTER_SUCCESS,
    character
});

export const SEARCH_CHARACTER_ERROR = 'SEARCH_CHARACTER_ERROR';
export const searchCharacterError = error => ({
    type: SEARCH_CHARACTER_ERROR,
    error
});

function search(name) {
    return fetch(`${MARVEL_API_BASE_URL}${MARVEL_CHARACTERS_ENDPOINT}?ts=${TS}&name=${name}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results[0])   
}

export const searchCharacter = name => dispatch => {
    dispatch(searchCharacterRequest());
    search(name)
        .then(character => dispatch(searchCharacterSuccess(character)))
        .then(character => {
            dispatch(findCharacterComic(character.character.id))
            dispatch(findCharacterEvent(character.character.id))
        })
        .then(response => {
            history.push('/search-results')
        })
        .catch(error => dispatch(searchCharacterError(error)));
};

// these actions are dispatched within the async searchCharacter action
export const SEARCH_CHARACTER_COMIC_REQUEST = 'SEARCH_CHARACTER_COMIC_REQUEST';
export const searchCharacterComicRequest = () => ({
    type: SEARCH_CHARACTER_COMIC_REQUEST
});

export const SEARCH_CHARACTER_COMIC_SUCCESS = 'SEARCH_CHARACTER_COMIC_SUCCESS';
export const searchCharacterComicSuccess = characterComic => ({
    type: SEARCH_CHARACTER_COMIC_SUCCESS,
    characterComic
});

export const SEARCH_CHARACTER_COMIC_ERROR = 'SEARCH_CHARACTER_COMIC_ERROR';
export const searchCharacterComicError = error => ({
    type: SEARCH_CHARACTER_COMIC_ERROR,
    error
});

function searchCharacterComic(id) {
    return fetch(`${MARVEL_API_BASE_URL}${MARVEL_CHARACTERS_ENDPOINT}/${id}/comics?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results);
}

export const findCharacterComic = id => dispatch => {
    dispatch(searchCharacterComicRequest());
    searchCharacterComic(id)
        .then(characterId => dispatch(searchCharacterComicSuccess(characterId)))
        .catch(error => dispatch(searchCharacterComicError(error)));
};

export const SEARCH_CHARACTER_EVENT_REQUEST = 'SEARCH_CHARACTER_EVENT_REQUEST';
export const searchCharacterEventRequest = () => ({
    type: SEARCH_CHARACTER_EVENT_REQUEST
});

export const SEARCH_CHARACTER_EVENT_SUCCESS = 'SEARCH_CHARACTER_EVENT_SUCCESS';
export const searchCharacterEventSuccess = characterEvent => ({
    type: SEARCH_CHARACTER_EVENT_SUCCESS,
    characterEvent
});

export const SEARCH_CHARACTER_EVENT_ERROR = 'SEARCH_CHARACTER_EVENT_ERROR';
export const searchCharacterEventError = error => ({
    type: SEARCH_CHARACTER_EVENT_ERROR,
    error
});

function searchCharacterEvent(id) {
    return fetch(`${MARVEL_API_BASE_URL}${MARVEL_CHARACTERS_ENDPOINT}/${id}/events?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results);
}

export const findCharacterEvent = id => dispatch => {
    dispatch(searchCharacterEventRequest());
    searchCharacterEvent(id)
        .then(characterId => dispatch(searchCharacterEventSuccess(characterId)))
        .catch(error => dispatch(searchCharacterEventError(error)));
};

// finding character through clicking on event from event list
export const SEARCH_EVENT_CHARACTER_REQUEST = 'SEARCH_EVENT_CHARACTER_REQUEST';
export const searchEventCharacterRequest = () => ({
    type: SEARCH_EVENT_CHARACTER_REQUEST
});

export const SEARCH_EVENT_CHARACTER_SUCCESS = 'SEARCH_EVENT_CHARACTER_SUCCESS';
export const searchEventCharacterSuccess = eventCharacter => ({
    type: SEARCH_EVENT_CHARACTER_SUCCESS,
    eventCharacter
});

export const SEARCH_EVENT_CHARACTER_ERROR = 'SEARCH_EVENT_CHARACTER_ERROR';
export const searchEventCharacterError = error => ({
    type: SEARCH_EVENT_CHARACTER_ERROR,
    error
});

function searchEventCharacter(id) {
    return fetch(`${MARVEL_API_BASE_URL}/public/events/${id}/characters?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results);
}

export const findEventCharacter = id => dispatch => {
    dispatch(searchEventCharacterRequest());
    searchEventCharacter(id)
        .then(eventId => dispatch(searchEventCharacterSuccess(eventId)))
        .catch(error => dispatch(searchEventCharacter(error)));
};

export const SEARCH_EVENT_COMIC_REQUEST = 'SEARCH_EVENT_COMIC_REQUEST';
export const searchEventComicRequest = () => ({
    type: SEARCH_EVENT_COMIC_REQUEST
});

export const SEARCH_EVENT_COMIC_SUCCESS = 'SEARCH_EVENT_COMIC_SUCCESS';
export const searchEventComicSuccess = eventComic => ({
    type: SEARCH_EVENT_COMIC_SUCCESS,
    eventComic
});

export const SEARCH_EVENT_COMIC_ERROR = 'SEARCH_EVENT_COMIC_ERROR';
export const searchEventComicError = error => ({
    type: SEARCH_EVENT_COMIC_ERROR,
    error
});

function searchEventComic(id) {
    return fetch(`${MARVEL_API_BASE_URL}/public/events/${id}/comics?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.data.results);
}

export const findEventComic = id => dispatch => {
    dispatch(searchEventComicRequest())
    searchEventComic(id)
        .then(comicId => dispatch(searchEventComicSuccess(comicId)))
        .catch(error => dispatch(searchEventComicError(error)));
};

// Because this is an async action, rather than return an object from the action creator,
// we return a callback function.  When the action is dispatched, this function will be called by Redux Thunk,
// which passes in the dispatch method

//fetch in action to server-side