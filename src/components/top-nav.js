import React from 'react';
import {Link} from 'react-router-dom';
import './top-nav.css';

export default function TopNav(props) {
    return (
        <section>
            <nav>
                <ul className="top-nav">
                    <li className="nav-list-item">
                        <Link 
                            to="/demo" 
                            className="demo"
                            aria-label="Demo of application"
                        >
                        Demo
                        </Link>
                    </li>
                    <li className="nav-list-item">
                        <Link
                            to="/register"
                            className="sign-up"
                            aria-label="Create a new account"
                        >
                        Sign up
                        </Link>    
                    </li>
                    <li className="nav-list-item">
                        <Link
                            to="/login"
                            className="log-in"
                            aria-label="Log in with existing account"
                        >
                        Log in
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
}