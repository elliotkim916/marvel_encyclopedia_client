import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';
import './registration-page.css';

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="login-page">
            <header>
                <h2 className="marvel-header">
                    <Link to="/" className="marvel-header">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/2000px-MarvelLogo.svg.png"
                            alt="Marvel Encyclopedia"
                            className="register-logo"
                            /> <span className="second-word">ENCYCLOPEDIA</span></Link>
                </h2>
            </header>
            <h3 className="second-header">Begin your Marvel journey now!</h3>
            <RegistrationForm /><br/>
            <span className="existing-acct">Already have an account? <Link to="/login" className="click-here">Click here</Link></span>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);