import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import './registration-page.css';

export function LoginPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="login-page">
            <header>
                <h2>
                    <Link to="/" className="marvel-header">Marvel Encyclopedia</Link>
                </h2>
            </header>
            <LoginForm />
            <span className="register-redirect">Don't have an account? <a href="/register">Sign up here</a></span>
        </div>
    )
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);