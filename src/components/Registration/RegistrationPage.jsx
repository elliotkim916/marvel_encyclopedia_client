import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import AuthHeader from '../Header/AuthHeader';
import RegistrationForm from './RegistrationForm';
import ModalCmp from '../Modal/ModalCmp';
import { clearCreateUserError } from '../../store/actions/users';
import './RegistrationPage.module.css';

const RegistrationPage = ({ loading, loggedIn, createUserError, hasError }) => {
  if (loading) {
    return (
      <div className="account_loader">
        <h3 className="loading_message">Creating account..</h3>
        <div className="spinner"></div>
      </div>
    );
  }

  if (createUserError) {
    return (
      <ModalCmp
        message="Username already exists, please try a different username."
        buttonText="Okay"
        modalState={hasError}
        modalFunction={clearCreateUserError}
      />
    );
  }

  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-page">
      <AuthHeader auth="registration" />
      <RegistrationForm />

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
  createUserError: state.userReducer.error,
  hasError: state.userReducer.hasError,
});

export default connect(mapStateToProps)(RegistrationPage);
