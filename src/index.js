import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './components/sign-up';
import SearchResults from './components/search-results';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/landing-page' component={App} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/search-results' component={SearchResults} />
        </Switch>
    </Router>, 
    document.getElementById('root')
);


