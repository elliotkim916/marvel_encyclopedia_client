import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../../store/actions/protected-data';
import { clearAuth } from '../../store/actions/auth';
import requiresLogin from '../Login/RequiresLogin';
import Search from '../Search/Search';
import { clearAuthToken } from '../../local-storage';
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
          <DashboardItem item={item} key={item._id} />
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
    username: state.authReducer.currentUser.username,
    protectedData: state.protectedDataReducer.data.data,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
