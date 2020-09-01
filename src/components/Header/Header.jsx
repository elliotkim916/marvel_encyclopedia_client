import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import '../Comic/Comic.module.css';

const Header = ({ dispatch }) => {
  const logOut = () => {
    dispatch(clearAuth());
    clearAuthToken();
  };

  return (
    <React.Fragment>
      <a href="dashboard" className="back-home-from-comic">
        Home
      </a>
      <a href="/" className="log-out-from-comic" onClick={() => logOut()}>
        Log Out
      </a>
    </React.Fragment>
  );
};

export default connect()(Header);
