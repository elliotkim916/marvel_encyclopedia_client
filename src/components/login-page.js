import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import './registration-page.css';

export function LoginPage(props) {
	if (props.loading) {
		return 	<div className="account_loader">
							<h3 className="loading_message">Logging in..</h3>
							<div className="loader"></div>
						</div>
	}

	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div className="login-page">
			<header>
				<h2>
					<Link to="/" className="marvel-header">    
					<img 
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/2000px-MarvelLogo.svg.png"
							alt="Marvel Encyclopedia"
							className="register-logo"
							/> <span className="second-word">ENCYCLOPEDIA</span>
					</Link>
				</h2>
			</header>
			<LoginForm />
			<span className="register-redirect">Don't have an account? <Link to="/register" className="click-here">Sign up here</Link></span>
			<div className="demo-container">
				<h3>Demo Account</h3>
				<p className="demo-username">Username: demouser</p>
				<p className="demo-password">Password: demopassword</p>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	loading: state.auth.loading
});

export default connect(mapStateToProps)(LoginPage);