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
                    <Link to="/" className="marvel-header">Marvel Encyclopedia</Link>
                </h2>
            </header>
            <h3>Begin your Marvel journey now!</h3>
            <RegistrationForm /><br/>
            <span>Already have an account? <Link to="/login">Click here</Link></span>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);