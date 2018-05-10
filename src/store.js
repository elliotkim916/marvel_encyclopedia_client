import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import {characterReducer, comicReducer, eventReducer} from './reducers';

export default createStore(
    combineReducers({
        character: characterReducer,
        comic: comicReducer,
        event: eventReducer
    }),
    applyMiddleware(thunk)
);

// createStore adds characterReducer to our store, and uses applyMiddleware to add Redux Thunk to our store too 

// Redux Thunk allows action creators to return functions to be run
// The functions can run asynchronous code like our AJAX request

// Redux Thunk allows you to create async actions