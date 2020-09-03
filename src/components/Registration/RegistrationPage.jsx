import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import AuthHeader from '../Header/AuthHeader';
import RegistrationForm from './RegistrationForm';
import './RegistrationPage.module.css';

const RegistrationPage = ({ loading, loggedIn, dispatch }) => {
  if (loading) {
    return (
      <div className="account_loader">
        <h3 className="loading_message">Creating account..</h3>
        <div className="spinner"></div>
      </div>
    );
  }

  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-page">
      <AuthHeader auth="registration" />
      <RegistrationForm dispatch={dispatch} />
      <br />

      <span className="existing-acct">
        Already have an account?{' '}
        <Link to="/login" className="click-here">
          Click here
        </Link>
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null,
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(RegistrationPage);
