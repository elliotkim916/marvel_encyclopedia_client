import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Dashboard from './components/Dashboard/Dashboard';
import RegistrationPage from './components/Registration/RegistrationPage';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/Login/LoginPage';
import SearchResults from './components/SearchResults/SearchResults';
import Comic from './components/Comic/Comic';
import Event from './components/Event/Event';
import { refreshAuthToken } from './store/actions/auth';

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
              <Route
                exact
                path="/"
                component={(props) => <LandingPage {...props} />}
              />
              <Route
                exact
                path="/register"
                component={(props) => <RegistrationPage {...props} />}
              />
              <Route
                exact
                path="/login"
                component={(props) => <LoginPage {...props} />}
              />
              <Route
                exact
                path="/dashboard"
                component={(props) => <Dashboard {...props} />}
              />
              <Route
                exact
                path="/search-results"
                component={(props) => <SearchResults {...props} />}
              />
              <Route
                exact
                path="/event"
                component={(props) => <Event {...props} />}
              />
              <Route
                exact
                path="/comic"
                component={(props) => <Comic {...props} />}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  hasAuthToken: state.authReducer.authToken !== null,
  loggedIn: state.authReducer.currentUser !== null,
});

export default connect(mapStateToProps)(App);
