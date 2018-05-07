import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//import {createStore} from 'redux';
import store from './store';
import {Provider} from 'react-redux';

// const store = createStore(state => state, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


