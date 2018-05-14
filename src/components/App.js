import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import LandingPage from './landing-page';
import SignUp from './sign-up';
import LogIn from './log-in';
import SearchResults from './search-results';
import Homepage from './homepage';
import Comic from './comic';
import Event from './event';

export default function App(props) {
    return (
      <Router history={history}>
        <div className="App">
          <main>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/log-in" component={LogIn} />
              <Route exact path="/homepage" component={Homepage} />
              <Route exact path="/search-results" component={SearchResults} />
              <Route exact path="/event" component={Event} />  
              <Route exact path="/comic" component={Comic} />   
            </Switch> 
          </main>
        </div>
      </Router>
    );
  }

