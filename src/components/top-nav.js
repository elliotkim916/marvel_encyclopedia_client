import React from 'react';
import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul>
                <li>
                    <a 
                        href="#demo"
                        className="demo"
                        aria-label="Demo of application"
                    >
                    Demo
                    </a>
                </li>
                <li>
                    <a
                        href="#sign-up"
                        className="sign-up"
                        aria-label="Create a new account"
                    >
                    Sign up
                    </a>    
                </li>
                <li>
                    <a
                        href="#log-in"
                        className="log-in"
                        aria-label="Log in with existing account"
                    >
                    Log in
                    </a>
                </li>
            </ul>
        </nav>
    );
}