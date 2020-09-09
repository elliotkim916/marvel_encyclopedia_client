import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loadAuthToken } from '../shared/local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';
// import logger from 'redux-logger';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import userReducer from './reducers/users';
import characterReducer from './reducers/characters';
import comicReducer from './reducers/comics';
import eventReducer from './reducers/events';

const store = createStore(
  combineReducers({
    characterReducer,
    comicReducer,
    eventReducer,
    userReducer,
    protectedDataReducer,
    authReducer,
  }),
  // applyMiddleware(thunk, logger)
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
