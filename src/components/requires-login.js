import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default () => (Component) => {
  function RequiresLogin(props) {
    const { authenticating, loggedIn, error, ...passThroughProps } = props;
    if (authenticating) {
      return <div>Logging in...</div>;
    } else if (!loggedIn || error) {
      return <Redirect to="/" />;
    }
    return <Component {...passThroughProps} />;
  }

  // const displayName = Component.displayName || Component.name || 'Component';
  // console.log('display name is ' + displayName);

  // RequiresLogin.displayName = `RequiresLogin(${displayName})`;
  // console.log(typeof RequiresLogin);
  // console.log('RequiresLogin.displayName is ' + RequiresLogin.displayName);

  const mapStateToProps = (state, props) => ({
    authenticating: state.auth.loading,
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error,
  });

  return connect(mapStateToProps)(RequiresLogin);
};
