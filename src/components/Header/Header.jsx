import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAuth } from '../../store/actions/auth';
import { clearAuthToken } from '../../shared/local-storage';
import '../Comic/Comic.module.css';

const Header = () => {
  const dispatch = useDispatch();
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

export default Header;
