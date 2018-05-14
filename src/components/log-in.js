import React from 'react';
import './log-in.css';

export default function LogIn(props) {
    return (
        <section id="log-in">
            <header>
                <h2>Marvel Encyclopedia</h2>
            </header>

            <form className="login-form">
                <h3>Log in</h3>
                <div>
                    <input type="text" placeholder="Enter username" name="username" />
                </div>
                <div>
                    <input type="password" placeholder="Enter password" name="password" />
                </div>
                <button type="submit">LOG IN</button><br />
                <span>Don't have an account? <a href="/sign-up">Sign up here</a></span>
            </form>
      </section>
    )
}