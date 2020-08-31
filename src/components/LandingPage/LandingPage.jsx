import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TopNav from './TopNav/TopNav';
import InfoSection from './InfoSection/InfoSection';

const LandingPage = ({ loggedIn }) => {
  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section>
      <TopNav />
      <InfoSection />
    </section>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(LandingPage);
