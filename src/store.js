import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {characterReducer} from './reducers';

export default createStore(
    characterReducer,
    applyMiddleware(thunk)
);

// createStore adds characterReducer to our store, and uses applyMiddleware to add Redux Thunk to our store too 

// Redux Thunk allows action creators to return functions to be run
// The functions can run asynchronous code like our AJAX request

// Redux Thunk allows you to create async actions