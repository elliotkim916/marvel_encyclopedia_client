import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import AuthHeader from '../Header/AuthHeader';
import LoginForm from './LoginForm';
import LoginDemoAccount from './LoginDemoAccount';
import ModalCmp from '../Modal/ModalCmp';
import { clearAuthError } from '../../store/actions/auth';
import '../Registration/RegistrationPage.module.css';

const LoginPage = ({ loading, loggedIn, loginError, hasError, dispatch }) => {
  if (loading) {
    return (
      <div className="account_loader">
        <h3 className="loading_message">Logging in..</h3>
        <div className="spinner"></div>
      </div>
    );
  }

  if (loginError) {
    return (
      <ModalCmp
        message="Login failed due to incorrect username or password."
        buttonText="Okay"
        modalState={hasError}
        modalFunction={clearAuthError}
      />
    );
  }

  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-page">
      <AuthHeader />
      <LoginForm dispatch={dispatch} />

      <span className="register-redirect">
        Don't have an account?{' '}
        <Link to="/register" className="click-here">
          Sign up here
        </Link>
      </span>

      <LoginDemoAccount />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null,
  loading: state.auth.loading,
  loginError: state.auth.error,
  hasError: state.auth.hasError,
});

export default connect(mapStateToProps)(LoginPage);
