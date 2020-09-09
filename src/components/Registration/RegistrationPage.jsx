import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import AuthHeader from '../Header/AuthHeader';
import RegistrationForm from './RegistrationForm';
import ModalCmp from '../Modal/ModalCmp';
import { clearCreateUserError } from '../../store/actions/users';
import Loading from '../Loading/Loading';
import './RegistrationPage.module.css';

const RegistrationPage = ({ loading, loggedIn, createUserError, hasError }) => {
  if (loading) {
    return <Loading loadingMessage="Creating user.." />;
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
  loggedIn: state.authReducer.currentUser !== null,
  loading: state.authReducer.loading,
  createUserError: state.userReducer.error,
  hasError: state.userReducer.hasError,
});

export default connect(mapStateToProps)(RegistrationPage);
