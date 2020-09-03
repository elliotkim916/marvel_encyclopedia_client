import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../../actions/protected-data';
import requiresLogin from '../requires-login';
import Search from '../Search/Search';
import { clearAuthToken } from '../../local-storage';
import { clearAuth } from '../../actions/auth';
import DashboardItem from './DashboardItem';
import ironman_icon from '../../images/ironman_icon.png';
import './Dashboard.module.css';

const Dashboard = ({ dispatch, username, protectedData }) => {
  useEffect(() => {
    dispatch(fetchProtectedData());
  }, []);

  const logOut = (e) => {
    e.preventDefault();
    dispatch(clearAuth());
    clearAuthToken();
  };

  const renderResults = () => {
    if (protectedData) {
      if (protectedData.length > 0) {
        const results = protectedData.map((item) => (
          <DashboardItem dispatch={dispatch} item={item} key={item._id} />
        ));

        return (
          <React.Fragment>
            <div className="lines">
              <p className="protected-data-header">YOUR READ & UNREAD COMICS</p>
            </div>
            <div className="dashboard-protected-data">{results}</div>
          </React.Fragment>
        );
      }
    }
  };

  return (
    <div className="dashboard">
      <a href="/" className="log-out" onClick={(e) => logOut(e)}>
        Log Out
      </a>

      <Search />
      <br />

      <img src={ironman_icon} alt="Iron Man Icon" className="ironman-icon" />
      <div className="dashboard-username">
        Welcome {username.charAt(0).toUpperCase() + username.slice(1)}!
      </div>

      {renderResults()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.currentUser.username,
    protectedData: state.protectedData.data.data,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));