import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TopNav from './TopNav/TopNav';
import InfoSection from './InfoSection/InfoSection';

const LandingPage = () => {
  const loggedIn = useSelector((state) => state.auth.currentUser !== null);

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

export default LandingPage;
