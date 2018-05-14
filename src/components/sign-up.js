import React from 'react';
import './sign-up.css';

export default function SignUp(props) {
    return (
        <section id="sign-up">
            <header>
                <h2>Marvel Encyclopedia</h2>
            </header>

            <form className="signup-form">
                <h3>Begin your Marvel journey now!</h3>
                <div>
                    <input type="text" placeholder="Enter username" name="username" />
                </div>
                <div>
                    <input type="password" placeholder="Enter password" name="password" />
                </div>
                <button type="submit">Sign Up</button><br />
                <span>Already have an account? <a href="/log-in">Log in here</a></span>
            </form>
      </section>
    )
}