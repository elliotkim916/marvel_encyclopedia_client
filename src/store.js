import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {characterReducer} from './reducers/characters';
import {comicReducer} from './reducers/comics';
import {eventReducer} from './reducers/events';

const store = createStore(
    combineReducers({
        characterReducer: characterReducer,
        comicReducer: comicReducer,
        eventReducer: eventReducer,
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer
    }),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

// store.dispatch(setAuthToken(token)) - lets React Application know you the user are authorized to use application
// store.dispatch(refreshAuthToken()) - gives user new auth token NOW while the refreshAuthToken function in App.js gives user new authToken every hour
// store is the first thing thats loaded
export default store;

// formReducer keeps the values of our form fields updated within the state & keeps track of
// information like whether we've submitted the form & if the contents of the form are valid

// createStore adds characterReducer to our store, and uses applyMiddleware to add Redux Thunk to our store too 

// Redux Thunk allows action creators to return functions to be run
// The functions can run asynchronous code like our AJAX request

// Redux Thunk allows you to create async actions