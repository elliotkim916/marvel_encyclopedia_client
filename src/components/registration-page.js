import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <header>
                <h2><Link to="/">Marvel Encyclopedia</Link></h2>
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