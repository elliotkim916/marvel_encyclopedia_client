import React from 'react';
import './sign-up.css';

export default function SignUp(props) {
    return (
        <section id="sign-up">
            <header>
                <h3>Being your Marvel journey now!</h3>
            </header>

            <form class="signup-form">
                <div>
                    <input type="text" placeholder="Enter username" name="username" />
                </div>
                <div>
                    <input type="password" placeholder="Enter password" name="password" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
      </section>
    )
}