import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import TopNav from './top-nav';
import InfoSection from './info-section';

export function LandingPage(props) {
  // If we are logged in, redirect straight to user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section>
      <TopNav />
      <InfoSection />
    </section>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);