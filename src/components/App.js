import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Dashboard from './Dashboard/Dashboard';
import RegistrationPage from './registration-page';
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './login-page';
import SearchResults from './search-results';
import Comic from './Comic/Comic';
import Event from './event';
import { refreshAuthToken } from '../actions/auth';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <main>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/register" component={RegistrationPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/search-results" component={SearchResults} />
              <Route exact path="/event" component={Event} />
              <Route exact path="/comic" component={Comic} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(App);
