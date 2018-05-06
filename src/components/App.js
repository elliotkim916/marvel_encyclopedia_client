import React from 'react';
import LandingPage from './landing-page';
import SignUp from './sign-up';
import SearchResults from './search-results';
import Homepage from './homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App(props) {
    return (
      <Router>
        <div className="App">
          <main>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/homepage" component={Homepage} />
              <Route exact path ="/search-results" component={SearchResults} />     
            </Switch> 
          </main>
        </div>
      </Router>
    );
  }

