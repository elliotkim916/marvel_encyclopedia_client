import React from 'react';
import './top-nav.css';

export default function TopNav(props) {
    return (
        <section className="top-nav">
            <nav>
                <ul>
                    <li className="nav-list-item">
                        <a 
                            href="homepage"
                            className="demo"
                            aria-label="Demo of application"
                        >
                        Demo
                        </a>
                    </li>
                    <li className="nav-list-item">
                        <a
                            href="sign-up"
                            className="sign-up"
                            aria-label="Create a new account"
                        >
                        Sign up
                        </a>    
                    </li>
                    <li className="nav-list-item">
                        <a
                            href="log-in"
                            className="log-in"
                            aria-label="Log in with existing account"
                        >
                        Log in
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}