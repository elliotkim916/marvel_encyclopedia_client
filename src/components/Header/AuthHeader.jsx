import React from 'react';
import { Link } from 'react-router-dom';
import '../Registration/RegistrationPage.module.css';

const AuthHeader = ({ auth }) => {
  return (
    <header>
      <h2>
        <Link to="/" className="marvel-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/2000px-MarvelLogo.svg.png"
            alt="Marvel Encyclopedia"
            className="register-logo"
          />{' '}
          <span className="second-word">ENCYCLOPEDIA</span>
        </Link>
      </h2>

      {auth === 'registration' && (
        <h3 className="second-header">Begin your Marvel journey now!</h3>
      )}
    </header>
  );
};

export default AuthHeader;
